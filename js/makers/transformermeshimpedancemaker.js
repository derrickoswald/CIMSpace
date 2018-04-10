/**
 * Create two mesh impedances based on nameplate data.
 */
"use strict";

define
(
    ["mustache", "cim", "cancelablepromise", "./powersystemresourcemaker"],
    /**
     * @summary Make two TransformerMeshImpedance CIM objects based on the TransformerEndInfos and user entered nameplate data.
     * @description Calculates the positive sequence impedance from the high voltage winding to the low voltage winding and vice versa.
     * @name TransformerMeshImpedanceMaker
     * @exports TransformerMeshImpedanceMaker
     * @version 1.0
     */
    function (mustache, cim, CancelablePromise, PowerSystemResourceMaker)
    {
        class TransformerMeshImpedanceMaker extends PowerSystemResourceMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                super (cimmap, cimedit, digitizer);
            }

            static classes ()
            {
                return (["TransformerMeshImpedance"]);
            }

            render_parameters (proto)
            {
                var ret = super.render_parameters (proto);

                var template =
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
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label" for="impedance_voltage">Impedance voltage</label>
                      <div class="col-sm-8">
                        <input id="impedance_voltage" class="form-control" type="text" name="impedance_voltage" aria-describedby="impedance_voltageHelp" value="4.0">
                        <small id="impedance_voltageHelp" class="form-text text-muted">Impedance voltage (%).</small>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label" for="x_r_ratio">X/R ratio</label>
                      <div class="col-sm-8">
                        <input id="x_r_ratio" class="form-control" type="text" name="x_r_ratio" aria-describedby="x_r_ratioHelp" value="">
                        <small id="x_r_ratioHelp" class="form-text text-muted">Impedance to resistance (X/R) ratio, if known.</small>
                      </div>
                    </div>
                `;
                if (!proto)
                    proto = { mRID: this._cimedit.get_cimmrid ().nextIdFor ("TransformerMeshImpedance") };

                var cimmap = this._cimmap;
                var trafos = cimmap.fetch ("PowerTransformerInfo", info => true)
                function fn ()
                {
                    return (proto && (proto.AssetDatasheet == this.id));
                }
                if (0 != trafos.length)
                {
                    var view = { trafos: trafos, isSelected: fn };
                    ret = ret + mustache.render (template, view);
                }
                else
                    alert ("no PowerTransformerInfo objects found");
                return (ret);
            }

            submit_parameters ()
            {
                var parameters = super.submit_parameters ();
                var transformer_name = document.getElementById ("transformer_name").value;

                // add power transformer ends
                var endinfos = null;
                var tankinfo = this._cimmap.fetch ("TransformerTankInfo", info => info.PowerTransformerInfo == transformer_name)
                if (tankinfo.length > 0)
                {
                    tankinfo = tankinfo[0];
                    endinfos = this._cimmap.fetch ("TransformerEndInfo", info => info.TransformerTankInfo == tankinfo.id);
                    // sort by endNumber
                    parameters.ToTransformerEndInfos = endinfos.sort ((a, b) => a.endNumber - b.endNumber);
                }
                parameters.impedance_voltage = Number (document.getElementById ("impedance_voltage").value);
                parameters.x_r_ratio = Number (document.getElementById ("x_r_ratio").value);

                return (parameters);
            }

            /**
             * Use an approximation formula based an an almost linear log-linear relation between transformer power and X/R ratio.
             * This calculation splits the difference between two transformer libraries from different electric distribution companies.
             * There are two formulas, for less than 500kVA and greater than 500kVA.
             * Only relatively good between 50kVA and 3MVA with a discontinuity at 500kVA.
             */
            estimate_x_r_ratio (ratedS)
            {
                var ret = 0.5; // default from DACHCZ Appendix E
                if (ratedS < 500000)
                {
                    var x0 = Math.log (50000);
                    var y0 = 1.0;
                    var x1 = Math.log (500000);
                    var y1 = 3.4;
                    ret = ((Math.log (ratedS) - x0) * (y1 - y0) / (x1 - x0)) + y0;
                }
                else
                {
                    var x0 = Math.log (500000);
                    var y0 = 4.0;
                    var x1 = Math.log (3000000);
                    var y1 = 8.0;
                    ret = ((Math.log (ratedS) - x0) * (y1 - y0) / (x1 - x0)) + y0;
                }
                return (ret);
            }

            calculate_impedanceFor (mesh, parameters)
            {
                var from = parameters.ToTransformerEndInfos.find (x => x.id == mesh.FromTransformerEndInfo); // winding under consideration
                var s = from.ratedS;
                var v = from.ratedU;
                var z_p_u = parameters.impedance_voltage / 100.0; // from nameplate in percent
                var x_r = (0 == parameters.x_r_ratio) ? this.estimate_x_r_ratio (s) : parameters.x_r_ratio;
                // compute per unit values from per unit Z and the ratio
                var r_pu = Math.sqrt (z_p_u * z_p_u / (1.0 + (x_r * x_r)));
                var x_pu = x_r * r_pu;
                // convert to absolute units using the voltage and power
                var base_ohms = v * v / s;
                mesh.r = Number ((r_pu * base_ohms).toPrecision (3)); // limit the bogusness
                mesh.x = Number ((x_pu * base_ohms).toPrecision (3));
                mesh.r0 = mesh.r;
                mesh.x0 = mesh.x;
            }

            make ()
            {
                var parameters = this.submit_parameters ();
                var product_model = this._cimmap.get ("AssetModel", parameters.ToTransformerEndInfos[0].AssetModel);
                var mesh1 =
                {
                    id: this._cimedit.get_cimmrid ().nextIdFor ("TransformerMeshImpedance"),
                    cls: "TransformerMeshImpedance",
                    aliasName: "Primary Equivalent Impedance" + (product_model.aliasName ? " " + product_model.aliasName : ""),
                    name: (product_model.name ? product_model.name + " " : "") + "Primary Equivalent Impedance",
                    description: "impedance seen at the high voltage winding",
                    FromTransformerEndInfo: parameters.ToTransformerEndInfos[0].id,
                    ToTransformerEndInfos: [parameters.ToTransformerEndInfos[1].id],
                };
                this.calculate_impedanceFor (mesh1, parameters);
                var mesh2 =
                {
                    id: this._cimedit.get_cimmrid ().nextIdFor ("TransformerMeshImpedance"),
                    cls: "TransformerMeshImpedance",
                    aliasName: "Secondary Equivalent Impedance" + (product_model.aliasName ? " " + product_model.aliasName : ""),
                    name: (product_model.name ? product_model.name + " " : "") + "Secondary Equivalent Impedance",
                    description: "impedance seen at the low voltage winding",
                    FromTransformerEndInfo: parameters.ToTransformerEndInfos[1].id,
                    ToTransformerEndInfos: [parameters.ToTransformerEndInfos[0].id],
                };
                this.calculate_impedanceFor (mesh2, parameters);
                return (new CancelablePromise (Promise.resolve ([mesh1, mesh2])));
            }
        }

        return (TransformerMeshImpedanceMaker);
    }
)