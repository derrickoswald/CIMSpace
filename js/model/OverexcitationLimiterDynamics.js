define
(
    ["model/base", "model/StandardModels"],
    /**
     * Overexcitation limiters (OELs) are also referred to as <i>maximum excitation limiters </i>and <i>field current limiters. </i>The possibility of voltage collapse in stressed power systems increases the importance of modelling these limiters in studies of system conditions that cause machines to operate at high levels of excitation for a sustained period, such as voltage collapse or system-islanding.
     *
     * Such events typically occur over a long time frame compared with transient or small-signal stability simulations.
     *
     */
    function (base, StandardModels)
    {

        /**
         * <font color="#0f0f0f">O</font>Overexcitation limiter function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class OverexcitationLimiterDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OverexcitationLimiterDynamics;
                if (null == bucket)
                   cim_data.OverexcitationLimiterDynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OverexcitationLimiterDynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "OverexcitationLimiterDynamics";
                base.parse_attribute (/<cim:OverexcitationLimiterDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context);
                var bucket = context.parsed.OverexcitationLimiterDynamics;
                if (null == bucket)
                   context.parsed.OverexcitationLimiterDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "OverexcitationLimiterDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverexcitationLimiterDynamics_collapse" aria-expanded="true" aria-controls="OverexcitationLimiterDynamics_collapse" style="margin-left: 10px;">OverexcitationLimiterDynamics</a></legend>
                    <div id="OverexcitationLimiterDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverexcitationLimiterDynamics_collapse" aria-expanded="true" aria-controls="OverexcitationLimiterDynamics_collapse" style="margin-left: 10px;">OverexcitationLimiterDynamics</a></legend>
                    <div id="OverexcitationLimiterDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ExcitationSystemDynamics'>ExcitationSystemDynamics: </label><div class='col-sm-8'><input id='ExcitationSystemDynamics' class='form-control' type='text'{{#ExcitationSystemDynamics}} value='{{ExcitationSystemDynamics}}'{{/ExcitationSystemDynamics}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["ExcitationSystemDynamics", "ExcitationSystemDynamics", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Different from LimIEEEOEL, LimOEL2 has a fixed pickup threshold and reduces the excitation set-point by mean of non-windup integral regulator.
         *
         * Irated is the rated machine excitation current (calculated from nameplate conditions: V<sub>nom</sub>, P<sub>nom</sub>, CosPhi<sub>nom</sub>).
         *
         */
        class OverexcLim2 extends OverexcitationLimiterDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OverexcLim2;
                if (null == bucket)
                   cim_data.OverexcLim2 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OverexcLim2[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OverexcitationLimiterDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "OverexcLim2";
                base.parse_element (/<cim:OverexcLim2.ifdlim>([\s\S]*?)<\/cim:OverexcLim2.ifdlim>/g, obj, "ifdlim", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLim2.koi>([\s\S]*?)<\/cim:OverexcLim2.koi>/g, obj, "koi", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLim2.voimax>([\s\S]*?)<\/cim:OverexcLim2.voimax>/g, obj, "voimax", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLim2.voimin>([\s\S]*?)<\/cim:OverexcLim2.voimin>/g, obj, "voimin", base.to_string, sub, context);
                var bucket = context.parsed.OverexcLim2;
                if (null == bucket)
                   context.parsed.OverexcLim2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OverexcitationLimiterDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "OverexcLim2", "ifdlim", base.from_string, fields);
                base.export_element (obj, "OverexcLim2", "koi", base.from_string, fields);
                base.export_element (obj, "OverexcLim2", "voimax", base.from_string, fields);
                base.export_element (obj, "OverexcLim2", "voimin", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverexcLim2_collapse" aria-expanded="true" aria-controls="OverexcLim2_collapse" style="margin-left: 10px;">OverexcLim2</a></legend>
                    <div id="OverexcLim2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OverexcitationLimiterDynamics.prototype.template.call (this) +
                    `
                    {{#ifdlim}}<div><b>ifdlim</b>: {{ifdlim}}</div>{{/ifdlim}}
                    {{#koi}}<div><b>koi</b>: {{koi}}</div>{{/koi}}
                    {{#voimax}}<div><b>voimax</b>: {{voimax}}</div>{{/voimax}}
                    {{#voimin}}<div><b>voimin</b>: {{voimin}}</div>{{/voimin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverexcLim2_collapse" aria-expanded="true" aria-controls="OverexcLim2_collapse" style="margin-left: 10px;">OverexcLim2</a></legend>
                    <div id="OverexcLim2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OverexcitationLimiterDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ifdlim'>ifdlim: </label><div class='col-sm-8'><input id='ifdlim' class='form-control' type='text'{{#ifdlim}} value='{{ifdlim}}'{{/ifdlim}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='koi'>koi: </label><div class='col-sm-8'><input id='koi' class='form-control' type='text'{{#koi}} value='{{koi}}'{{/koi}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='voimax'>voimax: </label><div class='col-sm-8'><input id='voimax' class='form-control' type='text'{{#voimax}} value='{{voimax}}'{{/voimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='voimin'>voimin: </label><div class='col-sm-8'><input id='voimin' class='form-control' type='text'{{#voimin}} value='{{voimin}}'{{/voimin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * The over excitation limiter model is intended to represent the significant features of OELs necessary for some large-scale system studies.
         *
         * It is the result of a pragmatic approach to obtain a model that can be widely applied with attainable data from generator owners. An attempt to include all variations in the functionality of OELs and duplicate how they interact with the rest of the excitation systems would likely result in a level of application insufficient for the studies for which they are intended.
         *
         */
        class OverexcLimIEEE extends OverexcitationLimiterDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OverexcLimIEEE;
                if (null == bucket)
                   cim_data.OverexcLimIEEE = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OverexcLimIEEE[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OverexcitationLimiterDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "OverexcLimIEEE";
                base.parse_element (/<cim:OverexcLimIEEE.hyst>([\s\S]*?)<\/cim:OverexcLimIEEE.hyst>/g, obj, "hyst", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimIEEE.ifdlim>([\s\S]*?)<\/cim:OverexcLimIEEE.ifdlim>/g, obj, "ifdlim", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimIEEE.ifdmax>([\s\S]*?)<\/cim:OverexcLimIEEE.ifdmax>/g, obj, "ifdmax", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimIEEE.itfpu>([\s\S]*?)<\/cim:OverexcLimIEEE.itfpu>/g, obj, "itfpu", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimIEEE.kcd>([\s\S]*?)<\/cim:OverexcLimIEEE.kcd>/g, obj, "kcd", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimIEEE.kramp>([\s\S]*?)<\/cim:OverexcLimIEEE.kramp>/g, obj, "kramp", base.to_float, sub, context);
                var bucket = context.parsed.OverexcLimIEEE;
                if (null == bucket)
                   context.parsed.OverexcLimIEEE = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OverexcitationLimiterDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "OverexcLimIEEE", "hyst", base.from_string, fields);
                base.export_element (obj, "OverexcLimIEEE", "ifdlim", base.from_string, fields);
                base.export_element (obj, "OverexcLimIEEE", "ifdmax", base.from_string, fields);
                base.export_element (obj, "OverexcLimIEEE", "itfpu", base.from_string, fields);
                base.export_element (obj, "OverexcLimIEEE", "kcd", base.from_string, fields);
                base.export_element (obj, "OverexcLimIEEE", "kramp", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverexcLimIEEE_collapse" aria-expanded="true" aria-controls="OverexcLimIEEE_collapse" style="margin-left: 10px;">OverexcLimIEEE</a></legend>
                    <div id="OverexcLimIEEE_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OverexcitationLimiterDynamics.prototype.template.call (this) +
                    `
                    {{#hyst}}<div><b>hyst</b>: {{hyst}}</div>{{/hyst}}
                    {{#ifdlim}}<div><b>ifdlim</b>: {{ifdlim}}</div>{{/ifdlim}}
                    {{#ifdmax}}<div><b>ifdmax</b>: {{ifdmax}}</div>{{/ifdmax}}
                    {{#itfpu}}<div><b>itfpu</b>: {{itfpu}}</div>{{/itfpu}}
                    {{#kcd}}<div><b>kcd</b>: {{kcd}}</div>{{/kcd}}
                    {{#kramp}}<div><b>kramp</b>: {{kramp}}</div>{{/kramp}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverexcLimIEEE_collapse" aria-expanded="true" aria-controls="OverexcLimIEEE_collapse" style="margin-left: 10px;">OverexcLimIEEE</a></legend>
                    <div id="OverexcLimIEEE_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OverexcitationLimiterDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hyst'>hyst: </label><div class='col-sm-8'><input id='hyst' class='form-control' type='text'{{#hyst}} value='{{hyst}}'{{/hyst}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ifdlim'>ifdlim: </label><div class='col-sm-8'><input id='ifdlim' class='form-control' type='text'{{#ifdlim}} value='{{ifdlim}}'{{/ifdlim}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ifdmax'>ifdmax: </label><div class='col-sm-8'><input id='ifdmax' class='form-control' type='text'{{#ifdmax}} value='{{ifdmax}}'{{/ifdmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='itfpu'>itfpu: </label><div class='col-sm-8'><input id='itfpu' class='form-control' type='text'{{#itfpu}} value='{{itfpu}}'{{/itfpu}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kcd'>kcd: </label><div class='col-sm-8'><input id='kcd' class='form-control' type='text'{{#kcd}} value='{{kcd}}'{{/kcd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kramp'>kramp: </label><div class='col-sm-8'><input id='kramp' class='form-control' type='text'{{#kramp}} value='{{kramp}}'{{/kramp}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * Field voltage over excitation limiter.
         *
         */
        class OverexcLimX1 extends OverexcitationLimiterDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OverexcLimX1;
                if (null == bucket)
                   cim_data.OverexcLimX1 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OverexcLimX1[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OverexcitationLimiterDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "OverexcLimX1";
                base.parse_element (/<cim:OverexcLimX1.efd1>([\s\S]*?)<\/cim:OverexcLimX1.efd1>/g, obj, "efd1", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX1.efd2>([\s\S]*?)<\/cim:OverexcLimX1.efd2>/g, obj, "efd2", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX1.efd3>([\s\S]*?)<\/cim:OverexcLimX1.efd3>/g, obj, "efd3", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX1.efddes>([\s\S]*?)<\/cim:OverexcLimX1.efddes>/g, obj, "efddes", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX1.efdrated>([\s\S]*?)<\/cim:OverexcLimX1.efdrated>/g, obj, "efdrated", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX1.kmx>([\s\S]*?)<\/cim:OverexcLimX1.kmx>/g, obj, "kmx", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX1.t1>([\s\S]*?)<\/cim:OverexcLimX1.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX1.t2>([\s\S]*?)<\/cim:OverexcLimX1.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX1.t3>([\s\S]*?)<\/cim:OverexcLimX1.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX1.vlow>([\s\S]*?)<\/cim:OverexcLimX1.vlow>/g, obj, "vlow", base.to_string, sub, context);
                var bucket = context.parsed.OverexcLimX1;
                if (null == bucket)
                   context.parsed.OverexcLimX1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OverexcitationLimiterDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "OverexcLimX1", "efd1", base.from_string, fields);
                base.export_element (obj, "OverexcLimX1", "efd2", base.from_string, fields);
                base.export_element (obj, "OverexcLimX1", "efd3", base.from_string, fields);
                base.export_element (obj, "OverexcLimX1", "efddes", base.from_string, fields);
                base.export_element (obj, "OverexcLimX1", "efdrated", base.from_string, fields);
                base.export_element (obj, "OverexcLimX1", "kmx", base.from_string, fields);
                base.export_element (obj, "OverexcLimX1", "t1", base.from_string, fields);
                base.export_element (obj, "OverexcLimX1", "t2", base.from_string, fields);
                base.export_element (obj, "OverexcLimX1", "t3", base.from_string, fields);
                base.export_element (obj, "OverexcLimX1", "vlow", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverexcLimX1_collapse" aria-expanded="true" aria-controls="OverexcLimX1_collapse" style="margin-left: 10px;">OverexcLimX1</a></legend>
                    <div id="OverexcLimX1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OverexcitationLimiterDynamics.prototype.template.call (this) +
                    `
                    {{#efd1}}<div><b>efd1</b>: {{efd1}}</div>{{/efd1}}
                    {{#efd2}}<div><b>efd2</b>: {{efd2}}</div>{{/efd2}}
                    {{#efd3}}<div><b>efd3</b>: {{efd3}}</div>{{/efd3}}
                    {{#efddes}}<div><b>efddes</b>: {{efddes}}</div>{{/efddes}}
                    {{#efdrated}}<div><b>efdrated</b>: {{efdrated}}</div>{{/efdrated}}
                    {{#kmx}}<div><b>kmx</b>: {{kmx}}</div>{{/kmx}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#vlow}}<div><b>vlow</b>: {{vlow}}</div>{{/vlow}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverexcLimX1_collapse" aria-expanded="true" aria-controls="OverexcLimX1_collapse" style="margin-left: 10px;">OverexcLimX1</a></legend>
                    <div id="OverexcLimX1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OverexcitationLimiterDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='efd1'>efd1: </label><div class='col-sm-8'><input id='efd1' class='form-control' type='text'{{#efd1}} value='{{efd1}}'{{/efd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='efd2'>efd2: </label><div class='col-sm-8'><input id='efd2' class='form-control' type='text'{{#efd2}} value='{{efd2}}'{{/efd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='efd3'>efd3: </label><div class='col-sm-8'><input id='efd3' class='form-control' type='text'{{#efd3}} value='{{efd3}}'{{/efd3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='efddes'>efddes: </label><div class='col-sm-8'><input id='efddes' class='form-control' type='text'{{#efddes}} value='{{efddes}}'{{/efddes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='efdrated'>efdrated: </label><div class='col-sm-8'><input id='efdrated' class='form-control' type='text'{{#efdrated}} value='{{efdrated}}'{{/efdrated}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kmx'>kmx: </label><div class='col-sm-8'><input id='kmx' class='form-control' type='text'{{#kmx}} value='{{kmx}}'{{/kmx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='t1'>t1: </label><div class='col-sm-8'><input id='t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='t2'>t2: </label><div class='col-sm-8'><input id='t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='t3'>t3: </label><div class='col-sm-8'><input id='t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vlow'>vlow: </label><div class='col-sm-8'><input id='vlow' class='form-control' type='text'{{#vlow}} value='{{vlow}}'{{/vlow}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * Field Voltage or Current overexcitation limiter designed to protect the generator field of an AC machine with automatic excitation control from overheating due to prolonged overexcitation.
         *
         */
        class OverexcLimX2 extends OverexcitationLimiterDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OverexcLimX2;
                if (null == bucket)
                   cim_data.OverexcLimX2 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OverexcLimX2[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OverexcitationLimiterDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "OverexcLimX2";
                base.parse_element (/<cim:OverexcLimX2.efd1>([\s\S]*?)<\/cim:OverexcLimX2.efd1>/g, obj, "efd1", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX2.efd2>([\s\S]*?)<\/cim:OverexcLimX2.efd2>/g, obj, "efd2", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX2.efd3>([\s\S]*?)<\/cim:OverexcLimX2.efd3>/g, obj, "efd3", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX2.efddes>([\s\S]*?)<\/cim:OverexcLimX2.efddes>/g, obj, "efddes", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX2.efdrated>([\s\S]*?)<\/cim:OverexcLimX2.efdrated>/g, obj, "efdrated", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX2.kmx>([\s\S]*?)<\/cim:OverexcLimX2.kmx>/g, obj, "kmx", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX2.m>([\s\S]*?)<\/cim:OverexcLimX2.m>/g, obj, "m", base.to_boolean, sub, context);
                base.parse_element (/<cim:OverexcLimX2.t1>([\s\S]*?)<\/cim:OverexcLimX2.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX2.t2>([\s\S]*?)<\/cim:OverexcLimX2.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX2.t3>([\s\S]*?)<\/cim:OverexcLimX2.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:OverexcLimX2.vlow>([\s\S]*?)<\/cim:OverexcLimX2.vlow>/g, obj, "vlow", base.to_string, sub, context);
                var bucket = context.parsed.OverexcLimX2;
                if (null == bucket)
                   context.parsed.OverexcLimX2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OverexcitationLimiterDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "OverexcLimX2", "efd1", base.from_string, fields);
                base.export_element (obj, "OverexcLimX2", "efd2", base.from_string, fields);
                base.export_element (obj, "OverexcLimX2", "efd3", base.from_string, fields);
                base.export_element (obj, "OverexcLimX2", "efddes", base.from_string, fields);
                base.export_element (obj, "OverexcLimX2", "efdrated", base.from_string, fields);
                base.export_element (obj, "OverexcLimX2", "kmx", base.from_string, fields);
                base.export_element (obj, "OverexcLimX2", "m", base.from_boolean, fields);
                base.export_element (obj, "OverexcLimX2", "t1", base.from_string, fields);
                base.export_element (obj, "OverexcLimX2", "t2", base.from_string, fields);
                base.export_element (obj, "OverexcLimX2", "t3", base.from_string, fields);
                base.export_element (obj, "OverexcLimX2", "vlow", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverexcLimX2_collapse" aria-expanded="true" aria-controls="OverexcLimX2_collapse" style="margin-left: 10px;">OverexcLimX2</a></legend>
                    <div id="OverexcLimX2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OverexcitationLimiterDynamics.prototype.template.call (this) +
                    `
                    {{#efd1}}<div><b>efd1</b>: {{efd1}}</div>{{/efd1}}
                    {{#efd2}}<div><b>efd2</b>: {{efd2}}</div>{{/efd2}}
                    {{#efd3}}<div><b>efd3</b>: {{efd3}}</div>{{/efd3}}
                    {{#efddes}}<div><b>efddes</b>: {{efddes}}</div>{{/efddes}}
                    {{#efdrated}}<div><b>efdrated</b>: {{efdrated}}</div>{{/efdrated}}
                    {{#kmx}}<div><b>kmx</b>: {{kmx}}</div>{{/kmx}}
                    {{#m}}<div><b>m</b>: {{m}}</div>{{/m}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#vlow}}<div><b>vlow</b>: {{vlow}}</div>{{/vlow}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OverexcLimX2_collapse" aria-expanded="true" aria-controls="OverexcLimX2_collapse" style="margin-left: 10px;">OverexcLimX2</a></legend>
                    <div id="OverexcLimX2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OverexcitationLimiterDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='efd1'>efd1: </label><div class='col-sm-8'><input id='efd1' class='form-control' type='text'{{#efd1}} value='{{efd1}}'{{/efd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='efd2'>efd2: </label><div class='col-sm-8'><input id='efd2' class='form-control' type='text'{{#efd2}} value='{{efd2}}'{{/efd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='efd3'>efd3: </label><div class='col-sm-8'><input id='efd3' class='form-control' type='text'{{#efd3}} value='{{efd3}}'{{/efd3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='efddes'>efddes: </label><div class='col-sm-8'><input id='efddes' class='form-control' type='text'{{#efddes}} value='{{efddes}}'{{/efddes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='efdrated'>efdrated: </label><div class='col-sm-8'><input id='efdrated' class='form-control' type='text'{{#efdrated}} value='{{efdrated}}'{{/efdrated}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kmx'>kmx: </label><div class='col-sm-8'><input id='kmx' class='form-control' type='text'{{#kmx}} value='{{kmx}}'{{/kmx}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='m'>m: </label><div class='col-sm-8'><input id='m' class='form-check-input' type='checkbox'{{#m}} checked{{/m}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='t1'>t1: </label><div class='col-sm-8'><input id='t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='t2'>t2: </label><div class='col-sm-8'><input id='t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='t3'>t3: </label><div class='col-sm-8'><input id='t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vlow'>vlow: </label><div class='col-sm-8'><input id='vlow' class='form-control' type='text'{{#vlow}} value='{{vlow}}'{{/vlow}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        return (
            {
                OverexcitationLimiterDynamics: OverexcitationLimiterDynamics,
                OverexcLimX2: OverexcLimX2,
                OverexcLimX1: OverexcLimX1,
                OverexcLim2: OverexcLim2,
                OverexcLimIEEE: OverexcLimIEEE
            }
        );
    }
);