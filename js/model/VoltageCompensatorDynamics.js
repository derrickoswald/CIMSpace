define
(
    ["model/base", "model/Core", "model/StandardModels"],
    /**
     * <font color="#0f0f0f">Synchronous machine terminal voltage transducer and current compensator models</font> adjust the terminal voltage feedback to the excitation system by adding a quantity that is proportional to the terminal current of the generator.
     *
     * It is linked to a specific generator (synchronous machine).
     *
     */
    function (base, Core, StandardModels)
    {

        /**
         * This class provides the resistive and reactive components of compensation for the generator associated with the IEEE Type 2 voltage compensator for current flow out of one of the other generators in the interconnection.
         *
         */
        class GenICompensationForGenJ extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GenICompensationForGenJ;
                if (null == bucket)
                   cim_data.GenICompensationForGenJ = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GenICompensationForGenJ[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "GenICompensationForGenJ";
                base.parse_element (/<cim:GenICompensationForGenJ.rcij>([\s\S]*?)<\/cim:GenICompensationForGenJ.rcij>/g, obj, "rcij", base.to_string, sub, context);
                base.parse_element (/<cim:GenICompensationForGenJ.xcij>([\s\S]*?)<\/cim:GenICompensationForGenJ.xcij>/g, obj, "xcij", base.to_string, sub, context);
                base.parse_attribute (/<cim:GenICompensationForGenJ.VcompIEEEType2\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VcompIEEEType2", sub, context);
                base.parse_attribute (/<cim:GenICompensationForGenJ.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineDynamics", sub, context);
                var bucket = context.parsed.GenICompensationForGenJ;
                if (null == bucket)
                   context.parsed.GenICompensationForGenJ = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "GenICompensationForGenJ", "rcij", "rcij",  base.from_string, fields);
                base.export_element (obj, "GenICompensationForGenJ", "xcij", "xcij",  base.from_string, fields);
                base.export_attribute (obj, "GenICompensationForGenJ", "VcompIEEEType2", "VcompIEEEType2", fields);
                base.export_attribute (obj, "GenICompensationForGenJ", "SynchronousMachineDynamics", "SynchronousMachineDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GenICompensationForGenJ_collapse" aria-expanded="true" aria-controls="GenICompensationForGenJ_collapse" style="margin-left: 10px;">GenICompensationForGenJ</a></legend>
                    <div id="GenICompensationForGenJ_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#rcij}}<div><b>rcij</b>: {{rcij}}</div>{{/rcij}}
                    {{#xcij}}<div><b>xcij</b>: {{xcij}}</div>{{/xcij}}
                    {{#VcompIEEEType2}}<div><b>VcompIEEEType2</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VcompIEEEType2}}&quot;);})'>{{VcompIEEEType2}}</a></div>{{/VcompIEEEType2}}
                    {{#SynchronousMachineDynamics}}<div><b>SynchronousMachineDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SynchronousMachineDynamics}}&quot;);})'>{{SynchronousMachineDynamics}}</a></div>{{/SynchronousMachineDynamics}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_GenICompensationForGenJ_collapse" aria-expanded="true" aria-controls="{{id}}_GenICompensationForGenJ_collapse" style="margin-left: 10px;">GenICompensationForGenJ</a></legend>
                    <div id="{{id}}_GenICompensationForGenJ_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rcij'>rcij: </label><div class='col-sm-8'><input id='{{id}}_rcij' class='form-control' type='text'{{#rcij}} value='{{rcij}}'{{/rcij}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xcij'>xcij: </label><div class='col-sm-8'><input id='{{id}}_xcij' class='form-control' type='text'{{#xcij}} value='{{xcij}}'{{/xcij}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VcompIEEEType2'>VcompIEEEType2: </label><div class='col-sm-8'><input id='{{id}}_VcompIEEEType2' class='form-control' type='text'{{#VcompIEEEType2}} value='{{VcompIEEEType2}}'{{/VcompIEEEType2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SynchronousMachineDynamics'>SynchronousMachineDynamics: </label><div class='col-sm-8'><input id='{{id}}_SynchronousMachineDynamics' class='form-control' type='text'{{#SynchronousMachineDynamics}} value='{{SynchronousMachineDynamics}}'{{/SynchronousMachineDynamics}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GenICompensationForGenJ" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_rcij").value; if ("" != temp) obj.rcij = temp;
                temp = document.getElementById (id + "_xcij").value; if ("" != temp) obj.xcij = temp;
                temp = document.getElementById (id + "_VcompIEEEType2").value; if ("" != temp) obj.VcompIEEEType2 = temp;
                temp = document.getElementById (id + "_SynchronousMachineDynamics").value; if ("" != temp) obj.SynchronousMachineDynamics = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["VcompIEEEType2", "1", "2..*", "VCompIEEEType2", "GenICompensationForGenJ"],
                            ["SynchronousMachineDynamics", "1", "0..*", "SynchronousMachineDynamics", "GenICompensationForGenJ"]
                        ]
                    )
                );
            }
        }

        /**
         * Voltage compensator function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class VoltageCompensatorDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.VoltageCompensatorDynamics;
                if (null == bucket)
                   cim_data.VoltageCompensatorDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VoltageCompensatorDynamics[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "VoltageCompensatorDynamics";
                base.parse_attribute (/<cim:VoltageCompensatorDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);
                base.parse_attribute (/<cim:VoltageCompensatorDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context);
                var bucket = context.parsed.VoltageCompensatorDynamics;
                if (null == bucket)
                   context.parsed.VoltageCompensatorDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "VoltageCompensatorDynamics", "RemoteInputSignal", "RemoteInputSignal", fields);
                base.export_attribute (obj, "VoltageCompensatorDynamics", "ExcitationSystemDynamics", "ExcitationSystemDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VoltageCompensatorDynamics_collapse" aria-expanded="true" aria-controls="VoltageCompensatorDynamics_collapse" style="margin-left: 10px;">VoltageCompensatorDynamics</a></legend>
                    <div id="VoltageCompensatorDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#RemoteInputSignal}}<div><b>RemoteInputSignal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RemoteInputSignal}}&quot;);})'>{{RemoteInputSignal}}</a></div>{{/RemoteInputSignal}}
                    {{#ExcitationSystemDynamics}}<div><b>ExcitationSystemDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ExcitationSystemDynamics}}&quot;);})'>{{ExcitationSystemDynamics}}</a></div>{{/ExcitationSystemDynamics}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_VoltageCompensatorDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_VoltageCompensatorDynamics_collapse" style="margin-left: 10px;">VoltageCompensatorDynamics</a></legend>
                    <div id="{{id}}_VoltageCompensatorDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RemoteInputSignal'>RemoteInputSignal: </label><div class='col-sm-8'><input id='{{id}}_RemoteInputSignal' class='form-control' type='text'{{#RemoteInputSignal}} value='{{RemoteInputSignal}}'{{/RemoteInputSignal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ExcitationSystemDynamics'>ExcitationSystemDynamics: </label><div class='col-sm-8'><input id='{{id}}_ExcitationSystemDynamics' class='form-control' type='text'{{#ExcitationSystemDynamics}} value='{{ExcitationSystemDynamics}}'{{/ExcitationSystemDynamics}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "VoltageCompensatorDynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RemoteInputSignal").value; if ("" != temp) obj.RemoteInputSignal = temp;
                temp = document.getElementById (id + "_ExcitationSystemDynamics").value; if ("" != temp) obj.ExcitationSystemDynamics = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RemoteInputSignal", "0..1", "0..1", "RemoteInputSignal", "VoltageCompensatorDynamics"],
                            ["ExcitationSystemDynamics", "1", "0..1", "ExcitationSystemDynamics", "VoltageCompensatorDynamics"]
                        ]
                    )
                );
            }
        }

        /**
         * <font color="#0f0f0f">The class represents the terminal voltage transducer and the load compensator as defined in the IEEE Std 421.5-2005, Section 4.
         *
         * This model is designed to cover the following types of compensation: </font>
         *
         */
        class VCompIEEEType2 extends VoltageCompensatorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.VCompIEEEType2;
                if (null == bucket)
                   cim_data.VCompIEEEType2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VCompIEEEType2[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = VoltageCompensatorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "VCompIEEEType2";
                base.parse_element (/<cim:VCompIEEEType2.tr>([\s\S]*?)<\/cim:VCompIEEEType2.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_attributes (/<cim:VCompIEEEType2.GenICompensationForGenJ\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenICompensationForGenJ", sub, context);
                var bucket = context.parsed.VCompIEEEType2;
                if (null == bucket)
                   context.parsed.VCompIEEEType2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = VoltageCompensatorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "VCompIEEEType2", "tr", "tr",  base.from_string, fields);
                base.export_attributes (obj, "VCompIEEEType2", "GenICompensationForGenJ", "GenICompensationForGenJ", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VCompIEEEType2_collapse" aria-expanded="true" aria-controls="VCompIEEEType2_collapse" style="margin-left: 10px;">VCompIEEEType2</a></legend>
                    <div id="VCompIEEEType2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + VoltageCompensatorDynamics.prototype.template.call (this) +
                    `
                    {{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
                    {{#GenICompensationForGenJ}}<div><b>GenICompensationForGenJ</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/GenICompensationForGenJ}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.GenICompensationForGenJ) obj.GenICompensationForGenJ_string = obj.GenICompensationForGenJ.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.GenICompensationForGenJ_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_VCompIEEEType2_collapse" aria-expanded="true" aria-controls="{{id}}_VCompIEEEType2_collapse" style="margin-left: 10px;">VCompIEEEType2</a></legend>
                    <div id="{{id}}_VCompIEEEType2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + VoltageCompensatorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tr'>tr: </label><div class='col-sm-8'><input id='{{id}}_tr' class='form-control' type='text'{{#tr}} value='{{tr}}'{{/tr}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "VCompIEEEType2" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_tr").value; if ("" != temp) obj.tr = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["GenICompensationForGenJ", "2..*", "1", "GenICompensationForGenJ", "VcompIEEEType2"]
                        ]
                    )
                );
            }
        }

        /**
         * <font color="#0f0f0f">The class represents the terminal voltage transducer and the load compensator as defined in the IEEE Std 421.5-2005, Section 4.
         *
         * This model is common to all excitation system models described in the IEEE Standard. </font>
         *
         */
        class VCompIEEEType1 extends VoltageCompensatorDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.VCompIEEEType1;
                if (null == bucket)
                   cim_data.VCompIEEEType1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VCompIEEEType1[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = VoltageCompensatorDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "VCompIEEEType1";
                base.parse_element (/<cim:VCompIEEEType1.rc>([\s\S]*?)<\/cim:VCompIEEEType1.rc>/g, obj, "rc", base.to_string, sub, context);
                base.parse_element (/<cim:VCompIEEEType1.tr>([\s\S]*?)<\/cim:VCompIEEEType1.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:VCompIEEEType1.xc>([\s\S]*?)<\/cim:VCompIEEEType1.xc>/g, obj, "xc", base.to_string, sub, context);
                var bucket = context.parsed.VCompIEEEType1;
                if (null == bucket)
                   context.parsed.VCompIEEEType1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = VoltageCompensatorDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "VCompIEEEType1", "rc", "rc",  base.from_string, fields);
                base.export_element (obj, "VCompIEEEType1", "tr", "tr",  base.from_string, fields);
                base.export_element (obj, "VCompIEEEType1", "xc", "xc",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VCompIEEEType1_collapse" aria-expanded="true" aria-controls="VCompIEEEType1_collapse" style="margin-left: 10px;">VCompIEEEType1</a></legend>
                    <div id="VCompIEEEType1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + VoltageCompensatorDynamics.prototype.template.call (this) +
                    `
                    {{#rc}}<div><b>rc</b>: {{rc}}</div>{{/rc}}
                    {{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
                    {{#xc}}<div><b>xc</b>: {{xc}}</div>{{/xc}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_VCompIEEEType1_collapse" aria-expanded="true" aria-controls="{{id}}_VCompIEEEType1_collapse" style="margin-left: 10px;">VCompIEEEType1</a></legend>
                    <div id="{{id}}_VCompIEEEType1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + VoltageCompensatorDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rc'>rc: </label><div class='col-sm-8'><input id='{{id}}_rc' class='form-control' type='text'{{#rc}} value='{{rc}}'{{/rc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tr'>tr: </label><div class='col-sm-8'><input id='{{id}}_tr' class='form-control' type='text'{{#tr}} value='{{tr}}'{{/tr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xc'>xc: </label><div class='col-sm-8'><input id='{{id}}_xc' class='form-control' type='text'{{#xc}} value='{{xc}}'{{/xc}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "VCompIEEEType1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_rc").value; if ("" != temp) obj.rc = temp;
                temp = document.getElementById (id + "_tr").value; if ("" != temp) obj.tr = temp;
                temp = document.getElementById (id + "_xc").value; if ("" != temp) obj.xc = temp;

                return (obj);
            }
        }

        return (
            {
                VCompIEEEType1: VCompIEEEType1,
                GenICompensationForGenJ: GenICompensationForGenJ,
                VoltageCompensatorDynamics: VoltageCompensatorDynamics,
                VCompIEEEType2: VCompIEEEType2
            }
        );
    }
);