/**
 * Map connectivity control for CIM Application
 */
"use strict";

define
(
    ["mustache", "cim", "cancelablepromise"],
    /**
     * @summary Connectivity control.
     * @description UI element for connectivity.
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
                "<div class='card'>\n" +
                "  <div class='card-body'>\n" +
                "    <h5 class='card-title'>Connectivity\n" +
                "        <button type='button' class='close' aria-label='Close'>\n" +
                "            <span aria-hidden='true'>&times;</span>\n" +
                "        </button>\n" +
                "    </h5>\n" +
                "    <div id='connectivity'></div>\n" +
                "    <div class='card-footer'>\n" +
                "        <button id='connect' type='button' class='btn btn-primary'>Connect</button>\n" +
                "        <button id='disconnect' type='button' class='btn btn-info'>Disconnect</button>\n" +
                "    </div>\n" +
                "  </div>\n" +
                "</div>\n";
                this._size = 32;
                this._border = 2;
            }

            onAdd (map)
            {
                this._map = map;
                this._container = document.createElement ("div");
                this._container.className = "mapboxgl-ctrl";
                this._container.innerHTML = mustache.render (this._template, { });
                this._container.getElementsByClassName ("btn btn-primary")[0].onclick = this.connect_click.bind (this);
                this._container.getElementsByClassName ("btn btn-info")[0].onclick = this.disconnect_click.bind (this);
                this._container.getElementsByClassName ("close")[0].onclick = this.close.bind (this);
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

            close (event)
            {
                this._map.removeControl (this);
            }

            visible ()
            {
                return (this._onMap);
            }

//            connectivity_text ()
//            {
//                var mrid = this._cimmap.get_selected_feature ();
//                if (!mrid)
//                    return ("");
//                var cim_data = this._cimmap.get_data ();
//                if (!cim_data)
//                    return ("");
//                var feature = cim_data.Element[mrid];
//                if (!feature)
//                    return ("");
//                var cls = cim.class_map (feature);
//                var template = cls.prototype.template ();
//                var text = mustache.render (template, feature);
//                var conducting = cim_data.ConductingEquipment ? cim_data.ConductingEquipment[mrid] : undefined;
//                if ("undefined" != typeof (conducting))
//                {
//                    var terminals = cim_data.Terminal;
//                    var terms = [];
//                    for (var property in terminals)
//                        if (terminals.hasOwnProperty (property))
//                        {
//                            var terminal = terminals[property];
//                            if (mrid == terminal.ConductingEquipment)
//                                terms.push (terminal);
//                        }
//                    if (0 != terms.length)
//                    {
//                        var connected = terms.map (
//                            function (terminal)
//                            {
//                                var node = terminal.ConnectivityNode;
//                                var equipment = [];
//                                for (var property in terminals)
//                                    if (terminals.hasOwnProperty (property))
//                                    {
//                                        var term = terminals[property];
//                                        if (term.EditDisposition && (term.EditDisposition != "delete"))
//                                            if (node == term.ConnectivityNode)
//                                                if (mrid != term.ConductingEquipment)
//                                                    if (cim_data.Element[term.ConductingEquipment].EditDisposition && (cim_data.Element[term.ConductingEquipment].EditDisposition != "delete"))
//                                                        equipment.push (term.Terminal);
//                                    }
//                                return ({ terminal: terminal, equipment: equipment });
//                            }
//                        );
//                        if (connected.some (function (element) { return (0 != element.equipment.length); }))
//                        {
//                            text = text + "<div>Connected:</div>\n";
//                            for (var i = 0; i < connected.length; i++)
//                            {
//                                var terminal = connected[i].terminal.mRID;
//                                var equipment = connected[i].equipment;
//                                if (0 != equipment.length)
//                                {
//                                    var links = "";
//                                    for (var j = 0; j < equipment.length; j++)
//                                        links = links + " <a href='#' onclick='require([\"cimmap\"], function(cimmap) { cimmap.select (\"" + equipment[j] + "\"); }); return false;'>" + equipment[j] + "</a>";
//                                    text = text + "<div>" + terminal + ": " + links + "</div>\n";
//                                }
//                            }
//                        }
//                    }
//                }
//
//                // add links to other selected elements
//                var mrids = this._cimmap.get_selected_features ();
//                if (null != mrids)
//                    if (mrids.some (function (element) { return (element != mrid); }))
//                    {
//                        text = text + "<div>Selected:</div>\n";
//                        for (var i = 0; i < mrids.length; i++)
//                        {
//                            if (mrids[i] != mrid)
//                                text = text + "<div><a href='#' onclick='require([\"cimmap\"], function(cimmap) { cimmap.select (\"" + mrids[i] + "\"); }); return false;'>" + mrids[i] + "</a></div>\n";
//                        }
//                    }
//
//                // add details from simulation or analysis
//                var toHTML = this._cimmap.get_themer ().getTheme ().toHTML;
//                if (toHTML)
//                {
//                    var html = toHTML.bind (this._cimmap.get_themer ().getTheme ()) (feature);
//                    if ("" != html)
//                        text = text + "<div>" + this._cimmap.get_themer ().getTheme ().getTitle () + ":</div>\n" + html;
//                }
//
//                return (text);
//            }

            popup (html, position)
            {
                var lnglat = position || this._map.getCenter ();
                var popup = new mapboxgl.Popup ();
                popup.setLngLat (lnglat)
                popup.setHTML (html)
                popup.addTo (this._map);
                return (popup);
            }

            connectivity_mousedown_listener (callback_success, callback_failure, event)
            {
                event.originalEvent.preventDefault ();
                event.originalEvent.stopPropagation ();
                var lnglat = event.lngLat;
                var buttons = event.originalEvent.buttons;
                var leftbutton = 0 != (buttons & 1);
                var rightbutton = 0 != (buttons & 2);

                if (leftbutton)
                {
                    // coordinates.push ([lnglat.lng, lnglat.lat]);
                    console.log ("" + lnglat.lng + "," + lnglat.lat);
                }
                else if (rightbutton)
                {
                    console.log ("" + lnglat.lng + "," + lnglat.lat);
                    callback_success ("I don't know");
                    // also callback_failure ()
                }
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

            get_connectivity_for_equipment (equipment, point)
            {
                var ret = [];

                var data = this._cimmap.get_data ();
                var points = data.PositionPoint;
                var ordered = [];
                for (var id in points)
                    if (points[id].Location == equipment.Location)
                        ordered[points[id].sequenceNumber] = points[id];
                // here we un-screw up the sequence numbers on the PositionPoint elements
                if ("undefined" == typeof (ordered[0]))
                    ordered = ordered.slice (1);

                // get the terminals for the device
                var device_terminals = [];
                var terminals = data.Terminal;
                for (var id in terminals)
                    if (terminals[id].ConductingEquipment == equipment.id)
                        device_terminals.push (terminals[id]);
                // sort by sequenceNumber
                device_terminals.sort ((a, b) => a.sequenceNumber - b.sequenceNumber);

                // for Conductor objects (with a length attribute) keep only the nearest one
                if (point && device_terminals.length > 1 && equipment.length)
                {
                    var first = 0;
                    var last = ordered.length - 1;
                    var x = point[0];
                    var y = point[1];
                    if (this.distance (ordered[first].xPosition, ordered[first].yPosition, x, y) <
                        this.distance (ordered[last].xPosition, ordered[last].yPosition, x, y))
                        // keep the first
                        device_terminals = device_terminals.slice (0, 1);
                    else
                        // keep the second
                        device_terminals = device_terminals.slice (1, 2);
                }

                // get the connectivity
                for (var i = 0; i < device_terminals.length; i++)
                {
                    var terminal = device_terminals[i];
                    if (terminal.ConnectivityNode)
                    {
                        var connectivity =
                        {
                            ConnectivityNode: terminal.ConnectivityNode,
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
                            for (var id in ends)
                                if (ends[id].Terminal == terminal.id)
                                    connectivity.BaseVoltage = ends[id].BaseVoltage;
                        }
                        ret.push (connectivity);
                    }
                }

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
                return (ret);
            }

            get_connectivity_for_equipments (equipments, point)
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
                for (var id in list)
                    ret.push ({ ConnectivityNode: id, Equipment: list[id] });

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

            marker (ll, n, crap)
            {
                var element = document.createElement ("span");
                // element.setAttribute ("style", "height: 32px;");
                element.innerHTML = this.svg (n, this._size, "#ffffff", this._border, "#0000ff",  (n < 10) ? 24 : 18);
                element.addEventListener ('click', function () {
                    var item = document.getElementById (crap);
                    item.checked = !item.checked;
                    });
                var m = new mapboxgl.Marker (element, { offset: [ (n - 1) * (this._size + this._border / 2.0), 0.0] });
                m.setLngLat (ll);
                m.addTo (this._cimmap.get_map ());

                return (m);
            }

            reset_gui ()
            {
                document.getElementById ("connectivity").innerHTML = "";
                if (this._candidates)
                {
                    this._candidates.map (x => x.Marker.remove ());
                    delete this._candidates;
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
                for (var i = 0; i < this._target.length; i++)
                    if (document.getElementById ("target_" + this._target[i].ConnectivityNode).checked)
                        this._target[i].current = true;
                    else
                        delete this._target[i].current;
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
                      <h6>{{cls}} {{display_name}}</h6>
                      {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{/equipment}}
                    {{#target}}
                    <div class='form-check'>
                      <input id='target_{{ConnectivityNode}}' class='form-check-input' type='radio' name='target_choice' value='{{ConnectivityNode}}'{{#current}} checked{{/current}}>
                      <label class='form-check-label' for='target_{{ConnectivityNode}}'>
                        <h6>{{#ConnectivityNode}}{{ConnectivityNode}}{{/ConnectivityNode}}</h6>
                          {{#Equipment}}
                            {{#BaseVoltage}}<div><b>BaseVoltage</b>: {{BaseVoltage}}</div>{{/BaseVoltage}}
                            {{#Terminal}}
                              <h6>Terminal #{{Terminal.sequenceNumber}} {{display_name}}</h6>
                              {{#Terminal.description}}<div><b>description</b>: {{Terminal.description}}</div>{{/Terminal.description}}
                            {{/Terminal}}
                          {{/Equipment}}
                      </label>
                    </div>
                    {{/target}}
                    <hr />
                    {{#candidates}}
                    <div class='form-check'>
                      <input id='connectivity_{{ConnectivityNode}}' class='form-check-input' type='radio' name='connectivity_choice' value='{{ConnectivityNode}}'>
                      <label class='form-check-label' for='connectivity_{{ConnectivityNode}}'>
                        <h6>#{{index}} {{#ConnectivityNode}}{{ConnectivityNode}}{{/ConnectivityNode}}</h6>
                          {{#Equipment}}
                            {{#ConductingEquipment}}
                              <h6>{{cls}} {{display_name}}</h6>
                              {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                            {{/ConductingEquipment}}
                            {{#BaseVoltage}}<div><b>BaseVoltage</b>: {{BaseVoltage}}</div>{{/BaseVoltage}}
                            {{#Terminal}}
                              <h6>Terminal #{{Terminal.sequenceNumber}} {{display_name}}</h6>
                              {{#Terminal.description}}<div><b>description</b>: {{Terminal.description}}</div>{{/Terminal.description}}
                            {{/Terminal}}
                          {{/Equipment}}
                      </label>
                    </div>
                    {{/candidates}}
                    `;
                function display_name ()
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
                for (var i = 0; this._candidates && i < this._candidates.length; i++)
                {
                    this._candidates[i].index = i + 1;
                    this._candidates[i].display_name = display_name;
                }
                var text = mustache.render (template, { equipment: this._target[0].Equipment[0].ConductingEquipment, target: this._target, candidates: (this._candidates ? this._candidates : []) });
                for (var i = 0; this._candidates && i < this._candidates.length; i++)
                {
                    delete this._candidates[i].index;
                    delete this._candidates[i].display_name;
                }

                document.getElementById ("connectivity").innerHTML = text;
                // add onclick handler to change current target connectivity node
                for (var i = 0; i < this._target.length; i++)
                    document.getElementById ("target_" + this._target[i].ConnectivityNode).onclick = this.flick.bind (this);

            }

            connectivity_mousemove_listener (obj, event)
            {
                event.originalEvent.preventDefault ();
                event.originalEvent.stopPropagation ();
                var selection = null;
                // check for out of bounds
                if (this._candidates)
                {
                    var x = event.point.x;
                    var y = event.point.y;
                    var point = this._map.project (this._anchor); // relative to map container
                    var x0 = point.x;
                    var y0 = point.y;
                    var n = this._candidates.length;
                    var half = (this._size + this._border) / 2.0;
                    if ((x < x0 - half) || (y < y0 - half) || (y > y0 + half) || (x > x0 + (2 * (n - 1) + 1) * half))
                        this.reset_gui ();
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
                        if (!this._candidates)
                        {
                            this._anchor = lnglat;
                            this._candidates = [];
                        }
                        var neuveax = candidates.filter (x => !this._candidates.find (y => y.Equipment.filter (z => z.ConductingEquipment.id == x)));
                        if (0 != neuveax.length)
                        {
                            var d = this.get_connectivity_for_equipments (candidates.map (x => data.ConductingEquipment[x]), [lnglat.lng, lnglat.lat]);
                            for (var i = 0; i < d.length; i++)
                                d[i].Marker = this.marker (this._anchor, this._candidates.length + i + 1, "connectivity_" + d[i].ConnectivityNode);
                            this._candidates = this._candidates.concat (d);
                            this.show_connectivity ();
                        }
                    }
                }
            }

            set_listeners ()
            {
                if (this._mousedown)
                {
                    // set up our listeners
                    this._cimmap.remove_listeners ();
                    this._map.dragPan.disable ();
                    this._map.dragRotate.disable ();
                    this._map.on ("mousedown", this._mousedown);
                    this._map.on ("mousemove", this._mousemove);
                }
            }

            reset_listeners ()
            {
                if (this._mousedown)
                {
                    this._map.dragPan.enable ();
                    this._map.dragRotate.enable ();
                    this._map.off ("mousedown", this._mousedown);
                    delete this._mousedown;
                    this._map.off ("mousemove", this._mousemove);
                    delete this._mousemove;
                    this._cimmap.add_listeners ();
                }
            }

            do_connectivity (obj, callback_success, callback_failure)
            {
                this._mrid = obj.mRID;

                function cb_success (feature)
                {
                    this.reset_gui ();
                    this.reset_listeners ();
                    callback_success (feature);
                }
                function cb_failure ()
                {
                    this.reset_gui ();
                    this.reset_listeners ();
                    callback_failure ({canceled: true});
                }
                this._mousedown = this.connectivity_mousedown_listener.bind (this, cb_success.bind (this), cb_failure.bind (this));
                this._mousemove = this.connectivity_mousemove_listener.bind (this, obj);

                this.set_listeners ();
                // pop up a prompt
                this._popup = this.popup ("<h1>Pick connectivity<br>Right-click to finish</h1>");
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

            connect (obj)
            {
                function abort ()
                {
                    this.reset_gui ();
                    this.reset_listeners ();
                }
                return (new CancelablePromise (new Promise (this.do_connectivity_wait.bind (this, obj)), abort.bind (this)));
            }

            connect_click (event)
            {
                var mrid = this._cimmap.get_selected_feature ();
                if (mrid)
                {
                    var cim_data = this._cimmap.get_data ();
                    if (cim_data)
                    {
                        var feature = cim_data.ConductingEquipment[mrid];
                        if (feature)
                        {
                            this._target = this.get_connectivity_for_equipments ([feature]);
                            this._target[0].current = true;
                            delete this._candidates;
                            this.reset_gui ();
                            this._cpromise = this.connect (feature);
                            this._cpromise.setPromise (this._cpromise.promise ().then (function () { console.log ("ok") }, function () { console.log ("not ok") }));
                        }
                        else
                            console.log (mrid + " is not ConductingEquipment");
                    }
                }
            }

            disconnect_click (event)
            {
                if (this._cpromise)
                    this._cpromise.cancel ();
            }
        }

        return (CIMConnectivity);
    }
)