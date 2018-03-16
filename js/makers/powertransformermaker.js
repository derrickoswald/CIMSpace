/**
 * Create a PowerTransformer.
 */
"use strict";

define
(
    ["mustache", "cim", "./locationmaker", "./powersystemresourcemaker", "./conductingequipmentmaker", "model/Core", "model/Wires"],
    /**
     * @summary Make a CIM object at the PowerTransformer level.
     * @description Digitizes a point and makes a PowerTransformer element with ends and connectivity.
     * @name powertransformermaker
     * @exports powertransformermaker
     * @version 1.0
     */
    function (mustache, cim, LocationMaker, PowerSystemResourceMaker, ConductingEquipmentMaker, Core, Wires)
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

            make_transformer (array)
            {
                var trafo = array[0];
                var id = trafo.id;

                var eqm = new ConductingEquipmentMaker (this._cimmap, this._cimedit, this._digitizer);
                trafo.normallyInService = true;
                trafo.SvStatus = eqm.in_use ();

                // ToDo: assume it's the primary?
                var pp = array.filter (o => o.cls == "PositionPoint")[0];
                var connectivity = this.get_connectivity (Number (pp.xPosition), Number (pp.yPosition));
                if (null == connectivity) // invent a new node if there are none
                {
                    var node = this.new_connectivity (this._cimedit.generateId (id, "_node_1"));
                    array.push (new Core.ConnectivityNode (node, this._cimedit.new_features ()));
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
                array.push (new Core.Terminal (terminal1, this._cimedit.new_features ()));

                // add a secondary connectivity node
                {
                    var node = this.new_connectivity (this._cimedit.generateId (id, "_node_2"));
                    array.push (new Core.ConnectivityNode (node, this._cimedit.new_features ()));
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
                array.push (new Core.Terminal (terminal2, this._cimedit.new_features ()));

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
                array.push (new Wires.PowerTransformerEnd (end1, this._cimedit.new_features ()));
                array.push (new Wires.PowerTransformerEnd (end2, this._cimedit.new_features ()));

                array = array.concat (eqm.ensure_voltages ());
                array = array.concat (eqm.ensure_status ());

                return (array);
            }

            make ()
            {
                var parameters = this.submit_parameters ();
                parameters.id = this._cimedit.uuidv4 ();
                var obj = this._cimedit.create_from (parameters);
                var cpromise = this._digitizer.point (obj, this._cimedit.new_features ());
                var lm = new LocationMaker (this._cimmap, this._cimedit, this._digitizer);
                cpromise.setPromise (lm.make (cpromise.promise (), "pseudo_wgs84"));
                cpromise.setPromise (cpromise.promise ().then (this.make_transformer.bind (this)));
                return (cpromise);
            }
        }

        return (PowerTransformerMaker);
    }
)