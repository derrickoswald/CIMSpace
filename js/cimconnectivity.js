/**
 * Map connectivity control for CIM Application
 */
"use strict";

define
(
    ["mustache", "cim", "cancelablepromise"],
    /**
     * @summary Connectivity control.
     * @description UI element for editing connectivity.
     * @name cimconnectivity
     * @exports cimconnectivity
     * @version 1.0
     */
    function (mustache, cim, CancelablePromise)
    {
        class CIMConnectivity
        {
            constructor (cimmap, cimedit)
            {
                this._onMap = false;
                this._cimmap = cimmap;
                this._cimedit = cimedit;
                this._template =
                    `
                    <div class='card'>
                      <div class='card-body' style='min-width:200px;'>
                        <h5 class='card-title'>Connectivity
                            <button type='button' class='close' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </h5>
                        <div id='connectivity'></div>
                        <div id='connectivity_footer' class='card-footer'>
                            <button id='connectivity_set' type='button' class='btn btn-primary' disabled>Set</button>
                        </div>
                      </div>
                    </div>
                    `;
                this._size = 32;
                this._border = 2;
            }

            onAdd (map)
            {
                this._map = map;
                this._container = document.createElement ("div");
                this._container.className = "mapboxgl-ctrl";
                this._container.innerHTML = this._template;
                this._container.getElementsByClassName ("close")[0].onclick = this.close.bind (this);
                this._container.getElementsByClassName ("btn btn-primary")[0].onclick = this.begin.bind (this);
                this._cimmap.add_feature_listener (this);
                this._onMap = true;
                return (this._container);
            }

            onRemove ()
            {
                this._container.parentNode.removeChild (this._container);
                this._cimmap.remove_feature_listener (this);
                this._map = undefined;
                this._onMap = false;
            }

            getDefaultPosition ()
            {
                return ("bottom-right");
            }

            close (event)
            {
                this.abort ();
                this._map.removeControl (this);
            }

            visible ()
            {
                return (this._onMap);
            }

            popup (html, position)
            {
                var lnglat = position || this._map.getCenter ();
                var popup = new mapboxgl.Popup ();
                popup.setLngLat (lnglat)
                popup.setHTML (html)
                popup.addTo (this._map);
                return (popup);
            }

            poink (x, y)
            {
                var ret = null;
                var width = 4;
                var height = 4;
                var features = this._cimmap.get_map ().queryRenderedFeatures
                (
                    [
                      [x - width / 2, y - height / 2],
                      [x + width / 2, y + height / 2]
                    ],
                    {}
                );
                if ((null != features) && (0 != features.length))
                {
                    var selection = [];
                    for (var i = 0; i < features.length; i++)
                    {
                        var mrid = features[i].properties.mRID;
                        if (null != mrid && !selection.includes (mrid))
                            selection.push (mrid);
                    }
                    if (selection.length > 0)
                        ret = selection;
                }
                return (ret);
            }

            distance (x1, y1, x2, y2)
            {
                var dx = x2 - x1;
                var dy = y2 - y1;
                return (Math.sqrt (dx * dx + dy * dy));
            }

            // get the terminals for the device
            get_terminals_for_equipment (equipment)
            {
                var ret = [];
                var data = this._cimmap.get_data ();
                var terminals = data.Terminal;
                for (var id in terminals)
                {
                    var terminal = terminals[id];
                    if (terminal.ConductingEquipment == equipment.id)
                        if (!terminal.EditDisposition || (terminal.EditDisposition != "delete"))
                            ret.push (terminal);
                }
                // sort by sequenceNumber
                ret.sort ((a, b) => a.sequenceNumber - b.sequenceNumber);

                return (ret);
            }

            // get the connectivity
            get_connectivity_for_equipment_terminals (equipment, terminals)
            {
                var ret = [];
                for (var i = 0; i < terminals.length; i++)
                {
                    var terminal = terminals[i];
                    var connectivity =
                    {
                        ConductingEquipment: equipment,
                        Terminal: terminal,
                        BaseVoltage: ""
                    };
                    if (equipment.BaseVoltage)
                        connectivity.BaseVoltage = equipment.BaseVoltage;
                    else
                    {
                        // for PowerTransformer look for the end
                        var data = this._cimmap.get_data ();
                        var ends = data.PowerTransformerEnd;
                        for (var end in ends)
                            if (ends[end].Terminal == terminal.id)
                                connectivity.BaseVoltage = ends[end].BaseVoltage;
                    }
                    if (terminal.ConnectivityNode)
                        connectivity.ConnectivityNode = terminal.ConnectivityNode;
                    ret.push (connectivity);
                }

//                [
//                    {
//                        ConductingEquipment: equipment,
//                        Terminal: terminal,
//                        BaseVoltage: ""
//                        ConnectivityNode: terminal.ConnectivityNode,
//                    },
//                    :
//                ]
                return (ret);
            }

            get_connectivity_for_equipment (equipment, point)
            {
                // get the terminals for the device
                var terminals = this.get_terminals_for_equipment (equipment);

                // for Conductor objects (with a length attribute) keep only the nearest one
                var data = this._cimmap.get_data ();
                if (point && terminals.length > 1 && equipment.length)
                {
                    var points = data.PositionPoint;
                    var ordered = [];
                    for (var id in points)
                        if (points[id].Location == equipment.Location)
                            ordered[points[id].sequenceNumber] = points[id];
                    // here we un-screw up the sequence numbers on the PositionPoint elements
                    if ("undefined" == typeof (ordered[0]))
                        ordered = ordered.slice (1);

                    var first = 0;
                    var last = ordered.length - 1;
                    var x = point[0];
                    var y = point[1];
                    if (this.distance (ordered[first].xPosition, ordered[first].yPosition, x, y) <
                        this.distance (ordered[last].xPosition, ordered[last].yPosition, x, y))
                        // keep the first
                        terminals = terminals.slice (0, 1);
                    else
                        // keep the second
                        terminals = terminals.slice (1, 2);
                }
                var ret = this.get_connectivity_for_equipment_terminals (equipment, terminals).filter (x => x.ConnectivityNode);

                return (ret);
            }

            get_connectivity_for_equipments (equipments, all, point)
            {
                var ret = [];
                var connectivities = Array.prototype.concat.apply ([], equipments.map (e => this.get_connectivity_for_equipment (e, point)));
                // combine equivalent ConnectivityNode
                var list = {};
                for (var i = 0; i < connectivities.length; i++)
                {
                    var connectivity = connectivities[i];
                    if (!list[connectivity.ConnectivityNode])
                        list[connectivity.ConnectivityNode] = [connectivity];
                    else
                        list[connectivity.ConnectivityNode].push (connectivity);
                }
                // add equipment connected but not hovered over
                if (all)
                {
                    var data = this._cimmap.get_data ();
                    var terminals = data.Terminal;
                    for (var id in list)
                    {
                        for (var term in terminals)
                        {
                            var terminal = terminals[term];
                            if (!terminal.EditDisposition || (terminal.EditDisposition != "delete"))
                                if (terminal.ConnectivityNode == id)
                                {
                                    if (!list[id].find (x => x.ConductingEquipment.id == terminal.ConductingEquipment))
                                    {
                                        var equipment = data.ConductingEquipment[terminal.ConductingEquipment];
                                        var connectivity =
                                            {
                                                ConnectivityNode: id,
                                                ConductingEquipment: equipment,
                                                Terminal: terminal,
                                                BaseVoltage: ""
                                            };
                                        if (equipment.BaseVoltage)
                                            connectivity.BaseVoltage = equipment.BaseVoltage;
                                        else
                                        {
                                            // for PowerTransformer look for the end
                                            var ends = data.PowerTransformerEnd;
                                            for (var end in ends)
                                                if (ends[end].Terminal == terminal.id)
                                                    connectivity.BaseVoltage = ends[end].BaseVoltage;
                                        }

                                        list[id].push (connectivity);
                                    }
                                }
                        }
                    }
                }
                for (var id in list)
                    ret.push ({ ConnectivityNode: id, Equipment: list[id] });
//            [
//                {
//                    ConnectivityNode: nodename,
//                    Equipment:
//                    [
//                        {
//                            ConnectivityNode: nodename,
//                            ConductingEquipment: equipment,
//                            Terminal: terminal,
//                            BaseVoltage: "BaseVoltage_400"
//                        },
//                        ...
//                    ]
//                }
//            ]
                return (ret);
            }

            // circle
//            svg ()
//            {
//                return ("<svg width='24' height='24'><circle cx='12px' cy='12px' r='10px' stroke='blue' stroke-width='2px' fill='green' /></svg>");
//            }

            // map marker
//            svg (n, r, fill, stroke, border, font)
//            {
//                // A common approximation is to use four beziers to model a circle, each with control points a distance
//                // d=r*4*(sqrt(2)-1)/3 from the end points (where r is the circle radius), and in a direction
//                // tangent to the circle at the end points.
//                var cpd = r * (Math.sqrt (2.0) - 1.0) * 4.0 / 3.0;
//                var r0 = (r + stroke / 2.0).toFixed (0);
//                var d = (2.0 * r + stroke).toFixed (0);
//                var b2 = (stroke / 2.0).toFixed (0);
//                // drawing from top left
//                var text =
//                [
//                    "<svg width='",
//                    d,
//                    "' height='",
//                    d,
//                    "'><path d='M ",
//                    b2,
//                    ",",
//                    r0,
//                    " C ",
//                    b2,
//                    ",",
//                    (r - cpd + stroke / 2.0).toPrecision (8),
//                    " ",
//                    (r - cpd + stroke / 2.0).toPrecision (8),
//                    ",",
//                     b2,
//                    " ",
//                    r0,
//                    ",",
//                    b2,
//                    " ",
//                    (r + cpd + stroke / 2.0).toPrecision (8),
//                    ",",
//                    b2,
//                    " ",
//                    (2.0 * r + stroke / 2.0).toPrecision (8),
//                    ",",
//                    (r - cpd + stroke / 2.0).toPrecision (8),
//                    " ",
//                    (2.0 * r + stroke / 2.0).toPrecision (8),
//                    ",",
//                    r0,
//                    " L ",
//                    r0,
//                    ",",
//                    (2.0 * r + stroke / 2.0).toPrecision (8),
//                    " Z' style='fill:",
//                    fill,
//                    ";stroke:",
//                    border,
//                    ";stroke-width:",
//                    stroke.toFixed (0),
//                    "px' />",
//                    "<text x='",
//                    r0,
//                    "' y='",
//                    (r + stroke / 2.0 + font / 3.0).toPrecision (8),
//                    "' style='font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:",
//                    font.toFixed (0),
//                    "px",
//                    ";line-height:1.25;font-family:sans-serif;text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none'>",
//                    "<tspan x='",
//                    r0,
//                    "' y='",
//                    (r + stroke / 2.0 + font / 3.0).toPrecision (8),
//                    "'>",
//                    n.toString (),
//                    "</tspan></text></svg>"
//                ];
//                return (text.join (""));
//            }

            svg (n, r, fill, stroke, border, font)
            {
                var b = (stroke / 2.0).toFixed (0);
                var c = (r + stroke / 2.0).toFixed (0);
                var d = (r + stroke).toFixed (0);
                var e = ((r + stroke) / 2.0).toPrecision (8);
                var f = ((r + stroke + font) / 2.0).toPrecision (8);
                var factor = 1.33333333333333; // I dunno why this is needed
                var text =
                [
                    "<svg width='",
                    d,
                    "' height='",
                    d,
                    "'><path d='M ",
                    b,
                    ",",
                    b,
                    " L ",
                    c,
                    ",",
                    b,
                    " ",
                    c,
                    ",",
                    c,
                    " ",
                    b,
                    ",",
                    c,
                    " Z' style='fill:",
                    fill,
                    ";stroke:",
                    border,
                    ";stroke-width:",
                    stroke.toFixed (0),
                    "px' />",
                    "<text x='",
                    e,
                    "' y='",
                    f,
                    "' style='font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:",
                    (font * factor).toFixed (0),
                    "px",
                    ";line-height:1.25;font-family:sans-serif;text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none'>",
                    "<tspan x='",
                    e,
                    "' y='",
                    f,
                    "'>",
                    n.toString (),
                    "</tspan></text></svg>"
                ];
                return (text.join (""));
            }

            marker (ll, n, id)
            {
                var element = document.createElement ("span");
                element.setAttribute ("style", "height: 32px;");
                element.className = "marker";
                element.innerHTML = this.svg (n, this._size, "#ffffff", this._border, "#0000ff",  (n < 10) ? 24 : 18);
                // freeze the selection process
                var reset = (function ()
                {
                    if (this._mousemove)
                    {
                        this._map.off ("mousemove", this._mousemove);
                        delete this._mousemove;
                    }
                }).bind (this);
                var set = this.set_buttons.bind (this);
                function marker_event (event)
                {
                    event.preventDefault ();
                    event.stopPropagation ();
                    console.log ("marker event " + id);
                    var item = document.getElementById (id);
                    item.checked = !item.checked;
                    reset (); // stop tracking
                    set (); // set the buttons
                    return (false);
                }
                element.addEventListener ("click", marker_event, { capture: true });
                var m = new mapboxgl.Marker (element, { offset: [ (n - 1) * (this._size + this._border / 2.0), 0.0] });
                m.setLngLat (ll);
                m.addTo (this._cimmap.get_map ());

                return (m);
            }

            set_buttons ()
            {
                var connect = document.getElementById ("connectivity_connect");
                var disconnect = document.getElementById ("connectivity_disconnect");
                if (connect && disconnect)
                {
                    var connected = false;
                    var target = null;
                    for (var i = 0; i < this._target.length; i++)
                        if (document.getElementById ("target_" + this._target[i].Terminal.id).checked)
                            target = this._target[i];
                    if (target && target.Terminal.ConnectivityNode)
                        connected = document.getElementById ("connectivity_" + target.Terminal.ConnectivityNode).checked;
                    connect.disabled = connected;
                    disconnect.disabled = target && !connected;
                }
            }

            set_gui (cb_success, cb_failure)
            {
                var template =
                `
                    <button id='connectivity_connect' type='button' class='btn btn-primary' disabled>Connect</button>
                    <button id='connectivity_disconnect' type='button' class='btn btn-info' disabled>Disconnect</button>
                    <button id='connectivity_cancel' type='button' class='btn btn-danger'>Cancel</button>
                `;
                document.getElementById ("connectivity_footer").innerHTML = template;
                var do_connect = this.connect_click.bind (this, cb_success, cb_failure);
                var do_disconnect = this.disconnect_click.bind (this, cb_success, cb_failure);
                var do_cancel = this.cancel_click.bind (this, cb_success, cb_failure);
                document.getElementById ("connectivity_connect").addEventListener ("click", do_connect);
                document.getElementById ("connectivity_disconnect").addEventListener ("click", do_disconnect);
                document.getElementById ("connectivity_cancel").addEventListener ("click", do_cancel);
                var target = null;
                for (var i = 0; i < this._target.length; i++)
                    if (document.getElementById ("target_" + this._target[i].Terminal.id).checked)
                        target = this._target[i];
                if (null == target)
                {
                    target = this._target[0];
                    target.current = true;
                    document.getElementById ("target_" + target.Terminal.id).checked = true;
                    for (var j = 0; j < this._candidates.length; j++)
                        if (this._candidates[j].ConnectivityNode == target.Terminal.ConnectivityNode)
                        {
                            document.getElementById ("connectivity_" + this._candidates[j].ConnectivityNode).checked = true;
                            this._candidates[j].current = true;
                        }
                }
                this.set_buttons ();
            }

            reset_candidates ()
            {
                if (this._candidates)
                {
                    this._candidates.filter (x => x.Marker).map (x => x.Marker.remove ());
                    this._candidates = this._candidates.filter (x => !x.Marker);
                    delete this._anchor;
                }
                this.show_candidates ();
            }

            reset_gui ()
            {
                var template =
                `
                    <button id='connectivity_set' type='button' class='btn btn-primary'>Set</button>
                `;
                document.getElementById ("connectivity_footer").innerHTML = template;
                document.getElementById ("connectivity_set").onclick = this.begin.bind (this);
                document.getElementById ("connectivity").innerHTML = "";
                if (this._candidates)
                {
                    this._candidates.filter (x => x.Marker).map (x => x.Marker.remove ());
                    this._candidates = this._candidates.filter (x => !x.Marker);
                    delete this._anchor;
                }
                if (this._popup)
                {
                    this._popup.remove ();
                    delete this._popup;
                }
                this.show_connectivity ();
            }

            flick (event)
            {
                var id = event.target.id;
                console.log ("radio event " + id);
                for (var i = 0; i < this._target.length; i++)
                    if (document.getElementById ("target_" + this._target[i].Terminal.id).checked)
                    {
                        this._target[i].current = true;
                        for (var j = 0; j < this._candidates.length; j++)
                        {
                            delete this._candidates[j].current;
                            var other = document.getElementById ("connectivity_" + this._candidates[j].ConnectivityNode);
                            other.checked = false;
                            if (this._candidates[j].ConnectivityNode == this._target[i].Terminal.ConnectivityNode)
                            {
                                this._candidates[j].current = true;
                                other.checked = true;
                            }
                        }
                    }
                    else
                        delete this._target[i].current;
                this.set_buttons ();
            }

            // only used in mustache render
            display_name ()
            {
                var ret;
                if (this.name)
                    ret = this.name;
                else if (this.aliasName)
                    ret = this.aliasName;
                else if (this.mRID)
                    ret = this.mRID;
                else
                    ret = this.id;
                return (ret);
            }

            show_candidates ()
            {
                var template =
                `
                    {{#candidates}}
                    <div class='form-check'>
                      <input id='connectivity_{{ConnectivityNode}}' class='form-check-input' type='radio' name='connectivity_choice' value='{{ConnectivityNode}}'{{#current}} checked{{/current}}>
                      <label class='form-check-label' for='connectivity_{{ConnectivityNode}}'>
                        <h6>{{#Marker}}#{{index}} {{/Marker}}{{#ConnectivityNode}}{{ConnectivityNode}}{{/ConnectivityNode}}</h6>
                          {{#Equipment}}
                            {{#ConductingEquipment}}
                              <div>{{display_name}} ({{cls}}) {{description}}</div>
                            {{/ConductingEquipment}}
                            {{#Terminal}}
                              <div>&centerdot; Terminal #{{Terminal.sequenceNumber}} {{display_name}} {{Terminal.description}} {{BaseVoltage}}</div>
                            {{/Terminal}}
                          {{/Equipment}}
                      </label>
                    </div>
                    {{/candidates}}

                `;
                var index = 1;
                for (var i = 0; this._candidates && i < this._candidates.length; i++)
                    if (this._candidates[i].Marker)
                        this._candidates[i].index = index++;
                var text = mustache.render (template, { candidates: (this._candidates ? this._candidates : []), display_name: this.display_name });
                for (var i = 0; this._candidates && i < this._candidates.length; i++)
                    delete this._candidates[i].index;
                document.getElementById ("connectivity_candidates").innerHTML = text;
                function radio_event (event)
                {
                    var id = event.target.id;
                    console.log ("radio event " + id);
                    for (var i = 0; this._candidates && i < this._candidates.length; i++)
                    {
                        delete this._candidates[i].current;
                        if (id == "connectivity_" + this._candidates[i].ConnectivityNode)
                            this._candidates[i].current = true;
                    }
                    this.set_buttons (); // set the buttons
                    return (false);
                }
                var fn = radio_event.bind (this);
                for (var i = 0; this._candidates && i < this._candidates.length; i++)
                    document.getElementById ("connectivity_" + this._candidates[i].ConnectivityNode).addEventListener ("change", fn);

            }

            show_connectivity ()
            {
//            [
//                {
//                    ConnectivityNode: nodename,
//                    Equipment:
//                    [
//                        {
//                            ConnectivityNode: nodename,
//                            ConductingEquipment: equipment,
//                            Terminal: terminal,
//                            BaseVoltage: "BaseVoltage_400"
//                        }
//                    ]
//                }
//            ]

                var template =
                    `
                    {{#equipment}}
                      <h6>{{display_name}} ({{cls}})</h6>
                      {{#description}}<div>{{description}}</div>{{/description}}
                    {{/equipment}}
                    {{#target}}
                    <div class='form-check'>
                      <input id='target_{{Terminal.id}}' class='form-check-input' type='radio' name='target_choice' value='{{Terminal.id}}'{{#current}} checked{{/current}}>
                      <label class='form-check-label' for='target_{{Terminal.id}}'>
                        {{#Terminal}}
                          <h6>Terminal #{{sequenceNumber}} {{display_name}} {{description}}</h6>
                          <div>{{#ConnectivityNode}}{{ConnectivityNode}}{{/ConnectivityNode}} {{BaseVoltage}}</div>
                        {{/Terminal}}
                      </label>
                    </div>
                    {{/target}}
                    <hr />
                    <div id='connectivity_candidates'></div>
                    `;
                if (this._target)
                {
                    var equipment = this._target[0].ConductingEquipment;
                    var index = 1;
                    for (var i = 0; this._candidates && i < this._candidates.length; i++)
                        if (this._candidates[i].Marker)
                            this._candidates[i].index = index++;
                    var text = mustache.render (template, { equipment: equipment, target: this._target, display_name: this.display_name });
                    for (var i = 0; this._candidates && i < this._candidates.length; i++)
                        delete this._candidates[i].index;

                    document.getElementById ("connectivity").innerHTML = text;
                    // add handler to change current target connectivity node
                    for (var i = 0; i < this._target.length; i++)
                        document.getElementById ("target_" + this._target[i].Terminal.id).onclick = this.flick.bind (this);
                    this.show_candidates ();
                }
            }

            connectivity_mousemove_listener (obj, event)
            {
                var selection = null;
                // check for out of bounds
                if (this._anchor)
                {
                    var x = event.point.x;
                    var y = event.point.y;
                    var point = this._map.project (this._anchor); // relative to map container
                    var x0 = point.x;
                    var y0 = point.y;
                    var n = this._candidates.filter (x => x.Marker).length;
                    var half = (this._size + this._border) / 2.0;
                    if ((x < x0 - half) || (y < y0 - half) || (y > y0 + half) || (x > x0 + (2 * (n - 1) + 1) * half))
                        this.reset_candidates ();
                    else if ((x >= x0 - half) && (y >= y0 - half) && (y <= y0 + half) && (x <= x0 + half))
                        selection = this.poink (event.point.x, event.point.y);
                }
                else
                    selection = this.poink (event.point.x, event.point.y);
                if (selection)
                {
                    // keep only other conducting equipment
                    var data = this._cimmap.get_data ();
                    var candidates = selection.filter (mrid => mrid != obj.id && data.ConductingEquipment[mrid]);
                    if (candidates.length > 0)
                    {
                        if (this._popup)
                        {
                            this._popup.remove ();
                            delete this._popup;
                        }
                        var lnglat = event.lngLat;
                        if (0 == this._candidates.filter (x => x.Marker).length)
                            this._anchor = lnglat;
                        var d = this.get_connectivity_for_equipments (candidates.map (x => data.ConductingEquipment[x]), true, [lnglat.lng, lnglat.lat]);
                        var neuveax = d.filter (x => !this._candidates.find (y => y.ConnectivityNode == x.ConnectivityNode));
                        if (0 != neuveax.length)
                        {
                            var existing = this._candidates.filter (x => x.Marker).length;
                            for (var i = 0; i < neuveax.length; i++)
                                neuveax[i].Marker = this.marker (this._anchor, existing + i + 1, "connectivity_" + neuveax[i].ConnectivityNode);
                            this._candidates = this._candidates.concat (neuveax);
                            this.show_candidates ();
                        }
                    }
                }
            }

            set_listeners (obj)
            {
                if (!this._mousemove)
                {
                    this._mousemove = this.connectivity_mousemove_listener.bind (this, obj);
                    this._map.on ("mousemove", this._mousemove);
                }

                // set up our listeners
                this._cimmap.remove_listeners ();
            }

            reset_listeners ()
            {
                if (this._mousemove)
                {
                    this._map.off ("mousemove", this._mousemove);
                    delete this._mousemove;
                }
                this._cimmap.add_listeners ();
            }

            do_connectivity (obj, callback_success, callback_failure)
            {
                var self = this;
                function reset ()
                {
                    this.reset_gui ();
                    this.reset_listeners ();
                }
                function cb_success ()
                {
                    callback_success (obj);
                    reset.call (self);
                }
                function cb_failure ()
                {
                    callback_failure ({canceled: true});
                    reset.call (self);
                }
                this.set_gui (cb_success, cb_failure);
                this.set_listeners (obj);
                this._popup = this.popup ("<h1>Pick connectivity</h1>");
            }

            async do_connectivity_wait (obj, callback_success, callback_failure)
            {
                var status = null;
                function cb_success (feature)
                {
                    status = "success";
                    callback_success (feature);
                }
                function cb_failure (error)
                {
                    status = "fail";
                    callback_failure (error);
                }
                function sleep (ms)
                {
                    return (new Promise (resolve => setTimeout (resolve, ms)));
                }
                this.do_connectivity (obj, cb_success, cb_failure)
                do
                    await sleep (500);
                while (null == status);
            }

            initialize  (mrid)
            {
                if (this._target)
                    this.reset_gui ();
                if (mrid)
                {
                    var cim_data = this._cimmap.get_data ();
                    if (cim_data)
                    {
                        var equipment = cim_data.ConductingEquipment[mrid];
                        if (equipment)
                        {
                            this._target = this.get_connectivity_for_equipment_terminals (equipment, this.get_terminals_for_equipment (equipment));
                            this._candidates = this.get_connectivity_for_equipments ([equipment], true);
                            this.reset_gui ();
                        }
                        else
                            // not ConductingEquipment
                            this.abort ();
                    }
                }
            }

            begin ()
            {
                // start tracking
                var obj = this._target[0].ConductingEquipment;
                this._cpromise = new CancelablePromise (new Promise (this.do_connectivity_wait.bind (this, obj)), this.abort.bind (this))
                var self = this;
                function cb_success (equipment)
                {
                    console.log ("begin success " + equipment.id);
                    delete self._cpromise;
                    self.initialize (equipment.id);
                }
                function cb_failure (message)
                {
                    console.log ("begin not ok " + message);
                    delete self._cpromise;
                    self.initialize (obj);
                }
                this._cpromise.setPromise (this._cpromise.promise ().then (cb_success, cb_failure));
            }

            connect_click (callback_success, callback_failure, event)
            {
                var data = this._cimmap.get_data (); // what about new items not yet committed
                var target = null;
                for (var i = 0; i < this._target.length; i++)
                    if (document.getElementById ("target_" + this._target[i].Terminal.id).checked)
                        target = this._target[i];
                if (target)
                {
                    var candidate = null;
                    for (var j = 0; j < this._candidates.length; j++)
                        if (document.getElementById ("connectivity_" + this._candidates[j].ConnectivityNode).checked)
                            candidate = this._candidates[j];
                    if (candidate)
                    {
                        if (target.Terminal.ConnectivityNode != candidate.ConnectivityNode)
                        {
                            var terminal = target.Terminal;
                            var proto = JSON.parse (JSON.stringify (terminal));
                            proto.ConnectivityNode = candidate.ConnectivityNode;
                            this._cimedit.replace (terminal, proto, data);
                            console.log ("connected terminal " + target.Terminal.id + " to " + candidate.ConnectivityNode);
                        }
                    }
                }
                var equipment = this._target[0].ConductingEquipment;
                if (callback_success)
                    callback_success (equipment);
            }

            disconnect_click (callback_success, callback_failure, event)
            {
                var data = this._cimmap.get_data (); // what about new items not yet committed
                var target = null;
                for (var i = 0; i < this._target.length; i++)
                    if (document.getElementById ("target_" + this._target[i].Terminal.id).checked)
                        target = this._target[i];
                if (target)
                {
                    var candidate = null;
                    for (var j = 0; j < this._candidates.length; j++)
                        if (document.getElementById ("connectivity_" + this._candidates[j].ConnectivityNode).checked)
                            candidate = this._candidates[j];
                    if (candidate)
                    {
                        if (target.Terminal.ConnectivityNode == candidate.ConnectivityNode)
                        {
                            var terminal = target.Terminal;
                            var proto = JSON.parse (JSON.stringify (terminal));
                            delete proto.ConnectivityNode;
                            this._cimedit.replace (terminal, proto, data);
                            console.log ("disconnected terminal " + target.Terminal.id);
                        }
                    }
                }

                var equipment = this._target[0].ConductingEquipment;
                if (callback_success)
                    callback_success (equipment);
            }

            cancel_click (callback_success, callback_failure, event)
            {
                if (callback_failure)
                    callback_failure ({canceled: true});
            }

            abort ()
            {
                this.reset_listeners ();
                delete this._target;
                delete this._candidates;
                delete this._anchor;
                delete this._cpromise;
                this.reset_gui ();
            }

            /**
             * Connect the given object at terminal asynchronously.
require(["cimmap"], function(cimmap) { obj = cimmap.get_data ().Element["T1"]; });
require(["cimmap"], function(cimmap) { cimmap.get_connectivity ().connect (obj, null, function (x) { console.log ("success " + x); }, function (y) { console.log ("failure " + y); } ); });
             */
            connect (obj, terminal, callback_success, callback_failure)
            {
                this.initialize (obj.id);
                return (new CancelablePromise (new Promise (this.do_connectivity_wait.bind (this, obj)), this.abort.bind (this)));
            }

            /**
             * Connect the selected object at user selected terminal synchronously.
             */
            selection_change (current_feature, current_selection)
            {
                if (null != current_feature)
                    this.initialize (current_feature);
                else
                    this.abort ();
                document.getElementById ("connectivity_set").disabled = null == current_feature;
            }
        }

        return (CIMConnectivity);
    }
)