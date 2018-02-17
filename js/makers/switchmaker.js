/**
 * Create a Switch.
 */
"use strict";

define
(
    ["cim", "./powersystemresourcemaker", "model/Core"],
    /**
     * @summary Make a CIM object at the Switch level.
     * @description Digitizes a point and makes a Switch element with connectivity.
     * @name switchmaker
     * @exports switchmaker
     * @version 1.0
     */
    function (cim, PowerSystemResourceMaker, Core)
    {
        class SwitchMaker extends PowerSystemResourceMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                super (cimmap, cimedit, digitizer);
            }

            make_switch (feature)
            {
                var ret = [];

                var swtch = this.primary_element ();
                var id = swtch.id;

                var connectivity = this.get_connectivity (feature.geometry.coordinates[0], feature.geometry.coordinates[1]);
                if (null == connectivity) // invent a new node if there are none
                {
                    var node = this.new_connectivity (this._cimedit.generateId (id, "_node_1"));
                    ret.push (new Core.ConnectivityNode (node, this._features));
                    console.log ("no connectivity found, created ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity.BaseVoltage)
                        swtch.BaseVoltage = connectivity.BaseVoltage;

                // add the terminal
                var tid1 = this._cimedit.generateId (id, "_terminal_1");
                var terminal =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: tid1,
                    mRID: tid1,
                    name: tid1,
                    sequenceNumber: 1,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABC",
                    ConductingEquipment: id,
                    ConnectivityNode: connectivity.ConnectivityNode
                };
                if (connectivity.TopologicalNode)
                    terminal.TopologicalNode = connectivity.TopologicalNode;
                ret.push (new Core.Terminal (terminal, this._features));

                // add a secondary connectivity node
                {
                    var node = this.new_connectivity (this._cimedit.generateId (id, "_node_2"));
                    ret.push (new Core.ConnectivityNode (node, this._features));
                    console.log ("created second ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }
                var tid2 = this._cimedit.generateId (id, "_terminal_2");
                var terminal2 =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: tid2,
                    mRID: tid2,
                    name: tid2,
                    sequenceNumber: 2,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABC",
                    ConductingEquipment: id,
                    ConnectivityNode: connectivity.ConnectivityNode
                };
                ret.push (new Core.Terminal (terminal2, this._features));

                ret = ret.concat (this.make_psr (feature));

                return (ret);
            }

            make (obj, elements, features, cancel)
            {
                this._elements = elements;
                this._features = features;
                var cpromise = this._digitizer.point (obj, this._features, cancel);
                cpromise.setPromise (cpromise.promise ().then (this.make_switch.bind (this)));
                return (cpromise);
            }
        }

        return (SwitchMaker);
    }
)