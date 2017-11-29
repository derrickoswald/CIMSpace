define
(
    ["model/base", "model/Core"],
    /**
     * Dynamic load models are used to represent the dynamic real and reactive load behaviour of a load from the static power flow model.
     *
     * Dynamic load models can be defined as applying either to a single load (energy consumer) or to a group of energy consumers.
     *
     */
    function (base, Core)
    {

        /**
         * Aggregate induction motor load.
         *
         * This model  is used to represent a fraction of an ordinary load as "induction motor load".  It allows load that is treated as ordinary constant power in power flow analysis to be represented by an induction motor in dynamic simulation.  If <b>Lpp</b> = 0. or <b>Lpp</b> = <b>Lp</b>, or <b>Tppo</b> = 0.,  only one cage is represented. Magnetic saturation is not modelled. Either a "one-cage" or "two-cage" model of the induction machine can be modelled. Magnetic saturation is not modelled.
         *
         */
        class LoadMotor extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadMotor;
                if (null == bucket)
                   cim_data.LoadMotor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadMotor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LoadMotor";
                base.parse_element (/<cim:LoadMotor.d>([\s\S]*?)<\/cim:LoadMotor.d>/g, obj, "d", base.to_float, sub, context);
                base.parse_element (/<cim:LoadMotor.h>([\s\S]*?)<\/cim:LoadMotor.h>/g, obj, "h", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.lfac>([\s\S]*?)<\/cim:LoadMotor.lfac>/g, obj, "lfac", base.to_float, sub, context);
                base.parse_element (/<cim:LoadMotor.lp>([\s\S]*?)<\/cim:LoadMotor.lp>/g, obj, "lp", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.lpp>([\s\S]*?)<\/cim:LoadMotor.lpp>/g, obj, "lpp", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.ls>([\s\S]*?)<\/cim:LoadMotor.ls>/g, obj, "ls", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.pfrac>([\s\S]*?)<\/cim:LoadMotor.pfrac>/g, obj, "pfrac", base.to_float, sub, context);
                base.parse_element (/<cim:LoadMotor.ra>([\s\S]*?)<\/cim:LoadMotor.ra>/g, obj, "ra", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.tbkr>([\s\S]*?)<\/cim:LoadMotor.tbkr>/g, obj, "tbkr", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.tpo>([\s\S]*?)<\/cim:LoadMotor.tpo>/g, obj, "tpo", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.tppo>([\s\S]*?)<\/cim:LoadMotor.tppo>/g, obj, "tppo", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.tv>([\s\S]*?)<\/cim:LoadMotor.tv>/g, obj, "tv", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.vt>([\s\S]*?)<\/cim:LoadMotor.vt>/g, obj, "vt", base.to_string, sub, context);
                base.parse_attribute (/<cim:LoadMotor.LoadAggregate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadAggregate", sub, context);

                var bucket = context.parsed.LoadMotor;
                if (null == bucket)
                   context.parsed.LoadMotor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadMotor", "d", base.from_float, fields);
                base.export_element (obj, "LoadMotor", "h", base.from_string, fields);
                base.export_element (obj, "LoadMotor", "lfac", base.from_float, fields);
                base.export_element (obj, "LoadMotor", "lp", base.from_string, fields);
                base.export_element (obj, "LoadMotor", "lpp", base.from_string, fields);
                base.export_element (obj, "LoadMotor", "ls", base.from_string, fields);
                base.export_element (obj, "LoadMotor", "pfrac", base.from_float, fields);
                base.export_element (obj, "LoadMotor", "ra", base.from_string, fields);
                base.export_element (obj, "LoadMotor", "tbkr", base.from_string, fields);
                base.export_element (obj, "LoadMotor", "tpo", base.from_string, fields);
                base.export_element (obj, "LoadMotor", "tppo", base.from_string, fields);
                base.export_element (obj, "LoadMotor", "tv", base.from_string, fields);
                base.export_element (obj, "LoadMotor", "vt", base.from_string, fields);
                base.export_attribute (obj, "LoadMotor", "LoadAggregate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LoadMotor_collapse" aria-expanded="true" aria-controls="LoadMotor_collapse">LoadMotor</a>
<div id="LoadMotor_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#d}}<div><b>d</b>: {{d}}</div>{{/d}}
{{#h}}<div><b>h</b>: {{h}}</div>{{/h}}
{{#lfac}}<div><b>lfac</b>: {{lfac}}</div>{{/lfac}}
{{#lp}}<div><b>lp</b>: {{lp}}</div>{{/lp}}
{{#lpp}}<div><b>lpp</b>: {{lpp}}</div>{{/lpp}}
{{#ls}}<div><b>ls</b>: {{ls}}</div>{{/ls}}
{{#pfrac}}<div><b>pfrac</b>: {{pfrac}}</div>{{/pfrac}}
{{#ra}}<div><b>ra</b>: {{ra}}</div>{{/ra}}
{{#tbkr}}<div><b>tbkr</b>: {{tbkr}}</div>{{/tbkr}}
{{#tpo}}<div><b>tpo</b>: {{tpo}}</div>{{/tpo}}
{{#tppo}}<div><b>tppo</b>: {{tppo}}</div>{{/tppo}}
{{#tv}}<div><b>tv</b>: {{tv}}</div>{{/tv}}
{{#vt}}<div><b>vt</b>: {{vt}}</div>{{/vt}}
{{#LoadAggregate}}<div><b>LoadAggregate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadAggregate}}&quot;);})'>{{LoadAggregate}}</a></div>{{/LoadAggregate}}
</div>
`
                );
           }        }

        /**
         * Type of generic non-linear load model.
         *
         */
        class GenericNonLinearLoadModelKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GenericNonLinearLoadModelKind;
                if (null == bucket)
                   cim_data.GenericNonLinearLoadModelKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GenericNonLinearLoadModelKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "GenericNonLinearLoadModelKind";
                base.parse_element (/<cim:GenericNonLinearLoadModelKind.exponentialRecovery>([\s\S]*?)<\/cim:GenericNonLinearLoadModelKind.exponentialRecovery>/g, obj, "exponentialRecovery", base.to_string, sub, context);
                base.parse_element (/<cim:GenericNonLinearLoadModelKind.loadAdaptive>([\s\S]*?)<\/cim:GenericNonLinearLoadModelKind.loadAdaptive>/g, obj, "loadAdaptive", base.to_string, sub, context);

                var bucket = context.parsed.GenericNonLinearLoadModelKind;
                if (null == bucket)
                   context.parsed.GenericNonLinearLoadModelKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "GenericNonLinearLoadModelKind", "exponentialRecovery", base.from_string, fields);
                base.export_element (obj, "GenericNonLinearLoadModelKind", "loadAdaptive", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GenericNonLinearLoadModelKind_collapse" aria-expanded="true" aria-controls="GenericNonLinearLoadModelKind_collapse">GenericNonLinearLoadModelKind</a>
<div id="GenericNonLinearLoadModelKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#exponentialRecovery}}<div><b>exponentialRecovery</b>: {{exponentialRecovery}}</div>{{/exponentialRecovery}}
{{#loadAdaptive}}<div><b>loadAdaptive</b>: {{loadAdaptive}}</div>{{/loadAdaptive}}
</div>
`
                );
           }        }

        /**
         * Load whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         * 
         * A standard feature of dynamic load behaviour modelling is the ability to associate the same behaviour to multiple energy consumers by means of a single aggregate load definition.
         *
         * Aggregate loads are used to represent all or part of the real and reactive load from one or more loads in the static (power flow) data. This load is usually the aggregation of many individual load devices and the load model is approximate representation of the aggregate response of the load devices to system disturbances. The load model is always applied to individual bus loads (energy consumers) but a single set of load model parameters can used for all loads in the grouping.
         *
         */
        class LoadDynamics extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadDynamics;
                if (null == bucket)
                   cim_data.LoadDynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadDynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LoadDynamics";

                var bucket = context.parsed.LoadDynamics;
                if (null == bucket)
                   context.parsed.LoadDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LoadDynamics_collapse" aria-expanded="true" aria-controls="LoadDynamics_collapse">LoadDynamics</a>
<div id="LoadDynamics_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * General static load model representing the sensitivity of the real and reactive power consumed by the load to the amplitude and frequency of the bus voltage.
         *
         */
        class LoadStatic extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadStatic;
                if (null == bucket)
                   cim_data.LoadStatic = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadStatic[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LoadStatic";
                base.parse_element (/<cim:LoadStatic.ep1>([\s\S]*?)<\/cim:LoadStatic.ep1>/g, obj, "ep1", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.ep2>([\s\S]*?)<\/cim:LoadStatic.ep2>/g, obj, "ep2", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.ep3>([\s\S]*?)<\/cim:LoadStatic.ep3>/g, obj, "ep3", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.eq1>([\s\S]*?)<\/cim:LoadStatic.eq1>/g, obj, "eq1", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.eq2>([\s\S]*?)<\/cim:LoadStatic.eq2>/g, obj, "eq2", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.eq3>([\s\S]*?)<\/cim:LoadStatic.eq3>/g, obj, "eq3", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kp1>([\s\S]*?)<\/cim:LoadStatic.kp1>/g, obj, "kp1", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kp2>([\s\S]*?)<\/cim:LoadStatic.kp2>/g, obj, "kp2", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kp3>([\s\S]*?)<\/cim:LoadStatic.kp3>/g, obj, "kp3", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kp4>([\s\S]*?)<\/cim:LoadStatic.kp4>/g, obj, "kp4", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kpf>([\s\S]*?)<\/cim:LoadStatic.kpf>/g, obj, "kpf", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kq1>([\s\S]*?)<\/cim:LoadStatic.kq1>/g, obj, "kq1", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kq2>([\s\S]*?)<\/cim:LoadStatic.kq2>/g, obj, "kq2", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kq3>([\s\S]*?)<\/cim:LoadStatic.kq3>/g, obj, "kq3", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kq4>([\s\S]*?)<\/cim:LoadStatic.kq4>/g, obj, "kq4", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kqf>([\s\S]*?)<\/cim:LoadStatic.kqf>/g, obj, "kqf", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.staticLoadModelType>([\s\S]*?)<\/cim:LoadStatic.staticLoadModelType>/g, obj, "staticLoadModelType", base.to_string, sub, context);
                base.parse_attribute (/<cim:LoadStatic.LoadAggregate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadAggregate", sub, context);

                var bucket = context.parsed.LoadStatic;
                if (null == bucket)
                   context.parsed.LoadStatic = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadStatic", "ep1", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "ep2", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "ep3", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "eq1", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "eq2", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "eq3", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kp1", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kp2", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kp3", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kp4", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kpf", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kq1", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kq2", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kq3", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kq4", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kqf", base.from_float, fields);
                base.export_element (obj, "LoadStatic", "staticLoadModelType", base.from_string, fields);
                base.export_attribute (obj, "LoadStatic", "LoadAggregate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LoadStatic_collapse" aria-expanded="true" aria-controls="LoadStatic_collapse">LoadStatic</a>
<div id="LoadStatic_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#ep1}}<div><b>ep1</b>: {{ep1}}</div>{{/ep1}}
{{#ep2}}<div><b>ep2</b>: {{ep2}}</div>{{/ep2}}
{{#ep3}}<div><b>ep3</b>: {{ep3}}</div>{{/ep3}}
{{#eq1}}<div><b>eq1</b>: {{eq1}}</div>{{/eq1}}
{{#eq2}}<div><b>eq2</b>: {{eq2}}</div>{{/eq2}}
{{#eq3}}<div><b>eq3</b>: {{eq3}}</div>{{/eq3}}
{{#kp1}}<div><b>kp1</b>: {{kp1}}</div>{{/kp1}}
{{#kp2}}<div><b>kp2</b>: {{kp2}}</div>{{/kp2}}
{{#kp3}}<div><b>kp3</b>: {{kp3}}</div>{{/kp3}}
{{#kp4}}<div><b>kp4</b>: {{kp4}}</div>{{/kp4}}
{{#kpf}}<div><b>kpf</b>: {{kpf}}</div>{{/kpf}}
{{#kq1}}<div><b>kq1</b>: {{kq1}}</div>{{/kq1}}
{{#kq2}}<div><b>kq2</b>: {{kq2}}</div>{{/kq2}}
{{#kq3}}<div><b>kq3</b>: {{kq3}}</div>{{/kq3}}
{{#kq4}}<div><b>kq4</b>: {{kq4}}</div>{{/kq4}}
{{#kqf}}<div><b>kqf</b>: {{kqf}}</div>{{/kqf}}
{{#staticLoadModelType}}<div><b>staticLoadModelType</b>: {{staticLoadModelType}}</div>{{/staticLoadModelType}}
{{#LoadAggregate}}<div><b>LoadAggregate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadAggregate}}&quot;);})'>{{LoadAggregate}}</a></div>{{/LoadAggregate}}
</div>
`
                );
           }        }

        /**
         * Type of static load model.
         *
         */
        class StaticLoadModelKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StaticLoadModelKind;
                if (null == bucket)
                   cim_data.StaticLoadModelKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StaticLoadModelKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "StaticLoadModelKind";
                base.parse_element (/<cim:StaticLoadModelKind.exponential>([\s\S]*?)<\/cim:StaticLoadModelKind.exponential>/g, obj, "exponential", base.to_string, sub, context);
                base.parse_element (/<cim:StaticLoadModelKind.zIP1>([\s\S]*?)<\/cim:StaticLoadModelKind.zIP1>/g, obj, "zIP1", base.to_string, sub, context);
                base.parse_element (/<cim:StaticLoadModelKind.zIP2>([\s\S]*?)<\/cim:StaticLoadModelKind.zIP2>/g, obj, "zIP2", base.to_string, sub, context);
                base.parse_element (/<cim:StaticLoadModelKind.constantZ>([\s\S]*?)<\/cim:StaticLoadModelKind.constantZ>/g, obj, "constantZ", base.to_string, sub, context);

                var bucket = context.parsed.StaticLoadModelKind;
                if (null == bucket)
                   context.parsed.StaticLoadModelKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "StaticLoadModelKind", "exponential", base.from_string, fields);
                base.export_element (obj, "StaticLoadModelKind", "zIP1", base.from_string, fields);
                base.export_element (obj, "StaticLoadModelKind", "zIP2", base.from_string, fields);
                base.export_element (obj, "StaticLoadModelKind", "constantZ", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#StaticLoadModelKind_collapse" aria-expanded="true" aria-controls="StaticLoadModelKind_collapse">StaticLoadModelKind</a>
<div id="StaticLoadModelKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#exponential}}<div><b>exponential</b>: {{exponential}}</div>{{/exponential}}
{{#zIP1}}<div><b>zIP1</b>: {{zIP1}}</div>{{/zIP1}}
{{#zIP2}}<div><b>zIP2</b>: {{zIP2}}</div>{{/zIP2}}
{{#constantZ}}<div><b>constantZ</b>: {{constantZ}}</div>{{/constantZ}}
</div>
`
                );
           }        }

        /**
         * This model combines static load and induction motor load effects.
         *
         * The dynamics of the motor are simplified by linearizing the induction machine equations.
         *
         */
        class LoadComposite extends LoadDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadComposite;
                if (null == bucket)
                   cim_data.LoadComposite = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadComposite[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "LoadComposite";
                base.parse_element (/<cim:LoadComposite.epfd>([\s\S]*?)<\/cim:LoadComposite.epfd>/g, obj, "epfd", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.epfs>([\s\S]*?)<\/cim:LoadComposite.epfs>/g, obj, "epfs", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.epvd>([\s\S]*?)<\/cim:LoadComposite.epvd>/g, obj, "epvd", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.epvs>([\s\S]*?)<\/cim:LoadComposite.epvs>/g, obj, "epvs", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.eqfd>([\s\S]*?)<\/cim:LoadComposite.eqfd>/g, obj, "eqfd", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.eqfs>([\s\S]*?)<\/cim:LoadComposite.eqfs>/g, obj, "eqfs", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.eqvd>([\s\S]*?)<\/cim:LoadComposite.eqvd>/g, obj, "eqvd", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.eqvs>([\s\S]*?)<\/cim:LoadComposite.eqvs>/g, obj, "eqvs", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.h>([\s\S]*?)<\/cim:LoadComposite.h>/g, obj, "h", base.to_string, sub, context);
                base.parse_element (/<cim:LoadComposite.lfrac>([\s\S]*?)<\/cim:LoadComposite.lfrac>/g, obj, "lfrac", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.pfrac>([\s\S]*?)<\/cim:LoadComposite.pfrac>/g, obj, "pfrac", base.to_float, sub, context);

                var bucket = context.parsed.LoadComposite;
                if (null == bucket)
                   context.parsed.LoadComposite = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LoadDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadComposite", "epfd", base.from_float, fields);
                base.export_element (obj, "LoadComposite", "epfs", base.from_float, fields);
                base.export_element (obj, "LoadComposite", "epvd", base.from_float, fields);
                base.export_element (obj, "LoadComposite", "epvs", base.from_float, fields);
                base.export_element (obj, "LoadComposite", "eqfd", base.from_float, fields);
                base.export_element (obj, "LoadComposite", "eqfs", base.from_float, fields);
                base.export_element (obj, "LoadComposite", "eqvd", base.from_float, fields);
                base.export_element (obj, "LoadComposite", "eqvs", base.from_float, fields);
                base.export_element (obj, "LoadComposite", "h", base.from_string, fields);
                base.export_element (obj, "LoadComposite", "lfrac", base.from_float, fields);
                base.export_element (obj, "LoadComposite", "pfrac", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LoadComposite_collapse" aria-expanded="true" aria-controls="LoadComposite_collapse">LoadComposite</a>
<div id="LoadComposite_collapse" class="collapse in" style="margin-left: 10px;">
`
      + LoadDynamics.prototype.template.call (this) +
`
{{#epfd}}<div><b>epfd</b>: {{epfd}}</div>{{/epfd}}
{{#epfs}}<div><b>epfs</b>: {{epfs}}</div>{{/epfs}}
{{#epvd}}<div><b>epvd</b>: {{epvd}}</div>{{/epvd}}
{{#epvs}}<div><b>epvs</b>: {{epvs}}</div>{{/epvs}}
{{#eqfd}}<div><b>eqfd</b>: {{eqfd}}</div>{{/eqfd}}
{{#eqfs}}<div><b>eqfs</b>: {{eqfs}}</div>{{/eqfs}}
{{#eqvd}}<div><b>eqvd</b>: {{eqvd}}</div>{{/eqvd}}
{{#eqvs}}<div><b>eqvs</b>: {{eqvs}}</div>{{/eqvs}}
{{#h}}<div><b>h</b>: {{h}}</div>{{/h}}
{{#lfrac}}<div><b>lfrac</b>: {{lfrac}}</div>{{/lfrac}}
{{#pfrac}}<div><b>pfrac</b>: {{pfrac}}</div>{{/pfrac}}
</div>
`
                );
           }        }

        /**
         * These load models (known also as generic non-linear dynamic (GNLD) load models) can be used in mid-term and long-term voltage stability simulations (i.e., to study voltage collapse), as they can replace a more detailed representation of aggregate load, including induction motors, thermostatically controlled and static loads.
         *
         */
        class LoadGenericNonLinear extends LoadDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadGenericNonLinear;
                if (null == bucket)
                   cim_data.LoadGenericNonLinear = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadGenericNonLinear[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "LoadGenericNonLinear";
                base.parse_element (/<cim:LoadGenericNonLinear.bs>([\s\S]*?)<\/cim:LoadGenericNonLinear.bs>/g, obj, "bs", base.to_float, sub, context);
                base.parse_element (/<cim:LoadGenericNonLinear.bt>([\s\S]*?)<\/cim:LoadGenericNonLinear.bt>/g, obj, "bt", base.to_float, sub, context);
                base.parse_element (/<cim:LoadGenericNonLinear.genericNonLinearLoadModelType>([\s\S]*?)<\/cim:LoadGenericNonLinear.genericNonLinearLoadModelType>/g, obj, "genericNonLinearLoadModelType", base.to_string, sub, context);
                base.parse_element (/<cim:LoadGenericNonLinear.ls>([\s\S]*?)<\/cim:LoadGenericNonLinear.ls>/g, obj, "ls", base.to_float, sub, context);
                base.parse_element (/<cim:LoadGenericNonLinear.lt>([\s\S]*?)<\/cim:LoadGenericNonLinear.lt>/g, obj, "lt", base.to_float, sub, context);
                base.parse_element (/<cim:LoadGenericNonLinear.pt>([\s\S]*?)<\/cim:LoadGenericNonLinear.pt>/g, obj, "pt", base.to_float, sub, context);
                base.parse_element (/<cim:LoadGenericNonLinear.qt>([\s\S]*?)<\/cim:LoadGenericNonLinear.qt>/g, obj, "qt", base.to_float, sub, context);
                base.parse_element (/<cim:LoadGenericNonLinear.tp>([\s\S]*?)<\/cim:LoadGenericNonLinear.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:LoadGenericNonLinear.tq>([\s\S]*?)<\/cim:LoadGenericNonLinear.tq>/g, obj, "tq", base.to_string, sub, context);

                var bucket = context.parsed.LoadGenericNonLinear;
                if (null == bucket)
                   context.parsed.LoadGenericNonLinear = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LoadDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadGenericNonLinear", "bs", base.from_float, fields);
                base.export_element (obj, "LoadGenericNonLinear", "bt", base.from_float, fields);
                base.export_element (obj, "LoadGenericNonLinear", "genericNonLinearLoadModelType", base.from_string, fields);
                base.export_element (obj, "LoadGenericNonLinear", "ls", base.from_float, fields);
                base.export_element (obj, "LoadGenericNonLinear", "lt", base.from_float, fields);
                base.export_element (obj, "LoadGenericNonLinear", "pt", base.from_float, fields);
                base.export_element (obj, "LoadGenericNonLinear", "qt", base.from_float, fields);
                base.export_element (obj, "LoadGenericNonLinear", "tp", base.from_string, fields);
                base.export_element (obj, "LoadGenericNonLinear", "tq", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LoadGenericNonLinear_collapse" aria-expanded="true" aria-controls="LoadGenericNonLinear_collapse">LoadGenericNonLinear</a>
<div id="LoadGenericNonLinear_collapse" class="collapse in" style="margin-left: 10px;">
`
      + LoadDynamics.prototype.template.call (this) +
`
{{#bs}}<div><b>bs</b>: {{bs}}</div>{{/bs}}
{{#bt}}<div><b>bt</b>: {{bt}}</div>{{/bt}}
{{#genericNonLinearLoadModelType}}<div><b>genericNonLinearLoadModelType</b>: {{genericNonLinearLoadModelType}}</div>{{/genericNonLinearLoadModelType}}
{{#ls}}<div><b>ls</b>: {{ls}}</div>{{/ls}}
{{#lt}}<div><b>lt</b>: {{lt}}</div>{{/lt}}
{{#pt}}<div><b>pt</b>: {{pt}}</div>{{/pt}}
{{#qt}}<div><b>qt</b>: {{qt}}</div>{{/qt}}
{{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
{{#tq}}<div><b>tq</b>: {{tq}}</div>{{/tq}}
</div>
`
                );
           }        }

        /**
         * Standard aggregate load model comprised of static and/or dynamic components.
         *
         * A static load model represents the sensitivity of the real and reactive power consumed by the load to the amplitude and frequency of the bus voltage. A dynamic load model can used to represent the aggregate response of the motor components of the load.
         *
         */
        class LoadAggregate extends LoadDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LoadAggregate;
                if (null == bucket)
                   cim_data.LoadAggregate = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadAggregate[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "LoadAggregate";
                base.parse_attribute (/<cim:LoadAggregate.LoadMotor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadMotor", sub, context);
                base.parse_attribute (/<cim:LoadAggregate.LoadStatic\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadStatic", sub, context);

                var bucket = context.parsed.LoadAggregate;
                if (null == bucket)
                   context.parsed.LoadAggregate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LoadDynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "LoadAggregate", "LoadMotor", fields);
                base.export_attribute (obj, "LoadAggregate", "LoadStatic", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#LoadAggregate_collapse" aria-expanded="true" aria-controls="LoadAggregate_collapse">LoadAggregate</a>
<div id="LoadAggregate_collapse" class="collapse in" style="margin-left: 10px;">
`
      + LoadDynamics.prototype.template.call (this) +
`
{{#LoadMotor}}<div><b>LoadMotor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadMotor}}&quot;);})'>{{LoadMotor}}</a></div>{{/LoadMotor}}
{{#LoadStatic}}<div><b>LoadStatic</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadStatic}}&quot;);})'>{{LoadStatic}}</a></div>{{/LoadStatic}}
</div>
`
                );
           }        }

        return (
            {
                GenericNonLinearLoadModelKind: GenericNonLinearLoadModelKind,
                StaticLoadModelKind: StaticLoadModelKind,
                LoadGenericNonLinear: LoadGenericNonLinear,
                LoadStatic: LoadStatic,
                LoadMotor: LoadMotor,
                LoadAggregate: LoadAggregate,
                LoadComposite: LoadComposite,
                LoadDynamics: LoadDynamics
            }
        );
    }
);