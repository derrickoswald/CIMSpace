define
(
    ["model/base", "model/Core"],
    /**
     * This package describes diagram layout.
     *
     * This describes how objects are arranged in a coordianate system rather than how they are rendered.
     *
     */
    function (base, Core)
    {

        /**
         * The orientation of the coordinate system with respect to top, left, and the coordinate number system.
         *
         */
        var OrientationKind =
        {
            positive: "positive",
            negative: "negative"
        };
        Object.freeze (OrientationKind);

        /**
         * A point in a given space defined by 3 coordinates and associated to a diagram object.
         *
         * The coordinates may be positive or negative as the origin does not have to be in the corner of a diagram.
         *
         */
        class DiagramObjectPoint extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DiagramObjectPoint;
                if (null == bucket)
                   cim_data.DiagramObjectPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DiagramObjectPoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DiagramObjectPoint";
                base.parse_element (/<cim:DiagramObjectPoint.sequenceNumber>([\s\S]*?)<\/cim:DiagramObjectPoint.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:DiagramObjectPoint.xPosition>([\s\S]*?)<\/cim:DiagramObjectPoint.xPosition>/g, obj, "xPosition", base.to_float, sub, context);
                base.parse_element (/<cim:DiagramObjectPoint.yPosition>([\s\S]*?)<\/cim:DiagramObjectPoint.yPosition>/g, obj, "yPosition", base.to_float, sub, context);
                base.parse_element (/<cim:DiagramObjectPoint.zPosition>([\s\S]*?)<\/cim:DiagramObjectPoint.zPosition>/g, obj, "zPosition", base.to_float, sub, context);
                base.parse_attribute (/<cim:DiagramObjectPoint.DiagramObject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramObject", sub, context);
                base.parse_attribute (/<cim:DiagramObjectPoint.DiagramObjectGluePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramObjectGluePoint", sub, context);
                var bucket = context.parsed.DiagramObjectPoint;
                if (null == bucket)
                   context.parsed.DiagramObjectPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DiagramObjectPoint", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_element (obj, "DiagramObjectPoint", "xPosition", "xPosition",  base.from_float, fields);
                base.export_element (obj, "DiagramObjectPoint", "yPosition", "yPosition",  base.from_float, fields);
                base.export_element (obj, "DiagramObjectPoint", "zPosition", "zPosition",  base.from_float, fields);
                base.export_attribute (obj, "DiagramObjectPoint", "DiagramObject", "DiagramObject", fields);
                base.export_attribute (obj, "DiagramObjectPoint", "DiagramObjectGluePoint", "DiagramObjectGluePoint", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiagramObjectPoint_collapse" aria-expanded="true" aria-controls="DiagramObjectPoint_collapse" style="margin-left: 10px;">DiagramObjectPoint</a></legend>
                    <div id="DiagramObjectPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#xPosition}}<div><b>xPosition</b>: {{xPosition}}</div>{{/xPosition}}
                    {{#yPosition}}<div><b>yPosition</b>: {{yPosition}}</div>{{/yPosition}}
                    {{#zPosition}}<div><b>zPosition</b>: {{zPosition}}</div>{{/zPosition}}
                    {{#DiagramObject}}<div><b>DiagramObject</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DiagramObject}}&quot;);})'>{{DiagramObject}}</a></div>{{/DiagramObject}}
                    {{#DiagramObjectGluePoint}}<div><b>DiagramObjectGluePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DiagramObjectGluePoint}}&quot;);})'>{{DiagramObjectGluePoint}}</a></div>{{/DiagramObjectGluePoint}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiagramObjectPoint_collapse" aria-expanded="true" aria-controls="DiagramObjectPoint_collapse" style="margin-left: 10px;">DiagramObjectPoint</a></legend>
                    <div id="DiagramObjectPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xPosition'>xPosition: </label><div class='col-sm-8'><input id='xPosition' class='form-control' type='text'{{#xPosition}} value='{{xPosition}}'{{/xPosition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='yPosition'>yPosition: </label><div class='col-sm-8'><input id='yPosition' class='form-control' type='text'{{#yPosition}} value='{{yPosition}}'{{/yPosition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='zPosition'>zPosition: </label><div class='col-sm-8'><input id='zPosition' class='form-control' type='text'{{#zPosition}} value='{{zPosition}}'{{/zPosition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DiagramObject'>DiagramObject: </label><div class='col-sm-8'><input id='DiagramObject' class='form-control' type='text'{{#DiagramObject}} value='{{DiagramObject}}'{{/DiagramObject}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DiagramObjectGluePoint'>DiagramObjectGluePoint: </label><div class='col-sm-8'><input id='DiagramObjectGluePoint' class='form-control' type='text'{{#DiagramObjectGluePoint}} value='{{DiagramObjectGluePoint}}'{{/DiagramObjectGluePoint}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "DiagramObjectPoint" };
                super.submit (obj);
                temp = document.getElementById ("sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById ("xPosition").value; if ("" != temp) obj.xPosition = temp;
                temp = document.getElementById ("yPosition").value; if ("" != temp) obj.yPosition = temp;
                temp = document.getElementById ("zPosition").value; if ("" != temp) obj.zPosition = temp;
                temp = document.getElementById ("DiagramObject").value; if ("" != temp) obj.DiagramObject = temp;
                temp = document.getElementById ("DiagramObjectGluePoint").value; if ("" != temp) obj.DiagramObjectGluePoint = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["DiagramObject", "DiagramObject", "1", "0..*"],
                        ["DiagramObjectGluePoint", "DiagramObjectGluePoint", "0..1", "2..*"]
                    ]
                );
            }
        }

        /**
         * A reference to a style used by the originating system for a diagram object.
         *
         * A diagram object style describes information such as line thickness, shape such as circle or rectangle etc, and color.
         *
         */
        class DiagramObjectStyle extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DiagramObjectStyle;
                if (null == bucket)
                   cim_data.DiagramObjectStyle = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DiagramObjectStyle[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DiagramObjectStyle";
                base.parse_attributes (/<cim:DiagramObjectStyle.StyledObjects\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StyledObjects", sub, context);
                var bucket = context.parsed.DiagramObjectStyle;
                if (null == bucket)
                   context.parsed.DiagramObjectStyle = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "DiagramObjectStyle", "StyledObjects", "StyledObjects", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiagramObjectStyle_collapse" aria-expanded="true" aria-controls="DiagramObjectStyle_collapse" style="margin-left: 10px;">DiagramObjectStyle</a></legend>
                    <div id="DiagramObjectStyle_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#StyledObjects}}<div><b>StyledObjects</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/StyledObjects}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.StyledObjects) obj.StyledObjects_string = obj.StyledObjects.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.StyledObjects_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiagramObjectStyle_collapse" aria-expanded="true" aria-controls="DiagramObjectStyle_collapse" style="margin-left: 10px;">DiagramObjectStyle</a></legend>
                    <div id="DiagramObjectStyle_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "DiagramObjectStyle" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["StyledObjects", "DiagramObject", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * This is used for grouping diagram object points from different diagram objects that are considered to be glued together in a diagram even if they are not at the exact same coordinates.
         *
         */
        class DiagramObjectGluePoint extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DiagramObjectGluePoint;
                if (null == bucket)
                   cim_data.DiagramObjectGluePoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DiagramObjectGluePoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DiagramObjectGluePoint";
                base.parse_attributes (/<cim:DiagramObjectGluePoint.DiagramObjectPoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramObjectPoints", sub, context);
                var bucket = context.parsed.DiagramObjectGluePoint;
                if (null == bucket)
                   context.parsed.DiagramObjectGluePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attributes (obj, "DiagramObjectGluePoint", "DiagramObjectPoints", "DiagramObjectPoints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiagramObjectGluePoint_collapse" aria-expanded="true" aria-controls="DiagramObjectGluePoint_collapse" style="margin-left: 10px;">DiagramObjectGluePoint</a></legend>
                    <div id="DiagramObjectGluePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#DiagramObjectPoints}}<div><b>DiagramObjectPoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DiagramObjectPoints}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.DiagramObjectPoints) obj.DiagramObjectPoints_string = obj.DiagramObjectPoints.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DiagramObjectPoints_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiagramObjectGluePoint_collapse" aria-expanded="true" aria-controls="DiagramObjectGluePoint_collapse" style="margin-left: 10px;">DiagramObjectGluePoint</a></legend>
                    <div id="DiagramObjectGluePoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "DiagramObjectGluePoint" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["DiagramObjectPoints", "DiagramObjectPoint", "2..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * The diagram being exchanged.
         *
         * The coordinate system is a standard Cartesian coordinate system and the orientation attribute defines the orientation.
         *
         */
        class Diagram extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Diagram;
                if (null == bucket)
                   cim_data.Diagram = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Diagram[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Diagram";
                base.parse_attribute (/<cim:Diagram.orientation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "orientation", sub, context);
                base.parse_element (/<cim:Diagram.x1InitialView>([\s\S]*?)<\/cim:Diagram.x1InitialView>/g, obj, "x1InitialView", base.to_float, sub, context);
                base.parse_element (/<cim:Diagram.x2InitialView>([\s\S]*?)<\/cim:Diagram.x2InitialView>/g, obj, "x2InitialView", base.to_float, sub, context);
                base.parse_element (/<cim:Diagram.y1InitialView>([\s\S]*?)<\/cim:Diagram.y1InitialView>/g, obj, "y1InitialView", base.to_float, sub, context);
                base.parse_element (/<cim:Diagram.y2InitialView>([\s\S]*?)<\/cim:Diagram.y2InitialView>/g, obj, "y2InitialView", base.to_float, sub, context);
                base.parse_attributes (/<cim:Diagram.DiagramElements\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramElements", sub, context);
                base.parse_attribute (/<cim:Diagram.DiagramStyle\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramStyle", sub, context);
                var bucket = context.parsed.Diagram;
                if (null == bucket)
                   context.parsed.Diagram = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Diagram", "orientation", "orientation", fields);
                base.export_element (obj, "Diagram", "x1InitialView", "x1InitialView",  base.from_float, fields);
                base.export_element (obj, "Diagram", "x2InitialView", "x2InitialView",  base.from_float, fields);
                base.export_element (obj, "Diagram", "y1InitialView", "y1InitialView",  base.from_float, fields);
                base.export_element (obj, "Diagram", "y2InitialView", "y2InitialView",  base.from_float, fields);
                base.export_attributes (obj, "Diagram", "DiagramElements", "DiagramElements", fields);
                base.export_attribute (obj, "Diagram", "DiagramStyle", "DiagramStyle", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Diagram_collapse" aria-expanded="true" aria-controls="Diagram_collapse" style="margin-left: 10px;">Diagram</a></legend>
                    <div id="Diagram_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#orientation}}<div><b>orientation</b>: {{orientation}}</div>{{/orientation}}
                    {{#x1InitialView}}<div><b>x1InitialView</b>: {{x1InitialView}}</div>{{/x1InitialView}}
                    {{#x2InitialView}}<div><b>x2InitialView</b>: {{x2InitialView}}</div>{{/x2InitialView}}
                    {{#y1InitialView}}<div><b>y1InitialView</b>: {{y1InitialView}}</div>{{/y1InitialView}}
                    {{#y2InitialView}}<div><b>y2InitialView</b>: {{y2InitialView}}</div>{{/y2InitialView}}
                    {{#DiagramElements}}<div><b>DiagramElements</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DiagramElements}}
                    {{#DiagramStyle}}<div><b>DiagramStyle</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DiagramStyle}}&quot;);})'>{{DiagramStyle}}</a></div>{{/DiagramStyle}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.OrientationKind = []; if (!obj.orientation) obj.OrientationKind.push ({ id: '', selected: true}); for (var property in OrientationKind) obj.OrientationKind.push ({ id: property, selected: obj.orientation && obj.orientation.endsWith ('.' + property)});
                if (obj.DiagramElements) obj.DiagramElements_string = obj.DiagramElements.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.OrientationKind;
                delete obj.DiagramElements_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Diagram_collapse" aria-expanded="true" aria-controls="Diagram_collapse" style="margin-left: 10px;">Diagram</a></legend>
                    <div id="Diagram_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='orientation'>orientation: </label><div class='col-sm-8'><select id='orientation' class='form-control'>{{#OrientationKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/OrientationKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='x1InitialView'>x1InitialView: </label><div class='col-sm-8'><input id='x1InitialView' class='form-control' type='text'{{#x1InitialView}} value='{{x1InitialView}}'{{/x1InitialView}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='x2InitialView'>x2InitialView: </label><div class='col-sm-8'><input id='x2InitialView' class='form-control' type='text'{{#x2InitialView}} value='{{x2InitialView}}'{{/x2InitialView}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='y1InitialView'>y1InitialView: </label><div class='col-sm-8'><input id='y1InitialView' class='form-control' type='text'{{#y1InitialView}} value='{{y1InitialView}}'{{/y1InitialView}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='y2InitialView'>y2InitialView: </label><div class='col-sm-8'><input id='y2InitialView' class='form-control' type='text'{{#y2InitialView}} value='{{y2InitialView}}'{{/y2InitialView}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DiagramStyle'>DiagramStyle: </label><div class='col-sm-8'><input id='DiagramStyle' class='form-control' type='text'{{#DiagramStyle}} value='{{DiagramStyle}}'{{/DiagramStyle}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Diagram" };
                super.submit (obj);
                temp = document.getElementById ("orientation").value; if ("" != temp) { temp = OrientationKind[temp]; if ("undefined" != typeof (temp)) obj.orientation = "#http://iec.ch/TC57/2013/CIM-schema-cim16#OrientationKind." + temp; }
                temp = document.getElementById ("x1InitialView").value; if ("" != temp) obj.x1InitialView = temp;
                temp = document.getElementById ("x2InitialView").value; if ("" != temp) obj.x2InitialView = temp;
                temp = document.getElementById ("y1InitialView").value; if ("" != temp) obj.y1InitialView = temp;
                temp = document.getElementById ("y2InitialView").value; if ("" != temp) obj.y2InitialView = temp;
                temp = document.getElementById ("DiagramStyle").value; if ("" != temp) obj.DiagramStyle = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["DiagramElements", "DiagramObject", "0..*", "0..1"],
                        ["DiagramStyle", "DiagramStyle", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Layers are typically used for grouping diagram objects according to themes and scales.
         *
         * Themes are used to display or hide certain information (e.g., lakes, borders), while scales are used for hiding or displaying information depending on the current zoom level (hide text when it is too small to be read, or when it exceeds the screen size). This is also called de-cluttering.
         *
         */
        class VisibilityLayer extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.VisibilityLayer;
                if (null == bucket)
                   cim_data.VisibilityLayer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VisibilityLayer[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "VisibilityLayer";
                base.parse_element (/<cim:VisibilityLayer.drawingOrder>([\s\S]*?)<\/cim:VisibilityLayer.drawingOrder>/g, obj, "drawingOrder", base.to_string, sub, context);
                base.parse_attributes (/<cim:VisibilityLayer.VisibleObjects\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VisibleObjects", sub, context);
                var bucket = context.parsed.VisibilityLayer;
                if (null == bucket)
                   context.parsed.VisibilityLayer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "VisibilityLayer", "drawingOrder", "drawingOrder",  base.from_string, fields);
                base.export_attributes (obj, "VisibilityLayer", "VisibleObjects", "VisibleObjects", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VisibilityLayer_collapse" aria-expanded="true" aria-controls="VisibilityLayer_collapse" style="margin-left: 10px;">VisibilityLayer</a></legend>
                    <div id="VisibilityLayer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#drawingOrder}}<div><b>drawingOrder</b>: {{drawingOrder}}</div>{{/drawingOrder}}
                    {{#VisibleObjects}}<div><b>VisibleObjects</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/VisibleObjects}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.VisibleObjects) obj.VisibleObjects_string = obj.VisibleObjects.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.VisibleObjects_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VisibilityLayer_collapse" aria-expanded="true" aria-controls="VisibilityLayer_collapse" style="margin-left: 10px;">VisibilityLayer</a></legend>
                    <div id="VisibilityLayer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='drawingOrder'>drawingOrder: </label><div class='col-sm-8'><input id='drawingOrder' class='form-control' type='text'{{#drawingOrder}} value='{{drawingOrder}}'{{/drawingOrder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='VisibleObjects'>VisibleObjects: </label><div class='col-sm-8'><input id='VisibleObjects' class='form-control' type='text'{{#VisibleObjects}} value='{{VisibleObjects}}_string'{{/VisibleObjects}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "VisibilityLayer" };
                super.submit (obj);
                temp = document.getElementById ("drawingOrder").value; if ("" != temp) obj.drawingOrder = temp;
                temp = document.getElementById ("VisibleObjects").value; if ("" != temp) obj.VisibleObjects = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["VisibleObjects", "DiagramObject", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * An object that defines one or more points in a given space.
         *
         * This object can be associated with anything that specializes IdentifiedObject. For single line diagrams such objects typically include such items as analog values, breakers, disconnectors, power transformers, and transmission lines.
         *
         */
        class DiagramObject extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DiagramObject;
                if (null == bucket)
                   cim_data.DiagramObject = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DiagramObject[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DiagramObject";
                base.parse_element (/<cim:DiagramObject.drawingOrder>([\s\S]*?)<\/cim:DiagramObject.drawingOrder>/g, obj, "drawingOrder", base.to_string, sub, context);
                base.parse_element (/<cim:DiagramObject.isPolygon>([\s\S]*?)<\/cim:DiagramObject.isPolygon>/g, obj, "isPolygon", base.to_boolean, sub, context);
                base.parse_element (/<cim:DiagramObject.offsetX>([\s\S]*?)<\/cim:DiagramObject.offsetX>/g, obj, "offsetX", base.to_float, sub, context);
                base.parse_element (/<cim:DiagramObject.offsetY>([\s\S]*?)<\/cim:DiagramObject.offsetY>/g, obj, "offsetY", base.to_float, sub, context);
                base.parse_element (/<cim:DiagramObject.rotation>([\s\S]*?)<\/cim:DiagramObject.rotation>/g, obj, "rotation", base.to_string, sub, context);
                base.parse_attribute (/<cim:DiagramObject.Diagram\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Diagram", sub, context);
                base.parse_attribute (/<cim:DiagramObject.DiagramObjectStyle\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramObjectStyle", sub, context);
                base.parse_attributes (/<cim:DiagramObject.DiagramObjectPoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramObjectPoints", sub, context);
                base.parse_attribute (/<cim:DiagramObject.IdentifiedObject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IdentifiedObject", sub, context);
                base.parse_attributes (/<cim:DiagramObject.VisibilityLayers\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VisibilityLayers", sub, context);
                var bucket = context.parsed.DiagramObject;
                if (null == bucket)
                   context.parsed.DiagramObject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "DiagramObject", "drawingOrder", "drawingOrder",  base.from_string, fields);
                base.export_element (obj, "DiagramObject", "isPolygon", "isPolygon",  base.from_boolean, fields);
                base.export_element (obj, "DiagramObject", "offsetX", "offsetX",  base.from_float, fields);
                base.export_element (obj, "DiagramObject", "offsetY", "offsetY",  base.from_float, fields);
                base.export_element (obj, "DiagramObject", "rotation", "rotation",  base.from_string, fields);
                base.export_attribute (obj, "DiagramObject", "Diagram", "Diagram", fields);
                base.export_attribute (obj, "DiagramObject", "DiagramObjectStyle", "DiagramObjectStyle", fields);
                base.export_attributes (obj, "DiagramObject", "DiagramObjectPoints", "DiagramObjectPoints", fields);
                base.export_attribute (obj, "DiagramObject", "IdentifiedObject", "IdentifiedObject", fields);
                base.export_attributes (obj, "DiagramObject", "VisibilityLayers", "VisibilityLayers", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiagramObject_collapse" aria-expanded="true" aria-controls="DiagramObject_collapse" style="margin-left: 10px;">DiagramObject</a></legend>
                    <div id="DiagramObject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#drawingOrder}}<div><b>drawingOrder</b>: {{drawingOrder}}</div>{{/drawingOrder}}
                    {{#isPolygon}}<div><b>isPolygon</b>: {{isPolygon}}</div>{{/isPolygon}}
                    {{#offsetX}}<div><b>offsetX</b>: {{offsetX}}</div>{{/offsetX}}
                    {{#offsetY}}<div><b>offsetY</b>: {{offsetY}}</div>{{/offsetY}}
                    {{#rotation}}<div><b>rotation</b>: {{rotation}}</div>{{/rotation}}
                    {{#Diagram}}<div><b>Diagram</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Diagram}}&quot;);})'>{{Diagram}}</a></div>{{/Diagram}}
                    {{#DiagramObjectStyle}}<div><b>DiagramObjectStyle</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DiagramObjectStyle}}&quot;);})'>{{DiagramObjectStyle}}</a></div>{{/DiagramObjectStyle}}
                    {{#DiagramObjectPoints}}<div><b>DiagramObjectPoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DiagramObjectPoints}}
                    {{#IdentifiedObject}}<div><b>IdentifiedObject</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IdentifiedObject}}&quot;);})'>{{IdentifiedObject}}</a></div>{{/IdentifiedObject}}
                    {{#VisibilityLayers}}<div><b>VisibilityLayers</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/VisibilityLayers}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.DiagramObjectPoints) obj.DiagramObjectPoints_string = obj.DiagramObjectPoints.join ();
                if (obj.VisibilityLayers) obj.VisibilityLayers_string = obj.VisibilityLayers.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DiagramObjectPoints_string;
                delete obj.VisibilityLayers_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiagramObject_collapse" aria-expanded="true" aria-controls="DiagramObject_collapse" style="margin-left: 10px;">DiagramObject</a></legend>
                    <div id="DiagramObject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='drawingOrder'>drawingOrder: </label><div class='col-sm-8'><input id='drawingOrder' class='form-control' type='text'{{#drawingOrder}} value='{{drawingOrder}}'{{/drawingOrder}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isPolygon'>isPolygon: </label><div class='col-sm-8'><input id='isPolygon' class='form-check-input' type='checkbox'{{#isPolygon}} checked{{/isPolygon}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='offsetX'>offsetX: </label><div class='col-sm-8'><input id='offsetX' class='form-control' type='text'{{#offsetX}} value='{{offsetX}}'{{/offsetX}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='offsetY'>offsetY: </label><div class='col-sm-8'><input id='offsetY' class='form-control' type='text'{{#offsetY}} value='{{offsetY}}'{{/offsetY}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rotation'>rotation: </label><div class='col-sm-8'><input id='rotation' class='form-control' type='text'{{#rotation}} value='{{rotation}}'{{/rotation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Diagram'>Diagram: </label><div class='col-sm-8'><input id='Diagram' class='form-control' type='text'{{#Diagram}} value='{{Diagram}}'{{/Diagram}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DiagramObjectStyle'>DiagramObjectStyle: </label><div class='col-sm-8'><input id='DiagramObjectStyle' class='form-control' type='text'{{#DiagramObjectStyle}} value='{{DiagramObjectStyle}}'{{/DiagramObjectStyle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='IdentifiedObject'>IdentifiedObject: </label><div class='col-sm-8'><input id='IdentifiedObject' class='form-control' type='text'{{#IdentifiedObject}} value='{{IdentifiedObject}}'{{/IdentifiedObject}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='VisibilityLayers'>VisibilityLayers: </label><div class='col-sm-8'><input id='VisibilityLayers' class='form-control' type='text'{{#VisibilityLayers}} value='{{VisibilityLayers}}_string'{{/VisibilityLayers}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "DiagramObject" };
                super.submit (obj);
                temp = document.getElementById ("drawingOrder").value; if ("" != temp) obj.drawingOrder = temp;
                temp = document.getElementById ("isPolygon").checked; if (temp) obj.isPolygon = true;
                temp = document.getElementById ("offsetX").value; if ("" != temp) obj.offsetX = temp;
                temp = document.getElementById ("offsetY").value; if ("" != temp) obj.offsetY = temp;
                temp = document.getElementById ("rotation").value; if ("" != temp) obj.rotation = temp;
                temp = document.getElementById ("Diagram").value; if ("" != temp) obj.Diagram = temp;
                temp = document.getElementById ("DiagramObjectStyle").value; if ("" != temp) obj.DiagramObjectStyle = temp;
                temp = document.getElementById ("IdentifiedObject").value; if ("" != temp) obj.IdentifiedObject = temp;
                temp = document.getElementById ("VisibilityLayers").value; if ("" != temp) obj.VisibilityLayers = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Diagram", "Diagram", "0..1", "0..*"],
                        ["DiagramObjectStyle", "DiagramObjectStyle", "0..1", "0..*"],
                        ["DiagramObjectPoints", "DiagramObjectPoint", "0..*", "1"],
                        ["IdentifiedObject", "IdentifiedObject", "0..1", "0..*"],
                        ["VisibilityLayers", "VisibilityLayer", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * The diagram style refer to a style used by the originating system for a diagram.
         *
         * A diagram style describes information such as schematic, geographic, bus-branch etc.
         *
         */
        class DiagramStyle extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DiagramStyle;
                if (null == bucket)
                   cim_data.DiagramStyle = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DiagramStyle[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DiagramStyle";
                base.parse_attributes (/<cim:DiagramStyle.Diagram\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Diagram", sub, context);
                var bucket = context.parsed.DiagramStyle;
                if (null == bucket)
                   context.parsed.DiagramStyle = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "DiagramStyle", "Diagram", "Diagram", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiagramStyle_collapse" aria-expanded="true" aria-controls="DiagramStyle_collapse" style="margin-left: 10px;">DiagramStyle</a></legend>
                    <div id="DiagramStyle_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Diagram}}<div><b>Diagram</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Diagram}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Diagram) obj.Diagram_string = obj.Diagram.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Diagram_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DiagramStyle_collapse" aria-expanded="true" aria-controls="DiagramStyle_collapse" style="margin-left: 10px;">DiagramStyle</a></legend>
                    <div id="DiagramStyle_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "DiagramStyle" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Diagram", "Diagram", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * A diagram object for placing free-text or text derived from an associated domain object.
         *
         */
        class TextDiagramObject extends DiagramObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TextDiagramObject;
                if (null == bucket)
                   cim_data.TextDiagramObject = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TextDiagramObject[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DiagramObject.prototype.parse.call (this, context, sub);
                obj.cls = "TextDiagramObject";
                base.parse_element (/<cim:TextDiagramObject.text>([\s\S]*?)<\/cim:TextDiagramObject.text>/g, obj, "text", base.to_string, sub, context);
                var bucket = context.parsed.TextDiagramObject;
                if (null == bucket)
                   context.parsed.TextDiagramObject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DiagramObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TextDiagramObject", "text", "text",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TextDiagramObject_collapse" aria-expanded="true" aria-controls="TextDiagramObject_collapse" style="margin-left: 10px;">TextDiagramObject</a></legend>
                    <div id="TextDiagramObject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + DiagramObject.prototype.template.call (this) +
                    `
                    {{#text}}<div><b>text</b>: {{text}}</div>{{/text}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TextDiagramObject_collapse" aria-expanded="true" aria-controls="TextDiagramObject_collapse" style="margin-left: 10px;">TextDiagramObject</a></legend>
                    <div id="TextDiagramObject_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + DiagramObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='text'>text: </label><div class='col-sm-8'><input id='text' class='form-control' type='text'{{#text}} value='{{text}}'{{/text}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TextDiagramObject" };
                super.submit (obj);
                temp = document.getElementById ("text").value; if ("" != temp) obj.text = temp;

                return (obj);
            }
        }

        return (
            {
                TextDiagramObject: TextDiagramObject,
                VisibilityLayer: VisibilityLayer,
                DiagramObjectStyle: DiagramObjectStyle,
                Diagram: Diagram,
                DiagramStyle: DiagramStyle,
                DiagramObject: DiagramObject,
                DiagramObjectGluePoint: DiagramObjectGluePoint,
                DiagramObjectPoint: DiagramObjectPoint
            }
        );
    }
);