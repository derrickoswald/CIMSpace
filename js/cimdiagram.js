/**
 * Diagram functions for CIM Application
 */
"use strict";
define
(
    ["cim"],
    /**
     * @summary Diagram display and editing functions.
     * @description Edit cim:Diagram objects.
     * @name cimdiagram
     * @exports cimdiagram
     * @version 1.0
     */
    function (cim)
    {
        class CIMDiagram
        {
            constructor (cimmap)
            {
                this._cimmap = cimmap;
                this._template =
                    `
                    <div class="card card_resizeable">
                      <div class="card-body" style="min-width:200px;">
                        <h5 class="card-title">Diagram
                            <button class="close" type="button" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </h5>
                        <div class="card-text"></div>
                        <div id="diagram_footer" class="card-footer" style="display: none;">
                        </div>
                      </div>
                    </div>
                    `;
                this._SIZEX = 600;
                this._SIZEY = 400;
                this._size = 32;
                this._border = 2;
                this._alternate_junction =
                `
    <circle
         r="32"
         cy="48"
         cx="48"
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
    <path
         d="m 25,71 46,-46"
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 71,71 -46,-46" />
                `;
                this._connector =
                `
    <path
         d="M 47.999847,2.8399732 V 51.256514"
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
         d="m 27.7865,51.483334 v 25.17764 l 20.213347,18 20.213345,-18 v -25.17764 z"
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
                `;
                this._distribution_box =
                `
    <rect
         y="13.5"
         x="8"
         height="69"
         width="80"
         id="rect834"
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
                `;
                this._energy_consumer =
                `
    <path
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 48,0 V 61" />
    <path
         style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
         d="M 67,61 57.5,78.5 48,96 38.5,78.5 29,61 h 19 z" />
                `;
                this._fuse =
                `
    <path
         d="M 48,0 V 27"
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
         d="M 48,96 V 68"
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <rect
         y="27"
         x="35"
         height="41"
         width="26"
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
                `;
                this._junction =
                `
    <path
         d="m 24,72 48,-48"
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 72,72 -48,-48" />
                `;
                this._street_light =
                `
    <circle
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
         cx="48"
         cy="48"
         r="32" />
    <g>
        <path
             d="M 80,47 H 96"
             style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <path
             d="M 0,47 H 16"
             style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <path
             d="M 48,16 V 0"
             style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <path
             d="M 48,96 V 80"
             style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    </g>
    <g>
        <path
             d="M 70.707107,71.479184 82.020815,82.792893"
             style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <path
             d="M 13.914213,13.979185 25.227922,25.292893"
             style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <path
             d="M 70.707107,25.292893 82.020815,13.979185"
             style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <path
             d="M 15.207107,82.792893 26.520815,71.479185"
             style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    </g>
                `;
                this._substation =
                `
    <rect
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
         width="80"
         height="69"
         x="8"
         y="21.5" />
    <path
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 3,21 48,3 93,21" />
                `;
                this._switch =
                `
    <path
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 48,0 V 16" />
    <path
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 48,96 V 80" />
    <path
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 49,72 73,24" />
    <circle
         cy="20"
         cx="48"
         style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:6.19181442;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
         r="5" />
    <circle
         r="5"
         style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:6.19181442;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
         cx="48"
         cy="76" />
                `;
                this._transformer =
                `
    <circle
         r="21.791887"
         cy="34"
         cx="48"
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
    <path
         d="m 48,0 v 12"
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
         d="m 48,96 v -12"
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <circle
         r="21.791887"
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
         cx="48"
         cy="62" />
                `;
                this._transformer_station =
                `
    <rect
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
         width="80"
         height="69"
         x="7.9996328"
         y="21.5" />
    <path
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 3,21 48,3 93,21" />
    <circle
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
         cx="48.000004"
         cy="47.25"
         r="13.619929" />
    <path
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 48,26 v 7.5" />
    <path
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="M 48,86 V 78.499996" />
    <circle
         cy="64.75"
         cx="48.000004"
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
         r="13.619929" />
                `;
            }

            onAdd (map)
            {
                this._map = map;
                this._container = document.createElement ("div");
                this._container.className = "mapboxgl-ctrl";
                this._container.innerHTML = this._template;
                this._container.getElementsByClassName ("close")[0].onclick = this.close.bind (this);
                this._cimmap.add_feature_listener (this);
                return (this._container);
            }

            onRemove ()
            {
                this._cimmap.remove_feature_listener (this);
                this._container.parentNode.removeChild (this._container);
                delete this._container;
                delete this._map;
            }

            getDefaultPosition ()
            {
                return ("bottom-left");
            }

            close (event)
            {
                this._map.removeControl (this);
            }

            visible ()
            {
                return ("undefined" != typeof (this._container));
            }

            initialize ()
            {
                if (this._cimmap.get_selected_feature ())
                    this.selection_change (this._cimmap.get_selected_feature (), this._cimmap.get_selected_features ());
            }

            save ()
            {
                alert ("save " + this._diagrams.toString ());
            }

            clearDiagram ()
            {
                var text = this._container.getElementsByClassName ("card-text")[0];
                var footer = this._container.getElementsByClassName ("card-footer")[0];
                text.innerHTML = "";
                footer.innerHTML = "";
                footer.style.display = "none";
            }

            renderObject (diagram, object, points, element, style)
            {
                var ret = ""
                if (object.isPolygon)
                {
                    var l = points.length - 1;
                    if (l > 2)
                    {
                        if ((points[0].xPosition != points[l].xPosition) || (points[0].yPosition != points[l].yPosition))
                            points.push (points[0]);
                        var coordinates = points.map (point => "" + point.xPosition + "," + point.yPosition);
                        ret =
                            "<g class='Polygon' id='cimdiagram-" + element.id + "'>" +
                            "<path d='M " + coordinates.join (" ") + " Z' style='fill:#f93333;fill-opacity:0.1;stroke:none;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' />" +
                            "</g>";
                    }
                }
                else
                {
                    var x = points[0].xPosition;
                    var y = points[0].yPosition;
                    switch (element.cls)
                    {
                        case "ACLineSegment":
                            var offsetx = this._diagram_extents[0][0];
                            var offsety = this._diagram_extents[1][1];
                            var scalex = this._SIZEX / (this._diagram_extents[1][0] - this._diagram_extents[0][0]);
                            var scaley = this._SIZEY / (this._diagram_extents[0][1] - this._diagram_extents[1][1]);
                            if (Math.abs (scalex) < Math.abs (scaley))
                                scaley = Math.abs (scalex) * Math.sign (scaley);
                            else
                                scalex = Math.abs (scaley) * Math.sign (scalex);
                            var coordinates = points.map (point => "" + (point.xPosition - offsetx) * scalex + "," + (point.yPosition - offsety) * scaley);
                            ret =
                                "<g class='Line' id='cimdiagram-" + element.id + "'>" +
                                "<path d='M " + coordinates.join (" ") + "' style='stroke:#000000;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none'>" +
                                "</g>";
                            break;
                        case "PowerTransformer":
                            ret =
                                "<g class='PowerTransformerIcon' id='cimdiagram-" + element.id + "' transform='translate(" + x + "," + y + ") rotate(0)'>" +
                                this._transformer +
                                "</g>";
                            break;
                        case "Fuse":
                            ret =
                                "<g class='FuseIcon' id='cimdiagram-" + element.id + "' transform='translate(" + x + "," + y + ") rotate(0)'>" +
                                this._fuse +
                                "</g>";
                            break;
                        case "Switch":
                        case "Cut":
                        case "Disconnector":
                        case "GroundDisconnector":
                        case "Jumper":
                        case "MktSwitch":
                        case "ProtectedSwitch":
                        case "Breaker":
                        case "LoadBreakSwitch":
                        case "Recloser":
                        case "Sectionaliser":
                            ret =
                                "<g class='SwitchIcon' id='cimdiagram-" + element.id + "' transform='translate(" + x + "," + y + ") rotate(0)'>" +
                                this._switch +
                                "</g>";
                            break;
                        case "EnergyConsumer":
                            ret =
                                "<g class='EnergyConsumerIcon' id='cimdiagram-" + element.id + "' transform='translate(" + x + "," + y + ") rotate(0)'>" +
                                (element.PSRType == "PSRType_StreetLight" ? this._street_light : this._energy_consumer) +
                                "</g>";
                            break;
                        case "Connector":
                            ret =
                                "<g class='ConnectorIcon' id='cimdiagram-" + element.id + "' transform='translate(" + x + "," + y + ") rotate(0)'>" +
                                this._connector +
                                "</g>";
                            break;
                        case "Junction":
                            ret =
                                "<g class='JunctionIcon' id='cimdiagram-" + element.id + "' transform='translate(" + x + "," + y + ") rotate(0)'>" +
                                this._alternate_junction +
                                "</g>";
                            break;
                        case "BusbarSection":
                            ret =
                                "<g class='BusbarSectionIcon' id='cimdiagram-" + element.id + "' transform='translate(" + x + "," + y + ") rotate(0)'>" +
                                this._junction +
                                "</g>";
                            break;
                        default:
                            ret =
                                "<g class='DefaultIcon' id='cimdiagram-" + element.id + "' transform='translate(" + x + "," + y + ") rotate(0)'>" +
                                this._junction +
                                "</g>";
                            break;
                    }
                }
                return (ret);
            }

            renderDiagram (diagram, objects, points)
            {
                var text = this._container.getElementsByClassName ("card-text")[0];
                var footer = this._container.getElementsByClassName ("card-footer")[0];

                var svgs = objects.map (
                    (obj, index) =>
                    {
                        var element = this._cimmap.get ("Element", obj.IdentifiedObject);
                        var style = this._cimmap.get ("DiagramObjectStyle", obj.DiagramObjectStyle);
                        return (this.renderObject (diagram, obj, points[index], element, style));
                    }
                );
                var text_template =
                    `
                        <div class="app-diagram">
                            <svg width="` + this._SIZEX + `" height="` + this._SIZEY + `" style="border: 1px solid black;">
                                <path stroke-width="1" stroke="black" fill="none"></path>
                                <g class="brush"></g>
                                <g class="diagram-grid"></g>
                                <g class="diagram-highlight">
                                    <line class="highlight-x"></line>
                                    <line class="highlight-y"></line>
                                </g>
                                <g class="diagram">
                                    <g class="edges"></g>
                                </g>
                            </svg>
                        </div>
                    `;
                text.innerHTML = text_template.replace (`<g class="edges"></g>`, svgs.join ("\n"));
                var footer_template =
                    `
                        <button id="diagram_save" type="button" class="btn btn-primary">Save</button>
                    `;
                footer.innerHTML = footer_template;
                footer.style.display = "block";
                footer.getElementsByClassName ("btn btn-primary")[0].onclick = this.save.bind (this);
            }

            drawDiagram (diagram)
            {
                this._diagram_objects = [];
                this._cimmap.forAll ("DiagramObject",
                    obj =>
                    {
                        if (obj.Diagram == diagram.id)
                            this._diagram_objects.push (obj)
                    }
                );
                this._diagram_objects.sort ((a, b) => a.drawingOrder - b.drawingOrder);
                // ToDo: should maybe do one pass over points instead of one pass for each diagram object
                this._diagram_points = this._diagram_objects.map (
                    obj =>
                    {
                        var points = [];
                        this._cimmap.forAll ("DiagramObjectPoint",
                            point =>
                            {
                                if (point.DiagramObject == obj.id)
                                    points.push (point);
                            }
                        );
                        points.sort ((a, b) => a.sequenceNumber - b.sequenceNumber);
                        return (points);
                    }
                );
                // ToDo: should only do this once when the diagram is loaded
                var xmin = Number.MAX_VALUE;
                var xmax = Number.MIN_VALUE;
                var ymin = Number.MAX_VALUE;
                var ymax = Number.MIN_VALUE;
                this._cimmap.forAll ("DiagramObjectPoint",
                    point =>
                    {
                        if (point.xPosition < xmin) xmin = point.xPosition;
                        if (point.xPosition > xmax) xmax = point.xPosition;
                        if (point.yPosition < ymin) ymin = point.yPosition;
                        if (point.yPosition > ymax) ymax = point.yPosition;
                    }
                );
                this._diagram_extents = [[xmin, ymin], [xmax, ymax]];
                this.renderDiagram (diagram, this._diagram_objects, this._diagram_points);
            }

            getDiagramsFor (mrid)
            {
                this._diagrams = [];
                if (mrid)
                {
                    this._cimmap.forAll ("Diagram",
                        obj =>
                        {
                            if (obj.IdentifiedObject == mrid)
                                if (!this._diagrams.includes (mrid))
                                    this._diagrams.push (mrid)
                        }
                    );
                    this._cimmap.forAll ("DiagramObject",
                        obj =>
                        {
                            if (obj.IdentifiedObject == mrid)
                                if (!this._diagrams.includes (obj.Diagram))
                                    this._diagrams.push (obj.Diagram)
                        }
                    );
                    this._diagrams = this._diagrams.map (x => this._cimmap.get ("Diagram", x));
                }
                return (this._diagrams);
            }

            /**
             * Connect the selected object at user selected terminal synchronously.
             */
            selection_change (current_feature, current_selection)
            {
                if (null != current_feature)
                {
                    var diagrams = this.getDiagramsFor (current_feature);
                    if (diagrams.length > 0)
                        this.drawDiagram (diagrams[0]);
                    else
                        this.clearDiagram ();
                }
                else
                    this.clearDiagram ();
            }
        }

        return (CIMDiagram);
    }
);
