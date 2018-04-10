/**
 * Create a Location and associated CoordinateSystem and PositionPoint objects.
 */
"use strict";

define
(
    ["mustache", "cim", "model/Common", "nominatim"],
    /**
     * @summary Make a CIM location.
     * @description Digitizes a point and makes a PowerTransformer element with ends and connectivity.
     * @name powertransformermaker
     * @exports powertransformermaker
     * @version 1.0
     */
    function (mustache, cim, Common, Nominatim)
    {
        class LocationMaker
        {
            constructor (cimmap, cimedit, digitizer)
            {
                this._cimmap = cimmap;
                this._cimedit = cimedit;
                this._digitizer = digitizer;
                this._nominatim = new Nominatim (this._cimmap);
            }

            ensure_coordinate_systems ()
            {
                var ret = [];
                if (!this._cimmap.get ("CoordinateSystem", "wgs84"))
                    ret.push (new Common.CoordinateSystem ({ EditDisposition: "new", cls: "CoordinateSystem", id: "wgs84", mRID: "wgs84", name: "WGS 84", description: "new World Geodetic System", crsUrn: "EPSG::4326" }, this._cimedit.new_features ()));
                if (!this._cimmap.get ("CoordinateSystem", "pseudo_wgs84"))
                    ret.push (new Common.CoordinateSystem ({ EditDisposition: "new", cls: "CoordinateSystem", id: "pseudo_wgs84", mRID: "pseudo_wgs84", name: "WGS 84 (internal)", description: "schematic coordinates translated to the new World Geodetic System", crsUrn: "EPSG::4326" }, this._cimedit.new_features ()));
                return (ret);
            }

            create_location (coordsys, array, feature)
            {
                var element = array[0];

                // create the location
                var lid = this._cimedit.get_cimmrid ().nextIdFor ("Location", element, "_location");
                var location =
                {
                    EditDisposition: "new",
                    cls: "Location",
                    id: lid,
                    mRID: lid,
                    CoordinateSystem: coordsys,
                    type: "geographic"
                };
                array.push (new Common.Location (location, this._cimedit.new_features ()));
                array[0].Location = lid;

                if (feature.geometry.type == "Point")
                {
                    // set the position point
                    var lnglat = feature.geometry.coordinates;
                    var pp =
                    {
                        EditDisposition: "new",
                        Location: location.id,
                        cls: "PositionPoint",
                        id: this._cimedit.get_cimmrid ().nextIdFor ("PositionPoint", location, "_point"),
                        sequenceNumber: 1,
                        xPosition: lnglat[0].toString (),
                        yPosition: lnglat[1].toString ()
                    };
                    array.push (new Common.PositionPoint (pp, this._cimedit.new_features ()));
                }
                else if (feature.geometry.type == "LineString")
                {
                    // set the position points
                    for (var i = 0; i < feature.geometry.coordinates.length; i++)
                    {
                        var lnglat = feature.geometry.coordinates[i];
                        var pp =
                        {
                            EditDisposition: "new",
                            Location: location.id,
                            cls: "PositionPoint",
                            id: this._cimedit.get_cimmrid ().nextIdFor ("PositionPoint", location, "_point_" + (i + 1).toString ()),
                            sequenceNumber: (i + 1).toString (),
                            xPosition: lnglat[0].toString (),
                            yPosition: lnglat[1].toString ()
                        }
                        array.push (new Common.PositionPoint (pp, this._cimedit.new_features ()));
                    }
                }

                return (array);
            }

            make_location (coordsys, feature)
            {
                var ret = [];

                var element = this._cimedit.primary_element ();
                ret.push (element);
                ret = ret.concat (this.ensure_coordinate_systems ());

                return (this.create_location (coordsys, ret, feature));
            }

            make (promise, coordsys)
            {
                return (promise.then (this.make_location.bind (this, coordsys)).then (this._nominatim.getStreetAddress.bind (this._nominatim)));
            }
        }

        return (LocationMaker);
    }
)