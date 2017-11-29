/**
 * Edit control for CIM Application
 */
"use strict";

define
(
    ["mustache", "model/Common", "model/Wires", "themes/layers"],
    /**
     * @summary Edit control.
     * @description UI element for editing
     * @name cimedit
     * @exports cimedit
     * @version 1.0
     */
    function (mustache, Common, Wires, layers)
    {
        class CIMEdit
        {
            constructor (cimmap)
            {
                this._cimmap = cimmap;
                this._onMap = false;
                this._template =
                "<div class='well'>\n" +
                "  <h3>Edit</h3>\n" +
                "    <div class='form-group'>\n" +
                "      <label for='cable_type'>Cable</label>\n" +
                "      <select id='cable_type' class='form-control'>\n" +
                "{{#cabletypes}}\n" +
                "              <option value='{{mRID}}'>{{name}}</option>\n" +
                "{{/cabletypes}}\n" +
                "      </select>\n" +
                "    </div>\n" +
                "  <button id='add_cable' type='button' class='btn btn-primary'>Add cable</button>\n" +
                "  <button id='remove_cable' type='button' class='btn btn-success'>Remove cable</button>\n" +
                "</div>\n";
                this._features = [];
            }

            onAdd (map)
            {
                this._map = map;
                this._container = document.createElement ("div");
                this._container.className = "mapboxgl-ctrl";
                if (null != this._cimmap.get_data ())
                {
                    var infos = this._cimmap.get_data ().WireInfo;
                    var cabletypes = [];
                    for (var property in infos)
                        if (infos.hasOwnProperty (property))
                        {
                            var info = infos[property];
                            cabletypes.push ({ mRID: info.mRID, name: info.name });
                        }
                    this._container.innerHTML = mustache.render (this._template, { cabletypes: cabletypes });
                    this._container.getElementsByClassName ("btn btn-primary")[0].onclick = this.add_cable.bind (this);
                    this._container.getElementsByClassName ("btn btn-success")[0].onclick = this.remove_cable.bind (this);
                }
                else
                {
                    this._container.innerHTML = mustache.render (this._template, { cabletypes: [] });
                    this._container.getElementsByClassName ("btn btn-primary")[0].disabled=true;
                    this._container.getElementsByClassName ("btn btn-success")[0].disabled=true;
                }
                if (null == this._map.getSource ("edit lines"))
                    this.add_layers ();
                this._onMap = true;
                return (this._container);
            }

            onRemove ()
            {
                this._container.parentNode.removeChild (this._container);
                this._map = undefined;
                this._onMap = false;
            }

            getDefaultPosition ()
            {
                return ("bottom-left");
            }

            visible ()
            {
                return (this._onMap);
            }

            refresh ()
            {
                var options =
                    {
                        show_internal_features: this._cimmap.show_internal_features (),
                        zero_based_point_sequence: this._cimmap.zero_based_point_sequence (),
                        editing: true
                    };
                var geo = this._cimmap.get_themer ().getTheme ().make_geojson (this._cimmap.get_data (), options);
                this._map.getSource ("edit points").setData (geo.points);
                this._map.getSource ("edit lines").setData (geo.lines);
                // update the extents
                var extents =  this._cimmap.get_themer ().getExtents ();
                var old_extents = this._cimmap.get_extents ();
                var new_extents =
                {
                    xmin: Math.min (extents.xmin, old_extents.xmin),
                    ymin: Math.min (extents.ymin, old_extents.ymin),
                    xmax: Math.max (extents.xmax, old_extents.xmax),
                    ymax: Math.max (extents.ymax, old_extents.ymax)
                };
                this._cimmap.set_extents (new_extents);
            }

            popup (html, position)
            {
                var lnglat = position || this._map.getCenter ();
                var popup = new mapboxgl.Popup ();
                popup.setLngLat (lnglat)
                popup.setHTML (html)
                popup.addTo (this._map);
            }

            digitize_line_mousedown_listener (lines, callback, event)
            {
                var feature = lines.features[lines.features.length - 1];
                var coordinates = feature.geometry.coordinates;
                var lnglat = event.lngLat;
                var buttons = event.originalEvent.buttons;
                var leftbutton = 0 != (buttons & 1);
                var rightbutton = 0 != (buttons & 2);

                if (leftbutton)
                {
                    // ToDo: snap to point or end of line
                    coordinates.push ([lnglat.lng, lnglat.lat]);
                    if (coordinates.length > 2)
                        this._map.getSource ("edit lines").setData (lines);
                }
                else if (rightbutton)
                {
                    lines.features.length = lines.features.length - 1;
                    callback (feature);
                }
            }

            digitize_line_mousemove_listener (lines, event)
            {
                var feature = lines.features[lines.features.length - 1];
                var coordinates = feature.geometry.coordinates;
                var lnglat = event.lngLat;
                // ToDo: snap to point or end of line
                coordinates.push ([lnglat.lng, lnglat.lat]);
                if (coordinates.length >= 2)
                    this._map.getSource ("edit lines").setData (lines);
                coordinates.length = coordinates.length - 1;
            }

            digitize_line (callback)
            {
                // get the current GeoJSON
                var options =
                    {
                        show_internal_features: this._cimmap.show_internal_features (),
                        zero_based_point_sequence: this._cimmap.zero_based_point_sequence (),
                        editing: true
                    };
                var geo = this._cimmap.get_themer ().getTheme ().make_geojson (this._cimmap.get_data (), options);
                var lines = geo.lines;

                // add an empty line
                lines.features.push
                (
                    {
                        type : "Feature",
                        geometry :
                        {
                            type : "LineString",
                            coordinates : []
                        }
                    }
                );

                var mousedown = this.digitize_line_mousedown_listener.bind (this, lines, cb.bind (this));
                var mousemove = this.digitize_line_mousemove_listener.bind (this, lines);
                function cb (feature)
                {
                    this._map.off ("mousedown", mousedown);
                    this._map.off ("mousemove", mousemove);
                    this._cimmap.add_listeners ();
                    callback (feature);
                }

                // set up our listeners
                this._cimmap.remove_listeners ();
                this._map.on ("mousedown", mousedown);
                // handle mouse movement
                this._map.on ("mousemove", mousemove);

                // pop up a prompt and wait
                this.popup ("<h1>Digitize linear geometry<br>Right-click to finsh</h1>");
            }

            make_cable (feature)
            {
                var mRID = "ACLineSegment" + (~~(1e6 * Math.random ())).toString ();
                var cable_type = document.getElementById ("cable_type").value;
                var cables = this._cimmap.get_data ().ACLineSegment;
                // cheat here and get an existing cable as a prototype
                var proto = null;
                for (var property in cables)
                    if (cables.hasOwnProperty (property))
                    {
                        var cable = cables[property];
                        if (cable.AssetDatasheet == cable_type)
                        {
                            proto = Object.assign ({}, cable);
                            break;
                        }
                    }
                if (null != proto)
                {
                    var location =
                    {
                        EditDisposition: "new",
                        CoordinateSystem: "wgs84",
                        cls: "Location",
                        id: mRID + "_location",
                        mRID: mRID + "_location",
                        type: "geographic"
                    };
                    proto.id = mRID;
                    proto.mRID = mRID;
                    proto.EditDisposition = "new";
                    delete proto.aliasName;
                    delete proto.length;
                    proto.Location = location.id;
                    var new_elements =
                        [
                            new Wires.ACLineSegment (proto, this._cimmap.get_data ()),
                            new Common.Location (location, this._cimmap.get_data ()),
                        ];
                    for (var i = 0; i < feature.geometry.coordinates.length; i++)
                    {
                        var lnglat = feature.geometry.coordinates[i];
                        new_elements.push (
                            new Common.PositionPoint (
                                {
                                    EditDisposition: "new",
                                    Location: location.id,
                                    cls: "PositionPoint",
                                    id: mRID + "_location_p" + (i + 1).toString (),
                                    sequenceNumber: i.toString (), // mistake: PositionPoint sequenceNumbers are not zero-based
                                    xPosition: lnglat[0].toString (),
                                    yPosition: lnglat[1].toString ()
                                },
                                this._cimmap.get_data ()
                            )
                        );
                    }

                    // add it to our features
                    this._features = this._features.concat (new_elements);
                    this.refresh ();
                }
                else
                    alert ("no prototype cable found");
            }

            add_cable (event)
            {
                this.digitize_line (this.make_cable.bind (this));
            }

            remove_cable (event)
            {
                var selected = this._cimmap.get_selected_feature ();
                if (null == selected)
                {
                    for (var i = 0; i < this._features.length; i++)
                        this._features[i].remove (this._cimmap.get_data ());
                    this._features = [];
                }
                else
                {
                    for (var i = 0; i < this._features.length; i++)
                        if (this._features[i]._id.startsWith (selected))
                            this._features[i].remove (this._cimmap.get_data ());
                    this._features = this._features.filter (item => !item._id.startsWith (selected));
                    this._cimmap.select (null);
                }
                this.refresh ();
            }

            add_layers ()
            {
                // the lines GeoJSON
                var lines =
                {
                    "type" : "FeatureCollection",
                    "features" : []
                };
                // the points GeoJSON
                var points =
                {
                    "type" : "FeatureCollection",
                    "features" : []
                };

                // update the map
                this._map.addSource
                (
                    "edit lines",
                    {
                        type: "geojson",
                        data: lines,
                        maxzoom: 25
                    }
                );

                this._map.addSource
                (
                    "edit points",
                    {
                        type: "geojson",
                        data: points,
                        maxzoom: 25
                    }
                );

                // lines 3 pixels wide
                this._map.addLayer (layers.line_layer ("edit_lines", "edit lines" , "rgb(255, 0, 0)"));
                this._map.addLayer (layers.line_layer ("edit_lines_highlight", "edit lines", "rgb(255, 255, 0)", ["==", "mRID", ""]));

                // simple circle from 14 to 17
                this._map.addLayer (layers.circle_layer ("edit_circle", "edit points", "rgb(255, 0, 0)"))
                this._map.addLayer (layers.circle_layer ("edit_circle_highlight", "edit points", "rgb(255, 255, 0)", ["==", "mRID", ""]))

                // symbol icon from 17 and deeper
                this._map.addLayer (layers.symbol_layer ("edit_symbol", "edit points", "rgb(255, 0, 0)"));
                this._map.addLayer (layers.symbol_layer ("edit_symbol_highlight", "edit points", "rgb(255, 255, 0)", ["==", "mRID", ""]));
            }
        }

        return (CIMEdit);
    }
)