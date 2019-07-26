/**
 * Create a Switch.
 */
"use strict";

define
(
    ["mustache", "cim", "./locationmaker", "./powersystemresourcemaker", "./conductingequipmentmaker", "model/Core"],
    /**
     * @summary Make a CIM object at the Switch level.
     * @description Digitizes a point and makes a Switch element with connectivity.
     * @exports switchmaker
     * @version 1.0
     */
    function (mustache, cim, LocationMaker, PowerSystemResourceMaker, ConductingEquipmentMaker, Core)
    {
        class SwitchMaker extends PowerSystemResourceMaker
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
                        if (data.Switch)
                            ret.push (name);
                    }
                ret.sort ();
                return (ret);
            }

            render_parameters (proto)
            {
                const view = { classes: this.constructor.classes (), isSelected: function () { return (proto && (proto.cls === this)); } };
                return (mustache.render (this.class_template (), view));
            }

            make_switch (array)
            {
                const swtch = array[0];
                const id = swtch.id;
                const eqm = new ConductingEquipmentMaker (this._cimmap, this._cimedit, this._digitizer);
                swtch.normalOpen = false;
                swtch.open = false;
                swtch.normallyInService = true;
                swtch.SvStatus = eqm.in_use ();

                // get the position
                const pp = array.filter (o => o.cls === "PositionPoint")[0];
                let connectivity = this.get_connectivity (Number (pp.xPosition), Number (pp.yPosition), swtch);
                if (null == connectivity) // invent a new node if there are none
                {
                    const node = this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", swtch, "_node_1"));
                    array.push (new Core.ConnectivityNode (node, this._cimedit.new_features ()));
                    console.log ("no connectivity found, created ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity.BaseVoltage)
                        swtch.BaseVoltage = connectivity.BaseVoltage;
                if (!swtch.BaseVoltage)
                    swtch.BaseVoltage = eqm.low_voltage ();

                // add the terminal
                const tid1 = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", swtch, "_terminal_1");
                const terminal =
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
                array.push (new Core.Terminal (terminal, this._cimedit.new_features ()));

                // add a second connectivity node
                {
                    const node = this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", swtch, "_node_2"));
                    array.push (new Core.ConnectivityNode (node, this._cimedit.new_features ()));
                    console.log ("created second ConnectivityNode " + node.id);
                    connectivity = { ConnectivityNode: node.id };
                }
                const tid2 = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", swtch, "_terminal_2");
                const terminal2 =
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

                array = array.concat (eqm.ensure_voltages ());
                array = array.concat (eqm.ensure_status ());

                return (array);
            }

            make ()
            {
                const parameters = this.submit_parameters ();
                const obj = this._cimedit.create_from (parameters);
                const cpromise = this._digitizer.point (obj, this._cimedit.new_features ());
                const lm = new LocationMaker (this._cimmap, this._cimedit);
                cpromise.setPromise (lm.make (cpromise.promise (), "wgs84"));
                cpromise.setPromise (cpromise.promise ().then (this.make_switch.bind (this)));
                return (cpromise);
            }
        }

        return (SwitchMaker);
    }
);