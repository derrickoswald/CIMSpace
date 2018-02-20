/**
 * Create a Conductor.
 */
"use strict";

define
(
    ["mustache", "cim", "./powersystemresourcemaker", "model/Common", "model/Core"],
    /**
     * @summary Make a CIM object at the Conductor level.
     * @description Digitizes a line and makes a Conductor element with connectivity.
     * @name conductormaker
     * @exports conductormaker
     * @version 1.0
     */
    function (mustache, cim, PowerSystemResourceMaker, Common, Core)
    {
        class ConductorMaker extends PowerSystemResourceMaker
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
                    if (data.Conductor)
                        ret.push (name);
                }
                ret.sort ();
                return (ret);
            }

            render_parameters ()
            {
                var ret = mustache.render (this.class_template (), { classes: this.classes () });
                var data = this._cimmap.get_data ();
                if (data)
                {
                    var template =
                    "    <div class='form-group row'>\n" +
                    "      <label class='col-sm-4 col-form-label' for='class_name'>Cable</label>\n" +
                    "      <div class='col-sm-8'>\n" +
                    "        <select id='cable_name' class='form-control custom-select'>\n" +
                    "{{#cables}}\n" +
                    "              <option value='{{id}}'>{{name}}</option>\n" +
                    "{{/cables}}\n";
                    "        </select>\n" +
                    "      </div>\n" +
                    "    </div>\n";
                    var wireinfos = [];
                    for (var name in data.WireInfo)
                        if (data.WireInfo[name].PerLengthParameters)
                            wireinfos.push (name);
                    // for now we only understand the first PerLengthSequenceImpedance
                    var cables = wireinfos.filter (name => data.PerLengthSequenceImpedance[data.WireInfo[name].PerLengthParameters[0]]);
                    if (0 != cables.length)
                        ret = ret + mustache.render (template, { cables: cables.map (x => data.WireInfo[x]) });
                }
                return (ret);
            }

            submit_parameters ()
            {
                var parameters = super.submit_parameters ();
                var data = this._cimmap.get_data ();
                if (data)
                {
                    var cable_name = document.getElementById ("cable_name");
                    if (cable_name)
                    {
                        cable_name = cable_name.value;
                        parameters.AssetDatasheet = cable_name; // add the cable type
                        parameters.PerLengthImpedance = data.WireInfo[cable_name].PerLengthParameters[0]; // add the per length parameters
                    }
                }
                return (parameters);
            }

            make_conductor (feature)
            {
                var line = this._cimedit.primary_element ();
                var id = line.id;

                var ret = this.make_location (id, "wgs84", feature);
                var location = ret[0];

                var connectivity1 = this.get_connectivity (feature.geometry.coordinates[0][0], feature.geometry.coordinates[0][1]);
                if (null == connectivity1) // invent a new node if there are none
                {
                    var node = this.new_connectivity (this._cimedit.generateId (id, "_node_1"));
                    ret.push (new Core.ConnectivityNode (node, this._features));
                    console.log ("no connectivity found at end 1, created ConnectivityNode " + node.id);
                    connectivity1 = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity1.BaseVoltage)
                        line.BaseVoltage = connectivity1.BaseVoltage;

                // add the terminals
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
                    ConnectivityNode: connectivity1.ConnectivityNode
                };
                if (connectivity1.TopologicalNode)
                    terminal1.TopologicalNode = connectivity1.TopologicalNode;

                var last = feature.geometry.coordinates.length - 1;
                var connectivity2 = this.get_connectivity (feature.geometry.coordinates[last][0], feature.geometry.coordinates[last][1]);
                if (null == connectivity2) // invent a new node if there are none
                {
                    var node = this.new_connectivity (this._cimedit.generateId (id, "_node_2"));
                    ret.push (new Core.ConnectivityNode (node, this._features));
                    console.log ("no connectivity found at end 2, created ConnectivityNode " + node.id);
                    connectivity2 = { ConnectivityNode: node.id };
                }
                else
                    if (connectivity2.BaseVoltage)
                        line.BaseVoltage = connectivity2.BaseVoltage;

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
                    ConnectivityNode: connectivity2.ConnectivityNode
                };
                if (connectivity2.TopologicalNode)
                    terminal2.TopologicalNode = connectivity2.TopologicalNode;

                ret.push (new Core.Terminal (terminal1, this._features));
                ret.push (new Core.Terminal (terminal2, this._features));

                // update the Conductor object
                line.Location = location.id; // add the location
                document.getElementById (id + "_Location").value = line.Location;
                this._cimedit.create_from (line);

                // add the base voltage to the form
                if (line.BaseVoltage)
                    document.getElementById (id + "_BaseVoltage").value = line.BaseVoltage;

                return (ret);
            }

            make (features)
            {
                this._features = features;
                var parameters = this.submit_parameters ();
                parameters.id = this._cimedit.uuidv4 ();
                var obj = this._cimedit.create_from (parameters);
                this._cimedit.refresh ();
                var cpromise = this._digitizer.line (obj, this._features);
                cpromise.setPromise (cpromise.promise ().then (this.make_conductor.bind (this)));
                return (cpromise);
            }
        }

        return (ConductorMaker);
    }
)