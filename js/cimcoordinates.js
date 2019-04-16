/**
 * Coordinates control for CIM Application
 */
"use strict";

define
(
    [],
    /**
     * @summary Coordinates control.
     * @description Custom UI element for displaying mouse coordinates.
     * usage: <mouse-coordinates></mouse-coordinates>
     * @name cimcoordinates
     * @exports cimcoordinates
     * @version 2.0
     */
    function ()
    {
        class CIMCoordinates extends HTMLElement
        {
            constructor ()
            {
                super ();
                const shadow = this.attachShadow ({mode: 'open'});
                // create a text element to display the coordinates
                var text = document.createElement ("span");
                text.id = "coordinates";
                text.innerHTML = "0.000000,0.000000";
                // apply some CSS to the host element
                var style = document.createElement ("style");
                style.textContent = `
                :host
                {
                    padding: 1em 1.25em 1em;
                    background-color: rgba(255, 255, 255, 0.75);
                    border-radius: 4px;
                }
                `;
                // add the elements to the shadow DOM
                shadow.appendChild (text);
                shadow.appendChild (style);
                // prepare to listen with a method bound to this
                this._listener = this.mousemove_listener.bind (this);
            }

            connectedCallback ()
            {
                this.setAttribute ("class", "mapboxgl-ctrl");
            }

            onAdd (map)
            {
                // remember the map
                this._map = map;
                // handle mouse movement
                this._map.on ("mousemove", this._listener);
                return (this);
            }

            onRemove ()
            {
                // stop handling mouse movements
                this._map.off ("mousemove", this._listener);
                // destroy the container
                this.parentNode.removeChild (this);
                // forget the map
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
                this.shadowRoot.getElementById ("coordinates").innerHTML = lng + "," + lat;
            }
        }

        customElements.define ("mouse-coordinates", CIMCoordinates);

        return (CIMCoordinates);
    }
)