/**
 * Theme navigation button for CIM Application.
 */
"use strict";

define
(
    [],
    /**
     * @summary Connectivity navigation button.
     * @description Toggles the connectivity control on and off.
     * @exports ConnectivityNav
     * @version 2.0
     */
    function ()
    {
        class ConnectivityNav extends HTMLButtonElement
        {
            constructor ()
            {
                super ();
            }

            connectedCallback ()
            {
                this.setAttribute ("class", "mapboxgl-ctrl-icon");
                this.setAttribute ("aria-label", "Connectivity");
                this.setAttribute ("title", "Toggle connectivity panel");
                this.setAttribute ("type", "button");
                this.style["background-image"] = "url('data:image/svg+xml;base64,PHN2ZwogICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICB2aWV3Qm94PSIwIDAgMjAgMjAiCiAgICAgdmVyc2lvbj0iMS4xIgogICAgIGlkPSJzdmc4MzcwIj4KICAgIDxyZWN0CiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuODQxNzQzODk7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICBpZD0icmVjdDg2MyIKICAgICAgICAgd2lkdGg9IjMuMTU4MjU2MSIKICAgICAgICAgaGVpZ2h0PSIzLjE1ODI1NjEiCiAgICAgICAgIHg9IjQuNDIwODcxNyIKICAgICAgICAgeT0iNC40MjA4NzIyIiAvPgogICAgPHJlY3QKICAgICAgICAgeT0iNC40MjA4NzIyIgogICAgICAgICB4PSIxMi40MjA4NzIiCiAgICAgICAgIGhlaWdodD0iMy4xNTgyNTYxIgogICAgICAgICB3aWR0aD0iMy4xNTgyNTYxIgogICAgICAgICBpZD0icmVjdDg2NSIKICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MC44NDE3NDM4OTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICA8Y2lyY2xlCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuODA4NDQwNTE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICBpZD0icGF0aDg2NyIKICAgICAgICAgY3g9IjEwIgogICAgICAgICBjeT0iMTQiCiAgICAgICAgIHI9IjEuNTk1Nzc5OCIgLz4KICAgIDxwYXRoCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgZD0ibSAxNCw4IGMgMCw2IC0yLDYgLTIsNiIKICAgICAgICAgaWQ9InBhdGg4OTIiIC8+CiAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDQ2MjciCiAgICAgICAgIGQ9Im0gNS45OTI5MjksOCBjIDAsNiAyLDYgMiw2IgogICAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIC8+Cjwvc3ZnPgo=')";
                $(this).tooltip ({ placement: "left" });
                this.addEventListener ("click", function () { $(this).tooltip ("hide"); }.bind (this));
            }
        }

        customElements.define ("connectivity-nav-button", ConnectivityNav, { extends: "button" });

        return (ConnectivityNav);
    }
);