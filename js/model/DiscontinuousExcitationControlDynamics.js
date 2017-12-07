define
(
    ["model/base", "model/StandardModels"],
    /**
     * <font colour="#0f0f0f">In some particular system configurations, continuous excitation control with terminal voltage and power system stabilizing regulator input signals does not ensure that the potential of the excitation system for improving system stability is fully exploited.
     *
     * For these situations, discontinuous excitation control signals may be employed to enhance stability following large transient disturbances.</font>
     *
     */
    function (base, StandardModels)
    {

        /**
         * Discontinuous excitation control function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model</font>.
         *
         */
        class DiscontinuousExcitationControlDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DiscontinuousExcitationControlDynamics;
                if (null == bucket)
                   cim_data.DiscontinuousExcitationControlDynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiscontinuousExcitationControlDynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "DiscontinuousExcitationControlDynamics";
                base.parse_attribute (/<cim:DiscontinuousExcitationControlDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context);
                base.parse_attribute (/<cim:DiscontinuousExcitationControlDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);
                var bucket = context.parsed.DiscontinuousExcitationControlDynamics;
                if (null == bucket)
                   context.parsed.DiscontinuousExcitationControlDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "DiscontinuousExcitationControlDynamics", fields);
                base.export_attribute (obj, "export_attribute", "DiscontinuousExcitationControlDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiscontinuousExcitationControlDynamics_collapse" aria-expanded="true" aria-controls="DiscontinuousExcitationControlDynamics_collapse" style="margin-left: 10px;">DiscontinuousExcitationControlDynamics</a></legend>
                    <div id="DiscontinuousExcitationControlDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#ExcitationSystemDynamics}}<div><b>ExcitationSystemDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ExcitationSystemDynamics}}&quot;);})'>{{ExcitationSystemDynamics}}</a></div>{{/ExcitationSystemDynamics}}
                    {{#RemoteInputSignal}}<div><b>RemoteInputSignal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RemoteInputSignal}}&quot;);})'>{{RemoteInputSignal}}</a></div>{{/RemoteInputSignal}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiscontinuousExcitationControlDynamics_collapse" aria-expanded="true" aria-controls="DiscontinuousExcitationControlDynamics_collapse" style="margin-left: 10px;">DiscontinuousExcitationControlDynamics</a></legend>
                    <div id="DiscontinuousExcitationControlDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ExcitationSystemDynamics'>ExcitationSystemDynamics: </label><div class='col-sm-8'><input id='ExcitationSystemDynamics' class='form-control' type='text'{{#ExcitationSystemDynamics}} value='{{ExcitationSystemDynamics}}'{{/ExcitationSystemDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RemoteInputSignal'>RemoteInputSignal: </label><div class='col-sm-8'><input id='RemoteInputSignal' class='form-control' type='text'{{#RemoteInputSignal}} value='{{RemoteInputSignal}}'{{/RemoteInputSignal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ExcitationSystemDynamics", "ExcitationSystemDynamics", "1", "0..1"],
                        ["RemoteInputSignal", "RemoteInputSignal", "0..1", "0..1"]
                    ]
                );
            }
        }

        /**
         * The class represents IEEE Type DEC2A model for the discontinuous excitation control.
         *
         * This system provides transient excitation boosting via an open-loop control as initiated by a trigger signal generated remotely.
         *
         */
        class DiscExcContIEEEDEC2A extends DiscontinuousExcitationControlDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DiscExcContIEEEDEC2A;
                if (null == bucket)
                   cim_data.DiscExcContIEEEDEC2A = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiscExcContIEEEDEC2A[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DiscontinuousExcitationControlDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "DiscExcContIEEEDEC2A";
                base.parse_element (/<cim:DiscExcContIEEEDEC2A.td1>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.td1>/g, obj, "td1", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC2A.td2>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.td2>/g, obj, "td2", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC2A.vdmax>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.vdmax>/g, obj, "vdmax", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC2A.vdmin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.vdmin>/g, obj, "vdmin", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC2A.vk>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.vk>/g, obj, "vk", base.to_string, sub, context);
                var bucket = context.parsed.DiscExcContIEEEDEC2A;
                if (null == bucket)
                   context.parsed.DiscExcContIEEEDEC2A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DiscontinuousExcitationControlDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "DiscExcContIEEEDEC2A", "td1", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC2A", "td2", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC2A", "vdmax", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC2A", "vdmin", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC2A", "vk", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiscExcContIEEEDEC2A_collapse" aria-expanded="true" aria-controls="DiscExcContIEEEDEC2A_collapse" style="margin-left: 10px;">DiscExcContIEEEDEC2A</a></legend>
                    <div id="DiscExcContIEEEDEC2A_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + DiscontinuousExcitationControlDynamics.prototype.template.call (this) +
                    `
                    {{#td1}}<div><b>td1</b>: {{td1}}</div>{{/td1}}
                    {{#td2}}<div><b>td2</b>: {{td2}}</div>{{/td2}}
                    {{#vdmax}}<div><b>vdmax</b>: {{vdmax}}</div>{{/vdmax}}
                    {{#vdmin}}<div><b>vdmin</b>: {{vdmin}}</div>{{/vdmin}}
                    {{#vk}}<div><b>vk</b>: {{vk}}</div>{{/vk}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiscExcContIEEEDEC2A_collapse" aria-expanded="true" aria-controls="DiscExcContIEEEDEC2A_collapse" style="margin-left: 10px;">DiscExcContIEEEDEC2A</a></legend>
                    <div id="DiscExcContIEEEDEC2A_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + DiscontinuousExcitationControlDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='td1'>td1: </label><div class='col-sm-8'><input id='td1' class='form-control' type='text'{{#td1}} value='{{td1}}'{{/td1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='td2'>td2: </label><div class='col-sm-8'><input id='td2' class='form-control' type='text'{{#td2}} value='{{td2}}'{{/td2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vdmax'>vdmax: </label><div class='col-sm-8'><input id='vdmax' class='form-control' type='text'{{#vdmax}} value='{{vdmax}}'{{/vdmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vdmin'>vdmin: </label><div class='col-sm-8'><input id='vdmin' class='form-control' type='text'{{#vdmin}} value='{{vdmin}}'{{/vdmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vk'>vk: </label><div class='col-sm-8'><input id='vk' class='form-control' type='text'{{#vk}} value='{{vk}}'{{/vk}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * The class represents IEEE Type DEC1A discontinuous excitation control model that boosts generator excitation to a level higher than that demanded by the voltage regulator and stabilizer immediately following a system fault.
         *
         * Reference: IEEE Standard 421.5-2005 Section 12.2.
         *
         */
        class DiscExcContIEEEDEC1A extends DiscontinuousExcitationControlDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DiscExcContIEEEDEC1A;
                if (null == bucket)
                   cim_data.DiscExcContIEEEDEC1A = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiscExcContIEEEDEC1A[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DiscontinuousExcitationControlDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "DiscExcContIEEEDEC1A";
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.esc>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.esc>/g, obj, "esc", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.kan>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.kan>/g, obj, "kan", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.ketl>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.ketl>/g, obj, "ketl", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.tan>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.tan>/g, obj, "tan", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.td>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.tl1>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.tl1>/g, obj, "tl1", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.tl2>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.tl2>/g, obj, "tl2", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.tw5>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.tw5>/g, obj, "tw5", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.val>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.val>/g, obj, "val", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.vanmax>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vanmax>/g, obj, "vanmax", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.vomax>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vomax>/g, obj, "vomax", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.vomin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vomin>/g, obj, "vomin", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.vsmax>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vsmax>/g, obj, "vsmax", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.vsmin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vsmin>/g, obj, "vsmin", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.vtc>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vtc>/g, obj, "vtc", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.vtlmt>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vtlmt>/g, obj, "vtlmt", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.vtm>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vtm>/g, obj, "vtm", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC1A.vtn>([\s\S]*?)<\/cim:DiscExcContIEEEDEC1A.vtn>/g, obj, "vtn", base.to_string, sub, context);
                var bucket = context.parsed.DiscExcContIEEEDEC1A;
                if (null == bucket)
                   context.parsed.DiscExcContIEEEDEC1A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DiscontinuousExcitationControlDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "DiscExcContIEEEDEC1A", "esc", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "kan", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "ketl", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "tan", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "td", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "tl1", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "tl2", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "tw5", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "val", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vanmax", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vomax", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vomin", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vsmax", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vsmin", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vtc", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vtlmt", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vtm", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vtn", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiscExcContIEEEDEC1A_collapse" aria-expanded="true" aria-controls="DiscExcContIEEEDEC1A_collapse" style="margin-left: 10px;">DiscExcContIEEEDEC1A</a></legend>
                    <div id="DiscExcContIEEEDEC1A_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + DiscontinuousExcitationControlDynamics.prototype.template.call (this) +
                    `
                    {{#esc}}<div><b>esc</b>: {{esc}}</div>{{/esc}}
                    {{#kan}}<div><b>kan</b>: {{kan}}</div>{{/kan}}
                    {{#ketl}}<div><b>ketl</b>: {{ketl}}</div>{{/ketl}}
                    {{#tan}}<div><b>tan</b>: {{tan}}</div>{{/tan}}
                    {{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
                    {{#tl1}}<div><b>tl1</b>: {{tl1}}</div>{{/tl1}}
                    {{#tl2}}<div><b>tl2</b>: {{tl2}}</div>{{/tl2}}
                    {{#tw5}}<div><b>tw5</b>: {{tw5}}</div>{{/tw5}}
                    {{#val}}<div><b>val</b>: {{val}}</div>{{/val}}
                    {{#vanmax}}<div><b>vanmax</b>: {{vanmax}}</div>{{/vanmax}}
                    {{#vomax}}<div><b>vomax</b>: {{vomax}}</div>{{/vomax}}
                    {{#vomin}}<div><b>vomin</b>: {{vomin}}</div>{{/vomin}}
                    {{#vsmax}}<div><b>vsmax</b>: {{vsmax}}</div>{{/vsmax}}
                    {{#vsmin}}<div><b>vsmin</b>: {{vsmin}}</div>{{/vsmin}}
                    {{#vtc}}<div><b>vtc</b>: {{vtc}}</div>{{/vtc}}
                    {{#vtlmt}}<div><b>vtlmt</b>: {{vtlmt}}</div>{{/vtlmt}}
                    {{#vtm}}<div><b>vtm</b>: {{vtm}}</div>{{/vtm}}
                    {{#vtn}}<div><b>vtn</b>: {{vtn}}</div>{{/vtn}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiscExcContIEEEDEC1A_collapse" aria-expanded="true" aria-controls="DiscExcContIEEEDEC1A_collapse" style="margin-left: 10px;">DiscExcContIEEEDEC1A</a></legend>
                    <div id="DiscExcContIEEEDEC1A_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + DiscontinuousExcitationControlDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='esc'>esc: </label><div class='col-sm-8'><input id='esc' class='form-control' type='text'{{#esc}} value='{{esc}}'{{/esc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kan'>kan: </label><div class='col-sm-8'><input id='kan' class='form-control' type='text'{{#kan}} value='{{kan}}'{{/kan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ketl'>ketl: </label><div class='col-sm-8'><input id='ketl' class='form-control' type='text'{{#ketl}} value='{{ketl}}'{{/ketl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tan'>tan: </label><div class='col-sm-8'><input id='tan' class='form-control' type='text'{{#tan}} value='{{tan}}'{{/tan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='td'>td: </label><div class='col-sm-8'><input id='td' class='form-control' type='text'{{#td}} value='{{td}}'{{/td}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tl1'>tl1: </label><div class='col-sm-8'><input id='tl1' class='form-control' type='text'{{#tl1}} value='{{tl1}}'{{/tl1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tl2'>tl2: </label><div class='col-sm-8'><input id='tl2' class='form-control' type='text'{{#tl2}} value='{{tl2}}'{{/tl2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tw5'>tw5: </label><div class='col-sm-8'><input id='tw5' class='form-control' type='text'{{#tw5}} value='{{tw5}}'{{/tw5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='val'>val: </label><div class='col-sm-8'><input id='val' class='form-control' type='text'{{#val}} value='{{val}}'{{/val}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vanmax'>vanmax: </label><div class='col-sm-8'><input id='vanmax' class='form-control' type='text'{{#vanmax}} value='{{vanmax}}'{{/vanmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vomax'>vomax: </label><div class='col-sm-8'><input id='vomax' class='form-control' type='text'{{#vomax}} value='{{vomax}}'{{/vomax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vomin'>vomin: </label><div class='col-sm-8'><input id='vomin' class='form-control' type='text'{{#vomin}} value='{{vomin}}'{{/vomin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vsmax'>vsmax: </label><div class='col-sm-8'><input id='vsmax' class='form-control' type='text'{{#vsmax}} value='{{vsmax}}'{{/vsmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vsmin'>vsmin: </label><div class='col-sm-8'><input id='vsmin' class='form-control' type='text'{{#vsmin}} value='{{vsmin}}'{{/vsmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vtc'>vtc: </label><div class='col-sm-8'><input id='vtc' class='form-control' type='text'{{#vtc}} value='{{vtc}}'{{/vtc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vtlmt'>vtlmt: </label><div class='col-sm-8'><input id='vtlmt' class='form-control' type='text'{{#vtlmt}} value='{{vtlmt}}'{{/vtlmt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vtm'>vtm: </label><div class='col-sm-8'><input id='vtm' class='form-control' type='text'{{#vtm}} value='{{vtm}}'{{/vtm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vtn'>vtn: </label><div class='col-sm-8'><input id='vtn' class='form-control' type='text'{{#vtn}} value='{{vtn}}'{{/vtn}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * The class represents IEEE Type DEC3A model.
         *
         * In some systems, the stabilizer output is disconnected from the regulator immediately following a severe fault to prevent the stabilizer from competing with action of voltage regulator during the first swing.
         *
         */
        class DiscExcContIEEEDEC3A extends DiscontinuousExcitationControlDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DiscExcContIEEEDEC3A;
                if (null == bucket)
                   cim_data.DiscExcContIEEEDEC3A = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiscExcContIEEEDEC3A[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DiscontinuousExcitationControlDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "DiscExcContIEEEDEC3A";
                base.parse_element (/<cim:DiscExcContIEEEDEC3A.tdr>([\s\S]*?)<\/cim:DiscExcContIEEEDEC3A.tdr>/g, obj, "tdr", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC3A.vtmin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC3A.vtmin>/g, obj, "vtmin", base.to_string, sub, context);
                var bucket = context.parsed.DiscExcContIEEEDEC3A;
                if (null == bucket)
                   context.parsed.DiscExcContIEEEDEC3A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DiscontinuousExcitationControlDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "DiscExcContIEEEDEC3A", "tdr", base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC3A", "vtmin", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiscExcContIEEEDEC3A_collapse" aria-expanded="true" aria-controls="DiscExcContIEEEDEC3A_collapse" style="margin-left: 10px;">DiscExcContIEEEDEC3A</a></legend>
                    <div id="DiscExcContIEEEDEC3A_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + DiscontinuousExcitationControlDynamics.prototype.template.call (this) +
                    `
                    {{#tdr}}<div><b>tdr</b>: {{tdr}}</div>{{/tdr}}
                    {{#vtmin}}<div><b>vtmin</b>: {{vtmin}}</div>{{/vtmin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiscExcContIEEEDEC3A_collapse" aria-expanded="true" aria-controls="DiscExcContIEEEDEC3A_collapse" style="margin-left: 10px;">DiscExcContIEEEDEC3A</a></legend>
                    <div id="DiscExcContIEEEDEC3A_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + DiscontinuousExcitationControlDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tdr'>tdr: </label><div class='col-sm-8'><input id='tdr' class='form-control' type='text'{{#tdr}} value='{{tdr}}'{{/tdr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vtmin'>vtmin: </label><div class='col-sm-8'><input id='vtmin' class='form-control' type='text'{{#vtmin}} value='{{vtmin}}'{{/vtmin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        return (
            {
                DiscExcContIEEEDEC1A: DiscExcContIEEEDEC1A,
                DiscExcContIEEEDEC2A: DiscExcContIEEEDEC2A,
                DiscontinuousExcitationControlDynamics: DiscontinuousExcitationControlDynamics,
                DiscExcContIEEEDEC3A: DiscExcContIEEEDEC3A
            }
        );
    }
);