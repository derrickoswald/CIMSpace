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
                this._id = template.id;
                var bucket = cim_data.ViolationLimit;
                if (null == bucket)
                   cim_data.ViolationLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ViolationLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Meas.Limit.prototype.parse.call (this, context, sub);
                obj.cls = "ViolationLimit";
                base.parse_element (/<cim:ViolationLimit.enforced>([\s\S]*?)<\/cim:ViolationLimit.enforced>/g, obj, "enforced", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ViolationLimit.MktMeasurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktMeasurement", sub, context);
                base.parse_attributes (/<cim:ViolationLimit.MktOrganisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktOrganisation", sub, context);
                base.parse_attribute (/<cim:ViolationLimit.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                var bucket = context.parsed.ViolationLimit;
                if (null == bucket)
                   context.parsed.ViolationLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Meas.Limit.prototype.export.call (this, obj, false);

                base.export_element (obj, "ViolationLimit", "enforced", base.from_boolean, fields);
                base.export_attribute (obj, "export_attribute", "ViolationLimit", fields);
                base.export_attribute (obj, "export_attributes", "ViolationLimit", fields);
                base.export_attribute (obj, "export_attribute", "ViolationLimit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ViolationLimit_collapse" aria-expanded="true" aria-controls="ViolationLimit_collapse" style="margin-left: 10px;">ViolationLimit</a></legend>
                    <div id="ViolationLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.Limit.prototype.template.call (this) +
                    `
                    {{#enforced}}<div><b>enforced</b>: {{enforced}}</div>{{/enforced}}
                    {{#MktMeasurement}}<div><b>MktMeasurement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktMeasurement}}&quot;);})'>{{MktMeasurement}}</a></div>{{/MktMeasurement}}
                    {{#MktOrganisation}}<div><b>MktOrganisation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktOrganisation}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MktOrganisation) obj.MktOrganisation_string = obj.MktOrganisation.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MktOrganisation_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ViolationLimit_collapse" aria-expanded="true" aria-controls="ViolationLimit_collapse" style="margin-left: 10px;">ViolationLimit</a></legend>
                    <div id="ViolationLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Meas.Limit.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='enforced'>enforced: </label><div class='col-sm-8'><input id='enforced' class='form-check-input' type='checkbox'{{#enforced}} checked{{/enforced}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktMeasurement'>MktMeasurement: </label><div class='col-sm-8'><input id='MktMeasurement' class='form-control' type='text'{{#MktMeasurement}} value='{{MktMeasurement}}'{{/MktMeasurement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktOrganisation'>MktOrganisation: </label><div class='col-sm-8'><input id='MktOrganisation' class='form-control' type='text'{{#MktOrganisation}} value='{{MktOrganisation}}_string'{{/MktOrganisation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["MktMeasurement", "MktMeasurement", "0..1", "0..*"],
                        ["MktOrganisation", "MktOrganisation", "0..*", "0..*"],
                        ["Flowgate", "Flowgate", "0..1", "0..*"]
                    ]
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
                this._id = template.id;
                var bucket = cim_data.FTR;
                if (null == bucket)
                   cim_data.FTR = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FTR[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "FTR";
                base.parse_element (/<cim:FTR.optimized>([\s\S]*?)<\/cim:FTR.optimized>/g, obj, "optimized", base.to_string, sub, context);
                base.parse_element (/<cim:FTR.action>([\s\S]*?)<\/cim:FTR.action>/g, obj, "action", base.to_string, sub, context);
                base.parse_element (/<cim:FTR.baseEnergy>([\s\S]*?)<\/cim:FTR.baseEnergy>/g, obj, "baseEnergy", base.to_string, sub, context);
                base.parse_element (/<cim:FTR.ftrType>([\s\S]*?)<\/cim:FTR.ftrType>/g, obj, "ftrType", base.to_string, sub, context);
                base.parse_element (/<cim:FTR.class>([\s\S]*?)<\/cim:FTR.class>/g, obj, "class", base.to_string, sub, context);
                base.parse_attribute (/<cim:FTR.EnergyPriceCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyPriceCurve", sub, context);
                base.parse_attribute (/<cim:FTR.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attributes (/<cim:FTR.Pnodes\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pnodes", sub, context);
                var bucket = context.parsed.FTR;
                if (null == bucket)
                   context.parsed.FTR = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "FTR", "optimized", base.from_string, fields);
                base.export_element (obj, "FTR", "action", base.from_string, fields);
                base.export_element (obj, "FTR", "baseEnergy", base.from_string, fields);
                base.export_element (obj, "FTR", "ftrType", base.from_string, fields);
                base.export_element (obj, "FTR", "class", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "FTR", fields);
                base.export_attribute (obj, "export_attribute", "FTR", fields);
                base.export_attribute (obj, "export_attributes", "FTR", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FTR_collapse" aria-expanded="true" aria-controls="FTR_collapse" style="margin-left: 10px;">FTR</a></legend>
                    <div id="FTR_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
                    `
                    {{#optimized}}<div><b>optimized</b>: {{optimized}}</div>{{/optimized}}
                    {{#action}}<div><b>action</b>: {{action}}</div>{{/action}}
                    {{#baseEnergy}}<div><b>baseEnergy</b>: {{baseEnergy}}</div>{{/baseEnergy}}
                    {{#ftrType}}<div><b>ftrType</b>: {{ftrType}}</div>{{/ftrType}}
                    {{#class}}<div><b>class</b>: {{class}}</div>{{/class}}
                    {{#EnergyPriceCurve}}<div><b>EnergyPriceCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyPriceCurve}}&quot;);})'>{{EnergyPriceCurve}}</a></div>{{/EnergyPriceCurve}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#Pnodes}}<div><b>Pnodes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Pnodes}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Pnodes) obj.Pnodes_string = obj.Pnodes.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Pnodes_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FTR_collapse" aria-expanded="true" aria-controls="FTR_collapse" style="margin-left: 10px;">FTR</a></legend>
                    <div id="FTR_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='optimized'>optimized: </label><div class='col-sm-8'><input id='optimized' class='form-control' type='text'{{#optimized}} value='{{optimized}}'{{/optimized}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='action'>action: </label><div class='col-sm-8'><input id='action' class='form-control' type='text'{{#action}} value='{{action}}'{{/action}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='baseEnergy'>baseEnergy: </label><div class='col-sm-8'><input id='baseEnergy' class='form-control' type='text'{{#baseEnergy}} value='{{baseEnergy}}'{{/baseEnergy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ftrType'>ftrType: </label><div class='col-sm-8'><input id='ftrType' class='form-control' type='text'{{#ftrType}} value='{{ftrType}}'{{/ftrType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='class'>class: </label><div class='col-sm-8'><input id='class' class='form-control' type='text'{{#class}} value='{{class}}'{{/class}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergyPriceCurve'>EnergyPriceCurve: </label><div class='col-sm-8'><input id='EnergyPriceCurve' class='form-control' type='text'{{#EnergyPriceCurve}} value='{{EnergyPriceCurve}}'{{/EnergyPriceCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Pnodes'>Pnodes: </label><div class='col-sm-8'><input id='Pnodes' class='form-control' type='text'{{#Pnodes}} value='{{Pnodes}}_string'{{/Pnodes}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["EnergyPriceCurve", "EnergyPriceCurve", "0..1", "0..*"],
                        ["Flowgate", "Flowgate", "0..1", "0..*"],
                        ["Pnodes", "Pnode", "0..*", "0..*"]
                    ]
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