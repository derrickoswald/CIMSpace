/**
 * Create a Switch.
 */
"use strict";

define
(
    ["mustache", "cim", "./powersystemresourcemaker", "./conductingequipmentmaker", "model/Core"],
    /**
     * @summary Make a CIM object at the Switch level.
     * @description Digitizes a point and makes a Switch element with connectivity.
     * @name switchmaker
     * @exports switchmaker
     * @version 1.0
     */
    function (mustache, cim, PowerSystemResourceMaker, ConductingEquipmentMaker, Core)
    {
        class SwitchMaker extends PowerSystemResourceMaker
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
                    if (data.Switch)
                        ret.push (name);
                }
                ret.sort ();
                return (ret);
            }

            render_parameters ()
            {
                return (mustache.render (this.class_template (), { classes: this.classes () }));
            }

            make_switch (feature)
            {
                var ret = [];

                var swtch = this._cimedit.primary_element ();
                var id = swtch.id;
                var eqm = new ConductingEquipmentMaker (this._cimmap, this._cimedit, this._digitizer);

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

                // add a second connectivity node
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

                ret = ret.concat (eqm.ensure_voltages (this._features));
                ret = ret.concat (eqm.ensure_status (this._features));
                swtch.normallyInService = true;
                swtch.SvStatus = eqm.in_use ();
                if (!swtch.BaseVoltage)
                    swtch.BaseVoltage = eqm.low_voltage ();
                ret = ret.concat (this.make_psr (feature, swtch));
                this._cimedit.create_from (swtch);

                return (ret);
            }

            make (features)
            {
                this._features = features;
                var parameters = this.submit_parameters ();
                parameters.id = this._cimedit.uuidv4 ();
                var obj = this._cimedit.create_from (parameters);
                var cpromise = this._digitizer.point (obj, this._features);
                cpromise.setPromise (cpromise.promise ().then (this.make_switch.bind (this)));
                return (cpromise);
            }
        }

        return (SwitchMaker);
    }
)