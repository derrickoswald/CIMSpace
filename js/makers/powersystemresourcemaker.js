/**
 * Create a PowerSystemResource.
 */
"use strict";

define
(
    ["cim", "model/Common"],
    /**
     * @summary Make a CIM object at the PSR level.
     * @description Base class for CIM object makers
     * @name powersystemresourcemaker
     * @exports powersystemresourcemaker
     * @version 1.0
     */
    function (cim, Common)
    {
        class PowerSystemResourceMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                this._cimmap = cimmap;
                this._cimedit = cimedit;
                this._digitizer = digitizer;
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
                    var text = this._cimedit.build (element);
                    document.getElementById ("edit_contents").innerHTML = text;
                    this._cimedit.process_related (element);
                }

                return (element);
            }

            ensure_coordinate_systems ()
            {
                var ret = [];
                var data = this._cimmap.get_data ();
                if (!data || !data.CoordinateSystem || !data.CoordinateSystem["wgs84"])
                    ret.push (new Common.CoordinateSystem ({ EditDisposition: "new", cls: "CoordinateSystem", id: "wgs84", mRID: "wgs84", name: "WGS 84", description: "new World Geodetic System", crsUrn: "EPSG::4326" }, this._features));
                if (!data || !data.CoordinateSystem || !data.CoordinateSystem["pseudo_wgs84"])
                    ret.push (new Common.CoordinateSystem ({ EditDisposition: "new", cls: "CoordinateSystem", id: "pseudo_wgs84", mRID: "pseudo_wgs84", name: "WGS 84", description: "schematic coordinates translated to the new World Geodetic System", crsUrn: "EPSG::4326" }, this._features));
                return (ret);
            }

            make_psr (feature)
            {
                var ret = this.ensure_coordinate_systems ();

                var psr = this.primary_element ();
                var id = psr.id;

                // create the location
                var lid = this._cimedit.generateId (id, "_location");
                var location =
                {
                    EditDisposition: "new",
                    cls: "Location",
                    id: lid,
                    mRID: lid,
                    CoordinateSystem: "wgs84",
                    type: "geographic"
                };
                ret.push (new Common.Location (location, this._features));

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
                ret.push (new Common.PositionPoint (pp, this._features));

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
                this._cimedit.refresh ();

                return (ret);
            }

            make (obj, elements, features)
            {
                this._elements = elements;
                this._features = features;
                var cpromise = this._digitizer.point (obj, this._features);
                cpromise.setPromise (cpromise.promise ().then (this.make_psr.bind (this)));
                return (cpromise);
            }
        }

        return (PowerSystemResourceMaker);
    }
)