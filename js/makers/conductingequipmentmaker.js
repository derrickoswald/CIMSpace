/**
 * Create a ConductingEquipment.
 */
"use strict";

define
(
    ["mustache", "cim", "./powersystemresourcemaker", "model/Core"],
    /**
     * @summary Make a CIM object at the ConductingEquipment level.
     * @description Digitizes a point and makes a ConductingEquipment element with connectivity.
     * @name conductingequipmentmaker
     * @exports conductingequipmentmaker
     * @version 1.0
     */
    function (mustache, cim, PowerSystemResourceMaker, Core)
    {
        class ConductingEquipmentMaker extends PowerSystemResourceMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                super (cimmap, cimedit, digitizer);
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
                    if (data.ConductingEquipment && !(data.Switch || data.Conductor || data.PowerTransformer))
                        ret.push (name);
                }
                ret.sort ();
                return (ret);
            }

            render_parameters ()
            {
                return (mustache.render (this.class_template (), { classes: this.classes () }));
            }

            low_voltage ()
            {
                return ("BaseVoltage_400");
            }

            medium_voltage ()
            {
                return ("BaseVoltage_16000");
            }

            high_voltage ()
            {
                return ("BaseVoltage_150000");
            }

            ensure_voltages (features)
            {
                var ret = [];
                var data = this._cimmap.get_data ();
                if (!data || !data.BaseVoltage || !data.BaseVoltage["BaseVoltage_150000"])
                    ret.push (new Core.BaseVoltage ({ EditDisposition: "new", cls: "BaseVoltage", id: "BaseVoltage_150000", mRID: "BaseVoltage_150000", name: "150kV", description: "high voltage", nominalVoltage: 150.0 }, features));
                if (!data || !data.BaseVoltage || !data.BaseVoltage["BaseVoltage_16000"])
                    ret.push (new Core.BaseVoltage ({ EditDisposition: "new", cls: "BaseVoltage", id: "BaseVoltage_16000", mRID: "BaseVoltage_16000", name: "16kV", description: "medium voltage", nominalVoltage: 16.0 }, features));
                if (!data || !data.BaseVoltage || !data.BaseVoltage["BaseVoltage_400"])
                    ret.push (new Core.BaseVoltage ({ EditDisposition: "new", cls: "BaseVoltage", id: "BaseVoltage_400", mRID: "BaseVoltage_400", name: "400V", description: "low voltage", nominalVoltage: 0.4 }, features));
                return (ret);
            }

            make_equipment (feature)
            {
                var ret = [];

                var equipment = this._cimedit.primary_element ();
                var id = equipment.id;

                var connectivity = this.get_connectivity (feature.geometry.coordinates[0], feature.geometry.coordinates[1]);
                if (null == connectivity) // invent a new node if there are none
                {
                    var node = this.new_connectivity (this._cimedit.generateId (id, "_node"));
                    ret.push (new Core.ConnectivityNode (node, this._features));
                    console.log ("no connectivity found, created ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity.BaseVoltage)
                        equipment.BaseVoltage = connectivity.BaseVoltage;

                // add the terminal
                var tid = this._cimedit.generateId (id, "_terminal_1");
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
                ret.push (new Core.Terminal (terminal, this._features));

                ret = ret.concat (this.make_psr (feature));

                return (ret);
            }

            make (features)
            {
                this._features = features;
                var parameters = this.submit_parameters ();
                parameters.id = this._cimedit.uuidv4 ();
                var obj = this._cimedit.create_from (parameters);
                var cpromise = this._digitizer.point (obj, this._features);
                cpromise.setPromise (cpromise.promise ().then (this.make_equipment.bind (this)));
                return (cpromise);
            }
        }

        return (ConductingEquipmentMaker);
    }
)