/**
 * Create a Substation.
 */
"use strict";

define
(
    ["mustache", "cim", "./powersystemresourcemaker", "./conductingequipmentmaker", "model/Core", "model/Wires"],
    /**
     * @summary Make a collection of objects representing a Substation with internal data.
     * @description Digitizes a point and makes a Substation, PowerTransformer, BusbarSection, a number of Switch and Fuse with Connector and connectivity.
     * @name substationmaker
     * @exports substationmaker
     * @version 1.0
     */
    function (mustache, cim, PowerSystemResourceMaker, ConductingEquipmentMaker, Core, Wires)
    {
        class SubstationMaker extends PowerSystemResourceMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                super (cimmap, cimedit, digitizer);
                this._fusecount = 6;
                this._xoffset = 3.5e-5;
                this._yoffset = 3.0e-5;
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
                    if (data.Substation)
                        ret.push (name);
                }
                ret.sort ();
                return (ret);
            }

            render_parameters ()
            {
                return (mustache.render (this.class_template (), { classes: this.classes () }));
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

            ensure_stations (features)
            {
                var ret = [];
                var data = this._cimmap.get_data ();
                if (!data || !data.PSRType || !data.PSRType["PSRType_DistributionBox"])
                    ret.push (new Core.PSRType ({ EditDisposition: "new", cls: "PSRType", id: "PSRType_DistributionBox", mRID: "PSRType_DistributionBox", name: "Distribution Box", description: "N7 level station" }, features));
                if (!data || !data.PSRType || !data.PSRType["PSRType_TransformerStation"])
                    ret.push (new Core.PSRType ({ EditDisposition: "new", cls: "PSRType", id: "PSRType_TransformerStation", mRID: "PSRType_TransformerStation", name: "Transformer Station", description: "N6 transfer level station" }, features));
                if (!data || !data.PSRType || !data.PSRType["PSRType_Substation"])
                    ret.push (new Core.PSRType ({ EditDisposition: "new", cls: "PSRType", id: "PSRType_Substation", mRID: "PSRType_Substation", name: "Substation", description: "N4 transfer level statin" }, features));
                return (ret);
            }

            make_substation (feature)
            {
                var station = this._cimedit.primary_element ();
                var id = station.id;
                station.PSRType = this.transformer_station ();

                var ret = this.make_psr (feature, station);
                this._cimedit.create_from (station);

                var eqm = new ConductingEquipmentMaker (this._cimmap, this._cimedit, this._digitizer);
                ret = ret.concat (eqm.ensure_voltages (this._features));
                ret = ret.concat (eqm.ensure_status (this._features));
                ret = ret.concat (this.ensure_stations (this._features));

                var x = feature.geometry.coordinates[0];
                var y = feature.geometry.coordinates[1];

                // add BusbarSection
                x = x + this._xoffset;
                feature.geometry.coordinates[0] = x;
                var bid = this._cimedit.generateId (id, "_busbar");
                var location = this.make_location (bid, "pseudo_wgs84", feature);
                var b =
                {
                    EditDisposition: "new",
                    cls: "BusbarSection",
                    id: bid,
                    mRID: bid,
                    name: "Busbar",
                    BaseVoltage: eqm.low_voltage (),
                    normallyInService: true,
                    SvStatus: eqm.in_use (),
                    EquipmentContainer: id,
                    Location: location[0].id
                };
                var busbar = new Wires.BusbarSection (b, this._features);
                var node = new Core.ConnectivityNode (this.new_connectivity (this._cimedit.generateId (bid, "_node"), id), this._features);
                var tid = this._cimedit.generateId (bid, "_terminal");
                var t =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: tid,
                    mRID: tid,
                    name: tid,
                    sequenceNumber: 1,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABCN",
                    connected: true,
                    ConductingEquipment: busbar.id,
                    ConnectivityNode: node.id
                };
                var terminal = new Core.Terminal (t, this._features);

                ret.push (busbar);
                ret.push (terminal);
                ret.push (node);
                ret = ret.concat (location);

                y = y - this._yoffset;
                for (var i = 0; i < this._fusecount; i++)
                {
                    feature.geometry.coordinates[0] = x;
                    feature.geometry.coordinates[1] = y;
                    var did;
                    var location;
                    var device;

                    if (0 == i)
                    {
                        did = this._cimedit.generateId (id, "_switch");
                        location = this.make_location (did, "pseudo_wgs84", feature);
                        var s =
                        {
                            EditDisposition: "new",
                            cls: "Switch",
                            id: did,
                            mRID: did,
                            name: "S",
                            BaseVoltage: eqm.low_voltage (),
                            normallyInService: true,
                            retained: true,
                            SvStatus: eqm.in_use (),
                            EquipmentContainer: id,
                            Location: location[0].id
                        };
                        device = new Wires.Switch (s, this._features);
                    }
                    else
                    {
                        did = this._cimedit.generateId (id, "_fuse_" + i);
                        location = this.make_location (did, "pseudo_wgs84", feature);
                        var f =
                        {
                            EditDisposition: "new",
                            cls: "Fuse",
                            id: did,
                            mRID: did,
                            name: "F" + i,
                            BaseVoltage: eqm.low_voltage (),
                            ratedCurrent: 125.0,
                            normallyInService: true,
                            SvStatus: eqm.in_use (),
                            EquipmentContainer: id,
                            Location: location[0].id
                        };
                        device = new Wires.Fuse (f, this._features);
                    }

                    var tid1 = this._cimedit.generateId (did, "_terminal_1");
                    var t1 =
                    {
                        EditDisposition: "new",
                        cls: "Terminal",
                        id: tid1,
                        mRID: tid1,
                        name: tid1,
                        sequenceNumber: 1,
                        phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABCN",
                        connected: true,
                        ConductingEquipment: device.id,
                        ConnectivityNode: node.id
                    };
                    var terminal1 = new Core.Terminal (t1, this._features);

                    var n = new Core.ConnectivityNode (this.new_connectivity (this._cimedit.generateId (did, "_node"), id), this._features);
                    var tid2 = this._cimedit.generateId (did, "_terminal_2");
                    var t2 =
                    {
                        EditDisposition: "new",
                        cls: "Terminal",
                        id: tid2,
                        mRID: tid2,
                        name: tid2,
                        sequenceNumber: 2,
                        phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABCN",
                        connected: true,
                        ConductingEquipment: device.id,
                        ConnectivityNode: n.id
                    };
                    var terminal2 = new Core.Terminal (t2, this._features);

                    ret.push (device);
                    ret.push (terminal1);
                    ret.push (terminal2);
                    ret.push (n);
                    ret = ret.concat (location);

                    feature.geometry.coordinates[1] = y - this._yoffset;
                    var cid = this._cimedit.generateId (id, "_connector_" + (i + 1));
                    location = this.make_location (cid, "pseudo_wgs84", feature);
                    var c =
                    {
                        EditDisposition: "new",
                        cls: "Connector",
                        id: cid,
                        mRID: cid,
                        name: "C" + (i + 1),
                        BaseVoltage: eqm.low_voltage (),
                        normallyInService: true,
                        SvStatus: eqm.in_use (),
                        EquipmentContainer: id,
                        Location: location[0].id
                    };
                    var connector = new Wires.Connector (c, this._features);
                    var tid3 = this._cimedit.generateId (cid, "_terminal");
                    var t3 =
                    {
                        EditDisposition: "new",
                        cls: "Terminal",
                        id: tid3,
                        mRID: tid3,
                        name: tid3,
                        sequenceNumber: 1,
                        phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABCN",
                        connected: true,
                        ConductingEquipment: connector.id,
                        ConnectivityNode: n.id
                    };
                    var terminal3 = new Core.Terminal (t3, this._features);
                    ret.push (connector);
                    ret.push (terminal3);
                    ret = ret.concat (location);

                    x = x + this._xoffset;
                }

                return (ret);
            }

            make (features)
            {
                this._features = features;
                var parameters = this.submit_parameters ();
                parameters.id = this._cimedit.uuidv4 ();
                var obj = this._cimedit.create_from (parameters);
                var cpromise = this._digitizer.point (obj, this._features);
                cpromise.setPromise (cpromise.promise ().then (this.make_substation.bind (this)));
                return (cpromise);
            }
        }

        return (SubstationMaker);
    }
)