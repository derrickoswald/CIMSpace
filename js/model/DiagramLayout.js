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
        class OrientationKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OrientationKind;
                if (null == bucket)
                   cim_data.OrientationKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OrientationKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OrientationKind";
                base.parse_element (/<cim:OrientationKind.positive>([\s\S]*?)<\/cim:OrientationKind.positive>/g, obj, "positive", base.to_string, sub, context);
                base.parse_element (/<cim:OrientationKind.negative>([\s\S]*?)<\/cim:OrientationKind.negative>/g, obj, "negative", base.to_string, sub, context);

                var bucket = context.parsed.OrientationKind;
                if (null == bucket)
                   context.parsed.OrientationKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "OrientationKind", "positive", base.from_string, fields);
                base.export_element (obj, "OrientationKind", "negative", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#OrientationKind_collapse" aria-expanded="true" aria-controls="OrientationKind_collapse">OrientationKind</a>
<div id="OrientationKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#positive}}<div><b>positive</b>: {{positive}}</div>{{/positive}}
{{#negative}}<div><b>negative</b>: {{negative}}</div>{{/negative}}
</div>
`
                );
           }        }

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
                this._id = template.id;
                var bucket = cim_data.DiagramObjectPoint;
                if (null == bucket)
                   cim_data.DiagramObjectPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiagramObjectPoint[this._id];
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

                base.export_element (obj, "DiagramObjectPoint", "sequenceNumber", base.from_string, fields);
                base.export_element (obj, "DiagramObjectPoint", "xPosition", base.from_float, fields);
                base.export_element (obj, "DiagramObjectPoint", "yPosition", base.from_float, fields);
                base.export_element (obj, "DiagramObjectPoint", "zPosition", base.from_float, fields);
                base.export_attribute (obj, "DiagramObjectPoint", "DiagramObject", fields);
                base.export_attribute (obj, "DiagramObjectPoint", "DiagramObjectGluePoint", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#DiagramObjectPoint_collapse" aria-expanded="true" aria-controls="DiagramObjectPoint_collapse">DiagramObjectPoint</a>
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
`
                );
           }        }

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
                this._id = template.id;
                var bucket = cim_data.DiagramObjectStyle;
                if (null == bucket)
                   cim_data.DiagramObjectStyle = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiagramObjectStyle[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DiagramObjectStyle";

                var bucket = context.parsed.DiagramObjectStyle;
                if (null == bucket)
                   context.parsed.DiagramObjectStyle = bucket = {};
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
<a data-toggle="collapse" href="#DiagramObjectStyle_collapse" aria-expanded="true" aria-controls="DiagramObjectStyle_collapse">DiagramObjectStyle</a>
<div id="DiagramObjectStyle_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * This is used for grouping diagram object points from different diagram objects that are considered to be glued together in a diagram even if they are not at the exact same coordinates.
         *
         */
        class DiagramObjectGluePoint extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DiagramObjectGluePoint;
                if (null == bucket)
                   cim_data.DiagramObjectGluePoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiagramObjectGluePoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DiagramObjectGluePoint";

                var bucket = context.parsed.DiagramObjectGluePoint;
                if (null == bucket)
                   context.parsed.DiagramObjectGluePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#DiagramObjectGluePoint_collapse" aria-expanded="true" aria-controls="DiagramObjectGluePoint_collapse">DiagramObjectGluePoint</a>
<div id="DiagramObjectGluePoint_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
</div>
`
                );
           }        }

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
                this._id = template.id;
                var bucket = cim_data.Diagram;
                if (null == bucket)
                   cim_data.Diagram = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Diagram[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Diagram";
                base.parse_element (/<cim:Diagram.orientation>([\s\S]*?)<\/cim:Diagram.orientation>/g, obj, "orientation", base.to_string, sub, context);
                base.parse_element (/<cim:Diagram.x1InitialView>([\s\S]*?)<\/cim:Diagram.x1InitialView>/g, obj, "x1InitialView", base.to_float, sub, context);
                base.parse_element (/<cim:Diagram.x2InitialView>([\s\S]*?)<\/cim:Diagram.x2InitialView>/g, obj, "x2InitialView", base.to_float, sub, context);
                base.parse_element (/<cim:Diagram.y1InitialView>([\s\S]*?)<\/cim:Diagram.y1InitialView>/g, obj, "y1InitialView", base.to_float, sub, context);
                base.parse_element (/<cim:Diagram.y2InitialView>([\s\S]*?)<\/cim:Diagram.y2InitialView>/g, obj, "y2InitialView", base.to_float, sub, context);
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

                base.export_element (obj, "Diagram", "orientation", base.from_string, fields);
                base.export_element (obj, "Diagram", "x1InitialView", base.from_float, fields);
                base.export_element (obj, "Diagram", "x2InitialView", base.from_float, fields);
                base.export_element (obj, "Diagram", "y1InitialView", base.from_float, fields);
                base.export_element (obj, "Diagram", "y2InitialView", base.from_float, fields);
                base.export_attribute (obj, "Diagram", "DiagramStyle", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Diagram_collapse" aria-expanded="true" aria-controls="Diagram_collapse">Diagram</a>
<div id="Diagram_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#orientation}}<div><b>orientation</b>: {{orientation}}</div>{{/orientation}}
{{#x1InitialView}}<div><b>x1InitialView</b>: {{x1InitialView}}</div>{{/x1InitialView}}
{{#x2InitialView}}<div><b>x2InitialView</b>: {{x2InitialView}}</div>{{/x2InitialView}}
{{#y1InitialView}}<div><b>y1InitialView</b>: {{y1InitialView}}</div>{{/y1InitialView}}
{{#y2InitialView}}<div><b>y2InitialView</b>: {{y2InitialView}}</div>{{/y2InitialView}}
{{#DiagramStyle}}<div><b>DiagramStyle</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DiagramStyle}}&quot;);})'>{{DiagramStyle}}</a></div>{{/DiagramStyle}}
</div>
`
                );
           }        }

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
                this._id = template.id;
                var bucket = cim_data.VisibilityLayer;
                if (null == bucket)
                   cim_data.VisibilityLayer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VisibilityLayer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "VisibilityLayer";
                base.parse_element (/<cim:VisibilityLayer.drawingOrder>([\s\S]*?)<\/cim:VisibilityLayer.drawingOrder>/g, obj, "drawingOrder", base.to_string, sub, context);

                var bucket = context.parsed.VisibilityLayer;
                if (null == bucket)
                   context.parsed.VisibilityLayer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "VisibilityLayer", "drawingOrder", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#VisibilityLayer_collapse" aria-expanded="true" aria-controls="VisibilityLayer_collapse">VisibilityLayer</a>
