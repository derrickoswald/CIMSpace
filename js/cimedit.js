/**
 * Edit control for CIM Application
 */
"use strict";

define
(
    ["mustache", "cim", "themes/layers", "model/Common", "model/Core", "model/Wires"],
    /**
     * @summary Edit control.
     * @description UI element for editing
     * @name cimedit
     * @exports cimedit
     * @version 1.0
     */
    function (mustache, cim, layers, Common, Core, Wires)
    {
        class CIMEdit
        {
            constructor (cimmap)
            {
                this._cimmap = cimmap;
                this._template =
                "<div class='well'>\n" +
                "  <h3>Edit</h3>\n" +
                "    <div class='form-group'>\n" +
                "      <label for='class_name'>Class</label>\n" +
                "      <select id='class_name' class='form-control'>\n" +
                "{{#classes}}\n" +
                "              <option value='{{.}}'>{{.}}</option>\n" +
                "{{/classes}}\n" +
                "      </select>\n" +
                "    </div>\n" +
                "  <button id='create' type='button' class='btn btn-primary'>Create</button>\n" +
                "</div>\n";
            }

            onAdd (map)
            {
                this._map = map;
                this._container = document.createElement ("div");
                this._container.className = "mapboxgl-ctrl";
                this.render ();
                if (null == this._map.getSource ("edit lines"))
                    this.add_layers ();
                this._resizer = this.on_map_resize.bind (this);
                this._map.on ("resize", this._resizer);
                return (this._container);
            }

            onRemove ()
            {
                // remove features from edit layers
                this._map.getSource ("edit points").setData ({ "type" : "FeatureCollection", "features" : [] });
                this._map.getSource ("edit lines").setData ({ "type" : "FeatureCollection", "features" : [] });
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
                return ("bottom-left");
            }

            visible ()
            {
                return (null != this._container);
            }

            render ()
            {
                var cls_map = cim.classes ();
                var classes = [];
                for (var property in cls_map)
                    if (cls_map.hasOwnProperty (property))
                        classes.push (property);
                classes.sort ();
                this._container.innerHTML = mustache.render (this._template, { classes: classes });
                this._container.getElementsByClassName ("btn btn-primary")[0].onclick = this.create.bind (this);
            }

            refresh ()
            {
                var options =
                    {
                        show_internal_features: this._cimmap.show_internal_features ()
                    };
                var geo = this._cimmap.get_themer ().getTheme ().make_geojson (this._features, options);
                this._map.getSource ("edit points").setData (geo.points);
                this._map.getSource ("edit lines").setData (geo.lines);
//                // update the extents
//                var extents =  this._cimmap.get_themer ().getExtents ();
//                var old_extents = this._cimmap.get_extents ();
//                var new_extents =
//                {
//                    xmin: Math.min (extents.xmin, old_extents.xmin),
//                    ymin: Math.min (extents.ymin, old_extents.ymin),
//                    xmax: Math.max (extents.xmax, old_extents.xmax),
//                    ymax: Math.max (extents.ymax, old_extents.ymax)
//                };
//                this._cimmap.set_extents (new_extents);
            }

            popup (html, position)
            {
                var lnglat = position || this._map.getCenter ();
                var popup = new mapboxgl.Popup ();
                popup.setLngLat (lnglat)
                popup.setHTML (html)
                popup.addTo (this._map);
            }

            distance (a, b)
            {
                var dx = a.lng - b.lng;
                var dy = a.lat - b.lat;
                return (dx * dx + dy * dy);
            }

            snap (event)
            {
                var ret = event.lngLat
                var width = 4;
                var height = 4;
                var features = this._map.queryRenderedFeatures
                (
                    [
                      [event.point.x - width / 2, event.point.y - height / 2],
                      [event.point.x + width / 2, event.point.y + height / 2]
                    ],
                    {}
                );
                if ((null != features) && (0 != features.length))
                {
                    var mrid = this._elements[0].mRID;
                    var best_lnglat = null;
                    var best_feature = null;
                    var dist = this.distance.bind (this);
                    function assign_best (lnglat, feature)
                    {
                        best_lnglat = lnglat;
                        best_feature = feature;
                        console.log ("snap " + feature.properties.cls + ":" + feature.properties.mRID + " " + dist (ret, lnglat) + " [" + lnglat.lng + "," + lnglat.lat + "]");
                    }
                    for (var i = 0; i < features.length; i++)
                    {
                        if (features[i].properties.mRID && (mrid != features[i].properties.mRID)) // only our features and not the current one
                        {
                            if ("Point" == features[i].geometry.type)
                            {
                                var candidate = new mapboxgl.LngLat.convert (features[i].geometry.coordinates);
                                if (null == best_lnglat)
                                    assign_best (candidate, features[i]);
                                else if (this.distance (ret, candidate) < this.distance (ret, best_lnglat))
                                    assign_best (candidate, features[i]);
                            }
                            else if ("LineString" == features[i].geometry.type)
                            {
                                for (var j = 0; j < features[i].geometry.coordinates.length; j++)
                                {
                                    var candidate = new mapboxgl.LngLat.convert (features[i].geometry.coordinates[j]);
                                    if (null == best_lnglat)
                                        assign_best (candidate, features[i]);
                                    else if (this.distance (ret, candidate) < this.distance (ret, best_lnglat))
                                        assign_best (candidate, features[i]);
                                }
                            }
                        }
                    }
                    if (null != best_lnglat)
                        ret = best_lnglat;
                }

                return (ret);
            }

            digitize_point_mousedown_listener (points, callback, event)
            {
                var lnglat = this.snap (event);
                var feature = points.features[points.features.length - 1];
                feature.geometry.coordinates = [lnglat.lng, lnglat.lat];
                this._map.getSource ("edit points").setData (points);
                callback (feature);
            }

            digitize_point (obj, callback)
            {
                // get the current GeoJSON
                var options =
                    {
                        show_internal_features: this._cimmap.show_internal_features ()
                    };
                var geo = this._cimmap.get_themer ().getTheme ().make_geojson (this._features, options);
                var points = geo.points;
                points.features.push
                (
                    {
                        type : "Feature",
                        geometry :
                        {
                            type : "Point",
                            coordinates : []
                        },
                        properties : obj
                    }
                );

                var mousedown = this.digitize_point_mousedown_listener.bind (this, points, cb.bind (this));
                function cb (feature)
                {
                    this._map.off ("mousedown", mousedown);
                    this._cimmap.add_listeners ();
                    callback (feature);
                }

                // set up our listeners
                this._cimmap.remove_listeners ();
                this._map.on ("mousedown", mousedown);

                // pop up a prompt and wait
                this.popup ("<h1>Digitize point geometry</h1>");
            }

            digitize_line_mousedown_listener (lines, callback, event)
            {
                var feature = lines.features[lines.features.length - 1];
                var coordinates = feature.geometry.coordinates;
                var lnglat = this.snap (event);
                var buttons = event.originalEvent.buttons;
                var leftbutton = 0 != (buttons & 1);
                var rightbutton = 0 != (buttons & 2);

                if (leftbutton)
                {
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

            digitize_line (obj, callback)
            {
                // get the current GeoJSON
                var options =
                    {
                        show_internal_features: this._cimmap.show_internal_features ()
                    };
                var geo = this._cimmap.get_themer ().getTheme ().make_geojson (this._features, options);
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
                        },
                        properties: obj
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

            get_connectivity_for_equipment (equipment, point)
            {
                var ret = {};

                // here we un-screw up the sequence numbers on the PositionPoint elements
                var data = this._cimmap.get_data ();
                var points = data.PositionPoint;
                var ordered = [];
                for (var id in points)
                {
                    if (points[id].Location == equipment.Location)
                        ordered[points[id].sequenceNumber] = points[id];
                }
                if ("undefined" == typeof (ordered[0]))
                    ordered = ordered.slice (1);

                // heuristic to get the sequence number of the terminal
                var index = ordered.indexOf (point);
                var sequence;
                if (0 == index)
                    sequence = 1;
                else if (index < ordered.length / 2)
                    sequence = 1;
                else
                    sequence = 2;

                // get the terminal with that sequence number and the total number of terminals
                var terminals = data.Terminal;
                var n = 0;
                var terminal = null;
                var default_terminal = null;
                for (var id in terminals)
                    if (terminals[id].ConductingEquipment == equipment.id)
                    {
                        n = n + 1;
                        if (null == default_terminal)
                            default_terminal = terminals[id];
                        if (terminals[id].sequenceNumber == sequence)
                            terminal = terminals[id];
                    }

                // assign ConnectivityNode and TopologicalNode based on the terminal or default
                if (null != terminal)
                {
                    if (equipment.BaseVoltage)
                        ret.BaseVoltage = equipment.BaseVoltage;
                    if (terminal.ConnectivityNode)
                        ret.ConnectivityNode = terminal.ConnectivityNode;
                    if (terminal.TopologicalNode)
                        ret.TopologicalNode = terminal.TopologicalNode;
                }
                else if (0 != n)
                {
                    console.log ("connectivity not found using default terminal for " + equipment.cls + ":" + equipment.id)
                    if (equipment.BaseVoltage)
                        ret.BaseVoltage = equipment.BaseVoltage;
                    if (default_terminal.ConnectivityNode)
                        ret.ConnectivityNode = default_terminal.ConnectivityNode;
                    if (default_terminal.TopologicalNode)
                        ret.TopologicalNode = default_terminal.TopologicalNode;
                }

                return (ret); // { ConnectivityNode: blah, TopologicalNode: blah, BaseVoltage: yadda }
            }

            get_best_connectivity_for_equipment (equipments, point)
            {
                var ret = {};

                function eq (equipment) { return (this.get_connectivity_for_equipment (equipment, point)); }
                var list = equipments.map (eq.bind (this)).filter (function (connectivity) { return (connectivity.ConnectivityNode); });
                if (0 == list.length)
                    // no ConnectivityNode just pick the first new one
                    ret = list[0];
                else if (1 == list.length)
                    // one ConnectivityNode, use that
                    ret = list[0];
                else
                    // if they are all the same ConnectivityNode we're still OK
                    if (list.every (function (connectivity) { return (connectivity.ConnectivityNode == list[0].ConnectivityNode); }))
                        ret = list[0];
                    else
                    {
                        console.log ("too many ConnectivityNode found, using " + list[0].ConnectivityNode + " from " + JSON.stringify (list, null, 4));
                        ret = list[0];
                    }

                return (ret);
            }

            get_connectivity_for_point (point)
            {
                var ret = {};
                var data = this._cimmap.get_data ();
                var location = data.Location[point.Location];
                var equipment = data.ConductingEquipment;
                var matches = [];
                for (var id in equipment)
                {
                    if (equipment[id].Location == location.id)
                    {
                        matches.push (equipment[id]);
                        console.log ("connectivity found to " + equipment[id].cls + ":" + equipment[id].id);
                    }
                }
                // if there are none, we have a problem Houston
                // if there is only one, use the best terminal
                if (1 == matches.length)
                    ret = this.get_connectivity_for_equipment (matches[0], point);
                else if (1 < matches.length)
                    // if there are many pieces of equipment with the same location, try our best to pick up the connectivity
                    ret = this.get_best_connectivity_for_equipment (matches, point);

                return (ret);
            }

            get_best_connectivity_for_points (points)
            {
                var ret = {};

                function gc (point) { return (this.get_connectivity_for_point (point)); }
                var list = points.map (gc.bind (this));
                if (0 != list.length)
                {
                    var existing = list.filter (function (connectivity) { return (connectivity.ConnectivityNode); });
                    var uniques = existing.map (JSON.stringify).filter (function (value, index, self) { return (self.indexOf (value) === index); }).map (JSON.parse);
                    if (0 == uniques.length)
                        // no ConnectivityNode just pick the first new one
                        ret = list[0];
                    else if (1 == uniques.length)
                        // one ConnectivityNode, use that
                        ret = uniques[0];
                    else
                        // if they are all the same ConnectivityNode we're still OK
                        if (uniques.every (function (connectivity) { return (connectivity.ConnectivityNode == uniques[0].ConnectivityNode); }))
                            ret = uniques[0];
                        else
                        {
                            console.log ("too many ConnectivityNode found, using " + uniques[0].ConnectivityNode + " for points from " + JSON.stringify (uniques, null, 4));
                            ret = uniques[0];
                        }
                }

                return (ret);
            }

            get_connectivity (lng, lat)
            {
                var ret = null;

                // get PositionPoint with matching coordinates
                var data = this._cimmap.get_data ();
                var points = data.PositionPoint;
                var matches = [];
                for (var id in points)
                {
                    var x = points[id].xPosition;
                    var y = points[id].yPosition;
                    var dx = lng - x;
                    var dy = lat - y;
                    if (dx * dx + dy * dy < 1e-12) // ToDo: a parameter somehow?
                    {
                        matches.push (points[id]);
                        console.log ("match point d = " + (dx * dx + dy * dy).toString () + " " + id + " [" + points[id].xPosition + "," + points[id].yPosition + "]");
                    }
                }
                // if there are no matches, bail out
                // if there is only one, use that one
                if (1 == matches.length)
                    ret = this.get_connectivity_for_point (matches[0]);
                else if (1 < matches.length)
                    ret = this.get_best_connectivity_for_points (matches);

                return (ret);
            }

            new_connectivity (name)
            {
                return (
                    {
                        EditDisposition: "new",
                        cls: "ConnectivityNode",
                        id: name,
                        mRID: name,
                    }
                );
            }

            make_psr (feature)
            {
                var psr = this._elements[0];
                var id = psr.id;

                // create the location
                var location =
                {
                    EditDisposition: "new",
                    cls: "Location",
                    id: id + "_location",
                    mRID: id + "_location",
                    CoordinateSystem: "wgs84",
                    type: "geographic"
                };
                this.edit (new Common.Location (location, this._features));

                // set the position point
                var pp =
                {
                    EditDisposition: "new",
                    Location: location.id,
                    cls: "PositionPoint",
                    id: id + "_location_p",
                    sequenceNumber: 1,
                    xPosition: feature.geometry.coordinates[0].toString (),
                    yPosition: feature.geometry.coordinates[1].toString ()
                };
                this.edit (new Common.PositionPoint (pp, this._features));

                // add the location to the PSR object
                psr.Location = location.id;
                var cls = cim.class_map (psr);
                this._elements[0] = new cls (psr, this._features);

                // add the base voltage to the form (if it's conducting equipment)
                if (psr.BaseVoltage)
                {
                    var bv = document.getElementById (id + "_BaseVoltage");
                    if (bv)
                        bv.value = psr.BaseVoltage;
                }

                // update the form
                document.getElementById (id + "_Location").value = location.id;

                // update the display
                this.refresh ();
            }

            make_equipment (feature)
            {
                var equipment = this._elements[0];
                var id = equipment.id;

                var connectivity = this.get_connectivity (feature.geometry.coordinates[0], feature.geometry.coordinates[1]);
                if (null == connectivity) // invent a new node if there are none
                {
                    var node = this.new_connectivity (id + "_node");
                    this.edit (new Core.ConnectivityNode (node, this._features));
                    console.log ("no connectivity found, created ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity.BaseVoltage)
                        equipment.BaseVoltage = connectivity.BaseVoltage;

                // add the terminal
                var terminal =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: id + "_terminal_1",
                    mRID: id + "_terminal_1",
                    name: id + "_terminal_1",
                    sequenceNumber: 1,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABC",
                    ConductingEquipment: id,
                    ConnectivityNode: connectivity.ConnectivityNode
                };
                if (connectivity.TopologicalNode)
                    terminal.TopologicalNode = connectivity.TopologicalNode;
                this.edit (new Core.Terminal (terminal, this._features));

                this.make_psr (feature);
            }

            make_transformer (feature)
            {
                var trafo = this._elements[0];
                var id = trafo.id;

                // ToDo: assume it's the primary?
                var connectivity = this.get_connectivity (feature.geometry.coordinates[0], feature.geometry.coordinates[1]);
                if (null == connectivity) // invent a new node if there are none
                {
                    var node = this.new_connectivity (id + "_node_1");
                    this.edit (new Core.ConnectivityNode (node, this._features));
                    console.log ("no connectivity found, created primary ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }

                // add the terminal
                var terminal1 =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: id + "_terminal_1",
                    mRID: id + "_terminal_1",
                    name: id + "_terminal_1",
                    sequenceNumber: 1,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABC",
                    ConductingEquipment: id,
                    ConnectivityNode: connectivity.ConnectivityNode
                };
                if (connectivity.TopologicalNode)
                    terminal1.TopologicalNode = connectivity.TopologicalNode;
                this.edit (new Core.Terminal (terminal1, this._features));

                // add a secondary connectivity node
                {
                    var node = this.new_connectivity (id + "_node_2");
                    this.edit (new Core.ConnectivityNode (node, this._features));
                    console.log ("created secondary ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }
                var terminal2 =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: id + "_terminal_2",
                    mRID: id + "_terminal_2",
                    name: id + "_terminal_2",
                    sequenceNumber: 2,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABC",
                    ConductingEquipment: id,
                    ConnectivityNode: connectivity.ConnectivityNode
                };
                this.edit (new Core.Terminal (terminal2, this._features));

                // add power transformer ends
                var end1 =
                {
                    EditDisposition: "new",
                    cls: "PowerTransformerEnd",
                    id: id + "_end_1",
                    mRID: id + "_end_1",
                    description: "PowerTransformer End",
                    name: id + "_end_1",
                    endNumber: 1,
                    Terminal: terminal1.id,
                    connectionKind: "http://iec.ch/TC57/2013/CIM-schema-cim16#WindingConnection.D",
                    PowerTransformer: id
                };
                var end2 =
                {
                    EditDisposition: "new",
                    cls: "PowerTransformerEnd",
                    id: id + "_end_2",
                    mRID: id + "_end_2",
                    description: "PowerTransformer End",
                    name: id + "_end_2",
                    endNumber: 2,
                    Terminal: terminal2.id,
                    connectionKind: "http://iec.ch/TC57/2013/CIM-schema-cim16#WindingConnection.Yn",
                    PowerTransformer: id
                };
                this.edit (new Wires.PowerTransformerEnd (end1, this._features));
                this.edit (new Wires.PowerTransformerEnd (end2, this._features));

                this.make_psr (feature);
            }

            make_cable (feature)
            {
                var line = this._elements[0];
                var id = line.id;

                // create the location
                var location =
                {
                    EditDisposition: "new",
                    CoordinateSystem: "wgs84",
                    cls: "Location",
                    id: id + "_location",
                    mRID: id + "_location",
                    type: "geographic"
                };
                this.edit (new Common.Location (location, this._features));

                // set the position points
                for (var i = 0; i < feature.geometry.coordinates.length; i++)
                {
                    var lnglat = feature.geometry.coordinates[i];
                    this.edit (
                        new Common.PositionPoint (
                            {
                                EditDisposition: "new",
                                Location: location.id,
                                cls: "PositionPoint",
                                id: id + "_location_p" + (i + 1).toString (),
                                sequenceNumber: (i + 1).toString (),
                                xPosition: lnglat[0].toString (),
                                yPosition: lnglat[1].toString ()
                            },
                            this._features
                        )
                    );
                }

                var connectivity1 = this.get_connectivity (feature.geometry.coordinates[0][0], feature.geometry.coordinates[0][1]);
                if (null == connectivity1) // invent a new node if there are none
                {
                    var node = this.new_connectivity (id + "_node_1");
                    this.edit (new Core.ConnectivityNode (node, this._features));
                    console.log ("no connectivity found at end 1, created ConnectivityNode " + node.id);
                    connectivity1 = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity1.BaseVoltage)
                        line.BaseVoltage = connectivity1.BaseVoltage;

                // add the terminals
                var terminal1 =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: id + "_terminal_1",
                    mRID: id + "_terminal_1",
                    name: id + "_terminal_1",
                    sequenceNumber: 1,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABC",
                    ConductingEquipment: id,
                    ConnectivityNode: connectivity1.ConnectivityNode
                };
                if (connectivity1.TopologicalNode)
                    terminal1.TopologicalNode = connectivity1.TopologicalNode;

                var last = feature.geometry.coordinates.length - 1;
                var connectivity2 = this.get_connectivity (feature.geometry.coordinates[last][0], feature.geometry.coordinates[last][1]);
                if (null == connectivity2) // invent a new node if there are none
                {
                    var node = this.new_connectivity (id + "_node_2");
                    this.edit (new Core.ConnectivityNode (node, this._features));
                    console.log ("no connectivity found at end 2, created ConnectivityNode " + node.id);
                    connectivity2 = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity2.BaseVoltage)
                        line.BaseVoltage = connectivity2.BaseVoltage;

                var terminal2 =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: id + "_terminal_2",
                    mRID: id + "_terminal_2",
                    name: id + "_terminal_2",
                    sequenceNumber: 2,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABC",
                    ConductingEquipment: id,
                    ConnectivityNode: connectivity2.ConnectivityNode
                };
                if (connectivity2.TopologicalNode)
                    terminal2.TopologicalNode = connectivity2.TopologicalNode;

                this.edit (new Core.Terminal (terminal1, this._features));
                this.edit (new Core.Terminal (terminal2, this._features));

                // add the location to the Cable object
                line.Location = location.id;
                var cls = cim.class_map (line);
                this._elements[0] = new cls (line, this._features);

                // add the base voltage to the form
                if (line.BaseVoltage)
                    document.getElementById (id + "_BaseVoltage").value = line.BaseVoltage;

                // add the location to the form
                document.getElementById (id + "_Location").value = location.id;

                // update the display
                this.refresh ();
            }

            create_from (proto)
            {
                proto.EditDisposition = "new";
                this._features = {};
                var cls = cim.class_map (proto);
                var obj = new cls (proto, this._features);
                if (this._features.IdentifiedObject)
                    proto.mRID = proto.id;
                obj = new cls (proto, this._features); // do it again, possibly with mRID set

                this.edit (obj, true);

                // here's some rules
                if (this._features.Conductor)
                    this.digitize_line (obj, this.make_cable.bind (this));
                else if (this._features.PowerTransformer)
                    this.digitize_point (obj, this.make_transformer.bind (this));
                else if (this._features.ConductingEquipment)
                    this.digitize_point (obj, this.make_equipment.bind (this));
                else if (this._features.PowerSystemResource)
                    this.digitize_point (obj, this.make_psr.bind (this));
            }

            create ()
            {
                var class_name = document.getElementById ("class_name").value;
                var id = class_name + (~~(1e6 * Math.random ())).toString ();
                var proto = { cls: class_name, id: id };
                this.create_from (proto);
            }

            create_new ()
            {
                var proto = JSON.parse (JSON.stringify (this._elements[0]));
                proto.id = proto.cls + (~~(1e6 * Math.random ())).toString ();
                delete proto.aliasName;
                delete proto.length;
                this.create_from (proto);
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

            on_map_resize (event)
            {
                var map_height = document.getElementById ("map").clientHeight;
                var top_margin = 10;
                var well_padding = 20;
                var logo_height = 18;
                var max_height = map_height - top_margin - well_padding - logo_height;
                this._container.style.maxHeight = max_height.toString () + "px";
                var guts = document.getElementById ("edit_contents");
                if (guts)
                    guts.style.maxHeight = (max_height - this._frame_height).toString () + "px";
            }

            build (element)
            {
                this._elements.push (element);
                var cls = cim.class_map (element);
                cls.prototype.condition (element);
                var template = cls.prototype.edit_template ();
                var text = mustache.render (template, element);
                cls.prototype.uncondition (element);
                return (text);
            }

            edit (element, top_level)
            {
                var cls = cim.class_map (element);
                if (top_level)
                {
                    var frame =
                        "<div id='edit_frame' class='well'>\n" +
                        "  <h3>Edit</h3>\n" +
                        "  <div id='edit_contents'></div>\n" +
                        "  <div>\n" +
                        "    <button id='submit' type='button' class='btn btn-primary' onclick='require([\"cimmap\"], function(cimmap) { cimmap.get_editor ().save ();})'>Save</button>\n" +
                        "    <button id='delete' type='button' class='btn btn-danger' onclick='require([\"cimmap\"], function(cimmap) { cimmap.get_editor ().del ();})'>Delete</button>\n" +
                        "    <button id='cancel' type='button' class='btn btn-success' onclick='require([\"cimmap\"], function(cimmap) { cimmap.get_editor ().cancel ();})'>Cancel</button>\n" +
                        "    <button id='create_new' type='button' class='btn btn-info' onclick='require([\"cimmap\"], function(cimmap) { cimmap.get_editor ().create_new ();})'>Create new</button>\n" +
                        "  </div>\n" +
                        "</div>\n";
                    this._container.innerHTML = frame;
                    this._frame_height = document.getElementById ("edit_frame").clientHeight; // frame height with no edit template contents

                    this._elements = [];
                    var text = this.build (element);

                    // get related elements
                    var relations = cls.prototype.relations ();
                    for (var i = 0; i < relations.length; i++)
                        if (relations[i][2] == "0..1" || relations[i][2] == "1")
                        {
                            var data = this._cimmap.get_data ();
                            var related = data[relations[i][3]];
                            var relatives = [];
                            if (related)
                                for (var id in related)
                                {
                                    var obj = related[id];
                                    if (obj[relations[i][4]] == element.id)
                                        if (!obj.EditDisposition || (obj.EditDisposition != "delete"))
                                            relatives.push (related[id]);
                                }
                            for (var j = 0; j < relatives.length; j++)
                                text = text + this.build (relatives[j]);
                        }
                    document.getElementById ("edit_contents").innerHTML = text;
                }
                else
                {
                    var text = this.build (element);
                    document.getElementById ("edit_contents").innerHTML = document.getElementById ("edit_contents").innerHTML + text;
                }
                this.on_map_resize ();
            }

            // sample state transitions
            // [ ] => new => [ { id: "x", property: "a", EditDisposition: "new" } ]
            // [ { id: "x", property: "a" } ] => del => [ { id: "1:x", property: "a", EditDisposition: "delete" } ]
            // [ { id: "x", property: "a" } ] => save => [ { id: "x", property: "b", EditDisposition: "edit" } { id: "1:x", property: "a", EditDisposition: "delete" } ]
            // [ { id: "x", property: "b", EditDisposition: "edit" } { id: "1:x", property: "a", EditDisposition: "delete" } ] => save => [ { id: "x", property: "c", EditDisposition: "edit" } { id: "2:x", property: "b", EditDisposition: "delete" } { id: "1:x", property: "a", EditDisposition: "delete" } ]

            // on export non-difference model, export only where EditDisposition is undefined or "edit"
            // on export difference model,
            //   reverseDifferences only where EditDisposition is "delete" and version is 1
            //   forwardDifferences ony where EditDisposition is "new" or "edit"

            // ToDo: undo

            mrid (feature)
            {
                var mrid = feature.mRID;

                while (!isNaN (Number (mrid.charAt (0))))
                    mrid = mrid.substring (1);
                if (":" == mrid.charAt (0))
                    mrid = mrid.substring (1);

                return (mrid);
            }

            version (feature)
            {
                var version = 0;

                var mrid = feature.mRID;
                var i = 0;
                while (!isNaN (Number (mrid.charAt (i))))
                {
                    i = i + 1;
                    version = Number (mrid.substring (0, i));
                }

                return (version);
            }

            next_version (feature)
            {
                var version = 1;

                var list = this._cimmap.get_data ()[feature.cls];
                var mrid = this.mrid (feature);
                while (null != list[version.toString () + ":" + mrid])
                    version = version + 1;

                return (version.toString () + ":" + mrid);
            }

            shutdown ()
            {
                this._cimmap.unhighlight ();
                this.render ();
            }

            regen ()
            {
                this.shutdown ();
                this._cimmap.redraw ();
            }

            save ()
            {
                if (!this._features)
                {
                    // editing an existing object
                    var old_obj = this._elements[0];
                    var original_id = old_obj.id;
                    var cls = cim.class_map (old_obj);
                    var version = this.next_version (old_obj);
                    cls.prototype.remove (old_obj, this._cimmap.get_data ());
                    old_obj.id = version;
                    old_obj.mRID = version;
                    old_obj.EditDisposition = "delete";
                    var deleted = new cls (old_obj, this._cimmap.get_data ());
                    var obj = cls.prototype.submit (original_id);
                    obj.id = obj.mRID;
                    obj.cls = old_obj.cls;
                    obj.EditDisposition = "edit";
                    // console.log (JSON.stringify (obj, null, 4));
                    this._elements[0] = new cls (obj, this._cimmap.get_data ());
                }
                else
                {
                    // saving a new set of objects
                    var id = this._elements[0].id;
                    for (var i = 0; i < this._elements.length; i++)
                    {
                        var feature = this._elements[i];
                        var obj = this._features[feature.cls][feature.id];
                        var cls = cim.class_map (obj);
                        if (id == obj.id)
                            obj = Object.assign (obj, cls.prototype.submit (id));
                        var created = new cls (obj, this._cimmap.get_data ());
                        if (id == created.id)
                            this._elements[0] = created;
                    }
                    delete this._elements;
                    delete this._features;
                }
                // remove features from edit layers
                this._map.getSource ("edit points").setData ({ "type" : "FeatureCollection", "features" : [] });
                this._map.getSource ("edit lines").setData ({ "type" : "FeatureCollection", "features" : [] });
                // regenerate the map
                this.regen ();
            }

            del ()
            {
                if (!this._features)
                {
                    // delete existing features
                    for (var i = 0; i < this._elements.length; i++)
                    {
                        var old_obj = this._elements[i];
                        var cls = cim.class_map (old_obj);
                        cls.prototype.remove (old_obj, this._cimmap.get_data ());
                        old_obj.EditDisposition = "delete";
                        old_obj.id = this.next_version (old_obj);
                        old_obj.mRID = old_obj.id;
                        this._elements[i] = new cls (old_obj, this._cimmap.get_data ());
                    }
                    delete this._elements;
                }
                else
                {
                    delete this._elements;
                    delete this._features;
                    this._map.getSource ("edit points").setData ({ "type" : "FeatureCollection", "features" : [] });
                    this._map.getSource ("edit lines").setData ({ "type" : "FeatureCollection", "features" : [] });
                }
                this.regen ();
            }

            cancel ()
            {
                delete this._elements;
                delete this._features;
                this._map.getSource ("edit points").setData ({ "type" : "FeatureCollection", "features" : [] });
                this._map.getSource ("edit lines").setData ({ "type" : "FeatureCollection", "features" : [] });
                this.shutdown ();
            }
        }

        return (CIMEdit);
    }
)