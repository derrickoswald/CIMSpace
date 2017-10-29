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
        function parse_OrientationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OrientationKind";
            base.parse_element (/<cim:OrientationKind.positive>([\s\S]*?)<\/cim:OrientationKind.positive>/g, obj, "positive", base.to_string, sub, context);
            base.parse_element (/<cim:OrientationKind.negative>([\s\S]*?)<\/cim:OrientationKind.negative>/g, obj, "negative", base.to_string, sub, context);
            bucket = context.parsed.OrientationKind;
            if (null == bucket)
                context.parsed.OrientationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_OrientationKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "OrientationKind", "positive", base.from_string, fields);
            base.export_element (obj, "OrientationKind", "negative", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A diagram object for placing free-text or text derived from an associated domain object.
         *
         */
        function parse_TextDiagramObject (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DiagramObject (context, sub);
            obj.cls = "TextDiagramObject";
            base.parse_element (/<cim:TextDiagramObject.text>([\s\S]*?)<\/cim:TextDiagramObject.text>/g, obj, "text", base.to_string, sub, context);
            bucket = context.parsed.TextDiagramObject;
            if (null == bucket)
                context.parsed.TextDiagramObject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TextDiagramObject (obj, exporters, full)
        {
            var fields = exporters["DiagramObject"](obj, exporters, false);

            base.export_element (obj, "TextDiagramObject", "text", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A point in a given space defined by 3 coordinates and associated to a diagram object.
         *
         * The coordinates may be positive or negative as the origin does not have to be in the corner of a diagram.
         *
         */
        function parse_DiagramObjectPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DiagramObjectPoint";
            base.parse_element (/<cim:DiagramObjectPoint.sequenceNumber>([\s\S]*?)<\/cim:DiagramObjectPoint.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
            base.parse_element (/<cim:DiagramObjectPoint.xPosition>([\s\S]*?)<\/cim:DiagramObjectPoint.xPosition>/g, obj, "xPosition", base.to_float, sub, context);
            base.parse_element (/<cim:DiagramObjectPoint.yPosition>([\s\S]*?)<\/cim:DiagramObjectPoint.yPosition>/g, obj, "yPosition", base.to_float, sub, context);
            base.parse_element (/<cim:DiagramObjectPoint.zPosition>([\s\S]*?)<\/cim:DiagramObjectPoint.zPosition>/g, obj, "zPosition", base.to_float, sub, context);
            base.parse_attribute (/<cim:DiagramObjectPoint.DiagramObject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramObject", sub, context);
            base.parse_attribute (/<cim:DiagramObjectPoint.DiagramObjectGluePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramObjectGluePoint", sub, context);
            bucket = context.parsed.DiagramObjectPoint;
            if (null == bucket)
                context.parsed.DiagramObjectPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DiagramObjectPoint (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "DiagramObjectPoint", "sequenceNumber", base.from_string, fields);
            base.export_element (obj, "DiagramObjectPoint", "xPosition", base.from_float, fields);
            base.export_element (obj, "DiagramObjectPoint", "yPosition", base.from_float, fields);
            base.export_element (obj, "DiagramObjectPoint", "zPosition", base.from_float, fields);
            base.export_attribute (obj, "DiagramObjectPoint", "DiagramObject", fields);
            base.export_attribute (obj, "DiagramObjectPoint", "DiagramObjectGluePoint", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A reference to a style used by the originating system for a diagram object.
         *
         * A diagram object style describes information such as line thickness, shape such as circle or rectangle etc, and color.
         *
         */
        function parse_DiagramObjectStyle (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "DiagramObjectStyle";
            bucket = context.parsed.DiagramObjectStyle;
            if (null == bucket)
                context.parsed.DiagramObjectStyle = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DiagramObjectStyle (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This is used for grouping diagram object points from different diagram objects that are considered to be glued together in a diagram even if they are not at the exact same coordinates.
         *
         */
        function parse_DiagramObjectGluePoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DiagramObjectGluePoint";
            bucket = context.parsed.DiagramObjectGluePoint;
            if (null == bucket)
                context.parsed.DiagramObjectGluePoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DiagramObjectGluePoint (obj, exporters, full)
        {
            var fields = [];

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The diagram being exchanged.
         *
         * The coordinate system is a standard Cartesian coordinate system and the orientation attribute defines the orientation.
         *
         */
        function parse_Diagram (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Diagram";
            base.parse_element (/<cim:Diagram.orientation>([\s\S]*?)<\/cim:Diagram.orientation>/g, obj, "orientation", base.to_string, sub, context);
            base.parse_element (/<cim:Diagram.x1InitialView>([\s\S]*?)<\/cim:Diagram.x1InitialView>/g, obj, "x1InitialView", base.to_float, sub, context);
            base.parse_element (/<cim:Diagram.x2InitialView>([\s\S]*?)<\/cim:Diagram.x2InitialView>/g, obj, "x2InitialView", base.to_float, sub, context);
            base.parse_element (/<cim:Diagram.y1InitialView>([\s\S]*?)<\/cim:Diagram.y1InitialView>/g, obj, "y1InitialView", base.to_float, sub, context);
            base.parse_element (/<cim:Diagram.y2InitialView>([\s\S]*?)<\/cim:Diagram.y2InitialView>/g, obj, "y2InitialView", base.to_float, sub, context);
            base.parse_attribute (/<cim:Diagram.DiagramStyle\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramStyle", sub, context);
            bucket = context.parsed.Diagram;
            if (null == bucket)
                context.parsed.Diagram = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Diagram (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Diagram", "orientation", base.from_string, fields);
            base.export_element (obj, "Diagram", "x1InitialView", base.from_float, fields);
            base.export_element (obj, "Diagram", "x2InitialView", base.from_float, fields);
            base.export_element (obj, "Diagram", "y1InitialView", base.from_float, fields);
            base.export_element (obj, "Diagram", "y2InitialView", base.from_float, fields);
            base.export_attribute (obj, "Diagram", "DiagramStyle", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Layers are typically used for grouping diagram objects according to themes and scales.
         *
         * Themes are used to display or hide certain information (e.g., lakes, borders), while scales are used for hiding or displaying information depending on the current zoom level (hide text when it is too small to be read, or when it exceeds the screen size). This is also called de-cluttering.
         *
         */
        function parse_VisibilityLayer (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "VisibilityLayer";
            base.parse_element (/<cim:VisibilityLayer.drawingOrder>([\s\S]*?)<\/cim:VisibilityLayer.drawingOrder>/g, obj, "drawingOrder", base.to_string, sub, context);
            bucket = context.parsed.VisibilityLayer;
            if (null == bucket)
                context.parsed.VisibilityLayer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_VisibilityLayer (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "VisibilityLayer", "drawingOrder", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An object that defines one or more points in a given space.
         *
         * This object can be associated with anything that specializes IdentifiedObject. For single line diagrams such objects typically include such items as analog values, breakers, disconnectors, power transformers, and transmission lines.
         *
         */
        function parse_DiagramObject (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "DiagramObject";
            base.parse_element (/<cim:DiagramObject.drawingOrder>([\s\S]*?)<\/cim:DiagramObject.drawingOrder>/g, obj, "drawingOrder", base.to_string, sub, context);
            base.parse_element (/<cim:DiagramObject.isPolygon>([\s\S]*?)<\/cim:DiagramObject.isPolygon>/g, obj, "isPolygon", base.to_boolean, sub, context);
            base.parse_element (/<cim:DiagramObject.offsetX>([\s\S]*?)<\/cim:DiagramObject.offsetX>/g, obj, "offsetX", base.to_float, sub, context);
            base.parse_element (/<cim:DiagramObject.offsetY>([\s\S]*?)<\/cim:DiagramObject.offsetY>/g, obj, "offsetY", base.to_float, sub, context);
            base.parse_element (/<cim:DiagramObject.rotation>([\s\S]*?)<\/cim:DiagramObject.rotation>/g, obj, "rotation", base.to_string, sub, context);
            base.parse_attribute (/<cim:DiagramObject.Diagram\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Diagram", sub, context);
            base.parse_attribute (/<cim:DiagramObject.DiagramObjectStyle\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramObjectStyle", sub, context);
            base.parse_attribute (/<cim:DiagramObject.IdentifiedObject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IdentifiedObject", sub, context);
            bucket = context.parsed.DiagramObject;
            if (null == bucket)
                context.parsed.DiagramObject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DiagramObject (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "DiagramObject", "drawingOrder", base.from_string, fields);
            base.export_element (obj, "DiagramObject", "isPolygon", base.from_boolean, fields);
            base.export_element (obj, "DiagramObject", "offsetX", base.from_float, fields);
            base.export_element (obj, "DiagramObject", "offsetY", base.from_float, fields);
            base.export_element (obj, "DiagramObject", "rotation", base.from_string, fields);
            base.export_attribute (obj, "DiagramObject", "Diagram", fields);
            base.export_attribute (obj, "DiagramObject", "DiagramObjectStyle", fields);
            base.export_attribute (obj, "DiagramObject", "IdentifiedObject", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The diagram style refer to a style used by the originating system for a diagram.
         *
         * A diagram style describes information such as schematic, geographic, bus-branch etc.
         *
         */
        function parse_DiagramStyle (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "DiagramStyle";
            bucket = context.parsed.DiagramStyle;
            if (null == bucket)
                context.parsed.DiagramStyle = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_DiagramStyle (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_DiagramObjectStyle: export_DiagramObjectStyle,
                parse_OrientationKind: parse_OrientationKind,
                parse_Diagram: parse_Diagram,
                parse_VisibilityLayer: parse_VisibilityLayer,
                parse_DiagramStyle: parse_DiagramStyle,
                parse_DiagramObjectPoint: parse_DiagramObjectPoint,
                export_OrientationKind: export_OrientationKind,
                export_DiagramStyle: export_DiagramStyle,
                parse_DiagramObjectStyle: parse_DiagramObjectStyle,
                export_DiagramObjectGluePoint: export_DiagramObjectGluePoint,
                export_DiagramObject: export_DiagramObject,
                export_DiagramObjectPoint: export_DiagramObjectPoint,
                export_VisibilityLayer: export_VisibilityLayer,
                parse_DiagramObject: parse_DiagramObject,
                parse_TextDiagramObject: parse_TextDiagramObject,
                export_TextDiagramObject: export_TextDiagramObject,
                parse_DiagramObjectGluePoint: parse_DiagramObjectGluePoint,
                export_Diagram: export_Diagram
            }
        );
    }
);