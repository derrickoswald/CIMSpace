/**
 * Details control for CIM Application
 */
"use strict";

define
(
    ["lib/mustache", "cim", "streetview"],
    /**
     * @summary Details control.
     * @description UI element for displaying element details.
     * @exports cimdetails
     * @version 1.0
     */
    function (mustache, cim, streetview)
    {
        class CIMDetails
        {
            constructor (cimmap)
            {
                this._cimmap = cimmap;
                this._template =
                    `
                    <div class="card">
                      <div class="card-body" style="min-width:200px;">
                        <h5 class="card-title">
                          <span class="info_title">Info</span>
                          <button class="close" type="button" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </h5>
                        <h6 class="card-subtitle mb-2"></h6>
                        <div id='view_contents' class="card-text">
                        </div>
                      </div>
                    </div>
                    `;
            }

            onAdd (map)
            {
                this._map = map;
                this._container = document.createElement ("div");
                this._container.className = "mapboxgl-ctrl";
                this._container.innerHTML = this._template;
                this._container.getElementsByClassName ("close")[0].onclick = this.close.bind (this);
                this._resizer = this.on_map_resize.bind (this);
                this._map.on ("resize", this._resizer);
                this._cimmap.add_feature_listener (this);
                return (this._container);
            }

            onRemove ()
            {
                this._cimmap.remove_feature_listener (this);
                // turn off the resize listener
                if (this._resizer)
                {
                    this._map.off ("resize", this._resizer);
                    delete this._resizer;
                }
                // destroy the container
                this._container.parentNode.removeChild (this._container);
                delete this._container;
                delete this._map;
            }

            getDefaultPosition ()
            {
                return ("top-left");
            }

            on_map_resize ()
            {
                const map_height = document.getElementById ("map").clientHeight;
                const bottom_margin = 10;
                const well_padding = 20;
                const logo_height = 18;
                const max_height = map_height - bottom_margin - well_padding - logo_height;
                this._container.style.maxHeight = max_height.toString () + "px";
                const guts = this._container.getElementsByClassName ("card-text")[0];
                if (guts)
                    guts.style.maxHeight = (max_height - this._frame_height).toString () + "px";
            }

            close ()
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

            detail_text ()
            {
                const cimmap = this._cimmap;
                const mrid = cimmap.get_selected_feature ();
                const feature = cimmap.get ("Element", mrid);
                if (!feature)
                    return ("");
                const cls = cim.class_map (feature);
                const template = cls.prototype.template ();
                let text = mustache.render (template, JSON.parse (JSON.stringify (feature, (key, value) => (typeof value === 'boolean') ? value.toString () : value)));
                const conducting = cimmap.get ("ConductingEquipment", mrid);
                if (conducting)
                {
                    const terms = cimmap.fetch ("Terminal", terminal => mrid === terminal.ConductingEquipment);
                    if (0 !== terms.length)
                    {
                        const connected = terms.map (
                            function (terminal)
                            {
                                const node = terminal.ConnectivityNode;
                                const equipment = [];
                                if (null != node)
                                    cimmap.forAll ("Terminal",
                                        terminal =>
                                        {
                                            if (node === terminal.ConnectivityNode) // same node
                                                if (mrid !== terminal.ConductingEquipment) // not the same equipment
                                                    if (cimmap.get ("ConductingEquipment", terminal.ConductingEquipment)) // and not deleted
                                                        equipment.push (terminal.ConductingEquipment);
                                        }
                                    );
                                return ({ terminal: terminal, equipment: equipment });
                            }
                        );
                        if (connected.some (obj => 0 !== obj.equipment.length))
                        {
                            text = text + "<div>Connected:</div>\n";
                            for (let i = 0; i < connected.length; i++)
                            {
                                const terminal = connected[i].terminal.mRID;
                                const equipment = connected[i].equipment;
                                if (0 !== equipment.length)
                                {
                                    let links = "";
                                    for (let j = 0; j < equipment.length; j++)
                                        links = links + " <a href='#' onclick='require([\"cimmap\"], function(cimmap) { cimmap.select (\"" + equipment[j] + "\"); }); return false;'>" + equipment[j] + "</a>";
                                    text = text + "<div>" + terminal + ": " + links + "</div>\n";
                                }
                            }
                        }
                    }
                }

                // add links to other selected elements
                // other features in the current selection are provided as links that make them the current feature
                const mrids = cimmap.get_selected_features ();
                if (null != mrids)
                    if (mrids.some (id => id !== mrid))
                    {
                        text = text + "<div>Selected:</div>\n";
                        for (let i = 0; i < mrids.length; i++)
                        {
                            if (mrids[i] !== mrid)
                                text = text + "<div><a href='#' onclick='require([\"cimmap\"], function(cimmap) { cimmap.select (\"" + mrids[i] + "\"); }); return false;'>" + mrids[i] + "</a></div>\n";
                        }
                    }

                // add details from simulation or analysis
                const theme = cimmap.get_themer ().getTheme ();
                const toHTML = theme.toHTML;
                if (toHTML)
                {
                    const html = toHTML.bind (theme) (feature);
                    if ("" !== html)
                        text = text + "<div>" + theme.getTitle () + ":</div>\n" + html;
                }

                return (text);
            }

            render ()
            {
                if (this.visible ())
                {
                    this._container.getElementsByClassName ("info_title")[0].innerHTML = "Info";
                    this._container.getElementsByClassName ("card-text")[0].innerHTML = "";
                    this._container.getElementsByClassName ("card-subtitle")[0].innerHTML = "";
                    const mrid = this._cimmap.get_selected_feature ();
                    if (mrid)
                    {
                        this._container.getElementsByClassName ("info_title")[0].innerHTML = mrid;
                        this._frame_height = this._container.getElementsByClassName ("card")[0].clientHeight; // frame height with no contents
                        this._container.getElementsByClassName ("card-text")[0].innerHTML = this.detail_text ();
                        this.maybe_streetview ();
                        this.on_map_resize ();
                    }
                }
            }

            maybe_streetview ()
            {
                if (this._cimmap.show_streetview ())
                {
                    const mrid = this._cimmap.get_selected_feature ();
                    const feature = this._cimmap.get ("Element", mrid);
                    if (feature.Location)
                    {
                        const location = this._cimmap.get ("Location", feature.Location);
                        if (location.CoordinateSystem === "wgs84")
                        {
                            const id = location.id;
                            let coordinates = [];
                            this._cimmap.forAll ("PositionPoint",
                                point =>
                                {
                                    if (point.Location === id)
                                        coordinates[Number (point.sequenceNumber)] = [point.xPosition, point.yPosition];
                                }
                            );
                            if (0 !== coordinates.length)
                            {
                                if ("undefined" == typeof (coordinates[0]))
                                    coordinates = coordinates.slice (1);
                                streetview.urlFor (coordinates[0][0], coordinates[0][1]).then (
                                    (url) =>
                                    {
                                        if (-1 !== url.indexOf ("pano"))
                                            this._container.getElementsByClassName ("card-subtitle")[0].innerHTML =
                                                `<a href='${url}' target='_blank'>StreetView</a>`;
                                    }
                                );
                            }
                        }
                    }
                }
            }


            /**
             * Display information about the selected object.
             */
            selection_change (current_feature, current_selection)
            {
                this.render ();
            }
        }

        return (CIMDetails);
    }
);