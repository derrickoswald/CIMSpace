define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        /**
         * Optionally, this curve expresses elasticity of the associated requirement.
         *
         * For example, used to reduce requirements when clearing price exceeds reasonable values when the supply quantity becomes scarce. For example, a single point value of \$1000/MW for a spinning reserve will cause a reduction in the required spinning reserve.
         * X axis is constrained quantity (e.g., MW)
         * Y1 axis is money per constrained quantity
         *
         */
        class SensitivityPriceCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SensitivityPriceCurve;
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
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "SensitivityPriceCurve";
                base.parse_attribute (/<cim:SensitivityPriceCurve.ReserveReq\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReq", sub, context);
                let bucket = context.parsed.SensitivityPriceCurve;
                if (null == bucket)
                   context.parsed.SensitivityPriceCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SensitivityPriceCurve", "ReserveReq", "ReserveReq", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

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
                    {{#ReserveReq}}<div><b>ReserveReq</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ReserveReq}}");}); return false;'>{{ReserveReq}}</a></div>{{/ReserveReq}}
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
                let temp;

                obj = obj || { id: id, cls: "SensitivityPriceCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ReserveReq").value; if ("" !== temp) obj["ReserveReq"] = temp;

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
         * A logical grouping of resources that are used to model location of types of requirements for ancillary services such as spinning reserve zones, regulation zones, etc.
         *
         */
        class ResourceGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ResourceGroup;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceGroup";
                base.parse_element (/<cim:ResourceGroup.type>([\s\S]*?)<\/cim:ResourceGroup.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attribute (/<cim:ResourceGroup.status\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "status", sub, context);
                base.parse_attributes (/<cim:ResourceGroup.RegisteredResources\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResources", sub, context);
                base.parse_attributes (/<cim:ResourceGroup.ResourceGroupReqs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceGroupReqs", sub, context);
                let bucket = context.parsed.ResourceGroup;
                if (null == bucket)
                   context.parsed.ResourceGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ResourceGroup", "type", "type",  base.from_string, fields);
                base.export_attribute (obj, "ResourceGroup", "status", "status", fields);
                base.export_attributes (obj, "ResourceGroup", "RegisteredResources", "RegisteredResources", fields);
                base.export_attributes (obj, "ResourceGroup", "ResourceGroupReqs", "ResourceGroupReqs", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

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
                    {{#status}}<div><b>status</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{status}}");}); return false;'>{{status}}</a></div>{{/status}}
                    {{#RegisteredResources}}<div><b>RegisteredResources</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResources}}
                    {{#ResourceGroupReqs}}<div><b>ResourceGroupReqs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResourceGroupReqs}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["RegisteredResources"]) obj["RegisteredResources_string"] = obj["RegisteredResources"].join ();
                if (obj["ResourceGroupReqs"]) obj["ResourceGroupReqs_string"] = obj["ResourceGroupReqs"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["RegisteredResources_string"];
                delete obj["ResourceGroupReqs_string"];
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
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_status'>status: </label><div class='col-sm-8'><input id='{{id}}_status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResources'>RegisteredResources: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResources' class='form-control' type='text'{{#RegisteredResources}} value='{{RegisteredResources_string}}'{{/RegisteredResources}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ResourceGroup" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_type").value; if ("" !== temp) obj["type"] = temp;
                temp = document.getElementById (id + "_status").value; if ("" !== temp) obj["status"] = temp;
                temp = document.getElementById (id + "_RegisteredResources").value; if ("" !== temp) obj["RegisteredResources"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResources", "1..*", "0..*", "RegisteredResource", "ResourceGroups"],
                            ["ResourceGroupReqs", "0..*", "1", "ResourceGroupReq", "ResourceGroup"]
                        ]
                    )
                );
            }
        }

        /**
         * A curve relating  reserve requirement versus time, showing the values of a specific reserve requirement for each unit of the period covered.
         *
         * The  curve can be based on "absolute" time or on "normalized' time.
         * X is time, typically expressed in absolute time
         * Y1 is reserve requirement, typically expressed in MW
         *
         */
        class ReserveReqCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ReserveReqCurve;
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
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "ReserveReqCurve";
                base.parse_attribute (/<cim:ReserveReqCurve.ReserveReq\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReq", sub, context);
                let bucket = context.parsed.ReserveReqCurve;
                if (null == bucket)
                   context.parsed.ReserveReqCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ReserveReqCurve", "ReserveReq", "ReserveReq", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

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
                    {{#ReserveReq}}<div><b>ReserveReq</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ReserveReq}}");}); return false;'>{{ReserveReq}}</a></div>{{/ReserveReq}}
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
                let temp;

                obj = obj || { id: id, cls: "ReserveReqCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ReserveReq").value; if ("" !== temp) obj["ReserveReq"] = temp;

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
         * Ancillary service requirements for a market.
         *
         */
        class ResourceGroupReq extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ResourceGroupReq;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceGroupReq";
                base.parse_attributes (/<cim:ResourceGroupReq.RTOs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTOs", sub, context);
                base.parse_attribute (/<cim:ResourceGroupReq.ResourceGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceGroup", sub, context);
                let bucket = context.parsed.ResourceGroupReq;
                if (null == bucket)
                   context.parsed.ResourceGroupReq = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ResourceGroupReq", "RTOs", "RTOs", fields);
                base.export_attribute (obj, "ResourceGroupReq", "ResourceGroup", "ResourceGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

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
                    {{#RTOs}}<div><b>RTOs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RTOs}}
                    {{#ResourceGroup}}<div><b>ResourceGroup</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ResourceGroup}}");}); return false;'>{{ResourceGroup}}</a></div>{{/ResourceGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["RTOs"]) obj["RTOs_string"] = obj["RTOs"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["RTOs_string"];
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
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTOs'>RTOs: </label><div class='col-sm-8'><input id='{{id}}_RTOs' class='form-control' type='text'{{#RTOs}} value='{{RTOs_string}}'{{/RTOs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceGroup'>ResourceGroup: </label><div class='col-sm-8'><input id='{{id}}_ResourceGroup' class='form-control' type='text'{{#ResourceGroup}} value='{{ResourceGroup}}'{{/ResourceGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ResourceGroupReq" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RTOs").value; if ("" !== temp) obj["RTOs"] = temp.split (",");
                temp = document.getElementById (id + "_ResourceGroup").value; if ("" !== temp) obj["ResourceGroup"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RTOs", "0..*", "0..*", "RTO", "ResourceGroupReqs"],
                            ["ResourceGroup", "1", "0..*", "ResourceGroup", "ResourceGroupReqs"]
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
                let bucket = cim_data.ReserveReq;
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
                let obj = ResourceGroupReq.prototype.parse.call (this, context, sub);
                obj.cls = "ReserveReq";
                base.parse_attribute (/<cim:ReserveReq.MarketProduct\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);
                base.parse_attribute (/<cim:ReserveReq.SensitivityPriceCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SensitivityPriceCurve", sub, context);
                base.parse_attribute (/<cim:ReserveReq.ReserveReqCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReqCurve", sub, context);
                let bucket = context.parsed.ReserveReq;
                if (null == bucket)
                   context.parsed.ReserveReq = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ResourceGroupReq.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ReserveReq", "MarketProduct", "MarketProduct", fields);
                base.export_attribute (obj, "ReserveReq", "SensitivityPriceCurve", "SensitivityPriceCurve", fields);
                base.export_attribute (obj, "ReserveReq", "ReserveReqCurve", "ReserveReqCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

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
                    {{#MarketProduct}}<div><b>MarketProduct</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MarketProduct}}");}); return false;'>{{MarketProduct}}</a></div>{{/MarketProduct}}
                    {{#SensitivityPriceCurve}}<div><b>SensitivityPriceCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SensitivityPriceCurve}}");}); return false;'>{{SensitivityPriceCurve}}</a></div>{{/SensitivityPriceCurve}}
                    {{#ReserveReqCurve}}<div><b>ReserveReqCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ReserveReqCurve}}");}); return false;'>{{ReserveReqCurve}}</a></div>{{/ReserveReqCurve}}
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
                let temp;

                obj = obj || { id: id, cls: "ReserveReq" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MarketProduct").value; if ("" !== temp) obj["MarketProduct"] = temp;
                temp = document.getElementById (id + "_SensitivityPriceCurve").value; if ("" !== temp) obj["SensitivityPriceCurve"] = temp;
                temp = document.getElementById (id + "_ReserveReqCurve").value; if ("" !== temp) obj["ReserveReqCurve"] = temp;

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