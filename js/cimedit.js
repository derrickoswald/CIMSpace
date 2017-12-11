/**
 * Edit control for CIM Application
 */
"use strict";

define
(
    ["mustache", "cim", "model/Common", "model/Wires", "themes/layers"],
    /**
     * @summary Edit control.
     * @description UI element for editing
     * @name cimedit
     * @exports cimedit
     * @version 1.0
     */
    function (mustache, cim, Common, Wires, layers)
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
                return (this._container);
            }

            onRemove ()
            {
                // remove features from edit layers
                this._map.getSource ("edit points").setData ({ "type" : "FeatureCollection", "features" : [] });
                this._map.getSource ("edit lines").setData ({ "type" : "FeatureCollection", "features" : [] });
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

            digitize_point_mousedown_listener (points, callback, event)
            {
                var lnglat = event.lngLat;
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

            create_from (proto)
            {
                proto.EditDisposition = "new";
                this._features = {};
                var cls = cim.class_map (proto);
                var obj = new cls (proto, this._features);
                if (this._features.IdentifiedObject)
                    proto.mRID = proto.id;
                obj = new cls (proto, this._features); // do it again, possibly with mRID set

                // here's some rules
                var digitize_point = false;
                var digitize_line = false;
                if (this._features.Conductor)
                    digitize_line = true;
                else if (this._features.PowerSystemResource)
                    digitize_point = true;
                this.edit (obj);

                this._new_elements = [ obj ];
                if (digitize_line)
                    this.digitize_line (obj, this.make_cable.bind (this));
                else if (digitize_point)
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
                if (null != this._current_feature)
                {
                    var proto = JSON.parse (JSON.stringify (this._current_feature));
                    proto.id = proto.cls + (~~(1e6 * Math.random ())).toString ();
                    delete proto.aliasName;
                    delete proto.length;
                    this.create_from (proto);
                }
            }

            make_psr (feature)
            {
                var point = this._current_feature;
                var id = point.id;

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
                this._new_elements.push (new Common.Location (location, this._features));

                // set the position points
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
                this._new_elements.push (new Common.PositionPoint (pp, this._features));

                // add the location to the PSR object
                point.Location = location.id;
                var cls = cim.class_map (point);
                point = new cls (point, this._features);

                // update the form
                document.getElementById ("Location").value = location.id;

                // update the display
                this.refresh ();
            }

            make_cable (feature)
            {
                var line = this._current_feature;
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
                this._new_elements.push (new Common.Location (location, this._features));

                // set the position points
                for (var i = 0; i < feature.geometry.coordinates.length; i++)
                {
                    var lnglat = feature.geometry.coordinates[i];
                    this._new_elements.push (
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

                // add the location to the Cable object
                line.Location = location.id;
                var cls = cim.class_map (line);
                line = new cls (line, this._features);

                // update the form
                document.getElementById ("Location").value = location.id;

                // update the display
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

            edit (feature)
            {
                var buttons =
                text = text + buttons;

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

                this._current_feature = feature;
                var cls = cim.class_map (feature);
                cls.prototype.condition (feature);
                var template = cls.prototype.edit_template ();
                var text = mustache.render (template, feature);
                cls.prototype.uncondition (feature);
                document.getElementById ("edit_contents").innerHTML = text;
                this.on_map_resize ();
                this._resizer = this.on_map_resize.bind (this);
                this._map.on ("resize", this.on_map_resize.bind (this));
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
                this._map.off ("resize", this._resizer);
                this.render ();
            }

            regen ()
            {
                this.shutdown ();
                this._cimmap.redraw ();
            }

            save ()
            {
                if (null != this._current_feature)
                {
                    if (!this._features)
                    {
                        // editing an existing object
                        var old_obj = this._current_feature;
                        var cls = cim.class_map (old_obj);
                        var version = this.next_version (old_obj);
                        cls.prototype.remove (old_obj, this._cimmap.get_data ());
                        old_obj.id = version;
                        old_obj.mRID = version;
                        old_obj.EditDisposition = "delete";
                        var deleted = new cls (old_obj, this._cimmap.get_data ());
                        var obj = cls.prototype.submit ();
                        obj.id = obj.mRID;
                        obj.cls = old_obj.cls;
                        obj.EditDisposition = "edit";
                        // console.log (JSON.stringify (obj, null, 4));
                        this._current_feature = new cls (obj, this._cimmap.get_data ());
                    }
                    else
                    {
                        // saving a new set of objects
                        var id = this._current_feature.id;
                        for (var i = 0; i < this._new_elements.length; i++)
                        {
                            var feature = this._new_elements[i];
                            var obj = this._features[feature.cls][feature.id];
                            var cls = cim.class_map (obj);
                            if (id == obj.id)
                                obj = Object.assign (obj, cls.prototype.submit ());
                            var created = new cls (obj, this._cimmap.get_data ());
                            if (id == created.id)
                                this._current_feature = created;
                        }
                        delete this._new_elements;
                        delete this._features;
                    }
                    // remove features from edit layers
                    this._map.getSource ("edit points").setData ({ "type" : "FeatureCollection", "features" : [] });
                    this._map.getSource ("edit lines").setData ({ "type" : "FeatureCollection", "features" : [] });
                    // regenerate the map
                    this.regen ();
                }
            }

            del ()
            {
                if (null != this._current_feature)
                {
                    if (!this._features)
                    {
                        // delete existing feature
                        var old_obj = this._current_feature;
                        var cls = cim.class_map (old_obj);
                        cls.prototype.remove (old_obj, this._cimmap.get_data ());
                        old_obj.EditDisposition = "delete";
                        old_obj.id = this.next_version (old_obj);
                        old_obj.mRID = old_obj.id;
                        this._current_feature = new cls (old_obj, this._cimmap.get_data ());
                    }
                    else
                    {
                        delete this._new_elements;
                        delete this._features;
                        this._map.getSource ("edit points").setData ({ "type" : "FeatureCollection", "features" : [] });
                        this._map.getSource ("edit lines").setData ({ "type" : "FeatureCollection", "features" : [] });
                    }
                    this.regen ();
                }
            }

            cancel ()
            {
                delete this._new_elements;
                delete this._features;
                this._map.getSource ("edit points").setData ({ "type" : "FeatureCollection", "features" : [] });
                this._map.getSource ("edit lines").setData ({ "type" : "FeatureCollection", "features" : [] });
                this.shutdown ();
            }
        }

        return (CIMEdit);
    }
)