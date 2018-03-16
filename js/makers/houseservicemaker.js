/**
 * Create a EnergyConsumer.
 */
"use strict";

define
(
    ["mustache", "cim", "./locationmaker", "./conductingequipmentmaker", "model/Core", "model/StateVariables"],
    /**
     * @summary Make an EnergyConsumer CIM object representing a house service.
     * @description Digitizes a point and then a conductor with connectivity.
     * @name houseservicemaker
     * @exports houseservicemaker
     * @version 1.0
     */
    function (mustache, cim, LocationMaker, ConductingEquipmentMaker, Core, StateVariables)
    {
        class HouseServiceMaker extends ConductingEquipmentMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                super (cimmap, cimedit, digitizer);
            }

            render_parameters ()
            {
                var template =
                `
                    <div class='form-group row'>
                      <label class='col-sm-4 col-form-label' for='customerCount'>Customer count</label>
                      <div class='col-sm-8'>
                        <input id='customerCount' class='form-control' type='text' name='customerCount' aria-describedby='customerCountHelp' value='1'>
                        <small id='customerCountHelp' class='form-text text-muted'>Number of individual customers represented by this demand.</small>
                      </div>
                    </div>
                    <div class='form-group row'>
                      <label class='col-sm-4 col-form-label' for='p'>Active power</label>
                      <div class='col-sm-8'>
                        <input id='p' class='form-control' type='text' name='p' aria-describedby='pHelp' value=''>
                        <small id='pHelp' class='form-text text-muted'>Active power of the load, (+)=flow out (VA).</small>
                      </div>
                    </div>
                    <div class='form-group row'>
                      <label class='col-sm-4 col-form-label' for='q'>Active power</label>
                      <div class='col-sm-8'>
                        <input id='q' class='form-control' type='text' name='q' aria-describedby='qHelp' value=''>
                        <small id='qHelp' class='form-text text-muted'>Reactive power of the load, (+)=flow out (VAr).</small>
                      </div>
                    </div>
                    <div class='form-group row'>
                      <label class='col-sm-4 col-form-label' for='phaseConnection'>Phase connection</label>
                      <div class='col-sm-8'>
                        <select id='phaseConnection' class='form-control custom-select' name='phaseConnection' aria-describedby='phaseConnectionHelp'>
                          <option value='http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseShuntConnectionKind.D'>Delta</option>
                          <option value='http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseShuntConnectionKind.I'>Independent</option>
                          <option value='http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseShuntConnectionKind.Y'>Wye</option>
                          <option value='http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseShuntConnectionKind.Yn' selected>Wye with neutral</option>
                        </select>
                        <small id='phaseConnectionHelp' class='form-text text-muted'>The type of phase connection, such as wye or delta.</small>
                      </div>
                    </div>
                `;
                var data = this._cimmap.get_data ();
                var view = {};
                if (data)
                {
                    var wireinfos = [];
                    for (var name in data.WireInfo)
                        if (data.WireInfo[name].PerLengthParameters)
                            wireinfos.push (name);
                    // for now we only understand the first PerLengthSequenceImpedance
                    var cables = wireinfos.filter (name => data.PerLengthSequenceImpedance[data.WireInfo[name].PerLengthParameters[0]]);
                    if (0 != cables.length)
                    {
                        view.cables = cables.map (x => data.WireInfo[x]);
                        template = template +
                        `
                            <div class='form-group row'>
                              <label class='col-sm-4 col-form-label' for='cable_name'>Cable</label>
                              <div class='col-sm-8'>
                                <select id='cable_name' class='form-control custom-select' name='cable_name' aria-describedby='cable_nameHelp'>
                                  {{#cables}}
                                    <option value='{{id}}'>{{name}}</option>
                                  {{/cables}}
                                </select>
                                <small id='cable_nameHelp' class='form-text text-muted'>The type of cable for this service.</small>
                              </div>
                            </div>
                        `;
                    }
                }
                var ret = mustache.render (template, view);
                return (ret);
            }

            submit_parameters ()
            {
                var consumer = { cls: "EnergyConsumer", EditDisposition: "new" };
                var customerCount = document.getElementById ("customerCount").value;
                if ("" != customerCount)
                    consumer.customerCount = customerCount;
                var p = document.getElementById ("p").value;
                if ("" != p)
                    consumer.p = p;
                var q = document.getElementById ("q").value;
                if ("" != q)
                    consumer.q = q;
                var phaseConnection = document.getElementById ("phaseConnection").value;
                if ("" != phaseConnection)
                    consumer.phaseConnection = phaseConnection;

                var cable = { cls: "ACLineSegment", EditDisposition: "new" };
                var data = this._cimmap.get_data ();
                if (data)
                {
                    var cable_name = document.getElementById ("cable_name");
                    if (cable_name)
                    {
                        cable_name = cable_name.value;
                        cable.AssetDatasheet = cable_name; // add the cable type
                        cable.PerLengthImpedance = data.WireInfo[cable_name].PerLengthParameters[0]; // add the per length parameters
                    }
                }

                return ([consumer, cable]);
            }

            make ()
            {
                var parameters = this.submit_parameters ();
                var consumer = parameters[0];
                var cable = parameters[1];
                consumer.id = this._cimedit.uuidv4 ();
                var obj = this._cimedit.create_from (consumer);
                var cpromise = this._digitizer.point (obj, this._cimedit.new_features ());
                var lm = new LocationMaker (this._cimmap, this._cimedit, this._digitizer);
                cpromise.setPromise (lm.make (cpromise.promise (), "wgs84"));
                cpromise.setPromise (cpromise.promise ().then (this.make_equipment.bind (this)));
                return (cpromise);
            }
        }

        return (HouseServiceMaker);
    }
)