define
(
    ["model/base", "model/Assets", "model/Common", "model/Core"],
    /**
     * The package is used to define asset-level models for objects.
     *
     * Assets may be comprised of other assets and may have relationships to other assets. Assets also have owners and values. Assets may also have a relationship to a PowerSystemResource in the Wires model.
     *
     */
    function (base, Assets, Common, Core)
    {

        /**
         * Kind of fill for Joint.
         *
         */
        var JointFillKind =
        {
            noFillPrefab: "noFillPrefab",
            airNoFilling: "airNoFilling",
            petrolatum: "petrolatum",
            asphaltic: "asphaltic",
            oil: "oil",
            bluefill254: "bluefill254",
            noVoid: "noVoid",
            epoxy: "epoxy",
            insoluseal: "insoluseal",
            other: "other"
        };
        Object.freeze (JointFillKind);

        /**
         * Insulation kind for bushings.
         *
         */
        var BushingInsulationKind =
        {
            paperoil: "paperoil",
            compound: "compound",
            solidPorcelain: "solidPorcelain",
            other: "other"
        };
        Object.freeze (BushingInsulationKind);

        /**
         * Kind of anchor.
         *
         */
        var AnchorKind =
        {
            concrete: "concrete",
            helix: "helix",
            multiHelix: "multiHelix",
            rod: "rod",
            screw: "screw",
            unknown: "unknown",
            other: "other"
        };
        Object.freeze (AnchorKind);

        /**
         * Kind of treatment for poles.
         *
         */
        var PoleTreatmentKind =
        {
            full: "full",
            butt: "butt",
            natural: "natural",
            grayStain: "grayStain",
            greenStain: "greenStain",
            penta: "penta",
            unknown: "unknown",
            other: "other"
        };
        Object.freeze (PoleTreatmentKind);

        /**
         * Kind of cooling.
         *
         */
        var CoolingKind =
        {
            selfCooling: "selfCooling",
            forcedAir: "forcedAir",
            forcedOilAndAir: "forcedOilAndAir",
            other: "other"
        };
        Object.freeze (CoolingKind);

        /**
         * Kind of structure support.
         *
         */
        var StructureSupportKind =
        {
            anchor: "anchor",
            guy: "guy"
        };
        Object.freeze (StructureSupportKind);

        /**
         * Preservative kind for poles.
         *
         */
        var PolePreservativeKind =
        {
            creosote: "creosote",
            cellon: "cellon",
            naphthena: "naphthena",
            penta: "penta",
            chemonite: "chemonite",
            unknown: "unknown",
            other: "other"
        };
        Object.freeze (PolePreservativeKind);

        /**
         * Kind of configuration for joints.
         *
         */
        var JointConfigurationKind =
        {
            wires3to1: "wires3to1",
            wires2to1: "wires2to1",
            wires1to1: "wires1to1",
            other: "other"
        };
        Object.freeze (JointConfigurationKind);

        /**
         * Kind of tower construction.
         *
         */
        var TowerConstructionKind =
        {
            suspension: "suspension",
            tension: "tension"
        };
        Object.freeze (TowerConstructionKind);

        /**
         * Kind of lamp for the streetlight.
         *
         */
        var StreetlightLampKind =
        {
            highPressureSodium: "highPressureSodium",
            mercuryVapor: "mercuryVapor",
            metalHalide: "metalHalide",
            other: "other"
        };
        Object.freeze (StreetlightLampKind);

        /**
         * Kind of PF test for bushing insulation.
         *
         */
        var BushingInsulationPfTestKind =
        {
            c1: "c1",
            c2: "c2"
        };
        Object.freeze (BushingInsulationPfTestKind);

        /**
         * Kind of FACTS device.
         *
         */
        var FACTSDeviceKind =
        {
            svc: "svc",
            statcom: "statcom",
            tcpar: "tcpar",
            tcsc: "tcsc",
            tcvl: "tcvl",
            tsbr: "tsbr",
            tssc: "tssc",
            upfc: "upfc"
        };
        Object.freeze (FACTSDeviceKind);

        /**
         * Kind of medium.
         *
         */
        var MediumKind =
        {
            gas: "gas",
            liquid: "liquid",
            solid: "solid"
        };
        Object.freeze (MediumKind);

        /**
         * Kind of underground structure.
         *
         */
        var UndergroundStructureKind =
        {
            burd: "burd",
            enclosure: "enclosure",
            handhole: "handhole",
            manhole: "manhole",
            pad: "pad",
            subsurfaceEnclosure: "subsurfaceEnclosure",
            trench: "trench",
            tunnel: "tunnel",
            vault: "vault",
            pullbox: "pullbox"
        };
        Object.freeze (UndergroundStructureKind);

        /**
         * Kind of base for poles.
         *
         */
        var PoleBaseKind =
        {
            asphalt: "asphalt",
            cement: "cement",
            dirt: "dirt",
            unknown: "unknown",
            other: "other"
        };
        Object.freeze (PoleBaseKind);

        /**
         * How the failure has been isolated.
         *
         */
        var FailureIsolationMethodKind =
        {
            breakerOperation: "breakerOperation",
            fuse: "fuse",
            burnedInTheClear: "burnedInTheClear",
            manuallyIsolated: "manuallyIsolated",
            other: "other"
        };
        Object.freeze (FailureIsolationMethodKind);

        /**
         * Kind of material used for structures.
         *
         */
        var StructureMaterialKind =
        {
            wood: "wood",
            steel: "steel",
            concrete: "concrete",
            other: "other"
        };
        Object.freeze (StructureMaterialKind);

        /**
         * FACTS device asset.
         *
         */
        class FACTSDevice extends Assets.Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FACTSDevice;
                if (null == bucket)
                   cim_data.FACTSDevice = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FACTSDevice[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.Asset.prototype.parse.call (this, context, sub);
                obj.cls = "FACTSDevice";
                base.parse_attribute (/<cim:FACTSDevice.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                var bucket = context.parsed.FACTSDevice;
                if (null == bucket)
                   context.parsed.FACTSDevice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.Asset.prototype.export.call (this, obj, false);

                base.export_element (obj, "FACTSDevice", "kind", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FACTSDevice_collapse" aria-expanded="true" aria-controls="FACTSDevice_collapse" style="margin-left: 10px;">FACTSDevice</a></legend>
                    <div id="FACTSDevice_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.FACTSDeviceKind = []; if (!obj.kind) obj.FACTSDeviceKind.push ({ id: '', selected: true}); for (var property in FACTSDeviceKind) obj.FACTSDeviceKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.FACTSDeviceKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FACTSDevice_collapse" aria-expanded="true" aria-controls="FACTSDevice_collapse" style="margin-left: 10px;">FACTSDevice</a></legend>
                    <div id="FACTSDevice_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#FACTSDeviceKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/FACTSDeviceKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

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
                this._id = template.id;
                var bucket = cim_data.Specification;
                if (null == bucket)
                   cim_data.Specification = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Specification[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Specification";
                base.parse_attributes (/<cim:Specification.QualificationRequirements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "QualificationRequirements", sub, context);
                base.parse_attributes (/<cim:Specification.Ratings\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Ratings", sub, context);
                base.parse_attributes (/<cim:Specification.AssetPropertyCurves\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetPropertyCurves", sub, context);
                base.parse_attributes (/<cim:Specification.ReliabilityInfos\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReliabilityInfos", sub, context);
                base.parse_attributes (/<cim:Specification.Mediums\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Mediums", sub, context);
                base.parse_attributes (/<cim:Specification.DimensionsInfos\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DimensionsInfos", sub, context);
                base.parse_attributes (/<cim:Specification.AssetProperites\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AssetProperites", sub, context);
                var bucket = context.parsed.Specification;
                if (null == bucket)
                   context.parsed.Specification = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attributes", "Specification", fields);
                base.export_attribute (obj, "export_attributes", "Specification", fields);
                base.export_attribute (obj, "export_attributes", "Specification", fields);
                base.export_attribute (obj, "export_attributes", "Specification", fields);
                base.export_attribute (obj, "export_attributes", "Specification", fields);
                base.export_attribute (obj, "export_attributes", "Specification", fields);
                base.export_attribute (obj, "export_attributes", "Specification", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Specification_collapse" aria-expanded="true" aria-controls="Specification_collapse" style="margin-left: 10px;">Specification</a></legend>
                    <div id="Specification_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#QualificationRequirements}}<div><b>QualificationRequirements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/QualificationRequirements}}
                    {{#Ratings}}<div><b>Ratings</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Ratings}}
                    {{#AssetPropertyCurves}}<div><b>AssetPropertyCurves</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AssetPropertyCurves}}
                    {{#ReliabilityInfos}}<div><b>ReliabilityInfos</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ReliabilityInfos}}
                    {{#Mediums}}<div><b>Mediums</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Mediums}}
                    {{#DimensionsInfos}}<div><b>DimensionsInfos</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DimensionsInfos}}
                    {{#AssetProperites}}<div><b>AssetProperites</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/AssetProperites}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.QualificationRequirements) obj.QualificationRequirements_string = obj.QualificationRequirements.join ();
                if (obj.Ratings) obj.Ratings_string = obj.Ratings.join ();
                if (obj.AssetPropertyCurves) obj.AssetPropertyCurves_string = obj.AssetPropertyCurves.join ();
                if (obj.ReliabilityInfos) obj.ReliabilityInfos_string = obj.ReliabilityInfos.join ();
                if (obj.Mediums) obj.Mediums_string = obj.Mediums.join ();
                if (obj.DimensionsInfos) obj.DimensionsInfos_string = obj.DimensionsInfos.join ();
                if (obj.AssetProperites) obj.AssetProperites_string = obj.AssetProperites.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.QualificationRequirements_string;
                delete obj.Ratings_string;
                delete obj.AssetPropertyCurves_string;
                delete obj.ReliabilityInfos_string;
                delete obj.Mediums_string;
                delete obj.DimensionsInfos_string;
                delete obj.AssetProperites_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Specification_collapse" aria-expanded="true" aria-controls="Specification_collapse" style="margin-left: 10px;">Specification</a></legend>
                    <div id="Specification_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='QualificationRequirements'>QualificationRequirements: </label><div class='col-sm-8'><input id='QualificationRequirements' class='form-control' type='text'{{#QualificationRequirements}} value='{{QualificationRequirements}}_string'{{/QualificationRequirements}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DimensionsInfos'>DimensionsInfos: </label><div class='col-sm-8'><input id='DimensionsInfos' class='form-control' type='text'{{#DimensionsInfos}} value='{{DimensionsInfos}}_string'{{/DimensionsInfos}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["QualificationRequirements", "QualificationRequirement", "0..*", "0..*"],
                        ["Ratings", "UserAttribute", "0..*", "0..1"],
                        ["AssetPropertyCurves", "AssetPropertyCurve", "0..*", "0..1"],
                        ["ReliabilityInfos", "ReliabilityInfo", "0..*", "0..1"],
                        ["Mediums", "Medium", "0..*", "0..1"],
                        ["DimensionsInfos", "DimensionsInfo", "0..*", "0..*"],
                        ["AssetProperites", "UserAttribute", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * An event where an asset has failed to perform its functions within specified parameters.
         *
         */
        class FailureEvent extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FailureEvent;
                if (null == bucket)
                   cim_data.FailureEvent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FailureEvent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "FailureEvent";
                base.parse_element (/<cim:FailureEvent.corporateCode>([\s\S]*?)<\/cim:FailureEvent.corporateCode>/g, obj, "corporateCode", base.to_string, sub, context);
                base.parse_attribute (/<cim:FailureEvent.failureIsolationMethod\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "failureIsolationMethod", sub, context);
                base.parse_element (/<cim:FailureEvent.faultLocatingMethod>([\s\S]*?)<\/cim:FailureEvent.faultLocatingMethod>/g, obj, "faultLocatingMethod", base.to_string, sub, context);
                base.parse_element (/<cim:FailureEvent.location>([\s\S]*?)<\/cim:FailureEvent.location>/g, obj, "location", base.to_string, sub, context);
                var bucket = context.parsed.FailureEvent;
                if (null == bucket)
                   context.parsed.FailureEvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_element (obj, "FailureEvent", "corporateCode", base.from_string, fields);
                base.export_element (obj, "FailureEvent", "failureIsolationMethod", base.from_string, fields);
                base.export_element (obj, "FailureEvent", "faultLocatingMethod", base.from_string, fields);
                base.export_element (obj, "FailureEvent", "location", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FailureEvent_collapse" aria-expanded="true" aria-controls="FailureEvent_collapse" style="margin-left: 10px;">FailureEvent</a></legend>
                    <div id="FailureEvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#corporateCode}}<div><b>corporateCode</b>: {{corporateCode}}</div>{{/corporateCode}}
                    {{#failureIsolationMethod}}<div><b>failureIsolationMethod</b>: {{failureIsolationMethod}}</div>{{/failureIsolationMethod}}
                    {{#faultLocatingMethod}}<div><b>faultLocatingMethod</b>: {{faultLocatingMethod}}</div>{{/faultLocatingMethod}}
                    {{#location}}<div><b>location</b>: {{location}}</div>{{/location}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.FailureIsolationMethodKind = []; if (!obj.failureIsolationMethod) obj.FailureIsolationMethodKind.push ({ id: '', selected: true}); for (var property in FailureIsolationMethodKind) obj.FailureIsolationMethodKind.push ({ id: property, selected: obj.failureIsolationMethod && obj.failureIsolationMethod.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.FailureIsolationMethodKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FailureEvent_collapse" aria-expanded="true" aria-controls="FailureEvent_collapse" style="margin-left: 10px;">FailureEvent</a></legend>
                    <div id="FailureEvent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='corporateCode'>corporateCode: </label><div class='col-sm-8'><input id='corporateCode' class='form-control' type='text'{{#corporateCode}} value='{{corporateCode}}'{{/corporateCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='failureIsolationMethod'>failureIsolationMethod: </label><div class='col-sm-8'><select id='failureIsolationMethod' class='form-control'>{{#FailureIsolationMethodKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/FailureIsolationMethodKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='faultLocatingMethod'>faultLocatingMethod: </label><div class='col-sm-8'><input id='faultLocatingMethod' class='form-control' type='text'{{#faultLocatingMethod}} value='{{faultLocatingMethod}}'{{/faultLocatingMethod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='location'>location: </label><div class='col-sm-8'><input id='location' class='form-control' type='text'{{#location}} value='{{location}}'{{/location}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * Construction holding assets such as conductors, transformers, switchgear, etc.
         *
         * Where applicable, number of conductors can be derived from the number of associated wire spacing instances.
         *
         */
        class Structure extends Assets.AssetContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Structure;
                if (null == bucket)
                   cim_data.Structure = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Structure[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetContainer.prototype.parse.call (this, context, sub);
                obj.cls = "Structure";
                base.parse_element (/<cim:Structure.fumigantAppliedDate>([\s\S]*?)<\/cim:Structure.fumigantAppliedDate>/g, obj, "fumigantAppliedDate", base.to_string, sub, context);
                base.parse_element (/<cim:Structure.fumigantName>([\s\S]*?)<\/cim:Structure.fumigantName>/g, obj, "fumigantName", base.to_string, sub, context);
                base.parse_element (/<cim:Structure.height>([\s\S]*?)<\/cim:Structure.height>/g, obj, "height", base.to_string, sub, context);
                base.parse_attribute (/<cim:Structure.materialKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "materialKind", sub, context);
                base.parse_element (/<cim:Structure.ratedVoltage>([\s\S]*?)<\/cim:Structure.ratedVoltage>/g, obj, "ratedVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:Structure.removeWeed>([\s\S]*?)<\/cim:Structure.removeWeed>/g, obj, "removeWeed", base.to_boolean, sub, context);
                base.parse_element (/<cim:Structure.weedRemovedDate>([\s\S]*?)<\/cim:Structure.weedRemovedDate>/g, obj, "weedRemovedDate", base.to_string, sub, context);
                base.parse_attributes (/<cim:Structure.WireSpacingInfos\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WireSpacingInfos", sub, context);
                base.parse_attributes (/<cim:Structure.StructureSupports\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StructureSupports", sub, context);
                var bucket = context.parsed.Structure;
                if (null == bucket)
                   context.parsed.Structure = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetContainer.prototype.export.call (this, obj, false);

                base.export_element (obj, "Structure", "fumigantAppliedDate", base.from_string, fields);
                base.export_element (obj, "Structure", "fumigantName", base.from_string, fields);
                base.export_element (obj, "Structure", "height", base.from_string, fields);
                base.export_element (obj, "Structure", "materialKind", base.from_string, fields);
                base.export_element (obj, "Structure", "ratedVoltage", base.from_string, fields);
                base.export_element (obj, "Structure", "removeWeed", base.from_boolean, fields);
                base.export_element (obj, "Structure", "weedRemovedDate", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "Structure", fields);
                base.export_attribute (obj, "export_attributes", "Structure", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Structure_collapse" aria-expanded="true" aria-controls="Structure_collapse" style="margin-left: 10px;">Structure</a></legend>
                    <div id="Structure_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetContainer.prototype.template.call (this) +
                    `
                    {{#fumigantAppliedDate}}<div><b>fumigantAppliedDate</b>: {{fumigantAppliedDate}}</div>{{/fumigantAppliedDate}}
                    {{#fumigantName}}<div><b>fumigantName</b>: {{fumigantName}}</div>{{/fumigantName}}
                    {{#height}}<div><b>height</b>: {{height}}</div>{{/height}}
                    {{#materialKind}}<div><b>materialKind</b>: {{materialKind}}</div>{{/materialKind}}
                    {{#ratedVoltage}}<div><b>ratedVoltage</b>: {{ratedVoltage}}</div>{{/ratedVoltage}}
                    {{#removeWeed}}<div><b>removeWeed</b>: {{removeWeed}}</div>{{/removeWeed}}
                    {{#weedRemovedDate}}<div><b>weedRemovedDate</b>: {{weedRemovedDate}}</div>{{/weedRemovedDate}}
                    {{#WireSpacingInfos}}<div><b>WireSpacingInfos</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WireSpacingInfos}}
                    {{#StructureSupports}}<div><b>StructureSupports</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/StructureSupports}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.StructureMaterialKind = []; if (!obj.materialKind) obj.StructureMaterialKind.push ({ id: '', selected: true}); for (var property in StructureMaterialKind) obj.StructureMaterialKind.push ({ id: property, selected: obj.materialKind && obj.materialKind.endsWith ('.' + property)});
                if (obj.WireSpacingInfos) obj.WireSpacingInfos_string = obj.WireSpacingInfos.join ();
                if (obj.StructureSupports) obj.StructureSupports_string = obj.StructureSupports.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.StructureMaterialKind;
                delete obj.WireSpacingInfos_string;
                delete obj.StructureSupports_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Structure_collapse" aria-expanded="true" aria-controls="Structure_collapse" style="margin-left: 10px;">Structure</a></legend>
                    <div id="Structure_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fumigantAppliedDate'>fumigantAppliedDate: </label><div class='col-sm-8'><input id='fumigantAppliedDate' class='form-control' type='text'{{#fumigantAppliedDate}} value='{{fumigantAppliedDate}}'{{/fumigantAppliedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fumigantName'>fumigantName: </label><div class='col-sm-8'><input id='fumigantName' class='form-control' type='text'{{#fumigantName}} value='{{fumigantName}}'{{/fumigantName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='height'>height: </label><div class='col-sm-8'><input id='height' class='form-control' type='text'{{#height}} value='{{height}}'{{/height}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='materialKind'>materialKind: </label><div class='col-sm-8'><select id='materialKind' class='form-control'>{{#StructureMaterialKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StructureMaterialKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ratedVoltage'>ratedVoltage: </label><div class='col-sm-8'><input id='ratedVoltage' class='form-control' type='text'{{#ratedVoltage}} value='{{ratedVoltage}}'{{/ratedVoltage}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='removeWeed'>removeWeed: </label><div class='col-sm-8'><input id='removeWeed' class='form-check-input' type='checkbox'{{#removeWeed}} checked{{/removeWeed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='weedRemovedDate'>weedRemovedDate: </label><div class='col-sm-8'><input id='weedRemovedDate' class='form-control' type='text'{{#weedRemovedDate}} value='{{weedRemovedDate}}'{{/weedRemovedDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WireSpacingInfos'>WireSpacingInfos: </label><div class='col-sm-8'><input id='WireSpacingInfos' class='form-control' type='text'{{#WireSpacingInfos}} value='{{WireSpacingInfos}}_string'{{/WireSpacingInfos}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["WireSpacingInfos", "WireSpacingInfo", "0..*", "0..*"],
                        ["StructureSupports", "StructureSupport", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Generic asset or material item that may be used for planning, work or design purposes.
         *
         */
        class GenericAssetModelOrMaterial extends Assets.AssetModel
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GenericAssetModelOrMaterial;
                if (null == bucket)
                   cim_data.GenericAssetModelOrMaterial = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GenericAssetModelOrMaterial[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetModel.prototype.parse.call (this, context, sub);
                obj.cls = "GenericAssetModelOrMaterial";
                base.parse_element (/<cim:GenericAssetModelOrMaterial.estimatedUnitCost>([\s\S]*?)<\/cim:GenericAssetModelOrMaterial.estimatedUnitCost>/g, obj, "estimatedUnitCost", base.to_string, sub, context);
                base.parse_element (/<cim:GenericAssetModelOrMaterial.quantity>([\s\S]*?)<\/cim:GenericAssetModelOrMaterial.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:GenericAssetModelOrMaterial.stockItem>([\s\S]*?)<\/cim:GenericAssetModelOrMaterial.stockItem>/g, obj, "stockItem", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:GenericAssetModelOrMaterial.ErpBomItemDatas\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpBomItemDatas", sub, context);
                base.parse_attribute (/<cim:GenericAssetModelOrMaterial.CUWorkEquipmentAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUWorkEquipmentAsset", sub, context);
                base.parse_attributes (/<cim:GenericAssetModelOrMaterial.ErpReqLineItems\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpReqLineItems", sub, context);
                base.parse_attributes (/<cim:GenericAssetModelOrMaterial.ProductAssetModels\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductAssetModels", sub, context);
                base.parse_attributes (/<cim:GenericAssetModelOrMaterial.ErpInventoryIssues\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpInventoryIssues", sub, context);
                base.parse_attribute (/<cim:GenericAssetModelOrMaterial.TypeAssetCatalogue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeAssetCatalogue", sub, context);
                base.parse_attribute (/<cim:GenericAssetModelOrMaterial.CUAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CUAsset", sub, context);
                var bucket = context.parsed.GenericAssetModelOrMaterial;
                if (null == bucket)
                   context.parsed.GenericAssetModelOrMaterial = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetModel.prototype.export.call (this, obj, false);

                base.export_element (obj, "GenericAssetModelOrMaterial", "estimatedUnitCost", base.from_string, fields);
                base.export_element (obj, "GenericAssetModelOrMaterial", "quantity", base.from_string, fields);
                base.export_element (obj, "GenericAssetModelOrMaterial", "stockItem", base.from_boolean, fields);
                base.export_attribute (obj, "export_attributes", "GenericAssetModelOrMaterial", fields);
                base.export_attribute (obj, "export_attribute", "GenericAssetModelOrMaterial", fields);
                base.export_attribute (obj, "export_attributes", "GenericAssetModelOrMaterial", fields);
                base.export_attribute (obj, "export_attributes", "GenericAssetModelOrMaterial", fields);
                base.export_attribute (obj, "export_attributes", "GenericAssetModelOrMaterial", fields);
                base.export_attribute (obj, "export_attribute", "GenericAssetModelOrMaterial", fields);
                base.export_attribute (obj, "export_attribute", "GenericAssetModelOrMaterial", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GenericAssetModelOrMaterial_collapse" aria-expanded="true" aria-controls="GenericAssetModelOrMaterial_collapse" style="margin-left: 10px;">GenericAssetModelOrMaterial</a></legend>
                    <div id="GenericAssetModelOrMaterial_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetModel.prototype.template.call (this) +
                    `
                    {{#estimatedUnitCost}}<div><b>estimatedUnitCost</b>: {{estimatedUnitCost}}</div>{{/estimatedUnitCost}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#stockItem}}<div><b>stockItem</b>: {{stockItem}}</div>{{/stockItem}}
                    {{#ErpBomItemDatas}}<div><b>ErpBomItemDatas</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpBomItemDatas}}
                    {{#CUWorkEquipmentAsset}}<div><b>CUWorkEquipmentAsset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CUWorkEquipmentAsset}}&quot;);})'>{{CUWorkEquipmentAsset}}</a></div>{{/CUWorkEquipmentAsset}}
                    {{#ErpReqLineItems}}<div><b>ErpReqLineItems</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpReqLineItems}}
                    {{#ProductAssetModels}}<div><b>ProductAssetModels</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProductAssetModels}}
                    {{#ErpInventoryIssues}}<div><b>ErpInventoryIssues</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ErpInventoryIssues}}
                    {{#TypeAssetCatalogue}}<div><b>TypeAssetCatalogue</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TypeAssetCatalogue}}&quot;);})'>{{TypeAssetCatalogue}}</a></div>{{/TypeAssetCatalogue}}
                    {{#CUAsset}}<div><b>CUAsset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CUAsset}}&quot;);})'>{{CUAsset}}</a></div>{{/CUAsset}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ErpBomItemDatas) obj.ErpBomItemDatas_string = obj.ErpBomItemDatas.join ();
                if (obj.ErpReqLineItems) obj.ErpReqLineItems_string = obj.ErpReqLineItems.join ();
                if (obj.ProductAssetModels) obj.ProductAssetModels_string = obj.ProductAssetModels.join ();
                if (obj.ErpInventoryIssues) obj.ErpInventoryIssues_string = obj.ErpInventoryIssues.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ErpBomItemDatas_string;
                delete obj.ErpReqLineItems_string;
                delete obj.ProductAssetModels_string;
                delete obj.ErpInventoryIssues_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GenericAssetModelOrMaterial_collapse" aria-expanded="true" aria-controls="GenericAssetModelOrMaterial_collapse" style="margin-left: 10px;">GenericAssetModelOrMaterial</a></legend>
                    <div id="GenericAssetModelOrMaterial_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetModel.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='estimatedUnitCost'>estimatedUnitCost: </label><div class='col-sm-8'><input id='estimatedUnitCost' class='form-control' type='text'{{#estimatedUnitCost}} value='{{estimatedUnitCost}}'{{/estimatedUnitCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='quantity'>quantity: </label><div class='col-sm-8'><input id='quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='stockItem'>stockItem: </label><div class='col-sm-8'><input id='stockItem' class='form-check-input' type='checkbox'{{#stockItem}} checked{{/stockItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CUWorkEquipmentAsset'>CUWorkEquipmentAsset: </label><div class='col-sm-8'><input id='CUWorkEquipmentAsset' class='form-control' type='text'{{#CUWorkEquipmentAsset}} value='{{CUWorkEquipmentAsset}}'{{/CUWorkEquipmentAsset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TypeAssetCatalogue'>TypeAssetCatalogue: </label><div class='col-sm-8'><input id='TypeAssetCatalogue' class='form-control' type='text'{{#TypeAssetCatalogue}} value='{{TypeAssetCatalogue}}'{{/TypeAssetCatalogue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CUAsset'>CUAsset: </label><div class='col-sm-8'><input id='CUAsset' class='form-control' type='text'{{#CUAsset}} value='{{CUAsset}}'{{/CUAsset}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ErpBomItemDatas", "ErpBomItemData", "0..*", "0..1"],
                        ["CUWorkEquipmentAsset", "CUWorkEquipmentItem", "0..1", "0..1"],
                        ["ErpReqLineItems", "ErpReqLineItem", "0..*", "0..1"],
                        ["ProductAssetModels", "ProductAssetModel", "0..*", "0..1"],
                        ["ErpInventoryIssues", "ErpIssueInventory", "0..*", "0..1"],
                        ["TypeAssetCatalogue", "TypeAssetCatalogue", "0..1", "0..*"],
                        ["CUAsset", "CUAsset", "0..1", "0..1"]
                    ]
                );
            }
        }

        /**
         * There are often stages of power which are associated with stages of cooling.
         *
         * For instance, a transformer may be rated 121kV on the primary, 15kV on the secondary and 4kV on the tertiary winding. These are voltage ratings and the power ratings are generally the same for all three windings and independent of the voltage ratings, there are instances where the tertiary may have a lower power rating.
         *
         */
        class CoolingPowerRating extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CoolingPowerRating;
                if (null == bucket)
                   cim_data.CoolingPowerRating = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CoolingPowerRating[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CoolingPowerRating";
                base.parse_attribute (/<cim:CoolingPowerRating.coolingKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "coolingKind", sub, context);
                base.parse_element (/<cim:CoolingPowerRating.powerRating>([\s\S]*?)<\/cim:CoolingPowerRating.powerRating>/g, obj, "powerRating", base.to_string, sub, context);
                base.parse_element (/<cim:CoolingPowerRating.stage>([\s\S]*?)<\/cim:CoolingPowerRating.stage>/g, obj, "stage", base.to_string, sub, context);
                base.parse_attributes (/<cim:CoolingPowerRating.Reconditionings\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reconditionings", sub, context);
                var bucket = context.parsed.CoolingPowerRating;
                if (null == bucket)
                   context.parsed.CoolingPowerRating = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CoolingPowerRating", "coolingKind", base.from_string, fields);
                base.export_element (obj, "CoolingPowerRating", "powerRating", base.from_string, fields);
                base.export_element (obj, "CoolingPowerRating", "stage", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "CoolingPowerRating", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CoolingPowerRating_collapse" aria-expanded="true" aria-controls="CoolingPowerRating_collapse" style="margin-left: 10px;">CoolingPowerRating</a></legend>
                    <div id="CoolingPowerRating_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#coolingKind}}<div><b>coolingKind</b>: {{coolingKind}}</div>{{/coolingKind}}
                    {{#powerRating}}<div><b>powerRating</b>: {{powerRating}}</div>{{/powerRating}}
                    {{#stage}}<div><b>stage</b>: {{stage}}</div>{{/stage}}
                    {{#Reconditionings}}<div><b>Reconditionings</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Reconditionings}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.CoolingKind = []; if (!obj.coolingKind) obj.CoolingKind.push ({ id: '', selected: true}); for (var property in CoolingKind) obj.CoolingKind.push ({ id: property, selected: obj.coolingKind && obj.coolingKind.endsWith ('.' + property)});
                if (obj.Reconditionings) obj.Reconditionings_string = obj.Reconditionings.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CoolingKind;
                delete obj.Reconditionings_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CoolingPowerRating_collapse" aria-expanded="true" aria-controls="CoolingPowerRating_collapse" style="margin-left: 10px;">CoolingPowerRating</a></legend>
                    <div id="CoolingPowerRating_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coolingKind'>coolingKind: </label><div class='col-sm-8'><select id='coolingKind' class='form-control'>{{#CoolingKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/CoolingKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='powerRating'>powerRating: </label><div class='col-sm-8'><input id='powerRating' class='form-control' type='text'{{#powerRating}} value='{{powerRating}}'{{/powerRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='stage'>stage: </label><div class='col-sm-8'><input id='stage' class='form-control' type='text'{{#stage}} value='{{stage}}'{{/stage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Reconditionings'>Reconditionings: </label><div class='col-sm-8'><input id='Reconditionings' class='form-control' type='text'{{#Reconditionings}} value='{{Reconditionings}}_string'{{/Reconditionings}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Reconditionings", "Reconditioning", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Various current financial properties associated with a particular asset.
         *
         * Historical properties may be determined by ActivityRecords associated with the asset.
         *
         */
        class FinancialInfo extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FinancialInfo;
                if (null == bucket)
                   cim_data.FinancialInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FinancialInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "FinancialInfo";
                base.parse_element (/<cim:FinancialInfo.account>([\s\S]*?)<\/cim:FinancialInfo.account>/g, obj, "account", base.to_string, sub, context);
                base.parse_element (/<cim:FinancialInfo.actualPurchaseCost>([\s\S]*?)<\/cim:FinancialInfo.actualPurchaseCost>/g, obj, "actualPurchaseCost", base.to_string, sub, context);
                base.parse_element (/<cim:FinancialInfo.costDescription>([\s\S]*?)<\/cim:FinancialInfo.costDescription>/g, obj, "costDescription", base.to_string, sub, context);
                base.parse_element (/<cim:FinancialInfo.costType>([\s\S]*?)<\/cim:FinancialInfo.costType>/g, obj, "costType", base.to_string, sub, context);
                base.parse_element (/<cim:FinancialInfo.financialValue>([\s\S]*?)<\/cim:FinancialInfo.financialValue>/g, obj, "financialValue", base.to_string, sub, context);
                base.parse_element (/<cim:FinancialInfo.plantTransferDateTime>([\s\S]*?)<\/cim:FinancialInfo.plantTransferDateTime>/g, obj, "plantTransferDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:FinancialInfo.purchaseDateTime>([\s\S]*?)<\/cim:FinancialInfo.purchaseDateTime>/g, obj, "purchaseDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:FinancialInfo.purchaseOrderNumber>([\s\S]*?)<\/cim:FinancialInfo.purchaseOrderNumber>/g, obj, "purchaseOrderNumber", base.to_string, sub, context);
                base.parse_element (/<cim:FinancialInfo.quantity>([\s\S]*?)<\/cim:FinancialInfo.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:FinancialInfo.valueDateTime>([\s\S]*?)<\/cim:FinancialInfo.valueDateTime>/g, obj, "valueDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:FinancialInfo.warrantyEndDateTime>([\s\S]*?)<\/cim:FinancialInfo.warrantyEndDateTime>/g, obj, "warrantyEndDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:FinancialInfo.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                var bucket = context.parsed.FinancialInfo;
                if (null == bucket)
                   context.parsed.FinancialInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "FinancialInfo", "account", base.from_string, fields);
                base.export_element (obj, "FinancialInfo", "actualPurchaseCost", base.from_string, fields);
                base.export_element (obj, "FinancialInfo", "costDescription", base.from_string, fields);
                base.export_element (obj, "FinancialInfo", "costType", base.from_string, fields);
                base.export_element (obj, "FinancialInfo", "financialValue", base.from_string, fields);
                base.export_element (obj, "FinancialInfo", "plantTransferDateTime", base.from_datetime, fields);
                base.export_element (obj, "FinancialInfo", "purchaseDateTime", base.from_datetime, fields);
                base.export_element (obj, "FinancialInfo", "purchaseOrderNumber", base.from_string, fields);
                base.export_element (obj, "FinancialInfo", "quantity", base.from_string, fields);
                base.export_element (obj, "FinancialInfo", "valueDateTime", base.from_datetime, fields);
                base.export_element (obj, "FinancialInfo", "warrantyEndDateTime", base.from_datetime, fields);
                base.export_attribute (obj, "export_attribute", "FinancialInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FinancialInfo_collapse" aria-expanded="true" aria-controls="FinancialInfo_collapse" style="margin-left: 10px;">FinancialInfo</a></legend>
                    <div id="FinancialInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#account}}<div><b>account</b>: {{account}}</div>{{/account}}
                    {{#actualPurchaseCost}}<div><b>actualPurchaseCost</b>: {{actualPurchaseCost}}</div>{{/actualPurchaseCost}}
                    {{#costDescription}}<div><b>costDescription</b>: {{costDescription}}</div>{{/costDescription}}
                    {{#costType}}<div><b>costType</b>: {{costType}}</div>{{/costType}}
                    {{#financialValue}}<div><b>financialValue</b>: {{financialValue}}</div>{{/financialValue}}
                    {{#plantTransferDateTime}}<div><b>plantTransferDateTime</b>: {{plantTransferDateTime}}</div>{{/plantTransferDateTime}}
                    {{#purchaseDateTime}}<div><b>purchaseDateTime</b>: {{purchaseDateTime}}</div>{{/purchaseDateTime}}
                    {{#purchaseOrderNumber}}<div><b>purchaseOrderNumber</b>: {{purchaseOrderNumber}}</div>{{/purchaseOrderNumber}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#valueDateTime}}<div><b>valueDateTime</b>: {{valueDateTime}}</div>{{/valueDateTime}}
                    {{#warrantyEndDateTime}}<div><b>warrantyEndDateTime</b>: {{warrantyEndDateTime}}</div>{{/warrantyEndDateTime}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Asset}}&quot;);})'>{{Asset}}</a></div>{{/Asset}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FinancialInfo_collapse" aria-expanded="true" aria-controls="FinancialInfo_collapse" style="margin-left: 10px;">FinancialInfo</a></legend>
                    <div id="FinancialInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='account'>account: </label><div class='col-sm-8'><input id='account' class='form-control' type='text'{{#account}} value='{{account}}'{{/account}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='actualPurchaseCost'>actualPurchaseCost: </label><div class='col-sm-8'><input id='actualPurchaseCost' class='form-control' type='text'{{#actualPurchaseCost}} value='{{actualPurchaseCost}}'{{/actualPurchaseCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='costDescription'>costDescription: </label><div class='col-sm-8'><input id='costDescription' class='form-control' type='text'{{#costDescription}} value='{{costDescription}}'{{/costDescription}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='costType'>costType: </label><div class='col-sm-8'><input id='costType' class='form-control' type='text'{{#costType}} value='{{costType}}'{{/costType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='financialValue'>financialValue: </label><div class='col-sm-8'><input id='financialValue' class='form-control' type='text'{{#financialValue}} value='{{financialValue}}'{{/financialValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='plantTransferDateTime'>plantTransferDateTime: </label><div class='col-sm-8'><input id='plantTransferDateTime' class='form-control' type='text'{{#plantTransferDateTime}} value='{{plantTransferDateTime}}'{{/plantTransferDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='purchaseDateTime'>purchaseDateTime: </label><div class='col-sm-8'><input id='purchaseDateTime' class='form-control' type='text'{{#purchaseDateTime}} value='{{purchaseDateTime}}'{{/purchaseDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='purchaseOrderNumber'>purchaseOrderNumber: </label><div class='col-sm-8'><input id='purchaseOrderNumber' class='form-control' type='text'{{#purchaseOrderNumber}} value='{{purchaseOrderNumber}}'{{/purchaseOrderNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='quantity'>quantity: </label><div class='col-sm-8'><input id='quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='valueDateTime'>valueDateTime: </label><div class='col-sm-8'><input id='valueDateTime' class='form-control' type='text'{{#valueDateTime}} value='{{valueDateTime}}'{{/valueDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='warrantyEndDateTime'>warrantyEndDateTime: </label><div class='col-sm-8'><input id='warrantyEndDateTime' class='form-control' type='text'{{#warrantyEndDateTime}} value='{{warrantyEndDateTime}}'{{/warrantyEndDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Asset'>Asset: </label><div class='col-sm-8'><input id='Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Asset", "Asset", "0..1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Support for structure assets.
         *
         */
        class StructureSupport extends Assets.Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StructureSupport;
                if (null == bucket)
                   cim_data.StructureSupport = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StructureSupport[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.Asset.prototype.parse.call (this, context, sub);
                obj.cls = "StructureSupport";
                base.parse_attribute (/<cim:StructureSupport.anchorKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "anchorKind", sub, context);
                base.parse_element (/<cim:StructureSupport.anchorRodCount>([\s\S]*?)<\/cim:StructureSupport.anchorRodCount>/g, obj, "anchorRodCount", base.to_string, sub, context);
                base.parse_element (/<cim:StructureSupport.anchorRodLength>([\s\S]*?)<\/cim:StructureSupport.anchorRodLength>/g, obj, "anchorRodLength", base.to_string, sub, context);
                base.parse_element (/<cim:StructureSupport.direction>([\s\S]*?)<\/cim:StructureSupport.direction>/g, obj, "direction", base.to_string, sub, context);
                base.parse_attribute (/<cim:StructureSupport.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:StructureSupport.length>([\s\S]*?)<\/cim:StructureSupport.length>/g, obj, "length", base.to_string, sub, context);
                base.parse_element (/<cim:StructureSupport.size>([\s\S]*?)<\/cim:StructureSupport.size>/g, obj, "size", base.to_string, sub, context);
                base.parse_attribute (/<cim:StructureSupport.SecuredStructure\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SecuredStructure", sub, context);
                var bucket = context.parsed.StructureSupport;
                if (null == bucket)
                   context.parsed.StructureSupport = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.Asset.prototype.export.call (this, obj, false);

                base.export_element (obj, "StructureSupport", "anchorKind", base.from_string, fields);
                base.export_element (obj, "StructureSupport", "anchorRodCount", base.from_string, fields);
                base.export_element (obj, "StructureSupport", "anchorRodLength", base.from_string, fields);
                base.export_element (obj, "StructureSupport", "direction", base.from_string, fields);
                base.export_element (obj, "StructureSupport", "kind", base.from_string, fields);
                base.export_element (obj, "StructureSupport", "length", base.from_string, fields);
                base.export_element (obj, "StructureSupport", "size", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "StructureSupport", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StructureSupport_collapse" aria-expanded="true" aria-controls="StructureSupport_collapse" style="margin-left: 10px;">StructureSupport</a></legend>
                    <div id="StructureSupport_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.template.call (this) +
                    `
                    {{#anchorKind}}<div><b>anchorKind</b>: {{anchorKind}}</div>{{/anchorKind}}
                    {{#anchorRodCount}}<div><b>anchorRodCount</b>: {{anchorRodCount}}</div>{{/anchorRodCount}}
                    {{#anchorRodLength}}<div><b>anchorRodLength</b>: {{anchorRodLength}}</div>{{/anchorRodLength}}
                    {{#direction}}<div><b>direction</b>: {{direction}}</div>{{/direction}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#length}}<div><b>length</b>: {{length}}</div>{{/length}}
                    {{#size}}<div><b>size</b>: {{size}}</div>{{/size}}
                    {{#SecuredStructure}}<div><b>SecuredStructure</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SecuredStructure}}&quot;);})'>{{SecuredStructure}}</a></div>{{/SecuredStructure}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.AnchorKind = []; if (!obj.anchorKind) obj.AnchorKind.push ({ id: '', selected: true}); for (var property in AnchorKind) obj.AnchorKind.push ({ id: property, selected: obj.anchorKind && obj.anchorKind.endsWith ('.' + property)});
                obj.StructureSupportKind = []; if (!obj.kind) obj.StructureSupportKind.push ({ id: '', selected: true}); for (var property in StructureSupportKind) obj.StructureSupportKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AnchorKind;
                delete obj.StructureSupportKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StructureSupport_collapse" aria-expanded="true" aria-controls="StructureSupport_collapse" style="margin-left: 10px;">StructureSupport</a></legend>
                    <div id="StructureSupport_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='anchorKind'>anchorKind: </label><div class='col-sm-8'><select id='anchorKind' class='form-control'>{{#AnchorKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/AnchorKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='anchorRodCount'>anchorRodCount: </label><div class='col-sm-8'><input id='anchorRodCount' class='form-control' type='text'{{#anchorRodCount}} value='{{anchorRodCount}}'{{/anchorRodCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='anchorRodLength'>anchorRodLength: </label><div class='col-sm-8'><input id='anchorRodLength' class='form-control' type='text'{{#anchorRodLength}} value='{{anchorRodLength}}'{{/anchorRodLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='direction'>direction: </label><div class='col-sm-8'><input id='direction' class='form-control' type='text'{{#direction}} value='{{direction}}'{{/direction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#StructureSupportKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StructureSupportKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='length'>length: </label><div class='col-sm-8'><input id='length' class='form-control' type='text'{{#length}} value='{{length}}'{{/length}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='size'>size: </label><div class='col-sm-8'><input id='size' class='form-control' type='text'{{#size}} value='{{size}}'{{/size}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SecuredStructure'>SecuredStructure: </label><div class='col-sm-8'><input id='SecuredStructure' class='form-control' type='text'{{#SecuredStructure}} value='{{SecuredStructure}}'{{/SecuredStructure}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["SecuredStructure", "Structure", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A duct contains individual wires in the layout as specified with associated wire spacing instances; number of them gives the number of conductors in this duct.
         *
         */
        class DuctBank extends Assets.AssetContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DuctBank;
                if (null == bucket)
                   cim_data.DuctBank = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DuctBank[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetContainer.prototype.parse.call (this, context, sub);
                obj.cls = "DuctBank";
                base.parse_element (/<cim:DuctBank.circuitCount>([\s\S]*?)<\/cim:DuctBank.circuitCount>/g, obj, "circuitCount", base.to_string, sub, context);
                base.parse_attributes (/<cim:DuctBank.WireSpacingInfos\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WireSpacingInfos", sub, context);
                var bucket = context.parsed.DuctBank;
                if (null == bucket)
                   context.parsed.DuctBank = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetContainer.prototype.export.call (this, obj, false);

                base.export_element (obj, "DuctBank", "circuitCount", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "DuctBank", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DuctBank_collapse" aria-expanded="true" aria-controls="DuctBank_collapse" style="margin-left: 10px;">DuctBank</a></legend>
                    <div id="DuctBank_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetContainer.prototype.template.call (this) +
                    `
                    {{#circuitCount}}<div><b>circuitCount</b>: {{circuitCount}}</div>{{/circuitCount}}
                    {{#WireSpacingInfos}}<div><b>WireSpacingInfos</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WireSpacingInfos}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WireSpacingInfos) obj.WireSpacingInfos_string = obj.WireSpacingInfos.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WireSpacingInfos_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DuctBank_collapse" aria-expanded="true" aria-controls="DuctBank_collapse" style="margin-left: 10px;">DuctBank</a></legend>
                    <div id="DuctBank_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='circuitCount'>circuitCount: </label><div class='col-sm-8'><input id='circuitCount' class='form-control' type='text'{{#circuitCount}} value='{{circuitCount}}'{{/circuitCount}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["WireSpacingInfos", "WireSpacingInfo", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Bushing asset.
         *
         */
        class Bushing extends Assets.Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Bushing;
                if (null == bucket)
                   cim_data.Bushing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Bushing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.Asset.prototype.parse.call (this, context, sub);
                obj.cls = "Bushing";
                base.parse_element (/<cim:Bushing.c1Capacitance>([\s\S]*?)<\/cim:Bushing.c1Capacitance>/g, obj, "c1Capacitance", base.to_string, sub, context);
                base.parse_element (/<cim:Bushing.c1PowerFactor>([\s\S]*?)<\/cim:Bushing.c1PowerFactor>/g, obj, "c1PowerFactor", base.to_float, sub, context);
                base.parse_element (/<cim:Bushing.c2Capacitance>([\s\S]*?)<\/cim:Bushing.c2Capacitance>/g, obj, "c2Capacitance", base.to_string, sub, context);
                base.parse_element (/<cim:Bushing.c2PowerFactor>([\s\S]*?)<\/cim:Bushing.c2PowerFactor>/g, obj, "c2PowerFactor", base.to_float, sub, context);
                base.parse_attribute (/<cim:Bushing.insulationKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "insulationKind", sub, context);
                base.parse_attributes (/<cim:Bushing.BushingInsulationPFs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BushingInsulationPFs", sub, context);
                base.parse_attribute (/<cim:Bushing.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                var bucket = context.parsed.Bushing;
                if (null == bucket)
                   context.parsed.Bushing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.Asset.prototype.export.call (this, obj, false);

                base.export_element (obj, "Bushing", "c1Capacitance", base.from_string, fields);
                base.export_element (obj, "Bushing", "c1PowerFactor", base.from_float, fields);
                base.export_element (obj, "Bushing", "c2Capacitance", base.from_string, fields);
                base.export_element (obj, "Bushing", "c2PowerFactor", base.from_float, fields);
                base.export_element (obj, "Bushing", "insulationKind", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "Bushing", fields);
                base.export_attribute (obj, "export_attribute", "Bushing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Bushing_collapse" aria-expanded="true" aria-controls="Bushing_collapse" style="margin-left: 10px;">Bushing</a></legend>
                    <div id="Bushing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.template.call (this) +
                    `
                    {{#c1Capacitance}}<div><b>c1Capacitance</b>: {{c1Capacitance}}</div>{{/c1Capacitance}}
                    {{#c1PowerFactor}}<div><b>c1PowerFactor</b>: {{c1PowerFactor}}</div>{{/c1PowerFactor}}
                    {{#c2Capacitance}}<div><b>c2Capacitance</b>: {{c2Capacitance}}</div>{{/c2Capacitance}}
                    {{#c2PowerFactor}}<div><b>c2PowerFactor</b>: {{c2PowerFactor}}</div>{{/c2PowerFactor}}
                    {{#insulationKind}}<div><b>insulationKind</b>: {{insulationKind}}</div>{{/insulationKind}}
                    {{#BushingInsulationPFs}}<div><b>BushingInsulationPFs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BushingInsulationPFs}}
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Terminal}}&quot;);})'>{{Terminal}}</a></div>{{/Terminal}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.BushingInsulationKind = []; if (!obj.insulationKind) obj.BushingInsulationKind.push ({ id: '', selected: true}); for (var property in BushingInsulationKind) obj.BushingInsulationKind.push ({ id: property, selected: obj.insulationKind && obj.insulationKind.endsWith ('.' + property)});
                if (obj.BushingInsulationPFs) obj.BushingInsulationPFs_string = obj.BushingInsulationPFs.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.BushingInsulationKind;
                delete obj.BushingInsulationPFs_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Bushing_collapse" aria-expanded="true" aria-controls="Bushing_collapse" style="margin-left: 10px;">Bushing</a></legend>
                    <div id="Bushing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='c1Capacitance'>c1Capacitance: </label><div class='col-sm-8'><input id='c1Capacitance' class='form-control' type='text'{{#c1Capacitance}} value='{{c1Capacitance}}'{{/c1Capacitance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='c1PowerFactor'>c1PowerFactor: </label><div class='col-sm-8'><input id='c1PowerFactor' class='form-control' type='text'{{#c1PowerFactor}} value='{{c1PowerFactor}}'{{/c1PowerFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='c2Capacitance'>c2Capacitance: </label><div class='col-sm-8'><input id='c2Capacitance' class='form-control' type='text'{{#c2Capacitance}} value='{{c2Capacitance}}'{{/c2Capacitance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='c2PowerFactor'>c2PowerFactor: </label><div class='col-sm-8'><input id='c2PowerFactor' class='form-control' type='text'{{#c2PowerFactor}} value='{{c2PowerFactor}}'{{/c2PowerFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='insulationKind'>insulationKind: </label><div class='col-sm-8'><select id='insulationKind' class='form-control'>{{#BushingInsulationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/BushingInsulationKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Terminal'>Terminal: </label><div class='col-sm-8'><input id='Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["BushingInsulationPFs", "BushingInsulationPF", "0..*", "0..1"],
                        ["Terminal", "Terminal", "0..1", "0..1"]
                    ]
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
                this._id = template.id;
                var bucket = cim_data.ReliabilityInfo;
                if (null == bucket)
                   cim_data.ReliabilityInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReliabilityInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ReliabilityInfo";
                base.parse_element (/<cim:ReliabilityInfo.momFailureRate>([\s\S]*?)<\/cim:ReliabilityInfo.momFailureRate>/g, obj, "momFailureRate", base.to_string, sub, context);
                base.parse_element (/<cim:ReliabilityInfo.mTTR>([\s\S]*?)<\/cim:ReliabilityInfo.mTTR>/g, obj, "mTTR", base.to_string, sub, context);
                base.parse_attributes (/<cim:ReliabilityInfo.Assets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attribute (/<cim:ReliabilityInfo.Specification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Specification", sub, context);
                var bucket = context.parsed.ReliabilityInfo;
                if (null == bucket)
                   context.parsed.ReliabilityInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ReliabilityInfo", "momFailureRate", base.from_string, fields);
                base.export_element (obj, "ReliabilityInfo", "mTTR", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "ReliabilityInfo", fields);
                base.export_attribute (obj, "export_attribute", "ReliabilityInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReliabilityInfo_collapse" aria-expanded="true" aria-controls="ReliabilityInfo_collapse" style="margin-left: 10px;">ReliabilityInfo</a></legend>
                    <div id="ReliabilityInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#momFailureRate}}<div><b>momFailureRate</b>: {{momFailureRate}}</div>{{/momFailureRate}}
                    {{#mTTR}}<div><b>mTTR</b>: {{mTTR}}</div>{{/mTTR}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Assets}}
                    {{#Specification}}<div><b>Specification</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Specification}}&quot;);})'>{{Specification}}</a></div>{{/Specification}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Assets) obj.Assets_string = obj.Assets.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Assets_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReliabilityInfo_collapse" aria-expanded="true" aria-controls="ReliabilityInfo_collapse" style="margin-left: 10px;">ReliabilityInfo</a></legend>
                    <div id="ReliabilityInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='momFailureRate'>momFailureRate: </label><div class='col-sm-8'><input id='momFailureRate' class='form-control' type='text'{{#momFailureRate}} value='{{momFailureRate}}'{{/momFailureRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mTTR'>mTTR: </label><div class='col-sm-8'><input id='mTTR' class='form-control' type='text'{{#mTTR}} value='{{mTTR}}'{{/mTTR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Assets'>Assets: </label><div class='col-sm-8'><input id='Assets' class='form-control' type='text'{{#Assets}} value='{{Assets}}_string'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Specification'>Specification: </label><div class='col-sm-8'><input id='Specification' class='form-control' type='text'{{#Specification}} value='{{Specification}}'{{/Specification}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Assets", "Asset", "0..*", "0..*"],
                        ["Specification", "Specification", "0..1", "0..*"]
                    ]
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
                this._id = template.id;
                var bucket = cim_data.WindingInsulation;
                if (null == bucket)
                   cim_data.WindingInsulation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindingInsulation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindingInsulation";
                base.parse_element (/<cim:WindingInsulation.insulationPFStatus>([\s\S]*?)<\/cim:WindingInsulation.insulationPFStatus>/g, obj, "insulationPFStatus", base.to_string, sub, context);
                base.parse_element (/<cim:WindingInsulation.insulationResistance>([\s\S]*?)<\/cim:WindingInsulation.insulationResistance>/g, obj, "insulationResistance", base.to_string, sub, context);
                base.parse_element (/<cim:WindingInsulation.leakageReactance>([\s\S]*?)<\/cim:WindingInsulation.leakageReactance>/g, obj, "leakageReactance", base.to_string, sub, context);
                base.parse_element (/<cim:WindingInsulation.status>([\s\S]*?)<\/cim:WindingInsulation.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindingInsulation.ToWinding\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ToWinding", sub, context);
                base.parse_attribute (/<cim:WindingInsulation.FromWinding\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FromWinding", sub, context);
                base.parse_attribute (/<cim:WindingInsulation.TransformerObservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerObservation", sub, context);
                var bucket = context.parsed.WindingInsulation;
                if (null == bucket)
                   context.parsed.WindingInsulation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindingInsulation", "insulationPFStatus", base.from_string, fields);
                base.export_element (obj, "WindingInsulation", "insulationResistance", base.from_string, fields);
                base.export_element (obj, "WindingInsulation", "leakageReactance", base.from_string, fields);
                base.export_element (obj, "WindingInsulation", "status", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "WindingInsulation", fields);
                base.export_attribute (obj, "export_attribute", "WindingInsulation", fields);
                base.export_attribute (obj, "export_attribute", "WindingInsulation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindingInsulation_collapse" aria-expanded="true" aria-controls="WindingInsulation_collapse" style="margin-left: 10px;">WindingInsulation</a></legend>
                    <div id="WindingInsulation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#insulationPFStatus}}<div><b>insulationPFStatus</b>: {{insulationPFStatus}}</div>{{/insulationPFStatus}}
                    {{#insulationResistance}}<div><b>insulationResistance</b>: {{insulationResistance}}</div>{{/insulationResistance}}
                    {{#leakageReactance}}<div><b>leakageReactance</b>: {{leakageReactance}}</div>{{/leakageReactance}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#ToWinding}}<div><b>ToWinding</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ToWinding}}&quot;);})'>{{ToWinding}}</a></div>{{/ToWinding}}
                    {{#FromWinding}}<div><b>FromWinding</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FromWinding}}&quot;);})'>{{FromWinding}}</a></div>{{/FromWinding}}
                    {{#TransformerObservation}}<div><b>TransformerObservation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransformerObservation}}&quot;);})'>{{TransformerObservation}}</a></div>{{/TransformerObservation}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindingInsulation_collapse" aria-expanded="true" aria-controls="WindingInsulation_collapse" style="margin-left: 10px;">WindingInsulation</a></legend>
                    <div id="WindingInsulation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='insulationPFStatus'>insulationPFStatus: </label><div class='col-sm-8'><input id='insulationPFStatus' class='form-control' type='text'{{#insulationPFStatus}} value='{{insulationPFStatus}}'{{/insulationPFStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='insulationResistance'>insulationResistance: </label><div class='col-sm-8'><input id='insulationResistance' class='form-control' type='text'{{#insulationResistance}} value='{{insulationResistance}}'{{/insulationResistance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='leakageReactance'>leakageReactance: </label><div class='col-sm-8'><input id='leakageReactance' class='form-control' type='text'{{#leakageReactance}} value='{{leakageReactance}}'{{/leakageReactance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ToWinding'>ToWinding: </label><div class='col-sm-8'><input id='ToWinding' class='form-control' type='text'{{#ToWinding}} value='{{ToWinding}}'{{/ToWinding}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='FromWinding'>FromWinding: </label><div class='col-sm-8'><input id='FromWinding' class='form-control' type='text'{{#FromWinding}} value='{{FromWinding}}'{{/FromWinding}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransformerObservation'>TransformerObservation: </label><div class='col-sm-8'><input id='TransformerObservation' class='form-control' type='text'{{#TransformerObservation}} value='{{TransformerObservation}}'{{/TransformerObservation}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ToWinding", "TransformerEnd", "1", "0..*"],
                        ["FromWinding", "TransformerEnd", "1", "0..*"],
                        ["TransformerObservation", "TransformerObservation", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Enclosure that offers protection to the equipment it contains and/or safety to people/animals outside it.
         *
         */
        class Cabinet extends Assets.AssetContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Cabinet;
                if (null == bucket)
                   cim_data.Cabinet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Cabinet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetContainer.prototype.parse.call (this, context, sub);
                obj.cls = "Cabinet";
                var bucket = context.parsed.Cabinet;
                if (null == bucket)
                   context.parsed.Cabinet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetContainer.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Cabinet_collapse" aria-expanded="true" aria-controls="Cabinet_collapse" style="margin-left: 10px;">Cabinet</a></legend>
                    <div id="Cabinet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetContainer.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Cabinet_collapse" aria-expanded="true" aria-controls="Cabinet_collapse" style="margin-left: 10px;">Cabinet</a></legend>
                    <div id="Cabinet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetContainer.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.AssetPropertyCurve;
                if (null == bucket)
                   cim_data.AssetPropertyCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AssetPropertyCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "AssetPropertyCurve";
                base.parse_attributes (/<cim:AssetPropertyCurve.Assets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attribute (/<cim:AssetPropertyCurve.Specification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Specification", sub, context);
                var bucket = context.parsed.AssetPropertyCurve;
                if (null == bucket)
                   context.parsed.AssetPropertyCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attributes", "AssetPropertyCurve", fields);
                base.export_attribute (obj, "export_attribute", "AssetPropertyCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetPropertyCurve_collapse" aria-expanded="true" aria-controls="AssetPropertyCurve_collapse" style="margin-left: 10px;">AssetPropertyCurve</a></legend>
                    <div id="AssetPropertyCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Assets}}
                    {{#Specification}}<div><b>Specification</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Specification}}&quot;);})'>{{Specification}}</a></div>{{/Specification}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Assets) obj.Assets_string = obj.Assets.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Assets_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AssetPropertyCurve_collapse" aria-expanded="true" aria-controls="AssetPropertyCurve_collapse" style="margin-left: 10px;">AssetPropertyCurve</a></legend>
                    <div id="AssetPropertyCurve_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Assets'>Assets: </label><div class='col-sm-8'><input id='Assets' class='form-control' type='text'{{#Assets}} value='{{Assets}}_string'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Specification'>Specification: </label><div class='col-sm-8'><input id='Specification' class='form-control' type='text'{{#Specification}} value='{{Specification}}'{{/Specification}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Assets", "Asset", "0..*", "0..*"],
                        ["Specification", "Specification", "0..1", "0..*"]
                    ]
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
                this._id = template.id;
                var bucket = cim_data.DimensionsInfo;
                if (null == bucket)
                   cim_data.DimensionsInfo = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DimensionsInfo[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DimensionsInfo";
                base.parse_element (/<cim:DimensionsInfo.orientation>([\s\S]*?)<\/cim:DimensionsInfo.orientation>/g, obj, "orientation", base.to_string, sub, context);
                base.parse_element (/<cim:DimensionsInfo.sizeDepth>([\s\S]*?)<\/cim:DimensionsInfo.sizeDepth>/g, obj, "sizeDepth", base.to_string, sub, context);
                base.parse_element (/<cim:DimensionsInfo.sizeDiameter>([\s\S]*?)<\/cim:DimensionsInfo.sizeDiameter>/g, obj, "sizeDiameter", base.to_string, sub, context);
                base.parse_element (/<cim:DimensionsInfo.sizeLength>([\s\S]*?)<\/cim:DimensionsInfo.sizeLength>/g, obj, "sizeLength", base.to_string, sub, context);
                base.parse_element (/<cim:DimensionsInfo.sizeWidth>([\s\S]*?)<\/cim:DimensionsInfo.sizeWidth>/g, obj, "sizeWidth", base.to_string, sub, context);
                base.parse_attributes (/<cim:DimensionsInfo.Specifications\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Specifications", sub, context);
                var bucket = context.parsed.DimensionsInfo;
                if (null == bucket)
                   context.parsed.DimensionsInfo = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "DimensionsInfo", "orientation", base.from_string, fields);
                base.export_element (obj, "DimensionsInfo", "sizeDepth", base.from_string, fields);
                base.export_element (obj, "DimensionsInfo", "sizeDiameter", base.from_string, fields);
                base.export_element (obj, "DimensionsInfo", "sizeLength", base.from_string, fields);
                base.export_element (obj, "DimensionsInfo", "sizeWidth", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "DimensionsInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DimensionsInfo_collapse" aria-expanded="true" aria-controls="DimensionsInfo_collapse" style="margin-left: 10px;">DimensionsInfo</a></legend>
                    <div id="DimensionsInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#orientation}}<div><b>orientation</b>: {{orientation}}</div>{{/orientation}}
                    {{#sizeDepth}}<div><b>sizeDepth</b>: {{sizeDepth}}</div>{{/sizeDepth}}
                    {{#sizeDiameter}}<div><b>sizeDiameter</b>: {{sizeDiameter}}</div>{{/sizeDiameter}}
                    {{#sizeLength}}<div><b>sizeLength</b>: {{sizeLength}}</div>{{/sizeLength}}
                    {{#sizeWidth}}<div><b>sizeWidth</b>: {{sizeWidth}}</div>{{/sizeWidth}}
                    {{#Specifications}}<div><b>Specifications</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Specifications}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Specifications) obj.Specifications_string = obj.Specifications.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Specifications_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DimensionsInfo_collapse" aria-expanded="true" aria-controls="DimensionsInfo_collapse" style="margin-left: 10px;">DimensionsInfo</a></legend>
                    <div id="DimensionsInfo_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='orientation'>orientation: </label><div class='col-sm-8'><input id='orientation' class='form-control' type='text'{{#orientation}} value='{{orientation}}'{{/orientation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sizeDepth'>sizeDepth: </label><div class='col-sm-8'><input id='sizeDepth' class='form-control' type='text'{{#sizeDepth}} value='{{sizeDepth}}'{{/sizeDepth}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sizeDiameter'>sizeDiameter: </label><div class='col-sm-8'><input id='sizeDiameter' class='form-control' type='text'{{#sizeDiameter}} value='{{sizeDiameter}}'{{/sizeDiameter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sizeLength'>sizeLength: </label><div class='col-sm-8'><input id='sizeLength' class='form-control' type='text'{{#sizeLength}} value='{{sizeLength}}'{{/sizeLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sizeWidth'>sizeWidth: </label><div class='col-sm-8'><input id='sizeWidth' class='form-control' type='text'{{#sizeWidth}} value='{{sizeWidth}}'{{/sizeWidth}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Specifications'>Specifications: </label><div class='col-sm-8'><input id='Specifications' class='form-control' type='text'{{#Specifications}} value='{{Specifications}}_string'{{/Specifications}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Specifications", "Specification", "0..*", "0..*"]
                    ]
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
                this._id = template.id;
                var bucket = cim_data.TransformerObservation;
                if (null == bucket)
                   cim_data.TransformerObservation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransformerObservation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerObservation";
                base.parse_element (/<cim:TransformerObservation.bushingTemp>([\s\S]*?)<\/cim:TransformerObservation.bushingTemp>/g, obj, "bushingTemp", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.dga>([\s\S]*?)<\/cim:TransformerObservation.dga>/g, obj, "dga", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.freqResp>([\s\S]*?)<\/cim:TransformerObservation.freqResp>/g, obj, "freqResp", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.furfuralDP>([\s\S]*?)<\/cim:TransformerObservation.furfuralDP>/g, obj, "furfuralDP", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.hotSpotTemp>([\s\S]*?)<\/cim:TransformerObservation.hotSpotTemp>/g, obj, "hotSpotTemp", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.oilColor>([\s\S]*?)<\/cim:TransformerObservation.oilColor>/g, obj, "oilColor", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.oilDielectricStrength>([\s\S]*?)<\/cim:TransformerObservation.oilDielectricStrength>/g, obj, "oilDielectricStrength", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.oilIFT>([\s\S]*?)<\/cim:TransformerObservation.oilIFT>/g, obj, "oilIFT", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.oilLevel>([\s\S]*?)<\/cim:TransformerObservation.oilLevel>/g, obj, "oilLevel", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.oilNeutralizationNumber>([\s\S]*?)<\/cim:TransformerObservation.oilNeutralizationNumber>/g, obj, "oilNeutralizationNumber", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.pumpVibration>([\s\S]*?)<\/cim:TransformerObservation.pumpVibration>/g, obj, "pumpVibration", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.status>([\s\S]*?)<\/cim:TransformerObservation.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.topOilTemp>([\s\S]*?)<\/cim:TransformerObservation.topOilTemp>/g, obj, "topOilTemp", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerObservation.waterContent>([\s\S]*?)<\/cim:TransformerObservation.waterContent>/g, obj, "waterContent", base.to_string, sub, context);
                base.parse_attributes (/<cim:TransformerObservation.ProcedureDataSets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProcedureDataSets", sub, context);
                base.parse_attribute (/<cim:TransformerObservation.Reconditioning\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Reconditioning", sub, context);
                base.parse_attribute (/<cim:TransformerObservation.Transformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Transformer", sub, context);
                base.parse_attributes (/<cim:TransformerObservation.BushingInsultationPFs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BushingInsultationPFs", sub, context);
                base.parse_attributes (/<cim:TransformerObservation.WindingInsulationPFs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindingInsulationPFs", sub, context);
                var bucket = context.parsed.TransformerObservation;
                if (null == bucket)
                   context.parsed.TransformerObservation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransformerObservation", "bushingTemp", base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "dga", base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "freqResp", base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "furfuralDP", base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "hotSpotTemp", base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "oilColor", base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "oilDielectricStrength", base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "oilIFT", base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "oilLevel", base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "oilNeutralizationNumber", base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "pumpVibration", base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "status", base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "topOilTemp", base.from_string, fields);
                base.export_element (obj, "TransformerObservation", "waterContent", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "TransformerObservation", fields);
                base.export_attribute (obj, "export_attribute", "TransformerObservation", fields);
                base.export_attribute (obj, "export_attribute", "TransformerObservation", fields);
                base.export_attribute (obj, "export_attributes", "TransformerObservation", fields);
                base.export_attribute (obj, "export_attributes", "TransformerObservation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransformerObservation_collapse" aria-expanded="true" aria-controls="TransformerObservation_collapse" style="margin-left: 10px;">TransformerObservation</a></legend>
                    <div id="TransformerObservation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#bushingTemp}}<div><b>bushingTemp</b>: {{bushingTemp}}</div>{{/bushingTemp}}
                    {{#dga}}<div><b>dga</b>: {{dga}}</div>{{/dga}}
                    {{#freqResp}}<div><b>freqResp</b>: {{freqResp}}</div>{{/freqResp}}
                    {{#furfuralDP}}<div><b>furfuralDP</b>: {{furfuralDP}}</div>{{/furfuralDP}}
                    {{#hotSpotTemp}}<div><b>hotSpotTemp</b>: {{hotSpotTemp}}</div>{{/hotSpotTemp}}
                    {{#oilColor}}<div><b>oilColor</b>: {{oilColor}}</div>{{/oilColor}}
                    {{#oilDielectricStrength}}<div><b>oilDielectricStrength</b>: {{oilDielectricStrength}}</div>{{/oilDielectricStrength}}
                    {{#oilIFT}}<div><b>oilIFT</b>: {{oilIFT}}</div>{{/oilIFT}}
                    {{#oilLevel}}<div><b>oilLevel</b>: {{oilLevel}}</div>{{/oilLevel}}
                    {{#oilNeutralizationNumber}}<div><b>oilNeutralizationNumber</b>: {{oilNeutralizationNumber}}</div>{{/oilNeutralizationNumber}}
                    {{#pumpVibration}}<div><b>pumpVibration</b>: {{pumpVibration}}</div>{{/pumpVibration}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#topOilTemp}}<div><b>topOilTemp</b>: {{topOilTemp}}</div>{{/topOilTemp}}
                    {{#waterContent}}<div><b>waterContent</b>: {{waterContent}}</div>{{/waterContent}}
                    {{#ProcedureDataSets}}<div><b>ProcedureDataSets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProcedureDataSets}}
                    {{#Reconditioning}}<div><b>Reconditioning</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Reconditioning}}&quot;);})'>{{Reconditioning}}</a></div>{{/Reconditioning}}
                    {{#Transformer}}<div><b>Transformer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Transformer}}&quot;);})'>{{Transformer}}</a></div>{{/Transformer}}
                    {{#BushingInsultationPFs}}<div><b>BushingInsultationPFs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BushingInsultationPFs}}
                    {{#WindingInsulationPFs}}<div><b>WindingInsulationPFs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WindingInsulationPFs}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProcedureDataSets) obj.ProcedureDataSets_string = obj.ProcedureDataSets.join ();
                if (obj.BushingInsultationPFs) obj.BushingInsultationPFs_string = obj.BushingInsultationPFs.join ();
                if (obj.WindingInsulationPFs) obj.WindingInsulationPFs_string = obj.WindingInsulationPFs.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProcedureDataSets_string;
                delete obj.BushingInsultationPFs_string;
                delete obj.WindingInsulationPFs_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransformerObservation_collapse" aria-expanded="true" aria-controls="TransformerObservation_collapse" style="margin-left: 10px;">TransformerObservation</a></legend>
                    <div id="TransformerObservation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bushingTemp'>bushingTemp: </label><div class='col-sm-8'><input id='bushingTemp' class='form-control' type='text'{{#bushingTemp}} value='{{bushingTemp}}'{{/bushingTemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dga'>dga: </label><div class='col-sm-8'><input id='dga' class='form-control' type='text'{{#dga}} value='{{dga}}'{{/dga}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='freqResp'>freqResp: </label><div class='col-sm-8'><input id='freqResp' class='form-control' type='text'{{#freqResp}} value='{{freqResp}}'{{/freqResp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='furfuralDP'>furfuralDP: </label><div class='col-sm-8'><input id='furfuralDP' class='form-control' type='text'{{#furfuralDP}} value='{{furfuralDP}}'{{/furfuralDP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hotSpotTemp'>hotSpotTemp: </label><div class='col-sm-8'><input id='hotSpotTemp' class='form-control' type='text'{{#hotSpotTemp}} value='{{hotSpotTemp}}'{{/hotSpotTemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='oilColor'>oilColor: </label><div class='col-sm-8'><input id='oilColor' class='form-control' type='text'{{#oilColor}} value='{{oilColor}}'{{/oilColor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='oilDielectricStrength'>oilDielectricStrength: </label><div class='col-sm-8'><input id='oilDielectricStrength' class='form-control' type='text'{{#oilDielectricStrength}} value='{{oilDielectricStrength}}'{{/oilDielectricStrength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='oilIFT'>oilIFT: </label><div class='col-sm-8'><input id='oilIFT' class='form-control' type='text'{{#oilIFT}} value='{{oilIFT}}'{{/oilIFT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='oilLevel'>oilLevel: </label><div class='col-sm-8'><input id='oilLevel' class='form-control' type='text'{{#oilLevel}} value='{{oilLevel}}'{{/oilLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='oilNeutralizationNumber'>oilNeutralizationNumber: </label><div class='col-sm-8'><input id='oilNeutralizationNumber' class='form-control' type='text'{{#oilNeutralizationNumber}} value='{{oilNeutralizationNumber}}'{{/oilNeutralizationNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pumpVibration'>pumpVibration: </label><div class='col-sm-8'><input id='pumpVibration' class='form-control' type='text'{{#pumpVibration}} value='{{pumpVibration}}'{{/pumpVibration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='topOilTemp'>topOilTemp: </label><div class='col-sm-8'><input id='topOilTemp' class='form-control' type='text'{{#topOilTemp}} value='{{topOilTemp}}'{{/topOilTemp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='waterContent'>waterContent: </label><div class='col-sm-8'><input id='waterContent' class='form-control' type='text'{{#waterContent}} value='{{waterContent}}'{{/waterContent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ProcedureDataSets'>ProcedureDataSets: </label><div class='col-sm-8'><input id='ProcedureDataSets' class='form-control' type='text'{{#ProcedureDataSets}} value='{{ProcedureDataSets}}_string'{{/ProcedureDataSets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Reconditioning'>Reconditioning: </label><div class='col-sm-8'><input id='Reconditioning' class='form-control' type='text'{{#Reconditioning}} value='{{Reconditioning}}'{{/Reconditioning}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Transformer'>Transformer: </label><div class='col-sm-8'><input id='Transformer' class='form-control' type='text'{{#Transformer}} value='{{Transformer}}'{{/Transformer}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ProcedureDataSets", "ProcedureDataSet", "0..*", "0..*"],
                        ["Reconditioning", "Reconditioning", "1", "0..*"],
                        ["Transformer", "TransformerTank", "0..1", "0..*"],
                        ["BushingInsultationPFs", "BushingInsulationPF", "0..*", "0..1"],
                        ["WindingInsulationPFs", "WindingInsulation", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Joint connects two or more cables.
         *
         * It includes the portion of cable under wipes, welds, or other seals.
         *
         */
        class Joint extends Assets.Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Joint;
                if (null == bucket)
                   cim_data.Joint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Joint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.Asset.prototype.parse.call (this, context, sub);
                obj.cls = "Joint";
                base.parse_attribute (/<cim:Joint.configurationKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "configurationKind", sub, context);
                base.parse_attribute (/<cim:Joint.fillKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "fillKind", sub, context);
                base.parse_element (/<cim:Joint.insulation>([\s\S]*?)<\/cim:Joint.insulation>/g, obj, "insulation", base.to_string, sub, context);
                var bucket = context.parsed.Joint;
                if (null == bucket)
                   context.parsed.Joint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.Asset.prototype.export.call (this, obj, false);

                base.export_element (obj, "Joint", "configurationKind", base.from_string, fields);
                base.export_element (obj, "Joint", "fillKind", base.from_string, fields);
                base.export_element (obj, "Joint", "insulation", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Joint_collapse" aria-expanded="true" aria-controls="Joint_collapse" style="margin-left: 10px;">Joint</a></legend>
                    <div id="Joint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.template.call (this) +
                    `
                    {{#configurationKind}}<div><b>configurationKind</b>: {{configurationKind}}</div>{{/configurationKind}}
                    {{#fillKind}}<div><b>fillKind</b>: {{fillKind}}</div>{{/fillKind}}
                    {{#insulation}}<div><b>insulation</b>: {{insulation}}</div>{{/insulation}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.JointConfigurationKind = []; if (!obj.configurationKind) obj.JointConfigurationKind.push ({ id: '', selected: true}); for (var property in JointConfigurationKind) obj.JointConfigurationKind.push ({ id: property, selected: obj.configurationKind && obj.configurationKind.endsWith ('.' + property)});
                obj.JointFillKind = []; if (!obj.fillKind) obj.JointFillKind.push ({ id: '', selected: true}); for (var property in JointFillKind) obj.JointFillKind.push ({ id: property, selected: obj.fillKind && obj.fillKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.JointConfigurationKind;
                delete obj.JointFillKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Joint_collapse" aria-expanded="true" aria-controls="Joint_collapse" style="margin-left: 10px;">Joint</a></legend>
                    <div id="Joint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='configurationKind'>configurationKind: </label><div class='col-sm-8'><select id='configurationKind' class='form-control'>{{#JointConfigurationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/JointConfigurationKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fillKind'>fillKind: </label><div class='col-sm-8'><select id='fillKind' class='form-control'>{{#JointFillKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/JointFillKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='insulation'>insulation: </label><div class='col-sm-8'><input id='insulation' class='form-control' type='text'{{#insulation}} value='{{insulation}}'{{/insulation}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.Reconditioning;
                if (null == bucket)
                   cim_data.Reconditioning = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Reconditioning[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Reconditioning";
                base.parse_element (/<cim:Reconditioning.dateTime>([\s\S]*?)<\/cim:Reconditioning.dateTime>/g, obj, "dateTime", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:Reconditioning.TransformerObservations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerObservations", sub, context);
                base.parse_attribute (/<cim:Reconditioning.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                base.parse_attributes (/<cim:Reconditioning.PowerRatings\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerRatings", sub, context);
                var bucket = context.parsed.Reconditioning;
                if (null == bucket)
                   context.parsed.Reconditioning = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Reconditioning", "dateTime", base.from_datetime, fields);
                base.export_attribute (obj, "export_attributes", "Reconditioning", fields);
                base.export_attribute (obj, "export_attribute", "Reconditioning", fields);
                base.export_attribute (obj, "export_attributes", "Reconditioning", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Reconditioning_collapse" aria-expanded="true" aria-controls="Reconditioning_collapse" style="margin-left: 10px;">Reconditioning</a></legend>
                    <div id="Reconditioning_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dateTime}}<div><b>dateTime</b>: {{dateTime}}</div>{{/dateTime}}
                    {{#TransformerObservations}}<div><b>TransformerObservations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TransformerObservations}}
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Asset}}&quot;);})'>{{Asset}}</a></div>{{/Asset}}
                    {{#PowerRatings}}<div><b>PowerRatings</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PowerRatings}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TransformerObservations) obj.TransformerObservations_string = obj.TransformerObservations.join ();
                if (obj.PowerRatings) obj.PowerRatings_string = obj.PowerRatings.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TransformerObservations_string;
                delete obj.PowerRatings_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Reconditioning_collapse" aria-expanded="true" aria-controls="Reconditioning_collapse" style="margin-left: 10px;">Reconditioning</a></legend>
                    <div id="Reconditioning_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dateTime'>dateTime: </label><div class='col-sm-8'><input id='dateTime' class='form-control' type='text'{{#dateTime}} value='{{dateTime}}'{{/dateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Asset'>Asset: </label><div class='col-sm-8'><input id='Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PowerRatings'>PowerRatings: </label><div class='col-sm-8'><input id='PowerRatings' class='form-control' type='text'{{#PowerRatings}} value='{{PowerRatings}}_string'{{/PowerRatings}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["TransformerObservations", "TransformerObservation", "0..*", "1"],
                        ["Asset", "Asset", "0..1", "0..*"],
                        ["PowerRatings", "CoolingPowerRating", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * A substance that either (1) provides the means of transmission of a force or effect, such as hydraulic fluid, or (2) is used for a surrounding or enveloping substance, such as oil in a transformer or circuit breaker.
         *
         */
        class Medium extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Medium;
                if (null == bucket)
                   cim_data.Medium = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Medium[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Medium";
                base.parse_attribute (/<cim:Medium.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Medium.volumeSpec>([\s\S]*?)<\/cim:Medium.volumeSpec>/g, obj, "volumeSpec", base.to_string, sub, context);
                base.parse_attributes (/<cim:Medium.Assets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attribute (/<cim:Medium.Specification\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Specification", sub, context);
                var bucket = context.parsed.Medium;
                if (null == bucket)
                   context.parsed.Medium = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Medium", "kind", base.from_string, fields);
                base.export_element (obj, "Medium", "volumeSpec", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "Medium", fields);
                base.export_attribute (obj, "export_attribute", "Medium", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Medium_collapse" aria-expanded="true" aria-controls="Medium_collapse" style="margin-left: 10px;">Medium</a></legend>
                    <div id="Medium_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#volumeSpec}}<div><b>volumeSpec</b>: {{volumeSpec}}</div>{{/volumeSpec}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Assets}}
                    {{#Specification}}<div><b>Specification</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Specification}}&quot;);})'>{{Specification}}</a></div>{{/Specification}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.MediumKind = []; if (!obj.kind) obj.MediumKind.push ({ id: '', selected: true}); for (var property in MediumKind) obj.MediumKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.Assets) obj.Assets_string = obj.Assets.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MediumKind;
                delete obj.Assets_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Medium_collapse" aria-expanded="true" aria-controls="Medium_collapse" style="margin-left: 10px;">Medium</a></legend>
                    <div id="Medium_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#MediumKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/MediumKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='volumeSpec'>volumeSpec: </label><div class='col-sm-8'><input id='volumeSpec' class='form-control' type='text'{{#volumeSpec}} value='{{volumeSpec}}'{{/volumeSpec}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Assets'>Assets: </label><div class='col-sm-8'><input id='Assets' class='form-control' type='text'{{#Assets}} value='{{Assets}}_string'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Specification'>Specification: </label><div class='col-sm-8'><input id='Specification' class='form-control' type='text'{{#Specification}} value='{{Specification}}'{{/Specification}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Assets", "Asset", "0..*", "0..*"],
                        ["Specification", "Specification", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A facility may contain buildings, storage facilities, switching facilities, power generation, manufacturing facilities, maintenance facilities, etc.
         *
         */
        class Facility extends Assets.AssetContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Facility;
                if (null == bucket)
                   cim_data.Facility = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Facility[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.AssetContainer.prototype.parse.call (this, context, sub);
                obj.cls = "Facility";
                base.parse_element (/<cim:Facility.kind>([\s\S]*?)<\/cim:Facility.kind>/g, obj, "kind", base.to_string, sub, context);
                var bucket = context.parsed.Facility;
                if (null == bucket)
                   context.parsed.Facility = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.AssetContainer.prototype.export.call (this, obj, false);

                base.export_element (obj, "Facility", "kind", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Facility_collapse" aria-expanded="true" aria-controls="Facility_collapse" style="margin-left: 10px;">Facility</a></legend>
                    <div id="Facility_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetContainer.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Facility_collapse" aria-expanded="true" aria-controls="Facility_collapse" style="margin-left: 10px;">Facility</a></legend>
                    <div id="Facility_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.AssetContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><input id='kind' class='form-control' type='text'{{#kind}} value='{{kind}}'{{/kind}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.BushingInsulationPF;
                if (null == bucket)
                   cim_data.BushingInsulationPF = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BushingInsulationPF[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BushingInsulationPF";
                base.parse_element (/<cim:BushingInsulationPF.status>([\s\S]*?)<\/cim:BushingInsulationPF.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:BushingInsulationPF.testKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "testKind", sub, context);
                base.parse_attribute (/<cim:BushingInsulationPF.Bushing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bushing", sub, context);
                base.parse_attribute (/<cim:BushingInsulationPF.TransformerObservation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerObservation", sub, context);
                var bucket = context.parsed.BushingInsulationPF;
                if (null == bucket)
                   context.parsed.BushingInsulationPF = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BushingInsulationPF", "status", base.from_string, fields);
                base.export_element (obj, "BushingInsulationPF", "testKind", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "BushingInsulationPF", fields);
                base.export_attribute (obj, "export_attribute", "BushingInsulationPF", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BushingInsulationPF_collapse" aria-expanded="true" aria-controls="BushingInsulationPF_collapse" style="margin-left: 10px;">BushingInsulationPF</a></legend>
                    <div id="BushingInsulationPF_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#testKind}}<div><b>testKind</b>: {{testKind}}</div>{{/testKind}}
                    {{#Bushing}}<div><b>Bushing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Bushing}}&quot;);})'>{{Bushing}}</a></div>{{/Bushing}}
                    {{#TransformerObservation}}<div><b>TransformerObservation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransformerObservation}}&quot;);})'>{{TransformerObservation}}</a></div>{{/TransformerObservation}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.BushingInsulationPfTestKind = []; if (!obj.testKind) obj.BushingInsulationPfTestKind.push ({ id: '', selected: true}); for (var property in BushingInsulationPfTestKind) obj.BushingInsulationPfTestKind.push ({ id: property, selected: obj.testKind && obj.testKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.BushingInsulationPfTestKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BushingInsulationPF_collapse" aria-expanded="true" aria-controls="BushingInsulationPF_collapse" style="margin-left: 10px;">BushingInsulationPF</a></legend>
                    <div id="BushingInsulationPF_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='testKind'>testKind: </label><div class='col-sm-8'><select id='testKind' class='form-control'>{{#BushingInsulationPfTestKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/BushingInsulationPfTestKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Bushing'>Bushing: </label><div class='col-sm-8'><input id='Bushing' class='form-control' type='text'{{#Bushing}} value='{{Bushing}}'{{/Bushing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransformerObservation'>TransformerObservation: </label><div class='col-sm-8'><input id='TransformerObservation' class='form-control' type='text'{{#TransformerObservation}} value='{{TransformerObservation}}'{{/TransformerObservation}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Bushing", "Bushing", "0..1", "0..*"],
                        ["TransformerObservation", "TransformerObservation", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Streetlight asset.
         *
         */
        class Streetlight extends Assets.Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Streetlight;
                if (null == bucket)
                   cim_data.Streetlight = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Streetlight[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.Asset.prototype.parse.call (this, context, sub);
                obj.cls = "Streetlight";
                base.parse_element (/<cim:Streetlight.armLength>([\s\S]*?)<\/cim:Streetlight.armLength>/g, obj, "armLength", base.to_string, sub, context);
                base.parse_attribute (/<cim:Streetlight.lampKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "lampKind", sub, context);
                base.parse_element (/<cim:Streetlight.lightRating>([\s\S]*?)<\/cim:Streetlight.lightRating>/g, obj, "lightRating", base.to_string, sub, context);
                base.parse_attribute (/<cim:Streetlight.Pole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pole", sub, context);
                var bucket = context.parsed.Streetlight;
                if (null == bucket)
                   context.parsed.Streetlight = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.Asset.prototype.export.call (this, obj, false);

                base.export_element (obj, "Streetlight", "armLength", base.from_string, fields);
                base.export_element (obj, "Streetlight", "lampKind", base.from_string, fields);
                base.export_element (obj, "Streetlight", "lightRating", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "Streetlight", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Streetlight_collapse" aria-expanded="true" aria-controls="Streetlight_collapse" style="margin-left: 10px;">Streetlight</a></legend>
                    <div id="Streetlight_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.template.call (this) +
                    `
                    {{#armLength}}<div><b>armLength</b>: {{armLength}}</div>{{/armLength}}
                    {{#lampKind}}<div><b>lampKind</b>: {{lampKind}}</div>{{/lampKind}}
                    {{#lightRating}}<div><b>lightRating</b>: {{lightRating}}</div>{{/lightRating}}
                    {{#Pole}}<div><b>Pole</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Pole}}&quot;);})'>{{Pole}}</a></div>{{/Pole}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.StreetlightLampKind = []; if (!obj.lampKind) obj.StreetlightLampKind.push ({ id: '', selected: true}); for (var property in StreetlightLampKind) obj.StreetlightLampKind.push ({ id: property, selected: obj.lampKind && obj.lampKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.StreetlightLampKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Streetlight_collapse" aria-expanded="true" aria-controls="Streetlight_collapse" style="margin-left: 10px;">Streetlight</a></legend>
                    <div id="Streetlight_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='armLength'>armLength: </label><div class='col-sm-8'><input id='armLength' class='form-control' type='text'{{#armLength}} value='{{armLength}}'{{/armLength}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lampKind'>lampKind: </label><div class='col-sm-8'><select id='lampKind' class='form-control'>{{#StreetlightLampKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/StreetlightLampKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lightRating'>lightRating: </label><div class='col-sm-8'><input id='lightRating' class='form-control' type='text'{{#lightRating}} value='{{lightRating}}'{{/lightRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Pole'>Pole: </label><div class='col-sm-8'><input id='Pole' class='form-control' type='text'{{#Pole}} value='{{Pole}}'{{/Pole}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Pole", "Pole", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Pole asset.
         *
         */
        class Pole extends Structure
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Pole;
                if (null == bucket)
                   cim_data.Pole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Pole[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Structure.prototype.parse.call (this, context, sub);
                obj.cls = "Pole";
                base.parse_attribute (/<cim:Pole.baseKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "baseKind", sub, context);
                base.parse_element (/<cim:Pole.breastBlock>([\s\S]*?)<\/cim:Pole.breastBlock>/g, obj, "breastBlock", base.to_boolean, sub, context);
                base.parse_element (/<cim:Pole.classification>([\s\S]*?)<\/cim:Pole.classification>/g, obj, "classification", base.to_string, sub, context);
                base.parse_element (/<cim:Pole.construction>([\s\S]*?)<\/cim:Pole.construction>/g, obj, "construction", base.to_string, sub, context);
                base.parse_element (/<cim:Pole.diameter>([\s\S]*?)<\/cim:Pole.diameter>/g, obj, "diameter", base.to_string, sub, context);
                base.parse_element (/<cim:Pole.jpaReference>([\s\S]*?)<\/cim:Pole.jpaReference>/g, obj, "jpaReference", base.to_string, sub, context);
                base.parse_element (/<cim:Pole.length>([\s\S]*?)<\/cim:Pole.length>/g, obj, "length", base.to_string, sub, context);
                base.parse_attribute (/<cim:Pole.preservativeKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "preservativeKind", sub, context);
                base.parse_element (/<cim:Pole.speciesType>([\s\S]*?)<\/cim:Pole.speciesType>/g, obj, "speciesType", base.to_string, sub, context);
                base.parse_element (/<cim:Pole.treatedDateTime>([\s\S]*?)<\/cim:Pole.treatedDateTime>/g, obj, "treatedDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:Pole.treatmentKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "treatmentKind", sub, context);
                base.parse_attributes (/<cim:Pole.Streetlights\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Streetlights", sub, context);
                var bucket = context.parsed.Pole;
                if (null == bucket)
                   context.parsed.Pole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Structure.prototype.export.call (this, obj, false);

                base.export_element (obj, "Pole", "baseKind", base.from_string, fields);
                base.export_element (obj, "Pole", "breastBlock", base.from_boolean, fields);
                base.export_element (obj, "Pole", "classification", base.from_string, fields);
                base.export_element (obj, "Pole", "construction", base.from_string, fields);
                base.export_element (obj, "Pole", "diameter", base.from_string, fields);
                base.export_element (obj, "Pole", "jpaReference", base.from_string, fields);
                base.export_element (obj, "Pole", "length", base.from_string, fields);
                base.export_element (obj, "Pole", "preservativeKind", base.from_string, fields);
                base.export_element (obj, "Pole", "speciesType", base.from_string, fields);
                base.export_element (obj, "Pole", "treatedDateTime", base.from_datetime, fields);
                base.export_element (obj, "Pole", "treatmentKind", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "Pole", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Pole_collapse" aria-expanded="true" aria-controls="Pole_collapse" style="margin-left: 10px;">Pole</a></legend>
                    <div id="Pole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Structure.prototype.template.call (this) +
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
                    {{#Streetlights}}<div><b>Streetlights</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Streetlights}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.PoleBaseKind = []; if (!obj.baseKind) obj.PoleBaseKind.push ({ id: '', selected: true}); for (var property in PoleBaseKind) obj.PoleBaseKind.push ({ id: property, selected: obj.baseKind && obj.baseKind.endsWith ('.' + property)});
                obj.PolePreservativeKind = []; if (!obj.preservativeKind) obj.PolePreservativeKind.push ({ id: '', selected: true}); for (var property in PolePreservativeKind) obj.PolePreservativeKind.push ({ id: property, selected: obj.preservativeKind && obj.preservativeKind.endsWith ('.' + property)});
                obj.PoleTreatmentKind = []; if (!obj.treatmentKind) obj.PoleTreatmentKind.push ({ id: '', selected: true}); for (var property in PoleTreatmentKind) obj.PoleTreatmentKind.push ({ id: property, selected: obj.treatmentKind && obj.treatmentKind.endsWith ('.' + property)});
                if (obj.Streetlights) obj.Streetlights_string = obj.Streetlights.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PoleBaseKind;
                delete obj.PolePreservativeKind;
                delete obj.PoleTreatmentKind;
                delete obj.Streetlights_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Pole_collapse" aria-expanded="true" aria-controls="Pole_collapse" style="margin-left: 10px;">Pole</a></legend>
                    <div id="Pole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Structure.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='baseKind'>baseKind: </label><div class='col-sm-8'><select id='baseKind' class='form-control'>{{#PoleBaseKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/PoleBaseKind}}</select></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='breastBlock'>breastBlock: </label><div class='col-sm-8'><input id='breastBlock' class='form-check-input' type='checkbox'{{#breastBlock}} checked{{/breastBlock}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='classification'>classification: </label><div class='col-sm-8'><input id='classification' class='form-control' type='text'{{#classification}} value='{{classification}}'{{/classification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='construction'>construction: </label><div class='col-sm-8'><input id='construction' class='form-control' type='text'{{#construction}} value='{{construction}}'{{/construction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='diameter'>diameter: </label><div class='col-sm-8'><input id='diameter' class='form-control' type='text'{{#diameter}} value='{{diameter}}'{{/diameter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='jpaReference'>jpaReference: </label><div class='col-sm-8'><input id='jpaReference' class='form-control' type='text'{{#jpaReference}} value='{{jpaReference}}'{{/jpaReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='length'>length: </label><div class='col-sm-8'><input id='length' class='form-control' type='text'{{#length}} value='{{length}}'{{/length}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='preservativeKind'>preservativeKind: </label><div class='col-sm-8'><select id='preservativeKind' class='form-control'>{{#PolePreservativeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/PolePreservativeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='speciesType'>speciesType: </label><div class='col-sm-8'><input id='speciesType' class='form-control' type='text'{{#speciesType}} value='{{speciesType}}'{{/speciesType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='treatedDateTime'>treatedDateTime: </label><div class='col-sm-8'><input id='treatedDateTime' class='form-control' type='text'{{#treatedDateTime}} value='{{treatedDateTime}}'{{/treatedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='treatmentKind'>treatmentKind: </label><div class='col-sm-8'><select id='treatmentKind' class='form-control'>{{#PoleTreatmentKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/PoleTreatmentKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Streetlights", "Streetlight", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Tower asset.
         *
         * Dimensions of the Tower are specified in associated DimensionsInfo class.
         *
         */
        class Tower extends Structure
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Tower;
                if (null == bucket)
                   cim_data.Tower = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Tower[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Structure.prototype.parse.call (this, context, sub);
                obj.cls = "Tower";
                base.parse_attribute (/<cim:Tower.constructionKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "constructionKind", sub, context);
                var bucket = context.parsed.Tower;
                if (null == bucket)
                   context.parsed.Tower = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Structure.prototype.export.call (this, obj, false);

                base.export_element (obj, "Tower", "constructionKind", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Tower_collapse" aria-expanded="true" aria-controls="Tower_collapse" style="margin-left: 10px;">Tower</a></legend>
                    <div id="Tower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Structure.prototype.template.call (this) +
                    `
                    {{#constructionKind}}<div><b>constructionKind</b>: {{constructionKind}}</div>{{/constructionKind}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TowerConstructionKind = []; if (!obj.constructionKind) obj.TowerConstructionKind.push ({ id: '', selected: true}); for (var property in TowerConstructionKind) obj.TowerConstructionKind.push ({ id: property, selected: obj.constructionKind && obj.constructionKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TowerConstructionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Tower_collapse" aria-expanded="true" aria-controls="Tower_collapse" style="margin-left: 10px;">Tower</a></legend>
                    <div id="Tower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Structure.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='constructionKind'>constructionKind: </label><div class='col-sm-8'><select id='constructionKind' class='form-control'>{{#TowerConstructionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TowerConstructionKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * Underground structure.
         *
         */
        class UndergroundStructure extends Structure
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UndergroundStructure;
                if (null == bucket)
                   cim_data.UndergroundStructure = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UndergroundStructure[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Structure.prototype.parse.call (this, context, sub);
                obj.cls = "UndergroundStructure";
                base.parse_element (/<cim:UndergroundStructure.hasVentilation>([\s\S]*?)<\/cim:UndergroundStructure.hasVentilation>/g, obj, "hasVentilation", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:UndergroundStructure.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:UndergroundStructure.material>([\s\S]*?)<\/cim:UndergroundStructure.material>/g, obj, "material", base.to_string, sub, context);
                base.parse_element (/<cim:UndergroundStructure.sealingWarrantyExpiresDate>([\s\S]*?)<\/cim:UndergroundStructure.sealingWarrantyExpiresDate>/g, obj, "sealingWarrantyExpiresDate", base.to_string, sub, context);
                var bucket = context.parsed.UndergroundStructure;
                if (null == bucket)
                   context.parsed.UndergroundStructure = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Structure.prototype.export.call (this, obj, false);

                base.export_element (obj, "UndergroundStructure", "hasVentilation", base.from_boolean, fields);
                base.export_element (obj, "UndergroundStructure", "kind", base.from_string, fields);
                base.export_element (obj, "UndergroundStructure", "material", base.from_string, fields);
                base.export_element (obj, "UndergroundStructure", "sealingWarrantyExpiresDate", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UndergroundStructure_collapse" aria-expanded="true" aria-controls="UndergroundStructure_collapse" style="margin-left: 10px;">UndergroundStructure</a></legend>
                    <div id="UndergroundStructure_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Structure.prototype.template.call (this) +
                    `
                    {{#hasVentilation}}<div><b>hasVentilation</b>: {{hasVentilation}}</div>{{/hasVentilation}}
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#material}}<div><b>material</b>: {{material}}</div>{{/material}}
                    {{#sealingWarrantyExpiresDate}}<div><b>sealingWarrantyExpiresDate</b>: {{sealingWarrantyExpiresDate}}</div>{{/sealingWarrantyExpiresDate}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UndergroundStructureKind = []; if (!obj.kind) obj.UndergroundStructureKind.push ({ id: '', selected: true}); for (var property in UndergroundStructureKind) obj.UndergroundStructureKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UndergroundStructureKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UndergroundStructure_collapse" aria-expanded="true" aria-controls="UndergroundStructure_collapse" style="margin-left: 10px;">UndergroundStructure</a></legend>
                    <div id="UndergroundStructure_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Structure.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='hasVentilation'>hasVentilation: </label><div class='col-sm-8'><input id='hasVentilation' class='form-check-input' type='checkbox'{{#hasVentilation}} checked{{/hasVentilation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#UndergroundStructureKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UndergroundStructureKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='material'>material: </label><div class='col-sm-8'><input id='material' class='form-control' type='text'{{#material}} value='{{material}}'{{/material}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sealingWarrantyExpiresDate'>sealingWarrantyExpiresDate: </label><div class='col-sm-8'><input id='sealingWarrantyExpiresDate' class='form-control' type='text'{{#sealingWarrantyExpiresDate}} value='{{sealingWarrantyExpiresDate}}'{{/sealingWarrantyExpiresDate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        return (
            {
                FailureEvent: FailureEvent,
                Specification: Specification,
                Bushing: Bushing,
                StructureSupport: StructureSupport,
                Facility: Facility,
                FinancialInfo: FinancialInfo,
                DuctBank: DuctBank,
                BushingInsulationPF: BushingInsulationPF,
                Streetlight: Streetlight,
                UndergroundStructure: UndergroundStructure,
                Joint: Joint,
                WindingInsulation: WindingInsulation,
                GenericAssetModelOrMaterial: GenericAssetModelOrMaterial,
                ReliabilityInfo: ReliabilityInfo,
                Pole: Pole,
                FACTSDevice: FACTSDevice,
                CoolingPowerRating: CoolingPowerRating,
                AssetPropertyCurve: AssetPropertyCurve,
                TransformerObservation: TransformerObservation,
                Reconditioning: Reconditioning,
                Medium: Medium,
                Cabinet: Cabinet,
                Structure: Structure,
                Tower: Tower,
                DimensionsInfo: DimensionsInfo
            }
        );
    }
);