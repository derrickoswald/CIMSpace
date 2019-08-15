define
(
    ["model/base", "model/StandardModels"],
    /**
     * High voltage direct current (HVDC) models.
     *
     */
    function (base, StandardModels)
    {

        /**
         * HVDC whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class HVDCDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.HVDCDynamics;
                if (null == bucket)
                   cim_data.HVDCDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HVDCDynamics[obj.id];
            }

            parse (context, sub)
            {
                let obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "HVDCDynamics";
                let bucket = context.parsed.HVDCDynamics;
                if (null == bucket)
                   context.parsed.HVDCDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#HVDCDynamics_collapse" aria-expanded="true" aria-controls="HVDCDynamics_collapse" style="margin-left: 10px;">HVDCDynamics</a></legend>
                    <div id="HVDCDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_HVDCDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_HVDCDynamics_collapse" style="margin-left: 10px;">HVDCDynamics</a></legend>
                    <div id="{{id}}_HVDCDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "HVDCDynamics" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * VSC function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class VSCDynamics extends HVDCDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.VSCDynamics;
                if (null == bucket)
                   cim_data.VSCDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VSCDynamics[obj.id];
            }

            parse (context, sub)
            {
                let obj = HVDCDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "VSCDynamics";
                base.parse_attribute (/<cim:VSCDynamics.VsConverter\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VsConverter", sub, context);
                let bucket = context.parsed.VSCDynamics;
                if (null == bucket)
                   context.parsed.VSCDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = HVDCDynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "VSCDynamics", "VsConverter", "VsConverter", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#VSCDynamics_collapse" aria-expanded="true" aria-controls="VSCDynamics_collapse" style="margin-left: 10px;">VSCDynamics</a></legend>
                    <div id="VSCDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HVDCDynamics.prototype.template.call (this) +
                    `
                    {{#VsConverter}}<div><b>VsConverter</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{VsConverter}}");}); return false;'>{{VsConverter}}</a></div>{{/VsConverter}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_VSCDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_VSCDynamics_collapse" style="margin-left: 10px;">VSCDynamics</a></legend>
                    <div id="{{id}}_VSCDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HVDCDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VsConverter'>VsConverter: </label><div class='col-sm-8'><input id='{{id}}_VsConverter' class='form-control' type='text'{{#VsConverter}} value='{{VsConverter}}'{{/VsConverter}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "VSCDynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_VsConverter").value; if ("" !== temp) obj["VsConverter"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["VsConverter", "1", "0..1", "VsConverter", "VSCDynamics"]
                        ]
                    )
                );
            }
        }

        /**
         * CSC function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class CSCDynamics extends HVDCDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CSCDynamics;
                if (null == bucket)
                   cim_data.CSCDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CSCDynamics[obj.id];
            }

            parse (context, sub)
            {
                let obj = HVDCDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "CSCDynamics";
                base.parse_attribute (/<cim:CSCDynamics.CSConverter\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CSConverter", sub, context);
                let bucket = context.parsed.CSCDynamics;
                if (null == bucket)
                   context.parsed.CSCDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = HVDCDynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CSCDynamics", "CSConverter", "CSConverter", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CSCDynamics_collapse" aria-expanded="true" aria-controls="CSCDynamics_collapse" style="margin-left: 10px;">CSCDynamics</a></legend>
                    <div id="CSCDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HVDCDynamics.prototype.template.call (this) +
                    `
                    {{#CSConverter}}<div><b>CSConverter</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CSConverter}}");}); return false;'>{{CSConverter}}</a></div>{{/CSConverter}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CSCDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_CSCDynamics_collapse" style="margin-left: 10px;">CSCDynamics</a></legend>
                    <div id="{{id}}_CSCDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + HVDCDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CSConverter'>CSConverter: </label><div class='col-sm-8'><input id='{{id}}_CSConverter' class='form-control' type='text'{{#CSConverter}} value='{{CSConverter}}'{{/CSConverter}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CSCDynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_CSConverter").value; if ("" !== temp) obj["CSConverter"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CSConverter", "1", "0..1", "CsConverter", "CSCDynamics"]
                        ]
                    )
                );
            }
        }

        return (
            {
                CSCDynamics: CSCDynamics,
                HVDCDynamics: HVDCDynamics,
                VSCDynamics: VSCDynamics
            }
        );
    }
);