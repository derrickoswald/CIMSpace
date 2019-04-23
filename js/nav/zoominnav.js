/**
 * Zoom In navigation button for CIM Application.
 */
"use strict";

define
(
    [],
    /**
     * @summary Zoom In navigation button.
     * @description Zooms in one scale factor.
     * @exports ZoomInNav
     * @version 2.0
     */
    function ()
    {
        class ZoomInNav extends HTMLButtonElement
        {
            constructor ()
            {
                super ();
            }

            connectedCallback ()
            {
                this.setAttribute ("class", "mapboxgl-ctrl-icon");
                this.setAttribute ("aria-label", "Zoom In");
                this.setAttribute ("title", "Zoom in");
                this.setAttribute ("type", "button");
                this.style["background-image"] = "url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjAgMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CiAgPHBhdGggc3R5bGU9J2ZpbGw6IzMzMzMzMzsnIGQ9J00gMTAgNiBDIDkuNDQ2IDYgOSA2LjQ0NTk5MDQgOSA3IEwgOSA5IEwgNyA5IEMgNi40NDYgOSA2IDkuNDQ2IDYgMTAgQyA2IDEwLjU1NCA2LjQ0NiAxMSA3IDExIEwgOSAxMSBMIDkgMTMgQyA5IDEzLjU1NDAxIDkuNDQ2IDE0IDEwIDE0IEMgMTAuNTU0IDE0IDExIDEzLjU1NDAxIDExIDEzIEwgMTEgMTEgTCAxMyAxMSBDIDEzLjU1NCAxMSAxNCAxMC41NTQgMTQgMTAgQyAxNCA5LjQ0NiAxMy41NTQgOSAxMyA5IEwgMTEgOSBMIDExIDcgQyAxMSA2LjQ0NTk5MDQgMTAuNTU0IDYgMTAgNiB6JyAvPgo8L3N2Zz4K')";
                $(this).tooltip ({ placement: "left" });
            }

            onAdd (map)
            {
                this._map = map;
                this.addEventListener ("click", this.zoomIn.bind (this));
            }

            onRemove ()
            {
                delete this._map;
            }

            zoomIn ()
            {
                $(this).tooltip ("hide");
                this._map.zoomIn ();
            }
        }

        customElements.define ("zoomin-nav-button", ZoomInNav, { extends: "button" });

        return (ZoomInNav);
    }
);