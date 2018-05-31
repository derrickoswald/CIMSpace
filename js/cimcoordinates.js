/**
 * Coordinates control for CIM Application
 */
"use strict";

define
(
    [],
    /**
     * @summary Coordinates control.
     * @description UI element for displaying mouse coordinates.
     * @name cimcoordinates
     * @exports cimcoordinates
     * @version 1.0
     */
    function ()
    {
        class CIMCoordinates
        {
            constructor ()
            {
            }

            onAdd (map)
            {
                this._map = map;
                this._container = document.createElement ("div");
                this._container.className = "mapboxgl-ctrl card";
                var text = document.createElement ("div");
                text.id = "coordinates";
                text.className = "card-body";
                text.setAttribute ("style", "padding: 1em 1.25em 1em;"); // slightly less padding
                text.innerHTML = "0.000000,0.000000";
                this._container.appendChild (text);
                // handle mouse movement
                this._map.on ("mousemove", this.mousemove_listener);
                return (this._container);
            }

            onRemove ()
            {
                // stop handling mouse movements
                this._map.off ("mousemove", this.mousemove_listener);
                // destroy the container
                this._container.parentNode.removeChild (this._container);
                delete this._container;
                delete this._map;
            }

            getDefaultPosition ()
            {
                return ("bottom-left");
            }

            mousemove_listener (event)
            {
                var lnglat = event.lngLat;
                var lng = lnglat.lng.toPrecision (7);
                var lat = lnglat.lat.toPrecision (7);
                document.getElementById ("coordinates").innerHTML = lng + "," + lat;
            }
        }

        return (CIMCoordinates);
    }
)