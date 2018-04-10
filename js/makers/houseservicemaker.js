/**
 * Create a EnergyConsumer.
 */
"use strict";

define
(
    ["mustache", "cim", "./locationmaker", "./conductingequipmentmaker", "cancelablepromise", "model/Core", "model/StateVariables"],
    /**
     * @summary Make an EnergyConsumer CIM object representing a house service.
     * @description Digitizes a point and then a conductor with connectivity.
     * @name houseservicemaker
     * @exports houseservicemaker
     * @version 1.0
     */
    function (mustache, cim, LocationMaker, ConductingEquipmentMaker, CancelablePromise, Core, StateVariables)
    {
        class HouseServiceMaker extends ConductingEquipmentMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                super (cimmap, cimedit, digitizer);
            }

            render_parameters (proto)
            {
                var template =
                `
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label" for="iterations">Iterations</label>
                      <div class="col-sm-8">
                        <input id="iterations" class="form-control" type="text" name="iterations" aria-describedby="iterationsHelp" value="1">
                        <small id="iterationsHelp" class="form-text text-muted">Number of house services to create.</small>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label" for="mRID">mRID</label>
                      <div class="col-sm-8">
                        <input id="mRID" class="form-control" type="text" name="mRID" aria-describedby="mRIDHelp" value="{{proto.mRID}}">
                        <small id="mRIDHelp" class="form-text text-muted">Unique identifier (or initial identifier) for house services.</small>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label" for="customerCount">Customer count</label>
                      <div class="col-sm-8">
                        <input id="customerCount" class="form-control" type="text" name="customerCount" aria-describedby="customerCountHelp" value="{{proto.customerCount}}">
                        <small id="customerCountHelp" class="form-text text-muted">Number of individual customers represented by this demand.</small>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label" for="p">Active power</label>
                      <div class="col-sm-8">
                        <input id="p" class="form-control" type="text" name="p" aria-describedby="pHelp" value="{{proto.p}}">
                        <small id="pHelp" class="form-text text-muted">Active power of the load, (+)=flow out (VA).</small>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label" for="q">Reactive power</label>
                      <div class="col-sm-8">
                        <input id="q" class="form-control" type="text" name="q" aria-describedby="qHelp" value="{{proto.q}}">
                        <small id="qHelp" class="form-text text-muted">Reactive power of the load, (+)=flow out (VAr).</small>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label" for="phaseConnection">Phase connection</label>
                      <div class="col-sm-8">
                        <select id="phaseConnection" class="form-control custom-select" name="phaseConnection" aria-describedby="phaseConnectionHelp">
                        {{#phaseConnections}}
                          <option value="{{value}}"{{#isSelected}} selected{{/isSelected}}>{{description}}</option>
                        {{/phaseConnections}}
                        </select>
                        <small id="phaseConnectionHelp" class="form-text text-muted">The type of phase connection, such as wye or delta.</small>
                      </div>
                    </div>
                `;
                var phaseConnections =
                [
                    { value: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseShuntConnectionKind.D", description: "Delta" },
                    { value: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseShuntConnectionKind.I", description: "Independent" },
                    { value: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseShuntConnectionKind.Y", description: "Wye" },
                    { value: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseShuntConnectionKind.Yn", description: "Wye with neutral" }
                ];
                if (!proto)
                    proto = { mRID: this._cimedit.get_cimmrid ().nextIdFor ("EnergyConsumer"), customerCount: 1, phaseConnection: "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseShuntConnectionKind.Yn" };
                var view = { proto: proto, phaseConnections: phaseConnections, isSelected: function () { return (proto.phaseConnection == this.value); } };
                var ret = mustache.render (template, view);
                return (ret);
            }

            submit_parameters ()
            {
                var id = document.getElementById ("mRID").value;
                var consumer = { id: id, mRID: id, cls: "EnergyConsumer", EditDisposition: "new" };
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

                return (consumer);
            }

            make ()
            {
                var consumer = this.submit_parameters ();
                var iterations = Number (document.getElementById ("iterations").value);
                var obj = this._cimedit.create_from (consumer);
                var lm = new LocationMaker (this._cimmap, this._cimedit, this._digitizer);
                // set up iterations
                var objs = [obj];
                this._cimedit.editnew (objs);
                for (var i = 1; i < iterations; i++)
                {
                    obj = JSON.parse (JSON.stringify (obj));
                    obj.id = this._cimedit.get_cimmrid ().nextIdFor ("EnergyConsumer");
                    obj.mRID = obj.id;
                    objs.push (obj);
                    this._cimedit.editnew (objs);
                }

                function do_one (obj)
                {
                    var cpromise = this._digitizer.point (obj, this._cimedit.new_features (), "<h1>Digitize point for " + obj.id + "</h1>");
                    cpromise.setPromise (lm.make (cpromise.promise (), "wgs84").then (this.make_equipment.bind (this)));
                    return (cpromise);
                }

                function joinem (obj, list_so_far)
                {
                    // update the screen
                    this._cimedit.editnew (list_so_far);
                    this._cimedit.edit (obj, true, true);
                    // digitize another one and tack its results onto the result array
                    var cpromise = do_one.call (this, obj);
                    function append (list)
                    {
                        return (list_so_far.concat (list));
                    }
                    function catch_cancel (message)
                    {
                        console.log ("catch cancel " + message);
                        return (list_so_far);
                    }
                    return (cpromise.promise ().then (append /*, catch_cancel */));
                }
                var ret = do_one.call (this, objs[0]);
                for (var i = 1; i < objs.length; i++)
                    ret.setPromise (ret.promise ().then (joinem.bind (this, objs[i])));
                return (ret);
            }
        }

        return (HouseServiceMaker);
    }
)