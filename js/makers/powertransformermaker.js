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

            static classes ()
            {
                const ret = ["PowerTransformer"]; // to avoid MktTransformer
                return (ret);
            }

            render_parameters (proto)
            {
                let ret = super.render_parameters (proto);
                const template =
                `
<div class="form-group row">
    <label class="col-sm-4 col-form-label" for="transformer_name">Transformer</label>
    <div class="col-sm-8">
        <select id="transformer_name" class="form-control custom-select">
{{#trafos}}
            <option value="{{id}}"{{#isSelected}} selected{{/isSelected}}>{{name}}</option>
{{/trafos}}
        </select>
    </div>
</div>
`;
                const trafos = this._cimmap.fetch ("PowerTransformerInfo", info => true);
                function fn ()
                {
                    return (proto && (proto.AssetDatasheet === this.id));
                }
                if (0 !== trafos.length)
                {
                    const view = { trafos: trafos, isSelected: fn };
                    ret = ret + mustache.render (template, view);
                }
                return (ret);
            }

            submit_parameters ()
            {
                const parameters = super.submit_parameters ();
                parameters.name = parameters.id;
                let transformer_name = document.getElementById ("transformer_name");
                if (transformer_name)
                {
                    parameters.description = transformer_name.options[transformer_name.selectedIndex].text;
                    transformer_name = transformer_name.value;
                    // ToDo: figure out vector group from end infos connectionKind and phaseAngleClock
                    // till then, just check for the most common one:
                    const info = this._cimmap.get ("PowerTransformerInfo", transformer_name);
                    if (info && info.description && 0 <= info.description.indexOf ("Dyn5"))
                        parameters.vectorGroup = "Dyn5";
                    parameters.AssetDatasheet = transformer_name; // add the transformer type
                }
                return (parameters);
            }

            make_transformer (array)
            {
                const trafo = array[0];

                const eqm = new ConductingEquipmentMaker (this._cimmap, this._cimedit, this._digitizer);
                trafo.normallyInService = true;
                trafo.SvStatus = eqm.in_use ();

                // ToDo: assume it's the primary?
                const pp = array.filter (o => o.cls === "PositionPoint")[0];
                let connectivity = this.get_connectivity (Number (pp.xPosition), Number (pp.yPosition), trafo);
                if (null == connectivity) // invent a new node if there are none
                {
                    const node = this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", trafo, "_node_1"));
                    array.push (new Core.ConnectivityNode (node, this._cimedit.new_features ()));
                    console.log ("no connectivity found, created primary ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }

                // add the terminals
                const terminals = [];
                const tid1 = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", trafo, "_terminal_1");
                const terminal1 =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: tid1,
                    mRID: tid1,
                    name: tid1,
                    sequenceNumber: 1,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABC",
                    ConductingEquipment: trafo.id,
                    ConnectivityNode: connectivity.ConnectivityNode
                };
                if (connectivity.TopologicalNode)
                    terminal1.TopologicalNode = connectivity.TopologicalNode;
                terminals.push (new Core.Terminal (terminal1, this._cimedit.new_features ()));

                // add a secondary connectivity node
                {
                    const node = this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", trafo, "_node_2"));
                    array.push (new Core.ConnectivityNode (node, this._cimedit.new_features ()));
                    console.log ("created secondary ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }
                const tid2 = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", trafo, "_terminal_2");
                const terminal2 =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: tid2,
                    mRID: tid2,
                    name: tid2,
                    sequenceNumber: 2,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABC",
                    ConductingEquipment: trafo.id,
                    ConnectivityNode: connectivity.ConnectivityNode
                };
                terminals.push (new Core.Terminal (terminal2, this._cimedit.new_features ()));
                array = array.concat (terminals);
                array = array.concat (eqm.ensure_voltages ());
                array = array.concat (eqm.ensure_status ());

                // add power transformer ends
                let endinfos = null;
                if (trafo.AssetDatasheet)
                {
                    let tankinfo = this._cimmap.fetch ("TransformerTankInfo", info => info.PowerTransformerInfo === trafo.AssetDatasheet);
                    if (tankinfo.length > 0)
                    {
                        tankinfo = tankinfo[0];
                        endinfos = this._cimmap.fetch ("TransformerEndInfo", info => info.TransformerTankInfo === tankinfo.id);
                    }
                }

                if (endinfos)
                {
                    const cimmap = this._cimmap;
                    const cimedit = this._cimedit;
                    const ends = endinfos.map (info =>
                        {
                            const id = cimedit.get_cimmrid ().nextIdFor ("PowerTransformerEnd", trafo, "_end_" + info.endNumber);
                            let voltage = cimmap.fetch ("BaseVoltage", voltage => voltage.nominalVoltage * 1000.0 === info.ratedU); // ToDo: get rid of this 1000 volt multiplier
                            if (voltage.length <= 0)
                                voltage = (info.endNumber < 2) ? eqm.medium_voltage () : eqm.low_voltage ();
                            else
                                voltage = voltage[0].id;
                            const terminal = terminals[info.endNumber - 1];
                            let impedance = cimmap.fetch ("TransformerMeshImpedance", mesh => mesh.FromTransformerEndInfo === info.id);
                            // ToDo: copy the TransformerMeshImpedance(s) or not?
                            impedance = (impedance.length > 0) ? impedance[0] : undefined;
                            const end =
                                Object.assign ({},
                                    info,
                                    impedance,
                                    {
                                        EditDisposition: "new",
                                        cls: "PowerTransformerEnd",
                                        id: id,
                                        mRID: id,
                                        aliasName: id,
                                        description: "PowerTransformer End " + info.endNumber,
                                        name: id,
                                        BaseVoltage: voltage,
                                        Terminal: terminal.id,
                                        PowerTransformer: trafo.id
                                    }
                                );
                            delete end.aliasName;
                            return (end);
                        }
                    );
                    array = array.concat (ends.map (end => new Wires.PowerTransformerEnd (end, cimedit.new_features ())));
                }
                else
                {
                    const eid1 = this._cimedit.get_cimmrid ().nextIdFor ("PowerTransformerEnd", trafo, "_end_1");
                    const end1 =
                    {
                        EditDisposition: "new",
                        cls: "PowerTransformerEnd",
                        id: eid1,
                        mRID: eid1,
                        description: "PowerTransformer End 1",
                        name: eid1,
                        endNumber: 1,
                        BaseVoltage: eqm.medium_voltage (),
                        Terminal: terminal1.id,
                        connectionKind: "http://iec.ch/TC57/2013/CIM-schema-cim16#WindingConnection.D",
                        PowerTransformer: trafo.id
                    };
                    const eid2 = this._cimedit.get_cimmrid ().nextIdFor ("PowerTransformerEnd", trafo, "_end_2");
                    const end2 =
                    {
                        EditDisposition: "new",
                        cls: "PowerTransformerEnd",
                        id: eid2,
                        mRID: eid2,
                        description: "PowerTransformer End 2",
                        name: eid2,
                        endNumber: 2,
                        BaseVoltage: eqm.low_voltage (),
                        Terminal: terminal2.id,
                        connectionKind: "http://iec.ch/TC57/2013/CIM-schema-cim16#WindingConnection.Yn",
                        PowerTransformer: trafo.id
                    };
                    array.push (new Wires.PowerTransformerEnd (end1, this._cimedit.new_features ()));
                    array.push (new Wires.PowerTransformerEnd (end2, this._cimedit.new_features ()));
                }

                return (array);
            }

            make ()
            {
                const parameters = this.submit_parameters ();
                const obj = this._cimedit.create_from (parameters);
                const cpromise = this._digitizer.point (obj, this._cimedit.new_features ());
                const lm = new LocationMaker (this._cimmap, this._cimedit);
                cpromise.setPromise (lm.make (cpromise.promise (), "wgs84"));
                cpromise.setPromise (cpromise.promise ().then (this.make_transformer.bind (this)));
                return (cpromise);
            }
        }

        return (PowerTransformerMaker);
    }
);