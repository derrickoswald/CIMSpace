define
(
    ["model/base", "model/StandardModels"],
    /**
     * A mechanical load represents the variation in a motor's shaft torque or power as a function of shaft speed.
     *
     */
    function (base, StandardModels)
    {

        /**
         * Mechanical load function block whose behavior is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class MechanicalLoadDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MechanicalLoadDynamics;
                if (null == bucket)
                   cim_data.MechanicalLoadDynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MechanicalLoadDynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "MechanicalLoadDynamics";
                base.parse_attribute (/<cim:MechanicalLoadDynamics.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineDynamics", sub, context);
                base.parse_attribute (/<cim:MechanicalLoadDynamics.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineDynamics", sub, context);

                var bucket = context.parsed.MechanicalLoadDynamics;
                if (null == bucket)
                   context.parsed.MechanicalLoadDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MechanicalLoadDynamics", "SynchronousMachineDynamics", fields);
                base.export_attribute (obj, "MechanicalLoadDynamics", "AsynchronousMachineDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MechanicalLoadDynamics_collapse" aria-expanded="true" aria-controls="MechanicalLoadDynamics_collapse">MechanicalLoadDynamics</a>
<div id="MechanicalLoadDynamics_collapse" class="collapse in" style="margin-left: 10px;">
`
      + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
`
{{#SynchronousMachineDynamics}}<div><b>SynchronousMachineDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SynchronousMachineDynamics}}&quot;);})'>{{SynchronousMachineDynamics}}</a></div>{{/SynchronousMachineDynamics}}
{{#AsynchronousMachineDynamics}}<div><b>AsynchronousMachineDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AsynchronousMachineDynamics}}&quot;);})'>{{AsynchronousMachineDynamics}}</a></div>{{/AsynchronousMachineDynamics}}
</div>
`
                );
           }        }

        /**
         * Mechanical load model type 1.
         *
         */
        class MechLoad1 extends MechanicalLoadDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MechLoad1;
                if (null == bucket)
                   cim_data.MechLoad1 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MechLoad1[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MechanicalLoadDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "MechLoad1";
                base.parse_element (/<cim:MechLoad1.a>([\s\S]*?)<\/cim:MechLoad1.a>/g, obj, "a", base.to_float, sub, context);
                base.parse_element (/<cim:MechLoad1.b>([\s\S]*?)<\/cim:MechLoad1.b>/g, obj, "b", base.to_float, sub, context);
                base.parse_element (/<cim:MechLoad1.d>([\s\S]*?)<\/cim:MechLoad1.d>/g, obj, "d", base.to_float, sub, context);
                base.parse_element (/<cim:MechLoad1.e>([\s\S]*?)<\/cim:MechLoad1.e>/g, obj, "e", base.to_float, sub, context);

                var bucket = context.parsed.MechLoad1;
                if (null == bucket)
                   context.parsed.MechLoad1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MechanicalLoadDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "MechLoad1", "a", base.from_float, fields);
                base.export_element (obj, "MechLoad1", "b", base.from_float, fields);
                base.export_element (obj, "MechLoad1", "d", base.from_float, fields);
                base.export_element (obj, "MechLoad1", "e", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#MechLoad1_collapse" aria-expanded="true" aria-controls="MechLoad1_collapse">MechLoad1</a>
<div id="MechLoad1_collapse" class="collapse in" style="margin-left: 10px;">
`
      + MechanicalLoadDynamics.prototype.template.call (this) +
`
{{#a}}<div><b>a</b>: {{a}}</div>{{/a}}
{{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
{{#d}}<div><b>d</b>: {{d}}</div>{{/d}}
{{#e}}<div><b>e</b>: {{e}}</div>{{/e}}
</div>
`
                );
           }        }

        return (
            {
                MechanicalLoadDynamics: MechanicalLoadDynamics,
                MechLoad1: MechLoad1
            }
        );
    }
);