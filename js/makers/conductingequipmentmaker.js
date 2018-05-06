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
     * @name conductingequipmentmaker
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

            render_parameters (proto)
            {
                var view = { classes: this.constructor.classes (), isSelected: function () { return (proto && (proto.cls == this)); } };
                return (mustache.render (this.class_template (), view ));
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

            ensure_voltages ()
            {
                var ret = [];
                if (!this._cimmap.get ("BaseVoltage", "BaseVoltage_150000"))
                    ret.push (new Core.BaseVoltage ({ EditDisposition: "new", cls: "BaseVoltage", id: "BaseVoltage_150000", mRID: "BaseVoltage_150000", name: "150kV", description: "high voltage", nominalVoltage: 150.0 }, this._cimedit.new_features ()));
                if (!this._cimmap.get ("BaseVoltage", "BaseVoltage_20000"))
                    ret.push (new Core.BaseVoltage ({ EditDisposition: "new", cls: "BaseVoltage", id: "BaseVoltage_20000", mRID: "BaseVoltage_20000", name: "20kV", description: "medium voltage", nominalVoltage: 20.0 }, this._cimedit.new_features ()));
                if (!this._cimmap.get ("BaseVoltage", "BaseVoltage_400"))
                    ret.push (new Core.BaseVoltage ({ EditDisposition: "new", cls: "BaseVoltage", id: "BaseVoltage_400", mRID: "BaseVoltage_400", name: "400V", description: "low voltage", nominalVoltage: 0.4 }, this._cimedit.new_features ()));
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
                var ret = [];
                if (!this._cimmap.get ("SvStatus", "in_use"))
                    ret.push (new StateVariables.SvStatus ({ EditDisposition: "new", cls: "SvStatus", id: "in_use", mRID: "in_use", name: "In Use", description: "Status for equipment in use.", inService: true }, this._cimedit.new_features ()));
                if (!this._cimmap.get ("SvStatus", "not_in_use"))
                    ret.push (new StateVariables.SvStatus ({ EditDisposition: "new", cls: "SvStatus", id: "not_in_use", mRID: "not_in_use", name: "Not In Use", description: "Status for equipment not in use", inService: false }, this._cimedit.new_features ()));
                return (ret);
            }

            make_equipment (array)
            {
                var equipment = array[0];

                // get the position
                var pp = array.filter (o => o.cls == "PositionPoint")[0];
                var connectivity = this.get_connectivity (Number (pp.xPosition), Number (pp.yPosition), equipment);
                if (null == connectivity) // invent a new node if there are none
                {
                    var node = this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", equipment, "_node"));
                    array.push (new Core.ConnectivityNode (node, this._cimedit.new_features ()));
                    console.log ("no connectivity found, created ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity.BaseVoltage)
                        equipment.BaseVoltage = connectivity.BaseVoltage;

                // add the terminal
                var tid = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", equipment, "_terminal");
                var terminal =
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
                var parameters = this.submit_parameters ();
                var obj = this._cimedit.create_from (parameters);
                var cpromise = this._digitizer.point (obj, this._cimedit.new_features ());
                var lm = new LocationMaker (this._cimmap, this._cimedit, this._digitizer);
                cpromise.setPromise (lm.make (cpromise.promise (), "wgs84").then (this.make_equipment.bind (this)));
                return (cpromise);
            }
        }

        return (ConductingEquipmentMaker);
    }
)