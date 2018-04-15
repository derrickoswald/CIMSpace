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
                this._fusecount = 6;
                this._xoffset = 3.5e-5;
                this._yoffset = 3.0e-5;
            }

            static classes ()
            {
                return (["Substation"]);
            }

            render_parameters (proto)
            {
                return (super.render_parameters (proto));
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
                    ret.push (new Core.PSRType ({ EditDisposition: "new", cls: "PSRType", id: "PSRType_DistributionBox", mRID: "PSRType_DistributionBox", name: "Distribution Box", description: "N7 level station" }, this._cimedit.new_features ()));
                if (!this._cimmap.get ("PSRType", "PSRType_TransformerStation"))
                    ret.push (new Core.PSRType ({ EditDisposition: "new", cls: "PSRType", id: "PSRType_TransformerStation", mRID: "PSRType_TransformerStation", name: "Transformer Station", description: "N6 transfer level station" }, this._cimedit.new_features ()));
                if (!this._cimmap.get ("PSRType", "PSRType_Substation"))
                    ret.push (new Core.PSRType ({ EditDisposition: "new", cls: "PSRType", id: "PSRType_Substation", mRID: "PSRType_Substation", name: "Substation", description: "N4 transfer level statin" }, this._cimedit.new_features ()));
                return (ret);
            }

            make_substation (array)
            {
                var station = array[0];
                station.PSRType = this.transformer_station ();
                var lm = new LocationMaker (this._cimmap, this._cimedit, this._digitizer);

                // build a GeoJSON feature to locate all the pieces
                var feature = lm.extractFeature (array);
                var eqm = new ConductingEquipmentMaker (this._cimmap, this._cimedit, this._digitizer);
                array = array.concat (eqm.ensure_voltages ());
                array = array.concat (eqm.ensure_status ());
                array = array.concat (this.ensure_stations ());

                var x = feature.geometry.coordinates[0];
                var y = feature.geometry.coordinates[1];

                // add BusbarSection
                x = x + this._xoffset;
                feature.geometry.coordinates[0] = x;
                var bid = this._cimedit.get_cimmrid ().nextIdFor ("BusbarSection", station, "_busbar");
                var bus =
                {
                    EditDisposition: "new",
                    cls: "BusbarSection",
                    id: bid,
                    mRID: bid,
                    name: "Busbar",
                    BaseVoltage: eqm.low_voltage (),
                    normallyInService: true,
                    SvStatus: eqm.in_use (),
                    EquipmentContainer: station.id
                };
                var location = lm.create_location ("pseudo_wgs84", [bus], feature);
                var busbar = new Wires.BusbarSection (bus, this._cimedit.new_features ());
                var node = new Core.ConnectivityNode (this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", bus, "_node"), station.id), this._cimedit.new_features ());
                var tid = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", bus, "_terminal");
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
                var terminal = new Core.Terminal (t, this._cimedit.new_features ());

                array.push (busbar);
                array.push (terminal);
                array.push (node);
                array = array.concat (location);

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
                        did = this._cimedit.get_cimmrid ().nextIdFor ("Switch", station, "_switch");
                        var swtch =
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
                            EquipmentContainer: station.id
                        };
                        location = lm.create_location ("pseudo_wgs84", [swtch], feature);
                        device = new Wires.Switch (swtch, this._cimedit.new_features ());
                    }
                    else
                    {
                        did = this._cimedit.get_cimmrid ().nextIdFor ("Fuse", station, "_fuse_" + i);
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
                            EquipmentContainer: station.id
                        };
                        location = lm.create_location ("pseudo_wgs84", [f], feature);
                        device = new Wires.Fuse (f, this._cimedit.new_features ());
                    }

                    var tid1 = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", device, "_terminal_1");
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
                    var terminal1 = new Core.Terminal (t1, this._cimedit.new_features ());

                    var n = new Core.ConnectivityNode (this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", device, "_node_2"), station.id), this._cimedit.new_features ());
                    var tid2 =  this._cimedit.get_cimmrid ().nextIdFor ("Terminal", device, "_terminal_2");
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
                    var terminal2 = new Core.Terminal (t2, this._cimedit.new_features ());

                    array.push (device);
                    array.push (terminal1);
                    array.push (terminal2);
                    array.push (n);
                    array = array.concat (location);

                    feature.geometry.coordinates[1] = y - this._yoffset;
                    var cid = this._cimedit.get_cimmrid ().nextIdFor ("Connector", station, "_connector_" + (i + 1));
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
                        EquipmentContainer: station.id
                    };
                    location = lm.create_location ("pseudo_wgs84", [c], feature);
                    var connector = new Wires.Connector (c, this._cimedit.new_features ());
                    var tid3 = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", c, "_terminal");
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
                    var terminal3 = new Core.Terminal (t3, this._cimedit.new_features ());
                    array.push (connector);
                    array.push (terminal3);
                    array = array.concat (location);

                    x = x + this._xoffset;
                }

                return (array);
            }

            make ()
            {
                var parameters = this.submit_parameters ();

                var obj = this._cimedit.create_from (parameters);
                var cpromise = this._digitizer.point (obj, this._cimedit.new_features ());
                var lm = new LocationMaker (this._cimmap, this._cimedit, this._digitizer);
                cpromise.setPromise (lm.make (cpromise.promise (), "wgs84").then (this.make_substation.bind (this)));

                return (cpromise);
            }
        }

        return (SubstationMaker);
    }
)