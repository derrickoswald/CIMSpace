/**
 * Create a Conductor.
 */
"use strict";

define
(
    ["lib/mustache", "cim", "./locationmaker", "./powersystemresourcemaker", "./conductingequipmentmaker", "model/Common", "model/Core", "model/StateVariables"],
    /**
     * @summary Make a CIM object at the Conductor level.
     * @description Digitizes a line and makes a Conductor element with connectivity.
     * @exports conductormaker
     * @version 1.0
     */
    function (mustache, cim, LocationMaker, PowerSystemResourceMaker, ConductingEquipmentMaker, Common, Core, StateVariables)
    {
        class ConductorMaker extends PowerSystemResourceMaker
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
                        if (data.Conductor)
                            ret.push (name);
                    }
                ret.sort ();
                return (ret);
            }

            render_parameters (proto)
            {
                let view = { classes: this.constructor.classes (), isSelected: function () { return (proto && (proto.cls === this)); } };
                let ret = mustache.render (this.class_template (), view);
                const template = `
<div class='form-group row'>
    <label class='col-sm-4 col-form-label' for='cable_name'>Cable</label>
    <div class='col-sm-8'>
        <select id='cable_name' class='form-control custom-select'>
{{#cables}}
            <option value='{{id}}' data-parameters='{{parameters}}'{{#isSelected}} selected{{/isSelected}}>{{name}}</option>
{{/cables}}
        </select>
    </div>
</div>
`;
                const cimmap = this._cimmap;
                const line_parameters = cimmap.fetch ("PerLengthLineParameter", param => param.WireAssemblyInfo);
                const cables = line_parameters.flatMap (
                    param =>
                    {
                        let ret = [];
                        const wai = this._cimmap.get ("WireAssemblyInfo", param.WireAssemblyInfo);
                        if (wai)
                        {
                            const wpi = this._cimmap.fetch ("WirePhaseInfo",
                                wpi =>
                                {
                                    if (wpi.WireAssemblyInfo === wai.id)
                                        return (wpi.WireInfo);
                                    else
                                        return (null);
                                }
                            );
                            if (wpi.length > 0)
                            {
                                const wire_info = this._cimmap.get ("WireInfo", wpi[0].WireInfo);
                                if (wire_info)
                                    ret = [{id: wire_info.id, parameters: param.id, name: wire_info.name }]; // won't fit: + " [max " + wire_info.ratedCurrent + "A]"
                            }
                        }
                        return (ret);
                    }
                );
                function fn ()
                {
                    return (proto && (proto.AssetDatasheet === this.id));
                }
                if (0 !== cables.length)
                {
                    view = { cables: cables, isSelected: fn };
                    ret = ret + mustache.render (template, view);
                }
                return (ret);
            }

            submit_parameters ()
            {
                const parameters = super.submit_parameters ();
                parameters.name = parameters.id;
                let cable_name = document.getElementById ("cable_name");
                if (cable_name)
                {
                    parameters.description = cable_name.options[cable_name.selectedIndex].text;
                    parameters.AssetDatasheet = cable_name.value; // add the wire info
                    parameters.PerLengthImpedance = cable_name.selectedOptions[0].getAttribute("data-parameters"); // add the per length parameters
                }
                // ToDo: make this dependent on ProductAssetModel.usageKind (from AssetInfo.AssetModel) when we add aerial wires
                parameters.PSRType = "PSRType_Underground";
                return (parameters);
            }

            distance (pp)
            {
                let ret = 0.0;
                for (let i = 0; i < pp.length - 1; i++)
                    ret += this._cimmap.measure (Number (pp[i].xPosition), Number (pp[i].yPosition), Number (pp[i + 1].xPosition), Number (pp[i + 1].yPosition));
                return (ret);
            }

            ensure_cables ()
            {
                const ret = [];
                if (!this._cimmap.get ("PSRType", "PSRType_Underground"))
                    ret.push (new Core.PSRType ({ cls: "PSRType", id: "PSRType_Underground", mRID: "PSRType_Underground", name: "Underground cable", description: "Buried cable in duct or trench." }, this._cimedit.new_features ()));
                if (!this._cimmap.get ("PSRType", "PSRType_Overhead"))
                    ret.push (new Core.PSRType ({ cls: "PSRType", id: "PSRType_Overhead", mRID: "PSRType_Overhead", name: "Overhead wires", description: "Aerial suspended conductors." }, this._cimedit.new_features ()));
                return (ret);
            }

            make_conductor (array)
            {
                const line = array[0];
                array = array.concat (this.ensure_cables ());

                // get the position points
                const pp = array.filter (o => o.cls === "PositionPoint").sort ((a, b) => a.sequenceNumber - b.sequenceNumber);
                array = array.concat (this.ensure_cables ());
                let connectivity1 = this.get_connectivity (Number (pp[0].xPosition), Number (pp[0].yPosition), line);
                if (null == connectivity1) // invent a new node if there are none
                {
                    const node = this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", line, "_node_1"));
                    array.push (new Core.ConnectivityNode (node, this._cimedit.new_features ()));
                    console.log ("no connectivity found at end 1, created ConnectivityNode " + node.id);
                    connectivity1 = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity1.BaseVoltage)
                        line.BaseVoltage = connectivity1.BaseVoltage;

                // add the terminals
                const tid1 = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", line, "_terminal_1");
                const terminal1 =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: tid1,
                    mRID: tid1,
                    name: tid1,
                    description: line.name + " starting terminal",
                    sequenceNumber: 1,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABC",
                    connected: true,
                    ConductingEquipment: line.id,
                    ConnectivityNode: connectivity1.ConnectivityNode
                };
                if (connectivity1.TopologicalNode)
                    terminal1.TopologicalNode = connectivity1.TopologicalNode;

                const last = pp.length - 1;
                let connectivity2 = this.get_connectivity (Number (pp[last].xPosition), Number (pp[last].yPosition), line);
                if (null == connectivity2) // invent a new node if there are none
                {
                    const node = this.new_connectivity (this._cimedit.get_cimmrid ().nextIdFor ("ConnectivityNode", line, "_node_2"));
                    array.push (new Core.ConnectivityNode (node, this._cimedit.new_features ()));
                    console.log ("no connectivity found at end 2, created ConnectivityNode " + node.id);
                    connectivity2 = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity2.BaseVoltage)
                        line.BaseVoltage = connectivity2.BaseVoltage;

                const tid2 = this._cimedit.get_cimmrid ().nextIdFor ("Terminal", line, "_terminal_2");
                const terminal2 =
                {
                    EditDisposition: "new",
                    cls: "Terminal",
                    id: tid2,
                    mRID: tid2,
                    name: tid2,
                    description: line.name + " ending terminal",
                    sequenceNumber: 2,
                    phases: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode.ABC",
                    connected: true,
                    ConductingEquipment: line.id,
                    ConnectivityNode: connectivity2.ConnectivityNode
                };
                if (connectivity2.TopologicalNode)
                    terminal2.TopologicalNode = connectivity2.TopologicalNode;

                array.push (new Core.Terminal (terminal1, this._cimedit.new_features ()));
                array.push (new Core.Terminal (terminal2, this._cimedit.new_features ()));

                line.length = this.distance (pp);
                const eqm = new ConductingEquipmentMaker (this._cimmap, this._cimedit, this._digitizer);
                array = array.concat (eqm.ensure_voltages ());
                line.normallyInService = true;
                if (!line.BaseVoltage)
                    line.BaseVoltage = eqm.low_voltage ();
                if (line.PerLengthImpedance)
                {
                    // do we really want to set r+jx and r0+jx0 from length and PerLengthSequenceImpedance? Seems redundant.
                    const plsi = this._cimmap.get ("PerLengthSequenceImpedance", line.PerLengthImpedance);
                    const m = line.length;
                    line.r = plsi.r * m;
                    line.x = plsi.x * m;
                    line.r0 = plsi.r0 * m;
                    line.x0 = plsi.x0 * m;
                }
                const svname = line.id + "_status";
                array.push (new StateVariables.SvStatus ({ EditDisposition: "new", cls: "SvStatus", id: svname, mRID: svname, name: svname, description: "Status for " + line.id + ".", inService: true, ConductingEquipment: line.id }, this._cimedit.new_features ()));

                return (array);
            }

            make ()
            {
                const parameters = this.submit_parameters ();
                const obj = this._cimedit.create_from (parameters);
                this._cimedit.refresh ();
                const cpromise = this._digitizer.line (obj, this._cimedit.new_features ());
                const lm = new LocationMaker (this._cimmap, this._cimedit);
                cpromise.setPromise (lm.make (cpromise.promise (), "wgs84"));
                cpromise.setPromise (cpromise.promise ().then (this.make_conductor.bind (this)));
                return (cpromise);
            }
        }

        return (ConductorMaker);
    }
);