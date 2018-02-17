/**
 * Create a ConductingEquipment.
 */
"use strict";

define
(
    ["cim", "./powersystemresourcemaker", "model/Core"],
    /**
     * @summary Make a CIM object at the ConductingEquipment level.
     * @description Digitizes a point and makes a ConductingEquipment element with connectivity.
     * @name conductingequipmentmaker
     * @exports conductingequipmentmaker
     * @version 1.0
     */
    function (cim, PowerSystemResourceMaker, Core)
    {
        class ConductingEquipmentMaker extends PowerSystemResourceMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                super (cimmap, cimedit, digitizer);
            }

            make_equipment (feature)
            {
                var ret = [];

                var equipment = this.primary_element ();
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

            make (obj, elements, features)
            {
                this._elements = elements;
                this._features = features;
                var cpromise = this._digitizer.point (obj, this._features);
                cpromise.setPromise (cpromise.promise ().then (this.make_equipment.bind (this)));
                return (cpromise);
            }
        }

        return (ConductingEquipmentMaker);
    }
)