/**
 * Create a PowerSystemResource.
 */
"use strict";

define
(
    ["mustache", "cim", "./locationmaker"],
    /**
     * @summary Make a CIM object at the PSR level.
     * @description Base class for CIM object makers
     * @exports powersystemresourcemaker
     * @version 1.0
     */
    function (mustache, cim, LocationMaker)
    {
        class PowerSystemResourceMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                this._cimmap = cimmap;
                this._cimedit = cimedit;
                this._digitizer = digitizer;
            }

            static classes ()
            {
                const ret = [];
                const cimclasses = cim.classes ();
                for (let name in cimclasses)
                    if (cimclasses.hasOwnProperty (name))
                    {
                        const cls = cimclasses[name];
                        const data = {};
                        const obj = new cls ({}, data);
                        if (data.PowerSystemResource && !(data.Substation || data.ConductingEquipment))
                            ret.push (name);
                    }
                ret.sort ();
                return (ret);
            }

            class_template ()
            {
                return (
                    "    <div class='form-group row'{{#isHidden}} style='display: none;'{{/isHidden}}>\n" +
                    "      <label class='col-sm-4 col-form-label' for='psr_class'>Class</label>\n" +
                    "      <div class='col-sm-8'>\n" +
                    "        <select id='psr_class' class='form-control custom-select'>\n" +
                    "{{#classes}}\n" +
                    "              <option value='{{.}}'{{#isSelected}} selected{{/isSelected}}>{{.}}</option>\n" +
                    "{{/classes}}\n" +
                    "        </select>\n" +
                    "      </div>\n" +
                    "    </div>\n");
            }

            render_parameters (proto)
            {
                const classes = this.constructor.classes ();
                const view = { classes: classes, isHidden: function () { return (classes.length <= 1); }, isSelected: function () { return (proto && (proto.cls === this)); } };
                return (mustache.render (this.class_template (), view));
            }

            submit_parameters ()
            {
                const cls = document.getElementById ("psr_class").value;
                const id = this._cimedit.get_cimmrid ().nextIdFor (cls);
                return ({ cls: cls, id: id });
            }

            get_connectivity_for_equipment (equipment, point)
            {
                const ret = {};

                let ordered = [];
                this._cimmap.forAll ("PositionPoint", point => { if (point.Location === equipment.Location) ordered[point.sequenceNumber] = point; });
                // here we un-screw up the sequence numbers on the PositionPoint elements
                if ("undefined" == typeof (ordered[0]))
                    ordered = ordered.slice (1);

                // heuristic to get the sequence number of the terminal
                const index = ordered.indexOf (point);
                let sequence;
                if (0 === index)
                    sequence = "1";
                else if (index < ordered.length / 2)
                    sequence = "1";
                else
                    sequence = "2";

                // get the terminal with that sequence number and the total number of terminals
                let n = 0;
                let terminal = null;
                let default_terminal = null;
                this._cimmap.forAll ("Terminal",
                    t =>
                    {
                        if (t.ConductingEquipment === equipment.id)
                        {
                            n = n + 1;
                            if (null == default_terminal)
                                default_terminal = t;
                            if (t.sequenceNumber === sequence)
                                terminal = t;
                        }
                    }
                );

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
                else if (0 !== n)
                {
                    console.log ("connectivity not found using default terminal for " + equipment.cls + ":" + equipment.id);
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
                let ret = {};

                function eq (equipment) { return (this.get_connectivity_for_equipment (equipment, point)); }
                const list = equipments.map (eq.bind (this)).filter (function (connectivity) { return (connectivity.ConnectivityNode); });
                if (0 === list.length)
                    // no ConnectivityNode just pick the first new one
                    ret = list[0];
                else if (1 === list.length)
                    // one ConnectivityNode, use that
                    ret = list[0];
                else
                    // if they are all the same ConnectivityNode we're still OK
                    if (list.every (function (connectivity) { return (connectivity.ConnectivityNode === list[0].ConnectivityNode); }))
                        ret = list[0];
                    else
                    {
                        console.log ("too many ConnectivityNode found, using " + list[0].ConnectivityNode + " from " + JSON.stringify (list, null, 4));
                        ret = list[0];
                    }

                return (ret);
            }

            get_connectivity_for_point (not_obj, point)
            {
                let ret = null;
                const location = this._cimmap.get ("Location", point.Location);
                const matches = [];
                if (location)
                    this._cimmap.forAll ("ConductingEquipment",
                        equipment =>
                        {
                            if (equipment.Location === location.id && (not_obj.id !== equipment.id))
                            {
                                matches.push (equipment);
                                console.log ("connectivity found to " + equipment.cls + ":" + equipment.id);
                            }
                        }
                    );
                // if there are none, we have a problem Houston
                // if there is only one, use the best terminal
                if (1 === matches.length)
                    ret = this.get_connectivity_for_equipment (matches[0], point);
                else if (1 < matches.length)
                    // if there are many pieces of equipment with the same location, try our best to pick up the connectivity
                    ret = this.get_best_connectivity_for_equipment (matches, point);

                return (ret);
            }

            get_best_connectivity_for_points (not_obj, points)
            {
                let ret = {};

                function gc (point) { return (this.get_connectivity_for_point (not_obj, point)); }
                const list = points.map (gc.bind (this)).filter (x => null != x);
                if (0 !== list.length)
                {
                    const existing = list.filter (function (connectivity) { return (connectivity.ConnectivityNode); });
                    const uniques = existing.map (JSON.stringify).filter (function (value, index, self) { return (self.indexOf (value) === index); }).map (JSON.parse);
                    if (0 === uniques.length)
                        // no ConnectivityNode just pick the first new one
                        ret = list[0];
                    else if (1 === uniques.length)
                        // one ConnectivityNode, use that
                        ret = uniques[0];
                    else
                        // if they are all the same ConnectivityNode we're still OK
                        if (uniques.every (function (connectivity) { return (connectivity.ConnectivityNode === uniques[0].ConnectivityNode); }))
                            ret = uniques[0];
                        else
                        {
                            console.log ("too many ConnectivityNode found, using " + uniques[0].ConnectivityNode + " for points from " + JSON.stringify (uniques, null, 4));
                            ret = uniques[0];
                        }
                }

                return (ret);
            }

            get_connectivity (lng, lat, not_obj)
            {
                let ret = null;

                // get PositionPoint with matching coordinates
                const matches = [];
                this._cimmap.forAll ("PositionPoint",
                    point =>
                    {
                        const x = point.xPosition;
                        const y = point.yPosition;
                        const dx = lng - x;
                        const dy = lat - y;
                        if (dx * dx + dy * dy < 1e-12) // ToDo: a parameter somehow?
                        {
                            matches.push (point);
                            console.log ("match point d = " + (dx * dx + dy * dy).toString () + " " + point.id + " [" + point.xPosition + "," + point.yPosition + "]");
                        }
                    }
                );
                // if there are no matches, bail out
                // if there is only one, use that one
                if (1 === matches.length)
                    ret = this.get_connectivity_for_point (not_obj, matches[0]);
                else if (1 < matches.length)
                    ret = this.get_best_connectivity_for_points (not_obj, matches);

                return (ret);
            }

            new_connectivity (id, container)
            {
                const c =
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

            make_psr (array)
            {
                return (array);
            }

            make ()
            {
                const parameters = this.submit_parameters ();
                const obj = this._cimedit.create_from (parameters);
                const cpromise = this._digitizer.point (obj, this._cimedit.new_features ());
                const lm = new LocationMaker (this._cimmap, this._cimedit);
                cpromise.setPromise (lm.make (cpromise.promise (), "wgs84"));
                cpromise.setPromise (cpromise.promise ().then (this.make_psr.bind (this)));
                return (cpromise);
            }
        }

        return (PowerSystemResourceMaker);
    }
);