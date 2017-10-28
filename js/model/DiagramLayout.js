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
            /**
             * For 2D diagrams, a positive orientation will result in X values increasing from left to right and Y values increasing from bottom to top.
             *
             * This is also known as a right hand orientation.
             *
             */
            base.parse_element (/<cim:OrientationKind.positive>([\s\S]*?)<\/cim:OrientationKind.positive>/g, obj, "positive", base.to_string, sub, context);

            /**
             * For 2D diagrams, a negative orientation gives the left-hand orientation (favoured by computer graphics displays) with X values increasing from left to right and Y values increasing from top to bottom.
             *
             * This is also known as a left hand orientation.
             *
             */
            base.parse_element (/<cim:OrientationKind.negative>([\s\S]*?)<\/cim:OrientationKind.negative>/g, obj, "negative", base.to_string, sub, context);

            bucket = context.parsed.OrientationKind;
            if (null == bucket)
                context.parsed.OrientationKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The text that is displayed by this text diagram object.
             *
             */
            base.parse_element (/<cim:TextDiagramObject.text>([\s\S]*?)<\/cim:TextDiagramObject.text>/g, obj, "text", base.to_string, sub, context);

            bucket = context.parsed.TextDiagramObject;
            if (null == bucket)
                context.parsed.TextDiagramObject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The sequence position of the point, used for defining the order of points for diagram objects acting as a polyline or polygon with more than one point.
             *
             */
            base.parse_element (/<cim:DiagramObjectPoint.sequenceNumber>([\s\S]*?)<\/cim:DiagramObjectPoint.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);

            /**
             * The X coordinate of this point.
             *
             */
            base.parse_element (/<cim:DiagramObjectPoint.xPosition>([\s\S]*?)<\/cim:DiagramObjectPoint.xPosition>/g, obj, "xPosition", base.to_float, sub, context);

            /**
             * The Y coordinate of this point.
             *
             */
            base.parse_element (/<cim:DiagramObjectPoint.yPosition>([\s\S]*?)<\/cim:DiagramObjectPoint.yPosition>/g, obj, "yPosition", base.to_float, sub, context);

            /**
             * The Z coordinate of this point.
             *
             */
            base.parse_element (/<cim:DiagramObjectPoint.zPosition>([\s\S]*?)<\/cim:DiagramObjectPoint.zPosition>/g, obj, "zPosition", base.to_float, sub, context);

            /**
             * The diagram object with which the points are associated.
             *
             */
            base.parse_attribute (/<cim:DiagramObjectPoint.DiagramObject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramObject", sub, context, true);

            /**
             * The 'glue' point to which this point is associated.
             *
             */
            base.parse_attribute (/<cim:DiagramObjectPoint.DiagramObjectGluePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramObjectGluePoint", sub, context, true);

            bucket = context.parsed.DiagramObjectPoint;
            if (null == bucket)
                context.parsed.DiagramObjectPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Coordinate system orientation of the diagram.
             *
             */
            base.parse_element (/<cim:Diagram.orientation>([\s\S]*?)<\/cim:Diagram.orientation>/g, obj, "orientation", base.to_string, sub, context);

            /**
             * X coordinate of the first corner of the initial view.
             *
             */
            base.parse_element (/<cim:Diagram.x1InitialView>([\s\S]*?)<\/cim:Diagram.x1InitialView>/g, obj, "x1InitialView", base.to_float, sub, context);

            /**
             * X coordinate of the second corner of the initial view.
             *
             */
            base.parse_element (/<cim:Diagram.x2InitialView>([\s\S]*?)<\/cim:Diagram.x2InitialView>/g, obj, "x2InitialView", base.to_float, sub, context);

            /**
             * Y coordinate of the first corner of the initial view.
             *
             */
            base.parse_element (/<cim:Diagram.y1InitialView>([\s\S]*?)<\/cim:Diagram.y1InitialView>/g, obj, "y1InitialView", base.to_float, sub, context);

            /**
             * Y coordinate of the second corner of the initial view.
             *
             */
            base.parse_element (/<cim:Diagram.y2InitialView>([\s\S]*?)<\/cim:Diagram.y2InitialView>/g, obj, "y2InitialView", base.to_float, sub, context);

            /**
             * A Diagram may have a DiagramStyle.
             *
             */
            base.parse_attribute (/<cim:Diagram.DiagramStyle\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramStyle", sub, context, true);

            bucket = context.parsed.Diagram;
            if (null == bucket)
                context.parsed.Diagram = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The drawing order for this layer.
             *
             * The higher the number, the later the layer and the objects within it are rendered.
             *
             */
            base.parse_element (/<cim:VisibilityLayer.drawingOrder>([\s\S]*?)<\/cim:VisibilityLayer.drawingOrder>/g, obj, "drawingOrder", base.to_string, sub, context);

            bucket = context.parsed.VisibilityLayer;
            if (null == bucket)
                context.parsed.VisibilityLayer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The drawing order of this element.
             *
             * The higher the number, the later the element is drawn in sequence. This is used to ensure that elements that overlap are rendered in the correct order.
             *
             */
            base.parse_element (/<cim:DiagramObject.drawingOrder>([\s\S]*?)<\/cim:DiagramObject.drawingOrder>/g, obj, "drawingOrder", base.to_string, sub, context);

            /**
             * Defines whether or not the diagram objects points define the boundaries of a polygon or the routing of a polyline.
             *
             * If this value is true then a receiving application should consider the first and last points to be connected.
             *
             */
            base.parse_element (/<cim:DiagramObject.isPolygon>([\s\S]*?)<\/cim:DiagramObject.isPolygon>/g, obj, "isPolygon", base.to_boolean, sub, context);

            /**
             * The offset in the X direction.
             *
             * This is used for defining the offset from centre for rendering an icon (the default is that a single point specifies the centre of the icon).
             *
             */
            base.parse_element (/<cim:DiagramObject.offsetX>([\s\S]*?)<\/cim:DiagramObject.offsetX>/g, obj, "offsetX", base.to_float, sub, context);

            /**
             * The offset in the Y direction.
             *
             * This is used for defining the offset from centre for rendering an icon (the default is that a single point specifies the centre of the icon).
             *
             */
            base.parse_element (/<cim:DiagramObject.offsetY>([\s\S]*?)<\/cim:DiagramObject.offsetY>/g, obj, "offsetY", base.to_float, sub, context);

            /**
             * Sets the angle of rotation of the diagram object.
             *
             * Zero degrees is pointing to the top of the diagram.  Rotation is clockwise.
             *
             */
            base.parse_element (/<cim:DiagramObject.rotation>([\s\S]*?)<\/cim:DiagramObject.rotation>/g, obj, "rotation", base.to_string, sub, context);

            /**
             * A diagram object is part of a diagram.
             *
             */
            base.parse_attribute (/<cim:DiagramObject.Diagram\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Diagram", sub, context, true);

            /**
             * A diagram object has a style associated that provides a reference for the style used in the originating system.
             *
             */
            base.parse_attribute (/<cim:DiagramObject.DiagramObjectStyle\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiagramObjectStyle", sub, context, true);

            /**
             * The domain object to which this diagram object is associated.
             *
             */
            base.parse_attribute (/<cim:DiagramObject.IdentifiedObject\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "IdentifiedObject", sub, context, true);

            bucket = context.parsed.DiagramObject;
            if (null == bucket)
                context.parsed.DiagramObject = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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