<div id="VisibilityLayer_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#drawingOrder}}<div><b>drawingOrder</b>: {{drawingOrder}}</div>{{/drawingOrder}}
</div>
`
                );
           }        }

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
                this._id = template.id;
                var bucket = cim_data.DiagramObject;
                if (null == bucket)
                   cim_data.DiagramObject = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiagramObject[this._id];
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
                base.parse_attribute (/<cim:DiagramObject.IdentifiedObject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IdentifiedObject", sub, context);

                var bucket = context.parsed.DiagramObject;
                if (null == bucket)
                   context.parsed.DiagramObject = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "DiagramObject", "drawingOrder", base.from_string, fields);
                base.export_element (obj, "DiagramObject", "isPolygon", base.from_boolean, fields);
                base.export_element (obj, "DiagramObject", "offsetX", base.from_float, fields);
                base.export_element (obj, "DiagramObject", "offsetY", base.from_float, fields);
                base.export_element (obj, "DiagramObject", "rotation", base.from_string, fields);
                base.export_attribute (obj, "DiagramObject", "Diagram", fields);
                base.export_attribute (obj, "DiagramObject", "DiagramObjectStyle", fields);
                base.export_attribute (obj, "DiagramObject", "IdentifiedObject", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#DiagramObject_collapse" aria-expanded="true" aria-controls="DiagramObject_collapse">DiagramObject</a>
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
{{#IdentifiedObject}}<div><b>IdentifiedObject</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IdentifiedObject}}&quot;);})'>{{IdentifiedObject}}</a></div>{{/IdentifiedObject}}
</div>
`
                );
           }        }

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
                this._id = template.id;
                var bucket = cim_data.DiagramStyle;
                if (null == bucket)
                   cim_data.DiagramStyle = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DiagramStyle[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DiagramStyle";

                var bucket = context.parsed.DiagramStyle;
                if (null == bucket)
                   context.parsed.DiagramStyle = bucket = {};
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
<a data-toggle="collapse" href="#DiagramStyle_collapse" aria-expanded="true" aria-controls="DiagramStyle_collapse">DiagramStyle</a>
<div id="DiagramStyle_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * A diagram object for placing free-text or text derived from an associated domain object.
         *
         */
        class TextDiagramObject extends DiagramObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TextDiagramObject;
                if (null == bucket)
                   cim_data.TextDiagramObject = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TextDiagramObject[this._id];
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

                base.export_element (obj, "TextDiagramObject", "text", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TextDiagramObject_collapse" aria-expanded="true" aria-controls="TextDiagramObject_collapse">TextDiagramObject</a>
<div id="TextDiagramObject_collapse" class="collapse in" style="margin-left: 10px;">
`
      + DiagramObject.prototype.template.call (this) +
`
{{#text}}<div><b>text</b>: {{text}}</div>{{/text}}
</div>
`
                );
           }        }

        return (
            {
                TextDiagramObject: TextDiagramObject,
                VisibilityLayer: VisibilityLayer,
                DiagramObjectStyle: DiagramObjectStyle,
                Diagram: Diagram,
                DiagramStyle: DiagramStyle,
                DiagramObject: DiagramObject,
                DiagramObjectGluePoint: DiagramObjectGluePoint,
                OrientationKind: OrientationKind,
                DiagramObjectPoint: DiagramObjectPoint
            }
        );
    }
);