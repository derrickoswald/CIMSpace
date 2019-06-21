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
                this._theme = theme;
                this._template = `
<div class='card'>
  <div class='card-body'>
    <h5 class='card-title'>Legend
      <button type='button' class='close' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
      </button>
    </h5>
{{#items}}
    <div class='form-check'>
      <label class='form-check-label' for='{{id}}'>
        <input id='{{id}}' class='form-check-input' type='checkbox' value=''{{enabled}}>
        {{{description}}}
      </label>
    </div>
{{/items}}
  </div>
</div>`;
// custom
//    <label class='custom-control custom-checkbox'>
//      <input id='{{id}}' type='checkbox' class='custom-control-input'>
//      <span class='custom-control-indicator'></span>
//      <span class='custom-control-description'>{{{description}}}</span>
//    </label>
            }

            onAdd (map)
            {
                this._map = map;
                this._items = this._theme.getItems ();
                this._container = document.createElement ("div");
                this._container.className = "mapboxgl-ctrl";
                this._container.innerHTML = mustache.render (this._template, { items: this._items, enabled: function () { return (this.checked ? " checked" : ""); } });
                const list = this._container.getElementsByTagName ("input");
                for (let i = 0; i < list.length; i++)
                    list[i].onchange = this.legend_change.bind (this);
                this._container.getElementsByClassName ("close")[0].onclick = this.close.bind (this);
                return (this._container);
            }

            onRemove ()
            {
                this._container.parentNode.removeChild (this._container);
                delete this._items;
                delete this._container;
                delete this._map;
            }

            getDefaultPosition ()
            {
                return ("bottom-right");
            }

            close ()
            {
                this._map.removeControl (this);
            }

            visible ()
            {
                return ("undefined" != typeof (this._container));
            }

            initialize ()
            {
            }

            legend_change (event)
            {
                const element = this._items.find (function (item) { return (item.id === event.target.id); });
                if (element)
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
);