/**
 * Map legend control for CIM Application
 */
"use strict";

define
(
    ["../mustache"],
    /**
     * @summary Legend control.
     * @description UI element for legends.
     * @name legend
     * @exports legend
     * @version 1.0
     */
    function (mustache)
    {
        class Legend
        {
            constructor (theme)
            {
                this._onMap = false;
                this._theme = theme;
                this._template =
                "<div class='card'>\n" +
                "  <div class='card-body'>\n" +
                "    <h5 class='card-title'>Legend</h5>\n" +
                "{{#items}}\n" +
                "    <div class='form-check'>\n" +
// custom
//                "    <label class='custom-control custom-checkbox'>\n" +
//                "      <input id='{{id}}' type='checkbox' class='custom-control-input'>\n" +
//                "      <span class='custom-control-indicator'></span>\n" +
//                "      <span class='custom-control-description'>{{{description}}}</span>\n" +
//                "    </label>\n" +
                "      <label class='form-check-label' for='{{id}}'>\n" +
                "        <input id='{{id}}' class='form-check-input' type='checkbox' value=''{{enabled}}>\n" +
                "        {{{description}}}\n" +
                "      </label>\n" +
                "    </div>\n" +
                "{{/items}}\n" +
                "  </div>\n" +
                "</div>\n";
            }

            onAdd (map)
            {
                this._map = map;
                this._items = this._theme.getItems ();
                this._container = document.createElement ("div");
                this._container.className = "mapboxgl-ctrl";
                this._container.innerHTML = mustache.render (this._template, { items: this._items, enabled: function () { return (this.checked ? " checked" : ""); } });
                var list = this._container.getElementsByTagName ("input");
                for (var i = 0; i < list.length; i++)
                    list[i].onchange = this.legend_change.bind (this);
                this._onMap = true;
                return (this._container);
            }

            onRemove ()
            {
                this._container.parentNode.removeChild (this._container);
                this._map = undefined;
                this._onMap = false;
            }

            getDefaultPosition ()
            {
                return ("bottom-right");
            }

            visible ()
            {
                return (this._onMap);
            }

            legend_change (event)
            {
                var element = this._items.find (function (item) { return (item.id == event.target.id); });
                if ("undefined" != typeof (element))
                    element.checked = event.target.checked;
                if (this._legend_listener)
                    this._legend_listener ();
            }

            legend_change_listener (fn)
            {
                this._legend_listener = fn;
            }
        }

        return (Legend);
    }
)