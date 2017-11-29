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

                base.export_attribute (obj, "TurbineLoadControllerDynamics", "TurbineGovernorDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TurbineLoadControllerDynamics_collapse" aria-expanded="true" aria-controls="TurbineLoadControllerDynamics_collapse">TurbineLoadControllerDynamics</a>
<div id="TurbineLoadControllerDynamics_collapse" class="collapse in" style="margin-left: 10px;">
`
      + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
`
{{#TurbineGovernorDynamics}}<div><b>TurbineGovernorDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TurbineGovernorDynamics}}&quot;);})'>{{TurbineGovernorDynamics}}</a></div>{{/TurbineGovernorDynamics}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#TurbLCFB1_collapse" aria-expanded="true" aria-controls="TurbLCFB1_collapse">TurbLCFB1</a>
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
`
                );
           }        }

        return (
            {
                TurbLCFB1: TurbLCFB1,
                TurbineLoadControllerDynamics: TurbineLoadControllerDynamics
            }
        );
    }
);