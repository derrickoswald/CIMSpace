/**
 * Create a ConductingEquipment.
 */
"use strict";

define
(
    ["mustache", "cim", "./locationmaker", "./powersystemresourcemaker", "model/Core", "model/StateVariables"],
    /**
     * @summary Make a CIM object at the ConductingEquipment level.
     * @description Digitizes a point and makes a ConductingEquipment element with connectivity.
     * @exports conductingequipmentmaker
     * @version 1.0
     */
    function (mustache, cim, LocationMaker, PowerSystemResourceMaker, Core, StateVariables)
    {
        class ConductingEquipmentMaker extends PowerSystemResourceMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                super (cimmap, cimedit, digitizer);
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
                        if (data.ConductingEquipment && !(data.Switch || data.Conductor || data.PowerTransformer))
                            ret.push (name);
                    }
                ret.sort ();
                return (ret);
            }

            render_parameters (proto)
            {
                const view = { classes: this.constructor.classes (), isSelected: function () { return (proto && (proto.cls === this)); } };
                return (mustache.render (this.class_template (), view ));
            }

            low_voltage ()
            {
                return ("BaseVoltage_400");
            }

            medium_voltage ()
            {
                return ("BaseVoltage_20000");
            }

            high_voltage ()
            {
                return ("BaseVoltage_150000");
            }

            make_voltage (voltage, description)
            {
                const v = Number (voltage.substr (voltage.indexOf ("_") + 1));
                const k = v / 1000.0;
                const n = (k >= 1.0) ? k.toString() + "kV" : v + "V";
                return (new Core.BaseVoltage ({ EditDisposition: "new", cls: "BaseVoltage", id: voltage, mRID: voltage, name: n, description: description, nominalVoltage: k }, this._cimedit.new_features ()));
            }

            ensure_voltages ()
            {
                const ret = [];
                if (!this._cimmap.get ("BaseVoltage", this.high_voltage ()))
                    ret.push (this.make_voltage (this.high_voltage (), "high voltage"));
                if (!this._cimmap.get ("BaseVoltage", this.medium_voltage ()))
                    ret.push (this.make_voltage (this.medium_voltage (), "medium voltage"));
                if (!this._cimmap.get ("BaseVoltage", this.low_voltage ()))
                    ret.push (this.make_voltage (this.low_voltage (), "low voltage"));
                return (ret);
            }

            in_use ()
            {
                return ("in_use");
            }

            not_in_use ()
            {
                return ("not_in_use");
            }

            ensure_status ()
            {
                const ret = [];
                if (!this._cimmap.get ("SvStatus", "in_use"))
                    ret.push (new StateVariables.SvStatus ({ EditDisposition: "new", cls: "SvStatus", id: "in_use", mRID: "in_use", name: "In Use", description: "Status for equipment in use.", inService: true }, this._cimedit.new_features ()));
                if (!this._cimmap.get ("SvStatus", "not_in_use"))
                    ret.push (new StateVariables.SvStatus ({ EditDisposition: "new", cls: "SvStatus", id: "not_in_use", mRID: "not_in_use", name: "Not In Use", description: "Status for equipment not in use", inService: false }, this._cimedit.new_features ()));
                return (ret);
            }

            make_equipment (array)
            {
                const equipment = array[0];

                // get the position
                const pp = array.filter (o => o.cls === "PositionPoint")[0];
                let connectivity = this.get_connectivity (Number (pp.xPosition), Number (pp.yPosition), equipment);
                if (null == connectivity) // invent a new node if there are none
                {
                    const node = this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", equipment, "_node"));
                    array.push (new Core.ConnectivityNode (node, this._cimedit.new_features ()));
                    console.log ("no connectivity found, created ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity.BaseVoltage)
                        equipment.BaseVoltage = connectivity.BaseVoltage;

                // add the terminal
                const tid = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", equipment, "_terminal");
                const terminal =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: tid,
                    mRID: tid,
                    name: tid,
                    sequenceNumber: 1,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABC",
                    ConductingEquipment: equipment.id,
                    ConnectivityNode: connectivity.ConnectivityNode
                };
                if (connectivity.TopologicalNode)
                    terminal.TopologicalNode = connectivity.TopologicalNode;
                array.push (new Core.Terminal (terminal, this._cimedit.new_features ()));

                if (!equipment.BaseVoltage)
                {
                    array = array.concat (this.ensure_voltages (this._cimedit.new_features ()));
                    equipment.BaseVoltage = this.low_voltage ();
                }

                return (array);
            }

            make ()
            {
                const parameters = this.submit_parameters ();
                const obj = this._cimedit.create_from (parameters);
                const cpromise = this._digitizer.point (obj, this._cimedit.new_features ());
                const lm = new LocationMaker (this._cimmap, this._cimedit);
                cpromise.setPromise (lm.make (cpromise.promise (), "wgs84").then (this.make_equipment.bind (this)));
                return (cpromise);
            }
        }

        return (ConductingEquipmentMaker);
    }
);