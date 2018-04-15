/**
 * Create a Substation.
 */
"use strict";

define
(
    ["mustache", "cim", "./locationmaker", "./powersystemresourcemaker", "./conductingequipmentmaker", "model/Core", "model/Wires"],
    /**
     * @summary Make a collection of objects representing a Substation with internal data.
     * @description Digitizes a point and makes a Substation, PowerTransformer, BusbarSection, a number of Switch and Fuse with Connector and connectivity.
     * @name substationmaker
     * @exports substationmaker
     * @version 1.0
     */
    function (mustache, cim, LocationMaker, PowerSystemResourceMaker, ConductingEquipmentMaker, Core, Wires)
    {
        class SubstationMaker extends PowerSystemResourceMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                super (cimmap, cimedit, digitizer);
                this._locationmaker = new LocationMaker (this._cimmap, this._cimedit, this._digitizer);
                this._xoffset = 3.5e-5;
                this._yoffset = 3.0e-5;
            }

            static classes ()
            {
                return (["Substation"]);
            }

            render_parameters (proto)
            {
                var template =
                `
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label" for="type">Phase connection</label>
                      <div class="col-sm-8">
                        <select id="type" class="form-control custom-select" name="type" aria-describedby="typeHelp">
                        {{#types}}
                          <option value="{{value}}"{{#isSelected}} selected{{/isSelected}}>{{description}}</option>
                        {{/types}}
                        </select>
                        <small id="typeHelp" class="form-text text-muted">The type of plant, such as substation or distribution box.</small>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label" for="feeders">Iterations</label>
                      <div class="col-sm-8">
                        <input id="feeders" class="form-control" type="text" name="feeders" aria-describedby="feedersHelp" value="8">
                        <small id="feedersHelp" class="form-text text-muted">Number of feeder connections entering/leaving the substation.</small>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label" for="mRID">mRID</label>
                      <div class="col-sm-8">
                        <input id="mRID" class="form-control" type="text" name="mRID" aria-describedby="mRIDHelp" value="{{proto.mRID}}">
                        <small id="mRIDHelp" class="form-text text-muted">Unique identifier for the substation.</small>
                      </div>
                    </div>
                `;
                var types =
                [
                    { value: "PSRType_DistributionBox", description: "Distribution box" },
                    { value: "PSRType_TransformerStation", description: "Transformer station" },
                    { value: "PSRType_Substation", description: "Substation" }
                ];
                if (!proto)
                    proto = { mRID: this._cimedit.get_cimmrid ().nextIdFor ("Substation"), PSRType: "PSRType_TransformerStation" };
                var view = { proto: proto, types: types, isSelected: function () { return (proto.PSRType == this.value); } };
                var ret = mustache.render (template, view);
                return (ret);
            }

            /**
             * Scrape the form data and prepare to make the Substation.
             * @return an object with a prototype (substation) and the number of entry/exit connectors (feeders).
             */
            submit_parameters ()
            {
                var id = document.getElementById ("mRID").value;
                var substation =
                {
                    id: id,
                    mRID: id,
                    name: id,
                    cls: "Substation",
                    PSRType: document.getElementById ("type").value
                };
                var ret =
                {
                    feeders: Math.max (1, Number (document.getElementById ("feeders").value)),
                    substation: substation
                };

                return (ret);
            }

            distribution_box ()
            {
                return ("PSRType_DistributionBox");
            }

            transformer_station ()
            {
                return ("PSRType_TransformerStation");
            }

            substation ()
            {
                return ("PSRType_Substation");
            }

            ensure_stations ()
            {
                var ret = [];
                if (!this._cimmap.get ("PSRType", "PSRType_DistributionBox"))
                    ret.push (new Core.PSRType ({ cls: "PSRType", id: "PSRType_DistributionBox", mRID: "PSRType_DistributionBox", name: "Distribution Box", description: "N7 level station" }, this._cimedit.new_features ()));
                if (!this._cimmap.get ("PSRType", "PSRType_TransformerStation"))
                    ret.push (new Core.PSRType ({ cls: "PSRType", id: "PSRType_TransformerStation", mRID: "PSRType_TransformerStation", name: "Transformer Station", description: "N6 transfer level station" }, this._cimedit.new_features ()));
                if (!this._cimmap.get ("PSRType", "PSRType_Substation"))
                    ret.push (new Core.PSRType ({ cls: "PSRType", id: "PSRType_Substation", mRID: "PSRType_Substation", name: "Substation", description: "N4 transfer level statin" }, this._cimedit.new_features ()));
                return (ret);
            }

            make_substation (parameters, array)
            {
                var station = array[0];
                station.PSRType = this.transformer_station ();

                var eqm = new ConductingEquipmentMaker (this._cimmap, this._cimedit, this._digitizer);
                array = array.concat (eqm.ensure_voltages ());
                array = array.concat (eqm.ensure_status ());
                array = array.concat (this.ensure_stations ());

                // build a GeoJSON feature to locate all the pieces
                var feature = this._locationmaker.extractFeature (array);
                var x = feature.geometry.coordinates[0];
                var y = feature.geometry.coordinates[1];

                // add BusbarSection
                x = x + this._xoffset;
                feature.geometry.coordinates[0] = x;
                var bid = this._cimedit.get_cimmrid ().nextIdFor ("BusbarSection", station, "_busbar");
                var busbar = new Wires.BusbarSection (
                    {
                        cls: "BusbarSection",
                        id: bid,
                        mRID: bid,
                        name: bid,
                        description: station.name + " busbar",
                        BaseVoltage: eqm.low_voltage (),
                        normallyInService: true,
                        SvStatus: eqm.in_use (),
                        EquipmentContainer: station.id
                    }, this._cimedit.new_features ());
                var bus_n_location = this._locationmaker.create_location ("pseudo_wgs84", [busbar], feature);
                var node = new Core.ConnectivityNode (this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", busbar, "_node"), station.id), this._cimedit.new_features ());
                var tid = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", busbar, "_terminal");
                var terminal = new Core.Terminal (
                    {
                        cls: "Terminal",
                        id: tid,
                        mRID: tid,
                        name: tid,
                        description: station.name + " busbar terminal",
                        sequenceNumber: 1,
                        phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABCN",
                        connected: true,
                        ConductingEquipment: busbar.id,
                        ConnectivityNode: node.id
                    }, this._cimedit.new_features ());

                array = array.concat (bus_n_location);
                array.push (terminal);
                array.push (node);

                y = y - this._yoffset;
                for (var i = 0; i < parameters.feeders; i++)
                {
                    feature.geometry.coordinates[0] = x;
                    feature.geometry.coordinates[1] = y;
                    var did;
                    var location;
                    var device;

                    if (0 == i)
                    {
                        did = this._cimedit.get_cimmrid ().nextIdFor ("Switch", station, "_switch");
                        device = new Wires.Switch (
                            {
                                cls: "Switch",
                                id: did,
                                mRID: did,
                                name: did,
                                name: station.name + " switch",
                                BaseVoltage: eqm.low_voltage (),
                                normallyInService: true,
                                retained: true,
                                SvStatus: eqm.in_use (),
                                EquipmentContainer: station.id
                            }, this._cimedit.new_features ());
                        location = this._locationmaker.create_location ("pseudo_wgs84", [device], feature);
                    }
                    else
                    {
                        did = this._cimedit.get_cimmrid ().nextIdFor ("Fuse", station, "_fuse_" + i);
                        device = new Wires.Fuse (
                            {
                                cls: "Fuse",
                                id: did,
                                mRID: did,
                                name: did,
                                description: station.name + " feeder fuse " + i,
                                BaseVoltage: eqm.low_voltage (),
                                ratedCurrent: 125.0,
                                normallyInService: true,
                                SvStatus: eqm.in_use (),
                                EquipmentContainer: station.id
                            }, this._cimedit.new_features ());
                        location = this._locationmaker.create_location ("pseudo_wgs84", [device], feature);
                    }

                    var tid1 = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", device, "_terminal_1");
                    var terminal1 = new Core.Terminal (
                        {
                            cls: "Terminal",
                            id: tid1,
                            mRID: tid1,
                            name: tid1,
                            description: station.name + " feeder fuse " + i + " terminal 1",
                            sequenceNumber: 1,
                            phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABCN",
                            connected: true,
                            ConductingEquipment: did,
                            ConnectivityNode: node.id
                        }, this._cimedit.new_features ());
                    var n = new Core.ConnectivityNode (this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", device, "_node_2"), station.id), this._cimedit.new_features ());
                    var tid2 =  this._cimedit.get_cimmrid ().nextIdFor ("Terminal", device, "_terminal_2");
                    var terminal2 = new Core.Terminal (
                        {
                            cls: "Terminal",
                            id: tid2,
                            mRID: tid2,
                            name: tid2,
                            description: station.name + " feeder fuse " + i + " terminal 2",
                            sequenceNumber: 2,
                            phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABCN",
                            connected: true,
                            ConductingEquipment: did,
                            ConnectivityNode: n.id
                        }, this._cimedit.new_features ());

                    array = array.concat (location);
                    array.push (terminal1);
                    array.push (terminal2);
                    array.push (n);

                    feature.geometry.coordinates[1] = y - this._yoffset;
                    var cid = this._cimedit.get_cimmrid ().nextIdFor ("Connector", station, "_connector_" + (i + 1));
                    var connector = new Wires.Connector (
                        {
                            cls: "Connector",
                            id: cid,
                            mRID: cid,
                            name: cid,
                            description: station.name + " connector " + (i + 1),
                            BaseVoltage: eqm.low_voltage (),
                            normallyInService: true,
                            SvStatus: eqm.in_use (),
                            EquipmentContainer: station.id
                        }, this._cimedit.new_features ());
                    location = this._locationmaker.create_location ("pseudo_wgs84", [connector], feature);
                    var tid3 = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", connector, "_terminal");
                    var terminal3 = new Core.Terminal (
                        {
                            cls: "Terminal",
                            id: tid3,
                            mRID: tid3,
                            name: tid3,
                            description: station.name + " connector " + (i + 1) + " terminal",
                            sequenceNumber: 1,
                            phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABCN",
                            connected: true,
                            ConductingEquipment: connector.id,
                            ConnectivityNode: n.id
                        }, this._cimedit.new_features ());
                    array = array.concat (location);
                    array.push (terminal3);

                    x = x + this._xoffset;
                }

                return (array);
            }

            make ()
            {
                // ToDo: maybe need an interface to the map options?
                document.getElementById ("internal_features").checked = true;
                var parameters = this.submit_parameters ();
                var obj = this._cimedit.create_from (parameters.substation);
                var cpromise = this._digitizer.point (obj, this._cimedit.new_features ());
                cpromise.setPromise (this._locationmaker.make (cpromise.promise (), "wgs84").then (this.make_substation.bind (this, parameters)));

                return (cpromise);
            }
        }

        return (SubstationMaker);
    }
)