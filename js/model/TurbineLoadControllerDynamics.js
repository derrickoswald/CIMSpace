define
(
    ["model/base", "model/StandardModels"],
    /**
     * A turbine load controller acts to maintain turbine power at a set value by continuous adjustment of the turbine governor speed-load reference.
     *
     */
    function (base, StandardModels)
    {

        /**
         * Turbine load controller function block whose behavior is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class TurbineLoadControllerDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TurbineLoadControllerDynamics;
                if (null == bucket)
                   cim_data.TurbineLoadControllerDynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TurbineLoadControllerDynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "TurbineLoadControllerDynamics";
                base.parse_attribute (/<cim:TurbineLoadControllerDynamics.TurbineGovernorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineGovernorDynamics", sub, context);
                var bucket = context.parsed.TurbineLoadControllerDynamics;
                if (null == bucket)
                   context.parsed.TurbineLoadControllerDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "TurbineLoadControllerDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TurbineLoadControllerDynamics_collapse" aria-expanded="true" aria-controls="TurbineLoadControllerDynamics_collapse" style="margin-left: 10px;">TurbineLoadControllerDynamics</a></legend>
                    <div id="TurbineLoadControllerDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#TurbineGovernorDynamics}}<div><b>TurbineGovernorDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TurbineGovernorDynamics}}&quot;);})'>{{TurbineGovernorDynamics}}</a></div>{{/TurbineGovernorDynamics}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TurbineLoadControllerDynamics_collapse" aria-expanded="true" aria-controls="TurbineLoadControllerDynamics_collapse" style="margin-left: 10px;">TurbineLoadControllerDynamics</a></legend>
                    <div id="TurbineLoadControllerDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TurbineGovernorDynamics'>TurbineGovernorDynamics: </label><div class='col-sm-8'><input id='TurbineGovernorDynamics' class='form-control' type='text'{{#TurbineGovernorDynamics}} value='{{TurbineGovernorDynamics}}'{{/TurbineGovernorDynamics}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["TurbineGovernorDynamics", "TurbineGovernorDynamics", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Turbine Load Controller model developed in the WECC.
         *
         * This model represents a supervisory turbine load controller that acts to maintain turbine power at a set value by continuous adjustment of the turbine governor speed-load reference. This model is intended to represent slow reset 'outer loop' controllers managing the action of the turbine governor.
         *
         */
        class TurbLCFB1 extends TurbineLoadControllerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TurbLCFB1;
                if (null == bucket)
                   cim_data.TurbLCFB1 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TurbLCFB1[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TurbineLoadControllerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "TurbLCFB1";
                base.parse_element (/<cim:TurbLCFB1.db>([\s\S]*?)<\/cim:TurbLCFB1.db>/g, obj, "db", base.to_string, sub, context);
                base.parse_element (/<cim:TurbLCFB1.emax>([\s\S]*?)<\/cim:TurbLCFB1.emax>/g, obj, "emax", base.to_string, sub, context);
                base.parse_element (/<cim:TurbLCFB1.fb>([\s\S]*?)<\/cim:TurbLCFB1.fb>/g, obj, "fb", base.to_string, sub, context);
                base.parse_element (/<cim:TurbLCFB1.fbf>([\s\S]*?)<\/cim:TurbLCFB1.fbf>/g, obj, "fbf", base.to_boolean, sub, context);
                base.parse_element (/<cim:TurbLCFB1.irmax>([\s\S]*?)<\/cim:TurbLCFB1.irmax>/g, obj, "irmax", base.to_string, sub, context);
                base.parse_element (/<cim:TurbLCFB1.ki>([\s\S]*?)<\/cim:TurbLCFB1.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:TurbLCFB1.kp>([\s\S]*?)<\/cim:TurbLCFB1.kp>/g, obj, "kp", base.to_string, sub, context);
                base.parse_element (/<cim:TurbLCFB1.mwbase>([\s\S]*?)<\/cim:TurbLCFB1.mwbase>/g, obj, "mwbase", base.to_string, sub, context);
                base.parse_element (/<cim:TurbLCFB1.pbf>([\s\S]*?)<\/cim:TurbLCFB1.pbf>/g, obj, "pbf", base.to_boolean, sub, context);
                base.parse_element (/<cim:TurbLCFB1.pmwset>([\s\S]*?)<\/cim:TurbLCFB1.pmwset>/g, obj, "pmwset", base.to_string, sub, context);
                base.parse_element (/<cim:TurbLCFB1.speedReferenceGovernor>([\s\S]*?)<\/cim:TurbLCFB1.speedReferenceGovernor>/g, obj, "speedReferenceGovernor", base.to_boolean, sub, context);
                base.parse_element (/<cim:TurbLCFB1.tpelec>([\s\S]*?)<\/cim:TurbLCFB1.tpelec>/g, obj, "tpelec", base.to_string, sub, context);
                var bucket = context.parsed.TurbLCFB1;
                if (null == bucket)
                   context.parsed.TurbLCFB1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TurbineLoadControllerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "TurbLCFB1", "db", base.from_string, fields);
                base.export_element (obj, "TurbLCFB1", "emax", base.from_string, fields);
                base.export_element (obj, "TurbLCFB1", "fb", base.from_string, fields);
                base.export_element (obj, "TurbLCFB1", "fbf", base.from_boolean, fields);
                base.export_element (obj, "TurbLCFB1", "irmax", base.from_string, fields);
                base.export_element (obj, "TurbLCFB1", "ki", base.from_string, fields);
                base.export_element (obj, "TurbLCFB1", "kp", base.from_string, fields);
                base.export_element (obj, "TurbLCFB1", "mwbase", base.from_string, fields);
                base.export_element (obj, "TurbLCFB1", "pbf", base.from_boolean, fields);
                base.export_element (obj, "TurbLCFB1", "pmwset", base.from_string, fields);
                base.export_element (obj, "TurbLCFB1", "speedReferenceGovernor", base.from_boolean, fields);
                base.export_element (obj, "TurbLCFB1", "tpelec", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TurbLCFB1_collapse" aria-expanded="true" aria-controls="TurbLCFB1_collapse" style="margin-left: 10px;">TurbLCFB1</a></legend>
                    <div id="TurbLCFB1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineLoadControllerDynamics.prototype.template.call (this) +
                    `
                    {{#db}}<div><b>db</b>: {{db}}</div>{{/db}}
                    {{#emax}}<div><b>emax</b>: {{emax}}</div>{{/emax}}
                    {{#fb}}<div><b>fb</b>: {{fb}}</div>{{/fb}}
                    {{#fbf}}<div><b>fbf</b>: {{fbf}}</div>{{/fbf}}
                    {{#irmax}}<div><b>irmax</b>: {{irmax}}</div>{{/irmax}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#mwbase}}<div><b>mwbase</b>: {{mwbase}}</div>{{/mwbase}}
                    {{#pbf}}<div><b>pbf</b>: {{pbf}}</div>{{/pbf}}
                    {{#pmwset}}<div><b>pmwset</b>: {{pmwset}}</div>{{/pmwset}}
                    {{#speedReferenceGovernor}}<div><b>speedReferenceGovernor</b>: {{speedReferenceGovernor}}</div>{{/speedReferenceGovernor}}
                    {{#tpelec}}<div><b>tpelec</b>: {{tpelec}}</div>{{/tpelec}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TurbLCFB1_collapse" aria-expanded="true" aria-controls="TurbLCFB1_collapse" style="margin-left: 10px;">TurbLCFB1</a></legend>
                    <div id="TurbLCFB1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TurbineLoadControllerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='db'>db: </label><div class='col-sm-8'><input id='db' class='form-control' type='text'{{#db}} value='{{db}}'{{/db}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='emax'>emax: </label><div class='col-sm-8'><input id='emax' class='form-control' type='text'{{#emax}} value='{{emax}}'{{/emax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='fb'>fb: </label><div class='col-sm-8'><input id='fb' class='form-control' type='text'{{#fb}} value='{{fb}}'{{/fb}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='fbf'>fbf: </label><div class='col-sm-8'><input id='fbf' class='form-check-input' type='checkbox'{{#fbf}} checked{{/fbf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='irmax'>irmax: </label><div class='col-sm-8'><input id='irmax' class='form-control' type='text'{{#irmax}} value='{{irmax}}'{{/irmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ki'>ki: </label><div class='col-sm-8'><input id='ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kp'>kp: </label><div class='col-sm-8'><input id='kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mwbase'>mwbase: </label><div class='col-sm-8'><input id='mwbase' class='form-control' type='text'{{#mwbase}} value='{{mwbase}}'{{/mwbase}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='pbf'>pbf: </label><div class='col-sm-8'><input id='pbf' class='form-check-input' type='checkbox'{{#pbf}} checked{{/pbf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pmwset'>pmwset: </label><div class='col-sm-8'><input id='pmwset' class='form-control' type='text'{{#pmwset}} value='{{pmwset}}'{{/pmwset}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='speedReferenceGovernor'>speedReferenceGovernor: </label><div class='col-sm-8'><input id='speedReferenceGovernor' class='form-check-input' type='checkbox'{{#speedReferenceGovernor}} checked{{/speedReferenceGovernor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tpelec'>tpelec: </label><div class='col-sm-8'><input id='tpelec' class='form-control' type='text'{{#tpelec}} value='{{tpelec}}'{{/tpelec}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        return (
            {
                TurbLCFB1: TurbLCFB1,
                TurbineLoadControllerDynamics: TurbineLoadControllerDynamics
            }
        );
    }
);