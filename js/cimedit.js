/**
 * Edit control for CIM Application
 */
"use strict";

define
(
    ["mustache", "cim", "digitizer", "makers/powersystemresourcemaker", "makers/conductingequipmentmaker", "makers/switchmaker", "makers/powertransformermaker", "makers/conductormaker", "makers/substationmaker", "themes/layers", "model/Common", "model/Core", "model/Wires"],
    /**
     * @summary Edit control.
     * @description UI element for editing
     * @name cimedit
     * @exports cimedit
     * @version 1.0
     */
    function (mustache, cim, Digitizer, PowerSystemResourceMaker, ConductingEquipmentMaker, SwitchMaker, PowerTransformerMaker, ConductorMaker, SubstationMaker, layers, Common, Core, Wires)
    {
        class CIMEdit
        {
            constructor (cimmap)
            {
                this._cimmap = cimmap;
                this._template =
                "<div class='card'>\n" +
                "  <div class='card-body'>\n" +
                "    <h5 class='card-title'>Edit <span id='edit_id'></span>\n" +
                "      <button type='button' class='close' aria-label='Close'>\n" +
                "        <span aria-hidden='true'>&times;</span>\n" +
                "      </button>\n" +
                "    </h5>\n" +
                "    <div id='maker_parameters'></div>\n" +
                "    <div class='form-group row'>\n" +
                "      <label class='col-sm-4 col-form-label' for='maker_name'>Maker</label>\n" +
                "      <div class='col-sm-8'>\n" +
                "        <select id='maker_name' class='form-control custom-select'>\n" +
                "              <option value='' selected></option>\n" +
                "{{#makers}}\n" +
                "              <option value='{{.}}'>{{.}}</option>\n" +
                "{{/makers}}\n" +
                "        </select>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "    <div id='class_chooser' class='form-group row'>\n" +
                "      <label class='col-sm-4 col-form-label' for='class_name'>Class</label>\n" +
                "      <div class='col-sm-8'>\n" +
                "        <select id='class_name' class='form-control custom-select'>\n" +
                "              <option value='' selected></option>\n" +
                "{{#classes}}\n" +
                "              <option value='{{.}}'>{{.}}</option>\n" +
                "{{/classes}}\n" +
                "        </select>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "    <div class='card-footer'>\n" +
                "      <button id='create' type='button' class='btn btn-primary' disabled>Create</button>\n" +
                "  </div>\n" +
                "</div>\n";
                this._makers =
                [
                    ConductingEquipmentMaker,
                    ConductorMaker,
                    PowerSystemResourceMaker,
                    PowerTransformerMaker,
                    SubstationMaker,
                    SwitchMaker
                ];
                var cls_map = cim.classes ();
                var classes = [];
                for (var property in cls_map)
                    if (cls_map.hasOwnProperty (property))
                        classes.push (property);
                classes.sort ();
                this._classes = classes;
            }

            onAdd (map)
            {
                this._map = map;
                this._container = document.createElement ("div");
                this._container.className = "mapboxgl-ctrl";
                this.render ();
                if (null == this._map.getSource ("edit lines"))
                    this.add_layers ();
                this._resizer = this.on_map_resize.bind (this);
                this._map.on ("resize", this._resizer);
                this._digitizer = new Digitizer (this._map, this._cimmap);
                return (this._container);
            }

            onRemove ()
            {
                // remove features from edit layers
                this._map.getSource ("edit points").setData ({ "type" : "FeatureCollection", "features" : [] });
                this._map.getSource ("edit lines").setData ({ "type" : "FeatureCollection", "features" : [] });
                // turn off the resize listener
                if (this._resizer)
                {
                    this._map.off ("resize", this._resizer);
                    this._resizer = null;
                }
                // destroy the container
                this._container.parentNode.removeChild (this._container);
                this._container = null;
                this._map = undefined;
            }

            getDefaultPosition ()
            {
                return ("bottom-left");
            }

            close (event)
            {
                this.cancel ();
                this._map.removeControl (this);
            }

            change (event)
            {
                if (event.target.id == "class_name")
                {
                    document.getElementById ("create").disabled = "" == event.target.value;
                }
                else if (event.target.id == "maker_name")
                {
                    var maker_name = ("" != event.target.value) ? event.target.value : undefined;
                    var maker = maker_name ? this._makers.find (x => x.name == maker_name) : undefined;
                    if (maker)
                    {
                        document.getElementById ("class_chooser").style.display = "none";
                        this._maker = new maker (this._cimmap, this, this._digitizer);
                        document.getElementById ("maker_parameters").innerHTML = this._maker.render_parameters ();
                        document.getElementById ("create").disabled = false;
                    }
                    else
                    {
                        delete this._maker;
                        document.getElementById ("maker_parameters").innerHTML = "";
                        document.getElementById ("class_chooser").style.display = "inline-block";
                        document.getElementById ("create").disabled = "" != document.getElementById ("class_name").value;
                    }
                }
            }

            visible ()
            {
                return (null != this._container);
            }

            render ()
            {
                this._container.innerHTML = mustache.render (this._template, { classes: this._classes, makers: this._makers.map (x => x.name) });
                this._container.getElementsByClassName ("close")[0].onclick = this.close.bind (this);
                this._container.getElementsByClassName ("btn btn-primary")[0].onclick = this.create.bind (this);
                var selects = this._container.getElementsByClassName ("form-control custom-select");
                for (var i = 0; i < selects.length; i++)
                    selects.item (i).onchange = this.change.bind (this);
            }

            refresh ()
            {
                var options =
                    {
                        show_internal_features: this._cimmap.show_internal_features ()
                    };
                var geo = this._cimmap.get_themer ().getTheme ().make_geojson (this._features, options);
                this._map.getSource ("edit points").setData (geo.points);
                this._map.getSource ("edit lines").setData (geo.lines);
            }

            /**
             * Generate a GUID.
             * See https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript#2117523
             */
            uuidv4 ()
            {
                var uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace (/[018]/g, c => (c ^ crypto.getRandomValues (new Uint8Array (1))[0] & 15 >> c / 4).toString (16));
                return ("_" + uuid);
            }

            /**
             * Predicate to check if the <code>id</code> looks like a GUID.
             * @param s the string to test
             * @return <code>true</code> if the string has the form of a GUID with an optional leading underscore, <code>false</code> otherwise.
             */
            isGUID (s)
            {
                return ((null != s) ? /^[_]?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test (s) : false);
            }

            /**
             * Generate a 'unique' id.
             * If the supplied string looks like a GUID, this generates another GUID,
             * else it appends the suffix to the suplied string to generate a 'unique' id - if you know what you are doing.
             * @param s the 'base' id
             * @param the suffix to add to the base id if the base id isn't a GUID
             * @return a GUID or the supplied string with the suffix
             */
            generateId (s, suffix)
            {
                return (this.isGUID (s) ? this.uuidv4 () : s + suffix);
            }

            primary_element ()
            {
                var element = this._elements[0];
                var id = element.id;
                // read attributes from the form
                var cls = cim.class_map (element);
                element = Object.assign (element, cls.prototype.submit (element.id));
                if (element.mRID)
                    element.id = element.mRID; // reassign id based on mRID
                if (id != element.id)
                {
                    // update the form if the id changed
                    this._elements = [];
                    var text = this.build (element);
                    document.getElementById ("edit_contents").innerHTML = text;
                    this.process_related (element);
                }

                return (element);
            }

            editnew (array)
            {
                for (var i = 0; i < array.length; i++)
                    this.edit (array[i]);
                this.refresh ();
            }

            create_from (proto)
            {
                proto.EditDisposition = "new";
                var cls = cim.class_map (proto);
                var obj = new cls (proto, this._features);
                if (this._features.IdentifiedObject)
                    proto.mRID = proto.id;
                obj = new cls (proto, this._features); // do it again, possibly with mRID set
                this.edit (obj, true, true);
                this.refresh ();
                return (obj);
            }

            create ()
            {
                this._features = {};
                if (this._maker)
                {
                    this._maker_promise = this._maker.make (this._features);
                    this._maker_promise.promise ().then (this.editnew.bind (this), this.cancel.bind (this));
                }
                else
                {
                    var class_name = document.getElementById ("class_name").value;
                    var id = this.uuidv4 ();
                    var proto = { cls: class_name, id: id };
                    this.create_from (proto);
                }
            }

            create_new ()
            {
                var proto = JSON.parse (JSON.stringify (this._elements[0]));
                proto.id = this.uuidv4 ();
                this.create_from (proto);
            }

            add_layers ()
            {
                // the lines GeoJSON
                var lines =
                {
                    "type" : "FeatureCollection",
                    "features" : []
                };
                // the points GeoJSON
                var points =
                {
                    "type" : "FeatureCollection",
                    "features" : []
                };

                // update the map
                this._map.addSource
                (
                    "edit lines",
                    {
                        type: "geojson",
                        data: lines,
                        maxzoom: 25
                    }
                );

                this._map.addSource
                (
                    "edit points",
                    {
                        type: "geojson",
                        data: points,
                        maxzoom: 25
                    }
                );

                // lines 3 pixels wide
                this._map.addLayer (layers.line_layer ("edit_lines", "edit lines" , "rgb(255, 0, 0)"));
                this._map.addLayer (layers.line_layer ("edit_lines_highlight", "edit lines", "rgb(255, 255, 0)", ["==", "mRID", ""]));

                // simple circle from 14 to 17
                this._map.addLayer (layers.circle_layer ("edit_circle", "edit points", "rgb(255, 0, 0)"))
                this._map.addLayer (layers.circle_layer ("edit_circle_highlight", "edit points", "rgb(255, 255, 0)", ["==", "mRID", ""]))

                // symbol icon from 17 and deeper
                this._map.addLayer (layers.symbol_layer ("edit_symbol", "edit points", "rgb(255, 0, 0)"));
                this._map.addLayer (layers.symbol_layer ("edit_symbol_highlight", "edit points", "rgb(255, 255, 0)", ["==", "mRID", ""]));
            }

            on_map_resize (event)
            {
                var map_height = document.getElementById ("map").clientHeight;
                var top_margin = 10;
                var well_padding = 20;
                var logo_height = 18;
                var max_height = map_height - top_margin - well_padding - logo_height;
                this._container.style.maxHeight = max_height.toString () + "px";
                var guts = document.getElementById ("edit_contents");
                if (guts)
                    guts.style.maxHeight = (max_height - this._frame_height).toString () + "px";
            }

            // manually toggle the state to collapsed
            setCollapsed (text)
            {
                text = text.replace ("class=\"collapse-link\"", "class=\"collapse-link collapsed\"");
                text = text.replace ("aria-expanded=\"true\"", "aria-expanded=\"false\"");
                text = text.replace ("class=\"collapse in show\"", "class=\"collapse in\"");
                return (text);
            }

            build (element)
            {
                this._elements.push (element);
                var cls = cim.class_map (element);
                cls.prototype.condition (element);
                var template = cls.prototype.edit_template ();
                var text = mustache.render (template, element);
                cls.prototype.uncondition (element);
                text = this.setCollapsed (text);
                return (text);
            }

            // true if obj is only referenced by element and no other
            only_related (obj, element)
            {
                var cls = cim.class_map (obj);
                var data = this._cimmap.get_data ();
                var relations = cls.prototype.relations ();
                for (var i = 0; i < relations.length; i++)
                    if ((relations[i][2] == "0..1") || (relations[i][2] == "0..*"))
                    {
                        var related = data[relations[i][3]];
                        if (related)
                            for (var id in related)
                            {
                                var child = related[id];
                                if (child[relations[i][4]] == obj.id && child.id != element.id)
                                    return (false);
                            }
                    }
                return (true);
            }

            get_related (element)
            {
                var ret = [];
                function add (e)
                {
                    if ((e.id != element.id) && !ret.find (x => x.id == e.id))
                        ret.push (e);
                }
                var cls = cim.class_map (element);
                var data = this._cimmap.get_data ();
                if (data)
                {
                    var relations = cls.prototype.relations ();
                    for (var i = 0; i < relations.length; i++)
                        if (relations[i][1] == "0..1")
                        {
                            var ref = element[relations[i][0]];
                            if (ref)
                            {
                                var related = data[relations[i][3]];
                                if (related)
                                {
                                    var obj = related[ref];
                                    if (obj && (!obj.EditDisposition || (obj.EditDisposition != "delete")))
                                        if (this.only_related (obj, element))
                                            add (obj)
                                }
                            }
                        }
                        else
                        if (relations[i][2] == "0..1" || relations[i][2] == "1")
                        {
                            var related = data[relations[i][3]];
                            if (related)
                                for (var id in related)
                                {
                                    var obj = related[id];
                                    if (obj[relations[i][4]] == element.id)
                                        if (!obj.EditDisposition || (obj.EditDisposition != "delete"))
                                            add (obj)
                                }
                        }
                    // get ConnectivityNode and PositionPoint
                    // ToDo: should it/can it be made fully recursive
                    for (var j = 0; j < ret.length; j++)
                    {
                        var cls = cim.class_map (ret[j]);
                        var relations = cls.prototype.relations ();
                        for (var i = 0; i < relations.length; i++)
                            if (relations[i][1] == "0..1")
                            {
                                var ref = ret[j][relations[i][0]];
                                if (ref)
                                {
                                    var related = data[relations[i][3]];
                                    if (related)
                                    {
                                        var obj = related[ref];
                                        if (obj && (!obj.EditDisposition || (obj.EditDisposition != "delete")))
                                            if (this.only_related (obj, ret[j]))
                                                add (obj)
                                    }
                                }
                            }
                        else
                        if (relations[i][2] == "0..1" || relations[i][2] == "1")
                        {
                            var related = data[relations[i][3]];
                            if (related)
                                for (var id in related)
                                {
                                    var obj = related[id];
                                    if (obj[relations[i][4]] == ret[j].id)
                                        if (!obj.EditDisposition || (obj.EditDisposition != "delete"))
                                            add (obj)
                                }
                        }
                    }
                }

                return (ret);
            }

            // fix the form to make references into select drop-downs, i.e. turn this:
            //  <input id="Switch_location_CoordinateSystem" class="form-control" value="wgs84" type="text">
            //into this:
            //  <select id="Switch_location_CoordinateSystem" class="form-control custom-select">
            //    <option></option>
            //    <option>pseudo_wgs84</option>
            //    <option selected>wgs84</option>
            //  </select>
            process_related (element)
            {
                var cls = cim.class_map (element);
                var data = this._cimmap.get_data ();
                var newdata = this._features;
                var relations = cls.prototype.relations ();
                for (var i = 0; i < relations.length; i++)
                    if (relations[i][1] == "0..1")
                    {
                        var member = relations[i][0]; // object member name
                        var ref = element[member]; // mRID of current reference or undefined
                        var domid = element.id + "_" + member; // the HTML DOM element id
                        var candidates = [];
                        var selected = "";
                        var relatable = data ? data[relations[i][3]] : undefined;
                        if (relatable)
                        {
                            for (var id in relatable)
                            {
                                var obj = relatable[id];
                                if (!obj.EditDisposition || (obj.EditDisposition != "delete"))
                                    candidates.push (obj);
                            }
                            var obj = ref ? relatable[ref] : undefined;
                            selected = obj ? obj.id : selected;
                        }
                        var relatable2 = newdata ? newdata[relations[i][3]] : undefined;
                        if (relatable2)
                        {
                            for (var id in relatable2)
                            {
                                var obj = relatable2[id];
                                if (!obj.EditDisposition || (obj.EditDisposition != "delete"))
                                    candidates.push (obj);
                            }
                            var obj = ref ? relatable2[ref] : undefined;
                            selected = obj ? obj.id : selected;
                        }
                        if (candidates.length > 0)
                        {
                            candidates.sort ((a, b) => (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0);
                            if ("" == selected)
                                candidates.unshift ({ id: "" });
                            var options = candidates.map (choice => "<option value='" + choice.id + "' " + (choice.id == selected ? " selected" : "") + ">" + (choice.name ? choice.name : choice.id) + "</option>");
                            var select = document.createElement ("select");
                            select.setAttribute ("class", "form-control custom-select");
                            select.innerHTML = options.join ('');
                            select.id = domid;
                            var input = document.getElementById (domid);
                            if (input)
                                input.parentNode.replaceChild (select, input);
                        }
                    }
            }

            edit (element, top_level, is_new)
            {
                var cls = cim.class_map (element);
                if (top_level)
                {
                    var frame =
                        "<div id='edit_frame' class='card'>\n" +
                        "  <div class='card-body'>\n" +
                        "    <h5 id='view_title' class='card-title'>Edit <span id='edit_id'></span></h5>\n" +
                        "    <div id='edit_contents' class='card-text'></div>\n" +
                        "    <div class='card-footer'>\n" +
                        "      <button id='submit' type='button' class='btn btn-primary' onclick='require([\"cimmap\"], function(cimmap) { cimmap.get_editor ().save ();})'>Save</button>\n" +
                        (is_new ? "" : "      <button id='delete' type='button' class='btn btn-danger' onclick='require([\"cimmap\"], function(cimmap) { cimmap.get_editor ().del ();})'>Delete</button>\n") +
                        "      <button id='cancel' type='button' class='btn btn-success' onclick='require([\"cimmap\"], function(cimmap) { cimmap.get_editor ().cancel ();})'>Cancel</button>\n" +
                        "      <button id='create_new' type='button' class='btn btn-info' onclick='require([\"cimmap\"], function(cimmap) { cimmap.get_editor ().create_new ();})'>Create new</button>\n" +
                        "    </div>\n" +
                        "  </div>\n" +
                        "</div>\n";
                    this._container.innerHTML = frame;
                    // for non-IdentifiedObject elements, display the id
                    document.getElementById ("edit_id").innerHTML = element.id;
                    this._frame_height = document.getElementById ("edit_frame").clientHeight; // frame height with no edit template contents

                    this._elements = [];
                    var text = this.build (element);

                    // get related elements
                    var relatives = this.get_related (element)
                    for (var j = 0; j < relatives.length; j++)
                        text = text + this.build (relatives[j]);

                    document.getElementById ("edit_contents").innerHTML = text;
                    this.process_related (element);
                    for (var j = 0; j < relatives.length; j++)
                        this.process_related (relatives[j]);
                }
                else
                {
                    var text = this.build (element);
                    document.getElementById ("edit_contents").innerHTML = document.getElementById ("edit_contents").innerHTML + text;
                    this.process_related (element);
                }
                this.on_map_resize ();
            }

            // sample state transitions
            // [ ] => new => [ { id: "x", property: "a", EditDisposition: "new" } ]
            // [ { id: "x", property: "a" } ] => del => [ { id: "1:x", property: "a", EditDisposition: "delete" } ]
            // [ { id: "x", property: "a" } ] => save => [ { id: "x", property: "b", EditDisposition: "edit" } { id: "1:x", property: "a", EditDisposition: "delete" } ]
            // [ { id: "x", property: "b", EditDisposition: "edit" } { id: "1:x", property: "a", EditDisposition: "delete" } ] => save => [ { id: "x", property: "c", EditDisposition: "edit" } { id: "2:x", property: "b", EditDisposition: "delete" } { id: "1:x", property: "a", EditDisposition: "delete" } ]

            // on export non-difference model, export only where EditDisposition is undefined or "edit"
            // on export difference model,
            //   reverseDifferences only where EditDisposition is "delete" and version is 1
            //   forwardDifferences ony where EditDisposition is "new" or "edit"

            // ToDo: undo

            mrid (feature)
            {
                var mrid = feature.id;

                while (!isNaN (Number (mrid.charAt (0))))
                    mrid = mrid.substring (1);
                if (":" == mrid.charAt (0))
                    mrid = mrid.substring (1);

                return (mrid);
            }

            version (feature)
            {
                var version = 0;

                var mrid = feature.id;
                var i = 0;
                while (!isNaN (Number (mrid.charAt (i))))
                {
                    i = i + 1;
                    version = Number (mrid.substring (0, i));
                }

                return (version);
            }

            next_version (feature)
            {
                var version = 1;

                var list = this._cimmap.get_data ()[feature.cls];
                var mrid = this.mrid (feature);
                while (null != list[version.toString () + ":" + mrid])
                    version = version + 1;

                return (version.toString () + ":" + mrid);
            }

            shutdown ()
            {
                this._cimmap.unhighlight ();
                this.render ();
            }

            regen ()
            {
                this.shutdown ();
                this._cimmap.make_map ();
            }

            save ()
            {
                if (null == this._cimmap.get_data ())
                    this._cimmap.set_data ({});

                if (!this._features)
                {
                    // editing an existing object
                    for (var i = 0; i < this._elements.length; i++)
                    {
                        var element = this._elements[i];
                        var id = element.id;
                        var cls = cim.class_map (element);
                        // delete the old object and replace it with a "deleted" version
                        var version = this.next_version (element);
                        cls.prototype.remove (element, this._cimmap.get_data ());
                        element.id = version;
                        element.mRID = version;
                        element.EditDisposition = "delete";
                        var deleted = new cls (element, this._cimmap.get_data ());
                        // add a new object with a possibly changed mRID
                        element = cls.prototype.submit (id);
                        if (element.mRID)
                            element.id = element.mRID;
                        else
                            element.id = id;
                        element.cls = deleted.cls;
                        element.EditDisposition = "edit";
                        new cls (element, this._cimmap.get_data ());
                    }
                }
                else
                {
                    // saving a new set of objects
                    for (var i = 0; i < this._elements.length; i++)
                    {
                        var element = this._elements[i];
                        var cls = cim.class_map (element);
                        element = Object.assign (element, cls.prototype.submit (element.id));
                        if (element.mRID)
                            element.id = element.mRID; // reassign id based on mRID
                        new cls (element, this._cimmap.get_data ());
                    }
                    delete this._elements;
                    delete this._features;
                }
                // remove features from edit layers
                this._map.getSource ("edit points").setData ({ "type" : "FeatureCollection", "features" : [] });
                this._map.getSource ("edit lines").setData ({ "type" : "FeatureCollection", "features" : [] });
                // regenerate the map
                this.regen ();
            }

            del ()
            {
                if (this._maker_promise)
                {
                    var maker_promise = this._maker_promise; // ensure recursion doesn't happen
                    delete this._maker_promise;
                    maker_promise.cancel ();
                    delete this._maker;
                }
                if (!this._features)
                {
                    if (this._elements)
                    {
                        // delete existing features
                        for (var i = 0; i < this._elements.length; i++)
                        {
                            var old_obj = this._elements[i];
                            var cls = cim.class_map (old_obj);
                            cls.prototype.remove (old_obj, this._cimmap.get_data ());
                            old_obj.EditDisposition = "delete";
                            old_obj.id = this.next_version (old_obj);
                            old_obj.mRID = old_obj.id;
                            this._elements[i] = new cls (old_obj, this._cimmap.get_data ());
                        }
                        delete this._elements;
                    }
                }
                else
                {
                    delete this._elements;
                    delete this._features;
                    this._map.getSource ("edit points").setData ({ "type" : "FeatureCollection", "features" : [] });
                    this._map.getSource ("edit lines").setData ({ "type" : "FeatureCollection", "features" : [] });
                }
                this.regen ();
            }

            cancel (error)
            {
                if (error)
                    console.log (error);
                if (this._maker_promise)
                {
                    var maker_promise = this._maker_promise; // ensure recursion doesn't happen
                    delete this._maker_promise;
                    maker_promise.cancel ();
                    delete this._maker;
                }
                delete this._elements;
                delete this._features;
                this._map.getSource ("edit points").setData ({ "type" : "FeatureCollection", "features" : [] });
                this._map.getSource ("edit lines").setData ({ "type" : "FeatureCollection", "features" : [] });
                this.shutdown ();
            }
        }

        return (CIMEdit);
    }
)