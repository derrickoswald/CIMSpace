/**
 * Create a PowerSystemResource.
 */
"use strict";

define
(
    ["mustache", "cim", "model/Common"],
    /**
     * @summary Make a CIM object at the PSR level.
     * @description Base class for CIM object makers
     * @name powersystemresourcemaker
     * @exports powersystemresourcemaker
     * @version 1.0
     */
    function (mustache, cim, Common)
    {
        class PowerSystemResourceMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                this._cimmap = cimmap;
                this._cimedit = cimedit;
                this._digitizer = digitizer;
            }

            classes ()
            {
                var ret = [];
                var cimclasses = cim.classes ();
                for (var name in cimclasses)
                {
                    var cls = cimclasses[name];
                    var data = {};
                    var obj = new cls ({}, data);
                    if (data.PowerSystemResource && !(data.Substation || data.ConductingEquipment))
                        ret.push (name);
                }
                ret.sort ();
                return (ret);
            }

            class_template ()
            {
                return (
                    "    <div class='form-group row'>\n" +
                    "      <label class='col-sm-4 col-form-label' for='psr_class'>Class</label>\n" +
                    "      <div class='col-sm-8'>\n" +
                    "        <select id='psr_class' class='form-control custom-select'>\n" +
                    "{{#classes}}\n" +
                    "              <option value='{{.}}'>{{.}}</option>\n" +
                    "{{/classes}}\n" +
                    "        </select>\n" +
                    "      </div>\n" +
                    "    </div>\n");
            }

            render_parameters ()
            {
                return (mustache.render (this.class_template (), { classes: this.classes () }));
            }

            submit_parameters ()
            {
                return ({ cls: document.getElementById ("psr_class").value });
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

            new_connectivity (id, container)
            {
                var c =
                {
                    EditDisposition: "new",
                    cls: "ConnectivityNode",
                    id: id,
                    mRID: id
                };
                if (container)
                    c.ConnectivityNodeContainer = container;
                return (c);
            }

            ensure_coordinate_systems ()
            {
                var ret = [];
                var data = this._cimmap.get_data ();
                if (!data || !data.CoordinateSystem || !data.CoordinateSystem["wgs84"])
                    ret.push (new Common.CoordinateSystem ({ EditDisposition: "new", cls: "CoordinateSystem", id: "wgs84", mRID: "wgs84", name: "WGS 84", description: "new World Geodetic System", crsUrn: "EPSG::4326" }, this._data));
                if (!data || !data.CoordinateSystem || !data.CoordinateSystem["pseudo_wgs84"])
                    ret.push (new Common.CoordinateSystem ({ EditDisposition: "new", cls: "CoordinateSystem", id: "pseudo_wgs84", mRID: "pseudo_wgs84", name: "WGS 84", description: "schematic coordinates translated to the new World Geodetic System", crsUrn: "EPSG::4326" }, this._data));
                return (ret);
            }

            make_location (id, coordsys, feature)
            {
                var ret = [];

                // create the location
                var lid = this._cimedit.generateId (id, "_location");
                var location =
                {
                    EditDisposition: "new",
                    cls: "Location",
                    id: lid,
                    mRID: lid,
                    CoordinateSystem: coordsys,
                    type: "geographic"
                };
                ret.push (new Common.Location (location, this._data));

                if (feature.geometry.type == "Point")
                {
                    // set the position point
                    var pp =
                    {
                        EditDisposition: "new",
                        Location: location.id,
                        cls: "PositionPoint",
                        id: this._cimedit.generateId (id, "_location_p"),
                        sequenceNumber: 1,
                        xPosition: feature.geometry.coordinates[0].toString (),
                        yPosition: feature.geometry.coordinates[1].toString ()
                    };
                    ret.push (new Common.PositionPoint (pp, this._data));
                }
                else if (feature.geometry.type == "LineString")
                {
                    // set the position points
                    for (var i = 0; i < feature.geometry.coordinates.length; i++)
                    {
                        var lnglat = feature.geometry.coordinates[i];
                        ret.push (
                            new Common.PositionPoint (
                                {
                                    EditDisposition: "new",
                                    Location: location.id,
                                    cls: "PositionPoint",
                                    id: this._cimedit.generateId (id, "_location_p" + (i + 1).toString ()),
                                    sequenceNumber: (i + 1).toString (),
                                    xPosition: lnglat[0].toString (),
                                    yPosition: lnglat[1].toString ()
                                },
                                this._data
                            )
                        );
                    }
                }

                ret = ret.concat (this.ensure_coordinate_systems ());

                return (ret);
            }

            make_psr (data, feature, power_system_resource)
            {
                this._data = data;
                var psr = power_system_resource || this._cimedit.primary_element ();
                var id = psr.id;

                var ret = this.make_location (id, "wgs84", feature);
                var location = ret[0];

                // add the location to the PSR object
                psr.Location = location.id;

                // if we're not called as a sub-program, update the editor
                if (!power_system_resource)
                    this._cimedit.create_from (psr);

                return (ret);
            }

            make (data)
            {
                var parameters = this.submit_parameters ();
                parameters.id = this._cimedit.uuidv4 ();
                var obj = this._cimedit.create_from (parameters);
                var cpromise = this._digitizer.point (obj, data);
                cpromise.setPromise (cpromise.promise ().then (this.make_psr.bind (this, data)));
                return (cpromise);
            }
        }

        return (PowerSystemResourceMaker);
    }
)