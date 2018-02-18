/**
 * Create a PowerTransformer.
 */
"use strict";

define
(
    ["cim", "./powersystemresourcemaker", "model/Core", "model/Wires"],
    /**
     * @summary Make a CIM object at the PowerTransformer level.
     * @description Digitizes a point and makes a PowerTransformer element with ends and connectivity.
     * @name powertransformermaker
     * @exports powertransformermaker
     * @version 1.0
     */
    function (cim, PowerSystemResourceMaker, Core, Wires)
    {
        class PowerTransformerMaker extends PowerSystemResourceMaker
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
                    if (data.PowerTransformer)
                        ret.push (name);
                }
                ret.sort ();
                return (ret);
            }

            make_transformer (feature)
            {
                var ret = [];

                var trafo = this._cimedit.primary_element ();
                var id = trafo.id;

                // ToDo: assume it's the primary?
                var connectivity = this.get_connectivity (feature.geometry.coordinates[0], feature.geometry.coordinates[1]);
                if (null == connectivity) // invent a new node if there are none
                {
                    var node = this.new_connectivity (this._cimedit.generateId (id, "_node_1"));
                    ret.push (new Core.ConnectivityNode (node, this._features));
                    console.log ("no connectivity found, created primary ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }

                // add the terminal
                var tid1 = this._cimedit.generateId (id, "_terminal_1");
                var terminal1 =
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
                    terminal1.TopologicalNode = connectivity.TopologicalNode;
                ret.push (new Core.Terminal (terminal1, this._features));

                // add a secondary connectivity node
                {
                    var node = this.new_connectivity (this._cimedit.generateId (id, "_node_2"));
                    ret.push (new Core.ConnectivityNode (node, this._features));
                    console.log ("created secondary ConnectivityNode " + node.id);
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

                // add power transformer ends
                var eid1 = this._cimedit.generateId (id, "_end_1");
                var end1 =
                {
                    EditDisposition: "new",
                    cls: "PowerTransformerEnd",
                    id: eid1,
                    mRID: eid1,
                    description: "PowerTransformer End",
                    name: eid1,
                    endNumber: 1,
                    Terminal: terminal1.id,
                    connectionKind: "http://iec.ch/TC57/2013/CIM-schema-cim16#WindingConnection.D",
                    PowerTransformer: id
                };
                var eid2 = this._cimedit.generateId (id, "_end_2");
                var end2 =
                {
                    EditDisposition: "new",
                    cls: "PowerTransformerEnd",
                    id: eid2,
                    mRID: eid2,
                    description: "PowerTransformer End",
                    name: eid2,
                    endNumber: 2,
                    Terminal: terminal2.id,
                    connectionKind: "http://iec.ch/TC57/2013/CIM-schema-cim16#WindingConnection.Yn",
                    PowerTransformer: id
                };
                ret.push (new Wires.PowerTransformerEnd (end1, this._features));
                ret.push (new Wires.PowerTransformerEnd (end2, this._features));

                ret = ret.concat (this.make_psr (feature));

                return (ret);
            }

            make (obj, elements, features)
            {
                this._elements = elements;
                this._features = features;
                var cpromise = this._digitizer.point (obj, this._features);
                cpromise.setPromise (cpromise.promise ().then (this.make_transformer.bind (this)));
                return (cpromise);
            }
        }

        return (PowerTransformerMaker);
    }
)