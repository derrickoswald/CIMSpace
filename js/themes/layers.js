/**
 * Layer definitions for CIM Application
 */
"use strict";

define
(
    [],
    /**
     * @summary Standard layer definitions.
     * @description Mapbox layer defintions.
     * @name layers
     * @exports layers
     * @version 1.0
     */
    function ()
    {
        /**
         * Create a line layer object.
         * @param {string} id - the layer id
         * @param {string} source - the data source
         * @param {string|Object} color - the line color
         * @param {Object[]} [filter] - optional filter to apply to the lines
         * @returns {Object} the layer
         */
        function line_layer (id, source, color, filter)
        {
            const ret =
                {
                    id: id,
                    type: "line",
                    source: source,
                    layout:
                    {
                        "line-join": "round",
                        "line-cap": "round"
                    },
                    paint:
                    {
                        "line-color": color,
                        "line-width": 3
                    }
                };
            if ("undefined" != typeof (filter) && (null != filter))
                ret.filter = filter;

            return (ret);
        }

        /**
         * Create a circle layer object from zoom level 14 to 17.
         * @param {string} id - the layer id
         * @param {string} source - the data source
         * @param {string|Object} color - the symbol color
         * @param {Object[]} [filter] - optional filter to apply to the points
         * @returns {Object} the layer
         */
        function circle_layer (id, source, color, filter)
        {
            const ret =
                {
                    id: id,
                    type: "circle",
                    source: source,
                    minzoom: 14,
                    maxzoom: 17,
                    paint:
                    {
                        "circle-radius": 5, // Optional number. Units in pixels. Defaults to 5.
                        "circle-color": color, // Optional color. Defaults to #000000.
                        "circle-blur": 0, // Optional number. Defaults to 0. 1 blurs the circle such that only the centerpoint is full opacity.
                        "circle-opacity": 1, // Optional number. Defaults to 1.
                        "circle-translate": [0, 0], // Optional array. Units in pixels. Defaults to 0,0. Values are [x, y] where negatives indicate left and up, respectively.
                        "circle-translate-anchor": "map", // Optional enum. One of map, viewport. Defaults to map. Requires circle-translate.
                    }
                };
            if ("undefined" != typeof (filter) && (null != filter))
                ret.filter = filter;

            return (ret);
        }

        /**
         * Create a symbol layer object.
         * @param {string} id - the layer id
         * @param {string} source - the data source
         * @param {string|Object} color - the symbol color
         * @param {Object[]} [filter] - optional filter to apply to the points
         * @param hidelabels - if <code>true</code>
         * @returns {Object} the layer
         */
        function symbol_layer (id, source, color, filter, hidelabels)
        {
            const textlayout =
                {
                    "text-field": "{name}",
                    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                    "text-offset":
                        {
                            stops: [[18, [0, 0.75]], [20, [0, 1.5]], [21, [0, 2.5]], [22, [0, 3.0]], [23, [0, 4.0]], [24, [0, 5.0]]]
                        },
                    "text-anchor": "top",
                    "text-allow-overlap": true,
                    "text-size":
                        {
                            stops: [[17, 4], [18, 8], [19, 12], [20, 14], [21, 18], [22, 24], [23, 30], [24, 38]]
                        }
                };
            const layout =
                {
                    "icon-image": "{symbol}",
                    "icon-allow-overlap": true,
                    "icon-size":
                        {
                            stops: [[17, 0.1875], [18, 0.25], [19, 0.3], [20, 0.45], [21, 0.9], [22, 1.6], [23, 2.0], [24, 4.0]]
                        },
                    "icon-rotate": { type: "identity", property: "rotation" },
                    "icon-offset": [0, 0]
                };
            const textpaint =
                {
                    "text-color": color
                };

            const paint =
                {
                    "icon-color": color
                };
            if (!hidelabels)
            {
                Object.assign (layout, textlayout);
                Object.assign (paint, textpaint);
            }

            const ret =
                {
                    id: id,
                    type: "symbol",
                    source: source,
                    minzoom: 17,
                    interactive: true,
                    layout: layout,
                    paint: paint
                };
            if ("undefined" != typeof (filter) && (null != filter))
                ret.filter = filter;

            return (ret);
        }

        /**
         * Create a circle layer object.
         * @param {string} id - the layer id
         * @param {string} source - the data source
         * @param {string|Object} color - the symbol color
         * @param {Object[]} [filter] - optional filter to apply to the points
         * @returns {Object} the layer
         */
        function full_circle_layer (id, source, color, filter)
        {
            const ret =
                {
                    id: id,
                    type: "circle",
                    source: source,
                    paint:
                    {
                        "circle-radius": 5, // Optional number. Units in pixels. Defaults to 5.
                        "circle-color": color, // Optional color. Defaults to #000000.
                        "circle-blur": 0, // Optional number. Defaults to 0. 1 blurs the circle such that only the centerpoint is full opacity.
                        "circle-opacity": 1, // Optional number. Defaults to 1.
                        "circle-translate": [0, 0], // Optional array. Units in pixels. Defaults to 0,0. Values are [x, y] where negatives indicate left and up, respectively.
                        "circle-translate-anchor": "map", // Optional enum. One of map, viewport. Defaults to map. Requires circle-translate.
                    }
                };
            if ("undefined" != typeof (filter) && (null != filter))
                ret.filter = filter;

            return (ret);
        }

        /**
         * Create a polygon layer object.
         *
         * @param {string} id - the layer id
         * @param {string} source - the data source
         * @param {string|Object} color - the fill color
         * @param {string|Object} edge_color - the edge color
         * @param {Object[]} [filter] - optional filter to apply to the labels
         * @param {string} pattern - the fill pattern
         * @returns {Object} the layer
         */
        function polygon_layer (id, source, color, edge_color, filter, pattern)
        {
            const paint =
                {
                    "fill-opacity": 0.25,
                    "fill-color": color,
                    "fill-outline-color": edge_color,
                    "fill-antialias": true
                };
            if (pattern)
                paint["fill-pattern"] = pattern;
            const ret =
                {
                    id: id,
                    type: "fill",
                    source: source,
                    interactive: true,
                    paint: paint
                };
            if ("undefined" != typeof (filter) && (null != filter))
                ret.filter = filter;

            return (ret);
        }

        /**
         * Create a label layer object.
         *
         * @param {string} id - the layer id
         * @param {string} source - the data source
         * @param {string} placement - the label placement (e.g. on 'point' or 'line-center')
         * @param {string} text - the text content function
         * @param {string|Object} color - the symbol color
         * @param {Object[]} [filter] - optional filter to apply to the labels
         * @returns {Object} the layer
         */
        function label_layer (id, source, placement, text, color, filter)
        {
            const ret =
                {
                    id: id,
                    type: "symbol",
                    source: source,
                    layout:
                    {
                        "symbol-placement": placement,
                        "text-field": text,
                        "text-justify": "center",
                        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                        "text-allow-overlap": true,
                        "text-size":
                        {
                            stops: [[12, 8], [17, 16], [18, 24], [19, 48], [20, 56]]
                        }

                    },
                    paint:
                    {
                        "text-color": color
                    }
                };
            if (placement === "line" || placement === "line-center")
            {
                ret.paint["text-halo-color"] = "#ffffff";
                ret.paint["text-halo-width"] = 8;
                ret.layout["text-allow-overlap"] = false;
                ret.layout["symbol-avoid-edges"] = true;
            }
            if ("undefined" != typeof (filter) && (null != filter))
                ret.filter = filter;

            return (ret);
        }

        return (
            {
                line_layer: line_layer,
                circle_layer: circle_layer,
                symbol_layer: symbol_layer,
                full_circle_layer: full_circle_layer,
                polygon_layer: polygon_layer,
                label_layer: label_layer
            }
        );
    }
);