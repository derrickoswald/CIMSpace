/**
 * Details control for CIM Application
 */
"use strict";

define
(
    ["mustache", "cim", "streetview"],
    /**
     * @summary Details control.
     * @description UI element for displaying element details.
     * @name cimdetails
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
                        <div class="card-text">
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

            on_map_resize (event)
            {
                var map_height = document.getElementById ("map").clientHeight;
                var bottom_margin = 10;
                var well_padding = 20;
                var logo_height = 18;
                var max_height = map_height - bottom_margin - well_padding - logo_height;
                this._container.style.maxHeight = max_height.toString () + "px";
                var guts = this._container.getElementsByClassName ("card-text")[0];
                if (guts)
                    guts.style.maxHeight = (max_height - this._frame_height).toString () + "px";
            }

            close (event)
            {
                this._map.removeControl (this);
            }

            visible ()
            {
                return ("undefined" != typeof (this._container));
            }

            detail_text ()
            {
                var cimmap = this._cimmap;
                var mrid = cimmap.get_selected_feature ();
                var feature = cimmap.get ("Element", mrid);
                if (!feature)
                    return ("");
                var cls = cim.class_map (feature);
                var template = cls.prototype.template ();
                var text = mustache.render (template, JSON.parse (JSON.stringify (feature, (key, value) => (typeof value === 'boolean') ? value.toString () : value)));
                var conducting = cimmap.get ("ConductingEquipment", mrid);
                if (conducting)
                {
                    var terms = cimmap.fetch ("Terminal", terminal => mrid == terminal.ConductingEquipment);
                    if (0 != terms.length)
                    {
                        var connected = terms.map (
                            function (terminal)
                            {
                                var node = terminal.ConnectivityNode;
                                var equipment = [];
                                cimmap.forAll ("Terminal",
                                    terminal =>
                                    {
                                        if (node == terminal.ConnectivityNode) // same node
                                            if (mrid != terminal.ConductingEquipment) // not the same equipment
                                                if (cimmap.get ("ConductingEquipment", terminal.ConductingEquipment)) // and not deleted
                                                    equipment.push (terminal.ConductingEquipment);
                                    }
                                );
                                return ({ terminal: terminal, equipment: equipment });
                            }
                        );
                        if (connected.some (obj => 0 != obj.equipment.length))
                        {
                            text = text + "<div>Connected:</div>\n";
                            for (var i = 0; i < connected.length; i++)
                            {
                                var terminal = connected[i].terminal.mRID;
                                var equipment = connected[i].equipment;
                                if (0 != equipment.length)
                                {
                                    var links = "";
                                    for (var j = 0; j < equipment.length; j++)
                                        links = links + " <a href='#' onclick='require([\"cimmap\"], function(cimmap) { cimmap.select (\"" + equipment[j] + "\"); }); return false;'>" + equipment[j] + "</a>";
                                    text = text + "<div>" + terminal + ": " + links + "</div>\n";
                                }
                            }
                        }
                    }
                }

                // add links to other selected elements
                var mrids = cimmap.get_selected_features ();
                if (null != mrids)
                    if (mrids.some (id => id != mrid))
                    {
                        text = text + "<div>Selected:</div>\n";
                        for (var i = 0; i < mrids.length; i++)
                        {
                            if (mrids[i] != mrid)
                                text = text + "<div><a href='#' onclick='require([\"cimmap\"], function(cimmap) { cimmap.select (\"" + mrids[i] + "\"); }); return false;'>" + mrids[i] + "</a></div>\n";
                        }
                    }

                // add details from simulation or analysis
                var toHTML = cimmap.get_themer ().getTheme ().toHTML;
                if (toHTML)
                {
                    var html = toHTML.bind (cimmap.get_themer ().getTheme ()) (feature);
                    if ("" != html)
                        text = text + "<div>" + cimmap.get_themer ().getTheme ().getTitle () + ":</div>\n" + html;
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
                    var mrid = this._cimmap.get_selected_feature ();
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
                    var mrid = this._cimmap.get_selected_feature ();
                    var feature = this._cimmap.get ("Element", mrid);
                    if (feature.Location)
                    {
                        var location = this._cimmap.get ("Location", feature.Location);
                        if (location.CoordinateSystem == "wgs84")
                        {
                            var id = location.id;
                            var coordinates = [];
                            this._cimmap.forAll ("PositionPoint",
                                point =>
                                {
                                    if (point.Location == id)
                                        coordinates[Number (point.sequenceNumber)] = [point.xPosition, point.yPosition];
                                }
                            );
                            if (0 != coordinates.length)
                            {
                                if ("undefined" == typeof (coordinates[0]))
                                    coordinates = coordinates.slice (1);
                                var self = this;
                                streetview.urlFor (coordinates[0][0], coordinates[0][1],
                                    function (url)
                                    {
                                        if (-1 != url.indexOf ("pano"))
                                        {
                                            var link = "<a href='" + url + "' target='_blank'>StreetView</a>";
                                            self._container.getElementsByClassName ("card-subtitle")[0].innerHTML = link;
                                        }
                                    }
                                );
                            }
                        }
                    }
                }
            }


            /**
             * Connect the selected object at user selected terminal synchronously.
             */
            selection_change (current_feature, current_selection)
            {
                this.render ();
            }
        }

        return (CIMDetails);
    }
)