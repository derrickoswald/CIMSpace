/**
 * Edit control for CIM Application
 */
"use strict";

define
(
    ["mustache", "cim", "digitizer", "themes/layers", "model/Common", "model/Core", "model/Wires"],
    /**
     * @summary Edit control.
     * @description UI element for editing
     * @name cimedit
     * @exports cimedit
     * @version 1.0
     */
    function (mustache, cim, Digitizer, layers, Common, Core, Wires)
    {
        class CIMEdit
        {
            constructor (cimmap)
            {
                this._cimmap = cimmap;
                this._template =
                "<div class='card'>\n" +
                "  <div class='card-body'>\n" +
                "    <h5 class='card-title'>Edit\n" +
                "      <button type='button' class='close' aria-label='Close'>\n" +
                "        <span aria-hidden='true'>&times;</span>\n" +
                "      </button>\n" +
                "    </h5>\n" +
                "    <div class='form-group row'>\n" +
                "      <label class='col-sm-4 col-form-label' for='class_name'>Class</label>\n" +
                "      <div class='col-sm-8'>\n" +
                "        <select id='class_name' class='form-control'>\n" +
                "{{#classes}}\n" +
                "              <option value='{{.}}'>{{.}}</option>\n" +
                "{{/classes}}\n" +
                "        </select>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "    <div class='card-footer'>\n" +
                "      <button id='create' type='button' class='btn btn-primary'>Create</button>\n" +
                "  </div>\n" +
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
                this._digitizer = new Digitizer (this._map, this._cimmap);
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

            close (event)
            {
                this.cancel ();
                this._map.removeControl (this);
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
                this._container.getElementsByClassName ("close")[0].onclick = this.close.bind (this);
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
                if (null != data)
                {
                    var points = data.PositionPoint;
                    if (null != points)
                    {
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
                    }
                }

                return (ret);
            }

            /**
             * Generate a GUID.
             * See https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript#2117523
             */
            uuidv4 ()
            {
                return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace (/[018]/g, c =>
                    (c ^ crypto.getRandomValues (new Uint8Array(1))[0] & 15 >> c / 4).toString (16)
                )
            }

            /**
             * Predicate to check if the <code>id</code> looks like a GUID.
             * @param s the string to test
             * @return <code>true</code> if the string has the form of a GUID, <code>false</code> otherwise.
             */
            isGUID (s)
            {
                return ((null != s) ? /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test (s) : false);
            }

            /**
             * Generate a 'unique' id.
             * If the supplied string looks like a GUID, this generates another GUID,
             * else it appends the suffix to the suplied string to generate a 'unique' id - if you know what you are doing.
             * @param s the 'base' id
             * @param the suffix to add to the base id if the base id isn't a GUID
             * @return a GUID or the supplied string with the suffix
             */
            generateId (s, suffix)
            {
                return (this.isGUID (s) ? this.uuidv4 () : s + suffix);
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

            primary_element ()
            {
                var element = this._elements[0];
                var id = element.id;
                // read attributes from the form
                var cls = cim.class_map (element);
                element = Object.assign (element, cls.prototype.submit (element.id));
                if (element.mRID)
                    element.id = element.mRID; // reassign id based on mRID
                if (id != element.id)
                {
                    // update the form if the id changed
                    this._elements = [];
                    var text = this.build (element);
                    document.getElementById ("edit_contents").innerHTML = text;
                }

                return (element);
            }

            make_psr (feature)
            {
                if (this._canceler)
                    delete this._canceler;

                var psr = this.primary_element ();
                var id = psr.id;

                // create the location
                var lid = this.generateId (id, "_location");
                var location =
                {
                    EditDisposition: "new",
                    cls: "Location",
                    id: lid,
                    mRID: lid,
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
                    id: this.generateId (id, "_location_p"),
                    sequenceNumber: 1,
                    xPosition: feature.geometry.coordinates[0].toString (),
                    yPosition: feature.geometry.coordinates[1].toString ()
                };
                this.edit (new Common.PositionPoint (pp, this._features));

                // add the location to the PSR object
                psr.Location = location.id;
                var cls = cim.class_map (psr);
                this._elements[0] = new cls (psr, this._features);

                // set the base voltage in the form (if it's conducting equipment)
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
                if (this._canceler)
                    delete this._canceler;

                var equipment = this.primary_element ();
                var id = equipment.id;

                var connectivity = this.get_connectivity (feature.geometry.coordinates[0], feature.geometry.coordinates[1]);
                if (null == connectivity) // invent a new node if there are none
                {
                    var node = this.new_connectivity (this.generateId (id, "_node"));
                    this.edit (new Core.ConnectivityNode (node, this._features));
                    console.log ("no connectivity found, created ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity.BaseVoltage)
                        equipment.BaseVoltage = connectivity.BaseVoltage;

                // add the terminal
                var tid = this.generateId (id, "_terminal_1");
                var terminal =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: tid,
                    mRID: tid,
                    name: tid,
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
                if (this._canceler)
                    delete this._canceler;

                var trafo = this.primary_element ();
                var id = trafo.id;

                // ToDo: assume it's the primary?
                var connectivity = this.get_connectivity (feature.geometry.coordinates[0], feature.geometry.coordinates[1]);
                if (null == connectivity) // invent a new node if there are none
                {
                    var node = this.new_connectivity (this.generateId (id, "_node_1"));
                    this.edit (new Core.ConnectivityNode (node, this._features));
                    console.log ("no connectivity found, created primary ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }

                // add the terminal
                var tid1 = this.generateId (id, "_terminal_1");
                var terminal1 =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: tid1,
                    mRID: tid1,
                    name: tid1,
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
                    var node = this.new_connectivity (this.generateId (id, "_node_2"));
                    this.edit (new Core.ConnectivityNode (node, this._features));
                    console.log ("created secondary ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }
                var tid2 = this.generateId (id, "_terminal_2");
                var terminal2 =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: tid2,
                    mRID: tid2,
                    name: tid2,
                    sequenceNumber: 2,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABC",
                    ConductingEquipment: id,
                    ConnectivityNode: connectivity.ConnectivityNode
                };
                this.edit (new Core.Terminal (terminal2, this._features));

                // add power transformer ends
                var eid1 = this.generateId (id, "_end_1");
                var end1 =
                {
                    EditDisposition: "new",
                    cls: "PowerTransformerEnd",
                    id: eid1,
                    mRID: eid1,
                    description: "PowerTransformer End",
                    name: eid1,
                    endNumber: 1,
                    Terminal: terminal1.id,
                    connectionKind: "http://iec.ch/TC57/2013/CIM-schema-cim16#WindingConnection.D",
                    PowerTransformer: id
                };
                var eid2 = this.generateId (id, "_end_2");
                var end2 =
                {
                    EditDisposition: "new",
                    cls: "PowerTransformerEnd",
                    id: eid2,
                    mRID: eid2,
                    description: "PowerTransformer End",
                    name: eid2,
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
                if (this._canceler)
                    delete this._canceler;

                var line = this.primary_element ();
                var id = line.id;

                // create the location
                var lid = this.generateId (id, "_location");
                var location =
                {
                    EditDisposition: "new",
                    CoordinateSystem: "wgs84",
                    cls: "Location",
                    id: lid,
                    mRID: lid,
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
                                id: this.generateId (id, "_location_p" + (i + 1).toString ()),
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
                    var node = this.new_connectivity (this.generateId (id, "_node_1"));
                    this.edit (new Core.ConnectivityNode (node, this._features));
                    console.log ("no connectivity found at end 1, created ConnectivityNode " + node.id);
                    connectivity1 = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity1.BaseVoltage)
                        line.BaseVoltage = connectivity1.BaseVoltage;

                // add the terminals
                var tid1 = this.generateId (id, "_terminal_1");
                var terminal1 =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: tid1,
                    mRID: tid1,
                    name: tid1,
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
                    var node = this.new_connectivity (this.generateId (id, "_node_2"));
                    this.edit (new Core.ConnectivityNode (node, this._features));
                    console.log ("no connectivity found at end 2, created ConnectivityNode " + node.id);
                    connectivity2 = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity2.BaseVoltage)
                        line.BaseVoltage = connectivity2.BaseVoltage;

                var tid2 = this.generateId (id, "_terminal_2");
                var terminal2 =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: tid2,
                    mRID: tid2,
                    name: tid2,
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

                this.edit (obj, true, true);

                // here's some rules
                if (this._features.Conductor)
                    this._canceler = this._digitizer.digitize_line (obj, this._features, this.make_cable.bind (this), this.cancel.bind (this));
                else if (this._features.PowerTransformer)
                    this._canceler = this._digitizer.digitize_point (obj, this._features, this.make_transformer.bind (this), this.cancel.bind (this));
                else if (this._features.ConductingEquipment)
                    this._canceler = this._digitizer.digitize_point (obj, this._features, this.make_equipment.bind (this), this.cancel.bind (this));
                else if (this._features.PowerSystemResource)
                    this._canceler = this._digitizer.digitize_point (obj, this._features, this.make_psr.bind (this), this.cancel.bind (this));
            }

            create ()
            {
                var class_name = document.getElementById ("class_name").value;
                var id = this.uuidv4 ();
                var proto = { cls: class_name, id: id };
                this.create_from (proto);
            }

            create_new ()
            {
                var proto = JSON.parse (JSON.stringify (this._elements[0]));
                proto.id = this.uuidv4 ();
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

            // manually toggle the state to collapsed
            setCollapsed (text)
            {
                text = text.replace ("class=\"collapse-link\"", "class=\"collapse-link collapsed\"");
                text = text.replace ("aria-expanded=\"true\"", "aria-expanded=\"false\"");
                text = text.replace ("class=\"collapse in show\"", "class=\"collapse in\"");
                return (text);
            }

            build (element)
            {
                this._elements.push (element);
                var cls = cim.class_map (element);
                cls.prototype.condition (element);
                var template = cls.prototype.edit_template ();
                var text = mustache.render (template, element);
                cls.prototype.uncondition (element);
                text = this.setCollapsed (text);
                return (text);
            }

            get_related (element)
            {
                var ret = [];
                function add (e)
                {
                    if (!ret.find (x => x.id == e.id))
                        ret.push (e);
                }
                var cls = cim.class_map (element);
                var data = this._cimmap.get_data ();
                if (data)
                {
                    var relations = cls.prototype.relations ();
                    for (var i = 0; i < relations.length; i++)
                        if (relations[i][1] == "0..1")
                        {
                            var ref = element[relations[i][0]];
                            if (ref)
                            {
                                var related = data[relations[i][3]];
                                if (related)
                                {
                                    var obj = related[ref];
                                    if (obj && (!obj.EditDisposition || (obj.EditDisposition != "delete")))
                                        add (obj)
                                }
                            }
                        }
                        else if (relations[i][2] == "0..1" || relations[i][2] == "1")
                        {
                            var related = data[relations[i][3]];
                            if (related)
                                for (var id in related)
                                {
                                    var obj = related[id];
                                    if (obj[relations[i][4]] == element.id)
                                        if (!obj.EditDisposition || (obj.EditDisposition != "delete"))
                                            add (obj)
                                }
                        }
                }

                return (ret);
            }

            edit (element, top_level, is_new)
            {
                var cls = cim.class_map (element);
                if (top_level)
                {
                    var frame =
                        "<div id='edit_frame' class='card'>\n" +
                        "  <div class='card-body'>\n" +
                        "    <h5 id='view_title' class='card-title'>Edit</h5>\n" +
                        "    <div id='edit_contents' class='card-text'></div>\n" +
                        "    <div class='card-footer'>\n" +
                        "      <button id='submit' type='button' class='btn btn-primary' onclick='require([\"cimmap\"], function(cimmap) { cimmap.get_editor ().save ();})'>Save</button>\n" +
                        (is_new ? "" : "      <button id='delete' type='button' class='btn btn-danger' onclick='require([\"cimmap\"], function(cimmap) { cimmap.get_editor ().del ();})'>Delete</button>\n") +
                        "      <button id='cancel' type='button' class='btn btn-success' onclick='require([\"cimmap\"], function(cimmap) { cimmap.get_editor ().cancel ();})'>Cancel</button>\n" +
                        "      <button id='create_new' type='button' class='btn btn-info' onclick='require([\"cimmap\"], function(cimmap) { cimmap.get_editor ().create_new ();})'>Create new</button>\n" +
                        "    </div>\n" +
                        "  </div>\n" +
                        "</div>\n";
                    this._container.innerHTML = frame;
                    this._frame_height = document.getElementById ("edit_frame").clientHeight; // frame height with no edit template contents

                    this._elements = [];
                    var text = this.build (element);

                    // get related elements
                    var relatives = this.get_related (element)
                    for (var j = 0; j < relatives.length; j++)
                        text = text + this.build (relatives[j]);
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
                this._cimmap.make_map ();
            }

            save ()
            {
                if (null == this._cimmap.get_data ())
                    this._cimmap.set_data ({});

                if (!this._features)
                {
                    // editing an existing object
                    for (var i = 0; i < this._elements.length; i++)
                    {
                        var element = this._elements[i];
                        var id = element.id;
                        var cls = cim.class_map (element);
                        // delete the old object and replace it with a "deleted" version
                        var version = this.next_version (element);
                        cls.prototype.remove (element, this._cimmap.get_data ());
                        element.id = version;
                        element.mRID = version;
                        element.EditDisposition = "delete";
                        var deleted = new cls (element, this._cimmap.get_data ());
                        // add a new object with a possibly changed mRID
                        element = cls.prototype.submit (id);
                        if (element.mRID)
                            element.id = element.mRID;
                        else
                            element.id = id;
                        element.cls = deleted.cls;
                        element.EditDisposition = "edit";
                        new cls (element, this._cimmap.get_data ());
                    }
                }
                else
                {
                    // saving a new set of objects
                    for (var i = 0; i < this._elements.length; i++)
                    {
                        var element = this._elements[i];
                        var cls = cim.class_map (element);
                        element = Object.assign (element, cls.prototype.submit (element.id));
                        if (element.mRID)
                            element.id = element.mRID; // reassign id based on mRID
                        new cls (element, this._cimmap.get_data ());
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
                if (this._canceler)
                {
                    var canceller = this._canceler; // ensure recursion doesn't happen
                    delete this._canceler;
                    canceller ();
                }
                if (!this._features)
                {
                    if (this._elements)
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
                if (this._canceler)
                {
                    var canceller = this._canceler; // ensure recursion doesn't happen
                    delete this._canceler;
                    canceller ();
                }
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