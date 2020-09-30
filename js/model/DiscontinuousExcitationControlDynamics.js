define
(
    ["model/base", "model/StandardModels"],
    /**
     * In certain system configurations, continuous excitation control with terminal voltage and power system stabilizing regulator input signals does not ensure that the potential of the excitation system for improving system stability is fully exploited.
     *
     * For these situations, discontinuous excitation control signals can be employed to enhance stability following large transient disturbances.
     * <font color="#0f0f0f">For additional information please refer to IEEE 421.5-2005, 12.</font>
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
                let bucket = cim_data.DiscontinuousExcitationControlDynamics;
                if (null == bucket)
                   cim_data.DiscontinuousExcitationControlDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DiscontinuousExcitationControlDynamics[obj.id];
            }

            parse (context, sub)
            {
                let obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "DiscontinuousExcitationControlDynamics";
                base.parse_attribute (/<cim:DiscontinuousExcitationControlDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);
                base.parse_attribute (/<cim:DiscontinuousExcitationControlDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context);
                let bucket = context.parsed.DiscontinuousExcitationControlDynamics;
                if (null == bucket)
                   context.parsed.DiscontinuousExcitationControlDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DiscontinuousExcitationControlDynamics", "RemoteInputSignal", "RemoteInputSignal", fields);
                base.export_attribute (obj, "DiscontinuousExcitationControlDynamics", "ExcitationSystemDynamics", "ExcitationSystemDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DiscontinuousExcitationControlDynamics_collapse" aria-expanded="true" aria-controls="DiscontinuousExcitationControlDynamics_collapse" style="margin-left: 10px;">DiscontinuousExcitationControlDynamics</a></legend>
                    <div id="DiscontinuousExcitationControlDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#RemoteInputSignal}}<div><b>RemoteInputSignal</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{RemoteInputSignal}}");}); return false;'>{{RemoteInputSignal}}</a></div>{{/RemoteInputSignal}}
                    {{#ExcitationSystemDynamics}}<div><b>ExcitationSystemDynamics</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ExcitationSystemDynamics}}");}); return false;'>{{ExcitationSystemDynamics}}</a></div>{{/ExcitationSystemDynamics}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DiscontinuousExcitationControlDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_DiscontinuousExcitationControlDynamics_collapse" style="margin-left: 10px;">DiscontinuousExcitationControlDynamics</a></legend>
                    <div id="{{id}}_DiscontinuousExcitationControlDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RemoteInputSignal'>RemoteInputSignal: </label><div class='col-sm-8'><input id='{{id}}_RemoteInputSignal' class='form-control' type='text'{{#RemoteInputSignal}} value='{{RemoteInputSignal}}'{{/RemoteInputSignal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ExcitationSystemDynamics'>ExcitationSystemDynamics: </label><div class='col-sm-8'><input id='{{id}}_ExcitationSystemDynamics' class='form-control' type='text'{{#ExcitationSystemDynamics}} value='{{ExcitationSystemDynamics}}'{{/ExcitationSystemDynamics}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DiscontinuousExcitationControlDynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RemoteInputSignal").value; if ("" !== temp) obj["RemoteInputSignal"] = temp;
                temp = document.getElementById (id + "_ExcitationSystemDynamics").value; if ("" !== temp) obj["ExcitationSystemDynamics"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RemoteInputSignal", "0..1", "0..1", "RemoteInputSignal", "DiscontinuousExcitationControlDynamics"],
                            ["ExcitationSystemDynamics", "1", "0..1", "ExcitationSystemDynamics", "DiscontinuousExcitationControlDynamics"]
                        ]
                    )
                );
            }
        }

        /**
         * IEEE type DEC1A discontinuous excitation control model that boosts generator excitation to a level higher than that demanded by the voltage regulator and stabilizer immediately following a system fault.
         *
         * Reference: IEEE 421.5-2005, 12.2.
         *
         */
        class DiscExcContIEEEDEC1A extends DiscontinuousExcitationControlDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DiscExcContIEEEDEC1A;
                if (null == bucket)
                   cim_data.DiscExcContIEEEDEC1A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DiscExcContIEEEDEC1A[obj.id];
            }

            parse (context, sub)
            {
                let obj = DiscontinuousExcitationControlDynamics.prototype.parse.call (this, context, sub);
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
                let bucket = context.parsed.DiscExcContIEEEDEC1A;
                if (null == bucket)
                   context.parsed.DiscExcContIEEEDEC1A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DiscontinuousExcitationControlDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "DiscExcContIEEEDEC1A", "esc", "esc",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "kan", "kan",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "ketl", "ketl",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "tan", "tan",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "td", "td",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "tl1", "tl1",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "tl2", "tl2",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "tw5", "tw5",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "val", "val",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vanmax", "vanmax",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vomax", "vomax",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vomin", "vomin",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vsmax", "vsmax",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vsmin", "vsmin",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vtc", "vtc",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vtlmt", "vtlmt",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vtm", "vtm",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC1A", "vtn", "vtn",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DiscExcContIEEEDEC1A_collapse" aria-expanded="true" aria-controls="DiscExcContIEEEDEC1A_collapse" style="margin-left: 10px;">DiscExcContIEEEDEC1A</a></legend>
                    <div id="DiscExcContIEEEDEC1A_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DiscExcContIEEEDEC1A_collapse" aria-expanded="true" aria-controls="{{id}}_DiscExcContIEEEDEC1A_collapse" style="margin-left: 10px;">DiscExcContIEEEDEC1A</a></legend>
                    <div id="{{id}}_DiscExcContIEEEDEC1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DiscontinuousExcitationControlDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_esc'>esc: </label><div class='col-sm-8'><input id='{{id}}_esc' class='form-control' type='text'{{#esc}} value='{{esc}}'{{/esc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kan'>kan: </label><div class='col-sm-8'><input id='{{id}}_kan' class='form-control' type='text'{{#kan}} value='{{kan}}'{{/kan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ketl'>ketl: </label><div class='col-sm-8'><input id='{{id}}_ketl' class='form-control' type='text'{{#ketl}} value='{{ketl}}'{{/ketl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tan'>tan: </label><div class='col-sm-8'><input id='{{id}}_tan' class='form-control' type='text'{{#tan}} value='{{tan}}'{{/tan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td'>td: </label><div class='col-sm-8'><input id='{{id}}_td' class='form-control' type='text'{{#td}} value='{{td}}'{{/td}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl1'>tl1: </label><div class='col-sm-8'><input id='{{id}}_tl1' class='form-control' type='text'{{#tl1}} value='{{tl1}}'{{/tl1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl2'>tl2: </label><div class='col-sm-8'><input id='{{id}}_tl2' class='form-control' type='text'{{#tl2}} value='{{tl2}}'{{/tl2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw5'>tw5: </label><div class='col-sm-8'><input id='{{id}}_tw5' class='form-control' type='text'{{#tw5}} value='{{tw5}}'{{/tw5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_val'>val: </label><div class='col-sm-8'><input id='{{id}}_val' class='form-control' type='text'{{#val}} value='{{val}}'{{/val}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vanmax'>vanmax: </label><div class='col-sm-8'><input id='{{id}}_vanmax' class='form-control' type='text'{{#vanmax}} value='{{vanmax}}'{{/vanmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vomax'>vomax: </label><div class='col-sm-8'><input id='{{id}}_vomax' class='form-control' type='text'{{#vomax}} value='{{vomax}}'{{/vomax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vomin'>vomin: </label><div class='col-sm-8'><input id='{{id}}_vomin' class='form-control' type='text'{{#vomin}} value='{{vomin}}'{{/vomin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmax'>vsmax: </label><div class='col-sm-8'><input id='{{id}}_vsmax' class='form-control' type='text'{{#vsmax}} value='{{vsmax}}'{{/vsmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmin'>vsmin: </label><div class='col-sm-8'><input id='{{id}}_vsmin' class='form-control' type='text'{{#vsmin}} value='{{vsmin}}'{{/vsmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vtc'>vtc: </label><div class='col-sm-8'><input id='{{id}}_vtc' class='form-control' type='text'{{#vtc}} value='{{vtc}}'{{/vtc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vtlmt'>vtlmt: </label><div class='col-sm-8'><input id='{{id}}_vtlmt' class='form-control' type='text'{{#vtlmt}} value='{{vtlmt}}'{{/vtlmt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vtm'>vtm: </label><div class='col-sm-8'><input id='{{id}}_vtm' class='form-control' type='text'{{#vtm}} value='{{vtm}}'{{/vtm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vtn'>vtn: </label><div class='col-sm-8'><input id='{{id}}_vtn' class='form-control' type='text'{{#vtn}} value='{{vtn}}'{{/vtn}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DiscExcContIEEEDEC1A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_esc").value; if ("" !== temp) obj["esc"] = temp;
                temp = document.getElementById (id + "_kan").value; if ("" !== temp) obj["kan"] = temp;
                temp = document.getElementById (id + "_ketl").value; if ("" !== temp) obj["ketl"] = temp;
                temp = document.getElementById (id + "_tan").value; if ("" !== temp) obj["tan"] = temp;
                temp = document.getElementById (id + "_td").value; if ("" !== temp) obj["td"] = temp;
                temp = document.getElementById (id + "_tl1").value; if ("" !== temp) obj["tl1"] = temp;
                temp = document.getElementById (id + "_tl2").value; if ("" !== temp) obj["tl2"] = temp;
                temp = document.getElementById (id + "_tw5").value; if ("" !== temp) obj["tw5"] = temp;
                temp = document.getElementById (id + "_val").value; if ("" !== temp) obj["val"] = temp;
                temp = document.getElementById (id + "_vanmax").value; if ("" !== temp) obj["vanmax"] = temp;
                temp = document.getElementById (id + "_vomax").value; if ("" !== temp) obj["vomax"] = temp;
                temp = document.getElementById (id + "_vomin").value; if ("" !== temp) obj["vomin"] = temp;
                temp = document.getElementById (id + "_vsmax").value; if ("" !== temp) obj["vsmax"] = temp;
                temp = document.getElementById (id + "_vsmin").value; if ("" !== temp) obj["vsmin"] = temp;
                temp = document.getElementById (id + "_vtc").value; if ("" !== temp) obj["vtc"] = temp;
                temp = document.getElementById (id + "_vtlmt").value; if ("" !== temp) obj["vtlmt"] = temp;
                temp = document.getElementById (id + "_vtm").value; if ("" !== temp) obj["vtm"] = temp;
                temp = document.getElementById (id + "_vtn").value; if ("" !== temp) obj["vtn"] = temp;

                return (obj);
            }
        }

        /**
         * IEEE type DEC2A model for discontinuous excitation control.
         *
         * This system provides transient excitation boosting via an open-loop control as initiated by a trigger signal generated remotely.
         * Reference: IEEE 421.5-2005 12.3.
         *
         */
        class DiscExcContIEEEDEC2A extends DiscontinuousExcitationControlDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DiscExcContIEEEDEC2A;
                if (null == bucket)
                   cim_data.DiscExcContIEEEDEC2A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DiscExcContIEEEDEC2A[obj.id];
            }

            parse (context, sub)
            {
                let obj = DiscontinuousExcitationControlDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "DiscExcContIEEEDEC2A";
                base.parse_element (/<cim:DiscExcContIEEEDEC2A.td1>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.td1>/g, obj, "td1", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC2A.td2>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.td2>/g, obj, "td2", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC2A.vdmax>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.vdmax>/g, obj, "vdmax", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC2A.vdmin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.vdmin>/g, obj, "vdmin", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC2A.vk>([\s\S]*?)<\/cim:DiscExcContIEEEDEC2A.vk>/g, obj, "vk", base.to_string, sub, context);
                let bucket = context.parsed.DiscExcContIEEEDEC2A;
                if (null == bucket)
                   context.parsed.DiscExcContIEEEDEC2A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DiscontinuousExcitationControlDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "DiscExcContIEEEDEC2A", "td1", "td1",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC2A", "td2", "td2",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC2A", "vdmax", "vdmax",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC2A", "vdmin", "vdmin",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC2A", "vk", "vk",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DiscExcContIEEEDEC2A_collapse" aria-expanded="true" aria-controls="DiscExcContIEEEDEC2A_collapse" style="margin-left: 10px;">DiscExcContIEEEDEC2A</a></legend>
                    <div id="DiscExcContIEEEDEC2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DiscontinuousExcitationControlDynamics.prototype.template.call (this) +
                    `
                    {{#td1}}<div><b>td1</b>: {{td1}}</div>{{/td1}}
                    {{#td2}}<div><b>td2</b>: {{td2}}</div>{{/td2}}
                    {{#vdmax}}<div><b>vdmax</b>: {{vdmax}}</div>{{/vdmax}}
                    {{#vdmin}}<div><b>vdmin</b>: {{vdmin}}</div>{{/vdmin}}
                    {{#vk}}<div><b>vk</b>: {{vk}}</div>{{/vk}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DiscExcContIEEEDEC2A_collapse" aria-expanded="true" aria-controls="{{id}}_DiscExcContIEEEDEC2A_collapse" style="margin-left: 10px;">DiscExcContIEEEDEC2A</a></legend>
                    <div id="{{id}}_DiscExcContIEEEDEC2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DiscontinuousExcitationControlDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td1'>td1: </label><div class='col-sm-8'><input id='{{id}}_td1' class='form-control' type='text'{{#td1}} value='{{td1}}'{{/td1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td2'>td2: </label><div class='col-sm-8'><input id='{{id}}_td2' class='form-control' type='text'{{#td2}} value='{{td2}}'{{/td2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vdmax'>vdmax: </label><div class='col-sm-8'><input id='{{id}}_vdmax' class='form-control' type='text'{{#vdmax}} value='{{vdmax}}'{{/vdmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vdmin'>vdmin: </label><div class='col-sm-8'><input id='{{id}}_vdmin' class='form-control' type='text'{{#vdmin}} value='{{vdmin}}'{{/vdmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vk'>vk: </label><div class='col-sm-8'><input id='{{id}}_vk' class='form-control' type='text'{{#vk}} value='{{vk}}'{{/vk}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DiscExcContIEEEDEC2A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_td1").value; if ("" !== temp) obj["td1"] = temp;
                temp = document.getElementById (id + "_td2").value; if ("" !== temp) obj["td2"] = temp;
                temp = document.getElementById (id + "_vdmax").value; if ("" !== temp) obj["vdmax"] = temp;
                temp = document.getElementById (id + "_vdmin").value; if ("" !== temp) obj["vdmin"] = temp;
                temp = document.getElementById (id + "_vk").value; if ("" !== temp) obj["vk"] = temp;

                return (obj);
            }
        }

        /**
         * IEEE type DEC3A model.
         *
         * In some systems, the stabilizer output is disconnected from the regulator immediately following a severe fault to prevent the stabilizer from competing with action of voltage regulator during the first swing.
         * Reference: IEEE 421.5-2005 12.4.
         *
         */
        class DiscExcContIEEEDEC3A extends DiscontinuousExcitationControlDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DiscExcContIEEEDEC3A;
                if (null == bucket)
                   cim_data.DiscExcContIEEEDEC3A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DiscExcContIEEEDEC3A[obj.id];
            }

            parse (context, sub)
            {
                let obj = DiscontinuousExcitationControlDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "DiscExcContIEEEDEC3A";
                base.parse_element (/<cim:DiscExcContIEEEDEC3A.tdr>([\s\S]*?)<\/cim:DiscExcContIEEEDEC3A.tdr>/g, obj, "tdr", base.to_string, sub, context);
                base.parse_element (/<cim:DiscExcContIEEEDEC3A.vtmin>([\s\S]*?)<\/cim:DiscExcContIEEEDEC3A.vtmin>/g, obj, "vtmin", base.to_string, sub, context);
                let bucket = context.parsed.DiscExcContIEEEDEC3A;
                if (null == bucket)
                   context.parsed.DiscExcContIEEEDEC3A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DiscontinuousExcitationControlDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "DiscExcContIEEEDEC3A", "tdr", "tdr",  base.from_string, fields);
                base.export_element (obj, "DiscExcContIEEEDEC3A", "vtmin", "vtmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DiscExcContIEEEDEC3A_collapse" aria-expanded="true" aria-controls="DiscExcContIEEEDEC3A_collapse" style="margin-left: 10px;">DiscExcContIEEEDEC3A</a></legend>
                    <div id="DiscExcContIEEEDEC3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DiscontinuousExcitationControlDynamics.prototype.template.call (this) +
                    `
                    {{#tdr}}<div><b>tdr</b>: {{tdr}}</div>{{/tdr}}
                    {{#vtmin}}<div><b>vtmin</b>: {{vtmin}}</div>{{/vtmin}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DiscExcContIEEEDEC3A_collapse" aria-expanded="true" aria-controls="{{id}}_DiscExcContIEEEDEC3A_collapse" style="margin-left: 10px;">DiscExcContIEEEDEC3A</a></legend>
                    <div id="{{id}}_DiscExcContIEEEDEC3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DiscontinuousExcitationControlDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tdr'>tdr: </label><div class='col-sm-8'><input id='{{id}}_tdr' class='form-control' type='text'{{#tdr}} value='{{tdr}}'{{/tdr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vtmin'>vtmin: </label><div class='col-sm-8'><input id='{{id}}_vtmin' class='form-control' type='text'{{#vtmin}} value='{{vtmin}}'{{/vtmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DiscExcContIEEEDEC3A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_tdr").value; if ("" !== temp) obj["tdr"] = temp;
                temp = document.getElementById (id + "_vtmin").value; if ("" !== temp) obj["vtmin"] = temp;

                return (obj);
            }
        }

        return (
            {
                DiscExcContIEEEDEC2A: DiscExcContIEEEDEC2A,
                DiscontinuousExcitationControlDynamics: DiscontinuousExcitationControlDynamics,
                DiscExcContIEEEDEC1A: DiscExcContIEEEDEC1A,
                DiscExcContIEEEDEC3A: DiscExcContIEEEDEC3A
            }
        );
    }
);