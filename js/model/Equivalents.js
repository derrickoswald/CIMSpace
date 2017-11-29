define
(
    ["model/base", "model/Core"],
    /**
     * The equivalents package models equivalent networks.
     *
     */
    function (base, Core)
    {

        /**
         * A class that represents an external meshed network that has been reduced to an electrically equivalent model.
         *
         * The ConnectivityNodes contained in the equivalent are intended to reflect internal nodes of the equivalent. The boundary Connectivity nodes where the equivalent connects outside itself are NOT contained by the equivalent.
         *
         */
        class EquivalentNetwork extends Core.ConnectivityNodeContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EquivalentNetwork;
                if (null == bucket)
                   cim_data.EquivalentNetwork = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EquivalentNetwork[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConnectivityNodeContainer.prototype.parse.call (this, context, sub);
                obj.cls = "EquivalentNetwork";

                var bucket = context.parsed.EquivalentNetwork;
                if (null == bucket)
                   context.parsed.EquivalentNetwork = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConnectivityNodeContainer.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EquivalentNetwork_collapse" aria-expanded="true" aria-controls="EquivalentNetwork_collapse">EquivalentNetwork</a>
<div id="EquivalentNetwork_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.ConnectivityNodeContainer.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * The class represents equivalent objects that are the result of a network reduction.
         *
         * The class is the base for equivalent objects of different types.
         *
         */
        class EquivalentEquipment extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EquivalentEquipment;
                if (null == bucket)
                   cim_data.EquivalentEquipment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EquivalentEquipment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "EquivalentEquipment";
                base.parse_attribute (/<cim:EquivalentEquipment.EquivalentNetwork\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EquivalentNetwork", sub, context);

                var bucket = context.parsed.EquivalentEquipment;
                if (null == bucket)
                   context.parsed.EquivalentEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EquivalentEquipment", "EquivalentNetwork", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EquivalentEquipment_collapse" aria-expanded="true" aria-controls="EquivalentEquipment_collapse">EquivalentEquipment</a>
<div id="EquivalentEquipment_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.ConductingEquipment.prototype.template.call (this) +
`
{{#EquivalentNetwork}}<div><b>EquivalentNetwork</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EquivalentNetwork}}&quot;);})'>{{EquivalentNetwork}}</a></div>{{/EquivalentNetwork}}
</div>
`
                );
           }        }

        /**
         * The class represents equivalent shunts.
         *
         */
        class EquivalentShunt extends EquivalentEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EquivalentShunt;
                if (null == bucket)
                   cim_data.EquivalentShunt = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EquivalentShunt[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EquivalentEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "EquivalentShunt";
                base.parse_element (/<cim:EquivalentShunt.b>([\s\S]*?)<\/cim:EquivalentShunt.b>/g, obj, "b", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentShunt.g>([\s\S]*?)<\/cim:EquivalentShunt.g>/g, obj, "g", base.to_string, sub, context);

                var bucket = context.parsed.EquivalentShunt;
                if (null == bucket)
                   context.parsed.EquivalentShunt = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EquivalentEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "EquivalentShunt", "b", base.from_string, fields);
                base.export_element (obj, "EquivalentShunt", "g", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EquivalentShunt_collapse" aria-expanded="true" aria-controls="EquivalentShunt_collapse">EquivalentShunt</a>
<div id="EquivalentShunt_collapse" class="collapse in" style="margin-left: 10px;">
`
      + EquivalentEquipment.prototype.template.call (this) +
`
{{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
{{#g}}<div><b>g</b>: {{g}}</div>{{/g}}
</div>
`
                );
           }        }

        /**
         * The class represents equivalent branches.
         *
         */
        class EquivalentBranch extends EquivalentEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EquivalentBranch;
                if (null == bucket)
                   cim_data.EquivalentBranch = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EquivalentBranch[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EquivalentEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "EquivalentBranch";
                base.parse_element (/<cim:EquivalentBranch.negativeR12>([\s\S]*?)<\/cim:EquivalentBranch.negativeR12>/g, obj, "negativeR12", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.negativeR21>([\s\S]*?)<\/cim:EquivalentBranch.negativeR21>/g, obj, "negativeR21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.negativeX12>([\s\S]*?)<\/cim:EquivalentBranch.negativeX12>/g, obj, "negativeX12", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.negativeX21>([\s\S]*?)<\/cim:EquivalentBranch.negativeX21>/g, obj, "negativeX21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.positiveR12>([\s\S]*?)<\/cim:EquivalentBranch.positiveR12>/g, obj, "positiveR12", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.positiveR21>([\s\S]*?)<\/cim:EquivalentBranch.positiveR21>/g, obj, "positiveR21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.positiveX12>([\s\S]*?)<\/cim:EquivalentBranch.positiveX12>/g, obj, "positiveX12", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.positiveX21>([\s\S]*?)<\/cim:EquivalentBranch.positiveX21>/g, obj, "positiveX21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.r>([\s\S]*?)<\/cim:EquivalentBranch.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.r21>([\s\S]*?)<\/cim:EquivalentBranch.r21>/g, obj, "r21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.x>([\s\S]*?)<\/cim:EquivalentBranch.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.x21>([\s\S]*?)<\/cim:EquivalentBranch.x21>/g, obj, "x21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.zeroR12>([\s\S]*?)<\/cim:EquivalentBranch.zeroR12>/g, obj, "zeroR12", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.zeroR21>([\s\S]*?)<\/cim:EquivalentBranch.zeroR21>/g, obj, "zeroR21", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.zeroX12>([\s\S]*?)<\/cim:EquivalentBranch.zeroX12>/g, obj, "zeroX12", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentBranch.zeroX21>([\s\S]*?)<\/cim:EquivalentBranch.zeroX21>/g, obj, "zeroX21", base.to_string, sub, context);

                var bucket = context.parsed.EquivalentBranch;
                if (null == bucket)
                   context.parsed.EquivalentBranch = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EquivalentEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "EquivalentBranch", "negativeR12", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "negativeR21", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "negativeX12", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "negativeX21", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "positiveR12", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "positiveR21", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "positiveX12", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "positiveX21", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "r", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "r21", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "x", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "x21", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "zeroR12", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "zeroR21", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "zeroX12", base.from_string, fields);
                base.export_element (obj, "EquivalentBranch", "zeroX21", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EquivalentBranch_collapse" aria-expanded="true" aria-controls="EquivalentBranch_collapse">EquivalentBranch</a>
<div id="EquivalentBranch_collapse" class="collapse in" style="margin-left: 10px;">
`
      + EquivalentEquipment.prototype.template.call (this) +
`
{{#negativeR12}}<div><b>negativeR12</b>: {{negativeR12}}</div>{{/negativeR12}}
{{#negativeR21}}<div><b>negativeR21</b>: {{negativeR21}}</div>{{/negativeR21}}
{{#negativeX12}}<div><b>negativeX12</b>: {{negativeX12}}</div>{{/negativeX12}}
{{#negativeX21}}<div><b>negativeX21</b>: {{negativeX21}}</div>{{/negativeX21}}
{{#positiveR12}}<div><b>positiveR12</b>: {{positiveR12}}</div>{{/positiveR12}}
{{#positiveR21}}<div><b>positiveR21</b>: {{positiveR21}}</div>{{/positiveR21}}
{{#positiveX12}}<div><b>positiveX12</b>: {{positiveX12}}</div>{{/positiveX12}}
{{#positiveX21}}<div><b>positiveX21</b>: {{positiveX21}}</div>{{/positiveX21}}
{{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
{{#r21}}<div><b>r21</b>: {{r21}}</div>{{/r21}}
{{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
{{#x21}}<div><b>x21</b>: {{x21}}</div>{{/x21}}
{{#zeroR12}}<div><b>zeroR12</b>: {{zeroR12}}</div>{{/zeroR12}}
{{#zeroR21}}<div><b>zeroR21</b>: {{zeroR21}}</div>{{/zeroR21}}
{{#zeroX12}}<div><b>zeroX12</b>: {{zeroX12}}</div>{{/zeroX12}}
{{#zeroX21}}<div><b>zeroX21</b>: {{zeroX21}}</div>{{/zeroX21}}
</div>
`
                );
           }        }

        /**
         * This class represents equivalent injections (generation or load).
         *
         * Voltage regulation is allowed only at the point of connection.
         *
         */
        class EquivalentInjection extends EquivalentEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EquivalentInjection;
                if (null == bucket)
                   cim_data.EquivalentInjection = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EquivalentInjection[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EquivalentEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "EquivalentInjection";
                base.parse_element (/<cim:EquivalentInjection.maxP>([\s\S]*?)<\/cim:EquivalentInjection.maxP>/g, obj, "maxP", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.maxQ>([\s\S]*?)<\/cim:EquivalentInjection.maxQ>/g, obj, "maxQ", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.minP>([\s\S]*?)<\/cim:EquivalentInjection.minP>/g, obj, "minP", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.minQ>([\s\S]*?)<\/cim:EquivalentInjection.minQ>/g, obj, "minQ", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.r>([\s\S]*?)<\/cim:EquivalentInjection.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.r0>([\s\S]*?)<\/cim:EquivalentInjection.r0>/g, obj, "r0", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.r2>([\s\S]*?)<\/cim:EquivalentInjection.r2>/g, obj, "r2", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.regulationCapability>([\s\S]*?)<\/cim:EquivalentInjection.regulationCapability>/g, obj, "regulationCapability", base.to_boolean, sub, context);
                base.parse_element (/<cim:EquivalentInjection.regulationStatus>([\s\S]*?)<\/cim:EquivalentInjection.regulationStatus>/g, obj, "regulationStatus", base.to_boolean, sub, context);
                base.parse_element (/<cim:EquivalentInjection.regulationTarget>([\s\S]*?)<\/cim:EquivalentInjection.regulationTarget>/g, obj, "regulationTarget", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.x>([\s\S]*?)<\/cim:EquivalentInjection.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.x0>([\s\S]*?)<\/cim:EquivalentInjection.x0>/g, obj, "x0", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.x2>([\s\S]*?)<\/cim:EquivalentInjection.x2>/g, obj, "x2", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.p>([\s\S]*?)<\/cim:EquivalentInjection.p>/g, obj, "p", base.to_string, sub, context);
                base.parse_element (/<cim:EquivalentInjection.q>([\s\S]*?)<\/cim:EquivalentInjection.q>/g, obj, "q", base.to_string, sub, context);
                base.parse_attribute (/<cim:EquivalentInjection.ReactiveCapabilityCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReactiveCapabilityCurve", sub, context);

                var bucket = context.parsed.EquivalentInjection;
                if (null == bucket)
                   context.parsed.EquivalentInjection = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EquivalentEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "EquivalentInjection", "maxP", base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "maxQ", base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "minP", base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "minQ", base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "r", base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "r0", base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "r2", base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "regulationCapability", base.from_boolean, fields);
                base.export_element (obj, "EquivalentInjection", "regulationStatus", base.from_boolean, fields);
                base.export_element (obj, "EquivalentInjection", "regulationTarget", base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "x", base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "x0", base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "x2", base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "p", base.from_string, fields);
                base.export_element (obj, "EquivalentInjection", "q", base.from_string, fields);
                base.export_attribute (obj, "EquivalentInjection", "ReactiveCapabilityCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#EquivalentInjection_collapse" aria-expanded="true" aria-controls="EquivalentInjection_collapse">EquivalentInjection</a>
<div id="EquivalentInjection_collapse" class="collapse in" style="margin-left: 10px;">
`
      + EquivalentEquipment.prototype.template.call (this) +
`
{{#maxP}}<div><b>maxP</b>: {{maxP}}</div>{{/maxP}}
{{#maxQ}}<div><b>maxQ</b>: {{maxQ}}</div>{{/maxQ}}
{{#minP}}<div><b>minP</b>: {{minP}}</div>{{/minP}}
{{#minQ}}<div><b>minQ</b>: {{minQ}}</div>{{/minQ}}
{{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
{{#r0}}<div><b>r0</b>: {{r0}}</div>{{/r0}}
{{#r2}}<div><b>r2</b>: {{r2}}</div>{{/r2}}
{{#regulationCapability}}<div><b>regulationCapability</b>: {{regulationCapability}}</div>{{/regulationCapability}}
{{#regulationStatus}}<div><b>regulationStatus</b>: {{regulationStatus}}</div>{{/regulationStatus}}
{{#regulationTarget}}<div><b>regulationTarget</b>: {{regulationTarget}}</div>{{/regulationTarget}}
{{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
{{#x0}}<div><b>x0</b>: {{x0}}</div>{{/x0}}
{{#x2}}<div><b>x2</b>: {{x2}}</div>{{/x2}}
{{#p}}<div><b>p</b>: {{p}}</div>{{/p}}
{{#q}}<div><b>q</b>: {{q}}</div>{{/q}}
{{#ReactiveCapabilityCurve}}<div><b>ReactiveCapabilityCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReactiveCapabilityCurve}}&quot;);})'>{{ReactiveCapabilityCurve}}</a></div>{{/ReactiveCapabilityCurve}}
</div>
`
                );
           }        }

        return (
            {
                EquivalentEquipment: EquivalentEquipment,
                EquivalentBranch: EquivalentBranch,
                EquivalentNetwork: EquivalentNetwork,
                EquivalentShunt: EquivalentShunt,
                EquivalentInjection: EquivalentInjection
            }
        );
    }
);