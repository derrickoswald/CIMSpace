/**
 * Create a PowerTransformer.
 */
"use strict";

define
(
    ["mustache", "cim", "./powersystemresourcemaker", "./conductingequipmentmaker", "model/Core", "model/Wires"],
    /**
     * @summary Make a CIM object at the PowerTransformer level.
     * @description Digitizes a point and makes a PowerTransformer element with ends and connectivity.
     * @name powertransformermaker
     * @exports powertransformermaker
     * @version 1.0
     */
    function (mustache, cim, PowerSystemResourceMaker, ConductingEquipmentMaker, Core, Wires)
    {
        class PowerTransformerMaker extends PowerSystemResourceMaker
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
                    if (data.PowerTransformer)
                        ret.push (name);
                }
                ret.sort ();
                return (ret);
            }

            render_parameters ()
            {
                return (mustache.render (this.class_template (), { classes: this.classes () }));
            }

            make_transformer (data, feature)
            {
                var ret = [];

                this._data = data;
                var trafo = this._cimedit.primary_element ();
                var id = trafo.id;

                var eqm = new ConductingEquipmentMaker (this._cimmap, this._cimedit, this._digitizer);

                // ToDo: assume it's the primary?
                var connectivity = this.get_connectivity (feature.geometry.coordinates[0], feature.geometry.coordinates[1]);
                if (null == connectivity) // invent a new node if there are none
                {
                    var node = this.new_connectivity (this._cimedit.generateId (id, "_node_1"));
                    ret.push (new Core.ConnectivityNode (node, this._data));
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
                ret.push (new Core.Terminal (terminal1, this._data));

                // add a secondary connectivity node
                {
                    var node = this.new_connectivity (this._cimedit.generateId (id, "_node_2"));
                    ret.push (new Core.ConnectivityNode (node, this._data));
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
                ret.push (new Core.Terminal (terminal2, this._data));

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
                    BaseVoltage: eqm.medium_voltage (),
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
                    BaseVoltage: eqm.low_voltage (),
                    Terminal: terminal2.id,
                    connectionKind: "http://iec.ch/TC57/2013/CIM-schema-cim16#WindingConnection.Yn",
                    PowerTransformer: id
                };
                ret.push (new Wires.PowerTransformerEnd (end1, this._data));
                ret.push (new Wires.PowerTransformerEnd (end2, this._data));

                ret = ret.concat (eqm.ensure_voltages (this._data));
                ret = ret.concat (eqm.ensure_status (this._data));
                trafo.normallyInService = true;
                trafo.SvStatus = eqm.in_use ();

                ret = ret.concat (this.make_psr (data, feature, trafo));
                this._cimedit.create_from (trafo);

                return (ret);
            }

            make (data)
            {
                var parameters = this.submit_parameters ();
                parameters.id = this._cimedit.uuidv4 ();
                var obj = this._cimedit.create_from (parameters);
                var cpromise = this._digitizer.point (obj, data);
                cpromise.setPromise (cpromise.promise ().then (this.make_transformer.bind (this, data)));
                return (cpromise);
            }
        }

        return (PowerTransformerMaker);
    }
)