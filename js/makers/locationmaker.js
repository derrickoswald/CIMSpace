/**
 * Create a Location and associated CoordinateSystem and PositionPoint objects.
 */
"use strict";

define
(
    ["lib/mustache", "cim", "model/Common", "model/DiagramLayout", "nominatim"],
    /**
     * @summary Make a CIM location.
     * @description Digitizes a point and makes a PowerTransformer element with ends and connectivity.
     * @exports powertransformermaker
     * @version 1.0
     */
    function (mustache, cim, Common, DiagramLayout, Nominatim)
    {
        class LocationMaker
        {
            constructor (cimmap, cimedit)
            {
                this._cimmap = cimmap;
                this._cimedit = cimedit;
                this._nominatim = new Nominatim (this._cimmap);
            }

            ensure_coordinate_systems ()
            {
                const ret = [];
                if (!this._cimmap.get ("CoordinateSystem", "wgs84"))
                    ret.push (new Common.CoordinateSystem ({ EditDisposition: "new", cls: "CoordinateSystem", id: "wgs84", mRID: "wgs84", name: "WGS 84", description: "new World Geodetic System", crsUrn: "EPSG::4326" }, this._cimedit.new_features ()));
                if (!this._cimmap.get ("CoordinateSystem", "pseudo_wgs84"))
                    ret.push (new Common.CoordinateSystem ({ EditDisposition: "new", cls: "CoordinateSystem", id: "pseudo_wgs84", mRID: "pseudo_wgs84", name: "WGS 84 (internal)", description: "schematic coordinates translated to the new World Geodetic System", crsUrn: "EPSG::4326" }, this._cimedit.new_features ()));
                return (ret);
            }

            create_location (coordsys, array, feature, diagram = true)
            {
                const element = array[0];

                // create the location
                const lid = this._cimedit.get_cimmrid ().nextIdFor ("Location", element, "_location");
                const location =
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

                if (feature.geometry.type === "Point")
                {
                    // set the position point
                    const lnglat = feature.geometry.coordinates;
                    const pp =
                    {
                        EditDisposition: "new",
                        Location: location.id,
                        cls: "PositionPoint",
                        id: this._cimedit.get_cimmrid ().nextIdFor ("PositionPoint", location, "_point"),
                        sequenceNumber: 1,
                        xPosition: lnglat[0],
                        yPosition: lnglat[1]
                    };
                    array.push (new Common.PositionPoint (pp, this._cimedit.new_features ()));
                }
                else if (feature.geometry.type === "LineString")
                {
                    // set the position points
                    for (let i = 0; i < feature.geometry.coordinates.length; i++)
                    {
                        const lnglat = feature.geometry.coordinates[i];
                        const pp =
                        {
                            EditDisposition: "new",
                            Location: location.id,
                            cls: "PositionPoint",
                            id: this._cimedit.get_cimmrid ().nextIdFor ("PositionPoint", location, "_point_" + (i + 1).toString ()),
                            sequenceNumber: (i + 1).toString (),
                            xPosition: lnglat[0],
                            yPosition: lnglat[1]
                        };
                        array.push (new Common.PositionPoint (pp, this._cimedit.new_features ()));
                    }
                }

                if (diagram)
                {
                    const did = this._cimedit.get_cimmrid ().nextIdFor ("Diagram", element, "_diagram");
                    const diagram =
                        {
                            EditDisposition: "new",
                            cls: "Diagram",
                            id: did,
                            mRID: did,
                            aliasName: element.id,
                            name: element.id + " schematic",
                            description: "schematic diagram for " + element.id,
                            orientation: "http://iec.ch/TC57/2013/CIM-schema-cim16#OrientationKind.positive"
                        };
                    array.push (new DiagramLayout.Diagram (diagram, this._cimedit.new_features ()));

                    const oid = this._cimedit.get_cimmrid ().nextIdFor ("DiagramObject", diagram, "_object");
                    const diagram_object =
                        {
                            EditDisposition: "new",
                            cls: "DiagramObject",
                            id: oid,
                            mRID: oid,
                            name: element.id,
                            description: "schematic object for " + element.id,
                            drawingOrder: 2,
                            isPolygon: false,
                            rotation: 0.0,
                            Diagram: did,
                            IdentifiedObject: element.id
                        };
                    array.push (new DiagramLayout.DiagramObject (diagram_object, this._cimedit.new_features ()));

                    if (feature.geometry.type === "Point")
                    {
                        const lnglat = feature.geometry.coordinates;
                        const diagram_object_point =
                            {
                                EditDisposition: "new",
                                cls: "DiagramObjectPoint",
                                id: this._cimedit.get_cimmrid ().nextIdFor ("DiagramObjectPoint", diagram_object, "_point"),
                                DiagramObject: oid,
                                sequenceNumber: 1,
                                xPosition: lnglat[0],
                                yPosition: lnglat[1]
                            };
                        array.push (new DiagramLayout.DiagramObjectPoint (diagram_object_point, this._cimedit.new_features ()));
                    }
                    else if (feature.geometry.type === "LineString")
                    {
                        for (let i = 0; i < feature.geometry.coordinates.length; i++)
                        {
                            const lnglat = feature.geometry.coordinates[i];
                            const diagram_object_point =
                                {
                                    EditDisposition: "new",
                                    cls: "DiagramObjectPoint",
                                    id: this._cimedit.get_cimmrid ().nextIdFor ("DiagramObjectPoint", diagram_object, "_point_" + (i + 1).toString ()),
                                    DiagramObject: oid,
                                    sequenceNumber: (i + 1).toString (),
                                    xPosition: lnglat[0],
                                    yPosition: lnglat[1]
                                };
                            array.push (new DiagramLayout.DiagramObjectPoint (diagram_object_point, this._cimedit.new_features ()));
                        }
                    }
                }

                return (array);
            }

            make_location (coordsys, feature)
            {
                let ret = [];

                const element = this._cimedit.primary_element ();
                ret.push (element);
                ret = ret.concat (this.ensure_coordinate_systems ());

                return (this.create_location (coordsys, ret, feature));
            }

            make (promise, coordsys)
            {
                return (promise.then (this.make_location.bind (this, coordsys)).then (this._nominatim.getStreetAddress.bind (this._nominatim)));
            }

            /**
             * Convert location back into a feature.
             *
             * Does the opposite of create_location, it turns an array containing a location into a GeoJSON feature.
             * @param array An array of CIM elements containing at least one PositionPoint.
             * @return a GeoJSON object with the geometry.
             */
            extractFeature (array)
            {
                let ret = null;
                const pp = array.filter (o => o.cls === "PositionPoint").sort ((a, b) => a.sequenceNumber - b.sequenceNumber);
                if (pp.length > 0)
                    if (pp.length === 1)
                    {
                        const lon = Number (pp[0].xPosition);
                        const lat = Number (pp[0].yPosition);
                        ret =
                            {
                                type: "Feature",
                                geometry :
                                {
                                    type: "Point",
                                    coordinates: [ lon, lat ]
                                }
                            };
                    }
                    else
                    {
                        ret =
                            {
                                type: "Feature",
                                geometry:
                                {
                                    type: "LineString",
                                    coordinates: []
                                }
                            };
                        pp.forEach (point => ret.geometry.coordinates.push ([point.xPosition, point.yPosition]));
                    }
                return (ret);
            }
        }

        return (LocationMaker);
    }
);