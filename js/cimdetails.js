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
            }

            onAdd (map)
            {
                this._map = map;
                this._container = document.createElement ("div");
                this._container.className = "mapboxgl-ctrl";
                this._resizer = this.on_map_resize.bind (this);
                this._map.on ("resize", this._resizer);
                return (this._container);
            }

            onRemove ()
            {
                // turn off the resize listener
                if (this._resizer)
                {
                    this._map.off ("resize", this._resizer);
                    this._resizer = null;
                }
                // destroy the container
                this._container.parentNode.removeChild (this._container);
                this._container = null;
                this._map = undefined;
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
                var guts = document.getElementById ("feature_detail_contents");
                if (guts)
                    guts.style.maxHeight = (max_height - this._frame_height).toString () + "px";
            }

            visible ()
            {
                return (null != this._container);
            }

            detail_text ()
            {
                var cim_data = this._cimmap.get_data ();
                var mrid = this._cimmap.get_selected_feature ();
                var feature = cim_data.Element[mrid]
                var cls = cim.class_map (feature);
                var template = cls.prototype.template ();
                var text = mustache.render (template, feature);
                var conducting = cim_data.ConductingEquipment[mrid];
                if ("undefined" != typeof (conducting))
                {
                    var terminals = cim_data.Terminal;
                    var terms = [];
                    for (var property in terminals)
                        if (terminals.hasOwnProperty (property))
                        {
                            var terminal = terminals[property];
                            if (mrid == terminal.ConductingEquipment)
                                terms.push (terminal);
                        }
                    if (0 != terms.length)
                    {
                        var connected = terms.map (
                            function (terminal)
                            {
                                var node = terminal.ConnectivityNode;
                                var equipment = [];
                                for (var property in terminals)
                                    if (terminals.hasOwnProperty (property))
                                    {
                                        var term = terminals[property];
                                        if (term.EditDisposition != "delete")
                                            if (node == term.ConnectivityNode)
                                                if (mrid != term.ConductingEquipment)
                                                    if (cim_data.Element[term.ConductingEquipment].EditDisposition != "delete")
                                                        equipment.push (term.ConductingEquipment);
                                    }
                                return ({ terminal: terminal, equipment: equipment });
                            }
                        );
                        if (connected.some (function (element) { return (0 != element.equipment.length); }))
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
                                        links = links + " <a href='#' onclick='require([\"cimmap\"], function(cimmap) { cimmap.select (\"" + equipment[j] + "\"); return false;})'>" + equipment[j] + "</a>";
                                    text = text + "<div>" + terminal + ": " + links + "</div>\n";
                                }
                            }
                        }
                    }
                }

                var mrids = this._cimmap.get_selected_features ();
                if (null != mrids)
                    if (mrids.some (function (element) { return (element != mrid); }))
                    {
                        text = text + "<div>Selected:</div>\n";
                        for (var i = 0; i < mrids.length; i++)
                        {
                            if (mrids[i] != mrid)
                                text = text + "<div><a href='#' onclick='require([\"cimmap\"], function(cimmap) { cimmap.select (\"" + mrids[i] + "\"); return false;})'>" + mrids[i] + "</a></div>\n";
                        }
                    }

                return (text);
            }

            render ()
            {
                this._container.innerHTML =
                    "<div id='view_frame' class='well'>\n" +
                    "  <h3 id='view_title'>" + this._cimmap.get_selected_feature () + "</h3>\n" +
                    "  <div id='view_contents'>\n" +
                    "    <div id='feature_detail_contents'></div>\n" +
                    "  </div>\n" +
                    "</div>\n";
                this._frame_height = document.getElementById ("view_frame").clientHeight; // frame height with no contents
                document.getElementById ("feature_detail_contents").innerHTML = this.detail_text ()
                this.maybe_streetview ();
                this.on_map_resize ();
            }

            maybe_streetview ()
            {
                if (this._cimmap.show_streetview ())
                {
                    var cim_data = this._cimmap.get_data ();
                    var mrid = this._cimmap.get_selected_feature ();
                    var feature = cim_data.Element[mrid]
                    if (feature.Location)
                    {
                        var cim_data = this._cimmap.get_data ();
                        var location = cim_data.Location[feature.Location];
                        if (location.CoordinateSystem == "wgs84")
                        {
                            var id = location.id;
                            var coordinates = [];
                            var points = cim_data.PositionPoint;
                            for (var property in points)
                                if (points.hasOwnProperty (property))
                                {
                                    var point = points[property];
                                    if (point.Location == id)
                                        coordinates[Number (point.sequenceNumber)] = [point.xPosition, point.yPosition];
                                }
                            if (0 != coordinates.length)
                            {
                                if ("undefined" == typeof (coordinates[0]))
                                    coordinates = coordinates.slice (1);
                                streetview.urlFor (coordinates[0][0], coordinates[0][1],
                                    function (url)
                                    {
                                        if (-1 != url.indexOf ("pano"))
                                        {
                                            var link = "<a href='" + url + "' target='_blank'>StreetView</a>";
                                            document.getElementById ("view_title").innerHTML = mrid + " " + link;
                                        }
                                    }
                                );
                            }
                        }
                    }
                }
            }

        }

        return (CIMDetails);
    }
)