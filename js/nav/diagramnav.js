/**
 * Diagram navigation button for CIM Application.
 */
"use strict";

define
(
    [],
    /**
     * @summary Diagram navigation button.
     * @description Toggles the diagram control on and off.
     * @exports DiagramNav
     * @version 2.0
     */
    function ()
    {
        class DiagramNav extends HTMLButtonElement
        {
            constructor ()
            {
                super ();
            }

            connectedCallback ()
            {
                this.setAttribute ("class", "mapboxgl-ctrl-icon");
                this.setAttribute ("aria-label", "Diagram");
                this.setAttribute ("title", "Toggle diagram panel");
                this.setAttribute ("type", "button");
                this.style["background-image"] = "url('data:image/svg+xml;base64,PHN2ZwogICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICB2aWV3Qm94PSIwIDAgMjAgMjAiCiAgICAgdmVyc2lvbj0iMS4xIgogICAgIGlkPSJzdmc4MzcwIj4KICAgIDxwYXRoCiAgICAgICAgIGlkPSJyZWN0MzM2MyIKICAgICAgICAgZD0iTSA0IDkgTCA0IDExIEwgMTYgMTEgTCAxNiA5IEwgNCA5IHogTSA0Ljk4MjQyMTkgOS43NSBBIDAuMjUgMC4yNSAwIDAgMSA1IDkuNzUgQSAwLjI1IDAuMjUgMCAwIDEgNS4yNSAxMCBBIDAuMjUgMC4yNSAwIDAgMSA1IDEwLjI1IEEgMC4yNSAwLjI1IDAgMCAxIDQuNzUgMTAgQSAwLjI1IDAuMjUgMCAwIDEgNC45ODI0MjE5IDkuNzUgeiAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEuODk0MzUyOTE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoMzM2NSIKICAgICAgICAgZD0iTSA2LjUsOC41IFYgNCBDIDUuNSw0IDUsNC41IDUsNS4wMDQyNjA4IHYgMi4wMDcxMjIgQyA1LDcuNSA1LDcuNSA0LjU2MzcyMDYsNy43MTgxMzk3IEwgNC4zMDA3MTg0LDcuODQ5NjQwOCBDIDQsOCA0LDguMjI2NDkwMSA0LDguNSBaIgogICAgICAgICBzdHlsZT0iZmlsbDojMzMzMzMzO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtmaWxsLW9wYWNpdHk6MSIgLz4KICAgIDxwYXRoCiAgICAgICAgIHN0eWxlPSJmaWxsOiMzMzMzMzM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICBkPSJNIDYuNSwxMS41IFYgMTYgQyA1LjUsMTYgNSwxNS41IDUsMTQuOTk1NzM5IFYgMTIuOTg4NjE3IEMgNSwxMi41IDUsMTIuNSA0LjU2MzcyMDYsMTIuMjgxODYgTCA0LjMwMDcxODQsMTIuMTUwMzU5IEMgNCwxMiA0LDExLjc3MzUxIDQsMTEuNSBaIgogICAgICAgICBpZD0icGF0aDMzNjciIC8+Cjwvc3ZnPg==')";
                $(this).tooltip ({ placement: "left" });
                this.addEventListener ("click", function () { $(this).tooltip ("hide"); }.bind (this));
            }
        }

        customElements.define ("diagram-nav-button", DiagramNav, { extends: "button" });

        return (DiagramNav);
    }
);