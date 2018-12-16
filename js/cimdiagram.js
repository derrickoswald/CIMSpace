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
                    <div class="card">
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
                this._size = 32;
                this._border = 2;
                this._trafo =
                `
    <circle
         r="21.791887"
         cy="34"
         cx="48"
         id="path817"
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
    <path
         id="path821"
         d="m 48,0 v 12"
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
         id="path823"
         d="m 48,96 v -12"
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <circle
         r="21.791887"
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
         id="ellipse844"
         cx="48"
         cy="62" />
                `;
                this._fuse =
                `
    <path
         id="path2243"
         d="M 48,0 V 27"
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
         id="path2245"
         d="M 48,96 V 68"
         style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <rect
         y="27"
         x="35"
         height="41"
         width="26"
         id="rect837"
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
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
                return ("bottom-right");
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

            getDiagramFor (mrid)
            {
                if (mrid)
                {
                    var text = this._container.getElementsByClassName ("card-text")[0];
                    var footer = this._container.getElementsByClassName ("card-footer")[0];
                    this._diagrams = [];
                    this._cimmap.forAll ("DiagramObject",
                        obj =>
                        {
                            if (obj.IdentifiedObject == mrid)
                                this._diagrams.push (obj.Diagram)
                        }
                    );
                    if (this._diagrams.length > 0)
                    {
                        var diagram =
                            `
                                <div class="app-diagram">
                                    <svg width="600" height="400" style="border: 1px solid black;">
                                        <path stroke-width="1" stroke="black" fill="none"></path>
                                        <circle r="3.5" cy="10" cx="10"></circle>
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
                        text.innerHTML = diagram.replace (`<g class="edges"></g>`,
                            '<g class="PowerTransformer" id="cimdiagram-_2e4a959e-f04f-4d57-86ea-f0deff62d2dc" transform="translate(245,58) rotate(0)"">' +
                            this._trafo +
                            '</g>' +
                            '<g class="Fuse" id="crap" transform="translate(245,152) rotate(0)"">' +
                            this._fuse +
                            '</g>'
                         );
                        var template =
                            `
                                <button id="diagram_save" type="button" class="btn btn-primary">Save</button>
                            `;
                        footer.innerHTML = template;
                        footer.style.display = "block";
                        footer.getElementsByClassName ("btn btn-primary")[0].onclick = this.save.bind (this);
                    }
                    else
                    {
                        // no diagram
                        text.innerHTML = "";
                        footer.innerHTML = "";
                        footer.style.display = "none";
                    }
                }
            }

            /**
             * Connect the selected object at user selected terminal synchronously.
             */
            selection_change (current_feature, current_selection)
            {
                if (null != current_feature)
                    this.getDiagramFor (current_feature);
                else
                {
                    var text = this._container.getElementsByClassName ("card-text")[0];
                    var footer = this._container.getElementsByClassName ("card-footer")[0];
                    // no diagram
                    text.innerHTML = "";
                    footer.innerHTML = "";
                    footer.style.display = "none";
                }
            }
        }

        return (CIMDiagram);
    }
);
