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
            }

            add_cable (event)
            {
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
                        id: "NewACLineSegment_location",
                        mRID: "NewACLineSegment_location",
                        type: "geographic"
                    };
                    var bounds = this._map.getBounds ();
                    var coordinates = bounds.toArray(); // = [[-73.9876, 40.7661], [-73.9397, 40.8002]]
                    var spanx = coordinates[1][0] - coordinates[0][0];
                    var spany = coordinates[1][1] - coordinates[0][1];
                    var dx = Math.abs (spanx * 0.10); // 10% smaller
                    var dy = Math.abs (spany * 0.10); // 10% smaller
                    var geometry = [[coordinates[0][0] + dx, coordinates[0][1] + dy], [coordinates[1][0] - dx, coordinates[1][1]- dy]];
                    var point1 =
                    {
                        EditDisposition: "new",
                        Location: location.id,
                        cls: "PositionPoint",
                        id: "NewACLineSegment_location_p1",
                        sequenceNumber: "0", // mistake: PositionPoint sequenceNumbers are not zero-based
                        xPosition: geometry[0][0].toString (),
                        yPosition: geometry[0][1].toString ()
                    };
                    var point2 =
                    {
                        EditDisposition: "new",
                        Location: location.id,
                        cls: "PositionPoint",
                        id: "NewACLineSegment_location_p2",
                        sequenceNumber: "1",
                        xPosition: geometry[1][0].toString (),
                        yPosition: geometry[0][1].toString ()
                    };
                    var point3 =
                    {
                        EditDisposition: "new",
                        Location: location.id,
                        cls: "PositionPoint",
                        id: "NewACLineSegment_location_p3",
                        sequenceNumber: "2",
                        xPosition: geometry[1][0].toString (),
                        yPosition: geometry[1][1].toString ()
                    };
                    var point4 =
                    {
                        EditDisposition: "new",
                        Location: location.id,
                        cls: "PositionPoint",
                        id: "NewACLineSegment_location_p4",
                        sequenceNumber: "3",
                        xPosition: geometry[0][0].toString (),
                        yPosition: geometry[1][1].toString ()
                    };
                    var point5 =
                    {
                        EditDisposition: "new",
                        Location: location.id,
                        cls: "PositionPoint",
                        id: "NewACLineSegment_location_p5",
                        sequenceNumber: "4",
                        xPosition: geometry[0][0].toString (),
                        yPosition: geometry[0][1].toString ()
                    };

                    proto.id = 'NewACLineSegment';
                    proto.mRID = 'NewACLineSegment';
                    proto.EditDisposition = "new";
                    delete proto.aliasName;
                    delete proto.length;
                    proto.Location = location.id;

                    // OK build it
                    this._features = this._features.concat (
                        [
                            new Wires.ACLineSegment (proto, this._cimmap.get_data ()),
                            new Common.Location (location, this._cimmap.get_data ()),
                            new Common.PositionPoint (point1, this._cimmap.get_data ()),
                            new Common.PositionPoint (point2, this._cimmap.get_data ()),
                            new Common.PositionPoint (point3, this._cimmap.get_data ()),
                            new Common.PositionPoint (point4, this._cimmap.get_data ()),
                            new Common.PositionPoint (point5, this._cimmap.get_data ()),
                        ]
                    )
                    this.refresh ();
                }
                else
                    alert ("no prototype cable found");
            }

            remove_cable (event)
            {
                for (var i = 0; i < this._features.length; i++)
                    this._features[i].remove (this._cimmap.get_data ());
                this._features = [];
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

                // simple circle from 14 to 17
                this._map.addLayer (layers.circle_layer ("edit_circle", "edit points", "rgb(255, 0, 0)"))

                // symbol icon from 17 and deeper
                this._map.addLayer (layers.symbol_layer ("edit_symbol", "edit points", "rgb(255, 0, 0)"));
            }
        }

        return (CIMEdit);
    }
)