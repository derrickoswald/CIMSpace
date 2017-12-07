define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * Congestion rent is a major, highly volatile charge currently faced by many participants in the LMP-based electrical energy markets.
     *
     * For this reason, the ISOs offer congestion revenue rights (CRR), also known as financial transmission rights or transmission congestion contracts. These are financial instruments that allow market participants to hedge against congestion charges when they schedule their generation, load and bilateral energy transactions.
     *
     */
    function (base, Common, Core)
    {

        /**
         * CRRSegment represents a segment of a CRR in a particular time frame.
         *
         * The segment class contains CRR kind, type, quantity, hedger type, time of use flag, and segment period.
         *
         */
        class CRRSegment extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CRRSegment;
                if (null == bucket)
                   cim_data.CRRSegment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CRRSegment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CRRSegment";
                base.parse_element (/<cim:CRRSegment.amount>([\s\S]*?)<\/cim:CRRSegment.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:CRRSegment.clearingPrice>([\s\S]*?)<\/cim:CRRSegment.clearingPrice>/g, obj, "clearingPrice", base.to_string, sub, context);
                base.parse_element (/<cim:CRRSegment.endDateTime>([\s\S]*?)<\/cim:CRRSegment.endDateTime>/g, obj, "endDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:CRRSegment.quantity>([\s\S]*?)<\/cim:CRRSegment.quantity>/g, obj, "quantity", base.to_float, sub, context);
                base.parse_element (/<cim:CRRSegment.startDateTime>([\s\S]*?)<\/cim:CRRSegment.startDateTime>/g, obj, "startDateTime", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:CRRSegment.Source\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Source", sub, context);
                base.parse_attributes (/<cim:CRRSegment.Sink\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Sink", sub, context);
                base.parse_attribute (/<cim:CRRSegment.CRR\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CRR", sub, context);
                var bucket = context.parsed.CRRSegment;
                if (null == bucket)
                   context.parsed.CRRSegment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CRRSegment", "amount", base.from_string, fields);
                base.export_element (obj, "CRRSegment", "clearingPrice", base.from_string, fields);
                base.export_element (obj, "CRRSegment", "endDateTime", base.from_datetime, fields);
                base.export_element (obj, "CRRSegment", "quantity", base.from_float, fields);
                base.export_element (obj, "CRRSegment", "startDateTime", base.from_datetime, fields);
                base.export_attribute (obj, "export_attributes", "CRRSegment", fields);
                base.export_attribute (obj, "export_attributes", "CRRSegment", fields);
                base.export_attribute (obj, "export_attribute", "CRRSegment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CRRSegment_collapse" aria-expanded="true" aria-controls="CRRSegment_collapse" style="margin-left: 10px;">CRRSegment</a></legend>
                    <div id="CRRSegment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#clearingPrice}}<div><b>clearingPrice</b>: {{clearingPrice}}</div>{{/clearingPrice}}
                    {{#endDateTime}}<div><b>endDateTime</b>: {{endDateTime}}</div>{{/endDateTime}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#startDateTime}}<div><b>startDateTime</b>: {{startDateTime}}</div>{{/startDateTime}}
                    {{#Source}}<div><b>Source</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Source}}
                    {{#Sink}}<div><b>Sink</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Sink}}
                    {{#CRR}}<div><b>CRR</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CRR}}&quot;);})'>{{CRR}}</a></div>{{/CRR}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Source) obj.Source_string = obj.Source.join ();
                if (obj.Sink) obj.Sink_string = obj.Sink.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Source_string;
                delete obj.Sink_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CRRSegment_collapse" aria-expanded="true" aria-controls="CRRSegment_collapse" style="margin-left: 10px;">CRRSegment</a></legend>
                    <div id="CRRSegment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='amount'>amount: </label><div class='col-sm-8'><input id='amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clearingPrice'>clearingPrice: </label><div class='col-sm-8'><input id='clearingPrice' class='form-control' type='text'{{#clearingPrice}} value='{{clearingPrice}}'{{/clearingPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endDateTime'>endDateTime: </label><div class='col-sm-8'><input id='endDateTime' class='form-control' type='text'{{#endDateTime}} value='{{endDateTime}}'{{/endDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='quantity'>quantity: </label><div class='col-sm-8'><input id='quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startDateTime'>startDateTime: </label><div class='col-sm-8'><input id='startDateTime' class='form-control' type='text'{{#startDateTime}} value='{{startDateTime}}'{{/startDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Source'>Source: </label><div class='col-sm-8'><input id='Source' class='form-control' type='text'{{#Source}} value='{{Source}}_string'{{/Source}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Sink'>Sink: </label><div class='col-sm-8'><input id='Sink' class='form-control' type='text'{{#Sink}} value='{{Sink}}_string'{{/Sink}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CRR'>CRR: </label><div class='col-sm-8'><input id='CRR' class='form-control' type='text'{{#CRR}} value='{{CRR}}'{{/CRR}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["Source", "Pnode", "0..*", "0..*"],
                        ["Sink", "Pnode", "0..*", "0..*"],
                        ["CRR", "CRR", "1", "1..*"]
                    ]
                );
            }
        }

        /**
         * Congestion Revenue Rights (CRR) class that is inherited from a Document class.
         *
         * A CRR is a financial concept that is used to hedge congestion charges.
         *
         */
        class CRR extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CRR;
                if (null == bucket)
                   cim_data.CRR = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CRR[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "CRR";
                base.parse_element (/<cim:CRR.cRRcategory>([\s\S]*?)<\/cim:CRR.cRRcategory>/g, obj, "cRRcategory", base.to_string, sub, context);
                base.parse_element (/<cim:CRR.cRRtype>([\s\S]*?)<\/cim:CRR.cRRtype>/g, obj, "cRRtype", base.to_string, sub, context);
                base.parse_element (/<cim:CRR.hedgeType>([\s\S]*?)<\/cim:CRR.hedgeType>/g, obj, "hedgeType", base.to_string, sub, context);
                base.parse_element (/<cim:CRR.timeOfUse>([\s\S]*?)<\/cim:CRR.timeOfUse>/g, obj, "timeOfUse", base.to_string, sub, context);
                base.parse_element (/<cim:CRR.tradeSliceID>([\s\S]*?)<\/cim:CRR.tradeSliceID>/g, obj, "tradeSliceID", base.to_string, sub, context);
                base.parse_attributes (/<cim:CRR.CRROrgRole\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CRROrgRole", sub, context);
                base.parse_attribute (/<cim:CRR.CRRMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CRRMarket", sub, context);
                base.parse_attribute (/<cim:CRR.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                base.parse_attributes (/<cim:CRR.CRRSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CRRSegment", sub, context);
                var bucket = context.parsed.CRR;
                if (null == bucket)
                   context.parsed.CRR = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "CRR", "cRRcategory", base.from_string, fields);
                base.export_element (obj, "CRR", "cRRtype", base.from_string, fields);
                base.export_element (obj, "CRR", "hedgeType", base.from_string, fields);
                base.export_element (obj, "CRR", "timeOfUse", base.from_string, fields);
                base.export_element (obj, "CRR", "tradeSliceID", base.from_string, fields);
                base.export_attribute (obj, "export_attributes", "CRR", fields);
                base.export_attribute (obj, "export_attribute", "CRR", fields);
                base.export_attribute (obj, "export_attribute", "CRR", fields);
                base.export_attribute (obj, "export_attributes", "CRR", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CRR_collapse" aria-expanded="true" aria-controls="CRR_collapse" style="margin-left: 10px;">CRR</a></legend>
                    <div id="CRR_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#cRRcategory}}<div><b>cRRcategory</b>: {{cRRcategory}}</div>{{/cRRcategory}}
                    {{#cRRtype}}<div><b>cRRtype</b>: {{cRRtype}}</div>{{/cRRtype}}
                    {{#hedgeType}}<div><b>hedgeType</b>: {{hedgeType}}</div>{{/hedgeType}}
                    {{#timeOfUse}}<div><b>timeOfUse</b>: {{timeOfUse}}</div>{{/timeOfUse}}
                    {{#tradeSliceID}}<div><b>tradeSliceID</b>: {{tradeSliceID}}</div>{{/tradeSliceID}}
                    {{#CRROrgRole}}<div><b>CRROrgRole</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CRROrgRole}}
                    {{#CRRMarket}}<div><b>CRRMarket</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CRRMarket}}&quot;);})'>{{CRRMarket}}</a></div>{{/CRRMarket}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
                    {{#CRRSegment}}<div><b>CRRSegment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CRRSegment}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CRROrgRole) obj.CRROrgRole_string = obj.CRROrgRole.join ();
                if (obj.CRRSegment) obj.CRRSegment_string = obj.CRRSegment.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CRROrgRole_string;
                delete obj.CRRSegment_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CRR_collapse" aria-expanded="true" aria-controls="CRR_collapse" style="margin-left: 10px;">CRR</a></legend>
                    <div id="CRR_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cRRcategory'>cRRcategory: </label><div class='col-sm-8'><input id='cRRcategory' class='form-control' type='text'{{#cRRcategory}} value='{{cRRcategory}}'{{/cRRcategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cRRtype'>cRRtype: </label><div class='col-sm-8'><input id='cRRtype' class='form-control' type='text'{{#cRRtype}} value='{{cRRtype}}'{{/cRRtype}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hedgeType'>hedgeType: </label><div class='col-sm-8'><input id='hedgeType' class='form-control' type='text'{{#hedgeType}} value='{{hedgeType}}'{{/hedgeType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeOfUse'>timeOfUse: </label><div class='col-sm-8'><input id='timeOfUse' class='form-control' type='text'{{#timeOfUse}} value='{{timeOfUse}}'{{/timeOfUse}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tradeSliceID'>tradeSliceID: </label><div class='col-sm-8'><input id='tradeSliceID' class='form-control' type='text'{{#tradeSliceID}} value='{{tradeSliceID}}'{{/tradeSliceID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CRRMarket'>CRRMarket: </label><div class='col-sm-8'><input id='CRRMarket' class='form-control' type='text'{{#CRRMarket}} value='{{CRRMarket}}'{{/CRRMarket}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["CRROrgRole", "CRROrgRole", "1..*", "1"],
                        ["CRRMarket", "CRRMarket", "1", "1..*"],
                        ["Flowgate", "Flowgate", "0..1", "0..1"],
                        ["CRRSegment", "CRRSegment", "1..*", "1"]
                    ]
                );
            }
        }

        /**
         * Identifies a way in which an organisation may participate with a defined Congestion Revenue Right (CRR).
         *
         */
        class CRROrgRole extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CRROrgRole;
                if (null == bucket)
                   cim_data.CRROrgRole = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CRROrgRole[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "CRROrgRole";
                base.parse_element (/<cim:CRROrgRole.kind>([\s\S]*?)<\/cim:CRROrgRole.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:CRROrgRole.status>([\s\S]*?)<\/cim:CRROrgRole.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:CRROrgRole.CRR\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CRR", sub, context);
                base.parse_attribute (/<cim:CRROrgRole.MktOrganisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktOrganisation", sub, context);
                var bucket = context.parsed.CRROrgRole;
                if (null == bucket)
                   context.parsed.CRROrgRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_element (obj, "CRROrgRole", "kind", base.from_string, fields);
                base.export_element (obj, "CRROrgRole", "status", base.from_string, fields);
                base.export_attribute (obj, "export_attribute", "CRROrgRole", fields);
                base.export_attribute (obj, "export_attribute", "CRROrgRole", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CRROrgRole_collapse" aria-expanded="true" aria-controls="CRROrgRole_collapse" style="margin-left: 10px;">CRROrgRole</a></legend>
                    <div id="CRROrgRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#CRR}}<div><b>CRR</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CRR}}&quot;);})'>{{CRR}}</a></div>{{/CRR}}
                    {{#MktOrganisation}}<div><b>MktOrganisation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktOrganisation}}&quot;);})'>{{MktOrganisation}}</a></div>{{/MktOrganisation}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CRROrgRole_collapse" aria-expanded="true" aria-controls="CRROrgRole_collapse" style="margin-left: 10px;">CRROrgRole</a></legend>
                    <div id="CRROrgRole_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><input id='kind' class='form-control' type='text'{{#kind}} value='{{kind}}'{{/kind}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CRR'>CRR: </label><div class='col-sm-8'><input id='CRR' class='form-control' type='text'{{#CRR}} value='{{CRR}}'{{/CRR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktOrganisation'>MktOrganisation: </label><div class='col-sm-8'><input id='MktOrganisation' class='form-control' type='text'{{#MktOrganisation}} value='{{MktOrganisation}}'{{/MktOrganisation}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["CRR", "CRR", "1", "1..*"],
                        ["MktOrganisation", "MktOrganisation", "1", "0..*"]
                    ]
                );
            }
        }

        return (
            {
                CRROrgRole: CRROrgRole,
                CRR: CRR,
                CRRSegment: CRRSegment
            }
        );
    }
);