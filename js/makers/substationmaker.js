/**
 * Create a Substation.
 */
"use strict";

define
(
    ["mustache", "cim", "./locationmaker", "./powersystemresourcemaker", "./conductingequipmentmaker", "./powertransformermaker", "model/Core", "model/Wires"],
    /**
     * @summary Make a collection of objects representing a Substation with internal data.
     * @description Digitizes a point and makes a Substation, PowerTransformer, BusbarSection, a number of Switch and Fuse with Connector and connectivity.
     * @exports substationmaker
     * @version 1.0
     */
    function (mustache, cim, LocationMaker, PowerSystemResourceMaker, ConductingEquipmentMaker, PowerTransformerMaker, Core, Wires)
    {
        class SubstationMaker extends PowerSystemResourceMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                super (cimmap, cimedit, digitizer);
                this._locationmaker = new LocationMaker (cimmap, cimedit, digitizer);
                this._equipmentmaker = new ConductingEquipmentMaker (cimmap, cimedit, digitizer);
                this._transformermaker = new PowerTransformerMaker (cimmap, cimedit, digitizer);
                this._xoffset = 3.5e-5;
                this._yoffset = 3.0e-5;
            }

            static classes ()
            {
                return (["Substation"]);
            }

            render_parameters (proto)
            {
                const template =
`
    <div class="form-group row">
        <label class="col-sm-4 col-form-label" for="mRID">mRID</label>
        <div class="col-sm-8">
            <input id="mRID" class="form-control" type="text" name="mRID" aria-describedby="mRIDHelp" value="{{proto.mRID}}">
            <small id="mRIDHelp" class="form-text text-muted">Unique identifier for the substation.</small>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-4 col-form-label" for="feeders">Feeders</label>
        <div class="col-sm-8">
            <input id="feeders" class="form-control" type="text" name="feeders" aria-describedby="feedersHelp" value="8">
            <small id="feedersHelp" class="form-text text-muted">Number of feeders entering and/or leaving.</small>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-4 col-form-label" for="ratedCurrent">Rated current</label>
        <div class="col-sm-8">
            <input id="ratedCurrent" class="form-control" type="text" name="ratedCurrent" aria-describedby="ratedCurrentHelp" value="125.0">
            <small id="ratedCurrentHelp" class="form-text text-muted">Rated current for fuses.</small>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-4 col-form-label" for="with_trafo">Add transformer</label>
        <div class="col-sm-8">
            <div class='form-check'>
                <input id="with_trafo" class="form-check-input" type="checkbox" name="with_trafo" aria-describedby="withTrafoHelp" checked>
                <small id="withTrafoHelp" class="form-text text-muted">Include a transformer in the substation.</small>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-4 col-form-label" for="transformer_name">Transformer</label>
        <div class="col-sm-8">
            <select id="transformer_name" class="form-control custom-select">
{{#trafos}}
                <option value="{{id}}">{{name}}</option>
{{/trafos}}
            </select>
        </div>
    </div>
`;
                const types =
                [
                    { value: "PSRType_DistributionBox", description: "Distribution box" },
                    { value: "PSRType_TransformerStation", description: "Transformer station" },
                    { value: "PSRType_Substation", description: "Substation" }
                ];
                if (!proto)
                    proto = { mRID: this._cimedit.get_cimmrid ().nextIdFor ("Substation"), PSRType: "PSRType_TransformerStation" };
                const trafos = this._cimmap.fetch ("PowerTransformerInfo", info => true);
                const view = { proto: proto, trafos: trafos };
                const ret = mustache.render (template, view);
                return (ret);
            }

            /**
             * Scrape the form data and prepare to make the Substation.
             * @return {Object} an object with a prototype (substation) and the number of entry/exit connectors (feeders).
             */
            submit_parameters ()
            {
                const id = document.getElementById ("mRID").value;
                const substation =
                {
                    id: id,
                    mRID: id,
                    name: id,
                    cls: "Substation",
                    PSRType: document.getElementById ("with_trafo").checked ? "PSRType_TransformerStation" : "PSRType_DistributionBox"
                };
                const ret =
                {
                    feeders: Math.max (1, Number (document.getElementById ("feeders").value)),
                    ratedCurrent: document.getElementById ("ratedCurrent").value,
                    substation: substation
                };
                if (document.getElementById ("with_trafo").checked)
                    ret.transformer = document.getElementById ("transformer_name").value;

                return (ret);
            }

            ensure_stations ()
            {
                const ret = [];
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
                // build a GeoJSON feature to locate all the pieces
                const feature = this._locationmaker.extractFeature (array);
                let x = feature.geometry.coordinates[0];
                let y = feature.geometry.coordinates[1];

                if (parameters.existing) // attach new elements to an existing SubStation?
                    array = [parameters.existing];
                const station = array[0];

                array = array.concat (this._equipmentmaker.ensure_voltages ());
                array = array.concat (this._equipmentmaker.ensure_status ());
                array = array.concat (this.ensure_stations ());

                // remember the trafo location for later on
                const trafox = x - this._xoffset;
                const trafoy = y - this._yoffset;
                let trafo_node;

                // add BusbarSection
                x = x + this._xoffset;
                feature.geometry.coordinates[0] = x;
                const bid = this._cimedit.get_cimmrid ().nextIdFor ("BusbarSection", station, "_busbar");
                const busbar = new Wires.BusbarSection (
                    {
                        cls: "BusbarSection",
                        id: bid,
                        mRID: bid,
                        name: bid,
                        description: station.name + " busbar",
                        BaseVoltage: this._equipmentmaker.low_voltage (),
                        normallyInService: true,
                        SvStatus: this._equipmentmaker.in_use (),
                        EquipmentContainer: station.id
                    }, this._cimedit.new_features ());
                const bus_n_location = this._locationmaker.create_location ("pseudo_wgs84", [busbar], feature);
                let node = new Core.ConnectivityNode (this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", busbar, "_node"), station.id), this._cimedit.new_features ());
                const tid = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", busbar, "_terminal");
                let terminal = new Core.Terminal (
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
                for (let i = 0; i < parameters.feeders; i++)
                {
                    feature.geometry.coordinates[0] = x;
                    feature.geometry.coordinates[1] = y;
                    let did = null;
                    let fname = null;
                    let device = null;
                    let location;

                    if (0 === i)
                    {
                        did = this._cimedit.get_cimmrid ().nextIdFor ("Switch", station, "_switch");
                        fname = "switch";
                        device = new Wires.Switch (
                            {
                                cls: "Switch",
                                id: did,
                                mRID: did,
                                name: did,
                                description: station.name + " " + fname,
                                BaseVoltage: this._equipmentmaker.low_voltage (),
                                normalOpen: false,
                                open: false,
                                normallyInService: true,
                                retained: true,
                                SvStatus: this._equipmentmaker.in_use (),
                                EquipmentContainer: station.id
                            }, this._cimedit.new_features ());
                        location = this._locationmaker.create_location ("pseudo_wgs84", [device], feature);
                    }
                    else
                    {
                        did = this._cimedit.get_cimmrid ().nextIdFor ("Fuse", station, "_fuse_" + i);
                        fname = "feeder fuse " + i;
                        device = new Wires.Fuse (
                            {
                                cls: "Fuse",
                                id: did,
                                mRID: did,
                                name: did,
                                description: station.name + " " + fname,
                                BaseVoltage: this._equipmentmaker.low_voltage (),
                                ratedCurrent: parameters.ratedCurrent,
                                normalOpen: false,
                                open: false,
                                normallyInService: true,
                                SvStatus: this._equipmentmaker.in_use (),
                                EquipmentContainer: station.id
                            }, this._cimedit.new_features ());
                        location = this._locationmaker.create_location ("pseudo_wgs84", [device], feature);
                    }

                    const tid1 = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", device, "_terminal_1");
                    const terminal1 = new Core.Terminal (
                        {
                            cls: "Terminal",
                            id: tid1,
                            mRID: tid1,
                            name: tid1,
                            description: station.name + " " + fname + " terminal 1",
                            sequenceNumber: 1,
                            phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABCN",
                            connected: true,
                            ConductingEquipment: did,
                            ConnectivityNode: node.id
                        }, this._cimedit.new_features ());
                    const n = new Core.ConnectivityNode (this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", device, "_node_2"), station.id), this._cimedit.new_features ());
                    if (0 === i)
                        trafo_node = n;
                    const tid2 =  this._cimedit.get_cimmrid ().nextIdFor ("Terminal", device, "_terminal_2");
                    const terminal2 = new Core.Terminal (
                        {
                            cls: "Terminal",
                            id: tid2,
                            mRID: tid2,
                            name: tid2,
                            description: station.name + " " + fname + " terminal 2",
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
                    const cid = this._cimedit.get_cimmrid ().nextIdFor ("Connector", station, "_connector_" + (i + 1));
                    const connector = new Wires.Connector (
                        {
                            cls: "Connector",
                            id: cid,
                            mRID: cid,
                            name: cid,
                            description: station.name + " connector " + (i + 1),
                            BaseVoltage: this._equipmentmaker.low_voltage (),
                            normallyInService: true,
                            SvStatus: this._equipmentmaker.in_use (),
                            EquipmentContainer: station.id
                        }, this._cimedit.new_features ());
                    location = this._locationmaker.create_location ("pseudo_wgs84", [connector], feature);
                    const tid3 = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", connector, "_terminal");
                    const terminal3 = new Core.Terminal (
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

                // add a transformer if it was requested
                if (parameters.transformer)
                {
                    const id = this._cimedit.get_cimmrid ().nextIdFor ("PowerTransformer", station, "_transformer");
                    const trafo =
                        {
                            cls: "PowerTransformer",
                            id: id,
                            mRID: id,
                            name: id,
                            description: station.name + " transformer",
                            AssetDatasheet: parameters.transformer,
                            EquipmentContainer: station.id
                        };
                    // ToDo: figure out vector group from end infos connectionKind and phaseAngleClock
                    // till then, just check for the most common one:
                    const info = this._cimmap.get ("PowerTransformerInfo", parameters.transformer);
                    if (info && info.description && 0 <= info.description.indexOf ("Dyn5"))
                        trafo.vectorGroup = "Dyn5";

                    const obj = this._cimedit.create_from (trafo);
                    feature.geometry.coordinates[0] = trafox;
                    feature.geometry.coordinates[1] = trafoy;
                    const trafo_n_location = this._locationmaker.create_location ("pseudo_wgs84", [obj], feature);
                    const trafo_all = this._transformermaker.make_transformer (trafo_n_location);

                    // make a surgical cut to remove the transformer's second ConnectivityNode and
                    // replace it with the Switch second ConnectivityNode
                    const terminal = trafo_all.find (x => ((x.cls === "Terminal") && (x.sequenceNumber === 2)));
                    const node = trafo_all.findIndex (x => ((x.cls === "ConnectivityNode") && (x.id === terminal.ConnectivityNode)));
                    terminal.ConnectivityNode = trafo_node.id;
                    trafo_all.splice (node, 1);

                    array = array.concat (trafo_all);
                }

                return (array);
            }

            make ()
            {
                // ToDo: maybe need an interface to the map options?
                document.getElementById ("internal_features").checked = true;
                const parameters = this.submit_parameters ();
                // if it's an already existing station, proceed with the digitization, but handle is specially later
                parameters.existing = this._cimmap.get ("Substation", parameters.substation.mRID);
                const obj = this._cimedit.create_from (parameters.substation);
                const cpromise = this._digitizer.point (obj, this._cimedit.new_features ());
                cpromise.setPromise (this._locationmaker.make (cpromise.promise (), "wgs84").then (this.make_substation.bind (this, parameters)));

                return (cpromise);
            }
        }

        return (SubstationMaker);
    }
);