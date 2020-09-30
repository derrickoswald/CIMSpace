define
(
    ["model/base", "model/Common", "model/Meas"],
    function (base, Common, Meas)
    {
        /**
         * A type of limit that indicates if it is enforced and, through association, the organisation responsible for setting the limit.
         *
         */
        class ViolationLimit extends Meas.Limit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ViolationLimit;
                if (null == bucket)
                   cim_data.ViolationLimit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ViolationLimit[obj.id];
            }

            parse (context, sub)
            {
                let obj = Meas.Limit.prototype.parse.call (this, context, sub);
                obj.cls = "ViolationLimit";
                base.parse_element (/<cim:ViolationLimit.enforced>([\s\S]*?)<\/cim:ViolationLimit.enforced>/g, obj, "enforced", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ViolationLimit.Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attribute (/<cim:ViolationLimit.MktMeasurement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktMeasurement", sub, context);
                let bucket = context.parsed.ViolationLimit;
                if (null == bucket)
                   context.parsed.ViolationLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Meas.Limit.prototype.export.call (this, obj, false);

                base.export_element (obj, "ViolationLimit", "enforced", "enforced",  base.from_boolean, fields);
                base.export_attribute (obj, "ViolationLimit", "Flowgate", "Flowgate", fields);
                base.export_attribute (obj, "ViolationLimit", "MktMeasurement", "MktMeasurement", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ViolationLimit_collapse" aria-expanded="true" aria-controls="ViolationLimit_collapse" style="margin-left: 10px;">ViolationLimit</a></legend>
                    <div id="ViolationLimit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.Limit.prototype.template.call (this) +
                    `
                    {{#enforced}}<div><b>enforced</b>: {{enforced}}</div>{{/enforced}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Flowgate}}");}); return false;'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#MktMeasurement}}<div><b>MktMeasurement</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MktMeasurement}}");}); return false;'>{{MktMeasurement}}</a></div>{{/MktMeasurement}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ViolationLimit_collapse" aria-expanded="true" aria-controls="{{id}}_ViolationLimit_collapse" style="margin-left: 10px;">ViolationLimit</a></legend>
                    <div id="{{id}}_ViolationLimit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.Limit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_enforced'>enforced: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_enforced' class='form-check-input' type='checkbox'{{#enforced}} checked{{/enforced}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktMeasurement'>MktMeasurement: </label><div class='col-sm-8'><input id='{{id}}_MktMeasurement' class='form-control' type='text'{{#MktMeasurement}} value='{{MktMeasurement}}'{{/MktMeasurement}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ViolationLimit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_enforced").checked; if (temp) obj["enforced"] = true;
                temp = document.getElementById (id + "_Flowgate").value; if ("" !== temp) obj["Flowgate"] = temp;
                temp = document.getElementById (id + "_MktMeasurement").value; if ("" !== temp) obj["MktMeasurement"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Flowgate", "0..1", "0..*", "Flowgate", "ViolationLimits"],
                            ["MktMeasurement", "0..1", "0..*", "MktMeasurement", "ViolationLimit"]
                        ]
                    )
                );
            }
        }

        /**
         * Financial Transmission Rights (FTR) regarding transmission capacity at a flowgate.
         *
         */
        class FTR extends Common.Agreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.FTR;
                if (null == bucket)
                   cim_data.FTR = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FTR[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "FTR";
                base.parse_element (/<cim:FTR.action>([\s\S]*?)<\/cim:FTR.action>/g, obj, "action", base.to_string, sub, context);
                base.parse_element (/<cim:FTR.baseEnergy>([\s\S]*?)<\/cim:FTR.baseEnergy>/g, obj, "baseEnergy", base.to_string, sub, context);
                base.parse_element (/<cim:FTR.class>([\s\S]*?)<\/cim:FTR.class>/g, obj, "class", base.to_string, sub, context);
                base.parse_element (/<cim:FTR.ftrType>([\s\S]*?)<\/cim:FTR.ftrType>/g, obj, "ftrType", base.to_string, sub, context);
                base.parse_element (/<cim:FTR.optimized>([\s\S]*?)<\/cim:FTR.optimized>/g, obj, "optimized", base.to_string, sub, context);
                base.parse_attribute (/<cim:FTR.EnergyPriceCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnergyPriceCurve", sub, context);
                base.parse_attribute (/<cim:FTR.Flowgate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attributes (/<cim:FTR.Pnodes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Pnodes", sub, context);
                let bucket = context.parsed.FTR;
                if (null == bucket)
                   context.parsed.FTR = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "FTR", "action", "action",  base.from_string, fields);
                base.export_element (obj, "FTR", "baseEnergy", "baseEnergy",  base.from_string, fields);
                base.export_element (obj, "FTR", "class", "class",  base.from_string, fields);
                base.export_element (obj, "FTR", "ftrType", "ftrType",  base.from_string, fields);
                base.export_element (obj, "FTR", "optimized", "optimized",  base.from_string, fields);
                base.export_attribute (obj, "FTR", "EnergyPriceCurve", "EnergyPriceCurve", fields);
                base.export_attribute (obj, "FTR", "Flowgate", "Flowgate", fields);
                base.export_attributes (obj, "FTR", "Pnodes", "Pnodes", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FTR_collapse" aria-expanded="true" aria-controls="FTR_collapse" style="margin-left: 10px;">FTR</a></legend>
                    <div id="FTR_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
                    `
                    {{#action}}<div><b>action</b>: {{action}}</div>{{/action}}
                    {{#baseEnergy}}<div><b>baseEnergy</b>: {{baseEnergy}}</div>{{/baseEnergy}}
                    {{#class}}<div><b>class</b>: {{class}}</div>{{/class}}
                    {{#ftrType}}<div><b>ftrType</b>: {{ftrType}}</div>{{/ftrType}}
                    {{#optimized}}<div><b>optimized</b>: {{optimized}}</div>{{/optimized}}
                    {{#EnergyPriceCurve}}<div><b>EnergyPriceCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{EnergyPriceCurve}}");}); return false;'>{{EnergyPriceCurve}}</a></div>{{/EnergyPriceCurve}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Flowgate}}");}); return false;'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#Pnodes}}<div><b>Pnodes</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Pnodes}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Pnodes"]) obj["Pnodes_string"] = obj["Pnodes"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Pnodes_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FTR_collapse" aria-expanded="true" aria-controls="{{id}}_FTR_collapse" style="margin-left: 10px;">FTR</a></legend>
                    <div id="{{id}}_FTR_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_action'>action: </label><div class='col-sm-8'><input id='{{id}}_action' class='form-control' type='text'{{#action}} value='{{action}}'{{/action}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_baseEnergy'>baseEnergy: </label><div class='col-sm-8'><input id='{{id}}_baseEnergy' class='form-control' type='text'{{#baseEnergy}} value='{{baseEnergy}}'{{/baseEnergy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_class'>class: </label><div class='col-sm-8'><input id='{{id}}_class' class='form-control' type='text'{{#class}} value='{{class}}'{{/class}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ftrType'>ftrType: </label><div class='col-sm-8'><input id='{{id}}_ftrType' class='form-control' type='text'{{#ftrType}} value='{{ftrType}}'{{/ftrType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_optimized'>optimized: </label><div class='col-sm-8'><input id='{{id}}_optimized' class='form-control' type='text'{{#optimized}} value='{{optimized}}'{{/optimized}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergyPriceCurve'>EnergyPriceCurve: </label><div class='col-sm-8'><input id='{{id}}_EnergyPriceCurve' class='form-control' type='text'{{#EnergyPriceCurve}} value='{{EnergyPriceCurve}}'{{/EnergyPriceCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='{{id}}_Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Pnodes'>Pnodes: </label><div class='col-sm-8'><input id='{{id}}_Pnodes' class='form-control' type='text'{{#Pnodes}} value='{{Pnodes_string}}'{{/Pnodes}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "FTR" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_action").value; if ("" !== temp) obj["action"] = temp;
                temp = document.getElementById (id + "_baseEnergy").value; if ("" !== temp) obj["baseEnergy"] = temp;
                temp = document.getElementById (id + "_class").value; if ("" !== temp) obj["class"] = temp;
                temp = document.getElementById (id + "_ftrType").value; if ("" !== temp) obj["ftrType"] = temp;
                temp = document.getElementById (id + "_optimized").value; if ("" !== temp) obj["optimized"] = temp;
                temp = document.getElementById (id + "_EnergyPriceCurve").value; if ("" !== temp) obj["EnergyPriceCurve"] = temp;
                temp = document.getElementById (id + "_Flowgate").value; if ("" !== temp) obj["Flowgate"] = temp;
                temp = document.getElementById (id + "_Pnodes").value; if ("" !== temp) obj["Pnodes"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnergyPriceCurve", "0..1", "0..*", "EnergyPriceCurve", "FTRs"],
                            ["Flowgate", "0..1", "0..*", "Flowgate", "FTRs"],
                            ["Pnodes", "0..*", "0..*", "Pnode", "FTRs"]
                        ]
                    )
                );
            }
        }

        return (
            {
                FTR: FTR,
                ViolationLimit: ViolationLimit
            }
        );
    }
);