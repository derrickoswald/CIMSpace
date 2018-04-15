/**
 * Create a EnergyConsumer.
 */
"use strict";

define
(
    ["mustache", "cim", "./locationmaker", "./conductingequipmentmaker", "./switchmaker", "cancelablepromise", "model/Core", "model/StateVariables"],
    /**
     * @summary Make an EnergyConsumer CIM object representing a house service.
     * @description Digitizes a point and then a conductor with connectivity.
     * @name houseservicemaker
     * @exports houseservicemaker
     * @version 1.0
     */
    function (mustache, cim, LocationMaker, ConductingEquipmentMaker, SwitchMaker, CancelablePromise, Core, StateVariables)
    {
        class HouseServiceMaker extends ConductingEquipmentMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                super (cimmap, cimedit, digitizer);
                this._switchmaker = new SwitchMaker (cimmap, cimedit, digitizer);
                this._locationmaker = new LocationMaker (cimmap, cimedit, digitizer);

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
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label" for="with_fuse">Add fuse</label>
                      <div class="col-sm-8">
                        <div class='form-check'>
                          <input id="with_fuse" class="form-check-input" type="checkbox" name="with_fuse" aria-describedby="withFuseHelp" checked>
                          <small id="withFuseHelp" class="form-text text-muted">Include a fuse with each house service</small>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label" for="fuse_rating">Fuse rated current</label>
                      <div class="col-sm-8">
                        <input id="fuse_rating" class="form-control" type="text" name="fuse_rating" aria-describedby="fuseRatingHelp" value="75">
                        <small id="fuseRatingHelp" class="form-text text-muted">Fuse rating (A).</small>
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

            /**
             * Scrape the form data and prpare to make house services.
             * @return an object with the number of house services to make (iterations),
             * the template(s) for EnergyConsumer (consumer) and possibly Fuse (fuse),
             * and initial values for the object collection (objs) and current count (index).
             */
            submit_parameters ()
            {
                var id = document.getElementById ("mRID").value;
                var consumer =
                {
                    id: id,
                    mRID: id,
                    cls: "EnergyConsumer",
                    normallyInService: true
                };
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
                var ret =
                {
                    iterations: Math.max (1, Number (document.getElementById ("iterations").value)),
                    consumer: consumer,
                    objs: [],
                    index: 0,
                };
                if (document.getElementById ("with_fuse").checked)
                {
                    var fid = this._cimedit.get_cimmrid ().nextIdFor ("Fuse", consumer);
                    ret.fuse =
                    {
                        id: fid,
                        mRID: fid,
                        cls: "Fuse",
                        normallyInService: true,
                        normalOpen: false,
                        ratedCurrent: document.getElementById ("fuse_rating").value,
                        open: false
                     };
                }

                return (ret);
            }

            /**
             * Clone the EnergyConsumer and possibly the Fuse.
             * @param parameters the form scraped data and existing template objects (see submit_parameters)
             */
            clone (parameters)
            {
                parameters.consumer = JSON.parse (JSON.stringify (parameters.consumer));
                if (0 != parameters.index)
                    parameters.consumer.id = this._cimedit.get_cimmrid ().nextIdFor ("EnergyConsumer");
                if (parameters.fuse)
                {
                    parameters.fuse = JSON.parse (JSON.stringify (parameters.fuse));
                    if (0 != parameters.index)
                        parameters.fuse.id = this._cimedit.get_cimmrid ().nextIdFor ("Fuse", parameters.consumer);
                }
            }

            /**
             * Create an EnergyConsumer and possibly a Fuse.
             * @param parameters the form scraped data and existing template objects (see submit_parameters)
             * @param array the EnergyConsumer with a Location and other associated elements
             * @return a Promise to make the next house service - which may already be resolved if there are no more to make
             */
            make_house (parameters, array)
            {
                var consumer = this.make_equipment (array);
                parameters.objs = parameters.objs.concat (consumer);
                if (parameters.fuse)
                {
                    // edit just the house service so the connectivity can be found
                    this._cimedit.editnew (array);
                    // build a GeoJSON feature to locate the fuse
                    var feature = this._locationmaker.extractFeature (consumer);
                    // create a location for the fuse element
                    var fuse_n_location = this._locationmaker.create_location ("wgs84", [parameters.fuse], feature);
                    // add terminals and connectivity
                    var fuse_n_stuff = this._switchmaker.make_switch (fuse_n_location);
                    // add the new elements onto the list so far
                    parameters.objs = parameters.objs.concat (fuse_n_stuff);
                }
                this._cimedit.editnew (parameters.objs);
                return (parameters.index < parameters.iterations ? this.promise_house (parameters) : Promise.resolve (parameters));
            }

            /**
             * Create a promise to make an EnergyConsumer and possibly a Fuse.
             * @param parameters the form scraped data and existing template objects (see submit_parameters)
             * @return a Promise to make the house service
             */
            promise_house (parameters)
            {
                this.clone (parameters);
                parameters.index++;
                this._cimedit.editnew (parameters.fuse ? [parameters.consumer, parameters.fuse] : [parameters.consumer]);
                var cpromise = this._digitizer.point (parameters.consumer, this._cimedit.new_features (), "<h1>Digitize point for " + parameters.consumer.id + "</h1>");
                function catch_cancel (message)
                {
                    console.log ("catch cancel " + JSON.stringify (message));
                    this._cimedit.editnew (parameters.objs);
                    return (message);
                }
                cpromise.setPromise (this._locationmaker.make (cpromise.promise (), "wgs84").then (this.make_house.bind (this, parameters), catch_cancel.bind (this)));
                return (cpromise);
            }

            make ()
            {
                var parameters = this.submit_parameters ();
                return (this.promise_house (parameters));
            }
        }

        return (HouseServiceMaker);
    }
)