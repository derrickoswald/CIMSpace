define
(
    ["model/base", "model/Common", "model/Core"],
    function (base, Common, Core)
    {

        /**
         * Ancillary service requirements for a market.
         *
         */
        class ResourceGroupReq extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ResourceGroupReq;
                if (null == bucket)
                   cim_data.ResourceGroupReq = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceGroupReq[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceGroupReq";
                base.parse_attribute (/<cim:ResourceGroupReq.ResourceGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceGroup", sub, context);
                base.parse_attributes (/<cim:ResourceGroupReq.RTOs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RTOs", sub, context);
                var bucket = context.parsed.ResourceGroupReq;
                if (null == bucket)
                   context.parsed.ResourceGroupReq = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ResourceGroupReq", "ResourceGroup", "ResourceGroup", fields);
                base.export_attributes (obj, "ResourceGroupReq", "RTOs", "RTOs", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ResourceGroupReq_collapse" aria-expanded="true" aria-controls="ResourceGroupReq_collapse" style="margin-left: 10px;">ResourceGroupReq</a></legend>
                    <div id="ResourceGroupReq_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ResourceGroup}}<div><b>ResourceGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ResourceGroup}}&quot;);}); return false;'>{{ResourceGroup}}</a></div>{{/ResourceGroup}}
                    {{#RTOs}}<div><b>RTOs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/RTOs}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.RTOs) obj.RTOs_string = obj.RTOs.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RTOs_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ResourceGroupReq_collapse" aria-expanded="true" aria-controls="{{id}}_ResourceGroupReq_collapse" style="margin-left: 10px;">ResourceGroupReq</a></legend>
                    <div id="{{id}}_ResourceGroupReq_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceGroup'>ResourceGroup: </label><div class='col-sm-8'><input id='{{id}}_ResourceGroup' class='form-control' type='text'{{#ResourceGroup}} value='{{ResourceGroup}}'{{/ResourceGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTOs'>RTOs: </label><div class='col-sm-8'><input id='{{id}}_RTOs' class='form-control' type='text'{{#RTOs}} value='{{RTOs_string}}'{{/RTOs}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ResourceGroupReq" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ResourceGroup").value; if ("" != temp) obj.ResourceGroup = temp;
                temp = document.getElementById (id + "_RTOs").value; if ("" != temp) obj.RTOs = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ResourceGroup", "1", "0..*", "ResourceGroup", "ResourceGroupReqs"],
                            ["RTOs", "0..*", "0..*", "RTO", "ResourceGroupReqs"]
                        ]
                    )
                );
            }
        }

        /**
         * A curve relating  reserve requirement versus time, showing the values of a specific reserve requirement for each unit of the period covered.
         *
         * The  curve can be based on "absolute" time or on "normalized' time.
         *
         */
        class ReserveReqCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ReserveReqCurve;
                if (null == bucket)
                   cim_data.ReserveReqCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReserveReqCurve[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "ReserveReqCurve";
                base.parse_attribute (/<cim:ReserveReqCurve.ReserveReq\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReq", sub, context);
                var bucket = context.parsed.ReserveReqCurve;
                if (null == bucket)
                   context.parsed.ReserveReqCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ReserveReqCurve", "ReserveReq", "ReserveReq", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ReserveReqCurve_collapse" aria-expanded="true" aria-controls="ReserveReqCurve_collapse" style="margin-left: 10px;">ReserveReqCurve</a></legend>
                    <div id="ReserveReqCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#ReserveReq}}<div><b>ReserveReq</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReserveReq}}&quot;);}); return false;'>{{ReserveReq}}</a></div>{{/ReserveReq}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ReserveReqCurve_collapse" aria-expanded="true" aria-controls="{{id}}_ReserveReqCurve_collapse" style="margin-left: 10px;">ReserveReqCurve</a></legend>
                    <div id="{{id}}_ReserveReqCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReserveReq'>ReserveReq: </label><div class='col-sm-8'><input id='{{id}}_ReserveReq' class='form-control' type='text'{{#ReserveReq}} value='{{ReserveReq}}'{{/ReserveReq}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ReserveReqCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ReserveReq").value; if ("" != temp) obj.ReserveReq = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ReserveReq", "1", "1", "ReserveReq", "ReserveReqCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * A logical grouping of resources that are used to model location of types of requirements for ancillary services such as spinning reserve zones, regulation zones, etc.
         *
         */
        class ResourceGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ResourceGroup;
                if (null == bucket)
                   cim_data.ResourceGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceGroup[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceGroup";
                base.parse_element (/<cim:ResourceGroup.type>([\s\S]*?)<\/cim:ResourceGroup.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attribute (/<cim:ResourceGroup.status\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:ResourceGroup.ResourceGroupReqs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceGroupReqs", sub, context);
                base.parse_attributes (/<cim:ResourceGroup.RegisteredResources\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResources", sub, context);
                var bucket = context.parsed.ResourceGroup;
                if (null == bucket)
                   context.parsed.ResourceGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ResourceGroup", "type", "type",  base.from_string, fields);
                base.export_attribute (obj, "ResourceGroup", "status", "status", fields);
                base.export_attributes (obj, "ResourceGroup", "ResourceGroupReqs", "ResourceGroupReqs", fields);
                base.export_attributes (obj, "ResourceGroup", "RegisteredResources", "RegisteredResources", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ResourceGroup_collapse" aria-expanded="true" aria-controls="ResourceGroup_collapse" style="margin-left: 10px;">ResourceGroup</a></legend>
                    <div id="ResourceGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{status}}&quot;);}); return false;'>{{status}}</a></div>{{/status}}\n                    {{#ResourceGroupReqs}}<div><b>ResourceGroupReqs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ResourceGroupReqs}}
                    {{#RegisteredResources}}<div><b>RegisteredResources</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/RegisteredResources}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.statusStatus = [{ id: '', selected: (!obj.status)}]; for (var property in Common.Status) obj.statusStatus.push ({ id: property, selected: obj.status && obj.status.endsWith ('.' + property)});
                if (obj.ResourceGroupReqs) obj.ResourceGroupReqs_string = obj.ResourceGroupReqs.join ();
                if (obj.RegisteredResources) obj.RegisteredResources_string = obj.RegisteredResources.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.statusStatus;
                delete obj.ResourceGroupReqs_string;
                delete obj.RegisteredResources_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ResourceGroup_collapse" aria-expanded="true" aria-controls="{{id}}_ResourceGroup_collapse" style="margin-left: 10px;">ResourceGroup</a></legend>
                    <div id="{{id}}_ResourceGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><select id='{{id}}_status' class='form-control custom-select'>{{#statusStatus}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/statusStatus}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResources'>RegisteredResources: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResources' class='form-control' type='text'{{#RegisteredResources}} value='{{RegisteredResources_string}}'{{/RegisteredResources}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ResourceGroup" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_type").value; if ("" != temp) obj.type = temp;
                temp = Common.Status[document.getElementById (id + "_status").value]; if (temp) obj.status = "http://iec.ch/TC57/2013/CIM-schema-cim16#Status." + temp; else delete obj.status;
                temp = document.getElementById (id + "_RegisteredResources").value; if ("" != temp) obj.RegisteredResources = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ResourceGroupReqs", "0..*", "1", "ResourceGroupReq", "ResourceGroup"],
                            ["RegisteredResources", "1..*", "0..*", "RegisteredResource", "ResourceGroups"]
                        ]
                    )
                );
            }
        }

        /**
         * Optionally, this curve expresses elasticity of the associated requirement.
         *
         * For example, used to reduce requirements when clearing price exceeds reasonable values when the supply quantity becomes scarce. For example, a single point value of \$1000/MW for a spinning reserve will cause a reduction in the required spinning reserve.
         *
         */
        class SensitivityPriceCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SensitivityPriceCurve;
                if (null == bucket)
                   cim_data.SensitivityPriceCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SensitivityPriceCurve[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "SensitivityPriceCurve";
                base.parse_attribute (/<cim:SensitivityPriceCurve.ReserveReq\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReq", sub, context);
                var bucket = context.parsed.SensitivityPriceCurve;
                if (null == bucket)
                   context.parsed.SensitivityPriceCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SensitivityPriceCurve", "ReserveReq", "ReserveReq", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SensitivityPriceCurve_collapse" aria-expanded="true" aria-controls="SensitivityPriceCurve_collapse" style="margin-left: 10px;">SensitivityPriceCurve</a></legend>
                    <div id="SensitivityPriceCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#ReserveReq}}<div><b>ReserveReq</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReserveReq}}&quot;);}); return false;'>{{ReserveReq}}</a></div>{{/ReserveReq}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SensitivityPriceCurve_collapse" aria-expanded="true" aria-controls="{{id}}_SensitivityPriceCurve_collapse" style="margin-left: 10px;">SensitivityPriceCurve</a></legend>
                    <div id="{{id}}_SensitivityPriceCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReserveReq'>ReserveReq: </label><div class='col-sm-8'><input id='{{id}}_ReserveReq' class='form-control' type='text'{{#ReserveReq}} value='{{ReserveReq}}'{{/ReserveReq}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SensitivityPriceCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ReserveReq").value; if ("" != temp) obj.ReserveReq = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ReserveReq", "0..1", "0..1", "ReserveReq", "SensitivityPriceCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * Requirements for minimum amount of reserve and/or regulation to be supplied by a set of qualified resources.
         *
         */
        class ReserveReq extends ResourceGroupReq
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ReserveReq;
                if (null == bucket)
                   cim_data.ReserveReq = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReserveReq[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ResourceGroupReq.prototype.parse.call (this, context, sub);
                obj.cls = "ReserveReq";
                base.parse_attribute (/<cim:ReserveReq.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);
                base.parse_attribute (/<cim:ReserveReq.SensitivityPriceCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SensitivityPriceCurve", sub, context);
                base.parse_attribute (/<cim:ReserveReq.ReserveReqCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReqCurve", sub, context);
                var bucket = context.parsed.ReserveReq;
                if (null == bucket)
                   context.parsed.ReserveReq = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ResourceGroupReq.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ReserveReq", "MarketProduct", "MarketProduct", fields);
                base.export_attribute (obj, "ReserveReq", "SensitivityPriceCurve", "SensitivityPriceCurve", fields);
                base.export_attribute (obj, "ReserveReq", "ReserveReqCurve", "ReserveReqCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ReserveReq_collapse" aria-expanded="true" aria-controls="ReserveReq_collapse" style="margin-left: 10px;">ReserveReq</a></legend>
                    <div id="ReserveReq_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ResourceGroupReq.prototype.template.call (this) +
                    `
                    {{#MarketProduct}}<div><b>MarketProduct</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketProduct}}&quot;);}); return false;'>{{MarketProduct}}</a></div>{{/MarketProduct}}
                    {{#SensitivityPriceCurve}}<div><b>SensitivityPriceCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SensitivityPriceCurve}}&quot;);}); return false;'>{{SensitivityPriceCurve}}</a></div>{{/SensitivityPriceCurve}}
                    {{#ReserveReqCurve}}<div><b>ReserveReqCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReserveReqCurve}}&quot;);}); return false;'>{{ReserveReqCurve}}</a></div>{{/ReserveReqCurve}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ReserveReq_collapse" aria-expanded="true" aria-controls="{{id}}_ReserveReq_collapse" style="margin-left: 10px;">ReserveReq</a></legend>
                    <div id="{{id}}_ReserveReq_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ResourceGroupReq.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketProduct'>MarketProduct: </label><div class='col-sm-8'><input id='{{id}}_MarketProduct' class='form-control' type='text'{{#MarketProduct}} value='{{MarketProduct}}'{{/MarketProduct}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SensitivityPriceCurve'>SensitivityPriceCurve: </label><div class='col-sm-8'><input id='{{id}}_SensitivityPriceCurve' class='form-control' type='text'{{#SensitivityPriceCurve}} value='{{SensitivityPriceCurve}}'{{/SensitivityPriceCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReserveReqCurve'>ReserveReqCurve: </label><div class='col-sm-8'><input id='{{id}}_ReserveReqCurve' class='form-control' type='text'{{#ReserveReqCurve}} value='{{ReserveReqCurve}}'{{/ReserveReqCurve}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ReserveReq" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MarketProduct").value; if ("" != temp) obj.MarketProduct = temp;
                temp = document.getElementById (id + "_SensitivityPriceCurve").value; if ("" != temp) obj.SensitivityPriceCurve = temp;
                temp = document.getElementById (id + "_ReserveReqCurve").value; if ("" != temp) obj.ReserveReqCurve = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketProduct", "1", "0..*", "MarketProduct", "ReserveReqs"],
                            ["SensitivityPriceCurve", "0..1", "0..1", "SensitivityPriceCurve", "ReserveReq"],
                            ["ReserveReqCurve", "1", "1", "ReserveReqCurve", "ReserveReq"]
                        ]
                    )
                );
            }
        }

        return (
            {
                ReserveReq: ReserveReq,
                ResourceGroup: ResourceGroup,
                ReserveReqCurve: ReserveReqCurve,
                ResourceGroupReq: ResourceGroupReq,
                SensitivityPriceCurve: SensitivityPriceCurve
            }
        );
    }
);