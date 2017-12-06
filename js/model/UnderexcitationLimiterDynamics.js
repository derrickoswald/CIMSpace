define
(
    ["model/base", "model/StandardModels"],
    /**
     * Underexcitation limiters (UELs) act to boost excitation.
     *
     * The UEL typically senses either a combination of voltage and current of the synchronous machine or a combination of real and reactive power. Some UELs utilize a temperature or pressure recalibration feature, in which the UEL characteristic is shifted depending upon the generator cooling gas temperature or pressure.
     *
     */
    function (base, StandardModels)
    {

        /**
         * Underexcitation limiter function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class UnderexcitationLimiterDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UnderexcitationLimiterDynamics;
                if (null == bucket)
                   cim_data.UnderexcitationLimiterDynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UnderexcitationLimiterDynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "UnderexcitationLimiterDynamics";
                base.parse_attribute (/<cim:UnderexcitationLimiterDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context);
                base.parse_attribute (/<cim:UnderexcitationLimiterDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);

                var bucket = context.parsed.UnderexcitationLimiterDynamics;
                if (null == bucket)
                   context.parsed.UnderexcitationLimiterDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "UnderexcitationLimiterDynamics", "ExcitationSystemDynamics", fields);
                base.export_attribute (obj, "UnderexcitationLimiterDynamics", "RemoteInputSignal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcitationLimiterDynamics_collapse" aria-expanded="true" aria-controls="UnderexcitationLimiterDynamics_collapse" style="margin-left: 10px;">UnderexcitationLimiterDynamics</a></legend>
                    <div id="UnderexcitationLimiterDynamics_collapse" class="collapse in" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcitationLimiterDynamics_collapse" aria-expanded="true" aria-controls="UnderexcitationLimiterDynamics_collapse" style="margin-left: 10px;">UnderexcitationLimiterDynamics</a></legend>
                    <div id="UnderexcitationLimiterDynamics_collapse" class="collapse in" style="margin-left: 10px;">
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
        }

        /**
         * The class represents the Type UEL2 which has either a straight-line or multi-segment characteristic when plotted in terms of machine reactive power output vs. real power output.
         *
         * Reference: IEEE UEL2 421.5-2005 Section 10.2.  (Limit characteristic lookup table shown in Figure 10.4 (p 32) of the standard).
         *
         */
        class UnderexcLimIEEE2 extends UnderexcitationLimiterDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UnderexcLimIEEE2;
                if (null == bucket)
                   cim_data.UnderexcLimIEEE2 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UnderexcLimIEEE2[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = UnderexcitationLimiterDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "UnderexcLimIEEE2";
                base.parse_element (/<cim:UnderexcLimIEEE2.k1>([\s\S]*?)<\/cim:UnderexcLimIEEE2.k1>/g, obj, "k1", base.to_float, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.k2>([\s\S]*?)<\/cim:UnderexcLimIEEE2.k2>/g, obj, "k2", base.to_float, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.kfb>([\s\S]*?)<\/cim:UnderexcLimIEEE2.kfb>/g, obj, "kfb", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.kuf>([\s\S]*?)<\/cim:UnderexcLimIEEE2.kuf>/g, obj, "kuf", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.kui>([\s\S]*?)<\/cim:UnderexcLimIEEE2.kui>/g, obj, "kui", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.kul>([\s\S]*?)<\/cim:UnderexcLimIEEE2.kul>/g, obj, "kul", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.p0>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p0>/g, obj, "p0", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.p1>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p1>/g, obj, "p1", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.p10>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p10>/g, obj, "p10", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.p2>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p2>/g, obj, "p2", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.p3>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p3>/g, obj, "p3", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.p4>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p4>/g, obj, "p4", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.p5>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p5>/g, obj, "p5", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.p6>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p6>/g, obj, "p6", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.p7>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p7>/g, obj, "p7", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.p8>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p8>/g, obj, "p8", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.p9>([\s\S]*?)<\/cim:UnderexcLimIEEE2.p9>/g, obj, "p9", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.q0>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q0>/g, obj, "q0", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.q1>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q1>/g, obj, "q1", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.q10>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q10>/g, obj, "q10", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.q2>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q2>/g, obj, "q2", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.q3>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q3>/g, obj, "q3", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.q4>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q4>/g, obj, "q4", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.q5>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q5>/g, obj, "q5", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.q6>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q6>/g, obj, "q6", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.q7>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q7>/g, obj, "q7", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.q8>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q8>/g, obj, "q8", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.q9>([\s\S]*?)<\/cim:UnderexcLimIEEE2.q9>/g, obj, "q9", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.tu1>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tu1>/g, obj, "tu1", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.tu2>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tu2>/g, obj, "tu2", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.tu3>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tu3>/g, obj, "tu3", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.tu4>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tu4>/g, obj, "tu4", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.tul>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tul>/g, obj, "tul", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.tup>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tup>/g, obj, "tup", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.tuq>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tuq>/g, obj, "tuq", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.tuv>([\s\S]*?)<\/cim:UnderexcLimIEEE2.tuv>/g, obj, "tuv", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.vuimax>([\s\S]*?)<\/cim:UnderexcLimIEEE2.vuimax>/g, obj, "vuimax", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.vuimin>([\s\S]*?)<\/cim:UnderexcLimIEEE2.vuimin>/g, obj, "vuimin", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.vulmax>([\s\S]*?)<\/cim:UnderexcLimIEEE2.vulmax>/g, obj, "vulmax", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE2.vulmin>([\s\S]*?)<\/cim:UnderexcLimIEEE2.vulmin>/g, obj, "vulmin", base.to_string, sub, context);

                var bucket = context.parsed.UnderexcLimIEEE2;
                if (null == bucket)
                   context.parsed.UnderexcLimIEEE2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = UnderexcitationLimiterDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "UnderexcLimIEEE2", "k1", base.from_float, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "k2", base.from_float, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "kfb", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "kuf", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "kui", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "kul", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "p0", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "p1", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "p10", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "p2", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "p3", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "p4", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "p5", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "p6", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "p7", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "p8", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "p9", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "q0", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "q1", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "q10", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "q2", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "q3", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "q4", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "q5", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "q6", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "q7", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "q8", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "q9", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "tu1", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "tu2", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "tu3", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "tu4", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "tul", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "tup", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "tuq", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "tuv", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "vuimax", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "vuimin", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "vulmax", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE2", "vulmin", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcLimIEEE2_collapse" aria-expanded="true" aria-controls="UnderexcLimIEEE2_collapse" style="margin-left: 10px;">UnderexcLimIEEE2</a></legend>
                    <div id="UnderexcLimIEEE2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + UnderexcitationLimiterDynamics.prototype.template.call (this) +
                    `
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#kfb}}<div><b>kfb</b>: {{kfb}}</div>{{/kfb}}
                    {{#kuf}}<div><b>kuf</b>: {{kuf}}</div>{{/kuf}}
                    {{#kui}}<div><b>kui</b>: {{kui}}</div>{{/kui}}
                    {{#kul}}<div><b>kul</b>: {{kul}}</div>{{/kul}}
                    {{#p0}}<div><b>p0</b>: {{p0}}</div>{{/p0}}
                    {{#p1}}<div><b>p1</b>: {{p1}}</div>{{/p1}}
                    {{#p10}}<div><b>p10</b>: {{p10}}</div>{{/p10}}
                    {{#p2}}<div><b>p2</b>: {{p2}}</div>{{/p2}}
                    {{#p3}}<div><b>p3</b>: {{p3}}</div>{{/p3}}
                    {{#p4}}<div><b>p4</b>: {{p4}}</div>{{/p4}}
                    {{#p5}}<div><b>p5</b>: {{p5}}</div>{{/p5}}
                    {{#p6}}<div><b>p6</b>: {{p6}}</div>{{/p6}}
                    {{#p7}}<div><b>p7</b>: {{p7}}</div>{{/p7}}
                    {{#p8}}<div><b>p8</b>: {{p8}}</div>{{/p8}}
                    {{#p9}}<div><b>p9</b>: {{p9}}</div>{{/p9}}
                    {{#q0}}<div><b>q0</b>: {{q0}}</div>{{/q0}}
                    {{#q1}}<div><b>q1</b>: {{q1}}</div>{{/q1}}
                    {{#q10}}<div><b>q10</b>: {{q10}}</div>{{/q10}}
                    {{#q2}}<div><b>q2</b>: {{q2}}</div>{{/q2}}
                    {{#q3}}<div><b>q3</b>: {{q3}}</div>{{/q3}}
                    {{#q4}}<div><b>q4</b>: {{q4}}</div>{{/q4}}
                    {{#q5}}<div><b>q5</b>: {{q5}}</div>{{/q5}}
                    {{#q6}}<div><b>q6</b>: {{q6}}</div>{{/q6}}
                    {{#q7}}<div><b>q7</b>: {{q7}}</div>{{/q7}}
                    {{#q8}}<div><b>q8</b>: {{q8}}</div>{{/q8}}
                    {{#q9}}<div><b>q9</b>: {{q9}}</div>{{/q9}}
                    {{#tu1}}<div><b>tu1</b>: {{tu1}}</div>{{/tu1}}
                    {{#tu2}}<div><b>tu2</b>: {{tu2}}</div>{{/tu2}}
                    {{#tu3}}<div><b>tu3</b>: {{tu3}}</div>{{/tu3}}
                    {{#tu4}}<div><b>tu4</b>: {{tu4}}</div>{{/tu4}}
                    {{#tul}}<div><b>tul</b>: {{tul}}</div>{{/tul}}
                    {{#tup}}<div><b>tup</b>: {{tup}}</div>{{/tup}}
                    {{#tuq}}<div><b>tuq</b>: {{tuq}}</div>{{/tuq}}
                    {{#tuv}}<div><b>tuv</b>: {{tuv}}</div>{{/tuv}}
                    {{#vuimax}}<div><b>vuimax</b>: {{vuimax}}</div>{{/vuimax}}
                    {{#vuimin}}<div><b>vuimin</b>: {{vuimin}}</div>{{/vuimin}}
                    {{#vulmax}}<div><b>vulmax</b>: {{vulmax}}</div>{{/vulmax}}
                    {{#vulmin}}<div><b>vulmin</b>: {{vulmin}}</div>{{/vulmin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcLimIEEE2_collapse" aria-expanded="true" aria-controls="UnderexcLimIEEE2_collapse" style="margin-left: 10px;">UnderexcLimIEEE2</a></legend>
                    <div id="UnderexcLimIEEE2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + UnderexcitationLimiterDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='k1'>k1: </label><div class='col-sm-8'><input id='k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='k2'>k2: </label><div class='col-sm-8'><input id='k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kfb'>kfb: </label><div class='col-sm-8'><input id='kfb' class='form-control' type='text'{{#kfb}} value='{{kfb}}'{{/kfb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kuf'>kuf: </label><div class='col-sm-8'><input id='kuf' class='form-control' type='text'{{#kuf}} value='{{kuf}}'{{/kuf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kui'>kui: </label><div class='col-sm-8'><input id='kui' class='form-control' type='text'{{#kui}} value='{{kui}}'{{/kui}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kul'>kul: </label><div class='col-sm-8'><input id='kul' class='form-control' type='text'{{#kul}} value='{{kul}}'{{/kul}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='p0'>p0: </label><div class='col-sm-8'><input id='p0' class='form-control' type='text'{{#p0}} value='{{p0}}'{{/p0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='p1'>p1: </label><div class='col-sm-8'><input id='p1' class='form-control' type='text'{{#p1}} value='{{p1}}'{{/p1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='p10'>p10: </label><div class='col-sm-8'><input id='p10' class='form-control' type='text'{{#p10}} value='{{p10}}'{{/p10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='p2'>p2: </label><div class='col-sm-8'><input id='p2' class='form-control' type='text'{{#p2}} value='{{p2}}'{{/p2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='p3'>p3: </label><div class='col-sm-8'><input id='p3' class='form-control' type='text'{{#p3}} value='{{p3}}'{{/p3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='p4'>p4: </label><div class='col-sm-8'><input id='p4' class='form-control' type='text'{{#p4}} value='{{p4}}'{{/p4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='p5'>p5: </label><div class='col-sm-8'><input id='p5' class='form-control' type='text'{{#p5}} value='{{p5}}'{{/p5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='p6'>p6: </label><div class='col-sm-8'><input id='p6' class='form-control' type='text'{{#p6}} value='{{p6}}'{{/p6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='p7'>p7: </label><div class='col-sm-8'><input id='p7' class='form-control' type='text'{{#p7}} value='{{p7}}'{{/p7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='p8'>p8: </label><div class='col-sm-8'><input id='p8' class='form-control' type='text'{{#p8}} value='{{p8}}'{{/p8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='p9'>p9: </label><div class='col-sm-8'><input id='p9' class='form-control' type='text'{{#p9}} value='{{p9}}'{{/p9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='q0'>q0: </label><div class='col-sm-8'><input id='q0' class='form-control' type='text'{{#q0}} value='{{q0}}'{{/q0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='q1'>q1: </label><div class='col-sm-8'><input id='q1' class='form-control' type='text'{{#q1}} value='{{q1}}'{{/q1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='q10'>q10: </label><div class='col-sm-8'><input id='q10' class='form-control' type='text'{{#q10}} value='{{q10}}'{{/q10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='q2'>q2: </label><div class='col-sm-8'><input id='q2' class='form-control' type='text'{{#q2}} value='{{q2}}'{{/q2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='q3'>q3: </label><div class='col-sm-8'><input id='q3' class='form-control' type='text'{{#q3}} value='{{q3}}'{{/q3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='q4'>q4: </label><div class='col-sm-8'><input id='q4' class='form-control' type='text'{{#q4}} value='{{q4}}'{{/q4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='q5'>q5: </label><div class='col-sm-8'><input id='q5' class='form-control' type='text'{{#q5}} value='{{q5}}'{{/q5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='q6'>q6: </label><div class='col-sm-8'><input id='q6' class='form-control' type='text'{{#q6}} value='{{q6}}'{{/q6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='q7'>q7: </label><div class='col-sm-8'><input id='q7' class='form-control' type='text'{{#q7}} value='{{q7}}'{{/q7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='q8'>q8: </label><div class='col-sm-8'><input id='q8' class='form-control' type='text'{{#q8}} value='{{q8}}'{{/q8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='q9'>q9: </label><div class='col-sm-8'><input id='q9' class='form-control' type='text'{{#q9}} value='{{q9}}'{{/q9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tu1'>tu1: </label><div class='col-sm-8'><input id='tu1' class='form-control' type='text'{{#tu1}} value='{{tu1}}'{{/tu1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tu2'>tu2: </label><div class='col-sm-8'><input id='tu2' class='form-control' type='text'{{#tu2}} value='{{tu2}}'{{/tu2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tu3'>tu3: </label><div class='col-sm-8'><input id='tu3' class='form-control' type='text'{{#tu3}} value='{{tu3}}'{{/tu3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tu4'>tu4: </label><div class='col-sm-8'><input id='tu4' class='form-control' type='text'{{#tu4}} value='{{tu4}}'{{/tu4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tul'>tul: </label><div class='col-sm-8'><input id='tul' class='form-control' type='text'{{#tul}} value='{{tul}}'{{/tul}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tup'>tup: </label><div class='col-sm-8'><input id='tup' class='form-control' type='text'{{#tup}} value='{{tup}}'{{/tup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tuq'>tuq: </label><div class='col-sm-8'><input id='tuq' class='form-control' type='text'{{#tuq}} value='{{tuq}}'{{/tuq}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tuv'>tuv: </label><div class='col-sm-8'><input id='tuv' class='form-control' type='text'{{#tuv}} value='{{tuv}}'{{/tuv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vuimax'>vuimax: </label><div class='col-sm-8'><input id='vuimax' class='form-control' type='text'{{#vuimax}} value='{{vuimax}}'{{/vuimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vuimin'>vuimin: </label><div class='col-sm-8'><input id='vuimin' class='form-control' type='text'{{#vuimin}} value='{{vuimin}}'{{/vuimin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vulmax'>vulmax: </label><div class='col-sm-8'><input id='vulmax' class='form-control' type='text'{{#vulmax}} value='{{vulmax}}'{{/vulmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vulmin'>vulmin: </label><div class='col-sm-8'><input id='vulmin' class='form-control' type='text'{{#vulmin}} value='{{vulmin}}'{{/vulmin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * <font color="#0f0f0f">Allis-Chalmers minimum excitation limiter.</font>
         *
         */
        class UnderexcLimX1 extends UnderexcitationLimiterDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UnderexcLimX1;
                if (null == bucket)
                   cim_data.UnderexcLimX1 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UnderexcLimX1[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = UnderexcitationLimiterDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "UnderexcLimX1";
                base.parse_element (/<cim:UnderexcLimX1.k>([\s\S]*?)<\/cim:UnderexcLimX1.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimX1.kf2>([\s\S]*?)<\/cim:UnderexcLimX1.kf2>/g, obj, "kf2", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimX1.km>([\s\S]*?)<\/cim:UnderexcLimX1.km>/g, obj, "km", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimX1.melmax>([\s\S]*?)<\/cim:UnderexcLimX1.melmax>/g, obj, "melmax", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimX1.tf2>([\s\S]*?)<\/cim:UnderexcLimX1.tf2>/g, obj, "tf2", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimX1.tm>([\s\S]*?)<\/cim:UnderexcLimX1.tm>/g, obj, "tm", base.to_string, sub, context);

                var bucket = context.parsed.UnderexcLimX1;
                if (null == bucket)
                   context.parsed.UnderexcLimX1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = UnderexcitationLimiterDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "UnderexcLimX1", "k", base.from_string, fields);
                base.export_element (obj, "UnderexcLimX1", "kf2", base.from_string, fields);
                base.export_element (obj, "UnderexcLimX1", "km", base.from_string, fields);
                base.export_element (obj, "UnderexcLimX1", "melmax", base.from_string, fields);
                base.export_element (obj, "UnderexcLimX1", "tf2", base.from_string, fields);
                base.export_element (obj, "UnderexcLimX1", "tm", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcLimX1_collapse" aria-expanded="true" aria-controls="UnderexcLimX1_collapse" style="margin-left: 10px;">UnderexcLimX1</a></legend>
                    <div id="UnderexcLimX1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + UnderexcitationLimiterDynamics.prototype.template.call (this) +
                    `
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#kf2}}<div><b>kf2</b>: {{kf2}}</div>{{/kf2}}
                    {{#km}}<div><b>km</b>: {{km}}</div>{{/km}}
                    {{#melmax}}<div><b>melmax</b>: {{melmax}}</div>{{/melmax}}
                    {{#tf2}}<div><b>tf2</b>: {{tf2}}</div>{{/tf2}}
                    {{#tm}}<div><b>tm</b>: {{tm}}</div>{{/tm}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcLimX1_collapse" aria-expanded="true" aria-controls="UnderexcLimX1_collapse" style="margin-left: 10px;">UnderexcLimX1</a></legend>
                    <div id="UnderexcLimX1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + UnderexcitationLimiterDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='k'>k: </label><div class='col-sm-8'><input id='k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kf2'>kf2: </label><div class='col-sm-8'><input id='kf2' class='form-control' type='text'{{#kf2}} value='{{kf2}}'{{/kf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='km'>km: </label><div class='col-sm-8'><input id='km' class='form-control' type='text'{{#km}} value='{{km}}'{{/km}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='melmax'>melmax: </label><div class='col-sm-8'><input id='melmax' class='form-control' type='text'{{#melmax}} value='{{melmax}}'{{/melmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tf2'>tf2: </label><div class='col-sm-8'><input id='tf2' class='form-control' type='text'{{#tf2}} value='{{tf2}}'{{/tf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tm'>tm: </label><div class='col-sm-8'><input id='tm' class='form-control' type='text'{{#tm}} value='{{tm}}'{{/tm}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * <font color="#0f0f0f">Westinghouse minimum excitation limiter.</font>
         *
         */
        class UnderexcLimX2 extends UnderexcitationLimiterDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UnderexcLimX2;
                if (null == bucket)
                   cim_data.UnderexcLimX2 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UnderexcLimX2[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = UnderexcitationLimiterDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "UnderexcLimX2";
                base.parse_element (/<cim:UnderexcLimX2.kf2>([\s\S]*?)<\/cim:UnderexcLimX2.kf2>/g, obj, "kf2", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimX2.km>([\s\S]*?)<\/cim:UnderexcLimX2.km>/g, obj, "km", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimX2.melmax>([\s\S]*?)<\/cim:UnderexcLimX2.melmax>/g, obj, "melmax", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimX2.qo>([\s\S]*?)<\/cim:UnderexcLimX2.qo>/g, obj, "qo", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimX2.r>([\s\S]*?)<\/cim:UnderexcLimX2.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimX2.tf2>([\s\S]*?)<\/cim:UnderexcLimX2.tf2>/g, obj, "tf2", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimX2.tm>([\s\S]*?)<\/cim:UnderexcLimX2.tm>/g, obj, "tm", base.to_string, sub, context);

                var bucket = context.parsed.UnderexcLimX2;
                if (null == bucket)
                   context.parsed.UnderexcLimX2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = UnderexcitationLimiterDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "UnderexcLimX2", "kf2", base.from_string, fields);
                base.export_element (obj, "UnderexcLimX2", "km", base.from_string, fields);
                base.export_element (obj, "UnderexcLimX2", "melmax", base.from_string, fields);
                base.export_element (obj, "UnderexcLimX2", "qo", base.from_string, fields);
                base.export_element (obj, "UnderexcLimX2", "r", base.from_string, fields);
                base.export_element (obj, "UnderexcLimX2", "tf2", base.from_string, fields);
                base.export_element (obj, "UnderexcLimX2", "tm", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcLimX2_collapse" aria-expanded="true" aria-controls="UnderexcLimX2_collapse" style="margin-left: 10px;">UnderexcLimX2</a></legend>
                    <div id="UnderexcLimX2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + UnderexcitationLimiterDynamics.prototype.template.call (this) +
                    `
                    {{#kf2}}<div><b>kf2</b>: {{kf2}}</div>{{/kf2}}
                    {{#km}}<div><b>km</b>: {{km}}</div>{{/km}}
                    {{#melmax}}<div><b>melmax</b>: {{melmax}}</div>{{/melmax}}
                    {{#qo}}<div><b>qo</b>: {{qo}}</div>{{/qo}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#tf2}}<div><b>tf2</b>: {{tf2}}</div>{{/tf2}}
                    {{#tm}}<div><b>tm</b>: {{tm}}</div>{{/tm}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcLimX2_collapse" aria-expanded="true" aria-controls="UnderexcLimX2_collapse" style="margin-left: 10px;">UnderexcLimX2</a></legend>
                    <div id="UnderexcLimX2_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + UnderexcitationLimiterDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kf2'>kf2: </label><div class='col-sm-8'><input id='kf2' class='form-control' type='text'{{#kf2}} value='{{kf2}}'{{/kf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='km'>km: </label><div class='col-sm-8'><input id='km' class='form-control' type='text'{{#km}} value='{{km}}'{{/km}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='melmax'>melmax: </label><div class='col-sm-8'><input id='melmax' class='form-control' type='text'{{#melmax}} value='{{melmax}}'{{/melmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='qo'>qo: </label><div class='col-sm-8'><input id='qo' class='form-control' type='text'{{#qo}} value='{{qo}}'{{/qo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='r'>r: </label><div class='col-sm-8'><input id='r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tf2'>tf2: </label><div class='col-sm-8'><input id='tf2' class='form-control' type='text'{{#tf2}} value='{{tf2}}'{{/tf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tm'>tm: </label><div class='col-sm-8'><input id='tm' class='form-control' type='text'{{#tm}} value='{{tm}}'{{/tm}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * The class represents the Type UEL1 model which has a circular limit boundary when plotted in terms of machine reactive power vs. real power output.
         *
         * Reference: IEEE UEL1 421.5-2005 Section 10.1.
         *
         */
        class UnderexcLimIEEE1 extends UnderexcitationLimiterDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UnderexcLimIEEE1;
                if (null == bucket)
                   cim_data.UnderexcLimIEEE1 = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UnderexcLimIEEE1[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = UnderexcitationLimiterDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "UnderexcLimIEEE1";
                base.parse_element (/<cim:UnderexcLimIEEE1.kuc>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kuc>/g, obj, "kuc", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.kuf>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kuf>/g, obj, "kuf", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.kui>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kui>/g, obj, "kui", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.kul>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kul>/g, obj, "kul", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.kur>([\s\S]*?)<\/cim:UnderexcLimIEEE1.kur>/g, obj, "kur", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.tu1>([\s\S]*?)<\/cim:UnderexcLimIEEE1.tu1>/g, obj, "tu1", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.tu2>([\s\S]*?)<\/cim:UnderexcLimIEEE1.tu2>/g, obj, "tu2", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.tu3>([\s\S]*?)<\/cim:UnderexcLimIEEE1.tu3>/g, obj, "tu3", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.tu4>([\s\S]*?)<\/cim:UnderexcLimIEEE1.tu4>/g, obj, "tu4", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.vucmax>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vucmax>/g, obj, "vucmax", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.vuimax>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vuimax>/g, obj, "vuimax", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.vuimin>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vuimin>/g, obj, "vuimin", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.vulmax>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vulmax>/g, obj, "vulmax", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.vulmin>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vulmin>/g, obj, "vulmin", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLimIEEE1.vurmax>([\s\S]*?)<\/cim:UnderexcLimIEEE1.vurmax>/g, obj, "vurmax", base.to_string, sub, context);

                var bucket = context.parsed.UnderexcLimIEEE1;
                if (null == bucket)
                   context.parsed.UnderexcLimIEEE1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = UnderexcitationLimiterDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "UnderexcLimIEEE1", "kuc", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "kuf", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "kui", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "kul", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "kur", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "tu1", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "tu2", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "tu3", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "tu4", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "vucmax", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "vuimax", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "vuimin", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "vulmax", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "vulmin", base.from_string, fields);
                base.export_element (obj, "UnderexcLimIEEE1", "vurmax", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcLimIEEE1_collapse" aria-expanded="true" aria-controls="UnderexcLimIEEE1_collapse" style="margin-left: 10px;">UnderexcLimIEEE1</a></legend>
                    <div id="UnderexcLimIEEE1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + UnderexcitationLimiterDynamics.prototype.template.call (this) +
                    `
                    {{#kuc}}<div><b>kuc</b>: {{kuc}}</div>{{/kuc}}
                    {{#kuf}}<div><b>kuf</b>: {{kuf}}</div>{{/kuf}}
                    {{#kui}}<div><b>kui</b>: {{kui}}</div>{{/kui}}
                    {{#kul}}<div><b>kul</b>: {{kul}}</div>{{/kul}}
                    {{#kur}}<div><b>kur</b>: {{kur}}</div>{{/kur}}
                    {{#tu1}}<div><b>tu1</b>: {{tu1}}</div>{{/tu1}}
                    {{#tu2}}<div><b>tu2</b>: {{tu2}}</div>{{/tu2}}
                    {{#tu3}}<div><b>tu3</b>: {{tu3}}</div>{{/tu3}}
                    {{#tu4}}<div><b>tu4</b>: {{tu4}}</div>{{/tu4}}
                    {{#vucmax}}<div><b>vucmax</b>: {{vucmax}}</div>{{/vucmax}}
                    {{#vuimax}}<div><b>vuimax</b>: {{vuimax}}</div>{{/vuimax}}
                    {{#vuimin}}<div><b>vuimin</b>: {{vuimin}}</div>{{/vuimin}}
                    {{#vulmax}}<div><b>vulmax</b>: {{vulmax}}</div>{{/vulmax}}
                    {{#vulmin}}<div><b>vulmin</b>: {{vulmin}}</div>{{/vulmin}}
                    {{#vurmax}}<div><b>vurmax</b>: {{vurmax}}</div>{{/vurmax}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcLimIEEE1_collapse" aria-expanded="true" aria-controls="UnderexcLimIEEE1_collapse" style="margin-left: 10px;">UnderexcLimIEEE1</a></legend>
                    <div id="UnderexcLimIEEE1_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + UnderexcitationLimiterDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kuc'>kuc: </label><div class='col-sm-8'><input id='kuc' class='form-control' type='text'{{#kuc}} value='{{kuc}}'{{/kuc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kuf'>kuf: </label><div class='col-sm-8'><input id='kuf' class='form-control' type='text'{{#kuf}} value='{{kuf}}'{{/kuf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kui'>kui: </label><div class='col-sm-8'><input id='kui' class='form-control' type='text'{{#kui}} value='{{kui}}'{{/kui}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kul'>kul: </label><div class='col-sm-8'><input id='kul' class='form-control' type='text'{{#kul}} value='{{kul}}'{{/kul}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kur'>kur: </label><div class='col-sm-8'><input id='kur' class='form-control' type='text'{{#kur}} value='{{kur}}'{{/kur}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tu1'>tu1: </label><div class='col-sm-8'><input id='tu1' class='form-control' type='text'{{#tu1}} value='{{tu1}}'{{/tu1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tu2'>tu2: </label><div class='col-sm-8'><input id='tu2' class='form-control' type='text'{{#tu2}} value='{{tu2}}'{{/tu2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tu3'>tu3: </label><div class='col-sm-8'><input id='tu3' class='form-control' type='text'{{#tu3}} value='{{tu3}}'{{/tu3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tu4'>tu4: </label><div class='col-sm-8'><input id='tu4' class='form-control' type='text'{{#tu4}} value='{{tu4}}'{{/tu4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vucmax'>vucmax: </label><div class='col-sm-8'><input id='vucmax' class='form-control' type='text'{{#vucmax}} value='{{vucmax}}'{{/vucmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vuimax'>vuimax: </label><div class='col-sm-8'><input id='vuimax' class='form-control' type='text'{{#vuimax}} value='{{vuimax}}'{{/vuimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vuimin'>vuimin: </label><div class='col-sm-8'><input id='vuimin' class='form-control' type='text'{{#vuimin}} value='{{vuimin}}'{{/vuimin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vulmax'>vulmax: </label><div class='col-sm-8'><input id='vulmax' class='form-control' type='text'{{#vulmax}} value='{{vulmax}}'{{/vulmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vulmin'>vulmin: </label><div class='col-sm-8'><input id='vulmin' class='form-control' type='text'{{#vulmin}} value='{{vulmin}}'{{/vulmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vurmax'>vurmax: </label><div class='col-sm-8'><input id='vurmax' class='form-control' type='text'{{#vurmax}} value='{{vurmax}}'{{/vurmax}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * This model can be derived from UnderexcLimIEEE2.
         *
         * The limit characteristic (look �up table) is a single straight-line, the same as UnderexcLimIEEE2 (see Figure 10.4 (p 32), IEEE 421.5-2005 Section 10.2).
         *
         */
        class UnderexcLim2Simplified extends UnderexcitationLimiterDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UnderexcLim2Simplified;
                if (null == bucket)
                   cim_data.UnderexcLim2Simplified = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UnderexcLim2Simplified[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = UnderexcitationLimiterDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "UnderexcLim2Simplified";
                base.parse_element (/<cim:UnderexcLim2Simplified.kui>([\s\S]*?)<\/cim:UnderexcLim2Simplified.kui>/g, obj, "kui", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLim2Simplified.p0>([\s\S]*?)<\/cim:UnderexcLim2Simplified.p0>/g, obj, "p0", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLim2Simplified.p1>([\s\S]*?)<\/cim:UnderexcLim2Simplified.p1>/g, obj, "p1", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLim2Simplified.q0>([\s\S]*?)<\/cim:UnderexcLim2Simplified.q0>/g, obj, "q0", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLim2Simplified.q1>([\s\S]*?)<\/cim:UnderexcLim2Simplified.q1>/g, obj, "q1", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLim2Simplified.vuimax>([\s\S]*?)<\/cim:UnderexcLim2Simplified.vuimax>/g, obj, "vuimax", base.to_string, sub, context);
                base.parse_element (/<cim:UnderexcLim2Simplified.vuimin>([\s\S]*?)<\/cim:UnderexcLim2Simplified.vuimin>/g, obj, "vuimin", base.to_string, sub, context);

                var bucket = context.parsed.UnderexcLim2Simplified;
                if (null == bucket)
                   context.parsed.UnderexcLim2Simplified = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = UnderexcitationLimiterDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "UnderexcLim2Simplified", "kui", base.from_string, fields);
                base.export_element (obj, "UnderexcLim2Simplified", "p0", base.from_string, fields);
                base.export_element (obj, "UnderexcLim2Simplified", "p1", base.from_string, fields);
                base.export_element (obj, "UnderexcLim2Simplified", "q0", base.from_string, fields);
                base.export_element (obj, "UnderexcLim2Simplified", "q1", base.from_string, fields);
                base.export_element (obj, "UnderexcLim2Simplified", "vuimax", base.from_string, fields);
                base.export_element (obj, "UnderexcLim2Simplified", "vuimin", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcLim2Simplified_collapse" aria-expanded="true" aria-controls="UnderexcLim2Simplified_collapse" style="margin-left: 10px;">UnderexcLim2Simplified</a></legend>
                    <div id="UnderexcLim2Simplified_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + UnderexcitationLimiterDynamics.prototype.template.call (this) +
                    `
                    {{#kui}}<div><b>kui</b>: {{kui}}</div>{{/kui}}
                    {{#p0}}<div><b>p0</b>: {{p0}}</div>{{/p0}}
                    {{#p1}}<div><b>p1</b>: {{p1}}</div>{{/p1}}
                    {{#q0}}<div><b>q0</b>: {{q0}}</div>{{/q0}}
                    {{#q1}}<div><b>q1</b>: {{q1}}</div>{{/q1}}
                    {{#vuimax}}<div><b>vuimax</b>: {{vuimax}}</div>{{/vuimax}}
                    {{#vuimin}}<div><b>vuimin</b>: {{vuimin}}</div>{{/vuimin}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#UnderexcLim2Simplified_collapse" aria-expanded="true" aria-controls="UnderexcLim2Simplified_collapse" style="margin-left: 10px;">UnderexcLim2Simplified</a></legend>
                    <div id="UnderexcLim2Simplified_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + UnderexcitationLimiterDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kui'>kui: </label><div class='col-sm-8'><input id='kui' class='form-control' type='text'{{#kui}} value='{{kui}}'{{/kui}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='p0'>p0: </label><div class='col-sm-8'><input id='p0' class='form-control' type='text'{{#p0}} value='{{p0}}'{{/p0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='p1'>p1: </label><div class='col-sm-8'><input id='p1' class='form-control' type='text'{{#p1}} value='{{p1}}'{{/p1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='q0'>q0: </label><div class='col-sm-8'><input id='q0' class='form-control' type='text'{{#q0}} value='{{q0}}'{{/q0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='q1'>q1: </label><div class='col-sm-8'><input id='q1' class='form-control' type='text'{{#q1}} value='{{q1}}'{{/q1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vuimax'>vuimax: </label><div class='col-sm-8'><input id='vuimax' class='form-control' type='text'{{#vuimax}} value='{{vuimax}}'{{/vuimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='vuimin'>vuimin: </label><div class='col-sm-8'><input id='vuimin' class='form-control' type='text'{{#vuimin}} value='{{vuimin}}'{{/vuimin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        return (
            {
                UnderexcLimX1: UnderexcLimX1,
                UnderexcLimIEEE1: UnderexcLimIEEE1,
                UnderexcLimIEEE2: UnderexcLimIEEE2,
                UnderexcLim2Simplified: UnderexcLim2Simplified,
                UnderexcitationLimiterDynamics: UnderexcitationLimiterDynamics,
                UnderexcLimX2: UnderexcLimX2
            }
        );
    }
);