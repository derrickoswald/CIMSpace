define
(
    ["model/base", "model/Core"],
    /**
     * This package describes diagram layout.
     * This describes how objects are arranged in a coordianate system rather than how they are rendered.
     */
    function (base, Core)
    {

        /**
         * The orientation of the coordinate system with respect to top, left, and the coordinate number system.
         */
        function parse_OrientationKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "OrientationKind";
            /**
             * For 2D diagrams, a positive orientation will result in X values increasing from left to right and Y values increasing from bottom to top.
             * This is also known as a right hand orientation.
             */
            obj["positive"] = base.parse_element (/<cim:OrientationKind.positive>([\s\S]*?)<\/cim:OrientationKind.positive>/g, sub, context, true);
            /**
             * For 2D diagrams, a negative orientation gives the left-hand orientation (favoured by computer graphics displays) with X values increasing from left to right and Y values increasing from top to bottom.
             * This is also known as a left hand orientation.
             */
            obj["negative"] = base.parse_element (/<cim:OrientationKind.negative>([\s\S]*?)<\/cim:OrientationKind.negative>/g, sub, context, true);
            bucket = context.parsed.OrientationKind;
            if (null == bucket)
                context.parsed.OrientationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A diagram object for placing free-text or text derived from an associated domain object.
         */
        function parse_TextDiagramObject (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DiagramObject (context, sub);
            obj.cls = "TextDiagramObject";
            /**
             * The text that is displayed by this text diagram object.
             */
            obj["text"] = base.parse_element (/<cim:TextDiagramObject.text>([\s\S]*?)<\/cim:TextDiagramObject.text>/g, sub, context, true);
            bucket = context.parsed.TextDiagramObject;
            if (null == bucket)
                context.parsed.TextDiagramObject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A point in a given space defined by 3 coordinates and associated to a diagram object.
         * The coordinates may be positive or negative as the origin does not have to be in the corner of a diagram.
         */
        function parse_DiagramObjectPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DiagramObjectPoint";
            /**
             * The sequence position of the point, used for defining the order of points for diagram objects acting as a polyline or polygon with more than one point.
             */
            obj["sequenceNumber"] = base.parse_element (/<cim:DiagramObjectPoint.sequenceNumber>([\s\S]*?)<\/cim:DiagramObjectPoint.sequenceNumber>/g, sub, context, true);
            /**
             * The X coordinate of this point.
             */
            obj["xPosition"] = base.to_float (base.parse_element (/<cim:DiagramObjectPoint.xPosition>([\s\S]*?)<\/cim:DiagramObjectPoint.xPosition>/g, sub, context, true));
            /**
             * The Y coordinate of this point.
             */
            obj["yPosition"] = base.to_float (base.parse_element (/<cim:DiagramObjectPoint.yPosition>([\s\S]*?)<\/cim:DiagramObjectPoint.yPosition>/g, sub, context, true));
            /**
             * The Z coordinate of this point.
             */
            obj["zPosition"] = base.to_float (base.parse_element (/<cim:DiagramObjectPoint.zPosition>([\s\S]*?)<\/cim:DiagramObjectPoint.zPosition>/g, sub, context, true));
            /**
             * The diagram object with which the points are associated.
             */
            obj["DiagramObject"] = base.parse_attribute (/<cim:DiagramObjectPoint.DiagramObject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The 'glue' point to which this point is associated.
             */
            obj["DiagramObjectGluePoint"] = base.parse_attribute (/<cim:DiagramObjectPoint.DiagramObjectGluePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DiagramObjectPoint;
            if (null == bucket)
                context.parsed.DiagramObjectPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A reference to a style used by the originating system for a diagram object.
         * A diagram object style describes information such as line thickness, shape such as circle or rectangle etc, and color.
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

        /**
         * This is used for grouping diagram object points from different diagram objects that are considered to be glued together in a diagram even if they are not at the exact same coordinates.
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

        /**
         * The diagram being exchanged.
         * The coordinate system is a standard Cartesian coordinate system and the orientation attribute defines the orientation.
         */
        function parse_Diagram (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Diagram";
            /**
             * Coordinate system orientation of the diagram.
             */
            obj["orientation"] = base.parse_element (/<cim:Diagram.orientation>([\s\S]*?)<\/cim:Diagram.orientation>/g, sub, context, true);
            /**
             * X coordinate of the first corner of the initial view.
             */
            obj["x1InitialView"] = base.to_float (base.parse_element (/<cim:Diagram.x1InitialView>([\s\S]*?)<\/cim:Diagram.x1InitialView>/g, sub, context, true));
            /**
             * X coordinate of the second corner of the initial view.
             */
            obj["x2InitialView"] = base.to_float (base.parse_element (/<cim:Diagram.x2InitialView>([\s\S]*?)<\/cim:Diagram.x2InitialView>/g, sub, context, true));
            /**
             * Y coordinate of the first corner of the initial view.
             */
            obj["y1InitialView"] = base.to_float (base.parse_element (/<cim:Diagram.y1InitialView>([\s\S]*?)<\/cim:Diagram.y1InitialView>/g, sub, context, true));
            /**
             * Y coordinate of the second corner of the initial view.
             */
            obj["y2InitialView"] = base.to_float (base.parse_element (/<cim:Diagram.y2InitialView>([\s\S]*?)<\/cim:Diagram.y2InitialView>/g, sub, context, true));
            /**
             * A Diagram may have a DiagramStyle.
             */
            obj["DiagramStyle"] = base.parse_attribute (/<cim:Diagram.DiagramStyle\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Diagram;
            if (null == bucket)
                context.parsed.Diagram = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Layers are typically used for grouping diagram objects according to themes and scales.
         * Themes are used to display or hide certain information (e.g., lakes, borders), while scales are used for hiding or displaying information depending on the current zoom level (hide text when it is too small to be read, or when it exceeds the screen size). This is also called de-cluttering.
         */
        function parse_VisibilityLayer (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "VisibilityLayer";
            /**
             * The drawing order for this layer.
             * The higher the number, the later the layer and the objects within it are rendered.
             */
            obj["drawingOrder"] = base.parse_element (/<cim:VisibilityLayer.drawingOrder>([\s\S]*?)<\/cim:VisibilityLayer.drawingOrder>/g, sub, context, true);
            bucket = context.parsed.VisibilityLayer;
            if (null == bucket)
                context.parsed.VisibilityLayer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An object that defines one or more points in a given space.
         * This object can be associated with anything that specializes IdentifiedObject. For single line diagrams such objects typically include such items as analog values, breakers, disconnectors, power transformers, and transmission lines.
         */
        function parse_DiagramObject (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "DiagramObject";
            /**
             * The drawing order of this element.
             * The higher the number, the later the element is drawn in sequence. This is used to ensure that elements that overlap are rendered in the correct order.
             */
            obj["drawingOrder"] = base.parse_element (/<cim:DiagramObject.drawingOrder>([\s\S]*?)<\/cim:DiagramObject.drawingOrder>/g, sub, context, true);
            /**
             * Defines whether or not the diagram objects points define the boundaries of a polygon or the routing of a polyline.
             * If this value is true then a receiving application should consider the first and last points to be connected.
             */
            obj["isPolygon"] = base.to_boolean (base.parse_element (/<cim:DiagramObject.isPolygon>([\s\S]*?)<\/cim:DiagramObject.isPolygon>/g, sub, context, true));
            /**
             * The offset in the X direction.
             * This is used for defining the offset from centre for rendering an icon (the default is that a single point specifies the centre of the icon).
             */
            obj["offsetX"] = base.to_float (base.parse_element (/<cim:DiagramObject.offsetX>([\s\S]*?)<\/cim:DiagramObject.offsetX>/g, sub, context, true));
            /**
             * The offset in the Y direction.
             * This is used for defining the offset from centre for rendering an icon (the default is that a single point specifies the centre of the icon).
             */
            obj["offsetY"] = base.to_float (base.parse_element (/<cim:DiagramObject.offsetY>([\s\S]*?)<\/cim:DiagramObject.offsetY>/g, sub, context, true));
            /**
             * Sets the angle of rotation of the diagram object.
             * Zero degrees is pointing to the top of the diagram.  Rotation is clockwise.
             */
            obj["rotation"] = base.parse_element (/<cim:DiagramObject.rotation>([\s\S]*?)<\/cim:DiagramObject.rotation>/g, sub, context, true);
            /**
             * A diagram object is part of a diagram.
             */
            obj["Diagram"] = base.parse_attribute (/<cim:DiagramObject.Diagram\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A diagram object has a style associated that provides a reference for the style used in the originating system.
             */
            obj["DiagramObjectStyle"] = base.parse_attribute (/<cim:DiagramObject.DiagramObjectStyle\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The domain object to which this diagram object is associated.
             */
            obj["IdentifiedObject"] = base.parse_attribute (/<cim:DiagramObject.IdentifiedObject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DiagramObject;
            if (null == bucket)
                context.parsed.DiagramObject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The diagram style refer to a style used by the originating system for a diagram.
         * A diagram style describes information such as schematic, geographic, bus-branch etc.
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

        return (
            {
                parse_VisibilityLayer: parse_VisibilityLayer,
                parse_OrientationKind: parse_OrientationKind,
                parse_Diagram: parse_Diagram,
                parse_DiagramStyle: parse_DiagramStyle,
                parse_DiagramObject: parse_DiagramObject,
                parse_DiagramObjectPoint: parse_DiagramObjectPoint,
                parse_TextDiagramObject: parse_TextDiagramObject,
                parse_DiagramObjectStyle: parse_DiagramObjectStyle,
                parse_DiagramObjectGluePoint: parse_DiagramObjectGluePoint
            }
        );
    }
);