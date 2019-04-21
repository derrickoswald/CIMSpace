/**
 * Zoom Out navigation button for CIM Application.
 */
"use strict";

define
(
    [],
    /**
     * @summary Zoom Out navigation button.
     * @description Zooms out one scale factor.
     * @name zoomoutnav
     * @exports ZoomOutNav
     * @version 2.0
     */
    function ()
    {
        class ZoomOutNav extends HTMLButtonElement
        {
            constructor ()
            {
                super ();
            }

            connectedCallback ()
            {
                this.setAttribute ("class", "mapboxgl-ctrl-icon");
                this.setAttribute ("aria-label", "Zoom Out");
                this.setAttribute ("title", "Zoom out");
                this.setAttribute ("type", "button");
                this.style["background-image"] = "url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjAgMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CiAgPHBhdGggc3R5bGU9J2ZpbGw6IzMzMzMzMzsnIGQ9J20gNyw5IGMgLTAuNTU0LDAgLTEsMC40NDYgLTEsMSAwLDAuNTU0IDAuNDQ2LDEgMSwxIGwgNiwwIGMgMC41NTQsMCAxLC0wLjQ0NiAxLC0xIDAsLTAuNTU0IC0wLjQ0NiwtMSAtMSwtMSB6JyAvPgo8L3N2Zz4KCg==')";
                $(this).tooltip ();
            }

            onAdd (map)
            {
                this._map = map;
                this.addEventListener ("click", this.zoomOut.bind (this));
            }

            onRemove ()
            {
                delete this._map;
            }

            zoomOut ()
            {
                $(this).tooltip ("hide");
                this._map.zoomOut ();
            }
        }

        customElements.define ("zoomout-nav-button", ZoomOutNav, { extends: "button" });

        return (ZoomOutNav);
    }
)