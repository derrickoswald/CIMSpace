define
(
    ["model/base"],
    function (base)
    {

        /**
         * Status indication for bids
         * 
         * CV - Conditionally Valid Bid
         * CM - Conditionally Modified Bid
         * V - Valid Bid
         * M - Modified Bid
         * RJ - Rejected Bid
         * I - Invalid Bid
         * CX - Cancelled Bid
         * O - Obsolete Bid
         * CL - Clean Bid
         *
         * RP - Replicated Bid
         *
         */
        let BidStatusType =
        {
            "RP": "RP",
            "RJ": "RJ",
            "I": "I",
            "CV": "CV",
            "CM": "CM",
            "V": "V",
            "M": "M",
            "CX": "CX",
            "O": "O",
            "CL": "CL"
        };
        Object.freeze (BidStatusType);

        /**
         * RJ - Rejected Trade
         * I - Invalid Trade
         * V - Valid Trade
         * M - Modified Trade
         * CV - Conditionally Valid Trade
         * CM - Conditionally Modified Trade
         * CI - Conditionally Invalid Trade
         * CX - Cancelled Trade
         * O - Obsolete Trade
         * MT - Matched Trade
         *
         * U - Unmatched Trade
         *
         */
        let TradeStatusType =
        {
            "RJ": "RJ",
            "I": "I",
            "V": "V",
            "M": "M",
            "CV": "CV",
            "CM": "CM",
            "CI": "CI",
            "CX": "CX",
            "O": "O",
            "MT": "MT",
            "U": "U"
        };
        Object.freeze (TradeStatusType);

        class TradeProductType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TradeProductType;
                if (null == bucket)
                   cim_data.TradeProductType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TradeProductType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TradeProductType";
                base.parse_attribute (/<cim:TradeProductType.PHY\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PHY", sub, context);
                base.parse_attribute (/<cim:TradeProductType.APN\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "APN", sub, context);
                base.parse_attribute (/<cim:TradeProductType.RUT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RUT", sub, context);
                base.parse_attribute (/<cim:TradeProductType.RDT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RDT", sub, context);
                base.parse_attribute (/<cim:TradeProductType.SRT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SRT", sub, context);
                base.parse_attribute (/<cim:TradeProductType.NRT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NRT", sub, context);
                base.parse_attribute (/<cim:TradeProductType.CAP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CAP", sub, context);
                let bucket = context.parsed.TradeProductType;
                if (null == bucket)
                   context.parsed.TradeProductType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "TradeProductType", "PHY", "PHY", fields);
                base.export_attribute (obj, "TradeProductType", "APN", "APN", fields);
                base.export_attribute (obj, "TradeProductType", "RUT", "RUT", fields);
                base.export_attribute (obj, "TradeProductType", "RDT", "RDT", fields);
                base.export_attribute (obj, "TradeProductType", "SRT", "SRT", fields);
                base.export_attribute (obj, "TradeProductType", "NRT", "NRT", fields);
                base.export_attribute (obj, "TradeProductType", "CAP", "CAP", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TradeProductType_collapse" aria-expanded="true" aria-controls="TradeProductType_collapse" style="margin-left: 10px;">TradeProductType</a></legend>
                    <div id="TradeProductType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#PHY}}<div><b>PHY</b>: {{PHY}}</div>{{/PHY}}
                    {{#APN}}<div><b>APN</b>: {{APN}}</div>{{/APN}}
                    {{#RUT}}<div><b>RUT</b>: {{RUT}}</div>{{/RUT}}
                    {{#RDT}}<div><b>RDT</b>: {{RDT}}</div>{{/RDT}}
                    {{#SRT}}<div><b>SRT</b>: {{SRT}}</div>{{/SRT}}
                    {{#NRT}}<div><b>NRT</b>: {{NRT}}</div>{{/NRT}}
                    {{#CAP}}<div><b>CAP</b>: {{CAP}}</div>{{/CAP}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TradeProductType_collapse" aria-expanded="true" aria-controls="{{id}}_TradeProductType_collapse" style="margin-left: 10px;">TradeProductType</a></legend>
                    <div id="{{id}}_TradeProductType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PHY'>PHY: </label><div class='col-sm-8'><input id='{{id}}_PHY' class='form-control' type='text'{{#PHY}} value='{{PHY}}'{{/PHY}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_APN'>APN: </label><div class='col-sm-8'><input id='{{id}}_APN' class='form-control' type='text'{{#APN}} value='{{APN}}'{{/APN}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RUT'>RUT: </label><div class='col-sm-8'><input id='{{id}}_RUT' class='form-control' type='text'{{#RUT}} value='{{RUT}}'{{/RUT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RDT'>RDT: </label><div class='col-sm-8'><input id='{{id}}_RDT' class='form-control' type='text'{{#RDT}} value='{{RDT}}'{{/RDT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SRT'>SRT: </label><div class='col-sm-8'><input id='{{id}}_SRT' class='form-control' type='text'{{#SRT}} value='{{SRT}}'{{/SRT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NRT'>NRT: </label><div class='col-sm-8'><input id='{{id}}_NRT' class='form-control' type='text'{{#NRT}} value='{{NRT}}'{{/NRT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CAP'>CAP: </label><div class='col-sm-8'><input id='{{id}}_CAP' class='form-control' type='text'{{#CAP}} value='{{CAP}}'{{/CAP}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TradeProductType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PHY").value; if ("" !== temp) obj["PHY"] = temp;
                temp = document.getElementById (id + "_APN").value; if ("" !== temp) obj["APN"] = temp;
                temp = document.getElementById (id + "_RUT").value; if ("" !== temp) obj["RUT"] = temp;
                temp = document.getElementById (id + "_RDT").value; if ("" !== temp) obj["RDT"] = temp;
                temp = document.getElementById (id + "_SRT").value; if ("" !== temp) obj["SRT"] = temp;
                temp = document.getElementById (id + "_NRT").value; if ("" !== temp) obj["NRT"] = temp;
                temp = document.getElementById (id + "_CAP").value; if ("" !== temp) obj["CAP"] = temp;

                return (obj);
            }
        }

        class JobFlagType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.JobFlagType;
                if (null == bucket)
                   cim_data.JobFlagType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.JobFlagType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "JobFlagType";
                base.parse_attribute (/<cim:JobFlagType.CREATED\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CREATED", sub, context);
                base.parse_attribute (/<cim:JobFlagType.MODIFIED\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MODIFIED", sub, context);
                base.parse_attribute (/<cim:JobFlagType.DELETED\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DELETED", sub, context);
                let bucket = context.parsed.JobFlagType;
                if (null == bucket)
                   context.parsed.JobFlagType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "JobFlagType", "CREATED", "CREATED", fields);
                base.export_attribute (obj, "JobFlagType", "MODIFIED", "MODIFIED", fields);
                base.export_attribute (obj, "JobFlagType", "DELETED", "DELETED", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#JobFlagType_collapse" aria-expanded="true" aria-controls="JobFlagType_collapse" style="margin-left: 10px;">JobFlagType</a></legend>
                    <div id="JobFlagType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#CREATED}}<div><b>CREATED</b>: {{CREATED}}</div>{{/CREATED}}
                    {{#MODIFIED}}<div><b>MODIFIED</b>: {{MODIFIED}}</div>{{/MODIFIED}}
                    {{#DELETED}}<div><b>DELETED</b>: {{DELETED}}</div>{{/DELETED}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_JobFlagType_collapse" aria-expanded="true" aria-controls="{{id}}_JobFlagType_collapse" style="margin-left: 10px;">JobFlagType</a></legend>
                    <div id="{{id}}_JobFlagType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CREATED'>CREATED: </label><div class='col-sm-8'><input id='{{id}}_CREATED' class='form-control' type='text'{{#CREATED}} value='{{CREATED}}'{{/CREATED}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MODIFIED'>MODIFIED: </label><div class='col-sm-8'><input id='{{id}}_MODIFIED' class='form-control' type='text'{{#MODIFIED}} value='{{MODIFIED}}'{{/MODIFIED}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DELETED'>DELETED: </label><div class='col-sm-8'><input id='{{id}}_DELETED' class='form-control' type='text'{{#DELETED}} value='{{DELETED}}'{{/DELETED}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "JobFlagType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_CREATED").value; if ("" !== temp) obj["CREATED"] = temp;
                temp = document.getElementById (id + "_MODIFIED").value; if ("" !== temp) obj["MODIFIED"] = temp;
                temp = document.getElementById (id + "_DELETED").value; if ("" !== temp) obj["DELETED"] = temp;

                return (obj);
            }
        }

        /**
         * ACTIVE
         *
         * INACTIVE
         *
         */
        class CurrentStatusSC extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CurrentStatusSC;
                if (null == bucket)
                   cim_data.CurrentStatusSC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CurrentStatusSC[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CurrentStatusSC";
                base.parse_attribute (/<cim:CurrentStatusSC.ACTIVE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ACTIVE", sub, context);
                base.parse_attribute (/<cim:CurrentStatusSC.INACTIVE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "INACTIVE", sub, context);
                let bucket = context.parsed.CurrentStatusSC;
                if (null == bucket)
                   context.parsed.CurrentStatusSC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "CurrentStatusSC", "ACTIVE", "ACTIVE", fields);
                base.export_attribute (obj, "CurrentStatusSC", "INACTIVE", "INACTIVE", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CurrentStatusSC_collapse" aria-expanded="true" aria-controls="CurrentStatusSC_collapse" style="margin-left: 10px;">CurrentStatusSC</a></legend>
                    <div id="CurrentStatusSC_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#ACTIVE}}<div><b>ACTIVE</b>: {{ACTIVE}}</div>{{/ACTIVE}}
                    {{#INACTIVE}}<div><b>INACTIVE</b>: {{INACTIVE}}</div>{{/INACTIVE}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CurrentStatusSC_collapse" aria-expanded="true" aria-controls="{{id}}_CurrentStatusSC_collapse" style="margin-left: 10px;">CurrentStatusSC</a></legend>
                    <div id="{{id}}_CurrentStatusSC_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ACTIVE'>ACTIVE: </label><div class='col-sm-8'><input id='{{id}}_ACTIVE' class='form-control' type='text'{{#ACTIVE}} value='{{ACTIVE}}'{{/ACTIVE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_INACTIVE'>INACTIVE: </label><div class='col-sm-8'><input id='{{id}}_INACTIVE' class='form-control' type='text'{{#INACTIVE}} value='{{INACTIVE}}'{{/INACTIVE}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CurrentStatusSC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ACTIVE").value; if ("" !== temp) obj["ACTIVE"] = temp;
                temp = document.getElementById (id + "_INACTIVE").value; if ("" !== temp) obj["INACTIVE"] = temp;

                return (obj);
            }
        }

        class SelfSchedTypeCleanBid extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SelfSchedTypeCleanBid;
                if (null == bucket)
                   cim_data.SelfSchedTypeCleanBid = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SelfSchedTypeCleanBid[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SelfSchedTypeCleanBid";
                base.parse_attribute (/<cim:SelfSchedTypeCleanBid.PT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PT", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeCleanBid.ETC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ETC", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeCleanBid.TOR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TOR", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeCleanBid.RMT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMT", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeCleanBid.SP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SP", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeCleanBid.RA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RA", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeCleanBid.IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IFM", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeCleanBid.BAS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BAS", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeCleanBid.LOF\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LOF", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeCleanBid.WHL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WHL", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeCleanBid.LPT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LPT", sub, context);
                let bucket = context.parsed.SelfSchedTypeCleanBid;
                if (null == bucket)
                   context.parsed.SelfSchedTypeCleanBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "SelfSchedTypeCleanBid", "PT", "PT", fields);
                base.export_attribute (obj, "SelfSchedTypeCleanBid", "ETC", "ETC", fields);
                base.export_attribute (obj, "SelfSchedTypeCleanBid", "TOR", "TOR", fields);
                base.export_attribute (obj, "SelfSchedTypeCleanBid", "RMT", "RMT", fields);
                base.export_attribute (obj, "SelfSchedTypeCleanBid", "SP", "SP", fields);
                base.export_attribute (obj, "SelfSchedTypeCleanBid", "RA", "RA", fields);
                base.export_attribute (obj, "SelfSchedTypeCleanBid", "IFM", "IFM", fields);
                base.export_attribute (obj, "SelfSchedTypeCleanBid", "BAS", "BAS", fields);
                base.export_attribute (obj, "SelfSchedTypeCleanBid", "LOF", "LOF", fields);
                base.export_attribute (obj, "SelfSchedTypeCleanBid", "WHL", "WHL", fields);
                base.export_attribute (obj, "SelfSchedTypeCleanBid", "LPT", "LPT", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SelfSchedTypeCleanBid_collapse" aria-expanded="true" aria-controls="SelfSchedTypeCleanBid_collapse" style="margin-left: 10px;">SelfSchedTypeCleanBid</a></legend>
                    <div id="SelfSchedTypeCleanBid_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#PT}}<div><b>PT</b>: {{PT}}</div>{{/PT}}
                    {{#ETC}}<div><b>ETC</b>: {{ETC}}</div>{{/ETC}}
                    {{#TOR}}<div><b>TOR</b>: {{TOR}}</div>{{/TOR}}
                    {{#RMT}}<div><b>RMT</b>: {{RMT}}</div>{{/RMT}}
                    {{#SP}}<div><b>SP</b>: {{SP}}</div>{{/SP}}
                    {{#RA}}<div><b>RA</b>: {{RA}}</div>{{/RA}}
                    {{#IFM}}<div><b>IFM</b>: {{IFM}}</div>{{/IFM}}
                    {{#BAS}}<div><b>BAS</b>: {{BAS}}</div>{{/BAS}}
                    {{#LOF}}<div><b>LOF</b>: {{LOF}}</div>{{/LOF}}
                    {{#WHL}}<div><b>WHL</b>: {{WHL}}</div>{{/WHL}}
                    {{#LPT}}<div><b>LPT</b>: {{LPT}}</div>{{/LPT}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SelfSchedTypeCleanBid_collapse" aria-expanded="true" aria-controls="{{id}}_SelfSchedTypeCleanBid_collapse" style="margin-left: 10px;">SelfSchedTypeCleanBid</a></legend>
                    <div id="{{id}}_SelfSchedTypeCleanBid_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PT'>PT: </label><div class='col-sm-8'><input id='{{id}}_PT' class='form-control' type='text'{{#PT}} value='{{PT}}'{{/PT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ETC'>ETC: </label><div class='col-sm-8'><input id='{{id}}_ETC' class='form-control' type='text'{{#ETC}} value='{{ETC}}'{{/ETC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TOR'>TOR: </label><div class='col-sm-8'><input id='{{id}}_TOR' class='form-control' type='text'{{#TOR}} value='{{TOR}}'{{/TOR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMT'>RMT: </label><div class='col-sm-8'><input id='{{id}}_RMT' class='form-control' type='text'{{#RMT}} value='{{RMT}}'{{/RMT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SP'>SP: </label><div class='col-sm-8'><input id='{{id}}_SP' class='form-control' type='text'{{#SP}} value='{{SP}}'{{/SP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RA'>RA: </label><div class='col-sm-8'><input id='{{id}}_RA' class='form-control' type='text'{{#RA}} value='{{RA}}'{{/RA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IFM'>IFM: </label><div class='col-sm-8'><input id='{{id}}_IFM' class='form-control' type='text'{{#IFM}} value='{{IFM}}'{{/IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BAS'>BAS: </label><div class='col-sm-8'><input id='{{id}}_BAS' class='form-control' type='text'{{#BAS}} value='{{BAS}}'{{/BAS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LOF'>LOF: </label><div class='col-sm-8'><input id='{{id}}_LOF' class='form-control' type='text'{{#LOF}} value='{{LOF}}'{{/LOF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WHL'>WHL: </label><div class='col-sm-8'><input id='{{id}}_WHL' class='form-control' type='text'{{#WHL}} value='{{WHL}}'{{/WHL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LPT'>LPT: </label><div class='col-sm-8'><input id='{{id}}_LPT' class='form-control' type='text'{{#LPT}} value='{{LPT}}'{{/LPT}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SelfSchedTypeCleanBid" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PT").value; if ("" !== temp) obj["PT"] = temp;
                temp = document.getElementById (id + "_ETC").value; if ("" !== temp) obj["ETC"] = temp;
                temp = document.getElementById (id + "_TOR").value; if ("" !== temp) obj["TOR"] = temp;
                temp = document.getElementById (id + "_RMT").value; if ("" !== temp) obj["RMT"] = temp;
                temp = document.getElementById (id + "_SP").value; if ("" !== temp) obj["SP"] = temp;
                temp = document.getElementById (id + "_RA").value; if ("" !== temp) obj["RA"] = temp;
                temp = document.getElementById (id + "_IFM").value; if ("" !== temp) obj["IFM"] = temp;
                temp = document.getElementById (id + "_BAS").value; if ("" !== temp) obj["BAS"] = temp;
                temp = document.getElementById (id + "_LOF").value; if ("" !== temp) obj["LOF"] = temp;
                temp = document.getElementById (id + "_WHL").value; if ("" !== temp) obj["WHL"] = temp;
                temp = document.getElementById (id + "_LPT").value; if ("" !== temp) obj["LPT"] = temp;

                return (obj);
            }
        }

        /**
         * market statement document type
         *
         */
        class MarketStatementDocType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketStatementDocType;
                if (null == bucket)
                   cim_data.MarketStatementDocType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketStatementDocType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketStatementDocType";
                base.parse_attribute (/<cim:MarketStatementDocType.CREDIT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CREDIT", sub, context);
                base.parse_attribute (/<cim:MarketStatementDocType.MARKET_INITIAL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MARKET_INITIAL", sub, context);
                base.parse_attribute (/<cim:MarketStatementDocType.MARKET_RECALC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MARKET_RECALC", sub, context);
                let bucket = context.parsed.MarketStatementDocType;
                if (null == bucket)
                   context.parsed.MarketStatementDocType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "MarketStatementDocType", "CREDIT", "CREDIT", fields);
                base.export_attribute (obj, "MarketStatementDocType", "MARKET_INITIAL", "MARKET_INITIAL", fields);
                base.export_attribute (obj, "MarketStatementDocType", "MARKET_RECALC", "MARKET_RECALC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketStatementDocType_collapse" aria-expanded="true" aria-controls="MarketStatementDocType_collapse" style="margin-left: 10px;">MarketStatementDocType</a></legend>
                    <div id="MarketStatementDocType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#CREDIT}}<div><b>CREDIT</b>: {{CREDIT}}</div>{{/CREDIT}}
                    {{#MARKET_INITIAL}}<div><b>MARKET_INITIAL</b>: {{MARKET_INITIAL}}</div>{{/MARKET_INITIAL}}
                    {{#MARKET_RECALC}}<div><b>MARKET_RECALC</b>: {{MARKET_RECALC}}</div>{{/MARKET_RECALC}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketStatementDocType_collapse" aria-expanded="true" aria-controls="{{id}}_MarketStatementDocType_collapse" style="margin-left: 10px;">MarketStatementDocType</a></legend>
                    <div id="{{id}}_MarketStatementDocType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CREDIT'>CREDIT: </label><div class='col-sm-8'><input id='{{id}}_CREDIT' class='form-control' type='text'{{#CREDIT}} value='{{CREDIT}}'{{/CREDIT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MARKET_INITIAL'>MARKET_INITIAL: </label><div class='col-sm-8'><input id='{{id}}_MARKET_INITIAL' class='form-control' type='text'{{#MARKET_INITIAL}} value='{{MARKET_INITIAL}}'{{/MARKET_INITIAL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MARKET_RECALC'>MARKET_RECALC: </label><div class='col-sm-8'><input id='{{id}}_MARKET_RECALC' class='form-control' type='text'{{#MARKET_RECALC}} value='{{MARKET_RECALC}}'{{/MARKET_RECALC}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketStatementDocType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_CREDIT").value; if ("" !== temp) obj["CREDIT"] = temp;
                temp = document.getElementById (id + "_MARKET_INITIAL").value; if ("" !== temp) obj["MARKET_INITIAL"] = temp;
                temp = document.getElementById (id + "_MARKET_RECALC").value; if ("" !== temp) obj["MARKET_RECALC"] = temp;

                return (obj);
            }
        }

        class OASISDataItems extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OASISDataItems;
                if (null == bucket)
                   cim_data.OASISDataItems = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OASISDataItems[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISDataItems";
                base.parse_attribute (/<cim:OASISDataItems.RMR_TOTAL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMR_TOTAL", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.RMR_TOTAL_AVAIL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMR_TOTAL_AVAIL", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.RUC_GEN_CLEAR_RUC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RUC_GEN_CLEAR_RUC", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.RUC_IMP_CLEAR_RUC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RUC_IMP_CLEAR_RUC", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.RUC_LOAD_CLEAR_RUC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RUC_LOAD_CLEAR_RUC", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.RUC_ZONE_value\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RUC_ZONE_value", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.TAC_AREA_value\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TAC_AREA_value", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.TINTRFCE_value\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TINTRFCE_value", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.TRNS_AS_IMPORT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_AS_IMPORT", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.TRNS_ENE_IMPORT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_ENE_IMPORT", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.TRNS_EQUIP_value\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_EQUIP_value", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.TRNS_RATING_CBM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_RATING_CBM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.TRNS_RATING_DIRECTION\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_RATING_DIRECTION", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.TRNS_RATING_OTC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_RATING_OTC", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.TRNS_RATING_OTC_DERATE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_RATING_OTC_DERATE", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.TRNS_RATING_TTC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_RATING_TTC", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.TRNS_TI_value\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_TI_value", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.TRNS_TR_ENTMTS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_TR_ENTMTS", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.TRNS_TR_USEAGE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_TR_USEAGE", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_CLEAR_ASMP_IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_CLEAR_ASMP_IFM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_CLEAR_ASMP_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_CLEAR_ASMP_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_CLEAR_COST_IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_CLEAR_COST_IFM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_CLEAR_COST_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_CLEAR_COST_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_CLEAR_MW_IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_CLEAR_MW_IFM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_CLEAR_MW_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_CLEAR_MW_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_GEN_TOTAL_MW_IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_GEN_TOTAL_MW_IFM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_GEN_TOTAL_MW_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_GEN_TOTAL_MW_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_IMP_TOTAL_MW_IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_IMP_TOTAL_MW_IFM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_IMP_TOTAL_MW_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_IMP_TOTAL_MW_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_LOAD_TOTAL_MW_IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_LOAD_TOTAL_MW_IFM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_LOAD_TOTAL_MW_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_LOAD_TOTAL_MW_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_REGION_value\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_REGION_value", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_REGION_REQ_MAX\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_REGION_REQ_MAX", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_REGION_REQ_MIN\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_REGION_REQ_MIN", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_SELF_MW_IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_SELF_MW_IFM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_SELF_MW_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_SELF_MW_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_TOTAL_MW\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_TOTAL_MW", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_TOTAL_MW_IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_TOTAL_MW_IFM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_TOTAL_MW_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_TOTAL_MW_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_TYPE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_TYPE", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.AS_USER_RATE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_USER_RATE", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CA_value\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CA_value", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CMMT_MINLOAD_MLC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CMMT_MINLOAD_MLC", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CMMT_MINLOAD_MW\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CMMT_MINLOAD_MW", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CMMT_RA_MLC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CMMT_RA_MLC", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CMMT_RA_MW\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CMMT_RA_MW", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CMMT_RA_START_COST\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CMMT_RA_START_COST", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CMMT_RA_UNITS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CMMT_RA_UNITS", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CMMT_TOTAL_START_COST\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CMMT_TOTAL_START_COST", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CMMT_TOTAL_MW\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CMMT_TOTAL_MW", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CMMT_TOTAL_UNITS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CMMT_TOTAL_UNITS", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CRR_CAT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRR_CAT", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CRR_MARKET_value\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRR_MARKET_value", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CRR_MW\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRR_MW", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CRR_NSR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRR_NSR", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CRR_OPTION\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRR_OPTION", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CRR_OWNER\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRR_OWNER", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CRR_SEGMENT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRR_SEGMENT", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CRR_TERM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRR_TERM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CRR_TOU\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRR_TOU", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.CRR_TYPE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRR_TYPE", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EA_DA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EA_DA", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EA_EXCEPT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EA_EXCEPT", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EA_HASP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EA_HASP", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EA_MLE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EA_MLE", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EA_MSSLF\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EA_MSSLF", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EA_OPTIMAL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EA_OPTIMAL", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EA_RAMP_DEV\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EA_RAMP_DEV", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EA_RAMP_STD\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EA_RAMP_STD", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EA_RESIDUAL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EA_RESIDUAL", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EA_RMR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EA_RMR", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EA_SELF\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EA_SELF", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EA_SLIC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EA_SLIC", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EXP_CLEAR_HASP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EXP_CLEAR_HASP", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EXP_CLEAR_IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EXP_CLEAR_IFM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_EXP_CLEAR_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EXP_CLEAR_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_GEN_CLEAR_HASP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_GEN_CLEAR_HASP", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_GEN_CLEAR_IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_GEN_CLEAR_IFM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_GEN_CLEAR_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_GEN_CLEAR_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_IMP_CLEAR_HASP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_IMP_CLEAR_HASP", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_IMP_CLEAR_IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_IMP_CLEAR_IFM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_IMP_CLEAR_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_IMP_CLEAR_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_LOAD_ACTUAL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_LOAD_ACTUAL", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_LOAD_CLEAR_HASP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_LOAD_CLEAR_HASP", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_LOAD_CLEAR_IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_LOAD_CLEAR_IFM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_LOAD_CLEAR_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_LOAD_CLEAR_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_LOAD_FCST\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_LOAD_FCST", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_PEAK_HOUR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_PEAK_HOUR", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.ENE_PEAK_LOAD\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_PEAK_LOAD", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.FUEL_REGION_value\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FUEL_REGION_value", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.INVT_DATETIME\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "INVT_DATETIME", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.LOAD_ACTUAL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LOAD_ACTUAL", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.LOAD_CLEAR_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LOAD_CLEAR_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.LOSS_TOTAL_COST_HASP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LOSS_TOTAL_COST_HASP", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.LOSS_TOTAL_COST_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LOSS_TOTAL_COST_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.LOSS_TOTAL_MW_HASP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LOSS_TOTAL_MW_HASP", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.LOSS_TOTAL_MW_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LOSS_TOTAL_MW_RTM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.MPM_FLAG\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MPM_FLAG", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.OP_RSRV_TOTAL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OP_RSRV_TOTAL", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.PRC_NG\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PRC_NG", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.PRC_SHADOW\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PRC_SHADOW", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.RATING_ATC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RATING_ATC", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.RMR_DETER_DAM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMR_DETER_DAM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.RMR_DETER_HASP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMR_DETER_HASP", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.RMR_DISPATCH_DAM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMR_DISPATCH_DAM", sub, context);
                base.parse_attribute (/<cim:OASISDataItems.RMR_DISPATCH_HASP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMR_DISPATCH_HASP", sub, context);
                let bucket = context.parsed.OASISDataItems;
                if (null == bucket)
                   context.parsed.OASISDataItems = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "OASISDataItems", "RMR_TOTAL", "RMR_TOTAL", fields);
                base.export_attribute (obj, "OASISDataItems", "RMR_TOTAL_AVAIL", "RMR_TOTAL_AVAIL", fields);
                base.export_attribute (obj, "OASISDataItems", "RUC_GEN_CLEAR_RUC", "RUC_GEN_CLEAR_RUC", fields);
                base.export_attribute (obj, "OASISDataItems", "RUC_IMP_CLEAR_RUC", "RUC_IMP_CLEAR_RUC", fields);
                base.export_attribute (obj, "OASISDataItems", "RUC_LOAD_CLEAR_RUC", "RUC_LOAD_CLEAR_RUC", fields);
                base.export_attribute (obj, "OASISDataItems", "RUC_ZONE_value", "RUC_ZONE_value", fields);
                base.export_attribute (obj, "OASISDataItems", "TAC_AREA_value", "TAC_AREA_value", fields);
                base.export_attribute (obj, "OASISDataItems", "TINTRFCE_value", "TINTRFCE_value", fields);
                base.export_attribute (obj, "OASISDataItems", "TRNS_AS_IMPORT", "TRNS_AS_IMPORT", fields);
                base.export_attribute (obj, "OASISDataItems", "TRNS_ENE_IMPORT", "TRNS_ENE_IMPORT", fields);
                base.export_attribute (obj, "OASISDataItems", "TRNS_EQUIP_value", "TRNS_EQUIP_value", fields);
                base.export_attribute (obj, "OASISDataItems", "TRNS_RATING_CBM", "TRNS_RATING_CBM", fields);
                base.export_attribute (obj, "OASISDataItems", "TRNS_RATING_DIRECTION", "TRNS_RATING_DIRECTION", fields);
                base.export_attribute (obj, "OASISDataItems", "TRNS_RATING_OTC", "TRNS_RATING_OTC", fields);
                base.export_attribute (obj, "OASISDataItems", "TRNS_RATING_OTC_DERATE", "TRNS_RATING_OTC_DERATE", fields);
                base.export_attribute (obj, "OASISDataItems", "TRNS_RATING_TTC", "TRNS_RATING_TTC", fields);
                base.export_attribute (obj, "OASISDataItems", "TRNS_TI_value", "TRNS_TI_value", fields);
                base.export_attribute (obj, "OASISDataItems", "TRNS_TR_ENTMTS", "TRNS_TR_ENTMTS", fields);
                base.export_attribute (obj, "OASISDataItems", "TRNS_TR_USEAGE", "TRNS_TR_USEAGE", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_CLEAR_ASMP_IFM", "AS_CLEAR_ASMP_IFM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_CLEAR_ASMP_RTM", "AS_CLEAR_ASMP_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_CLEAR_COST_IFM", "AS_CLEAR_COST_IFM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_CLEAR_COST_RTM", "AS_CLEAR_COST_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_CLEAR_MW_IFM", "AS_CLEAR_MW_IFM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_CLEAR_MW_RTM", "AS_CLEAR_MW_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_GEN_TOTAL_MW_IFM", "AS_GEN_TOTAL_MW_IFM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_GEN_TOTAL_MW_RTM", "AS_GEN_TOTAL_MW_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_IMP_TOTAL_MW_IFM", "AS_IMP_TOTAL_MW_IFM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_IMP_TOTAL_MW_RTM", "AS_IMP_TOTAL_MW_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_LOAD_TOTAL_MW_IFM", "AS_LOAD_TOTAL_MW_IFM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_LOAD_TOTAL_MW_RTM", "AS_LOAD_TOTAL_MW_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_REGION_value", "AS_REGION_value", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_REGION_REQ_MAX", "AS_REGION_REQ_MAX", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_REGION_REQ_MIN", "AS_REGION_REQ_MIN", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_SELF_MW_IFM", "AS_SELF_MW_IFM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_SELF_MW_RTM", "AS_SELF_MW_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_TOTAL_MW", "AS_TOTAL_MW", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_TOTAL_MW_IFM", "AS_TOTAL_MW_IFM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_TOTAL_MW_RTM", "AS_TOTAL_MW_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_TYPE", "AS_TYPE", fields);
                base.export_attribute (obj, "OASISDataItems", "AS_USER_RATE", "AS_USER_RATE", fields);
                base.export_attribute (obj, "OASISDataItems", "CA_value", "CA_value", fields);
                base.export_attribute (obj, "OASISDataItems", "CMMT_MINLOAD_MLC", "CMMT_MINLOAD_MLC", fields);
                base.export_attribute (obj, "OASISDataItems", "CMMT_MINLOAD_MW", "CMMT_MINLOAD_MW", fields);
                base.export_attribute (obj, "OASISDataItems", "CMMT_RA_MLC", "CMMT_RA_MLC", fields);
                base.export_attribute (obj, "OASISDataItems", "CMMT_RA_MW", "CMMT_RA_MW", fields);
                base.export_attribute (obj, "OASISDataItems", "CMMT_RA_START_COST", "CMMT_RA_START_COST", fields);
                base.export_attribute (obj, "OASISDataItems", "CMMT_RA_UNITS", "CMMT_RA_UNITS", fields);
                base.export_attribute (obj, "OASISDataItems", "CMMT_TOTAL_START_COST", "CMMT_TOTAL_START_COST", fields);
                base.export_attribute (obj, "OASISDataItems", "CMMT_TOTAL_MW", "CMMT_TOTAL_MW", fields);
                base.export_attribute (obj, "OASISDataItems", "CMMT_TOTAL_UNITS", "CMMT_TOTAL_UNITS", fields);
                base.export_attribute (obj, "OASISDataItems", "CRR_CAT", "CRR_CAT", fields);
                base.export_attribute (obj, "OASISDataItems", "CRR_MARKET_value", "CRR_MARKET_value", fields);
                base.export_attribute (obj, "OASISDataItems", "CRR_MW", "CRR_MW", fields);
                base.export_attribute (obj, "OASISDataItems", "CRR_NSR", "CRR_NSR", fields);
                base.export_attribute (obj, "OASISDataItems", "CRR_OPTION", "CRR_OPTION", fields);
                base.export_attribute (obj, "OASISDataItems", "CRR_OWNER", "CRR_OWNER", fields);
                base.export_attribute (obj, "OASISDataItems", "CRR_SEGMENT", "CRR_SEGMENT", fields);
                base.export_attribute (obj, "OASISDataItems", "CRR_TERM", "CRR_TERM", fields);
                base.export_attribute (obj, "OASISDataItems", "CRR_TOU", "CRR_TOU", fields);
                base.export_attribute (obj, "OASISDataItems", "CRR_TYPE", "CRR_TYPE", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EA_DA", "ENE_EA_DA", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EA_EXCEPT", "ENE_EA_EXCEPT", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EA_HASP", "ENE_EA_HASP", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EA_MLE", "ENE_EA_MLE", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EA_MSSLF", "ENE_EA_MSSLF", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EA_OPTIMAL", "ENE_EA_OPTIMAL", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EA_RAMP_DEV", "ENE_EA_RAMP_DEV", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EA_RAMP_STD", "ENE_EA_RAMP_STD", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EA_RESIDUAL", "ENE_EA_RESIDUAL", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EA_RMR", "ENE_EA_RMR", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EA_SELF", "ENE_EA_SELF", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EA_SLIC", "ENE_EA_SLIC", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EXP_CLEAR_HASP", "ENE_EXP_CLEAR_HASP", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EXP_CLEAR_IFM", "ENE_EXP_CLEAR_IFM", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_EXP_CLEAR_RTM", "ENE_EXP_CLEAR_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_GEN_CLEAR_HASP", "ENE_GEN_CLEAR_HASP", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_GEN_CLEAR_IFM", "ENE_GEN_CLEAR_IFM", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_GEN_CLEAR_RTM", "ENE_GEN_CLEAR_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_IMP_CLEAR_HASP", "ENE_IMP_CLEAR_HASP", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_IMP_CLEAR_IFM", "ENE_IMP_CLEAR_IFM", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_IMP_CLEAR_RTM", "ENE_IMP_CLEAR_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_LOAD_ACTUAL", "ENE_LOAD_ACTUAL", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_LOAD_CLEAR_HASP", "ENE_LOAD_CLEAR_HASP", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_LOAD_CLEAR_IFM", "ENE_LOAD_CLEAR_IFM", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_LOAD_CLEAR_RTM", "ENE_LOAD_CLEAR_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_LOAD_FCST", "ENE_LOAD_FCST", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_PEAK_HOUR", "ENE_PEAK_HOUR", fields);
                base.export_attribute (obj, "OASISDataItems", "ENE_PEAK_LOAD", "ENE_PEAK_LOAD", fields);
                base.export_attribute (obj, "OASISDataItems", "FUEL_REGION_value", "FUEL_REGION_value", fields);
                base.export_attribute (obj, "OASISDataItems", "INVT_DATETIME", "INVT_DATETIME", fields);
                base.export_attribute (obj, "OASISDataItems", "LOAD_ACTUAL", "LOAD_ACTUAL", fields);
                base.export_attribute (obj, "OASISDataItems", "LOAD_CLEAR_RTM", "LOAD_CLEAR_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "LOSS_TOTAL_COST_HASP", "LOSS_TOTAL_COST_HASP", fields);
                base.export_attribute (obj, "OASISDataItems", "LOSS_TOTAL_COST_RTM", "LOSS_TOTAL_COST_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "LOSS_TOTAL_MW_HASP", "LOSS_TOTAL_MW_HASP", fields);
                base.export_attribute (obj, "OASISDataItems", "LOSS_TOTAL_MW_RTM", "LOSS_TOTAL_MW_RTM", fields);
                base.export_attribute (obj, "OASISDataItems", "MPM_FLAG", "MPM_FLAG", fields);
                base.export_attribute (obj, "OASISDataItems", "OP_RSRV_TOTAL", "OP_RSRV_TOTAL", fields);
                base.export_attribute (obj, "OASISDataItems", "PRC_NG", "PRC_NG", fields);
                base.export_attribute (obj, "OASISDataItems", "PRC_SHADOW", "PRC_SHADOW", fields);
                base.export_attribute (obj, "OASISDataItems", "RATING_ATC", "RATING_ATC", fields);
                base.export_attribute (obj, "OASISDataItems", "RMR_DETER_DAM", "RMR_DETER_DAM", fields);
                base.export_attribute (obj, "OASISDataItems", "RMR_DETER_HASP", "RMR_DETER_HASP", fields);
                base.export_attribute (obj, "OASISDataItems", "RMR_DISPATCH_DAM", "RMR_DISPATCH_DAM", fields);
                base.export_attribute (obj, "OASISDataItems", "RMR_DISPATCH_HASP", "RMR_DISPATCH_HASP", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OASISDataItems_collapse" aria-expanded="true" aria-controls="OASISDataItems_collapse" style="margin-left: 10px;">OASISDataItems</a></legend>
                    <div id="OASISDataItems_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#RMR_TOTAL}}<div><b>RMR_TOTAL</b>: {{RMR_TOTAL}}</div>{{/RMR_TOTAL}}
                    {{#RMR_TOTAL_AVAIL}}<div><b>RMR_TOTAL_AVAIL</b>: {{RMR_TOTAL_AVAIL}}</div>{{/RMR_TOTAL_AVAIL}}
                    {{#RUC_GEN_CLEAR_RUC}}<div><b>RUC_GEN_CLEAR_RUC</b>: {{RUC_GEN_CLEAR_RUC}}</div>{{/RUC_GEN_CLEAR_RUC}}
                    {{#RUC_IMP_CLEAR_RUC}}<div><b>RUC_IMP_CLEAR_RUC</b>: {{RUC_IMP_CLEAR_RUC}}</div>{{/RUC_IMP_CLEAR_RUC}}
                    {{#RUC_LOAD_CLEAR_RUC}}<div><b>RUC_LOAD_CLEAR_RUC</b>: {{RUC_LOAD_CLEAR_RUC}}</div>{{/RUC_LOAD_CLEAR_RUC}}
                    {{#RUC_ZONE_value}}<div><b>RUC_ZONE_value</b>: {{RUC_ZONE_value}}</div>{{/RUC_ZONE_value}}
                    {{#TAC_AREA_value}}<div><b>TAC_AREA_value</b>: {{TAC_AREA_value}}</div>{{/TAC_AREA_value}}
                    {{#TINTRFCE_value}}<div><b>TINTRFCE_value</b>: {{TINTRFCE_value}}</div>{{/TINTRFCE_value}}
                    {{#TRNS_AS_IMPORT}}<div><b>TRNS_AS_IMPORT</b>: {{TRNS_AS_IMPORT}}</div>{{/TRNS_AS_IMPORT}}
                    {{#TRNS_ENE_IMPORT}}<div><b>TRNS_ENE_IMPORT</b>: {{TRNS_ENE_IMPORT}}</div>{{/TRNS_ENE_IMPORT}}
                    {{#TRNS_EQUIP_value}}<div><b>TRNS_EQUIP_value</b>: {{TRNS_EQUIP_value}}</div>{{/TRNS_EQUIP_value}}
                    {{#TRNS_RATING_CBM}}<div><b>TRNS_RATING_CBM</b>: {{TRNS_RATING_CBM}}</div>{{/TRNS_RATING_CBM}}
                    {{#TRNS_RATING_DIRECTION}}<div><b>TRNS_RATING_DIRECTION</b>: {{TRNS_RATING_DIRECTION}}</div>{{/TRNS_RATING_DIRECTION}}
                    {{#TRNS_RATING_OTC}}<div><b>TRNS_RATING_OTC</b>: {{TRNS_RATING_OTC}}</div>{{/TRNS_RATING_OTC}}
                    {{#TRNS_RATING_OTC_DERATE}}<div><b>TRNS_RATING_OTC_DERATE</b>: {{TRNS_RATING_OTC_DERATE}}</div>{{/TRNS_RATING_OTC_DERATE}}
                    {{#TRNS_RATING_TTC}}<div><b>TRNS_RATING_TTC</b>: {{TRNS_RATING_TTC}}</div>{{/TRNS_RATING_TTC}}
                    {{#TRNS_TI_value}}<div><b>TRNS_TI_value</b>: {{TRNS_TI_value}}</div>{{/TRNS_TI_value}}
                    {{#TRNS_TR_ENTMTS}}<div><b>TRNS_TR_ENTMTS</b>: {{TRNS_TR_ENTMTS}}</div>{{/TRNS_TR_ENTMTS}}
                    {{#TRNS_TR_USEAGE}}<div><b>TRNS_TR_USEAGE</b>: {{TRNS_TR_USEAGE}}</div>{{/TRNS_TR_USEAGE}}
                    {{#AS_CLEAR_ASMP_IFM}}<div><b>AS_CLEAR_ASMP_IFM</b>: {{AS_CLEAR_ASMP_IFM}}</div>{{/AS_CLEAR_ASMP_IFM}}
                    {{#AS_CLEAR_ASMP_RTM}}<div><b>AS_CLEAR_ASMP_RTM</b>: {{AS_CLEAR_ASMP_RTM}}</div>{{/AS_CLEAR_ASMP_RTM}}
                    {{#AS_CLEAR_COST_IFM}}<div><b>AS_CLEAR_COST_IFM</b>: {{AS_CLEAR_COST_IFM}}</div>{{/AS_CLEAR_COST_IFM}}
                    {{#AS_CLEAR_COST_RTM}}<div><b>AS_CLEAR_COST_RTM</b>: {{AS_CLEAR_COST_RTM}}</div>{{/AS_CLEAR_COST_RTM}}
                    {{#AS_CLEAR_MW_IFM}}<div><b>AS_CLEAR_MW_IFM</b>: {{AS_CLEAR_MW_IFM}}</div>{{/AS_CLEAR_MW_IFM}}
                    {{#AS_CLEAR_MW_RTM}}<div><b>AS_CLEAR_MW_RTM</b>: {{AS_CLEAR_MW_RTM}}</div>{{/AS_CLEAR_MW_RTM}}
                    {{#AS_GEN_TOTAL_MW_IFM}}<div><b>AS_GEN_TOTAL_MW_IFM</b>: {{AS_GEN_TOTAL_MW_IFM}}</div>{{/AS_GEN_TOTAL_MW_IFM}}
                    {{#AS_GEN_TOTAL_MW_RTM}}<div><b>AS_GEN_TOTAL_MW_RTM</b>: {{AS_GEN_TOTAL_MW_RTM}}</div>{{/AS_GEN_TOTAL_MW_RTM}}
                    {{#AS_IMP_TOTAL_MW_IFM}}<div><b>AS_IMP_TOTAL_MW_IFM</b>: {{AS_IMP_TOTAL_MW_IFM}}</div>{{/AS_IMP_TOTAL_MW_IFM}}
                    {{#AS_IMP_TOTAL_MW_RTM}}<div><b>AS_IMP_TOTAL_MW_RTM</b>: {{AS_IMP_TOTAL_MW_RTM}}</div>{{/AS_IMP_TOTAL_MW_RTM}}
                    {{#AS_LOAD_TOTAL_MW_IFM}}<div><b>AS_LOAD_TOTAL_MW_IFM</b>: {{AS_LOAD_TOTAL_MW_IFM}}</div>{{/AS_LOAD_TOTAL_MW_IFM}}
                    {{#AS_LOAD_TOTAL_MW_RTM}}<div><b>AS_LOAD_TOTAL_MW_RTM</b>: {{AS_LOAD_TOTAL_MW_RTM}}</div>{{/AS_LOAD_TOTAL_MW_RTM}}
                    {{#AS_REGION_value}}<div><b>AS_REGION_value</b>: {{AS_REGION_value}}</div>{{/AS_REGION_value}}
                    {{#AS_REGION_REQ_MAX}}<div><b>AS_REGION_REQ_MAX</b>: {{AS_REGION_REQ_MAX}}</div>{{/AS_REGION_REQ_MAX}}
                    {{#AS_REGION_REQ_MIN}}<div><b>AS_REGION_REQ_MIN</b>: {{AS_REGION_REQ_MIN}}</div>{{/AS_REGION_REQ_MIN}}
                    {{#AS_SELF_MW_IFM}}<div><b>AS_SELF_MW_IFM</b>: {{AS_SELF_MW_IFM}}</div>{{/AS_SELF_MW_IFM}}
                    {{#AS_SELF_MW_RTM}}<div><b>AS_SELF_MW_RTM</b>: {{AS_SELF_MW_RTM}}</div>{{/AS_SELF_MW_RTM}}
                    {{#AS_TOTAL_MW}}<div><b>AS_TOTAL_MW</b>: {{AS_TOTAL_MW}}</div>{{/AS_TOTAL_MW}}
                    {{#AS_TOTAL_MW_IFM}}<div><b>AS_TOTAL_MW_IFM</b>: {{AS_TOTAL_MW_IFM}}</div>{{/AS_TOTAL_MW_IFM}}
                    {{#AS_TOTAL_MW_RTM}}<div><b>AS_TOTAL_MW_RTM</b>: {{AS_TOTAL_MW_RTM}}</div>{{/AS_TOTAL_MW_RTM}}
                    {{#AS_TYPE}}<div><b>AS_TYPE</b>: {{AS_TYPE}}</div>{{/AS_TYPE}}
                    {{#AS_USER_RATE}}<div><b>AS_USER_RATE</b>: {{AS_USER_RATE}}</div>{{/AS_USER_RATE}}
                    {{#CA_value}}<div><b>CA_value</b>: {{CA_value}}</div>{{/CA_value}}
                    {{#CMMT_MINLOAD_MLC}}<div><b>CMMT_MINLOAD_MLC</b>: {{CMMT_MINLOAD_MLC}}</div>{{/CMMT_MINLOAD_MLC}}
                    {{#CMMT_MINLOAD_MW}}<div><b>CMMT_MINLOAD_MW</b>: {{CMMT_MINLOAD_MW}}</div>{{/CMMT_MINLOAD_MW}}
                    {{#CMMT_RA_MLC}}<div><b>CMMT_RA_MLC</b>: {{CMMT_RA_MLC}}</div>{{/CMMT_RA_MLC}}
                    {{#CMMT_RA_MW}}<div><b>CMMT_RA_MW</b>: {{CMMT_RA_MW}}</div>{{/CMMT_RA_MW}}
                    {{#CMMT_RA_START_COST}}<div><b>CMMT_RA_START_COST</b>: {{CMMT_RA_START_COST}}</div>{{/CMMT_RA_START_COST}}
                    {{#CMMT_RA_UNITS}}<div><b>CMMT_RA_UNITS</b>: {{CMMT_RA_UNITS}}</div>{{/CMMT_RA_UNITS}}
                    {{#CMMT_TOTAL_START_COST}}<div><b>CMMT_TOTAL_START_COST</b>: {{CMMT_TOTAL_START_COST}}</div>{{/CMMT_TOTAL_START_COST}}
                    {{#CMMT_TOTAL_MW}}<div><b>CMMT_TOTAL_MW</b>: {{CMMT_TOTAL_MW}}</div>{{/CMMT_TOTAL_MW}}
                    {{#CMMT_TOTAL_UNITS}}<div><b>CMMT_TOTAL_UNITS</b>: {{CMMT_TOTAL_UNITS}}</div>{{/CMMT_TOTAL_UNITS}}
                    {{#CRR_CAT}}<div><b>CRR_CAT</b>: {{CRR_CAT}}</div>{{/CRR_CAT}}
                    {{#CRR_MARKET_value}}<div><b>CRR_MARKET_value</b>: {{CRR_MARKET_value}}</div>{{/CRR_MARKET_value}}
                    {{#CRR_MW}}<div><b>CRR_MW</b>: {{CRR_MW}}</div>{{/CRR_MW}}
                    {{#CRR_NSR}}<div><b>CRR_NSR</b>: {{CRR_NSR}}</div>{{/CRR_NSR}}
                    {{#CRR_OPTION}}<div><b>CRR_OPTION</b>: {{CRR_OPTION}}</div>{{/CRR_OPTION}}
                    {{#CRR_OWNER}}<div><b>CRR_OWNER</b>: {{CRR_OWNER}}</div>{{/CRR_OWNER}}
                    {{#CRR_SEGMENT}}<div><b>CRR_SEGMENT</b>: {{CRR_SEGMENT}}</div>{{/CRR_SEGMENT}}
                    {{#CRR_TERM}}<div><b>CRR_TERM</b>: {{CRR_TERM}}</div>{{/CRR_TERM}}
                    {{#CRR_TOU}}<div><b>CRR_TOU</b>: {{CRR_TOU}}</div>{{/CRR_TOU}}
                    {{#CRR_TYPE}}<div><b>CRR_TYPE</b>: {{CRR_TYPE}}</div>{{/CRR_TYPE}}
                    {{#ENE_EA_DA}}<div><b>ENE_EA_DA</b>: {{ENE_EA_DA}}</div>{{/ENE_EA_DA}}
                    {{#ENE_EA_EXCEPT}}<div><b>ENE_EA_EXCEPT</b>: {{ENE_EA_EXCEPT}}</div>{{/ENE_EA_EXCEPT}}
                    {{#ENE_EA_HASP}}<div><b>ENE_EA_HASP</b>: {{ENE_EA_HASP}}</div>{{/ENE_EA_HASP}}
                    {{#ENE_EA_MLE}}<div><b>ENE_EA_MLE</b>: {{ENE_EA_MLE}}</div>{{/ENE_EA_MLE}}
                    {{#ENE_EA_MSSLF}}<div><b>ENE_EA_MSSLF</b>: {{ENE_EA_MSSLF}}</div>{{/ENE_EA_MSSLF}}
                    {{#ENE_EA_OPTIMAL}}<div><b>ENE_EA_OPTIMAL</b>: {{ENE_EA_OPTIMAL}}</div>{{/ENE_EA_OPTIMAL}}
                    {{#ENE_EA_RAMP_DEV}}<div><b>ENE_EA_RAMP_DEV</b>: {{ENE_EA_RAMP_DEV}}</div>{{/ENE_EA_RAMP_DEV}}
                    {{#ENE_EA_RAMP_STD}}<div><b>ENE_EA_RAMP_STD</b>: {{ENE_EA_RAMP_STD}}</div>{{/ENE_EA_RAMP_STD}}
                    {{#ENE_EA_RESIDUAL}}<div><b>ENE_EA_RESIDUAL</b>: {{ENE_EA_RESIDUAL}}</div>{{/ENE_EA_RESIDUAL}}
                    {{#ENE_EA_RMR}}<div><b>ENE_EA_RMR</b>: {{ENE_EA_RMR}}</div>{{/ENE_EA_RMR}}
                    {{#ENE_EA_SELF}}<div><b>ENE_EA_SELF</b>: {{ENE_EA_SELF}}</div>{{/ENE_EA_SELF}}
                    {{#ENE_EA_SLIC}}<div><b>ENE_EA_SLIC</b>: {{ENE_EA_SLIC}}</div>{{/ENE_EA_SLIC}}
                    {{#ENE_EXP_CLEAR_HASP}}<div><b>ENE_EXP_CLEAR_HASP</b>: {{ENE_EXP_CLEAR_HASP}}</div>{{/ENE_EXP_CLEAR_HASP}}
                    {{#ENE_EXP_CLEAR_IFM}}<div><b>ENE_EXP_CLEAR_IFM</b>: {{ENE_EXP_CLEAR_IFM}}</div>{{/ENE_EXP_CLEAR_IFM}}
                    {{#ENE_EXP_CLEAR_RTM}}<div><b>ENE_EXP_CLEAR_RTM</b>: {{ENE_EXP_CLEAR_RTM}}</div>{{/ENE_EXP_CLEAR_RTM}}
                    {{#ENE_GEN_CLEAR_HASP}}<div><b>ENE_GEN_CLEAR_HASP</b>: {{ENE_GEN_CLEAR_HASP}}</div>{{/ENE_GEN_CLEAR_HASP}}
                    {{#ENE_GEN_CLEAR_IFM}}<div><b>ENE_GEN_CLEAR_IFM</b>: {{ENE_GEN_CLEAR_IFM}}</div>{{/ENE_GEN_CLEAR_IFM}}
                    {{#ENE_GEN_CLEAR_RTM}}<div><b>ENE_GEN_CLEAR_RTM</b>: {{ENE_GEN_CLEAR_RTM}}</div>{{/ENE_GEN_CLEAR_RTM}}
                    {{#ENE_IMP_CLEAR_HASP}}<div><b>ENE_IMP_CLEAR_HASP</b>: {{ENE_IMP_CLEAR_HASP}}</div>{{/ENE_IMP_CLEAR_HASP}}
                    {{#ENE_IMP_CLEAR_IFM}}<div><b>ENE_IMP_CLEAR_IFM</b>: {{ENE_IMP_CLEAR_IFM}}</div>{{/ENE_IMP_CLEAR_IFM}}
                    {{#ENE_IMP_CLEAR_RTM}}<div><b>ENE_IMP_CLEAR_RTM</b>: {{ENE_IMP_CLEAR_RTM}}</div>{{/ENE_IMP_CLEAR_RTM}}
                    {{#ENE_LOAD_ACTUAL}}<div><b>ENE_LOAD_ACTUAL</b>: {{ENE_LOAD_ACTUAL}}</div>{{/ENE_LOAD_ACTUAL}}
                    {{#ENE_LOAD_CLEAR_HASP}}<div><b>ENE_LOAD_CLEAR_HASP</b>: {{ENE_LOAD_CLEAR_HASP}}</div>{{/ENE_LOAD_CLEAR_HASP}}
                    {{#ENE_LOAD_CLEAR_IFM}}<div><b>ENE_LOAD_CLEAR_IFM</b>: {{ENE_LOAD_CLEAR_IFM}}</div>{{/ENE_LOAD_CLEAR_IFM}}
                    {{#ENE_LOAD_CLEAR_RTM}}<div><b>ENE_LOAD_CLEAR_RTM</b>: {{ENE_LOAD_CLEAR_RTM}}</div>{{/ENE_LOAD_CLEAR_RTM}}
                    {{#ENE_LOAD_FCST}}<div><b>ENE_LOAD_FCST</b>: {{ENE_LOAD_FCST}}</div>{{/ENE_LOAD_FCST}}
                    {{#ENE_PEAK_HOUR}}<div><b>ENE_PEAK_HOUR</b>: {{ENE_PEAK_HOUR}}</div>{{/ENE_PEAK_HOUR}}
                    {{#ENE_PEAK_LOAD}}<div><b>ENE_PEAK_LOAD</b>: {{ENE_PEAK_LOAD}}</div>{{/ENE_PEAK_LOAD}}
                    {{#FUEL_REGION_value}}<div><b>FUEL_REGION_value</b>: {{FUEL_REGION_value}}</div>{{/FUEL_REGION_value}}
                    {{#INVT_DATETIME}}<div><b>INVT_DATETIME</b>: {{INVT_DATETIME}}</div>{{/INVT_DATETIME}}
                    {{#LOAD_ACTUAL}}<div><b>LOAD_ACTUAL</b>: {{LOAD_ACTUAL}}</div>{{/LOAD_ACTUAL}}
                    {{#LOAD_CLEAR_RTM}}<div><b>LOAD_CLEAR_RTM</b>: {{LOAD_CLEAR_RTM}}</div>{{/LOAD_CLEAR_RTM}}
                    {{#LOSS_TOTAL_COST_HASP}}<div><b>LOSS_TOTAL_COST_HASP</b>: {{LOSS_TOTAL_COST_HASP}}</div>{{/LOSS_TOTAL_COST_HASP}}
                    {{#LOSS_TOTAL_COST_RTM}}<div><b>LOSS_TOTAL_COST_RTM</b>: {{LOSS_TOTAL_COST_RTM}}</div>{{/LOSS_TOTAL_COST_RTM}}
                    {{#LOSS_TOTAL_MW_HASP}}<div><b>LOSS_TOTAL_MW_HASP</b>: {{LOSS_TOTAL_MW_HASP}}</div>{{/LOSS_TOTAL_MW_HASP}}
                    {{#LOSS_TOTAL_MW_RTM}}<div><b>LOSS_TOTAL_MW_RTM</b>: {{LOSS_TOTAL_MW_RTM}}</div>{{/LOSS_TOTAL_MW_RTM}}
                    {{#MPM_FLAG}}<div><b>MPM_FLAG</b>: {{MPM_FLAG}}</div>{{/MPM_FLAG}}
                    {{#OP_RSRV_TOTAL}}<div><b>OP_RSRV_TOTAL</b>: {{OP_RSRV_TOTAL}}</div>{{/OP_RSRV_TOTAL}}
                    {{#PRC_NG}}<div><b>PRC_NG</b>: {{PRC_NG}}</div>{{/PRC_NG}}
                    {{#PRC_SHADOW}}<div><b>PRC_SHADOW</b>: {{PRC_SHADOW}}</div>{{/PRC_SHADOW}}
                    {{#RATING_ATC}}<div><b>RATING_ATC</b>: {{RATING_ATC}}</div>{{/RATING_ATC}}
                    {{#RMR_DETER_DAM}}<div><b>RMR_DETER_DAM</b>: {{RMR_DETER_DAM}}</div>{{/RMR_DETER_DAM}}
                    {{#RMR_DETER_HASP}}<div><b>RMR_DETER_HASP</b>: {{RMR_DETER_HASP}}</div>{{/RMR_DETER_HASP}}
                    {{#RMR_DISPATCH_DAM}}<div><b>RMR_DISPATCH_DAM</b>: {{RMR_DISPATCH_DAM}}</div>{{/RMR_DISPATCH_DAM}}
                    {{#RMR_DISPATCH_HASP}}<div><b>RMR_DISPATCH_HASP</b>: {{RMR_DISPATCH_HASP}}</div>{{/RMR_DISPATCH_HASP}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OASISDataItems_collapse" aria-expanded="true" aria-controls="{{id}}_OASISDataItems_collapse" style="margin-left: 10px;">OASISDataItems</a></legend>
                    <div id="{{id}}_OASISDataItems_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMR_TOTAL'>RMR_TOTAL: </label><div class='col-sm-8'><input id='{{id}}_RMR_TOTAL' class='form-control' type='text'{{#RMR_TOTAL}} value='{{RMR_TOTAL}}'{{/RMR_TOTAL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMR_TOTAL_AVAIL'>RMR_TOTAL_AVAIL: </label><div class='col-sm-8'><input id='{{id}}_RMR_TOTAL_AVAIL' class='form-control' type='text'{{#RMR_TOTAL_AVAIL}} value='{{RMR_TOTAL_AVAIL}}'{{/RMR_TOTAL_AVAIL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RUC_GEN_CLEAR_RUC'>RUC_GEN_CLEAR_RUC: </label><div class='col-sm-8'><input id='{{id}}_RUC_GEN_CLEAR_RUC' class='form-control' type='text'{{#RUC_GEN_CLEAR_RUC}} value='{{RUC_GEN_CLEAR_RUC}}'{{/RUC_GEN_CLEAR_RUC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RUC_IMP_CLEAR_RUC'>RUC_IMP_CLEAR_RUC: </label><div class='col-sm-8'><input id='{{id}}_RUC_IMP_CLEAR_RUC' class='form-control' type='text'{{#RUC_IMP_CLEAR_RUC}} value='{{RUC_IMP_CLEAR_RUC}}'{{/RUC_IMP_CLEAR_RUC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RUC_LOAD_CLEAR_RUC'>RUC_LOAD_CLEAR_RUC: </label><div class='col-sm-8'><input id='{{id}}_RUC_LOAD_CLEAR_RUC' class='form-control' type='text'{{#RUC_LOAD_CLEAR_RUC}} value='{{RUC_LOAD_CLEAR_RUC}}'{{/RUC_LOAD_CLEAR_RUC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RUC_ZONE_value'>RUC_ZONE_value: </label><div class='col-sm-8'><input id='{{id}}_RUC_ZONE_value' class='form-control' type='text'{{#RUC_ZONE_value}} value='{{RUC_ZONE_value}}'{{/RUC_ZONE_value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TAC_AREA_value'>TAC_AREA_value: </label><div class='col-sm-8'><input id='{{id}}_TAC_AREA_value' class='form-control' type='text'{{#TAC_AREA_value}} value='{{TAC_AREA_value}}'{{/TAC_AREA_value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TINTRFCE_value'>TINTRFCE_value: </label><div class='col-sm-8'><input id='{{id}}_TINTRFCE_value' class='form-control' type='text'{{#TINTRFCE_value}} value='{{TINTRFCE_value}}'{{/TINTRFCE_value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_AS_IMPORT'>TRNS_AS_IMPORT: </label><div class='col-sm-8'><input id='{{id}}_TRNS_AS_IMPORT' class='form-control' type='text'{{#TRNS_AS_IMPORT}} value='{{TRNS_AS_IMPORT}}'{{/TRNS_AS_IMPORT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_ENE_IMPORT'>TRNS_ENE_IMPORT: </label><div class='col-sm-8'><input id='{{id}}_TRNS_ENE_IMPORT' class='form-control' type='text'{{#TRNS_ENE_IMPORT}} value='{{TRNS_ENE_IMPORT}}'{{/TRNS_ENE_IMPORT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_EQUIP_value'>TRNS_EQUIP_value: </label><div class='col-sm-8'><input id='{{id}}_TRNS_EQUIP_value' class='form-control' type='text'{{#TRNS_EQUIP_value}} value='{{TRNS_EQUIP_value}}'{{/TRNS_EQUIP_value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_RATING_CBM'>TRNS_RATING_CBM: </label><div class='col-sm-8'><input id='{{id}}_TRNS_RATING_CBM' class='form-control' type='text'{{#TRNS_RATING_CBM}} value='{{TRNS_RATING_CBM}}'{{/TRNS_RATING_CBM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_RATING_DIRECTION'>TRNS_RATING_DIRECTION: </label><div class='col-sm-8'><input id='{{id}}_TRNS_RATING_DIRECTION' class='form-control' type='text'{{#TRNS_RATING_DIRECTION}} value='{{TRNS_RATING_DIRECTION}}'{{/TRNS_RATING_DIRECTION}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_RATING_OTC'>TRNS_RATING_OTC: </label><div class='col-sm-8'><input id='{{id}}_TRNS_RATING_OTC' class='form-control' type='text'{{#TRNS_RATING_OTC}} value='{{TRNS_RATING_OTC}}'{{/TRNS_RATING_OTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_RATING_OTC_DERATE'>TRNS_RATING_OTC_DERATE: </label><div class='col-sm-8'><input id='{{id}}_TRNS_RATING_OTC_DERATE' class='form-control' type='text'{{#TRNS_RATING_OTC_DERATE}} value='{{TRNS_RATING_OTC_DERATE}}'{{/TRNS_RATING_OTC_DERATE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_RATING_TTC'>TRNS_RATING_TTC: </label><div class='col-sm-8'><input id='{{id}}_TRNS_RATING_TTC' class='form-control' type='text'{{#TRNS_RATING_TTC}} value='{{TRNS_RATING_TTC}}'{{/TRNS_RATING_TTC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_TI_value'>TRNS_TI_value: </label><div class='col-sm-8'><input id='{{id}}_TRNS_TI_value' class='form-control' type='text'{{#TRNS_TI_value}} value='{{TRNS_TI_value}}'{{/TRNS_TI_value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_TR_ENTMTS'>TRNS_TR_ENTMTS: </label><div class='col-sm-8'><input id='{{id}}_TRNS_TR_ENTMTS' class='form-control' type='text'{{#TRNS_TR_ENTMTS}} value='{{TRNS_TR_ENTMTS}}'{{/TRNS_TR_ENTMTS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_TR_USEAGE'>TRNS_TR_USEAGE: </label><div class='col-sm-8'><input id='{{id}}_TRNS_TR_USEAGE' class='form-control' type='text'{{#TRNS_TR_USEAGE}} value='{{TRNS_TR_USEAGE}}'{{/TRNS_TR_USEAGE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_CLEAR_ASMP_IFM'>AS_CLEAR_ASMP_IFM: </label><div class='col-sm-8'><input id='{{id}}_AS_CLEAR_ASMP_IFM' class='form-control' type='text'{{#AS_CLEAR_ASMP_IFM}} value='{{AS_CLEAR_ASMP_IFM}}'{{/AS_CLEAR_ASMP_IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_CLEAR_ASMP_RTM'>AS_CLEAR_ASMP_RTM: </label><div class='col-sm-8'><input id='{{id}}_AS_CLEAR_ASMP_RTM' class='form-control' type='text'{{#AS_CLEAR_ASMP_RTM}} value='{{AS_CLEAR_ASMP_RTM}}'{{/AS_CLEAR_ASMP_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_CLEAR_COST_IFM'>AS_CLEAR_COST_IFM: </label><div class='col-sm-8'><input id='{{id}}_AS_CLEAR_COST_IFM' class='form-control' type='text'{{#AS_CLEAR_COST_IFM}} value='{{AS_CLEAR_COST_IFM}}'{{/AS_CLEAR_COST_IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_CLEAR_COST_RTM'>AS_CLEAR_COST_RTM: </label><div class='col-sm-8'><input id='{{id}}_AS_CLEAR_COST_RTM' class='form-control' type='text'{{#AS_CLEAR_COST_RTM}} value='{{AS_CLEAR_COST_RTM}}'{{/AS_CLEAR_COST_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_CLEAR_MW_IFM'>AS_CLEAR_MW_IFM: </label><div class='col-sm-8'><input id='{{id}}_AS_CLEAR_MW_IFM' class='form-control' type='text'{{#AS_CLEAR_MW_IFM}} value='{{AS_CLEAR_MW_IFM}}'{{/AS_CLEAR_MW_IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_CLEAR_MW_RTM'>AS_CLEAR_MW_RTM: </label><div class='col-sm-8'><input id='{{id}}_AS_CLEAR_MW_RTM' class='form-control' type='text'{{#AS_CLEAR_MW_RTM}} value='{{AS_CLEAR_MW_RTM}}'{{/AS_CLEAR_MW_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_GEN_TOTAL_MW_IFM'>AS_GEN_TOTAL_MW_IFM: </label><div class='col-sm-8'><input id='{{id}}_AS_GEN_TOTAL_MW_IFM' class='form-control' type='text'{{#AS_GEN_TOTAL_MW_IFM}} value='{{AS_GEN_TOTAL_MW_IFM}}'{{/AS_GEN_TOTAL_MW_IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_GEN_TOTAL_MW_RTM'>AS_GEN_TOTAL_MW_RTM: </label><div class='col-sm-8'><input id='{{id}}_AS_GEN_TOTAL_MW_RTM' class='form-control' type='text'{{#AS_GEN_TOTAL_MW_RTM}} value='{{AS_GEN_TOTAL_MW_RTM}}'{{/AS_GEN_TOTAL_MW_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_IMP_TOTAL_MW_IFM'>AS_IMP_TOTAL_MW_IFM: </label><div class='col-sm-8'><input id='{{id}}_AS_IMP_TOTAL_MW_IFM' class='form-control' type='text'{{#AS_IMP_TOTAL_MW_IFM}} value='{{AS_IMP_TOTAL_MW_IFM}}'{{/AS_IMP_TOTAL_MW_IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_IMP_TOTAL_MW_RTM'>AS_IMP_TOTAL_MW_RTM: </label><div class='col-sm-8'><input id='{{id}}_AS_IMP_TOTAL_MW_RTM' class='form-control' type='text'{{#AS_IMP_TOTAL_MW_RTM}} value='{{AS_IMP_TOTAL_MW_RTM}}'{{/AS_IMP_TOTAL_MW_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_LOAD_TOTAL_MW_IFM'>AS_LOAD_TOTAL_MW_IFM: </label><div class='col-sm-8'><input id='{{id}}_AS_LOAD_TOTAL_MW_IFM' class='form-control' type='text'{{#AS_LOAD_TOTAL_MW_IFM}} value='{{AS_LOAD_TOTAL_MW_IFM}}'{{/AS_LOAD_TOTAL_MW_IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_LOAD_TOTAL_MW_RTM'>AS_LOAD_TOTAL_MW_RTM: </label><div class='col-sm-8'><input id='{{id}}_AS_LOAD_TOTAL_MW_RTM' class='form-control' type='text'{{#AS_LOAD_TOTAL_MW_RTM}} value='{{AS_LOAD_TOTAL_MW_RTM}}'{{/AS_LOAD_TOTAL_MW_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_REGION_value'>AS_REGION_value: </label><div class='col-sm-8'><input id='{{id}}_AS_REGION_value' class='form-control' type='text'{{#AS_REGION_value}} value='{{AS_REGION_value}}'{{/AS_REGION_value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_REGION_REQ_MAX'>AS_REGION_REQ_MAX: </label><div class='col-sm-8'><input id='{{id}}_AS_REGION_REQ_MAX' class='form-control' type='text'{{#AS_REGION_REQ_MAX}} value='{{AS_REGION_REQ_MAX}}'{{/AS_REGION_REQ_MAX}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_REGION_REQ_MIN'>AS_REGION_REQ_MIN: </label><div class='col-sm-8'><input id='{{id}}_AS_REGION_REQ_MIN' class='form-control' type='text'{{#AS_REGION_REQ_MIN}} value='{{AS_REGION_REQ_MIN}}'{{/AS_REGION_REQ_MIN}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_SELF_MW_IFM'>AS_SELF_MW_IFM: </label><div class='col-sm-8'><input id='{{id}}_AS_SELF_MW_IFM' class='form-control' type='text'{{#AS_SELF_MW_IFM}} value='{{AS_SELF_MW_IFM}}'{{/AS_SELF_MW_IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_SELF_MW_RTM'>AS_SELF_MW_RTM: </label><div class='col-sm-8'><input id='{{id}}_AS_SELF_MW_RTM' class='form-control' type='text'{{#AS_SELF_MW_RTM}} value='{{AS_SELF_MW_RTM}}'{{/AS_SELF_MW_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_TOTAL_MW'>AS_TOTAL_MW: </label><div class='col-sm-8'><input id='{{id}}_AS_TOTAL_MW' class='form-control' type='text'{{#AS_TOTAL_MW}} value='{{AS_TOTAL_MW}}'{{/AS_TOTAL_MW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_TOTAL_MW_IFM'>AS_TOTAL_MW_IFM: </label><div class='col-sm-8'><input id='{{id}}_AS_TOTAL_MW_IFM' class='form-control' type='text'{{#AS_TOTAL_MW_IFM}} value='{{AS_TOTAL_MW_IFM}}'{{/AS_TOTAL_MW_IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_TOTAL_MW_RTM'>AS_TOTAL_MW_RTM: </label><div class='col-sm-8'><input id='{{id}}_AS_TOTAL_MW_RTM' class='form-control' type='text'{{#AS_TOTAL_MW_RTM}} value='{{AS_TOTAL_MW_RTM}}'{{/AS_TOTAL_MW_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_TYPE'>AS_TYPE: </label><div class='col-sm-8'><input id='{{id}}_AS_TYPE' class='form-control' type='text'{{#AS_TYPE}} value='{{AS_TYPE}}'{{/AS_TYPE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_USER_RATE'>AS_USER_RATE: </label><div class='col-sm-8'><input id='{{id}}_AS_USER_RATE' class='form-control' type='text'{{#AS_USER_RATE}} value='{{AS_USER_RATE}}'{{/AS_USER_RATE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CA_value'>CA_value: </label><div class='col-sm-8'><input id='{{id}}_CA_value' class='form-control' type='text'{{#CA_value}} value='{{CA_value}}'{{/CA_value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CMMT_MINLOAD_MLC'>CMMT_MINLOAD_MLC: </label><div class='col-sm-8'><input id='{{id}}_CMMT_MINLOAD_MLC' class='form-control' type='text'{{#CMMT_MINLOAD_MLC}} value='{{CMMT_MINLOAD_MLC}}'{{/CMMT_MINLOAD_MLC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CMMT_MINLOAD_MW'>CMMT_MINLOAD_MW: </label><div class='col-sm-8'><input id='{{id}}_CMMT_MINLOAD_MW' class='form-control' type='text'{{#CMMT_MINLOAD_MW}} value='{{CMMT_MINLOAD_MW}}'{{/CMMT_MINLOAD_MW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CMMT_RA_MLC'>CMMT_RA_MLC: </label><div class='col-sm-8'><input id='{{id}}_CMMT_RA_MLC' class='form-control' type='text'{{#CMMT_RA_MLC}} value='{{CMMT_RA_MLC}}'{{/CMMT_RA_MLC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CMMT_RA_MW'>CMMT_RA_MW: </label><div class='col-sm-8'><input id='{{id}}_CMMT_RA_MW' class='form-control' type='text'{{#CMMT_RA_MW}} value='{{CMMT_RA_MW}}'{{/CMMT_RA_MW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CMMT_RA_START_COST'>CMMT_RA_START_COST: </label><div class='col-sm-8'><input id='{{id}}_CMMT_RA_START_COST' class='form-control' type='text'{{#CMMT_RA_START_COST}} value='{{CMMT_RA_START_COST}}'{{/CMMT_RA_START_COST}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CMMT_RA_UNITS'>CMMT_RA_UNITS: </label><div class='col-sm-8'><input id='{{id}}_CMMT_RA_UNITS' class='form-control' type='text'{{#CMMT_RA_UNITS}} value='{{CMMT_RA_UNITS}}'{{/CMMT_RA_UNITS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CMMT_TOTAL_START_COST'>CMMT_TOTAL_START_COST: </label><div class='col-sm-8'><input id='{{id}}_CMMT_TOTAL_START_COST' class='form-control' type='text'{{#CMMT_TOTAL_START_COST}} value='{{CMMT_TOTAL_START_COST}}'{{/CMMT_TOTAL_START_COST}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CMMT_TOTAL_MW'>CMMT_TOTAL_MW: </label><div class='col-sm-8'><input id='{{id}}_CMMT_TOTAL_MW' class='form-control' type='text'{{#CMMT_TOTAL_MW}} value='{{CMMT_TOTAL_MW}}'{{/CMMT_TOTAL_MW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CMMT_TOTAL_UNITS'>CMMT_TOTAL_UNITS: </label><div class='col-sm-8'><input id='{{id}}_CMMT_TOTAL_UNITS' class='form-control' type='text'{{#CMMT_TOTAL_UNITS}} value='{{CMMT_TOTAL_UNITS}}'{{/CMMT_TOTAL_UNITS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRR_CAT'>CRR_CAT: </label><div class='col-sm-8'><input id='{{id}}_CRR_CAT' class='form-control' type='text'{{#CRR_CAT}} value='{{CRR_CAT}}'{{/CRR_CAT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRR_MARKET_value'>CRR_MARKET_value: </label><div class='col-sm-8'><input id='{{id}}_CRR_MARKET_value' class='form-control' type='text'{{#CRR_MARKET_value}} value='{{CRR_MARKET_value}}'{{/CRR_MARKET_value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRR_MW'>CRR_MW: </label><div class='col-sm-8'><input id='{{id}}_CRR_MW' class='form-control' type='text'{{#CRR_MW}} value='{{CRR_MW}}'{{/CRR_MW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRR_NSR'>CRR_NSR: </label><div class='col-sm-8'><input id='{{id}}_CRR_NSR' class='form-control' type='text'{{#CRR_NSR}} value='{{CRR_NSR}}'{{/CRR_NSR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRR_OPTION'>CRR_OPTION: </label><div class='col-sm-8'><input id='{{id}}_CRR_OPTION' class='form-control' type='text'{{#CRR_OPTION}} value='{{CRR_OPTION}}'{{/CRR_OPTION}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRR_OWNER'>CRR_OWNER: </label><div class='col-sm-8'><input id='{{id}}_CRR_OWNER' class='form-control' type='text'{{#CRR_OWNER}} value='{{CRR_OWNER}}'{{/CRR_OWNER}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRR_SEGMENT'>CRR_SEGMENT: </label><div class='col-sm-8'><input id='{{id}}_CRR_SEGMENT' class='form-control' type='text'{{#CRR_SEGMENT}} value='{{CRR_SEGMENT}}'{{/CRR_SEGMENT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRR_TERM'>CRR_TERM: </label><div class='col-sm-8'><input id='{{id}}_CRR_TERM' class='form-control' type='text'{{#CRR_TERM}} value='{{CRR_TERM}}'{{/CRR_TERM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRR_TOU'>CRR_TOU: </label><div class='col-sm-8'><input id='{{id}}_CRR_TOU' class='form-control' type='text'{{#CRR_TOU}} value='{{CRR_TOU}}'{{/CRR_TOU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRR_TYPE'>CRR_TYPE: </label><div class='col-sm-8'><input id='{{id}}_CRR_TYPE' class='form-control' type='text'{{#CRR_TYPE}} value='{{CRR_TYPE}}'{{/CRR_TYPE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EA_DA'>ENE_EA_DA: </label><div class='col-sm-8'><input id='{{id}}_ENE_EA_DA' class='form-control' type='text'{{#ENE_EA_DA}} value='{{ENE_EA_DA}}'{{/ENE_EA_DA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EA_EXCEPT'>ENE_EA_EXCEPT: </label><div class='col-sm-8'><input id='{{id}}_ENE_EA_EXCEPT' class='form-control' type='text'{{#ENE_EA_EXCEPT}} value='{{ENE_EA_EXCEPT}}'{{/ENE_EA_EXCEPT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EA_HASP'>ENE_EA_HASP: </label><div class='col-sm-8'><input id='{{id}}_ENE_EA_HASP' class='form-control' type='text'{{#ENE_EA_HASP}} value='{{ENE_EA_HASP}}'{{/ENE_EA_HASP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EA_MLE'>ENE_EA_MLE: </label><div class='col-sm-8'><input id='{{id}}_ENE_EA_MLE' class='form-control' type='text'{{#ENE_EA_MLE}} value='{{ENE_EA_MLE}}'{{/ENE_EA_MLE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EA_MSSLF'>ENE_EA_MSSLF: </label><div class='col-sm-8'><input id='{{id}}_ENE_EA_MSSLF' class='form-control' type='text'{{#ENE_EA_MSSLF}} value='{{ENE_EA_MSSLF}}'{{/ENE_EA_MSSLF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EA_OPTIMAL'>ENE_EA_OPTIMAL: </label><div class='col-sm-8'><input id='{{id}}_ENE_EA_OPTIMAL' class='form-control' type='text'{{#ENE_EA_OPTIMAL}} value='{{ENE_EA_OPTIMAL}}'{{/ENE_EA_OPTIMAL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EA_RAMP_DEV'>ENE_EA_RAMP_DEV: </label><div class='col-sm-8'><input id='{{id}}_ENE_EA_RAMP_DEV' class='form-control' type='text'{{#ENE_EA_RAMP_DEV}} value='{{ENE_EA_RAMP_DEV}}'{{/ENE_EA_RAMP_DEV}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EA_RAMP_STD'>ENE_EA_RAMP_STD: </label><div class='col-sm-8'><input id='{{id}}_ENE_EA_RAMP_STD' class='form-control' type='text'{{#ENE_EA_RAMP_STD}} value='{{ENE_EA_RAMP_STD}}'{{/ENE_EA_RAMP_STD}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EA_RESIDUAL'>ENE_EA_RESIDUAL: </label><div class='col-sm-8'><input id='{{id}}_ENE_EA_RESIDUAL' class='form-control' type='text'{{#ENE_EA_RESIDUAL}} value='{{ENE_EA_RESIDUAL}}'{{/ENE_EA_RESIDUAL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EA_RMR'>ENE_EA_RMR: </label><div class='col-sm-8'><input id='{{id}}_ENE_EA_RMR' class='form-control' type='text'{{#ENE_EA_RMR}} value='{{ENE_EA_RMR}}'{{/ENE_EA_RMR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EA_SELF'>ENE_EA_SELF: </label><div class='col-sm-8'><input id='{{id}}_ENE_EA_SELF' class='form-control' type='text'{{#ENE_EA_SELF}} value='{{ENE_EA_SELF}}'{{/ENE_EA_SELF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EA_SLIC'>ENE_EA_SLIC: </label><div class='col-sm-8'><input id='{{id}}_ENE_EA_SLIC' class='form-control' type='text'{{#ENE_EA_SLIC}} value='{{ENE_EA_SLIC}}'{{/ENE_EA_SLIC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EXP_CLEAR_HASP'>ENE_EXP_CLEAR_HASP: </label><div class='col-sm-8'><input id='{{id}}_ENE_EXP_CLEAR_HASP' class='form-control' type='text'{{#ENE_EXP_CLEAR_HASP}} value='{{ENE_EXP_CLEAR_HASP}}'{{/ENE_EXP_CLEAR_HASP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EXP_CLEAR_IFM'>ENE_EXP_CLEAR_IFM: </label><div class='col-sm-8'><input id='{{id}}_ENE_EXP_CLEAR_IFM' class='form-control' type='text'{{#ENE_EXP_CLEAR_IFM}} value='{{ENE_EXP_CLEAR_IFM}}'{{/ENE_EXP_CLEAR_IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EXP_CLEAR_RTM'>ENE_EXP_CLEAR_RTM: </label><div class='col-sm-8'><input id='{{id}}_ENE_EXP_CLEAR_RTM' class='form-control' type='text'{{#ENE_EXP_CLEAR_RTM}} value='{{ENE_EXP_CLEAR_RTM}}'{{/ENE_EXP_CLEAR_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_GEN_CLEAR_HASP'>ENE_GEN_CLEAR_HASP: </label><div class='col-sm-8'><input id='{{id}}_ENE_GEN_CLEAR_HASP' class='form-control' type='text'{{#ENE_GEN_CLEAR_HASP}} value='{{ENE_GEN_CLEAR_HASP}}'{{/ENE_GEN_CLEAR_HASP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_GEN_CLEAR_IFM'>ENE_GEN_CLEAR_IFM: </label><div class='col-sm-8'><input id='{{id}}_ENE_GEN_CLEAR_IFM' class='form-control' type='text'{{#ENE_GEN_CLEAR_IFM}} value='{{ENE_GEN_CLEAR_IFM}}'{{/ENE_GEN_CLEAR_IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_GEN_CLEAR_RTM'>ENE_GEN_CLEAR_RTM: </label><div class='col-sm-8'><input id='{{id}}_ENE_GEN_CLEAR_RTM' class='form-control' type='text'{{#ENE_GEN_CLEAR_RTM}} value='{{ENE_GEN_CLEAR_RTM}}'{{/ENE_GEN_CLEAR_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_IMP_CLEAR_HASP'>ENE_IMP_CLEAR_HASP: </label><div class='col-sm-8'><input id='{{id}}_ENE_IMP_CLEAR_HASP' class='form-control' type='text'{{#ENE_IMP_CLEAR_HASP}} value='{{ENE_IMP_CLEAR_HASP}}'{{/ENE_IMP_CLEAR_HASP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_IMP_CLEAR_IFM'>ENE_IMP_CLEAR_IFM: </label><div class='col-sm-8'><input id='{{id}}_ENE_IMP_CLEAR_IFM' class='form-control' type='text'{{#ENE_IMP_CLEAR_IFM}} value='{{ENE_IMP_CLEAR_IFM}}'{{/ENE_IMP_CLEAR_IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_IMP_CLEAR_RTM'>ENE_IMP_CLEAR_RTM: </label><div class='col-sm-8'><input id='{{id}}_ENE_IMP_CLEAR_RTM' class='form-control' type='text'{{#ENE_IMP_CLEAR_RTM}} value='{{ENE_IMP_CLEAR_RTM}}'{{/ENE_IMP_CLEAR_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_LOAD_ACTUAL'>ENE_LOAD_ACTUAL: </label><div class='col-sm-8'><input id='{{id}}_ENE_LOAD_ACTUAL' class='form-control' type='text'{{#ENE_LOAD_ACTUAL}} value='{{ENE_LOAD_ACTUAL}}'{{/ENE_LOAD_ACTUAL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_LOAD_CLEAR_HASP'>ENE_LOAD_CLEAR_HASP: </label><div class='col-sm-8'><input id='{{id}}_ENE_LOAD_CLEAR_HASP' class='form-control' type='text'{{#ENE_LOAD_CLEAR_HASP}} value='{{ENE_LOAD_CLEAR_HASP}}'{{/ENE_LOAD_CLEAR_HASP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_LOAD_CLEAR_IFM'>ENE_LOAD_CLEAR_IFM: </label><div class='col-sm-8'><input id='{{id}}_ENE_LOAD_CLEAR_IFM' class='form-control' type='text'{{#ENE_LOAD_CLEAR_IFM}} value='{{ENE_LOAD_CLEAR_IFM}}'{{/ENE_LOAD_CLEAR_IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_LOAD_CLEAR_RTM'>ENE_LOAD_CLEAR_RTM: </label><div class='col-sm-8'><input id='{{id}}_ENE_LOAD_CLEAR_RTM' class='form-control' type='text'{{#ENE_LOAD_CLEAR_RTM}} value='{{ENE_LOAD_CLEAR_RTM}}'{{/ENE_LOAD_CLEAR_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_LOAD_FCST'>ENE_LOAD_FCST: </label><div class='col-sm-8'><input id='{{id}}_ENE_LOAD_FCST' class='form-control' type='text'{{#ENE_LOAD_FCST}} value='{{ENE_LOAD_FCST}}'{{/ENE_LOAD_FCST}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_PEAK_HOUR'>ENE_PEAK_HOUR: </label><div class='col-sm-8'><input id='{{id}}_ENE_PEAK_HOUR' class='form-control' type='text'{{#ENE_PEAK_HOUR}} value='{{ENE_PEAK_HOUR}}'{{/ENE_PEAK_HOUR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_PEAK_LOAD'>ENE_PEAK_LOAD: </label><div class='col-sm-8'><input id='{{id}}_ENE_PEAK_LOAD' class='form-control' type='text'{{#ENE_PEAK_LOAD}} value='{{ENE_PEAK_LOAD}}'{{/ENE_PEAK_LOAD}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FUEL_REGION_value'>FUEL_REGION_value: </label><div class='col-sm-8'><input id='{{id}}_FUEL_REGION_value' class='form-control' type='text'{{#FUEL_REGION_value}} value='{{FUEL_REGION_value}}'{{/FUEL_REGION_value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_INVT_DATETIME'>INVT_DATETIME: </label><div class='col-sm-8'><input id='{{id}}_INVT_DATETIME' class='form-control' type='text'{{#INVT_DATETIME}} value='{{INVT_DATETIME}}'{{/INVT_DATETIME}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LOAD_ACTUAL'>LOAD_ACTUAL: </label><div class='col-sm-8'><input id='{{id}}_LOAD_ACTUAL' class='form-control' type='text'{{#LOAD_ACTUAL}} value='{{LOAD_ACTUAL}}'{{/LOAD_ACTUAL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LOAD_CLEAR_RTM'>LOAD_CLEAR_RTM: </label><div class='col-sm-8'><input id='{{id}}_LOAD_CLEAR_RTM' class='form-control' type='text'{{#LOAD_CLEAR_RTM}} value='{{LOAD_CLEAR_RTM}}'{{/LOAD_CLEAR_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LOSS_TOTAL_COST_HASP'>LOSS_TOTAL_COST_HASP: </label><div class='col-sm-8'><input id='{{id}}_LOSS_TOTAL_COST_HASP' class='form-control' type='text'{{#LOSS_TOTAL_COST_HASP}} value='{{LOSS_TOTAL_COST_HASP}}'{{/LOSS_TOTAL_COST_HASP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LOSS_TOTAL_COST_RTM'>LOSS_TOTAL_COST_RTM: </label><div class='col-sm-8'><input id='{{id}}_LOSS_TOTAL_COST_RTM' class='form-control' type='text'{{#LOSS_TOTAL_COST_RTM}} value='{{LOSS_TOTAL_COST_RTM}}'{{/LOSS_TOTAL_COST_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LOSS_TOTAL_MW_HASP'>LOSS_TOTAL_MW_HASP: </label><div class='col-sm-8'><input id='{{id}}_LOSS_TOTAL_MW_HASP' class='form-control' type='text'{{#LOSS_TOTAL_MW_HASP}} value='{{LOSS_TOTAL_MW_HASP}}'{{/LOSS_TOTAL_MW_HASP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LOSS_TOTAL_MW_RTM'>LOSS_TOTAL_MW_RTM: </label><div class='col-sm-8'><input id='{{id}}_LOSS_TOTAL_MW_RTM' class='form-control' type='text'{{#LOSS_TOTAL_MW_RTM}} value='{{LOSS_TOTAL_MW_RTM}}'{{/LOSS_TOTAL_MW_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MPM_FLAG'>MPM_FLAG: </label><div class='col-sm-8'><input id='{{id}}_MPM_FLAG' class='form-control' type='text'{{#MPM_FLAG}} value='{{MPM_FLAG}}'{{/MPM_FLAG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OP_RSRV_TOTAL'>OP_RSRV_TOTAL: </label><div class='col-sm-8'><input id='{{id}}_OP_RSRV_TOTAL' class='form-control' type='text'{{#OP_RSRV_TOTAL}} value='{{OP_RSRV_TOTAL}}'{{/OP_RSRV_TOTAL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PRC_NG'>PRC_NG: </label><div class='col-sm-8'><input id='{{id}}_PRC_NG' class='form-control' type='text'{{#PRC_NG}} value='{{PRC_NG}}'{{/PRC_NG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PRC_SHADOW'>PRC_SHADOW: </label><div class='col-sm-8'><input id='{{id}}_PRC_SHADOW' class='form-control' type='text'{{#PRC_SHADOW}} value='{{PRC_SHADOW}}'{{/PRC_SHADOW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RATING_ATC'>RATING_ATC: </label><div class='col-sm-8'><input id='{{id}}_RATING_ATC' class='form-control' type='text'{{#RATING_ATC}} value='{{RATING_ATC}}'{{/RATING_ATC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMR_DETER_DAM'>RMR_DETER_DAM: </label><div class='col-sm-8'><input id='{{id}}_RMR_DETER_DAM' class='form-control' type='text'{{#RMR_DETER_DAM}} value='{{RMR_DETER_DAM}}'{{/RMR_DETER_DAM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMR_DETER_HASP'>RMR_DETER_HASP: </label><div class='col-sm-8'><input id='{{id}}_RMR_DETER_HASP' class='form-control' type='text'{{#RMR_DETER_HASP}} value='{{RMR_DETER_HASP}}'{{/RMR_DETER_HASP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMR_DISPATCH_DAM'>RMR_DISPATCH_DAM: </label><div class='col-sm-8'><input id='{{id}}_RMR_DISPATCH_DAM' class='form-control' type='text'{{#RMR_DISPATCH_DAM}} value='{{RMR_DISPATCH_DAM}}'{{/RMR_DISPATCH_DAM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMR_DISPATCH_HASP'>RMR_DISPATCH_HASP: </label><div class='col-sm-8'><input id='{{id}}_RMR_DISPATCH_HASP' class='form-control' type='text'{{#RMR_DISPATCH_HASP}} value='{{RMR_DISPATCH_HASP}}'{{/RMR_DISPATCH_HASP}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OASISDataItems" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RMR_TOTAL").value; if ("" !== temp) obj["RMR_TOTAL"] = temp;
                temp = document.getElementById (id + "_RMR_TOTAL_AVAIL").value; if ("" !== temp) obj["RMR_TOTAL_AVAIL"] = temp;
                temp = document.getElementById (id + "_RUC_GEN_CLEAR_RUC").value; if ("" !== temp) obj["RUC_GEN_CLEAR_RUC"] = temp;
                temp = document.getElementById (id + "_RUC_IMP_CLEAR_RUC").value; if ("" !== temp) obj["RUC_IMP_CLEAR_RUC"] = temp;
                temp = document.getElementById (id + "_RUC_LOAD_CLEAR_RUC").value; if ("" !== temp) obj["RUC_LOAD_CLEAR_RUC"] = temp;
                temp = document.getElementById (id + "_RUC_ZONE_value").value; if ("" !== temp) obj["RUC_ZONE_value"] = temp;
                temp = document.getElementById (id + "_TAC_AREA_value").value; if ("" !== temp) obj["TAC_AREA_value"] = temp;
                temp = document.getElementById (id + "_TINTRFCE_value").value; if ("" !== temp) obj["TINTRFCE_value"] = temp;
                temp = document.getElementById (id + "_TRNS_AS_IMPORT").value; if ("" !== temp) obj["TRNS_AS_IMPORT"] = temp;
                temp = document.getElementById (id + "_TRNS_ENE_IMPORT").value; if ("" !== temp) obj["TRNS_ENE_IMPORT"] = temp;
                temp = document.getElementById (id + "_TRNS_EQUIP_value").value; if ("" !== temp) obj["TRNS_EQUIP_value"] = temp;
                temp = document.getElementById (id + "_TRNS_RATING_CBM").value; if ("" !== temp) obj["TRNS_RATING_CBM"] = temp;
                temp = document.getElementById (id + "_TRNS_RATING_DIRECTION").value; if ("" !== temp) obj["TRNS_RATING_DIRECTION"] = temp;
                temp = document.getElementById (id + "_TRNS_RATING_OTC").value; if ("" !== temp) obj["TRNS_RATING_OTC"] = temp;
                temp = document.getElementById (id + "_TRNS_RATING_OTC_DERATE").value; if ("" !== temp) obj["TRNS_RATING_OTC_DERATE"] = temp;
                temp = document.getElementById (id + "_TRNS_RATING_TTC").value; if ("" !== temp) obj["TRNS_RATING_TTC"] = temp;
                temp = document.getElementById (id + "_TRNS_TI_value").value; if ("" !== temp) obj["TRNS_TI_value"] = temp;
                temp = document.getElementById (id + "_TRNS_TR_ENTMTS").value; if ("" !== temp) obj["TRNS_TR_ENTMTS"] = temp;
                temp = document.getElementById (id + "_TRNS_TR_USEAGE").value; if ("" !== temp) obj["TRNS_TR_USEAGE"] = temp;
                temp = document.getElementById (id + "_AS_CLEAR_ASMP_IFM").value; if ("" !== temp) obj["AS_CLEAR_ASMP_IFM"] = temp;
                temp = document.getElementById (id + "_AS_CLEAR_ASMP_RTM").value; if ("" !== temp) obj["AS_CLEAR_ASMP_RTM"] = temp;
                temp = document.getElementById (id + "_AS_CLEAR_COST_IFM").value; if ("" !== temp) obj["AS_CLEAR_COST_IFM"] = temp;
                temp = document.getElementById (id + "_AS_CLEAR_COST_RTM").value; if ("" !== temp) obj["AS_CLEAR_COST_RTM"] = temp;
                temp = document.getElementById (id + "_AS_CLEAR_MW_IFM").value; if ("" !== temp) obj["AS_CLEAR_MW_IFM"] = temp;
                temp = document.getElementById (id + "_AS_CLEAR_MW_RTM").value; if ("" !== temp) obj["AS_CLEAR_MW_RTM"] = temp;
                temp = document.getElementById (id + "_AS_GEN_TOTAL_MW_IFM").value; if ("" !== temp) obj["AS_GEN_TOTAL_MW_IFM"] = temp;
                temp = document.getElementById (id + "_AS_GEN_TOTAL_MW_RTM").value; if ("" !== temp) obj["AS_GEN_TOTAL_MW_RTM"] = temp;
                temp = document.getElementById (id + "_AS_IMP_TOTAL_MW_IFM").value; if ("" !== temp) obj["AS_IMP_TOTAL_MW_IFM"] = temp;
                temp = document.getElementById (id + "_AS_IMP_TOTAL_MW_RTM").value; if ("" !== temp) obj["AS_IMP_TOTAL_MW_RTM"] = temp;
                temp = document.getElementById (id + "_AS_LOAD_TOTAL_MW_IFM").value; if ("" !== temp) obj["AS_LOAD_TOTAL_MW_IFM"] = temp;
                temp = document.getElementById (id + "_AS_LOAD_TOTAL_MW_RTM").value; if ("" !== temp) obj["AS_LOAD_TOTAL_MW_RTM"] = temp;
                temp = document.getElementById (id + "_AS_REGION_value").value; if ("" !== temp) obj["AS_REGION_value"] = temp;
                temp = document.getElementById (id + "_AS_REGION_REQ_MAX").value; if ("" !== temp) obj["AS_REGION_REQ_MAX"] = temp;
                temp = document.getElementById (id + "_AS_REGION_REQ_MIN").value; if ("" !== temp) obj["AS_REGION_REQ_MIN"] = temp;
                temp = document.getElementById (id + "_AS_SELF_MW_IFM").value; if ("" !== temp) obj["AS_SELF_MW_IFM"] = temp;
                temp = document.getElementById (id + "_AS_SELF_MW_RTM").value; if ("" !== temp) obj["AS_SELF_MW_RTM"] = temp;
                temp = document.getElementById (id + "_AS_TOTAL_MW").value; if ("" !== temp) obj["AS_TOTAL_MW"] = temp;
                temp = document.getElementById (id + "_AS_TOTAL_MW_IFM").value; if ("" !== temp) obj["AS_TOTAL_MW_IFM"] = temp;
                temp = document.getElementById (id + "_AS_TOTAL_MW_RTM").value; if ("" !== temp) obj["AS_TOTAL_MW_RTM"] = temp;
                temp = document.getElementById (id + "_AS_TYPE").value; if ("" !== temp) obj["AS_TYPE"] = temp;
                temp = document.getElementById (id + "_AS_USER_RATE").value; if ("" !== temp) obj["AS_USER_RATE"] = temp;
                temp = document.getElementById (id + "_CA_value").value; if ("" !== temp) obj["CA_value"] = temp;
                temp = document.getElementById (id + "_CMMT_MINLOAD_MLC").value; if ("" !== temp) obj["CMMT_MINLOAD_MLC"] = temp;
                temp = document.getElementById (id + "_CMMT_MINLOAD_MW").value; if ("" !== temp) obj["CMMT_MINLOAD_MW"] = temp;
                temp = document.getElementById (id + "_CMMT_RA_MLC").value; if ("" !== temp) obj["CMMT_RA_MLC"] = temp;
                temp = document.getElementById (id + "_CMMT_RA_MW").value; if ("" !== temp) obj["CMMT_RA_MW"] = temp;
                temp = document.getElementById (id + "_CMMT_RA_START_COST").value; if ("" !== temp) obj["CMMT_RA_START_COST"] = temp;
                temp = document.getElementById (id + "_CMMT_RA_UNITS").value; if ("" !== temp) obj["CMMT_RA_UNITS"] = temp;
                temp = document.getElementById (id + "_CMMT_TOTAL_START_COST").value; if ("" !== temp) obj["CMMT_TOTAL_START_COST"] = temp;
                temp = document.getElementById (id + "_CMMT_TOTAL_MW").value; if ("" !== temp) obj["CMMT_TOTAL_MW"] = temp;
                temp = document.getElementById (id + "_CMMT_TOTAL_UNITS").value; if ("" !== temp) obj["CMMT_TOTAL_UNITS"] = temp;
                temp = document.getElementById (id + "_CRR_CAT").value; if ("" !== temp) obj["CRR_CAT"] = temp;
                temp = document.getElementById (id + "_CRR_MARKET_value").value; if ("" !== temp) obj["CRR_MARKET_value"] = temp;
                temp = document.getElementById (id + "_CRR_MW").value; if ("" !== temp) obj["CRR_MW"] = temp;
                temp = document.getElementById (id + "_CRR_NSR").value; if ("" !== temp) obj["CRR_NSR"] = temp;
                temp = document.getElementById (id + "_CRR_OPTION").value; if ("" !== temp) obj["CRR_OPTION"] = temp;
                temp = document.getElementById (id + "_CRR_OWNER").value; if ("" !== temp) obj["CRR_OWNER"] = temp;
                temp = document.getElementById (id + "_CRR_SEGMENT").value; if ("" !== temp) obj["CRR_SEGMENT"] = temp;
                temp = document.getElementById (id + "_CRR_TERM").value; if ("" !== temp) obj["CRR_TERM"] = temp;
                temp = document.getElementById (id + "_CRR_TOU").value; if ("" !== temp) obj["CRR_TOU"] = temp;
                temp = document.getElementById (id + "_CRR_TYPE").value; if ("" !== temp) obj["CRR_TYPE"] = temp;
                temp = document.getElementById (id + "_ENE_EA_DA").value; if ("" !== temp) obj["ENE_EA_DA"] = temp;
                temp = document.getElementById (id + "_ENE_EA_EXCEPT").value; if ("" !== temp) obj["ENE_EA_EXCEPT"] = temp;
                temp = document.getElementById (id + "_ENE_EA_HASP").value; if ("" !== temp) obj["ENE_EA_HASP"] = temp;
                temp = document.getElementById (id + "_ENE_EA_MLE").value; if ("" !== temp) obj["ENE_EA_MLE"] = temp;
                temp = document.getElementById (id + "_ENE_EA_MSSLF").value; if ("" !== temp) obj["ENE_EA_MSSLF"] = temp;
                temp = document.getElementById (id + "_ENE_EA_OPTIMAL").value; if ("" !== temp) obj["ENE_EA_OPTIMAL"] = temp;
                temp = document.getElementById (id + "_ENE_EA_RAMP_DEV").value; if ("" !== temp) obj["ENE_EA_RAMP_DEV"] = temp;
                temp = document.getElementById (id + "_ENE_EA_RAMP_STD").value; if ("" !== temp) obj["ENE_EA_RAMP_STD"] = temp;
                temp = document.getElementById (id + "_ENE_EA_RESIDUAL").value; if ("" !== temp) obj["ENE_EA_RESIDUAL"] = temp;
                temp = document.getElementById (id + "_ENE_EA_RMR").value; if ("" !== temp) obj["ENE_EA_RMR"] = temp;
                temp = document.getElementById (id + "_ENE_EA_SELF").value; if ("" !== temp) obj["ENE_EA_SELF"] = temp;
                temp = document.getElementById (id + "_ENE_EA_SLIC").value; if ("" !== temp) obj["ENE_EA_SLIC"] = temp;
                temp = document.getElementById (id + "_ENE_EXP_CLEAR_HASP").value; if ("" !== temp) obj["ENE_EXP_CLEAR_HASP"] = temp;
                temp = document.getElementById (id + "_ENE_EXP_CLEAR_IFM").value; if ("" !== temp) obj["ENE_EXP_CLEAR_IFM"] = temp;
                temp = document.getElementById (id + "_ENE_EXP_CLEAR_RTM").value; if ("" !== temp) obj["ENE_EXP_CLEAR_RTM"] = temp;
                temp = document.getElementById (id + "_ENE_GEN_CLEAR_HASP").value; if ("" !== temp) obj["ENE_GEN_CLEAR_HASP"] = temp;
                temp = document.getElementById (id + "_ENE_GEN_CLEAR_IFM").value; if ("" !== temp) obj["ENE_GEN_CLEAR_IFM"] = temp;
                temp = document.getElementById (id + "_ENE_GEN_CLEAR_RTM").value; if ("" !== temp) obj["ENE_GEN_CLEAR_RTM"] = temp;
                temp = document.getElementById (id + "_ENE_IMP_CLEAR_HASP").value; if ("" !== temp) obj["ENE_IMP_CLEAR_HASP"] = temp;
                temp = document.getElementById (id + "_ENE_IMP_CLEAR_IFM").value; if ("" !== temp) obj["ENE_IMP_CLEAR_IFM"] = temp;
                temp = document.getElementById (id + "_ENE_IMP_CLEAR_RTM").value; if ("" !== temp) obj["ENE_IMP_CLEAR_RTM"] = temp;
                temp = document.getElementById (id + "_ENE_LOAD_ACTUAL").value; if ("" !== temp) obj["ENE_LOAD_ACTUAL"] = temp;
                temp = document.getElementById (id + "_ENE_LOAD_CLEAR_HASP").value; if ("" !== temp) obj["ENE_LOAD_CLEAR_HASP"] = temp;
                temp = document.getElementById (id + "_ENE_LOAD_CLEAR_IFM").value; if ("" !== temp) obj["ENE_LOAD_CLEAR_IFM"] = temp;
                temp = document.getElementById (id + "_ENE_LOAD_CLEAR_RTM").value; if ("" !== temp) obj["ENE_LOAD_CLEAR_RTM"] = temp;
                temp = document.getElementById (id + "_ENE_LOAD_FCST").value; if ("" !== temp) obj["ENE_LOAD_FCST"] = temp;
                temp = document.getElementById (id + "_ENE_PEAK_HOUR").value; if ("" !== temp) obj["ENE_PEAK_HOUR"] = temp;
                temp = document.getElementById (id + "_ENE_PEAK_LOAD").value; if ("" !== temp) obj["ENE_PEAK_LOAD"] = temp;
                temp = document.getElementById (id + "_FUEL_REGION_value").value; if ("" !== temp) obj["FUEL_REGION_value"] = temp;
                temp = document.getElementById (id + "_INVT_DATETIME").value; if ("" !== temp) obj["INVT_DATETIME"] = temp;
                temp = document.getElementById (id + "_LOAD_ACTUAL").value; if ("" !== temp) obj["LOAD_ACTUAL"] = temp;
                temp = document.getElementById (id + "_LOAD_CLEAR_RTM").value; if ("" !== temp) obj["LOAD_CLEAR_RTM"] = temp;
                temp = document.getElementById (id + "_LOSS_TOTAL_COST_HASP").value; if ("" !== temp) obj["LOSS_TOTAL_COST_HASP"] = temp;
                temp = document.getElementById (id + "_LOSS_TOTAL_COST_RTM").value; if ("" !== temp) obj["LOSS_TOTAL_COST_RTM"] = temp;
                temp = document.getElementById (id + "_LOSS_TOTAL_MW_HASP").value; if ("" !== temp) obj["LOSS_TOTAL_MW_HASP"] = temp;
                temp = document.getElementById (id + "_LOSS_TOTAL_MW_RTM").value; if ("" !== temp) obj["LOSS_TOTAL_MW_RTM"] = temp;
                temp = document.getElementById (id + "_MPM_FLAG").value; if ("" !== temp) obj["MPM_FLAG"] = temp;
                temp = document.getElementById (id + "_OP_RSRV_TOTAL").value; if ("" !== temp) obj["OP_RSRV_TOTAL"] = temp;
                temp = document.getElementById (id + "_PRC_NG").value; if ("" !== temp) obj["PRC_NG"] = temp;
                temp = document.getElementById (id + "_PRC_SHADOW").value; if ("" !== temp) obj["PRC_SHADOW"] = temp;
                temp = document.getElementById (id + "_RATING_ATC").value; if ("" !== temp) obj["RATING_ATC"] = temp;
                temp = document.getElementById (id + "_RMR_DETER_DAM").value; if ("" !== temp) obj["RMR_DETER_DAM"] = temp;
                temp = document.getElementById (id + "_RMR_DETER_HASP").value; if ("" !== temp) obj["RMR_DETER_HASP"] = temp;
                temp = document.getElementById (id + "_RMR_DISPATCH_DAM").value; if ("" !== temp) obj["RMR_DISPATCH_DAM"] = temp;
                temp = document.getElementById (id + "_RMR_DISPATCH_HASP").value; if ("" !== temp) obj["RMR_DISPATCH_HASP"] = temp;

                return (obj);
            }
        }

        class OASISMasterType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OASISMasterType;
                if (null == bucket)
                   cim_data.OASISMasterType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OASISMasterType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISMasterType";
                base.parse_attribute (/<cim:OASISMasterType.ATL_PNODE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_PNODE", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_APNODE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_APNODE", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_LDF\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_LDF", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_LAP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_LAP", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_RESOURCE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_RESOURCE", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_HUB\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_HUB", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_PNODE_MAP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_PNODE_MAP", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_AS_REGION\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_AS_REGION", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_AS_REGION_MAP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_AS_REGION_MAP", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_RUC_ZONE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_RUC_ZONE", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_RUC_ZONE_MAP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_RUC_ZONE_MAP", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_TAC_AREA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_TAC_AREA", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_TAC_AREA_MAP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_TAC_AREA_MAP", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_TIEPOINT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_TIEPOINT", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_TI\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_TI", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_PUB\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_PUB", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_STAT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_STAT", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_PUB_SCHED\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_PUB_SCHED", sub, context);
                base.parse_attribute (/<cim:OASISMasterType.ATL_XREF\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ATL_XREF", sub, context);
                let bucket = context.parsed.OASISMasterType;
                if (null == bucket)
                   context.parsed.OASISMasterType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "OASISMasterType", "ATL_PNODE", "ATL_PNODE", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_APNODE", "ATL_APNODE", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_LDF", "ATL_LDF", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_LAP", "ATL_LAP", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_RESOURCE", "ATL_RESOURCE", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_HUB", "ATL_HUB", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_PNODE_MAP", "ATL_PNODE_MAP", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_AS_REGION", "ATL_AS_REGION", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_AS_REGION_MAP", "ATL_AS_REGION_MAP", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_RUC_ZONE", "ATL_RUC_ZONE", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_RUC_ZONE_MAP", "ATL_RUC_ZONE_MAP", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_TAC_AREA", "ATL_TAC_AREA", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_TAC_AREA_MAP", "ATL_TAC_AREA_MAP", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_TIEPOINT", "ATL_TIEPOINT", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_TI", "ATL_TI", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_PUB", "ATL_PUB", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_STAT", "ATL_STAT", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_PUB_SCHED", "ATL_PUB_SCHED", fields);
                base.export_attribute (obj, "OASISMasterType", "ATL_XREF", "ATL_XREF", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OASISMasterType_collapse" aria-expanded="true" aria-controls="OASISMasterType_collapse" style="margin-left: 10px;">OASISMasterType</a></legend>
                    <div id="OASISMasterType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#ATL_PNODE}}<div><b>ATL_PNODE</b>: {{ATL_PNODE}}</div>{{/ATL_PNODE}}
                    {{#ATL_APNODE}}<div><b>ATL_APNODE</b>: {{ATL_APNODE}}</div>{{/ATL_APNODE}}
                    {{#ATL_LDF}}<div><b>ATL_LDF</b>: {{ATL_LDF}}</div>{{/ATL_LDF}}
                    {{#ATL_LAP}}<div><b>ATL_LAP</b>: {{ATL_LAP}}</div>{{/ATL_LAP}}
                    {{#ATL_RESOURCE}}<div><b>ATL_RESOURCE</b>: {{ATL_RESOURCE}}</div>{{/ATL_RESOURCE}}
                    {{#ATL_HUB}}<div><b>ATL_HUB</b>: {{ATL_HUB}}</div>{{/ATL_HUB}}
                    {{#ATL_PNODE_MAP}}<div><b>ATL_PNODE_MAP</b>: {{ATL_PNODE_MAP}}</div>{{/ATL_PNODE_MAP}}
                    {{#ATL_AS_REGION}}<div><b>ATL_AS_REGION</b>: {{ATL_AS_REGION}}</div>{{/ATL_AS_REGION}}
                    {{#ATL_AS_REGION_MAP}}<div><b>ATL_AS_REGION_MAP</b>: {{ATL_AS_REGION_MAP}}</div>{{/ATL_AS_REGION_MAP}}
                    {{#ATL_RUC_ZONE}}<div><b>ATL_RUC_ZONE</b>: {{ATL_RUC_ZONE}}</div>{{/ATL_RUC_ZONE}}
                    {{#ATL_RUC_ZONE_MAP}}<div><b>ATL_RUC_ZONE_MAP</b>: {{ATL_RUC_ZONE_MAP}}</div>{{/ATL_RUC_ZONE_MAP}}
                    {{#ATL_TAC_AREA}}<div><b>ATL_TAC_AREA</b>: {{ATL_TAC_AREA}}</div>{{/ATL_TAC_AREA}}
                    {{#ATL_TAC_AREA_MAP}}<div><b>ATL_TAC_AREA_MAP</b>: {{ATL_TAC_AREA_MAP}}</div>{{/ATL_TAC_AREA_MAP}}
                    {{#ATL_TIEPOINT}}<div><b>ATL_TIEPOINT</b>: {{ATL_TIEPOINT}}</div>{{/ATL_TIEPOINT}}
                    {{#ATL_TI}}<div><b>ATL_TI</b>: {{ATL_TI}}</div>{{/ATL_TI}}
                    {{#ATL_PUB}}<div><b>ATL_PUB</b>: {{ATL_PUB}}</div>{{/ATL_PUB}}
                    {{#ATL_STAT}}<div><b>ATL_STAT</b>: {{ATL_STAT}}</div>{{/ATL_STAT}}
                    {{#ATL_PUB_SCHED}}<div><b>ATL_PUB_SCHED</b>: {{ATL_PUB_SCHED}}</div>{{/ATL_PUB_SCHED}}
                    {{#ATL_XREF}}<div><b>ATL_XREF</b>: {{ATL_XREF}}</div>{{/ATL_XREF}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OASISMasterType_collapse" aria-expanded="true" aria-controls="{{id}}_OASISMasterType_collapse" style="margin-left: 10px;">OASISMasterType</a></legend>
                    <div id="{{id}}_OASISMasterType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_PNODE'>ATL_PNODE: </label><div class='col-sm-8'><input id='{{id}}_ATL_PNODE' class='form-control' type='text'{{#ATL_PNODE}} value='{{ATL_PNODE}}'{{/ATL_PNODE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_APNODE'>ATL_APNODE: </label><div class='col-sm-8'><input id='{{id}}_ATL_APNODE' class='form-control' type='text'{{#ATL_APNODE}} value='{{ATL_APNODE}}'{{/ATL_APNODE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_LDF'>ATL_LDF: </label><div class='col-sm-8'><input id='{{id}}_ATL_LDF' class='form-control' type='text'{{#ATL_LDF}} value='{{ATL_LDF}}'{{/ATL_LDF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_LAP'>ATL_LAP: </label><div class='col-sm-8'><input id='{{id}}_ATL_LAP' class='form-control' type='text'{{#ATL_LAP}} value='{{ATL_LAP}}'{{/ATL_LAP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_RESOURCE'>ATL_RESOURCE: </label><div class='col-sm-8'><input id='{{id}}_ATL_RESOURCE' class='form-control' type='text'{{#ATL_RESOURCE}} value='{{ATL_RESOURCE}}'{{/ATL_RESOURCE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_HUB'>ATL_HUB: </label><div class='col-sm-8'><input id='{{id}}_ATL_HUB' class='form-control' type='text'{{#ATL_HUB}} value='{{ATL_HUB}}'{{/ATL_HUB}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_PNODE_MAP'>ATL_PNODE_MAP: </label><div class='col-sm-8'><input id='{{id}}_ATL_PNODE_MAP' class='form-control' type='text'{{#ATL_PNODE_MAP}} value='{{ATL_PNODE_MAP}}'{{/ATL_PNODE_MAP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_AS_REGION'>ATL_AS_REGION: </label><div class='col-sm-8'><input id='{{id}}_ATL_AS_REGION' class='form-control' type='text'{{#ATL_AS_REGION}} value='{{ATL_AS_REGION}}'{{/ATL_AS_REGION}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_AS_REGION_MAP'>ATL_AS_REGION_MAP: </label><div class='col-sm-8'><input id='{{id}}_ATL_AS_REGION_MAP' class='form-control' type='text'{{#ATL_AS_REGION_MAP}} value='{{ATL_AS_REGION_MAP}}'{{/ATL_AS_REGION_MAP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_RUC_ZONE'>ATL_RUC_ZONE: </label><div class='col-sm-8'><input id='{{id}}_ATL_RUC_ZONE' class='form-control' type='text'{{#ATL_RUC_ZONE}} value='{{ATL_RUC_ZONE}}'{{/ATL_RUC_ZONE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_RUC_ZONE_MAP'>ATL_RUC_ZONE_MAP: </label><div class='col-sm-8'><input id='{{id}}_ATL_RUC_ZONE_MAP' class='form-control' type='text'{{#ATL_RUC_ZONE_MAP}} value='{{ATL_RUC_ZONE_MAP}}'{{/ATL_RUC_ZONE_MAP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_TAC_AREA'>ATL_TAC_AREA: </label><div class='col-sm-8'><input id='{{id}}_ATL_TAC_AREA' class='form-control' type='text'{{#ATL_TAC_AREA}} value='{{ATL_TAC_AREA}}'{{/ATL_TAC_AREA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_TAC_AREA_MAP'>ATL_TAC_AREA_MAP: </label><div class='col-sm-8'><input id='{{id}}_ATL_TAC_AREA_MAP' class='form-control' type='text'{{#ATL_TAC_AREA_MAP}} value='{{ATL_TAC_AREA_MAP}}'{{/ATL_TAC_AREA_MAP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_TIEPOINT'>ATL_TIEPOINT: </label><div class='col-sm-8'><input id='{{id}}_ATL_TIEPOINT' class='form-control' type='text'{{#ATL_TIEPOINT}} value='{{ATL_TIEPOINT}}'{{/ATL_TIEPOINT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_TI'>ATL_TI: </label><div class='col-sm-8'><input id='{{id}}_ATL_TI' class='form-control' type='text'{{#ATL_TI}} value='{{ATL_TI}}'{{/ATL_TI}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_PUB'>ATL_PUB: </label><div class='col-sm-8'><input id='{{id}}_ATL_PUB' class='form-control' type='text'{{#ATL_PUB}} value='{{ATL_PUB}}'{{/ATL_PUB}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_STAT'>ATL_STAT: </label><div class='col-sm-8'><input id='{{id}}_ATL_STAT' class='form-control' type='text'{{#ATL_STAT}} value='{{ATL_STAT}}'{{/ATL_STAT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_PUB_SCHED'>ATL_PUB_SCHED: </label><div class='col-sm-8'><input id='{{id}}_ATL_PUB_SCHED' class='form-control' type='text'{{#ATL_PUB_SCHED}} value='{{ATL_PUB_SCHED}}'{{/ATL_PUB_SCHED}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ATL_XREF'>ATL_XREF: </label><div class='col-sm-8'><input id='{{id}}_ATL_XREF' class='form-control' type='text'{{#ATL_XREF}} value='{{ATL_XREF}}'{{/ATL_XREF}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OASISMasterType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ATL_PNODE").value; if ("" !== temp) obj["ATL_PNODE"] = temp;
                temp = document.getElementById (id + "_ATL_APNODE").value; if ("" !== temp) obj["ATL_APNODE"] = temp;
                temp = document.getElementById (id + "_ATL_LDF").value; if ("" !== temp) obj["ATL_LDF"] = temp;
                temp = document.getElementById (id + "_ATL_LAP").value; if ("" !== temp) obj["ATL_LAP"] = temp;
                temp = document.getElementById (id + "_ATL_RESOURCE").value; if ("" !== temp) obj["ATL_RESOURCE"] = temp;
                temp = document.getElementById (id + "_ATL_HUB").value; if ("" !== temp) obj["ATL_HUB"] = temp;
                temp = document.getElementById (id + "_ATL_PNODE_MAP").value; if ("" !== temp) obj["ATL_PNODE_MAP"] = temp;
                temp = document.getElementById (id + "_ATL_AS_REGION").value; if ("" !== temp) obj["ATL_AS_REGION"] = temp;
                temp = document.getElementById (id + "_ATL_AS_REGION_MAP").value; if ("" !== temp) obj["ATL_AS_REGION_MAP"] = temp;
                temp = document.getElementById (id + "_ATL_RUC_ZONE").value; if ("" !== temp) obj["ATL_RUC_ZONE"] = temp;
                temp = document.getElementById (id + "_ATL_RUC_ZONE_MAP").value; if ("" !== temp) obj["ATL_RUC_ZONE_MAP"] = temp;
                temp = document.getElementById (id + "_ATL_TAC_AREA").value; if ("" !== temp) obj["ATL_TAC_AREA"] = temp;
                temp = document.getElementById (id + "_ATL_TAC_AREA_MAP").value; if ("" !== temp) obj["ATL_TAC_AREA_MAP"] = temp;
                temp = document.getElementById (id + "_ATL_TIEPOINT").value; if ("" !== temp) obj["ATL_TIEPOINT"] = temp;
                temp = document.getElementById (id + "_ATL_TI").value; if ("" !== temp) obj["ATL_TI"] = temp;
                temp = document.getElementById (id + "_ATL_PUB").value; if ("" !== temp) obj["ATL_PUB"] = temp;
                temp = document.getElementById (id + "_ATL_STAT").value; if ("" !== temp) obj["ATL_STAT"] = temp;
                temp = document.getElementById (id + "_ATL_PUB_SCHED").value; if ("" !== temp) obj["ATL_PUB_SCHED"] = temp;
                temp = document.getElementById (id + "_ATL_XREF").value; if ("" !== temp) obj["ATL_XREF"] = temp;

                return (obj);
            }
        }

        class AllocationEnergyTypeCode extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AllocationEnergyTypeCode;
                if (null == bucket)
                   cim_data.AllocationEnergyTypeCode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AllocationEnergyTypeCode[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AllocationEnergyTypeCode";
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.DASE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DASE", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.OE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OE", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.HASE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HASE", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.SRE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SRE", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.RED\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RED", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.MSSLFE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MSSLFE", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.RE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RE", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.MLE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MLE", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.SE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SE", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.RTSSE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTSSE", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.PE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PE", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.DAPE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DAPE", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.ESRT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ESRT", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.ESYS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ESYS", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.RMRD\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMRD", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.RMRR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMRR", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.RMRS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMRS", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.RMRT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMRT", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.STRT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "STRT", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.SDWN\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SDWN", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.TEST\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TEST", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.OVGN\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OVGN", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.VS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VS", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.ETC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ETC", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.TOR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TOR", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.RSYS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RSYS", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.RCNG\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RCNG", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.ACNG\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ACNG", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.TCNG\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TCNG", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.LMPM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LMPM", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.BS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BS", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.MINL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MINL", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.SUMR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SUMR", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.RMRH\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMRH", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.SLIC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SLIC", sub, context);
                base.parse_attribute (/<cim:AllocationEnergyTypeCode.OTHER\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OTHER", sub, context);
                let bucket = context.parsed.AllocationEnergyTypeCode;
                if (null == bucket)
                   context.parsed.AllocationEnergyTypeCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "AllocationEnergyTypeCode", "DASE", "DASE", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "OE", "OE", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "HASE", "HASE", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "SRE", "SRE", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "RED", "RED", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "MSSLFE", "MSSLFE", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "RE", "RE", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "MLE", "MLE", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "SE", "SE", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "RTSSE", "RTSSE", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "PE", "PE", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "DAPE", "DAPE", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "ESRT", "ESRT", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "ESYS", "ESYS", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "RMRD", "RMRD", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "RMRR", "RMRR", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "RMRS", "RMRS", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "RMRT", "RMRT", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "STRT", "STRT", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "SDWN", "SDWN", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "TEST", "TEST", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "OVGN", "OVGN", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "VS", "VS", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "ETC", "ETC", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "TOR", "TOR", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "RSYS", "RSYS", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "RCNG", "RCNG", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "ACNG", "ACNG", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "TCNG", "TCNG", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "LMPM", "LMPM", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "BS", "BS", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "MINL", "MINL", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "SUMR", "SUMR", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "RMRH", "RMRH", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "SLIC", "SLIC", fields);
                base.export_attribute (obj, "AllocationEnergyTypeCode", "OTHER", "OTHER", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AllocationEnergyTypeCode_collapse" aria-expanded="true" aria-controls="AllocationEnergyTypeCode_collapse" style="margin-left: 10px;">AllocationEnergyTypeCode</a></legend>
                    <div id="AllocationEnergyTypeCode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#DASE}}<div><b>DASE</b>: {{DASE}}</div>{{/DASE}}
                    {{#OE}}<div><b>OE</b>: {{OE}}</div>{{/OE}}
                    {{#HASE}}<div><b>HASE</b>: {{HASE}}</div>{{/HASE}}
                    {{#SRE}}<div><b>SRE</b>: {{SRE}}</div>{{/SRE}}
                    {{#RED}}<div><b>RED</b>: {{RED}}</div>{{/RED}}
                    {{#MSSLFE}}<div><b>MSSLFE</b>: {{MSSLFE}}</div>{{/MSSLFE}}
                    {{#RE}}<div><b>RE</b>: {{RE}}</div>{{/RE}}
                    {{#MLE}}<div><b>MLE</b>: {{MLE}}</div>{{/MLE}}
                    {{#SE}}<div><b>SE</b>: {{SE}}</div>{{/SE}}
                    {{#RTSSE}}<div><b>RTSSE</b>: {{RTSSE}}</div>{{/RTSSE}}
                    {{#PE}}<div><b>PE</b>: {{PE}}</div>{{/PE}}
                    {{#DAPE}}<div><b>DAPE</b>: {{DAPE}}</div>{{/DAPE}}
                    {{#ESRT}}<div><b>ESRT</b>: {{ESRT}}</div>{{/ESRT}}
                    {{#ESYS}}<div><b>ESYS</b>: {{ESYS}}</div>{{/ESYS}}
                    {{#RMRD}}<div><b>RMRD</b>: {{RMRD}}</div>{{/RMRD}}
                    {{#RMRR}}<div><b>RMRR</b>: {{RMRR}}</div>{{/RMRR}}
                    {{#RMRS}}<div><b>RMRS</b>: {{RMRS}}</div>{{/RMRS}}
                    {{#RMRT}}<div><b>RMRT</b>: {{RMRT}}</div>{{/RMRT}}
                    {{#STRT}}<div><b>STRT</b>: {{STRT}}</div>{{/STRT}}
                    {{#SDWN}}<div><b>SDWN</b>: {{SDWN}}</div>{{/SDWN}}
                    {{#TEST}}<div><b>TEST</b>: {{TEST}}</div>{{/TEST}}
                    {{#OVGN}}<div><b>OVGN</b>: {{OVGN}}</div>{{/OVGN}}
                    {{#VS}}<div><b>VS</b>: {{VS}}</div>{{/VS}}
                    {{#ETC}}<div><b>ETC</b>: {{ETC}}</div>{{/ETC}}
                    {{#TOR}}<div><b>TOR</b>: {{TOR}}</div>{{/TOR}}
                    {{#RSYS}}<div><b>RSYS</b>: {{RSYS}}</div>{{/RSYS}}
                    {{#RCNG}}<div><b>RCNG</b>: {{RCNG}}</div>{{/RCNG}}
                    {{#ACNG}}<div><b>ACNG</b>: {{ACNG}}</div>{{/ACNG}}
                    {{#TCNG}}<div><b>TCNG</b>: {{TCNG}}</div>{{/TCNG}}
                    {{#LMPM}}<div><b>LMPM</b>: {{LMPM}}</div>{{/LMPM}}
                    {{#BS}}<div><b>BS</b>: {{BS}}</div>{{/BS}}
                    {{#MINL}}<div><b>MINL</b>: {{MINL}}</div>{{/MINL}}
                    {{#SUMR}}<div><b>SUMR</b>: {{SUMR}}</div>{{/SUMR}}
                    {{#RMRH}}<div><b>RMRH</b>: {{RMRH}}</div>{{/RMRH}}
                    {{#SLIC}}<div><b>SLIC</b>: {{SLIC}}</div>{{/SLIC}}
                    {{#OTHER}}<div><b>OTHER</b>: {{OTHER}}</div>{{/OTHER}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AllocationEnergyTypeCode_collapse" aria-expanded="true" aria-controls="{{id}}_AllocationEnergyTypeCode_collapse" style="margin-left: 10px;">AllocationEnergyTypeCode</a></legend>
                    <div id="{{id}}_AllocationEnergyTypeCode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DASE'>DASE: </label><div class='col-sm-8'><input id='{{id}}_DASE' class='form-control' type='text'{{#DASE}} value='{{DASE}}'{{/DASE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OE'>OE: </label><div class='col-sm-8'><input id='{{id}}_OE' class='form-control' type='text'{{#OE}} value='{{OE}}'{{/OE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HASE'>HASE: </label><div class='col-sm-8'><input id='{{id}}_HASE' class='form-control' type='text'{{#HASE}} value='{{HASE}}'{{/HASE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SRE'>SRE: </label><div class='col-sm-8'><input id='{{id}}_SRE' class='form-control' type='text'{{#SRE}} value='{{SRE}}'{{/SRE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RED'>RED: </label><div class='col-sm-8'><input id='{{id}}_RED' class='form-control' type='text'{{#RED}} value='{{RED}}'{{/RED}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MSSLFE'>MSSLFE: </label><div class='col-sm-8'><input id='{{id}}_MSSLFE' class='form-control' type='text'{{#MSSLFE}} value='{{MSSLFE}}'{{/MSSLFE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RE'>RE: </label><div class='col-sm-8'><input id='{{id}}_RE' class='form-control' type='text'{{#RE}} value='{{RE}}'{{/RE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MLE'>MLE: </label><div class='col-sm-8'><input id='{{id}}_MLE' class='form-control' type='text'{{#MLE}} value='{{MLE}}'{{/MLE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SE'>SE: </label><div class='col-sm-8'><input id='{{id}}_SE' class='form-control' type='text'{{#SE}} value='{{SE}}'{{/SE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTSSE'>RTSSE: </label><div class='col-sm-8'><input id='{{id}}_RTSSE' class='form-control' type='text'{{#RTSSE}} value='{{RTSSE}}'{{/RTSSE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PE'>PE: </label><div class='col-sm-8'><input id='{{id}}_PE' class='form-control' type='text'{{#PE}} value='{{PE}}'{{/PE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DAPE'>DAPE: </label><div class='col-sm-8'><input id='{{id}}_DAPE' class='form-control' type='text'{{#DAPE}} value='{{DAPE}}'{{/DAPE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ESRT'>ESRT: </label><div class='col-sm-8'><input id='{{id}}_ESRT' class='form-control' type='text'{{#ESRT}} value='{{ESRT}}'{{/ESRT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ESYS'>ESYS: </label><div class='col-sm-8'><input id='{{id}}_ESYS' class='form-control' type='text'{{#ESYS}} value='{{ESYS}}'{{/ESYS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMRD'>RMRD: </label><div class='col-sm-8'><input id='{{id}}_RMRD' class='form-control' type='text'{{#RMRD}} value='{{RMRD}}'{{/RMRD}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMRR'>RMRR: </label><div class='col-sm-8'><input id='{{id}}_RMRR' class='form-control' type='text'{{#RMRR}} value='{{RMRR}}'{{/RMRR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMRS'>RMRS: </label><div class='col-sm-8'><input id='{{id}}_RMRS' class='form-control' type='text'{{#RMRS}} value='{{RMRS}}'{{/RMRS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMRT'>RMRT: </label><div class='col-sm-8'><input id='{{id}}_RMRT' class='form-control' type='text'{{#RMRT}} value='{{RMRT}}'{{/RMRT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_STRT'>STRT: </label><div class='col-sm-8'><input id='{{id}}_STRT' class='form-control' type='text'{{#STRT}} value='{{STRT}}'{{/STRT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SDWN'>SDWN: </label><div class='col-sm-8'><input id='{{id}}_SDWN' class='form-control' type='text'{{#SDWN}} value='{{SDWN}}'{{/SDWN}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TEST'>TEST: </label><div class='col-sm-8'><input id='{{id}}_TEST' class='form-control' type='text'{{#TEST}} value='{{TEST}}'{{/TEST}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OVGN'>OVGN: </label><div class='col-sm-8'><input id='{{id}}_OVGN' class='form-control' type='text'{{#OVGN}} value='{{OVGN}}'{{/OVGN}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VS'>VS: </label><div class='col-sm-8'><input id='{{id}}_VS' class='form-control' type='text'{{#VS}} value='{{VS}}'{{/VS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ETC'>ETC: </label><div class='col-sm-8'><input id='{{id}}_ETC' class='form-control' type='text'{{#ETC}} value='{{ETC}}'{{/ETC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TOR'>TOR: </label><div class='col-sm-8'><input id='{{id}}_TOR' class='form-control' type='text'{{#TOR}} value='{{TOR}}'{{/TOR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RSYS'>RSYS: </label><div class='col-sm-8'><input id='{{id}}_RSYS' class='form-control' type='text'{{#RSYS}} value='{{RSYS}}'{{/RSYS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RCNG'>RCNG: </label><div class='col-sm-8'><input id='{{id}}_RCNG' class='form-control' type='text'{{#RCNG}} value='{{RCNG}}'{{/RCNG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ACNG'>ACNG: </label><div class='col-sm-8'><input id='{{id}}_ACNG' class='form-control' type='text'{{#ACNG}} value='{{ACNG}}'{{/ACNG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TCNG'>TCNG: </label><div class='col-sm-8'><input id='{{id}}_TCNG' class='form-control' type='text'{{#TCNG}} value='{{TCNG}}'{{/TCNG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LMPM'>LMPM: </label><div class='col-sm-8'><input id='{{id}}_LMPM' class='form-control' type='text'{{#LMPM}} value='{{LMPM}}'{{/LMPM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BS'>BS: </label><div class='col-sm-8'><input id='{{id}}_BS' class='form-control' type='text'{{#BS}} value='{{BS}}'{{/BS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MINL'>MINL: </label><div class='col-sm-8'><input id='{{id}}_MINL' class='form-control' type='text'{{#MINL}} value='{{MINL}}'{{/MINL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SUMR'>SUMR: </label><div class='col-sm-8'><input id='{{id}}_SUMR' class='form-control' type='text'{{#SUMR}} value='{{SUMR}}'{{/SUMR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMRH'>RMRH: </label><div class='col-sm-8'><input id='{{id}}_RMRH' class='form-control' type='text'{{#RMRH}} value='{{RMRH}}'{{/RMRH}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SLIC'>SLIC: </label><div class='col-sm-8'><input id='{{id}}_SLIC' class='form-control' type='text'{{#SLIC}} value='{{SLIC}}'{{/SLIC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OTHER'>OTHER: </label><div class='col-sm-8'><input id='{{id}}_OTHER' class='form-control' type='text'{{#OTHER}} value='{{OTHER}}'{{/OTHER}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AllocationEnergyTypeCode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_DASE").value; if ("" !== temp) obj["DASE"] = temp;
                temp = document.getElementById (id + "_OE").value; if ("" !== temp) obj["OE"] = temp;
                temp = document.getElementById (id + "_HASE").value; if ("" !== temp) obj["HASE"] = temp;
                temp = document.getElementById (id + "_SRE").value; if ("" !== temp) obj["SRE"] = temp;
                temp = document.getElementById (id + "_RED").value; if ("" !== temp) obj["RED"] = temp;
                temp = document.getElementById (id + "_MSSLFE").value; if ("" !== temp) obj["MSSLFE"] = temp;
                temp = document.getElementById (id + "_RE").value; if ("" !== temp) obj["RE"] = temp;
                temp = document.getElementById (id + "_MLE").value; if ("" !== temp) obj["MLE"] = temp;
                temp = document.getElementById (id + "_SE").value; if ("" !== temp) obj["SE"] = temp;
                temp = document.getElementById (id + "_RTSSE").value; if ("" !== temp) obj["RTSSE"] = temp;
                temp = document.getElementById (id + "_PE").value; if ("" !== temp) obj["PE"] = temp;
                temp = document.getElementById (id + "_DAPE").value; if ("" !== temp) obj["DAPE"] = temp;
                temp = document.getElementById (id + "_ESRT").value; if ("" !== temp) obj["ESRT"] = temp;
                temp = document.getElementById (id + "_ESYS").value; if ("" !== temp) obj["ESYS"] = temp;
                temp = document.getElementById (id + "_RMRD").value; if ("" !== temp) obj["RMRD"] = temp;
                temp = document.getElementById (id + "_RMRR").value; if ("" !== temp) obj["RMRR"] = temp;
                temp = document.getElementById (id + "_RMRS").value; if ("" !== temp) obj["RMRS"] = temp;
                temp = document.getElementById (id + "_RMRT").value; if ("" !== temp) obj["RMRT"] = temp;
                temp = document.getElementById (id + "_STRT").value; if ("" !== temp) obj["STRT"] = temp;
                temp = document.getElementById (id + "_SDWN").value; if ("" !== temp) obj["SDWN"] = temp;
                temp = document.getElementById (id + "_TEST").value; if ("" !== temp) obj["TEST"] = temp;
                temp = document.getElementById (id + "_OVGN").value; if ("" !== temp) obj["OVGN"] = temp;
                temp = document.getElementById (id + "_VS").value; if ("" !== temp) obj["VS"] = temp;
                temp = document.getElementById (id + "_ETC").value; if ("" !== temp) obj["ETC"] = temp;
                temp = document.getElementById (id + "_TOR").value; if ("" !== temp) obj["TOR"] = temp;
                temp = document.getElementById (id + "_RSYS").value; if ("" !== temp) obj["RSYS"] = temp;
                temp = document.getElementById (id + "_RCNG").value; if ("" !== temp) obj["RCNG"] = temp;
                temp = document.getElementById (id + "_ACNG").value; if ("" !== temp) obj["ACNG"] = temp;
                temp = document.getElementById (id + "_TCNG").value; if ("" !== temp) obj["TCNG"] = temp;
                temp = document.getElementById (id + "_LMPM").value; if ("" !== temp) obj["LMPM"] = temp;
                temp = document.getElementById (id + "_BS").value; if ("" !== temp) obj["BS"] = temp;
                temp = document.getElementById (id + "_MINL").value; if ("" !== temp) obj["MINL"] = temp;
                temp = document.getElementById (id + "_SUMR").value; if ("" !== temp) obj["SUMR"] = temp;
                temp = document.getElementById (id + "_RMRH").value; if ("" !== temp) obj["RMRH"] = temp;
                temp = document.getElementById (id + "_SLIC").value; if ("" !== temp) obj["SLIC"] = temp;
                temp = document.getElementById (id + "_OTHER").value; if ("" !== temp) obj["OTHER"] = temp;

                return (obj);
            }
        }

        class ADSInstructionTypeCommitment extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ADSInstructionTypeCommitment;
                if (null == bucket)
                   cim_data.ADSInstructionTypeCommitment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ADSInstructionTypeCommitment[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ADSInstructionTypeCommitment";
                base.parse_attribute (/<cim:ADSInstructionTypeCommitment.START_UP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "START_UP", sub, context);
                base.parse_attribute (/<cim:ADSInstructionTypeCommitment.SHUT_DOWN\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SHUT_DOWN", sub, context);
                let bucket = context.parsed.ADSInstructionTypeCommitment;
                if (null == bucket)
                   context.parsed.ADSInstructionTypeCommitment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "ADSInstructionTypeCommitment", "START_UP", "START_UP", fields);
                base.export_attribute (obj, "ADSInstructionTypeCommitment", "SHUT_DOWN", "SHUT_DOWN", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ADSInstructionTypeCommitment_collapse" aria-expanded="true" aria-controls="ADSInstructionTypeCommitment_collapse" style="margin-left: 10px;">ADSInstructionTypeCommitment</a></legend>
                    <div id="ADSInstructionTypeCommitment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#START_UP}}<div><b>START_UP</b>: {{START_UP}}</div>{{/START_UP}}
                    {{#SHUT_DOWN}}<div><b>SHUT_DOWN</b>: {{SHUT_DOWN}}</div>{{/SHUT_DOWN}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ADSInstructionTypeCommitment_collapse" aria-expanded="true" aria-controls="{{id}}_ADSInstructionTypeCommitment_collapse" style="margin-left: 10px;">ADSInstructionTypeCommitment</a></legend>
                    <div id="{{id}}_ADSInstructionTypeCommitment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_START_UP'>START_UP: </label><div class='col-sm-8'><input id='{{id}}_START_UP' class='form-control' type='text'{{#START_UP}} value='{{START_UP}}'{{/START_UP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SHUT_DOWN'>SHUT_DOWN: </label><div class='col-sm-8'><input id='{{id}}_SHUT_DOWN' class='form-control' type='text'{{#SHUT_DOWN}} value='{{SHUT_DOWN}}'{{/SHUT_DOWN}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ADSInstructionTypeCommitment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_START_UP").value; if ("" !== temp) obj["START_UP"] = temp;
                temp = document.getElementById (id + "_SHUT_DOWN").value; if ("" !== temp) obj["SHUT_DOWN"] = temp;

                return (obj);
            }
        }

        class SourceSinkType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SourceSinkType;
                if (null == bucket)
                   cim_data.SourceSinkType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SourceSinkType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SourceSinkType";
                base.parse_attribute (/<cim:SourceSinkType.Source\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Source", sub, context);
                base.parse_attribute (/<cim:SourceSinkType.Sink\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Sink", sub, context);
                base.parse_attribute (/<cim:SourceSinkType.Neither\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Neither", sub, context);
                let bucket = context.parsed.SourceSinkType;
                if (null == bucket)
                   context.parsed.SourceSinkType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "SourceSinkType", "Source", "Source", fields);
                base.export_attribute (obj, "SourceSinkType", "Sink", "Sink", fields);
                base.export_attribute (obj, "SourceSinkType", "Neither", "Neither", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SourceSinkType_collapse" aria-expanded="true" aria-controls="SourceSinkType_collapse" style="margin-left: 10px;">SourceSinkType</a></legend>
                    <div id="SourceSinkType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Source}}<div><b>Source</b>: {{Source}}</div>{{/Source}}
                    {{#Sink}}<div><b>Sink</b>: {{Sink}}</div>{{/Sink}}
                    {{#Neither}}<div><b>Neither</b>: {{Neither}}</div>{{/Neither}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SourceSinkType_collapse" aria-expanded="true" aria-controls="{{id}}_SourceSinkType_collapse" style="margin-left: 10px;">SourceSinkType</a></legend>
                    <div id="{{id}}_SourceSinkType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Source'>Source: </label><div class='col-sm-8'><input id='{{id}}_Source' class='form-control' type='text'{{#Source}} value='{{Source}}'{{/Source}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Sink'>Sink: </label><div class='col-sm-8'><input id='{{id}}_Sink' class='form-control' type='text'{{#Sink}} value='{{Sink}}'{{/Sink}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Neither'>Neither: </label><div class='col-sm-8'><input id='{{id}}_Neither' class='form-control' type='text'{{#Neither}} value='{{Neither}}'{{/Neither}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SourceSinkType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Source").value; if ("" !== temp) obj["Source"] = temp;
                temp = document.getElementById (id + "_Sink").value; if ("" !== temp) obj["Sink"] = temp;
                temp = document.getElementById (id + "_Neither").value; if ("" !== temp) obj["Neither"] = temp;

                return (obj);
            }
        }

        /**
         * ADD - add
         * DEL - delete
         *
         * CHG - change
         *
         */
        class MQSDELType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MQSDELType;
                if (null == bucket)
                   cim_data.MQSDELType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MQSDELType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MQSDELType";
                base.parse_attribute (/<cim:MQSDELType.ADD\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ADD", sub, context);
                base.parse_attribute (/<cim:MQSDELType.DEL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DEL", sub, context);
                base.parse_attribute (/<cim:MQSDELType.CHG\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CHG", sub, context);
                let bucket = context.parsed.MQSDELType;
                if (null == bucket)
                   context.parsed.MQSDELType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "MQSDELType", "ADD", "ADD", fields);
                base.export_attribute (obj, "MQSDELType", "DEL", "DEL", fields);
                base.export_attribute (obj, "MQSDELType", "CHG", "CHG", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MQSDELType_collapse" aria-expanded="true" aria-controls="MQSDELType_collapse" style="margin-left: 10px;">MQSDELType</a></legend>
                    <div id="MQSDELType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#ADD}}<div><b>ADD</b>: {{ADD}}</div>{{/ADD}}
                    {{#DEL}}<div><b>DEL</b>: {{DEL}}</div>{{/DEL}}
                    {{#CHG}}<div><b>CHG</b>: {{CHG}}</div>{{/CHG}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MQSDELType_collapse" aria-expanded="true" aria-controls="{{id}}_MQSDELType_collapse" style="margin-left: 10px;">MQSDELType</a></legend>
                    <div id="{{id}}_MQSDELType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ADD'>ADD: </label><div class='col-sm-8'><input id='{{id}}_ADD' class='form-control' type='text'{{#ADD}} value='{{ADD}}'{{/ADD}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DEL'>DEL: </label><div class='col-sm-8'><input id='{{id}}_DEL' class='form-control' type='text'{{#DEL}} value='{{DEL}}'{{/DEL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CHG'>CHG: </label><div class='col-sm-8'><input id='{{id}}_CHG' class='form-control' type='text'{{#CHG}} value='{{CHG}}'{{/CHG}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MQSDELType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ADD").value; if ("" !== temp) obj["ADD"] = temp;
                temp = document.getElementById (id + "_DEL").value; if ("" !== temp) obj["DEL"] = temp;
                temp = document.getElementById (id + "_CHG").value; if ("" !== temp) obj["CHG"] = temp;

                return (obj);
            }
        }

        /**
         * organization code
         *
         */
        class OrganisationCode extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OrganisationCode;
                if (null == bucket)
                   cim_data.OrganisationCode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OrganisationCode[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OrganisationCode";
                base.parse_attribute (/<cim:OrganisationCode.BILL_TO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BILL_TO", sub, context);
                base.parse_attribute (/<cim:OrganisationCode.PAY_TO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PAY_TO", sub, context);
                base.parse_attribute (/<cim:OrganisationCode.SOLD_TO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SOLD_TO", sub, context);
                base.parse_attribute (/<cim:OrganisationCode.PROVIDED_BY\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PROVIDED_BY", sub, context);
                let bucket = context.parsed.OrganisationCode;
                if (null == bucket)
                   context.parsed.OrganisationCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "OrganisationCode", "BILL_TO", "BILL_TO", fields);
                base.export_attribute (obj, "OrganisationCode", "PAY_TO", "PAY_TO", fields);
                base.export_attribute (obj, "OrganisationCode", "SOLD_TO", "SOLD_TO", fields);
                base.export_attribute (obj, "OrganisationCode", "PROVIDED_BY", "PROVIDED_BY", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OrganisationCode_collapse" aria-expanded="true" aria-controls="OrganisationCode_collapse" style="margin-left: 10px;">OrganisationCode</a></legend>
                    <div id="OrganisationCode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#BILL_TO}}<div><b>BILL_TO</b>: {{BILL_TO}}</div>{{/BILL_TO}}
                    {{#PAY_TO}}<div><b>PAY_TO</b>: {{PAY_TO}}</div>{{/PAY_TO}}
                    {{#SOLD_TO}}<div><b>SOLD_TO</b>: {{SOLD_TO}}</div>{{/SOLD_TO}}
                    {{#PROVIDED_BY}}<div><b>PROVIDED_BY</b>: {{PROVIDED_BY}}</div>{{/PROVIDED_BY}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OrganisationCode_collapse" aria-expanded="true" aria-controls="{{id}}_OrganisationCode_collapse" style="margin-left: 10px;">OrganisationCode</a></legend>
                    <div id="{{id}}_OrganisationCode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BILL_TO'>BILL_TO: </label><div class='col-sm-8'><input id='{{id}}_BILL_TO' class='form-control' type='text'{{#BILL_TO}} value='{{BILL_TO}}'{{/BILL_TO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PAY_TO'>PAY_TO: </label><div class='col-sm-8'><input id='{{id}}_PAY_TO' class='form-control' type='text'{{#PAY_TO}} value='{{PAY_TO}}'{{/PAY_TO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SOLD_TO'>SOLD_TO: </label><div class='col-sm-8'><input id='{{id}}_SOLD_TO' class='form-control' type='text'{{#SOLD_TO}} value='{{SOLD_TO}}'{{/SOLD_TO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PROVIDED_BY'>PROVIDED_BY: </label><div class='col-sm-8'><input id='{{id}}_PROVIDED_BY' class='form-control' type='text'{{#PROVIDED_BY}} value='{{PROVIDED_BY}}'{{/PROVIDED_BY}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OrganisationCode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_BILL_TO").value; if ("" !== temp) obj["BILL_TO"] = temp;
                temp = document.getElementById (id + "_PAY_TO").value; if ("" !== temp) obj["PAY_TO"] = temp;
                temp = document.getElementById (id + "_SOLD_TO").value; if ("" !== temp) obj["SOLD_TO"] = temp;
                temp = document.getElementById (id + "_PROVIDED_BY").value; if ("" !== temp) obj["PROVIDED_BY"] = temp;

                return (obj);
            }
        }

        class DAMMarketType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DAMMarketType;
                if (null == bucket)
                   cim_data.DAMMarketType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DAMMarketType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DAMMarketType";
                base.parse_attribute (/<cim:DAMMarketType.DAM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DAM", sub, context);
                let bucket = context.parsed.DAMMarketType;
                if (null == bucket)
                   context.parsed.DAMMarketType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "DAMMarketType", "DAM", "DAM", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DAMMarketType_collapse" aria-expanded="true" aria-controls="DAMMarketType_collapse" style="margin-left: 10px;">DAMMarketType</a></legend>
                    <div id="DAMMarketType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#DAM}}<div><b>DAM</b>: {{DAM}}</div>{{/DAM}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DAMMarketType_collapse" aria-expanded="true" aria-controls="{{id}}_DAMMarketType_collapse" style="margin-left: 10px;">DAMMarketType</a></legend>
                    <div id="{{id}}_DAMMarketType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DAM'>DAM: </label><div class='col-sm-8'><input id='{{id}}_DAM' class='form-control' type='text'{{#DAM}} value='{{DAM}}'{{/DAM}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DAMMarketType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_DAM").value; if ("" !== temp) obj["DAM"] = temp;

                return (obj);
            }
        }

        class UOMType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.UOMType;
                if (null == bucket)
                   cim_data.UOMType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UOMType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "UOMType";
                base.parse_attribute (/<cim:UOMType.MW\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MW", sub, context);
                base.parse_attribute (/<cim:UOMType.MWh\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MWh", sub, context);
                base.parse_attribute (/<cim:UOMType.US$\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "US$", sub, context);
                base.parse_attribute (/<cim:UOMType.%\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "%", sub, context);
                base.parse_attribute (/<cim:UOMType.INTEGER\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "INTEGER", sub, context);
                base.parse_attribute (/<cim:UOMType.FLAG\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FLAG", sub, context);
                base.parse_attribute (/<cim:UOMType.$\/mmBTU\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "$/mmBTU", sub, context);
                base.parse_attribute (/<cim:UOMType.$\/lb\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "$/lb", sub, context);
                base.parse_attribute (/<cim:UOMType.US$\/MW\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "US$/MW", sub, context);
                base.parse_attribute (/<cim:UOMType.US$\/MWh\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "US$/MWh", sub, context);
                base.parse_attribute (/<cim:UOMType.FACTOR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FACTOR", sub, context);
                let bucket = context.parsed.UOMType;
                if (null == bucket)
                   context.parsed.UOMType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "UOMType", "MW", "MW", fields);
                base.export_attribute (obj, "UOMType", "MWh", "MWh", fields);
                base.export_attribute (obj, "UOMType", "US$", "US$", fields);
                base.export_attribute (obj, "UOMType", "%", "%", fields);
                base.export_attribute (obj, "UOMType", "INTEGER", "INTEGER", fields);
                base.export_attribute (obj, "UOMType", "FLAG", "FLAG", fields);
                base.export_attribute (obj, "UOMType", "$/mmBTU", "$\/mmBTU", fields);
                base.export_attribute (obj, "UOMType", "$/lb", "$\/lb", fields);
                base.export_attribute (obj, "UOMType", "US$/MW", "US$\/MW", fields);
                base.export_attribute (obj, "UOMType", "US$/MWh", "US$\/MWh", fields);
                base.export_attribute (obj, "UOMType", "FACTOR", "FACTOR", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#UOMType_collapse" aria-expanded="true" aria-controls="UOMType_collapse" style="margin-left: 10px;">UOMType</a></legend>
                    <div id="UOMType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#MW}}<div><b>MW</b>: {{MW}}</div>{{/MW}}
                    {{#MWh}}<div><b>MWh</b>: {{MWh}}</div>{{/MWh}}
                    {{#US$}}<div><b>US$</b>: {{US$}}</div>{{/US$}}
                    {{#%}}<div><b>%</b>: {{%}}</div>{{/%}}
                    {{#INTEGER}}<div><b>INTEGER</b>: {{INTEGER}}</div>{{/INTEGER}}
                    {{#FLAG}}<div><b>FLAG</b>: {{FLAG}}</div>{{/FLAG}}
                    {{#$/mmBTU}}<div><b>$/mmBTU</b>: {{$/mmBTU}}</div>{{/$/mmBTU}}
                    {{#$/lb}}<div><b>$/lb</b>: {{$/lb}}</div>{{/$/lb}}
                    {{#US$/MW}}<div><b>US$/MW</b>: {{US$/MW}}</div>{{/US$/MW}}
                    {{#US$/MWh}}<div><b>US$/MWh</b>: {{US$/MWh}}</div>{{/US$/MWh}}
                    {{#FACTOR}}<div><b>FACTOR</b>: {{FACTOR}}</div>{{/FACTOR}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_UOMType_collapse" aria-expanded="true" aria-controls="{{id}}_UOMType_collapse" style="margin-left: 10px;">UOMType</a></legend>
                    <div id="{{id}}_UOMType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MW'>MW: </label><div class='col-sm-8'><input id='{{id}}_MW' class='form-control' type='text'{{#MW}} value='{{MW}}'{{/MW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MWh'>MWh: </label><div class='col-sm-8'><input id='{{id}}_MWh' class='form-control' type='text'{{#MWh}} value='{{MWh}}'{{/MWh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_US$'>US$: </label><div class='col-sm-8'><input id='{{id}}_US$' class='form-control' type='text'{{#US$}} value='{{US$}}'{{/US$}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_%'>%: </label><div class='col-sm-8'><input id='{{id}}_%' class='form-control' type='text'{{#%}} value='{{%}}'{{/%}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_INTEGER'>INTEGER: </label><div class='col-sm-8'><input id='{{id}}_INTEGER' class='form-control' type='text'{{#INTEGER}} value='{{INTEGER}}'{{/INTEGER}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FLAG'>FLAG: </label><div class='col-sm-8'><input id='{{id}}_FLAG' class='form-control' type='text'{{#FLAG}} value='{{FLAG}}'{{/FLAG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_$/mmBTU'>$/mmBTU: </label><div class='col-sm-8'><input id='{{id}}_$/mmBTU' class='form-control' type='text'{{#$/mmBTU}} value='{{$/mmBTU}}'{{/$/mmBTU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_$/lb'>$/lb: </label><div class='col-sm-8'><input id='{{id}}_$/lb' class='form-control' type='text'{{#$/lb}} value='{{$/lb}}'{{/$/lb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_US$/MW'>US$/MW: </label><div class='col-sm-8'><input id='{{id}}_US$/MW' class='form-control' type='text'{{#US$/MW}} value='{{US$/MW}}'{{/US$/MW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_US$/MWh'>US$/MWh: </label><div class='col-sm-8'><input id='{{id}}_US$/MWh' class='form-control' type='text'{{#US$/MWh}} value='{{US$/MWh}}'{{/US$/MWh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FACTOR'>FACTOR: </label><div class='col-sm-8'><input id='{{id}}_FACTOR' class='form-control' type='text'{{#FACTOR}} value='{{FACTOR}}'{{/FACTOR}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "UOMType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MW").value; if ("" !== temp) obj["MW"] = temp;
                temp = document.getElementById (id + "_MWh").value; if ("" !== temp) obj["MWh"] = temp;
                temp = document.getElementById (id + "_US$").value; if ("" !== temp) obj["US$"] = temp;
                temp = document.getElementById (id + "_%").value; if ("" !== temp) obj["%"] = temp;
                temp = document.getElementById (id + "_INTEGER").value; if ("" !== temp) obj["INTEGER"] = temp;
                temp = document.getElementById (id + "_FLAG").value; if ("" !== temp) obj["FLAG"] = temp;
                temp = document.getElementById (id + "_$/mmBTU").value; if ("" !== temp) obj["$/mmBTU"] = temp;
                temp = document.getElementById (id + "_$/lb").value; if ("" !== temp) obj["$/lb"] = temp;
                temp = document.getElementById (id + "_US$/MW").value; if ("" !== temp) obj["US$/MW"] = temp;
                temp = document.getElementById (id + "_US$/MWh").value; if ("" !== temp) obj["US$/MWh"] = temp;
                temp = document.getElementById (id + "_FACTOR").value; if ("" !== temp) obj["FACTOR"] = temp;

                return (obj);
            }
        }

        class ResourceCertificationCategory extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ResourceCertificationCategory;
                if (null == bucket)
                   cim_data.ResourceCertificationCategory = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceCertificationCategory[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceCertificationCategory";
                base.parse_attribute (/<cim:ResourceCertificationCategory.DAM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DAM", sub, context);
                base.parse_attribute (/<cim:ResourceCertificationCategory.RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTM", sub, context);
                base.parse_attribute (/<cim:ResourceCertificationCategory.RC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RC", sub, context);
                base.parse_attribute (/<cim:ResourceCertificationCategory.GT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GT", sub, context);
                let bucket = context.parsed.ResourceCertificationCategory;
                if (null == bucket)
                   context.parsed.ResourceCertificationCategory = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "ResourceCertificationCategory", "DAM", "DAM", fields);
                base.export_attribute (obj, "ResourceCertificationCategory", "RTM", "RTM", fields);
                base.export_attribute (obj, "ResourceCertificationCategory", "RC", "RC", fields);
                base.export_attribute (obj, "ResourceCertificationCategory", "GT", "GT", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ResourceCertificationCategory_collapse" aria-expanded="true" aria-controls="ResourceCertificationCategory_collapse" style="margin-left: 10px;">ResourceCertificationCategory</a></legend>
                    <div id="ResourceCertificationCategory_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#DAM}}<div><b>DAM</b>: {{DAM}}</div>{{/DAM}}
                    {{#RTM}}<div><b>RTM</b>: {{RTM}}</div>{{/RTM}}
                    {{#RC}}<div><b>RC</b>: {{RC}}</div>{{/RC}}
                    {{#GT}}<div><b>GT</b>: {{GT}}</div>{{/GT}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ResourceCertificationCategory_collapse" aria-expanded="true" aria-controls="{{id}}_ResourceCertificationCategory_collapse" style="margin-left: 10px;">ResourceCertificationCategory</a></legend>
                    <div id="{{id}}_ResourceCertificationCategory_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DAM'>DAM: </label><div class='col-sm-8'><input id='{{id}}_DAM' class='form-control' type='text'{{#DAM}} value='{{DAM}}'{{/DAM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTM'>RTM: </label><div class='col-sm-8'><input id='{{id}}_RTM' class='form-control' type='text'{{#RTM}} value='{{RTM}}'{{/RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RC'>RC: </label><div class='col-sm-8'><input id='{{id}}_RC' class='form-control' type='text'{{#RC}} value='{{RC}}'{{/RC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GT'>GT: </label><div class='col-sm-8'><input id='{{id}}_GT' class='form-control' type='text'{{#GT}} value='{{GT}}'{{/GT}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ResourceCertificationCategory" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_DAM").value; if ("" !== temp) obj["DAM"] = temp;
                temp = document.getElementById (id + "_RTM").value; if ("" !== temp) obj["RTM"] = temp;
                temp = document.getElementById (id + "_RC").value; if ("" !== temp) obj["RC"] = temp;
                temp = document.getElementById (id + "_GT").value; if ("" !== temp) obj["GT"] = temp;

                return (obj);
            }
        }

        class SegmentCurveType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SegmentCurveType;
                if (null == bucket)
                   cim_data.SegmentCurveType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SegmentCurveType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SegmentCurveType";
                base.parse_attribute (/<cim:SegmentCurveType.COST\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "COST", sub, context);
                base.parse_attribute (/<cim:SegmentCurveType.CONSULTATIVE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CONSULTATIVE", sub, context);
                let bucket = context.parsed.SegmentCurveType;
                if (null == bucket)
                   context.parsed.SegmentCurveType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "SegmentCurveType", "COST", "COST", fields);
                base.export_attribute (obj, "SegmentCurveType", "CONSULTATIVE", "CONSULTATIVE", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SegmentCurveType_collapse" aria-expanded="true" aria-controls="SegmentCurveType_collapse" style="margin-left: 10px;">SegmentCurveType</a></legend>
                    <div id="SegmentCurveType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#COST}}<div><b>COST</b>: {{COST}}</div>{{/COST}}
                    {{#CONSULTATIVE}}<div><b>CONSULTATIVE</b>: {{CONSULTATIVE}}</div>{{/CONSULTATIVE}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SegmentCurveType_collapse" aria-expanded="true" aria-controls="{{id}}_SegmentCurveType_collapse" style="margin-left: 10px;">SegmentCurveType</a></legend>
                    <div id="{{id}}_SegmentCurveType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_COST'>COST: </label><div class='col-sm-8'><input id='{{id}}_COST' class='form-control' type='text'{{#COST}} value='{{COST}}'{{/COST}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CONSULTATIVE'>CONSULTATIVE: </label><div class='col-sm-8'><input id='{{id}}_CONSULTATIVE' class='form-control' type='text'{{#CONSULTATIVE}} value='{{CONSULTATIVE}}'{{/CONSULTATIVE}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SegmentCurveType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_COST").value; if ("" !== temp) obj["COST"] = temp;
                temp = document.getElementById (id + "_CONSULTATIVE").value; if ("" !== temp) obj["CONSULTATIVE"] = temp;

                return (obj);
            }
        }

        class SpinningEventNameType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SpinningEventNameType;
                if (null == bucket)
                   cim_data.SpinningEventNameType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SpinningEventNameType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SpinningEventNameType";
                base.parse_attribute (/<cim:SpinningEventNameType.EASTERN\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EASTERN", sub, context);
                base.parse_attribute (/<cim:SpinningEventNameType.RFC-SR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RFC-SR", sub, context);
                base.parse_attribute (/<cim:SpinningEventNameType.SOUTH-S\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SOUTH-S", sub, context);
                base.parse_attribute (/<cim:SpinningEventNameType.PJM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PJM", sub, context);
                let bucket = context.parsed.SpinningEventNameType;
                if (null == bucket)
                   context.parsed.SpinningEventNameType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "SpinningEventNameType", "EASTERN", "EASTERN", fields);
                base.export_attribute (obj, "SpinningEventNameType", "RFC-SR", "RFC-SR", fields);
                base.export_attribute (obj, "SpinningEventNameType", "SOUTH-S", "SOUTH-S", fields);
                base.export_attribute (obj, "SpinningEventNameType", "PJM", "PJM", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SpinningEventNameType_collapse" aria-expanded="true" aria-controls="SpinningEventNameType_collapse" style="margin-left: 10px;">SpinningEventNameType</a></legend>
                    <div id="SpinningEventNameType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#EASTERN}}<div><b>EASTERN</b>: {{EASTERN}}</div>{{/EASTERN}}
                    {{#RFC-SR}}<div><b>RFC-SR</b>: {{RFC-SR}}</div>{{/RFC-SR}}
                    {{#SOUTH-S}}<div><b>SOUTH-S</b>: {{SOUTH-S}}</div>{{/SOUTH-S}}
                    {{#PJM}}<div><b>PJM</b>: {{PJM}}</div>{{/PJM}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SpinningEventNameType_collapse" aria-expanded="true" aria-controls="{{id}}_SpinningEventNameType_collapse" style="margin-left: 10px;">SpinningEventNameType</a></legend>
                    <div id="{{id}}_SpinningEventNameType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EASTERN'>EASTERN: </label><div class='col-sm-8'><input id='{{id}}_EASTERN' class='form-control' type='text'{{#EASTERN}} value='{{EASTERN}}'{{/EASTERN}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RFC-SR'>RFC-SR: </label><div class='col-sm-8'><input id='{{id}}_RFC-SR' class='form-control' type='text'{{#RFC-SR}} value='{{RFC-SR}}'{{/RFC-SR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SOUTH-S'>SOUTH-S: </label><div class='col-sm-8'><input id='{{id}}_SOUTH-S' class='form-control' type='text'{{#SOUTH-S}} value='{{SOUTH-S}}'{{/SOUTH-S}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PJM'>PJM: </label><div class='col-sm-8'><input id='{{id}}_PJM' class='form-control' type='text'{{#PJM}} value='{{PJM}}'{{/PJM}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SpinningEventNameType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_EASTERN").value; if ("" !== temp) obj["EASTERN"] = temp;
                temp = document.getElementById (id + "_RFC-SR").value; if ("" !== temp) obj["RFC-SR"] = temp;
                temp = document.getElementById (id + "_SOUTH-S").value; if ("" !== temp) obj["SOUTH-S"] = temp;
                temp = document.getElementById (id + "_PJM").value; if ("" !== temp) obj["PJM"] = temp;

                return (obj);
            }
        }

        /**
         * Valid Enumerations:
         * 1) DASE Day Ahead Scheduled Energy;
         * 2) DSSE Day Ahead Incremental Self Schedule Energy;
         * 3) DABE Day Ahead Incremental Energy Bid Awarded Energy;
         * 4) OE Optimal Energy;
         * 5) HASE Hour ahead pre-dispatched schedule energy;
         * 6) SRE Standard Ramping Energy;
         * 7) RED Ramping Energy Deviation;
         * 8) EDE Exceptional Dispatch energy;
         * 9) RMRE RMR Energy;
         * 10) MSSLFE MSSLF Energy;
         * 11) RE Residual Energy;
         * 12) MLE Minimum Load Energy;
         * 13) SE SLIC Energy;
         * 14) RTSSE Real time self scheduled energy;
         * 15) DMLE Day ahead minimum load energy;
         * 16) PE Pumping Energy;
         * 17) TEE Total Expected Energy;
         *
         * 18) DAPE - Day-Ahead Pumping Energy;
         *
         */
        class EnergyTypeCode extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnergyTypeCode;
                if (null == bucket)
                   cim_data.EnergyTypeCode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergyTypeCode[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyTypeCode";
                base.parse_attribute (/<cim:EnergyTypeCode.DASE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DASE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.DSSE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DSSE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.DABE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DABE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.OE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.HASE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HASE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.SRE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SRE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.RED\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RED", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.EDE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EDE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.RMRE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMRE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.MSSLFE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MSSLFE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.RE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.MLE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MLE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.SE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.RTSSE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTSSE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.DMLE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DMLE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.PE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.TEE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TEE", sub, context);
                base.parse_attribute (/<cim:EnergyTypeCode.DAPE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DAPE", sub, context);
                let bucket = context.parsed.EnergyTypeCode;
                if (null == bucket)
                   context.parsed.EnergyTypeCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "EnergyTypeCode", "DASE", "DASE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "DSSE", "DSSE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "DABE", "DABE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "OE", "OE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "HASE", "HASE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "SRE", "SRE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "RED", "RED", fields);
                base.export_attribute (obj, "EnergyTypeCode", "EDE", "EDE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "RMRE", "RMRE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "MSSLFE", "MSSLFE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "RE", "RE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "MLE", "MLE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "SE", "SE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "RTSSE", "RTSSE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "DMLE", "DMLE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "PE", "PE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "TEE", "TEE", fields);
                base.export_attribute (obj, "EnergyTypeCode", "DAPE", "DAPE", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergyTypeCode_collapse" aria-expanded="true" aria-controls="EnergyTypeCode_collapse" style="margin-left: 10px;">EnergyTypeCode</a></legend>
                    <div id="EnergyTypeCode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#DASE}}<div><b>DASE</b>: {{DASE}}</div>{{/DASE}}
                    {{#DSSE}}<div><b>DSSE</b>: {{DSSE}}</div>{{/DSSE}}
                    {{#DABE}}<div><b>DABE</b>: {{DABE}}</div>{{/DABE}}
                    {{#OE}}<div><b>OE</b>: {{OE}}</div>{{/OE}}
                    {{#HASE}}<div><b>HASE</b>: {{HASE}}</div>{{/HASE}}
                    {{#SRE}}<div><b>SRE</b>: {{SRE}}</div>{{/SRE}}
                    {{#RED}}<div><b>RED</b>: {{RED}}</div>{{/RED}}
                    {{#EDE}}<div><b>EDE</b>: {{EDE}}</div>{{/EDE}}
                    {{#RMRE}}<div><b>RMRE</b>: {{RMRE}}</div>{{/RMRE}}
                    {{#MSSLFE}}<div><b>MSSLFE</b>: {{MSSLFE}}</div>{{/MSSLFE}}
                    {{#RE}}<div><b>RE</b>: {{RE}}</div>{{/RE}}
                    {{#MLE}}<div><b>MLE</b>: {{MLE}}</div>{{/MLE}}
                    {{#SE}}<div><b>SE</b>: {{SE}}</div>{{/SE}}
                    {{#RTSSE}}<div><b>RTSSE</b>: {{RTSSE}}</div>{{/RTSSE}}
                    {{#DMLE}}<div><b>DMLE</b>: {{DMLE}}</div>{{/DMLE}}
                    {{#PE}}<div><b>PE</b>: {{PE}}</div>{{/PE}}
                    {{#TEE}}<div><b>TEE</b>: {{TEE}}</div>{{/TEE}}
                    {{#DAPE}}<div><b>DAPE</b>: {{DAPE}}</div>{{/DAPE}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergyTypeCode_collapse" aria-expanded="true" aria-controls="{{id}}_EnergyTypeCode_collapse" style="margin-left: 10px;">EnergyTypeCode</a></legend>
                    <div id="{{id}}_EnergyTypeCode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DASE'>DASE: </label><div class='col-sm-8'><input id='{{id}}_DASE' class='form-control' type='text'{{#DASE}} value='{{DASE}}'{{/DASE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DSSE'>DSSE: </label><div class='col-sm-8'><input id='{{id}}_DSSE' class='form-control' type='text'{{#DSSE}} value='{{DSSE}}'{{/DSSE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DABE'>DABE: </label><div class='col-sm-8'><input id='{{id}}_DABE' class='form-control' type='text'{{#DABE}} value='{{DABE}}'{{/DABE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OE'>OE: </label><div class='col-sm-8'><input id='{{id}}_OE' class='form-control' type='text'{{#OE}} value='{{OE}}'{{/OE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HASE'>HASE: </label><div class='col-sm-8'><input id='{{id}}_HASE' class='form-control' type='text'{{#HASE}} value='{{HASE}}'{{/HASE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SRE'>SRE: </label><div class='col-sm-8'><input id='{{id}}_SRE' class='form-control' type='text'{{#SRE}} value='{{SRE}}'{{/SRE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RED'>RED: </label><div class='col-sm-8'><input id='{{id}}_RED' class='form-control' type='text'{{#RED}} value='{{RED}}'{{/RED}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EDE'>EDE: </label><div class='col-sm-8'><input id='{{id}}_EDE' class='form-control' type='text'{{#EDE}} value='{{EDE}}'{{/EDE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMRE'>RMRE: </label><div class='col-sm-8'><input id='{{id}}_RMRE' class='form-control' type='text'{{#RMRE}} value='{{RMRE}}'{{/RMRE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MSSLFE'>MSSLFE: </label><div class='col-sm-8'><input id='{{id}}_MSSLFE' class='form-control' type='text'{{#MSSLFE}} value='{{MSSLFE}}'{{/MSSLFE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RE'>RE: </label><div class='col-sm-8'><input id='{{id}}_RE' class='form-control' type='text'{{#RE}} value='{{RE}}'{{/RE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MLE'>MLE: </label><div class='col-sm-8'><input id='{{id}}_MLE' class='form-control' type='text'{{#MLE}} value='{{MLE}}'{{/MLE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SE'>SE: </label><div class='col-sm-8'><input id='{{id}}_SE' class='form-control' type='text'{{#SE}} value='{{SE}}'{{/SE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTSSE'>RTSSE: </label><div class='col-sm-8'><input id='{{id}}_RTSSE' class='form-control' type='text'{{#RTSSE}} value='{{RTSSE}}'{{/RTSSE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DMLE'>DMLE: </label><div class='col-sm-8'><input id='{{id}}_DMLE' class='form-control' type='text'{{#DMLE}} value='{{DMLE}}'{{/DMLE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PE'>PE: </label><div class='col-sm-8'><input id='{{id}}_PE' class='form-control' type='text'{{#PE}} value='{{PE}}'{{/PE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TEE'>TEE: </label><div class='col-sm-8'><input id='{{id}}_TEE' class='form-control' type='text'{{#TEE}} value='{{TEE}}'{{/TEE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DAPE'>DAPE: </label><div class='col-sm-8'><input id='{{id}}_DAPE' class='form-control' type='text'{{#DAPE}} value='{{DAPE}}'{{/DAPE}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnergyTypeCode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_DASE").value; if ("" !== temp) obj["DASE"] = temp;
                temp = document.getElementById (id + "_DSSE").value; if ("" !== temp) obj["DSSE"] = temp;
                temp = document.getElementById (id + "_DABE").value; if ("" !== temp) obj["DABE"] = temp;
                temp = document.getElementById (id + "_OE").value; if ("" !== temp) obj["OE"] = temp;
                temp = document.getElementById (id + "_HASE").value; if ("" !== temp) obj["HASE"] = temp;
                temp = document.getElementById (id + "_SRE").value; if ("" !== temp) obj["SRE"] = temp;
                temp = document.getElementById (id + "_RED").value; if ("" !== temp) obj["RED"] = temp;
                temp = document.getElementById (id + "_EDE").value; if ("" !== temp) obj["EDE"] = temp;
                temp = document.getElementById (id + "_RMRE").value; if ("" !== temp) obj["RMRE"] = temp;
                temp = document.getElementById (id + "_MSSLFE").value; if ("" !== temp) obj["MSSLFE"] = temp;
                temp = document.getElementById (id + "_RE").value; if ("" !== temp) obj["RE"] = temp;
                temp = document.getElementById (id + "_MLE").value; if ("" !== temp) obj["MLE"] = temp;
                temp = document.getElementById (id + "_SE").value; if ("" !== temp) obj["SE"] = temp;
                temp = document.getElementById (id + "_RTSSE").value; if ("" !== temp) obj["RTSSE"] = temp;
                temp = document.getElementById (id + "_DMLE").value; if ("" !== temp) obj["DMLE"] = temp;
                temp = document.getElementById (id + "_PE").value; if ("" !== temp) obj["PE"] = temp;
                temp = document.getElementById (id + "_TEE").value; if ("" !== temp) obj["TEE"] = temp;
                temp = document.getElementById (id + "_DAPE").value; if ("" !== temp) obj["DAPE"] = temp;

                return (obj);
            }
        }

        class OASISMeasType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OASISMeasType;
                if (null == bucket)
                   cim_data.OASISMeasType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OASISMeasType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISMeasType";
                base.parse_attribute (/<cim:OASISMeasType.MW\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MW", sub, context);
                base.parse_attribute (/<cim:OASISMeasType.MWh\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MWh", sub, context);
                base.parse_attribute (/<cim:OASISMeasType.US$\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "US$", sub, context);
                base.parse_attribute (/<cim:OASISMeasType.%\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "%", sub, context);
                base.parse_attribute (/<cim:OASISMeasType.INTEGER\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "INTEGER", sub, context);
                base.parse_attribute (/<cim:OASISMeasType.FLAG\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FLAG", sub, context);
                base.parse_attribute (/<cim:OASISMeasType.US$\/MW\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "US$/MW", sub, context);
                base.parse_attribute (/<cim:OASISMeasType.US$\/MWh\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "US$/MWh", sub, context);
                base.parse_attribute (/<cim:OASISMeasType.FACTOR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FACTOR", sub, context);
                let bucket = context.parsed.OASISMeasType;
                if (null == bucket)
                   context.parsed.OASISMeasType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "OASISMeasType", "MW", "MW", fields);
                base.export_attribute (obj, "OASISMeasType", "MWh", "MWh", fields);
                base.export_attribute (obj, "OASISMeasType", "US$", "US$", fields);
                base.export_attribute (obj, "OASISMeasType", "%", "%", fields);
                base.export_attribute (obj, "OASISMeasType", "INTEGER", "INTEGER", fields);
                base.export_attribute (obj, "OASISMeasType", "FLAG", "FLAG", fields);
                base.export_attribute (obj, "OASISMeasType", "US$/MW", "US$\/MW", fields);
                base.export_attribute (obj, "OASISMeasType", "US$/MWh", "US$\/MWh", fields);
                base.export_attribute (obj, "OASISMeasType", "FACTOR", "FACTOR", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OASISMeasType_collapse" aria-expanded="true" aria-controls="OASISMeasType_collapse" style="margin-left: 10px;">OASISMeasType</a></legend>
                    <div id="OASISMeasType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#MW}}<div><b>MW</b>: {{MW}}</div>{{/MW}}
                    {{#MWh}}<div><b>MWh</b>: {{MWh}}</div>{{/MWh}}
                    {{#US$}}<div><b>US$</b>: {{US$}}</div>{{/US$}}
                    {{#%}}<div><b>%</b>: {{%}}</div>{{/%}}
                    {{#INTEGER}}<div><b>INTEGER</b>: {{INTEGER}}</div>{{/INTEGER}}
                    {{#FLAG}}<div><b>FLAG</b>: {{FLAG}}</div>{{/FLAG}}
                    {{#US$/MW}}<div><b>US$/MW</b>: {{US$/MW}}</div>{{/US$/MW}}
                    {{#US$/MWh}}<div><b>US$/MWh</b>: {{US$/MWh}}</div>{{/US$/MWh}}
                    {{#FACTOR}}<div><b>FACTOR</b>: {{FACTOR}}</div>{{/FACTOR}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OASISMeasType_collapse" aria-expanded="true" aria-controls="{{id}}_OASISMeasType_collapse" style="margin-left: 10px;">OASISMeasType</a></legend>
                    <div id="{{id}}_OASISMeasType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MW'>MW: </label><div class='col-sm-8'><input id='{{id}}_MW' class='form-control' type='text'{{#MW}} value='{{MW}}'{{/MW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MWh'>MWh: </label><div class='col-sm-8'><input id='{{id}}_MWh' class='form-control' type='text'{{#MWh}} value='{{MWh}}'{{/MWh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_US$'>US$: </label><div class='col-sm-8'><input id='{{id}}_US$' class='form-control' type='text'{{#US$}} value='{{US$}}'{{/US$}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_%'>%: </label><div class='col-sm-8'><input id='{{id}}_%' class='form-control' type='text'{{#%}} value='{{%}}'{{/%}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_INTEGER'>INTEGER: </label><div class='col-sm-8'><input id='{{id}}_INTEGER' class='form-control' type='text'{{#INTEGER}} value='{{INTEGER}}'{{/INTEGER}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FLAG'>FLAG: </label><div class='col-sm-8'><input id='{{id}}_FLAG' class='form-control' type='text'{{#FLAG}} value='{{FLAG}}'{{/FLAG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_US$/MW'>US$/MW: </label><div class='col-sm-8'><input id='{{id}}_US$/MW' class='form-control' type='text'{{#US$/MW}} value='{{US$/MW}}'{{/US$/MW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_US$/MWh'>US$/MWh: </label><div class='col-sm-8'><input id='{{id}}_US$/MWh' class='form-control' type='text'{{#US$/MWh}} value='{{US$/MWh}}'{{/US$/MWh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FACTOR'>FACTOR: </label><div class='col-sm-8'><input id='{{id}}_FACTOR' class='form-control' type='text'{{#FACTOR}} value='{{FACTOR}}'{{/FACTOR}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OASISMeasType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MW").value; if ("" !== temp) obj["MW"] = temp;
                temp = document.getElementById (id + "_MWh").value; if ("" !== temp) obj["MWh"] = temp;
                temp = document.getElementById (id + "_US$").value; if ("" !== temp) obj["US$"] = temp;
                temp = document.getElementById (id + "_%").value; if ("" !== temp) obj["%"] = temp;
                temp = document.getElementById (id + "_INTEGER").value; if ("" !== temp) obj["INTEGER"] = temp;
                temp = document.getElementById (id + "_FLAG").value; if ("" !== temp) obj["FLAG"] = temp;
                temp = document.getElementById (id + "_US$/MW").value; if ("" !== temp) obj["US$/MW"] = temp;
                temp = document.getElementById (id + "_US$/MWh").value; if ("" !== temp) obj["US$/MWh"] = temp;
                temp = document.getElementById (id + "_FACTOR").value; if ("" !== temp) obj["FACTOR"] = temp;

                return (obj);
            }
        }

        /**
         * RU - Regulation Up
         * RD - Regulation Down
         * SR - Spin Reserve
         * NR - Nonspin Reserve
         *
         * AS - Upward Ancillary Service
         *
         */
        class MarketProductTypeAsReq extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketProductTypeAsReq;
                if (null == bucket)
                   cim_data.MarketProductTypeAsReq = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketProductTypeAsReq[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketProductTypeAsReq";
                base.parse_attribute (/<cim:MarketProductTypeAsReq.RU\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RU", sub, context);
                base.parse_attribute (/<cim:MarketProductTypeAsReq.RD\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RD", sub, context);
                base.parse_attribute (/<cim:MarketProductTypeAsReq.SR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SR", sub, context);
                base.parse_attribute (/<cim:MarketProductTypeAsReq.NR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NR", sub, context);
                base.parse_attribute (/<cim:MarketProductTypeAsReq.AS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS", sub, context);
                let bucket = context.parsed.MarketProductTypeAsReq;
                if (null == bucket)
                   context.parsed.MarketProductTypeAsReq = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "MarketProductTypeAsReq", "RU", "RU", fields);
                base.export_attribute (obj, "MarketProductTypeAsReq", "RD", "RD", fields);
                base.export_attribute (obj, "MarketProductTypeAsReq", "SR", "SR", fields);
                base.export_attribute (obj, "MarketProductTypeAsReq", "NR", "NR", fields);
                base.export_attribute (obj, "MarketProductTypeAsReq", "AS", "AS", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketProductTypeAsReq_collapse" aria-expanded="true" aria-controls="MarketProductTypeAsReq_collapse" style="margin-left: 10px;">MarketProductTypeAsReq</a></legend>
                    <div id="MarketProductTypeAsReq_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#RU}}<div><b>RU</b>: {{RU}}</div>{{/RU}}
                    {{#RD}}<div><b>RD</b>: {{RD}}</div>{{/RD}}
                    {{#SR}}<div><b>SR</b>: {{SR}}</div>{{/SR}}
                    {{#NR}}<div><b>NR</b>: {{NR}}</div>{{/NR}}
                    {{#AS}}<div><b>AS</b>: {{AS}}</div>{{/AS}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketProductTypeAsReq_collapse" aria-expanded="true" aria-controls="{{id}}_MarketProductTypeAsReq_collapse" style="margin-left: 10px;">MarketProductTypeAsReq</a></legend>
                    <div id="{{id}}_MarketProductTypeAsReq_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RU'>RU: </label><div class='col-sm-8'><input id='{{id}}_RU' class='form-control' type='text'{{#RU}} value='{{RU}}'{{/RU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RD'>RD: </label><div class='col-sm-8'><input id='{{id}}_RD' class='form-control' type='text'{{#RD}} value='{{RD}}'{{/RD}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SR'>SR: </label><div class='col-sm-8'><input id='{{id}}_SR' class='form-control' type='text'{{#SR}} value='{{SR}}'{{/SR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NR'>NR: </label><div class='col-sm-8'><input id='{{id}}_NR' class='form-control' type='text'{{#NR}} value='{{NR}}'{{/NR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS'>AS: </label><div class='col-sm-8'><input id='{{id}}_AS' class='form-control' type='text'{{#AS}} value='{{AS}}'{{/AS}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketProductTypeAsReq" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RU").value; if ("" !== temp) obj["RU"] = temp;
                temp = document.getElementById (id + "_RD").value; if ("" !== temp) obj["RD"] = temp;
                temp = document.getElementById (id + "_SR").value; if ("" !== temp) obj["SR"] = temp;
                temp = document.getElementById (id + "_NR").value; if ("" !== temp) obj["NR"] = temp;
                temp = document.getElementById (id + "_AS").value; if ("" !== temp) obj["AS"] = temp;

                return (obj);
            }
        }

        class AlarmDisplayType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AlarmDisplayType;
                if (null == bucket)
                   cim_data.AlarmDisplayType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AlarmDisplayType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AlarmDisplayType";
                base.parse_attribute (/<cim:AlarmDisplayType.Disappear\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Disappear", sub, context);
                base.parse_attribute (/<cim:AlarmDisplayType.Appear\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Appear", sub, context);
                base.parse_attribute (/<cim:AlarmDisplayType.Fleeting\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Fleeting", sub, context);
                let bucket = context.parsed.AlarmDisplayType;
                if (null == bucket)
                   context.parsed.AlarmDisplayType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "AlarmDisplayType", "Disappear", "Disappear", fields);
                base.export_attribute (obj, "AlarmDisplayType", "Appear", "Appear", fields);
                base.export_attribute (obj, "AlarmDisplayType", "Fleeting", "Fleeting", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AlarmDisplayType_collapse" aria-expanded="true" aria-controls="AlarmDisplayType_collapse" style="margin-left: 10px;">AlarmDisplayType</a></legend>
                    <div id="AlarmDisplayType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Disappear}}<div><b>Disappear</b>: {{Disappear}}</div>{{/Disappear}}
                    {{#Appear}}<div><b>Appear</b>: {{Appear}}</div>{{/Appear}}
                    {{#Fleeting}}<div><b>Fleeting</b>: {{Fleeting}}</div>{{/Fleeting}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AlarmDisplayType_collapse" aria-expanded="true" aria-controls="{{id}}_AlarmDisplayType_collapse" style="margin-left: 10px;">AlarmDisplayType</a></legend>
                    <div id="{{id}}_AlarmDisplayType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Disappear'>Disappear: </label><div class='col-sm-8'><input id='{{id}}_Disappear' class='form-control' type='text'{{#Disappear}} value='{{Disappear}}'{{/Disappear}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Appear'>Appear: </label><div class='col-sm-8'><input id='{{id}}_Appear' class='form-control' type='text'{{#Appear}} value='{{Appear}}'{{/Appear}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Fleeting'>Fleeting: </label><div class='col-sm-8'><input id='{{id}}_Fleeting' class='form-control' type='text'{{#Fleeting}} value='{{Fleeting}}'{{/Fleeting}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AlarmDisplayType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Disappear").value; if ("" !== temp) obj["Disappear"] = temp;
                temp = document.getElementById (id + "_Appear").value; if ("" !== temp) obj["Appear"] = temp;
                temp = document.getElementById (id + "_Fleeting").value; if ("" !== temp) obj["Fleeting"] = temp;

                return (obj);
            }
        }

        class OASISIntervalType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OASISIntervalType;
                if (null == bucket)
                   cim_data.OASISIntervalType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OASISIntervalType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISIntervalType";
                base.parse_attribute (/<cim:OASISIntervalType.BEGINNING\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BEGINNING", sub, context);
                base.parse_attribute (/<cim:OASISIntervalType.ENDING\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENDING", sub, context);
                let bucket = context.parsed.OASISIntervalType;
                if (null == bucket)
                   context.parsed.OASISIntervalType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "OASISIntervalType", "BEGINNING", "BEGINNING", fields);
                base.export_attribute (obj, "OASISIntervalType", "ENDING", "ENDING", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OASISIntervalType_collapse" aria-expanded="true" aria-controls="OASISIntervalType_collapse" style="margin-left: 10px;">OASISIntervalType</a></legend>
                    <div id="OASISIntervalType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#BEGINNING}}<div><b>BEGINNING</b>: {{BEGINNING}}</div>{{/BEGINNING}}
                    {{#ENDING}}<div><b>ENDING</b>: {{ENDING}}</div>{{/ENDING}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OASISIntervalType_collapse" aria-expanded="true" aria-controls="{{id}}_OASISIntervalType_collapse" style="margin-left: 10px;">OASISIntervalType</a></legend>
                    <div id="{{id}}_OASISIntervalType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BEGINNING'>BEGINNING: </label><div class='col-sm-8'><input id='{{id}}_BEGINNING' class='form-control' type='text'{{#BEGINNING}} value='{{BEGINNING}}'{{/BEGINNING}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENDING'>ENDING: </label><div class='col-sm-8'><input id='{{id}}_ENDING' class='form-control' type='text'{{#ENDING}} value='{{ENDING}}'{{/ENDING}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OASISIntervalType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_BEGINNING").value; if ("" !== temp) obj["BEGINNING"] = temp;
                temp = document.getElementById (id + "_ENDING").value; if ("" !== temp) obj["ENDING"] = temp;

                return (obj);
            }
        }

        /**
         * S - Scheduling
         *
         * P - Pricing
         *
         */
        class runTypeCAISO extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.runTypeCAISO;
                if (null == bucket)
                   cim_data.runTypeCAISO = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.runTypeCAISO[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "runTypeCAISO";
                base.parse_attribute (/<cim:runTypeCAISO.S\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "S", sub, context);
                base.parse_attribute (/<cim:runTypeCAISO.P\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "P", sub, context);
                let bucket = context.parsed.runTypeCAISO;
                if (null == bucket)
                   context.parsed.runTypeCAISO = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "runTypeCAISO", "S", "S", fields);
                base.export_attribute (obj, "runTypeCAISO", "P", "P", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#runTypeCAISO_collapse" aria-expanded="true" aria-controls="runTypeCAISO_collapse" style="margin-left: 10px;">runTypeCAISO</a></legend>
                    <div id="runTypeCAISO_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#S}}<div><b>S</b>: {{S}}</div>{{/S}}
                    {{#P}}<div><b>P</b>: {{P}}</div>{{/P}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_runTypeCAISO_collapse" aria-expanded="true" aria-controls="{{id}}_runTypeCAISO_collapse" style="margin-left: 10px;">runTypeCAISO</a></legend>
                    <div id="{{id}}_runTypeCAISO_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_S'>S: </label><div class='col-sm-8'><input id='{{id}}_S' class='form-control' type='text'{{#S}} value='{{S}}'{{/S}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_P'>P: </label><div class='col-sm-8'><input id='{{id}}_P' class='form-control' type='text'{{#P}} value='{{P}}'{{/P}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "runTypeCAISO" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_S").value; if ("" !== temp) obj["S"] = temp;
                temp = document.getElementById (id + "_P").value; if ("" !== temp) obj["P"] = temp;

                return (obj);
            }
        }

        /**
         * MP
         *
         * ISO
         *
         */
        class RequestorRmrTest extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RequestorRmrTest;
                if (null == bucket)
                   cim_data.RequestorRmrTest = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RequestorRmrTest[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RequestorRmrTest";
                base.parse_attribute (/<cim:RequestorRmrTest.MP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MP", sub, context);
                base.parse_attribute (/<cim:RequestorRmrTest.ISO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ISO", sub, context);
                let bucket = context.parsed.RequestorRmrTest;
                if (null == bucket)
                   context.parsed.RequestorRmrTest = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "RequestorRmrTest", "MP", "MP", fields);
                base.export_attribute (obj, "RequestorRmrTest", "ISO", "ISO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RequestorRmrTest_collapse" aria-expanded="true" aria-controls="RequestorRmrTest_collapse" style="margin-left: 10px;">RequestorRmrTest</a></legend>
                    <div id="RequestorRmrTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#MP}}<div><b>MP</b>: {{MP}}</div>{{/MP}}
                    {{#ISO}}<div><b>ISO</b>: {{ISO}}</div>{{/ISO}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RequestorRmrTest_collapse" aria-expanded="true" aria-controls="{{id}}_RequestorRmrTest_collapse" style="margin-left: 10px;">RequestorRmrTest</a></legend>
                    <div id="{{id}}_RequestorRmrTest_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MP'>MP: </label><div class='col-sm-8'><input id='{{id}}_MP' class='form-control' type='text'{{#MP}} value='{{MP}}'{{/MP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ISO'>ISO: </label><div class='col-sm-8'><input id='{{id}}_ISO' class='form-control' type='text'{{#ISO}} value='{{ISO}}'{{/ISO}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RequestorRmrTest" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MP").value; if ("" !== temp) obj["MP"] = temp;
                temp = document.getElementById (id + "_ISO").value; if ("" !== temp) obj["ISO"] = temp;

                return (obj);
            }
        }

        class OASISBidReportType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OASISBidReportType;
                if (null == bucket)
                   cim_data.OASISBidReportType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OASISBidReportType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISBidReportType";
                base.parse_attribute (/<cim:OASISBidReportType.BIDS_PUBLIC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BIDS_PUBLIC", sub, context);
                let bucket = context.parsed.OASISBidReportType;
                if (null == bucket)
                   context.parsed.OASISBidReportType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "OASISBidReportType", "BIDS_PUBLIC", "BIDS_PUBLIC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OASISBidReportType_collapse" aria-expanded="true" aria-controls="OASISBidReportType_collapse" style="margin-left: 10px;">OASISBidReportType</a></legend>
                    <div id="OASISBidReportType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#BIDS_PUBLIC}}<div><b>BIDS_PUBLIC</b>: {{BIDS_PUBLIC}}</div>{{/BIDS_PUBLIC}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OASISBidReportType_collapse" aria-expanded="true" aria-controls="{{id}}_OASISBidReportType_collapse" style="margin-left: 10px;">OASISBidReportType</a></legend>
                    <div id="{{id}}_OASISBidReportType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BIDS_PUBLIC'>BIDS_PUBLIC: </label><div class='col-sm-8'><input id='{{id}}_BIDS_PUBLIC' class='form-control' type='text'{{#BIDS_PUBLIC}} value='{{BIDS_PUBLIC}}'{{/BIDS_PUBLIC}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OASISBidReportType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_BIDS_PUBLIC").value; if ("" !== temp) obj["BIDS_PUBLIC"] = temp;

                return (obj);
            }
        }

        class BidPriceCapType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BidPriceCapType;
                if (null == bucket)
                   cim_data.BidPriceCapType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BidPriceCapType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BidPriceCapType";
                base.parse_attribute (/<cim:BidPriceCapType.ENERGY\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENERGY", sub, context);
                base.parse_attribute (/<cim:BidPriceCapType.AS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS", sub, context);
                base.parse_attribute (/<cim:BidPriceCapType.RUC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RUC", sub, context);
                let bucket = context.parsed.BidPriceCapType;
                if (null == bucket)
                   context.parsed.BidPriceCapType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "BidPriceCapType", "ENERGY", "ENERGY", fields);
                base.export_attribute (obj, "BidPriceCapType", "AS", "AS", fields);
                base.export_attribute (obj, "BidPriceCapType", "RUC", "RUC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BidPriceCapType_collapse" aria-expanded="true" aria-controls="BidPriceCapType_collapse" style="margin-left: 10px;">BidPriceCapType</a></legend>
                    <div id="BidPriceCapType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#ENERGY}}<div><b>ENERGY</b>: {{ENERGY}}</div>{{/ENERGY}}
                    {{#AS}}<div><b>AS</b>: {{AS}}</div>{{/AS}}
                    {{#RUC}}<div><b>RUC</b>: {{RUC}}</div>{{/RUC}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BidPriceCapType_collapse" aria-expanded="true" aria-controls="{{id}}_BidPriceCapType_collapse" style="margin-left: 10px;">BidPriceCapType</a></legend>
                    <div id="{{id}}_BidPriceCapType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENERGY'>ENERGY: </label><div class='col-sm-8'><input id='{{id}}_ENERGY' class='form-control' type='text'{{#ENERGY}} value='{{ENERGY}}'{{/ENERGY}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS'>AS: </label><div class='col-sm-8'><input id='{{id}}_AS' class='form-control' type='text'{{#AS}} value='{{AS}}'{{/AS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RUC'>RUC: </label><div class='col-sm-8'><input id='{{id}}_RUC' class='form-control' type='text'{{#RUC}} value='{{RUC}}'{{/RUC}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BidPriceCapType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ENERGY").value; if ("" !== temp) obj["ENERGY"] = temp;
                temp = document.getElementById (id + "_AS").value; if ("" !== temp) obj["AS"] = temp;
                temp = document.getElementById (id + "_RUC").value; if ("" !== temp) obj["RUC"] = temp;

                return (obj);
            }
        }

        /**
         * organization type
         *
         */
        class OrganisationType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OrganisationType;
                if (null == bucket)
                   cim_data.OrganisationType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OrganisationType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OrganisationType";
                base.parse_attribute (/<cim:OrganisationType.CUSTOMER\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CUSTOMER", sub, context);
                base.parse_attribute (/<cim:OrganisationType.RTO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTO", sub, context);
                let bucket = context.parsed.OrganisationType;
                if (null == bucket)
                   context.parsed.OrganisationType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "OrganisationType", "CUSTOMER", "CUSTOMER", fields);
                base.export_attribute (obj, "OrganisationType", "RTO", "RTO", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OrganisationType_collapse" aria-expanded="true" aria-controls="OrganisationType_collapse" style="margin-left: 10px;">OrganisationType</a></legend>
                    <div id="OrganisationType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#CUSTOMER}}<div><b>CUSTOMER</b>: {{CUSTOMER}}</div>{{/CUSTOMER}}
                    {{#RTO}}<div><b>RTO</b>: {{RTO}}</div>{{/RTO}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OrganisationType_collapse" aria-expanded="true" aria-controls="{{id}}_OrganisationType_collapse" style="margin-left: 10px;">OrganisationType</a></legend>
                    <div id="{{id}}_OrganisationType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CUSTOMER'>CUSTOMER: </label><div class='col-sm-8'><input id='{{id}}_CUSTOMER' class='form-control' type='text'{{#CUSTOMER}} value='{{CUSTOMER}}'{{/CUSTOMER}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTO'>RTO: </label><div class='col-sm-8'><input id='{{id}}_RTO' class='form-control' type='text'{{#RTO}} value='{{RTO}}'{{/RTO}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OrganisationType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_CUSTOMER").value; if ("" !== temp) obj["CUSTOMER"] = temp;
                temp = document.getElementById (id + "_RTO").value; if ("" !== temp) obj["RTO"] = temp;

                return (obj);
            }
        }

        /**
         * Self Schedule Types applicable to Mitigated Bid
         *
         */
        class SelfScheduleTypeMB extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SelfScheduleTypeMB;
                if (null == bucket)
                   cim_data.SelfScheduleTypeMB = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SelfScheduleTypeMB[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SelfScheduleTypeMB";
                base.parse_attribute (/<cim:SelfScheduleTypeMB.RMR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMR", sub, context);
                let bucket = context.parsed.SelfScheduleTypeMB;
                if (null == bucket)
                   context.parsed.SelfScheduleTypeMB = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "SelfScheduleTypeMB", "RMR", "RMR", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SelfScheduleTypeMB_collapse" aria-expanded="true" aria-controls="SelfScheduleTypeMB_collapse" style="margin-left: 10px;">SelfScheduleTypeMB</a></legend>
                    <div id="SelfScheduleTypeMB_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#RMR}}<div><b>RMR</b>: {{RMR}}</div>{{/RMR}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SelfScheduleTypeMB_collapse" aria-expanded="true" aria-controls="{{id}}_SelfScheduleTypeMB_collapse" style="margin-left: 10px;">SelfScheduleTypeMB</a></legend>
                    <div id="{{id}}_SelfScheduleTypeMB_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMR'>RMR: </label><div class='col-sm-8'><input id='{{id}}_RMR' class='form-control' type='text'{{#RMR}} value='{{RMR}}'{{/RMR}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SelfScheduleTypeMB" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RMR").value; if ("" !== temp) obj["RMR"] = temp;

                return (obj);
            }
        }

        class OASISReportType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OASISReportType;
                if (null == bucket)
                   cim_data.OASISReportType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OASISReportType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISReportType";
                base.parse_attribute (/<cim:OASISReportType.AS_DA_RESULT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_DA_RESULT", sub, context);
                base.parse_attribute (/<cim:OASISReportType.AS_OP_RSRV\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_OP_RSRV", sub, context);
                base.parse_attribute (/<cim:OASISReportType.AS_REQ\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_REQ", sub, context);
                base.parse_attribute (/<cim:OASISReportType.AS_RTM_RESULT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AS_RTM_RESULT", sub, context);
                base.parse_attribute (/<cim:OASISReportType.BIDS_PUBLIC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BIDS_PUBLIC", sub, context);
                base.parse_attribute (/<cim:OASISReportType.CMMT_RA_MLC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CMMT_RA_MLC", sub, context);
                base.parse_attribute (/<cim:OASISReportType.CMMT_RMR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CMMT_RMR", sub, context);
                base.parse_attribute (/<cim:OASISReportType.CRR_CLEARING\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRR_CLEARING", sub, context);
                base.parse_attribute (/<cim:OASISReportType.CRR_INVENTORY\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRR_INVENTORY", sub, context);
                base.parse_attribute (/<cim:OASISReportType.ENE_EA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_EA", sub, context);
                base.parse_attribute (/<cim:OASISReportType.ENE_HASP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_HASP", sub, context);
                base.parse_attribute (/<cim:OASISReportType.ENE_IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_IFM", sub, context);
                base.parse_attribute (/<cim:OASISReportType.ENE_MPM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_MPM", sub, context);
                base.parse_attribute (/<cim:OASISReportType.ENE_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_RTM", sub, context);
                base.parse_attribute (/<cim:OASISReportType.ENE_RUC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ENE_RUC", sub, context);
                base.parse_attribute (/<cim:OASISReportType.LOSS_DA_HASP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LOSS_DA_HASP", sub, context);
                base.parse_attribute (/<cim:OASISReportType.LOSS_RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LOSS_RTM", sub, context);
                base.parse_attribute (/<cim:OASISReportType.PRC_AS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PRC_AS", sub, context);
                base.parse_attribute (/<cim:OASISReportType.PRC_FUEL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PRC_FUEL", sub, context);
                base.parse_attribute (/<cim:OASISReportType.PRC_HRLY_LMP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PRC_HRLY_LMP", sub, context);
                base.parse_attribute (/<cim:OASISReportType.PRC_INTVL_LMP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PRC_INTVL_LMP", sub, context);
                base.parse_attribute (/<cim:OASISReportType.PRC_CNSTR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PRC_CNSTR", sub, context);
                base.parse_attribute (/<cim:OASISReportType.SLD_FCST\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SLD_FCST", sub, context);
                base.parse_attribute (/<cim:OASISReportType.SLD_FCST_PEAK\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SLD_FCST_PEAK", sub, context);
                base.parse_attribute (/<cim:OASISReportType.SLD_MKTS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SLD_MKTS", sub, context);
                base.parse_attribute (/<cim:OASISReportType.TRNS_ATC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_ATC", sub, context);
                base.parse_attribute (/<cim:OASISReportType.TRNS_OUTAGE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_OUTAGE", sub, context);
                base.parse_attribute (/<cim:OASISReportType.TRNS_USAGE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRNS_USAGE", sub, context);
                let bucket = context.parsed.OASISReportType;
                if (null == bucket)
                   context.parsed.OASISReportType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "OASISReportType", "AS_DA_RESULT", "AS_DA_RESULT", fields);
                base.export_attribute (obj, "OASISReportType", "AS_OP_RSRV", "AS_OP_RSRV", fields);
                base.export_attribute (obj, "OASISReportType", "AS_REQ", "AS_REQ", fields);
                base.export_attribute (obj, "OASISReportType", "AS_RTM_RESULT", "AS_RTM_RESULT", fields);
                base.export_attribute (obj, "OASISReportType", "BIDS_PUBLIC", "BIDS_PUBLIC", fields);
                base.export_attribute (obj, "OASISReportType", "CMMT_RA_MLC", "CMMT_RA_MLC", fields);
                base.export_attribute (obj, "OASISReportType", "CMMT_RMR", "CMMT_RMR", fields);
                base.export_attribute (obj, "OASISReportType", "CRR_CLEARING", "CRR_CLEARING", fields);
                base.export_attribute (obj, "OASISReportType", "CRR_INVENTORY", "CRR_INVENTORY", fields);
                base.export_attribute (obj, "OASISReportType", "ENE_EA", "ENE_EA", fields);
                base.export_attribute (obj, "OASISReportType", "ENE_HASP", "ENE_HASP", fields);
                base.export_attribute (obj, "OASISReportType", "ENE_IFM", "ENE_IFM", fields);
                base.export_attribute (obj, "OASISReportType", "ENE_MPM", "ENE_MPM", fields);
                base.export_attribute (obj, "OASISReportType", "ENE_RTM", "ENE_RTM", fields);
                base.export_attribute (obj, "OASISReportType", "ENE_RUC", "ENE_RUC", fields);
                base.export_attribute (obj, "OASISReportType", "LOSS_DA_HASP", "LOSS_DA_HASP", fields);
                base.export_attribute (obj, "OASISReportType", "LOSS_RTM", "LOSS_RTM", fields);
                base.export_attribute (obj, "OASISReportType", "PRC_AS", "PRC_AS", fields);
                base.export_attribute (obj, "OASISReportType", "PRC_FUEL", "PRC_FUEL", fields);
                base.export_attribute (obj, "OASISReportType", "PRC_HRLY_LMP", "PRC_HRLY_LMP", fields);
                base.export_attribute (obj, "OASISReportType", "PRC_INTVL_LMP", "PRC_INTVL_LMP", fields);
                base.export_attribute (obj, "OASISReportType", "PRC_CNSTR", "PRC_CNSTR", fields);
                base.export_attribute (obj, "OASISReportType", "SLD_FCST", "SLD_FCST", fields);
                base.export_attribute (obj, "OASISReportType", "SLD_FCST_PEAK", "SLD_FCST_PEAK", fields);
                base.export_attribute (obj, "OASISReportType", "SLD_MKTS", "SLD_MKTS", fields);
                base.export_attribute (obj, "OASISReportType", "TRNS_ATC", "TRNS_ATC", fields);
                base.export_attribute (obj, "OASISReportType", "TRNS_OUTAGE", "TRNS_OUTAGE", fields);
                base.export_attribute (obj, "OASISReportType", "TRNS_USAGE", "TRNS_USAGE", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OASISReportType_collapse" aria-expanded="true" aria-controls="OASISReportType_collapse" style="margin-left: 10px;">OASISReportType</a></legend>
                    <div id="OASISReportType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#AS_DA_RESULT}}<div><b>AS_DA_RESULT</b>: {{AS_DA_RESULT}}</div>{{/AS_DA_RESULT}}
                    {{#AS_OP_RSRV}}<div><b>AS_OP_RSRV</b>: {{AS_OP_RSRV}}</div>{{/AS_OP_RSRV}}
                    {{#AS_REQ}}<div><b>AS_REQ</b>: {{AS_REQ}}</div>{{/AS_REQ}}
                    {{#AS_RTM_RESULT}}<div><b>AS_RTM_RESULT</b>: {{AS_RTM_RESULT}}</div>{{/AS_RTM_RESULT}}
                    {{#BIDS_PUBLIC}}<div><b>BIDS_PUBLIC</b>: {{BIDS_PUBLIC}}</div>{{/BIDS_PUBLIC}}
                    {{#CMMT_RA_MLC}}<div><b>CMMT_RA_MLC</b>: {{CMMT_RA_MLC}}</div>{{/CMMT_RA_MLC}}
                    {{#CMMT_RMR}}<div><b>CMMT_RMR</b>: {{CMMT_RMR}}</div>{{/CMMT_RMR}}
                    {{#CRR_CLEARING}}<div><b>CRR_CLEARING</b>: {{CRR_CLEARING}}</div>{{/CRR_CLEARING}}
                    {{#CRR_INVENTORY}}<div><b>CRR_INVENTORY</b>: {{CRR_INVENTORY}}</div>{{/CRR_INVENTORY}}
                    {{#ENE_EA}}<div><b>ENE_EA</b>: {{ENE_EA}}</div>{{/ENE_EA}}
                    {{#ENE_HASP}}<div><b>ENE_HASP</b>: {{ENE_HASP}}</div>{{/ENE_HASP}}
                    {{#ENE_IFM}}<div><b>ENE_IFM</b>: {{ENE_IFM}}</div>{{/ENE_IFM}}
                    {{#ENE_MPM}}<div><b>ENE_MPM</b>: {{ENE_MPM}}</div>{{/ENE_MPM}}
                    {{#ENE_RTM}}<div><b>ENE_RTM</b>: {{ENE_RTM}}</div>{{/ENE_RTM}}
                    {{#ENE_RUC}}<div><b>ENE_RUC</b>: {{ENE_RUC}}</div>{{/ENE_RUC}}
                    {{#LOSS_DA_HASP}}<div><b>LOSS_DA_HASP</b>: {{LOSS_DA_HASP}}</div>{{/LOSS_DA_HASP}}
                    {{#LOSS_RTM}}<div><b>LOSS_RTM</b>: {{LOSS_RTM}}</div>{{/LOSS_RTM}}
                    {{#PRC_AS}}<div><b>PRC_AS</b>: {{PRC_AS}}</div>{{/PRC_AS}}
                    {{#PRC_FUEL}}<div><b>PRC_FUEL</b>: {{PRC_FUEL}}</div>{{/PRC_FUEL}}
                    {{#PRC_HRLY_LMP}}<div><b>PRC_HRLY_LMP</b>: {{PRC_HRLY_LMP}}</div>{{/PRC_HRLY_LMP}}
                    {{#PRC_INTVL_LMP}}<div><b>PRC_INTVL_LMP</b>: {{PRC_INTVL_LMP}}</div>{{/PRC_INTVL_LMP}}
                    {{#PRC_CNSTR}}<div><b>PRC_CNSTR</b>: {{PRC_CNSTR}}</div>{{/PRC_CNSTR}}
                    {{#SLD_FCST}}<div><b>SLD_FCST</b>: {{SLD_FCST}}</div>{{/SLD_FCST}}
                    {{#SLD_FCST_PEAK}}<div><b>SLD_FCST_PEAK</b>: {{SLD_FCST_PEAK}}</div>{{/SLD_FCST_PEAK}}
                    {{#SLD_MKTS}}<div><b>SLD_MKTS</b>: {{SLD_MKTS}}</div>{{/SLD_MKTS}}
                    {{#TRNS_ATC}}<div><b>TRNS_ATC</b>: {{TRNS_ATC}}</div>{{/TRNS_ATC}}
                    {{#TRNS_OUTAGE}}<div><b>TRNS_OUTAGE</b>: {{TRNS_OUTAGE}}</div>{{/TRNS_OUTAGE}}
                    {{#TRNS_USAGE}}<div><b>TRNS_USAGE</b>: {{TRNS_USAGE}}</div>{{/TRNS_USAGE}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OASISReportType_collapse" aria-expanded="true" aria-controls="{{id}}_OASISReportType_collapse" style="margin-left: 10px;">OASISReportType</a></legend>
                    <div id="{{id}}_OASISReportType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_DA_RESULT'>AS_DA_RESULT: </label><div class='col-sm-8'><input id='{{id}}_AS_DA_RESULT' class='form-control' type='text'{{#AS_DA_RESULT}} value='{{AS_DA_RESULT}}'{{/AS_DA_RESULT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_OP_RSRV'>AS_OP_RSRV: </label><div class='col-sm-8'><input id='{{id}}_AS_OP_RSRV' class='form-control' type='text'{{#AS_OP_RSRV}} value='{{AS_OP_RSRV}}'{{/AS_OP_RSRV}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_REQ'>AS_REQ: </label><div class='col-sm-8'><input id='{{id}}_AS_REQ' class='form-control' type='text'{{#AS_REQ}} value='{{AS_REQ}}'{{/AS_REQ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AS_RTM_RESULT'>AS_RTM_RESULT: </label><div class='col-sm-8'><input id='{{id}}_AS_RTM_RESULT' class='form-control' type='text'{{#AS_RTM_RESULT}} value='{{AS_RTM_RESULT}}'{{/AS_RTM_RESULT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BIDS_PUBLIC'>BIDS_PUBLIC: </label><div class='col-sm-8'><input id='{{id}}_BIDS_PUBLIC' class='form-control' type='text'{{#BIDS_PUBLIC}} value='{{BIDS_PUBLIC}}'{{/BIDS_PUBLIC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CMMT_RA_MLC'>CMMT_RA_MLC: </label><div class='col-sm-8'><input id='{{id}}_CMMT_RA_MLC' class='form-control' type='text'{{#CMMT_RA_MLC}} value='{{CMMT_RA_MLC}}'{{/CMMT_RA_MLC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CMMT_RMR'>CMMT_RMR: </label><div class='col-sm-8'><input id='{{id}}_CMMT_RMR' class='form-control' type='text'{{#CMMT_RMR}} value='{{CMMT_RMR}}'{{/CMMT_RMR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRR_CLEARING'>CRR_CLEARING: </label><div class='col-sm-8'><input id='{{id}}_CRR_CLEARING' class='form-control' type='text'{{#CRR_CLEARING}} value='{{CRR_CLEARING}}'{{/CRR_CLEARING}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRR_INVENTORY'>CRR_INVENTORY: </label><div class='col-sm-8'><input id='{{id}}_CRR_INVENTORY' class='form-control' type='text'{{#CRR_INVENTORY}} value='{{CRR_INVENTORY}}'{{/CRR_INVENTORY}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_EA'>ENE_EA: </label><div class='col-sm-8'><input id='{{id}}_ENE_EA' class='form-control' type='text'{{#ENE_EA}} value='{{ENE_EA}}'{{/ENE_EA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_HASP'>ENE_HASP: </label><div class='col-sm-8'><input id='{{id}}_ENE_HASP' class='form-control' type='text'{{#ENE_HASP}} value='{{ENE_HASP}}'{{/ENE_HASP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_IFM'>ENE_IFM: </label><div class='col-sm-8'><input id='{{id}}_ENE_IFM' class='form-control' type='text'{{#ENE_IFM}} value='{{ENE_IFM}}'{{/ENE_IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_MPM'>ENE_MPM: </label><div class='col-sm-8'><input id='{{id}}_ENE_MPM' class='form-control' type='text'{{#ENE_MPM}} value='{{ENE_MPM}}'{{/ENE_MPM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_RTM'>ENE_RTM: </label><div class='col-sm-8'><input id='{{id}}_ENE_RTM' class='form-control' type='text'{{#ENE_RTM}} value='{{ENE_RTM}}'{{/ENE_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ENE_RUC'>ENE_RUC: </label><div class='col-sm-8'><input id='{{id}}_ENE_RUC' class='form-control' type='text'{{#ENE_RUC}} value='{{ENE_RUC}}'{{/ENE_RUC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LOSS_DA_HASP'>LOSS_DA_HASP: </label><div class='col-sm-8'><input id='{{id}}_LOSS_DA_HASP' class='form-control' type='text'{{#LOSS_DA_HASP}} value='{{LOSS_DA_HASP}}'{{/LOSS_DA_HASP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LOSS_RTM'>LOSS_RTM: </label><div class='col-sm-8'><input id='{{id}}_LOSS_RTM' class='form-control' type='text'{{#LOSS_RTM}} value='{{LOSS_RTM}}'{{/LOSS_RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PRC_AS'>PRC_AS: </label><div class='col-sm-8'><input id='{{id}}_PRC_AS' class='form-control' type='text'{{#PRC_AS}} value='{{PRC_AS}}'{{/PRC_AS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PRC_FUEL'>PRC_FUEL: </label><div class='col-sm-8'><input id='{{id}}_PRC_FUEL' class='form-control' type='text'{{#PRC_FUEL}} value='{{PRC_FUEL}}'{{/PRC_FUEL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PRC_HRLY_LMP'>PRC_HRLY_LMP: </label><div class='col-sm-8'><input id='{{id}}_PRC_HRLY_LMP' class='form-control' type='text'{{#PRC_HRLY_LMP}} value='{{PRC_HRLY_LMP}}'{{/PRC_HRLY_LMP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PRC_INTVL_LMP'>PRC_INTVL_LMP: </label><div class='col-sm-8'><input id='{{id}}_PRC_INTVL_LMP' class='form-control' type='text'{{#PRC_INTVL_LMP}} value='{{PRC_INTVL_LMP}}'{{/PRC_INTVL_LMP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PRC_CNSTR'>PRC_CNSTR: </label><div class='col-sm-8'><input id='{{id}}_PRC_CNSTR' class='form-control' type='text'{{#PRC_CNSTR}} value='{{PRC_CNSTR}}'{{/PRC_CNSTR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SLD_FCST'>SLD_FCST: </label><div class='col-sm-8'><input id='{{id}}_SLD_FCST' class='form-control' type='text'{{#SLD_FCST}} value='{{SLD_FCST}}'{{/SLD_FCST}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SLD_FCST_PEAK'>SLD_FCST_PEAK: </label><div class='col-sm-8'><input id='{{id}}_SLD_FCST_PEAK' class='form-control' type='text'{{#SLD_FCST_PEAK}} value='{{SLD_FCST_PEAK}}'{{/SLD_FCST_PEAK}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SLD_MKTS'>SLD_MKTS: </label><div class='col-sm-8'><input id='{{id}}_SLD_MKTS' class='form-control' type='text'{{#SLD_MKTS}} value='{{SLD_MKTS}}'{{/SLD_MKTS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_ATC'>TRNS_ATC: </label><div class='col-sm-8'><input id='{{id}}_TRNS_ATC' class='form-control' type='text'{{#TRNS_ATC}} value='{{TRNS_ATC}}'{{/TRNS_ATC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_OUTAGE'>TRNS_OUTAGE: </label><div class='col-sm-8'><input id='{{id}}_TRNS_OUTAGE' class='form-control' type='text'{{#TRNS_OUTAGE}} value='{{TRNS_OUTAGE}}'{{/TRNS_OUTAGE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRNS_USAGE'>TRNS_USAGE: </label><div class='col-sm-8'><input id='{{id}}_TRNS_USAGE' class='form-control' type='text'{{#TRNS_USAGE}} value='{{TRNS_USAGE}}'{{/TRNS_USAGE}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OASISReportType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_AS_DA_RESULT").value; if ("" !== temp) obj["AS_DA_RESULT"] = temp;
                temp = document.getElementById (id + "_AS_OP_RSRV").value; if ("" !== temp) obj["AS_OP_RSRV"] = temp;
                temp = document.getElementById (id + "_AS_REQ").value; if ("" !== temp) obj["AS_REQ"] = temp;
                temp = document.getElementById (id + "_AS_RTM_RESULT").value; if ("" !== temp) obj["AS_RTM_RESULT"] = temp;
                temp = document.getElementById (id + "_BIDS_PUBLIC").value; if ("" !== temp) obj["BIDS_PUBLIC"] = temp;
                temp = document.getElementById (id + "_CMMT_RA_MLC").value; if ("" !== temp) obj["CMMT_RA_MLC"] = temp;
                temp = document.getElementById (id + "_CMMT_RMR").value; if ("" !== temp) obj["CMMT_RMR"] = temp;
                temp = document.getElementById (id + "_CRR_CLEARING").value; if ("" !== temp) obj["CRR_CLEARING"] = temp;
                temp = document.getElementById (id + "_CRR_INVENTORY").value; if ("" !== temp) obj["CRR_INVENTORY"] = temp;
                temp = document.getElementById (id + "_ENE_EA").value; if ("" !== temp) obj["ENE_EA"] = temp;
                temp = document.getElementById (id + "_ENE_HASP").value; if ("" !== temp) obj["ENE_HASP"] = temp;
                temp = document.getElementById (id + "_ENE_IFM").value; if ("" !== temp) obj["ENE_IFM"] = temp;
                temp = document.getElementById (id + "_ENE_MPM").value; if ("" !== temp) obj["ENE_MPM"] = temp;
                temp = document.getElementById (id + "_ENE_RTM").value; if ("" !== temp) obj["ENE_RTM"] = temp;
                temp = document.getElementById (id + "_ENE_RUC").value; if ("" !== temp) obj["ENE_RUC"] = temp;
                temp = document.getElementById (id + "_LOSS_DA_HASP").value; if ("" !== temp) obj["LOSS_DA_HASP"] = temp;
                temp = document.getElementById (id + "_LOSS_RTM").value; if ("" !== temp) obj["LOSS_RTM"] = temp;
                temp = document.getElementById (id + "_PRC_AS").value; if ("" !== temp) obj["PRC_AS"] = temp;
                temp = document.getElementById (id + "_PRC_FUEL").value; if ("" !== temp) obj["PRC_FUEL"] = temp;
                temp = document.getElementById (id + "_PRC_HRLY_LMP").value; if ("" !== temp) obj["PRC_HRLY_LMP"] = temp;
                temp = document.getElementById (id + "_PRC_INTVL_LMP").value; if ("" !== temp) obj["PRC_INTVL_LMP"] = temp;
                temp = document.getElementById (id + "_PRC_CNSTR").value; if ("" !== temp) obj["PRC_CNSTR"] = temp;
                temp = document.getElementById (id + "_SLD_FCST").value; if ("" !== temp) obj["SLD_FCST"] = temp;
                temp = document.getElementById (id + "_SLD_FCST_PEAK").value; if ("" !== temp) obj["SLD_FCST_PEAK"] = temp;
                temp = document.getElementById (id + "_SLD_MKTS").value; if ("" !== temp) obj["SLD_MKTS"] = temp;
                temp = document.getElementById (id + "_TRNS_ATC").value; if ("" !== temp) obj["TRNS_ATC"] = temp;
                temp = document.getElementById (id + "_TRNS_OUTAGE").value; if ("" !== temp) obj["TRNS_OUTAGE"] = temp;
                temp = document.getElementById (id + "_TRNS_USAGE").value; if ("" !== temp) obj["TRNS_USAGE"] = temp;

                return (obj);
            }
        }

        /**
         * self schedule types
         * 
         * PT
         * ETC
         * TOR
         * RMR
         * RMT
         * RGMR
         * ORFC
         *
         * SP
         *
         */
        class SelfScheduleType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SelfScheduleType;
                if (null == bucket)
                   cim_data.SelfScheduleType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SelfScheduleType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SelfScheduleType";
                base.parse_attribute (/<cim:SelfScheduleType.PT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PT", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.ETC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ETC", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.TOR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TOR", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.RMR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMR", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.RMT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMT", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.RGMR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RGMR", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.ORFC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ORFC", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.SP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SP", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IFM", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.RUC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RUC", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.RA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RA", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.PUMP_ETC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PUMP_ETC", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.PUMP_TOR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PUMP_TOR", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.BAS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BAS", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.LOF\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LOF", sub, context);
                base.parse_attribute (/<cim:SelfScheduleType.WHL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WHL", sub, context);
                let bucket = context.parsed.SelfScheduleType;
                if (null == bucket)
                   context.parsed.SelfScheduleType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "SelfScheduleType", "PT", "PT", fields);
                base.export_attribute (obj, "SelfScheduleType", "ETC", "ETC", fields);
                base.export_attribute (obj, "SelfScheduleType", "TOR", "TOR", fields);
                base.export_attribute (obj, "SelfScheduleType", "RMR", "RMR", fields);
                base.export_attribute (obj, "SelfScheduleType", "RMT", "RMT", fields);
                base.export_attribute (obj, "SelfScheduleType", "RGMR", "RGMR", fields);
                base.export_attribute (obj, "SelfScheduleType", "ORFC", "ORFC", fields);
                base.export_attribute (obj, "SelfScheduleType", "SP", "SP", fields);
                base.export_attribute (obj, "SelfScheduleType", "IFM", "IFM", fields);
                base.export_attribute (obj, "SelfScheduleType", "RUC", "RUC", fields);
                base.export_attribute (obj, "SelfScheduleType", "RA", "RA", fields);
                base.export_attribute (obj, "SelfScheduleType", "PUMP_ETC", "PUMP_ETC", fields);
                base.export_attribute (obj, "SelfScheduleType", "PUMP_TOR", "PUMP_TOR", fields);
                base.export_attribute (obj, "SelfScheduleType", "BAS", "BAS", fields);
                base.export_attribute (obj, "SelfScheduleType", "LOF", "LOF", fields);
                base.export_attribute (obj, "SelfScheduleType", "WHL", "WHL", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SelfScheduleType_collapse" aria-expanded="true" aria-controls="SelfScheduleType_collapse" style="margin-left: 10px;">SelfScheduleType</a></legend>
                    <div id="SelfScheduleType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#PT}}<div><b>PT</b>: {{PT}}</div>{{/PT}}
                    {{#ETC}}<div><b>ETC</b>: {{ETC}}</div>{{/ETC}}
                    {{#TOR}}<div><b>TOR</b>: {{TOR}}</div>{{/TOR}}
                    {{#RMR}}<div><b>RMR</b>: {{RMR}}</div>{{/RMR}}
                    {{#RMT}}<div><b>RMT</b>: {{RMT}}</div>{{/RMT}}
                    {{#RGMR}}<div><b>RGMR</b>: {{RGMR}}</div>{{/RGMR}}
                    {{#ORFC}}<div><b>ORFC</b>: {{ORFC}}</div>{{/ORFC}}
                    {{#SP}}<div><b>SP</b>: {{SP}}</div>{{/SP}}
                    {{#IFM}}<div><b>IFM</b>: {{IFM}}</div>{{/IFM}}
                    {{#RUC}}<div><b>RUC</b>: {{RUC}}</div>{{/RUC}}
                    {{#RA}}<div><b>RA</b>: {{RA}}</div>{{/RA}}
                    {{#PUMP_ETC}}<div><b>PUMP_ETC</b>: {{PUMP_ETC}}</div>{{/PUMP_ETC}}
                    {{#PUMP_TOR}}<div><b>PUMP_TOR</b>: {{PUMP_TOR}}</div>{{/PUMP_TOR}}
                    {{#BAS}}<div><b>BAS</b>: {{BAS}}</div>{{/BAS}}
                    {{#LOF}}<div><b>LOF</b>: {{LOF}}</div>{{/LOF}}
                    {{#WHL}}<div><b>WHL</b>: {{WHL}}</div>{{/WHL}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SelfScheduleType_collapse" aria-expanded="true" aria-controls="{{id}}_SelfScheduleType_collapse" style="margin-left: 10px;">SelfScheduleType</a></legend>
                    <div id="{{id}}_SelfScheduleType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PT'>PT: </label><div class='col-sm-8'><input id='{{id}}_PT' class='form-control' type='text'{{#PT}} value='{{PT}}'{{/PT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ETC'>ETC: </label><div class='col-sm-8'><input id='{{id}}_ETC' class='form-control' type='text'{{#ETC}} value='{{ETC}}'{{/ETC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TOR'>TOR: </label><div class='col-sm-8'><input id='{{id}}_TOR' class='form-control' type='text'{{#TOR}} value='{{TOR}}'{{/TOR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMR'>RMR: </label><div class='col-sm-8'><input id='{{id}}_RMR' class='form-control' type='text'{{#RMR}} value='{{RMR}}'{{/RMR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMT'>RMT: </label><div class='col-sm-8'><input id='{{id}}_RMT' class='form-control' type='text'{{#RMT}} value='{{RMT}}'{{/RMT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RGMR'>RGMR: </label><div class='col-sm-8'><input id='{{id}}_RGMR' class='form-control' type='text'{{#RGMR}} value='{{RGMR}}'{{/RGMR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ORFC'>ORFC: </label><div class='col-sm-8'><input id='{{id}}_ORFC' class='form-control' type='text'{{#ORFC}} value='{{ORFC}}'{{/ORFC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SP'>SP: </label><div class='col-sm-8'><input id='{{id}}_SP' class='form-control' type='text'{{#SP}} value='{{SP}}'{{/SP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IFM'>IFM: </label><div class='col-sm-8'><input id='{{id}}_IFM' class='form-control' type='text'{{#IFM}} value='{{IFM}}'{{/IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RUC'>RUC: </label><div class='col-sm-8'><input id='{{id}}_RUC' class='form-control' type='text'{{#RUC}} value='{{RUC}}'{{/RUC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RA'>RA: </label><div class='col-sm-8'><input id='{{id}}_RA' class='form-control' type='text'{{#RA}} value='{{RA}}'{{/RA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PUMP_ETC'>PUMP_ETC: </label><div class='col-sm-8'><input id='{{id}}_PUMP_ETC' class='form-control' type='text'{{#PUMP_ETC}} value='{{PUMP_ETC}}'{{/PUMP_ETC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PUMP_TOR'>PUMP_TOR: </label><div class='col-sm-8'><input id='{{id}}_PUMP_TOR' class='form-control' type='text'{{#PUMP_TOR}} value='{{PUMP_TOR}}'{{/PUMP_TOR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BAS'>BAS: </label><div class='col-sm-8'><input id='{{id}}_BAS' class='form-control' type='text'{{#BAS}} value='{{BAS}}'{{/BAS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LOF'>LOF: </label><div class='col-sm-8'><input id='{{id}}_LOF' class='form-control' type='text'{{#LOF}} value='{{LOF}}'{{/LOF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WHL'>WHL: </label><div class='col-sm-8'><input id='{{id}}_WHL' class='form-control' type='text'{{#WHL}} value='{{WHL}}'{{/WHL}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SelfScheduleType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PT").value; if ("" !== temp) obj["PT"] = temp;
                temp = document.getElementById (id + "_ETC").value; if ("" !== temp) obj["ETC"] = temp;
                temp = document.getElementById (id + "_TOR").value; if ("" !== temp) obj["TOR"] = temp;
                temp = document.getElementById (id + "_RMR").value; if ("" !== temp) obj["RMR"] = temp;
                temp = document.getElementById (id + "_RMT").value; if ("" !== temp) obj["RMT"] = temp;
                temp = document.getElementById (id + "_RGMR").value; if ("" !== temp) obj["RGMR"] = temp;
                temp = document.getElementById (id + "_ORFC").value; if ("" !== temp) obj["ORFC"] = temp;
                temp = document.getElementById (id + "_SP").value; if ("" !== temp) obj["SP"] = temp;
                temp = document.getElementById (id + "_IFM").value; if ("" !== temp) obj["IFM"] = temp;
                temp = document.getElementById (id + "_RUC").value; if ("" !== temp) obj["RUC"] = temp;
                temp = document.getElementById (id + "_RA").value; if ("" !== temp) obj["RA"] = temp;
                temp = document.getElementById (id + "_PUMP_ETC").value; if ("" !== temp) obj["PUMP_ETC"] = temp;
                temp = document.getElementById (id + "_PUMP_TOR").value; if ("" !== temp) obj["PUMP_TOR"] = temp;
                temp = document.getElementById (id + "_BAS").value; if ("" !== temp) obj["BAS"] = temp;
                temp = document.getElementById (id + "_LOF").value; if ("" !== temp) obj["LOF"] = temp;
                temp = document.getElementById (id + "_WHL").value; if ("" !== temp) obj["WHL"] = temp;

                return (obj);
            }
        }

        class SpinningEventType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SpinningEventType;
                if (null == bucket)
                   cim_data.SpinningEventType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SpinningEventType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SpinningEventType";
                base.parse_attribute (/<cim:SpinningEventType.RZ\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RZ", sub, context);
                base.parse_attribute (/<cim:SpinningEventType.AA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AA", sub, context);
                base.parse_attribute (/<cim:SpinningEventType.CA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CA", sub, context);
                let bucket = context.parsed.SpinningEventType;
                if (null == bucket)
                   context.parsed.SpinningEventType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "SpinningEventType", "RZ", "RZ", fields);
                base.export_attribute (obj, "SpinningEventType", "AA", "AA", fields);
                base.export_attribute (obj, "SpinningEventType", "CA", "CA", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SpinningEventType_collapse" aria-expanded="true" aria-controls="SpinningEventType_collapse" style="margin-left: 10px;">SpinningEventType</a></legend>
                    <div id="SpinningEventType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#RZ}}<div><b>RZ</b>: {{RZ}}</div>{{/RZ}}
                    {{#AA}}<div><b>AA</b>: {{AA}}</div>{{/AA}}
                    {{#CA}}<div><b>CA</b>: {{CA}}</div>{{/CA}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SpinningEventType_collapse" aria-expanded="true" aria-controls="{{id}}_SpinningEventType_collapse" style="margin-left: 10px;">SpinningEventType</a></legend>
                    <div id="{{id}}_SpinningEventType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RZ'>RZ: </label><div class='col-sm-8'><input id='{{id}}_RZ' class='form-control' type='text'{{#RZ}} value='{{RZ}}'{{/RZ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AA'>AA: </label><div class='col-sm-8'><input id='{{id}}_AA' class='form-control' type='text'{{#AA}} value='{{AA}}'{{/AA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CA'>CA: </label><div class='col-sm-8'><input id='{{id}}_CA' class='form-control' type='text'{{#CA}} value='{{CA}}'{{/CA}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SpinningEventType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RZ").value; if ("" !== temp) obj["RZ"] = temp;
                temp = document.getElementById (id + "_AA").value; if ("" !== temp) obj["AA"] = temp;
                temp = document.getElementById (id + "_CA").value; if ("" !== temp) obj["CA"] = temp;

                return (obj);
            }
        }

        class LFCResourceType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LFCResourceType;
                if (null == bucket)
                   cim_data.LFCResourceType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LFCResourceType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LFCResourceType";
                base.parse_attribute (/<cim:LFCResourceType.GEN\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GEN", sub, context);
                base.parse_attribute (/<cim:LFCResourceType.PUMP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PUMP", sub, context);
                let bucket = context.parsed.LFCResourceType;
                if (null == bucket)
                   context.parsed.LFCResourceType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "LFCResourceType", "GEN", "GEN", fields);
                base.export_attribute (obj, "LFCResourceType", "PUMP", "PUMP", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LFCResourceType_collapse" aria-expanded="true" aria-controls="LFCResourceType_collapse" style="margin-left: 10px;">LFCResourceType</a></legend>
                    <div id="LFCResourceType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#GEN}}<div><b>GEN</b>: {{GEN}}</div>{{/GEN}}
                    {{#PUMP}}<div><b>PUMP</b>: {{PUMP}}</div>{{/PUMP}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LFCResourceType_collapse" aria-expanded="true" aria-controls="{{id}}_LFCResourceType_collapse" style="margin-left: 10px;">LFCResourceType</a></legend>
                    <div id="{{id}}_LFCResourceType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GEN'>GEN: </label><div class='col-sm-8'><input id='{{id}}_GEN' class='form-control' type='text'{{#GEN}} value='{{GEN}}'{{/GEN}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PUMP'>PUMP: </label><div class='col-sm-8'><input id='{{id}}_PUMP' class='form-control' type='text'{{#PUMP}} value='{{PUMP}}'{{/PUMP}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LFCResourceType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_GEN").value; if ("" !== temp) obj["GEN"] = temp;
                temp = document.getElementById (id + "_PUMP").value; if ("" !== temp) obj["PUMP"] = temp;

                return (obj);
            }
        }

        class OASISErrDescription extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OASISErrDescription;
                if (null == bucket)
                   cim_data.OASISErrDescription = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OASISErrDescription[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISErrDescription";
                base.parse_attribute (/<cim:OASISErrDescription.No data returned for the specified selection\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "No data returned for the specified selection", sub, context);
                base.parse_attribute (/<cim:OASISErrDescription.Invalid date format, please use valid date format\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Invalid date format, please use valid date format", sub, context);
                base.parse_attribute (/<cim:OASISErrDescription.Timed out waiting for query response\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Timed out waiting for query response", sub, context);
                base.parse_attribute (/<cim:OASISErrDescription.Data can be requested for period of 31 days only\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Data can be requested for period of 31 days only", sub, context);
                base.parse_attribute (/<cim:OASISErrDescription.Report name does not exit, please use valid report name\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Report name does not exit, please use valid report name", sub, context);
                base.parse_attribute (/<cim:OASISErrDescription.Validation exception during transformation of XML\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Validation exception during transformation of XML", sub, context);
                base.parse_attribute (/<cim:OASISErrDescription.Required file does not exist\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Required file does not exist", sub, context);
                base.parse_attribute (/<cim:OASISErrDescription.Out of memory exception\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Out of memory exception", sub, context);
                base.parse_attribute (/<cim:OASISErrDescription.Exceptions in reading and writing of XML files\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Exceptions in reading and writing of XML files", sub, context);
                base.parse_attribute (/<cim:OASISErrDescription.System Error\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "System Error", sub, context);
                let bucket = context.parsed.OASISErrDescription;
                if (null == bucket)
                   context.parsed.OASISErrDescription = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "OASISErrDescription", "No data returned for the specified selection", "No data returned for the specified selection", fields);
                base.export_attribute (obj, "OASISErrDescription", "Invalid date format, please use valid date format", "Invalid date format, please use valid date format", fields);
                base.export_attribute (obj, "OASISErrDescription", "Timed out waiting for query response", "Timed out waiting for query response", fields);
                base.export_attribute (obj, "OASISErrDescription", "Data can be requested for period of 31 days only", "Data can be requested for period of 31 days only", fields);
                base.export_attribute (obj, "OASISErrDescription", "Report name does not exit, please use valid report name", "Report name does not exit, please use valid report name", fields);
                base.export_attribute (obj, "OASISErrDescription", "Validation exception during transformation of XML", "Validation exception during transformation of XML", fields);
                base.export_attribute (obj, "OASISErrDescription", "Required file does not exist", "Required file does not exist", fields);
                base.export_attribute (obj, "OASISErrDescription", "Out of memory exception", "Out of memory exception", fields);
                base.export_attribute (obj, "OASISErrDescription", "Exceptions in reading and writing of XML files", "Exceptions in reading and writing of XML files", fields);
                base.export_attribute (obj, "OASISErrDescription", "System Error", "System Error", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OASISErrDescription_collapse" aria-expanded="true" aria-controls="OASISErrDescription_collapse" style="margin-left: 10px;">OASISErrDescription</a></legend>
                    <div id="OASISErrDescription_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#No data returned for the specified selection}}<div><b>No data returned for the specified selection</b>: {{No data returned for the specified selection}}</div>{{/No data returned for the specified selection}}
                    {{#Invalid date format, please use valid date format}}<div><b>Invalid date format, please use valid date format</b>: {{Invalid date format, please use valid date format}}</div>{{/Invalid date format, please use valid date format}}
                    {{#Timed out waiting for query response}}<div><b>Timed out waiting for query response</b>: {{Timed out waiting for query response}}</div>{{/Timed out waiting for query response}}
                    {{#Data can be requested for period of 31 days only}}<div><b>Data can be requested for period of 31 days only</b>: {{Data can be requested for period of 31 days only}}</div>{{/Data can be requested for period of 31 days only}}
                    {{#Report name does not exit, please use valid report name}}<div><b>Report name does not exit, please use valid report name</b>: {{Report name does not exit, please use valid report name}}</div>{{/Report name does not exit, please use valid report name}}
                    {{#Validation exception during transformation of XML}}<div><b>Validation exception during transformation of XML</b>: {{Validation exception during transformation of XML}}</div>{{/Validation exception during transformation of XML}}
                    {{#Required file does not exist}}<div><b>Required file does not exist</b>: {{Required file does not exist}}</div>{{/Required file does not exist}}
                    {{#Out of memory exception}}<div><b>Out of memory exception</b>: {{Out of memory exception}}</div>{{/Out of memory exception}}
                    {{#Exceptions in reading and writing of XML files}}<div><b>Exceptions in reading and writing of XML files</b>: {{Exceptions in reading and writing of XML files}}</div>{{/Exceptions in reading and writing of XML files}}
                    {{#System Error}}<div><b>System Error</b>: {{System Error}}</div>{{/System Error}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OASISErrDescription_collapse" aria-expanded="true" aria-controls="{{id}}_OASISErrDescription_collapse" style="margin-left: 10px;">OASISErrDescription</a></legend>
                    <div id="{{id}}_OASISErrDescription_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_No data returned for the specified selection'>No data returned for the specified selection: </label><div class='col-sm-8'><input id='{{id}}_No data returned for the specified selection' class='form-control' type='text'{{#No data returned for the specified selection}} value='{{No data returned for the specified selection}}'{{/No data returned for the specified selection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Invalid date format, please use valid date format'>Invalid date format, please use valid date format: </label><div class='col-sm-8'><input id='{{id}}_Invalid date format, please use valid date format' class='form-control' type='text'{{#Invalid date format, please use valid date format}} value='{{Invalid date format, please use valid date format}}'{{/Invalid date format, please use valid date format}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Timed out waiting for query response'>Timed out waiting for query response: </label><div class='col-sm-8'><input id='{{id}}_Timed out waiting for query response' class='form-control' type='text'{{#Timed out waiting for query response}} value='{{Timed out waiting for query response}}'{{/Timed out waiting for query response}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Data can be requested for period of 31 days only'>Data can be requested for period of 31 days only: </label><div class='col-sm-8'><input id='{{id}}_Data can be requested for period of 31 days only' class='form-control' type='text'{{#Data can be requested for period of 31 days only}} value='{{Data can be requested for period of 31 days only}}'{{/Data can be requested for period of 31 days only}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Report name does not exit, please use valid report name'>Report name does not exit, please use valid report name: </label><div class='col-sm-8'><input id='{{id}}_Report name does not exit, please use valid report name' class='form-control' type='text'{{#Report name does not exit, please use valid report name}} value='{{Report name does not exit, please use valid report name}}'{{/Report name does not exit, please use valid report name}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Validation exception during transformation of XML'>Validation exception during transformation of XML: </label><div class='col-sm-8'><input id='{{id}}_Validation exception during transformation of XML' class='form-control' type='text'{{#Validation exception during transformation of XML}} value='{{Validation exception during transformation of XML}}'{{/Validation exception during transformation of XML}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Required file does not exist'>Required file does not exist: </label><div class='col-sm-8'><input id='{{id}}_Required file does not exist' class='form-control' type='text'{{#Required file does not exist}} value='{{Required file does not exist}}'{{/Required file does not exist}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Out of memory exception'>Out of memory exception: </label><div class='col-sm-8'><input id='{{id}}_Out of memory exception' class='form-control' type='text'{{#Out of memory exception}} value='{{Out of memory exception}}'{{/Out of memory exception}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Exceptions in reading and writing of XML files'>Exceptions in reading and writing of XML files: </label><div class='col-sm-8'><input id='{{id}}_Exceptions in reading and writing of XML files' class='form-control' type='text'{{#Exceptions in reading and writing of XML files}} value='{{Exceptions in reading and writing of XML files}}'{{/Exceptions in reading and writing of XML files}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_System Error'>System Error: </label><div class='col-sm-8'><input id='{{id}}_System Error' class='form-control' type='text'{{#System Error}} value='{{System Error}}'{{/System Error}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OASISErrDescription" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_No data returned for the specified selection").value; if ("" !== temp) obj["No data returned for the specified selection"] = temp;
                temp = document.getElementById (id + "_Invalid date format, please use valid date format").value; if ("" !== temp) obj["Invalid date format, please use valid date format"] = temp;
                temp = document.getElementById (id + "_Timed out waiting for query response").value; if ("" !== temp) obj["Timed out waiting for query response"] = temp;
                temp = document.getElementById (id + "_Data can be requested for period of 31 days only").value; if ("" !== temp) obj["Data can be requested for period of 31 days only"] = temp;
                temp = document.getElementById (id + "_Report name does not exit, please use valid report name").value; if ("" !== temp) obj["Report name does not exit, please use valid report name"] = temp;
                temp = document.getElementById (id + "_Validation exception during transformation of XML").value; if ("" !== temp) obj["Validation exception during transformation of XML"] = temp;
                temp = document.getElementById (id + "_Required file does not exist").value; if ("" !== temp) obj["Required file does not exist"] = temp;
                temp = document.getElementById (id + "_Out of memory exception").value; if ("" !== temp) obj["Out of memory exception"] = temp;
                temp = document.getElementById (id + "_Exceptions in reading and writing of XML files").value; if ("" !== temp) obj["Exceptions in reading and writing of XML files"] = temp;
                temp = document.getElementById (id + "_System Error").value; if ("" !== temp) obj["System Error"] = temp;

                return (obj);
            }
        }

        class JobStartEndType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.JobStartEndType;
                if (null == bucket)
                   cim_data.JobStartEndType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.JobStartEndType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "JobStartEndType";
                base.parse_attribute (/<cim:JobStartEndType.NA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NA", sub, context);
                base.parse_attribute (/<cim:JobStartEndType.START\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "START", sub, context);
                base.parse_attribute (/<cim:JobStartEndType.END\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "END", sub, context);
                let bucket = context.parsed.JobStartEndType;
                if (null == bucket)
                   context.parsed.JobStartEndType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "JobStartEndType", "NA", "NA", fields);
                base.export_attribute (obj, "JobStartEndType", "START", "START", fields);
                base.export_attribute (obj, "JobStartEndType", "END", "END", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#JobStartEndType_collapse" aria-expanded="true" aria-controls="JobStartEndType_collapse" style="margin-left: 10px;">JobStartEndType</a></legend>
                    <div id="JobStartEndType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#NA}}<div><b>NA</b>: {{NA}}</div>{{/NA}}
                    {{#START}}<div><b>START</b>: {{START}}</div>{{/START}}
                    {{#END}}<div><b>END</b>: {{END}}</div>{{/END}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_JobStartEndType_collapse" aria-expanded="true" aria-controls="{{id}}_JobStartEndType_collapse" style="margin-left: 10px;">JobStartEndType</a></legend>
                    <div id="{{id}}_JobStartEndType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NA'>NA: </label><div class='col-sm-8'><input id='{{id}}_NA' class='form-control' type='text'{{#NA}} value='{{NA}}'{{/NA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_START'>START: </label><div class='col-sm-8'><input id='{{id}}_START' class='form-control' type='text'{{#START}} value='{{START}}'{{/START}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_END'>END: </label><div class='col-sm-8'><input id='{{id}}_END' class='form-control' type='text'{{#END}} value='{{END}}'{{/END}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "JobStartEndType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_NA").value; if ("" !== temp) obj["NA"] = temp;
                temp = document.getElementById (id + "_START").value; if ("" !== temp) obj["START"] = temp;
                temp = document.getElementById (id + "_END").value; if ("" !== temp) obj["END"] = temp;

                return (obj);
            }
        }

        /**
         * BASELI NE
         *
         * NEGOTIATED
         *
         */
        class AdderType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AdderType;
                if (null == bucket)
                   cim_data.AdderType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AdderType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AdderType";
                base.parse_attribute (/<cim:AdderType.BASELINE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BASELINE", sub, context);
                base.parse_attribute (/<cim:AdderType.NEGOTIATED\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NEGOTIATED", sub, context);
                let bucket = context.parsed.AdderType;
                if (null == bucket)
                   context.parsed.AdderType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "AdderType", "BASELINE", "BASELINE", fields);
                base.export_attribute (obj, "AdderType", "NEGOTIATED", "NEGOTIATED", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AdderType_collapse" aria-expanded="true" aria-controls="AdderType_collapse" style="margin-left: 10px;">AdderType</a></legend>
                    <div id="AdderType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#BASELINE}}<div><b>BASELINE</b>: {{BASELINE}}</div>{{/BASELINE}}
                    {{#NEGOTIATED}}<div><b>NEGOTIATED</b>: {{NEGOTIATED}}</div>{{/NEGOTIATED}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AdderType_collapse" aria-expanded="true" aria-controls="{{id}}_AdderType_collapse" style="margin-left: 10px;">AdderType</a></legend>
                    <div id="{{id}}_AdderType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BASELINE'>BASELINE: </label><div class='col-sm-8'><input id='{{id}}_BASELINE' class='form-control' type='text'{{#BASELINE}} value='{{BASELINE}}'{{/BASELINE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NEGOTIATED'>NEGOTIATED: </label><div class='col-sm-8'><input id='{{id}}_NEGOTIATED' class='form-control' type='text'{{#NEGOTIATED}} value='{{NEGOTIATED}}'{{/NEGOTIATED}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AdderType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_BASELINE").value; if ("" !== temp) obj["BASELINE"] = temp;
                temp = document.getElementById (id + "_NEGOTIATED").value; if ("" !== temp) obj["NEGOTIATED"] = temp;

                return (obj);
            }
        }

        class SchedClassType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SchedClassType;
                if (null == bucket)
                   cim_data.SchedClassType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SchedClassType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SchedClassType";
                base.parse_attribute (/<cim:SchedClassType.P\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "P", sub, context);
                base.parse_attribute (/<cim:SchedClassType.R\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "R", sub, context);
                base.parse_attribute (/<cim:SchedClassType.F\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "F", sub, context);
                let bucket = context.parsed.SchedClassType;
                if (null == bucket)
                   context.parsed.SchedClassType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "SchedClassType", "P", "P", fields);
                base.export_attribute (obj, "SchedClassType", "R", "R", fields);
                base.export_attribute (obj, "SchedClassType", "F", "F", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SchedClassType_collapse" aria-expanded="true" aria-controls="SchedClassType_collapse" style="margin-left: 10px;">SchedClassType</a></legend>
                    <div id="SchedClassType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#P}}<div><b>P</b>: {{P}}</div>{{/P}}
                    {{#R}}<div><b>R</b>: {{R}}</div>{{/R}}
                    {{#F}}<div><b>F</b>: {{F}}</div>{{/F}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SchedClassType_collapse" aria-expanded="true" aria-controls="{{id}}_SchedClassType_collapse" style="margin-left: 10px;">SchedClassType</a></legend>
                    <div id="{{id}}_SchedClassType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_P'>P: </label><div class='col-sm-8'><input id='{{id}}_P' class='form-control' type='text'{{#P}} value='{{P}}'{{/P}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_R'>R: </label><div class='col-sm-8'><input id='{{id}}_R' class='form-control' type='text'{{#R}} value='{{R}}'{{/R}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_F'>F: </label><div class='col-sm-8'><input id='{{id}}_F' class='form-control' type='text'{{#F}} value='{{F}}'{{/F}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SchedClassType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_P").value; if ("" !== temp) obj["P"] = temp;
                temp = document.getElementById (id + "_R").value; if ("" !== temp) obj["R"] = temp;
                temp = document.getElementById (id + "_F").value; if ("" !== temp) obj["F"] = temp;

                return (obj);
            }
        }

        class MarketScheduleServices extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketScheduleServices;
                if (null == bucket)
                   cim_data.MarketScheduleServices = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketScheduleServices[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketScheduleServices";
                base.parse_attribute (/<cim:MarketScheduleServices.retrieveDefaultBidCurves\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "retrieveDefaultBidCurves", sub, context);
                base.parse_attribute (/<cim:MarketScheduleServices.retrieveMarketAwards\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "retrieveMarketAwards", sub, context);
                base.parse_attribute (/<cim:MarketScheduleServices.retrieveMPMResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "retrieveMPMResults", sub, context);
                base.parse_attribute (/<cim:MarketScheduleServices.retrieveSchedulePrices\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "retrieveSchedulePrices", sub, context);
                base.parse_attribute (/<cim:MarketScheduleServices.retrieveStartUpShutDownInstructions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "retrieveStartUpShutDownInstructions", sub, context);
                let bucket = context.parsed.MarketScheduleServices;
                if (null == bucket)
                   context.parsed.MarketScheduleServices = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "MarketScheduleServices", "retrieveDefaultBidCurves", "retrieveDefaultBidCurves", fields);
                base.export_attribute (obj, "MarketScheduleServices", "retrieveMarketAwards", "retrieveMarketAwards", fields);
                base.export_attribute (obj, "MarketScheduleServices", "retrieveMPMResults", "retrieveMPMResults", fields);
                base.export_attribute (obj, "MarketScheduleServices", "retrieveSchedulePrices", "retrieveSchedulePrices", fields);
                base.export_attribute (obj, "MarketScheduleServices", "retrieveStartUpShutDownInstructions", "retrieveStartUpShutDownInstructions", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketScheduleServices_collapse" aria-expanded="true" aria-controls="MarketScheduleServices_collapse" style="margin-left: 10px;">MarketScheduleServices</a></legend>
                    <div id="MarketScheduleServices_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#retrieveDefaultBidCurves}}<div><b>retrieveDefaultBidCurves</b>: {{retrieveDefaultBidCurves}}</div>{{/retrieveDefaultBidCurves}}
                    {{#retrieveMarketAwards}}<div><b>retrieveMarketAwards</b>: {{retrieveMarketAwards}}</div>{{/retrieveMarketAwards}}
                    {{#retrieveMPMResults}}<div><b>retrieveMPMResults</b>: {{retrieveMPMResults}}</div>{{/retrieveMPMResults}}
                    {{#retrieveSchedulePrices}}<div><b>retrieveSchedulePrices</b>: {{retrieveSchedulePrices}}</div>{{/retrieveSchedulePrices}}
                    {{#retrieveStartUpShutDownInstructions}}<div><b>retrieveStartUpShutDownInstructions</b>: {{retrieveStartUpShutDownInstructions}}</div>{{/retrieveStartUpShutDownInstructions}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketScheduleServices_collapse" aria-expanded="true" aria-controls="{{id}}_MarketScheduleServices_collapse" style="margin-left: 10px;">MarketScheduleServices</a></legend>
                    <div id="{{id}}_MarketScheduleServices_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_retrieveDefaultBidCurves'>retrieveDefaultBidCurves: </label><div class='col-sm-8'><input id='{{id}}_retrieveDefaultBidCurves' class='form-control' type='text'{{#retrieveDefaultBidCurves}} value='{{retrieveDefaultBidCurves}}'{{/retrieveDefaultBidCurves}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_retrieveMarketAwards'>retrieveMarketAwards: </label><div class='col-sm-8'><input id='{{id}}_retrieveMarketAwards' class='form-control' type='text'{{#retrieveMarketAwards}} value='{{retrieveMarketAwards}}'{{/retrieveMarketAwards}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_retrieveMPMResults'>retrieveMPMResults: </label><div class='col-sm-8'><input id='{{id}}_retrieveMPMResults' class='form-control' type='text'{{#retrieveMPMResults}} value='{{retrieveMPMResults}}'{{/retrieveMPMResults}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_retrieveSchedulePrices'>retrieveSchedulePrices: </label><div class='col-sm-8'><input id='{{id}}_retrieveSchedulePrices' class='form-control' type='text'{{#retrieveSchedulePrices}} value='{{retrieveSchedulePrices}}'{{/retrieveSchedulePrices}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_retrieveStartUpShutDownInstructions'>retrieveStartUpShutDownInstructions: </label><div class='col-sm-8'><input id='{{id}}_retrieveStartUpShutDownInstructions' class='form-control' type='text'{{#retrieveStartUpShutDownInstructions}} value='{{retrieveStartUpShutDownInstructions}}'{{/retrieveStartUpShutDownInstructions}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketScheduleServices" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_retrieveDefaultBidCurves").value; if ("" !== temp) obj["retrieveDefaultBidCurves"] = temp;
                temp = document.getElementById (id + "_retrieveMarketAwards").value; if ("" !== temp) obj["retrieveMarketAwards"] = temp;
                temp = document.getElementById (id + "_retrieveMPMResults").value; if ("" !== temp) obj["retrieveMPMResults"] = temp;
                temp = document.getElementById (id + "_retrieveSchedulePrices").value; if ("" !== temp) obj["retrieveSchedulePrices"] = temp;
                temp = document.getElementById (id + "_retrieveStartUpShutDownInstructions").value; if ("" !== temp) obj["retrieveStartUpShutDownInstructions"] = temp;

                return (obj);
            }
        }

        class DispatchTransactionType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DispatchTransactionType;
                if (null == bucket)
                   cim_data.DispatchTransactionType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DispatchTransactionType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DispatchTransactionType";
                base.parse_attribute (/<cim:DispatchTransactionType.Purchase\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Purchase", sub, context);
                base.parse_attribute (/<cim:DispatchTransactionType.Sale\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Sale", sub, context);
                let bucket = context.parsed.DispatchTransactionType;
                if (null == bucket)
                   context.parsed.DispatchTransactionType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "DispatchTransactionType", "Purchase", "Purchase", fields);
                base.export_attribute (obj, "DispatchTransactionType", "Sale", "Sale", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DispatchTransactionType_collapse" aria-expanded="true" aria-controls="DispatchTransactionType_collapse" style="margin-left: 10px;">DispatchTransactionType</a></legend>
                    <div id="DispatchTransactionType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Purchase}}<div><b>Purchase</b>: {{Purchase}}</div>{{/Purchase}}
                    {{#Sale}}<div><b>Sale</b>: {{Sale}}</div>{{/Sale}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DispatchTransactionType_collapse" aria-expanded="true" aria-controls="{{id}}_DispatchTransactionType_collapse" style="margin-left: 10px;">DispatchTransactionType</a></legend>
                    <div id="{{id}}_DispatchTransactionType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Purchase'>Purchase: </label><div class='col-sm-8'><input id='{{id}}_Purchase' class='form-control' type='text'{{#Purchase}} value='{{Purchase}}'{{/Purchase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Sale'>Sale: </label><div class='col-sm-8'><input id='{{id}}_Sale' class='form-control' type='text'{{#Sale}} value='{{Sale}}'{{/Sale}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DispatchTransactionType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Purchase").value; if ("" !== temp) obj["Purchase"] = temp;
                temp = document.getElementById (id + "_Sale").value; if ("" !== temp) obj["Sale"] = temp;

                return (obj);
            }
        }

        /**
         * zone type
         *
         */
        class ZoneType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ZoneType;
                if (null == bucket)
                   cim_data.ZoneType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ZoneType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ZoneType";
                base.parse_attribute (/<cim:ZoneType.LOADZONE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LOADZONE", sub, context);
                base.parse_attribute (/<cim:ZoneType.TRADINGHUB\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRADINGHUB", sub, context);
                base.parse_attribute (/<cim:ZoneType.RUCZONE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RUCZONE", sub, context);
                base.parse_attribute (/<cim:ZoneType.ASREGION\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ASREGION", sub, context);
                base.parse_attribute (/<cim:ZoneType.DCA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCA", sub, context);
                let bucket = context.parsed.ZoneType;
                if (null == bucket)
                   context.parsed.ZoneType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "ZoneType", "LOADZONE", "LOADZONE", fields);
                base.export_attribute (obj, "ZoneType", "TRADINGHUB", "TRADINGHUB", fields);
                base.export_attribute (obj, "ZoneType", "RUCZONE", "RUCZONE", fields);
                base.export_attribute (obj, "ZoneType", "ASREGION", "ASREGION", fields);
                base.export_attribute (obj, "ZoneType", "DCA", "DCA", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ZoneType_collapse" aria-expanded="true" aria-controls="ZoneType_collapse" style="margin-left: 10px;">ZoneType</a></legend>
                    <div id="ZoneType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#LOADZONE}}<div><b>LOADZONE</b>: {{LOADZONE}}</div>{{/LOADZONE}}
                    {{#TRADINGHUB}}<div><b>TRADINGHUB</b>: {{TRADINGHUB}}</div>{{/TRADINGHUB}}
                    {{#RUCZONE}}<div><b>RUCZONE</b>: {{RUCZONE}}</div>{{/RUCZONE}}
                    {{#ASREGION}}<div><b>ASREGION</b>: {{ASREGION}}</div>{{/ASREGION}}
                    {{#DCA}}<div><b>DCA</b>: {{DCA}}</div>{{/DCA}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ZoneType_collapse" aria-expanded="true" aria-controls="{{id}}_ZoneType_collapse" style="margin-left: 10px;">ZoneType</a></legend>
                    <div id="{{id}}_ZoneType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LOADZONE'>LOADZONE: </label><div class='col-sm-8'><input id='{{id}}_LOADZONE' class='form-control' type='text'{{#LOADZONE}} value='{{LOADZONE}}'{{/LOADZONE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRADINGHUB'>TRADINGHUB: </label><div class='col-sm-8'><input id='{{id}}_TRADINGHUB' class='form-control' type='text'{{#TRADINGHUB}} value='{{TRADINGHUB}}'{{/TRADINGHUB}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RUCZONE'>RUCZONE: </label><div class='col-sm-8'><input id='{{id}}_RUCZONE' class='form-control' type='text'{{#RUCZONE}} value='{{RUCZONE}}'{{/RUCZONE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ASREGION'>ASREGION: </label><div class='col-sm-8'><input id='{{id}}_ASREGION' class='form-control' type='text'{{#ASREGION}} value='{{ASREGION}}'{{/ASREGION}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DCA'>DCA: </label><div class='col-sm-8'><input id='{{id}}_DCA' class='form-control' type='text'{{#DCA}} value='{{DCA}}'{{/DCA}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ZoneType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_LOADZONE").value; if ("" !== temp) obj["LOADZONE"] = temp;
                temp = document.getElementById (id + "_TRADINGHUB").value; if ("" !== temp) obj["TRADINGHUB"] = temp;
                temp = document.getElementById (id + "_RUCZONE").value; if ("" !== temp) obj["RUCZONE"] = temp;
                temp = document.getElementById (id + "_ASREGION").value; if ("" !== temp) obj["ASREGION"] = temp;
                temp = document.getElementById (id + "_DCA").value; if ("" !== temp) obj["DCA"] = temp;

                return (obj);
            }
        }

        class MktSubClassType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktSubClassType;
                if (null == bucket)
                   cim_data.MktSubClassType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktSubClassType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MktSubClassType";
                base.parse_attribute (/<cim:MktSubClassType.Forecasted_UDC_Direct_Access_Load\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Forecasted_UDC_Direct_Access_Load", sub, context);
                base.parse_attribute (/<cim:MktSubClassType.Day_Ahead_RMR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Day_Ahead_RMR", sub, context);
                base.parse_attribute (/<cim:MktSubClassType.Ten_Min_Expost_Market_Info\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Ten_Min_Expost_Market_Info", sub, context);
                base.parse_attribute (/<cim:MktSubClassType.Day_Ahead_Interim_Market_Info\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Day_Ahead_Interim_Market_Info", sub, context);
                base.parse_attribute (/<cim:MktSubClassType.Day_Ahead_Final_Market_Info\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Day_Ahead_Final_Market_Info", sub, context);
                base.parse_attribute (/<cim:MktSubClassType.TTC\/ATC_Forecast_Information\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TTC/ATC_Forecast_Information", sub, context);
                base.parse_attribute (/<cim:MktSubClassType.TTC\/ATC_Hourly_Forecast\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TTC/ATC_Hourly_Forecast", sub, context);
                base.parse_attribute (/<cim:MktSubClassType.Branch_Group_Derates\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Branch_Group_Derates", sub, context);
                base.parse_attribute (/<cim:MktSubClassType.Hour_Ahead_Market_Info\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Hour_Ahead_Market_Info", sub, context);
                base.parse_attribute (/<cim:MktSubClassType.Hourly_Expost_Market_Info\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Hourly_Expost_Market_Info", sub, context);
                base.parse_attribute (/<cim:MktSubClassType.Public_Bid_Data\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Public_Bid_Data", sub, context);
                base.parse_attribute (/<cim:MktSubClassType.Day_Ahead_Forecast_Information\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Day_Ahead_Forecast_Information", sub, context);
                let bucket = context.parsed.MktSubClassType;
                if (null == bucket)
                   context.parsed.MktSubClassType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "MktSubClassType", "Forecasted_UDC_Direct_Access_Load", "Forecasted_UDC_Direct_Access_Load", fields);
                base.export_attribute (obj, "MktSubClassType", "Day_Ahead_RMR", "Day_Ahead_RMR", fields);
                base.export_attribute (obj, "MktSubClassType", "Ten_Min_Expost_Market_Info", "Ten_Min_Expost_Market_Info", fields);
                base.export_attribute (obj, "MktSubClassType", "Day_Ahead_Interim_Market_Info", "Day_Ahead_Interim_Market_Info", fields);
                base.export_attribute (obj, "MktSubClassType", "Day_Ahead_Final_Market_Info", "Day_Ahead_Final_Market_Info", fields);
                base.export_attribute (obj, "MktSubClassType", "TTC/ATC_Forecast_Information", "TTC\/ATC_Forecast_Information", fields);
                base.export_attribute (obj, "MktSubClassType", "TTC/ATC_Hourly_Forecast", "TTC\/ATC_Hourly_Forecast", fields);
                base.export_attribute (obj, "MktSubClassType", "Branch_Group_Derates", "Branch_Group_Derates", fields);
                base.export_attribute (obj, "MktSubClassType", "Hour_Ahead_Market_Info", "Hour_Ahead_Market_Info", fields);
                base.export_attribute (obj, "MktSubClassType", "Hourly_Expost_Market_Info", "Hourly_Expost_Market_Info", fields);
                base.export_attribute (obj, "MktSubClassType", "Public_Bid_Data", "Public_Bid_Data", fields);
                base.export_attribute (obj, "MktSubClassType", "Day_Ahead_Forecast_Information", "Day_Ahead_Forecast_Information", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktSubClassType_collapse" aria-expanded="true" aria-controls="MktSubClassType_collapse" style="margin-left: 10px;">MktSubClassType</a></legend>
                    <div id="MktSubClassType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Forecasted_UDC_Direct_Access_Load}}<div><b>Forecasted_UDC_Direct_Access_Load</b>: {{Forecasted_UDC_Direct_Access_Load}}</div>{{/Forecasted_UDC_Direct_Access_Load}}
                    {{#Day_Ahead_RMR}}<div><b>Day_Ahead_RMR</b>: {{Day_Ahead_RMR}}</div>{{/Day_Ahead_RMR}}
                    {{#Ten_Min_Expost_Market_Info}}<div><b>Ten_Min_Expost_Market_Info</b>: {{Ten_Min_Expost_Market_Info}}</div>{{/Ten_Min_Expost_Market_Info}}
                    {{#Day_Ahead_Interim_Market_Info}}<div><b>Day_Ahead_Interim_Market_Info</b>: {{Day_Ahead_Interim_Market_Info}}</div>{{/Day_Ahead_Interim_Market_Info}}
                    {{#Day_Ahead_Final_Market_Info}}<div><b>Day_Ahead_Final_Market_Info</b>: {{Day_Ahead_Final_Market_Info}}</div>{{/Day_Ahead_Final_Market_Info}}
                    {{#TTC/ATC_Forecast_Information}}<div><b>TTC/ATC_Forecast_Information</b>: {{TTC/ATC_Forecast_Information}}</div>{{/TTC/ATC_Forecast_Information}}
                    {{#TTC/ATC_Hourly_Forecast}}<div><b>TTC/ATC_Hourly_Forecast</b>: {{TTC/ATC_Hourly_Forecast}}</div>{{/TTC/ATC_Hourly_Forecast}}
                    {{#Branch_Group_Derates}}<div><b>Branch_Group_Derates</b>: {{Branch_Group_Derates}}</div>{{/Branch_Group_Derates}}
                    {{#Hour_Ahead_Market_Info}}<div><b>Hour_Ahead_Market_Info</b>: {{Hour_Ahead_Market_Info}}</div>{{/Hour_Ahead_Market_Info}}
                    {{#Hourly_Expost_Market_Info}}<div><b>Hourly_Expost_Market_Info</b>: {{Hourly_Expost_Market_Info}}</div>{{/Hourly_Expost_Market_Info}}
                    {{#Public_Bid_Data}}<div><b>Public_Bid_Data</b>: {{Public_Bid_Data}}</div>{{/Public_Bid_Data}}
                    {{#Day_Ahead_Forecast_Information}}<div><b>Day_Ahead_Forecast_Information</b>: {{Day_Ahead_Forecast_Information}}</div>{{/Day_Ahead_Forecast_Information}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktSubClassType_collapse" aria-expanded="true" aria-controls="{{id}}_MktSubClassType_collapse" style="margin-left: 10px;">MktSubClassType</a></legend>
                    <div id="{{id}}_MktSubClassType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Forecasted_UDC_Direct_Access_Load'>Forecasted_UDC_Direct_Access_Load: </label><div class='col-sm-8'><input id='{{id}}_Forecasted_UDC_Direct_Access_Load' class='form-control' type='text'{{#Forecasted_UDC_Direct_Access_Load}} value='{{Forecasted_UDC_Direct_Access_Load}}'{{/Forecasted_UDC_Direct_Access_Load}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Day_Ahead_RMR'>Day_Ahead_RMR: </label><div class='col-sm-8'><input id='{{id}}_Day_Ahead_RMR' class='form-control' type='text'{{#Day_Ahead_RMR}} value='{{Day_Ahead_RMR}}'{{/Day_Ahead_RMR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Ten_Min_Expost_Market_Info'>Ten_Min_Expost_Market_Info: </label><div class='col-sm-8'><input id='{{id}}_Ten_Min_Expost_Market_Info' class='form-control' type='text'{{#Ten_Min_Expost_Market_Info}} value='{{Ten_Min_Expost_Market_Info}}'{{/Ten_Min_Expost_Market_Info}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Day_Ahead_Interim_Market_Info'>Day_Ahead_Interim_Market_Info: </label><div class='col-sm-8'><input id='{{id}}_Day_Ahead_Interim_Market_Info' class='form-control' type='text'{{#Day_Ahead_Interim_Market_Info}} value='{{Day_Ahead_Interim_Market_Info}}'{{/Day_Ahead_Interim_Market_Info}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Day_Ahead_Final_Market_Info'>Day_Ahead_Final_Market_Info: </label><div class='col-sm-8'><input id='{{id}}_Day_Ahead_Final_Market_Info' class='form-control' type='text'{{#Day_Ahead_Final_Market_Info}} value='{{Day_Ahead_Final_Market_Info}}'{{/Day_Ahead_Final_Market_Info}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TTC/ATC_Forecast_Information'>TTC/ATC_Forecast_Information: </label><div class='col-sm-8'><input id='{{id}}_TTC/ATC_Forecast_Information' class='form-control' type='text'{{#TTC/ATC_Forecast_Information}} value='{{TTC/ATC_Forecast_Information}}'{{/TTC/ATC_Forecast_Information}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TTC/ATC_Hourly_Forecast'>TTC/ATC_Hourly_Forecast: </label><div class='col-sm-8'><input id='{{id}}_TTC/ATC_Hourly_Forecast' class='form-control' type='text'{{#TTC/ATC_Hourly_Forecast}} value='{{TTC/ATC_Hourly_Forecast}}'{{/TTC/ATC_Hourly_Forecast}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Branch_Group_Derates'>Branch_Group_Derates: </label><div class='col-sm-8'><input id='{{id}}_Branch_Group_Derates' class='form-control' type='text'{{#Branch_Group_Derates}} value='{{Branch_Group_Derates}}'{{/Branch_Group_Derates}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Hour_Ahead_Market_Info'>Hour_Ahead_Market_Info: </label><div class='col-sm-8'><input id='{{id}}_Hour_Ahead_Market_Info' class='form-control' type='text'{{#Hour_Ahead_Market_Info}} value='{{Hour_Ahead_Market_Info}}'{{/Hour_Ahead_Market_Info}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Hourly_Expost_Market_Info'>Hourly_Expost_Market_Info: </label><div class='col-sm-8'><input id='{{id}}_Hourly_Expost_Market_Info' class='form-control' type='text'{{#Hourly_Expost_Market_Info}} value='{{Hourly_Expost_Market_Info}}'{{/Hourly_Expost_Market_Info}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Public_Bid_Data'>Public_Bid_Data: </label><div class='col-sm-8'><input id='{{id}}_Public_Bid_Data' class='form-control' type='text'{{#Public_Bid_Data}} value='{{Public_Bid_Data}}'{{/Public_Bid_Data}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Day_Ahead_Forecast_Information'>Day_Ahead_Forecast_Information: </label><div class='col-sm-8'><input id='{{id}}_Day_Ahead_Forecast_Information' class='form-control' type='text'{{#Day_Ahead_Forecast_Information}} value='{{Day_Ahead_Forecast_Information}}'{{/Day_Ahead_Forecast_Information}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MktSubClassType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Forecasted_UDC_Direct_Access_Load").value; if ("" !== temp) obj["Forecasted_UDC_Direct_Access_Load"] = temp;
                temp = document.getElementById (id + "_Day_Ahead_RMR").value; if ("" !== temp) obj["Day_Ahead_RMR"] = temp;
                temp = document.getElementById (id + "_Ten_Min_Expost_Market_Info").value; if ("" !== temp) obj["Ten_Min_Expost_Market_Info"] = temp;
                temp = document.getElementById (id + "_Day_Ahead_Interim_Market_Info").value; if ("" !== temp) obj["Day_Ahead_Interim_Market_Info"] = temp;
                temp = document.getElementById (id + "_Day_Ahead_Final_Market_Info").value; if ("" !== temp) obj["Day_Ahead_Final_Market_Info"] = temp;
                temp = document.getElementById (id + "_TTC/ATC_Forecast_Information").value; if ("" !== temp) obj["TTC/ATC_Forecast_Information"] = temp;
                temp = document.getElementById (id + "_TTC/ATC_Hourly_Forecast").value; if ("" !== temp) obj["TTC/ATC_Hourly_Forecast"] = temp;
                temp = document.getElementById (id + "_Branch_Group_Derates").value; if ("" !== temp) obj["Branch_Group_Derates"] = temp;
                temp = document.getElementById (id + "_Hour_Ahead_Market_Info").value; if ("" !== temp) obj["Hour_Ahead_Market_Info"] = temp;
                temp = document.getElementById (id + "_Hourly_Expost_Market_Info").value; if ("" !== temp) obj["Hourly_Expost_Market_Info"] = temp;
                temp = document.getElementById (id + "_Public_Bid_Data").value; if ("" !== temp) obj["Public_Bid_Data"] = temp;
                temp = document.getElementById (id + "_Day_Ahead_Forecast_Information").value; if ("" !== temp) obj["Day_Ahead_Forecast_Information"] = temp;

                return (obj);
            }
        }

        /**
         * Y - indicates a resource is capable of setting the Markte Clearing Price
         * S - indicates the resource must submit bids for energy at \$ 0
         *
         * N - indicates the resource does not have to submit bids for energy at \$ 0
         *
         */
        class PriceSetFlag extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PriceSetFlag;
                if (null == bucket)
                   cim_data.PriceSetFlag = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PriceSetFlag[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PriceSetFlag";
                base.parse_attribute (/<cim:PriceSetFlag.Y\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Y", sub, context);
                base.parse_attribute (/<cim:PriceSetFlag.S\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "S", sub, context);
                base.parse_attribute (/<cim:PriceSetFlag.N\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "N", sub, context);
                let bucket = context.parsed.PriceSetFlag;
                if (null == bucket)
                   context.parsed.PriceSetFlag = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "PriceSetFlag", "Y", "Y", fields);
                base.export_attribute (obj, "PriceSetFlag", "S", "S", fields);
                base.export_attribute (obj, "PriceSetFlag", "N", "N", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PriceSetFlag_collapse" aria-expanded="true" aria-controls="PriceSetFlag_collapse" style="margin-left: 10px;">PriceSetFlag</a></legend>
                    <div id="PriceSetFlag_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Y}}<div><b>Y</b>: {{Y}}</div>{{/Y}}
                    {{#S}}<div><b>S</b>: {{S}}</div>{{/S}}
                    {{#N}}<div><b>N</b>: {{N}}</div>{{/N}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PriceSetFlag_collapse" aria-expanded="true" aria-controls="{{id}}_PriceSetFlag_collapse" style="margin-left: 10px;">PriceSetFlag</a></legend>
                    <div id="{{id}}_PriceSetFlag_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Y'>Y: </label><div class='col-sm-8'><input id='{{id}}_Y' class='form-control' type='text'{{#Y}} value='{{Y}}'{{/Y}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_S'>S: </label><div class='col-sm-8'><input id='{{id}}_S' class='form-control' type='text'{{#S}} value='{{S}}'{{/S}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_N'>N: </label><div class='col-sm-8'><input id='{{id}}_N' class='form-control' type='text'{{#N}} value='{{N}}'{{/N}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PriceSetFlag" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Y").value; if ("" !== temp) obj["Y"] = temp;
                temp = document.getElementById (id + "_S").value; if ("" !== temp) obj["S"] = temp;
                temp = document.getElementById (id + "_N").value; if ("" !== temp) obj["N"] = temp;

                return (obj);
            }
        }

        /**
         * market statement line item alias name
         *
         */
        class MarketStatementLineItemAliasName extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketStatementLineItemAliasName;
                if (null == bucket)
                   cim_data.MarketStatementLineItemAliasName = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketStatementLineItemAliasName[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketStatementLineItemAliasName";
                base.parse_attribute (/<cim:MarketStatementLineItemAliasName.TRADE_DATE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TRADE_DATE", sub, context);
                base.parse_attribute (/<cim:MarketStatementLineItemAliasName.PARENT_CHARGE_GROUP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PARENT_CHARGE_GROUP", sub, context);
                base.parse_attribute (/<cim:MarketStatementLineItemAliasName.CHARGE_GROUP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CHARGE_GROUP", sub, context);
                base.parse_attribute (/<cim:MarketStatementLineItemAliasName.CHARGE_CODE_SUMMARY\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CHARGE_CODE_SUMMARY", sub, context);
                base.parse_attribute (/<cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_TOTAL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CHARGE_CODE_INTERVAL_TOTAL", sub, context);
                base.parse_attribute (/<cim:MarketStatementLineItemAliasName.CHARGE_CODE_INTERVAL_DETAIL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CHARGE_CODE_INTERVAL_DETAIL", sub, context);
                let bucket = context.parsed.MarketStatementLineItemAliasName;
                if (null == bucket)
                   context.parsed.MarketStatementLineItemAliasName = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "MarketStatementLineItemAliasName", "TRADE_DATE", "TRADE_DATE", fields);
                base.export_attribute (obj, "MarketStatementLineItemAliasName", "PARENT_CHARGE_GROUP", "PARENT_CHARGE_GROUP", fields);
                base.export_attribute (obj, "MarketStatementLineItemAliasName", "CHARGE_GROUP", "CHARGE_GROUP", fields);
                base.export_attribute (obj, "MarketStatementLineItemAliasName", "CHARGE_CODE_SUMMARY", "CHARGE_CODE_SUMMARY", fields);
                base.export_attribute (obj, "MarketStatementLineItemAliasName", "CHARGE_CODE_INTERVAL_TOTAL", "CHARGE_CODE_INTERVAL_TOTAL", fields);
                base.export_attribute (obj, "MarketStatementLineItemAliasName", "CHARGE_CODE_INTERVAL_DETAIL", "CHARGE_CODE_INTERVAL_DETAIL", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketStatementLineItemAliasName_collapse" aria-expanded="true" aria-controls="MarketStatementLineItemAliasName_collapse" style="margin-left: 10px;">MarketStatementLineItemAliasName</a></legend>
                    <div id="MarketStatementLineItemAliasName_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#TRADE_DATE}}<div><b>TRADE_DATE</b>: {{TRADE_DATE}}</div>{{/TRADE_DATE}}
                    {{#PARENT_CHARGE_GROUP}}<div><b>PARENT_CHARGE_GROUP</b>: {{PARENT_CHARGE_GROUP}}</div>{{/PARENT_CHARGE_GROUP}}
                    {{#CHARGE_GROUP}}<div><b>CHARGE_GROUP</b>: {{CHARGE_GROUP}}</div>{{/CHARGE_GROUP}}
                    {{#CHARGE_CODE_SUMMARY}}<div><b>CHARGE_CODE_SUMMARY</b>: {{CHARGE_CODE_SUMMARY}}</div>{{/CHARGE_CODE_SUMMARY}}
                    {{#CHARGE_CODE_INTERVAL_TOTAL}}<div><b>CHARGE_CODE_INTERVAL_TOTAL</b>: {{CHARGE_CODE_INTERVAL_TOTAL}}</div>{{/CHARGE_CODE_INTERVAL_TOTAL}}
                    {{#CHARGE_CODE_INTERVAL_DETAIL}}<div><b>CHARGE_CODE_INTERVAL_DETAIL</b>: {{CHARGE_CODE_INTERVAL_DETAIL}}</div>{{/CHARGE_CODE_INTERVAL_DETAIL}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketStatementLineItemAliasName_collapse" aria-expanded="true" aria-controls="{{id}}_MarketStatementLineItemAliasName_collapse" style="margin-left: 10px;">MarketStatementLineItemAliasName</a></legend>
                    <div id="{{id}}_MarketStatementLineItemAliasName_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TRADE_DATE'>TRADE_DATE: </label><div class='col-sm-8'><input id='{{id}}_TRADE_DATE' class='form-control' type='text'{{#TRADE_DATE}} value='{{TRADE_DATE}}'{{/TRADE_DATE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PARENT_CHARGE_GROUP'>PARENT_CHARGE_GROUP: </label><div class='col-sm-8'><input id='{{id}}_PARENT_CHARGE_GROUP' class='form-control' type='text'{{#PARENT_CHARGE_GROUP}} value='{{PARENT_CHARGE_GROUP}}'{{/PARENT_CHARGE_GROUP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CHARGE_GROUP'>CHARGE_GROUP: </label><div class='col-sm-8'><input id='{{id}}_CHARGE_GROUP' class='form-control' type='text'{{#CHARGE_GROUP}} value='{{CHARGE_GROUP}}'{{/CHARGE_GROUP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CHARGE_CODE_SUMMARY'>CHARGE_CODE_SUMMARY: </label><div class='col-sm-8'><input id='{{id}}_CHARGE_CODE_SUMMARY' class='form-control' type='text'{{#CHARGE_CODE_SUMMARY}} value='{{CHARGE_CODE_SUMMARY}}'{{/CHARGE_CODE_SUMMARY}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CHARGE_CODE_INTERVAL_TOTAL'>CHARGE_CODE_INTERVAL_TOTAL: </label><div class='col-sm-8'><input id='{{id}}_CHARGE_CODE_INTERVAL_TOTAL' class='form-control' type='text'{{#CHARGE_CODE_INTERVAL_TOTAL}} value='{{CHARGE_CODE_INTERVAL_TOTAL}}'{{/CHARGE_CODE_INTERVAL_TOTAL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CHARGE_CODE_INTERVAL_DETAIL'>CHARGE_CODE_INTERVAL_DETAIL: </label><div class='col-sm-8'><input id='{{id}}_CHARGE_CODE_INTERVAL_DETAIL' class='form-control' type='text'{{#CHARGE_CODE_INTERVAL_DETAIL}} value='{{CHARGE_CODE_INTERVAL_DETAIL}}'{{/CHARGE_CODE_INTERVAL_DETAIL}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketStatementLineItemAliasName" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_TRADE_DATE").value; if ("" !== temp) obj["TRADE_DATE"] = temp;
                temp = document.getElementById (id + "_PARENT_CHARGE_GROUP").value; if ("" !== temp) obj["PARENT_CHARGE_GROUP"] = temp;
                temp = document.getElementById (id + "_CHARGE_GROUP").value; if ("" !== temp) obj["CHARGE_GROUP"] = temp;
                temp = document.getElementById (id + "_CHARGE_CODE_SUMMARY").value; if ("" !== temp) obj["CHARGE_CODE_SUMMARY"] = temp;
                temp = document.getElementById (id + "_CHARGE_CODE_INTERVAL_TOTAL").value; if ("" !== temp) obj["CHARGE_CODE_INTERVAL_TOTAL"] = temp;
                temp = document.getElementById (id + "_CHARGE_CODE_INTERVAL_DETAIL").value; if ("" !== temp) obj["CHARGE_CODE_INTERVAL_DETAIL"] = temp;

                return (obj);
            }
        }

        class CleanTradeProductType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CleanTradeProductType;
                if (null == bucket)
                   cim_data.CleanTradeProductType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CleanTradeProductType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CleanTradeProductType";
                base.parse_attribute (/<cim:CleanTradeProductType.PHY\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PHY", sub, context);
                base.parse_attribute (/<cim:CleanTradeProductType.APN\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "APN", sub, context);
                base.parse_attribute (/<cim:CleanTradeProductType.CPT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CPT", sub, context);
                base.parse_attribute (/<cim:CleanTradeProductType.RUT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RUT", sub, context);
                base.parse_attribute (/<cim:CleanTradeProductType.RDT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RDT", sub, context);
                base.parse_attribute (/<cim:CleanTradeProductType.SRT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SRT", sub, context);
                base.parse_attribute (/<cim:CleanTradeProductType.NRT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NRT", sub, context);
                let bucket = context.parsed.CleanTradeProductType;
                if (null == bucket)
                   context.parsed.CleanTradeProductType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "CleanTradeProductType", "PHY", "PHY", fields);
                base.export_attribute (obj, "CleanTradeProductType", "APN", "APN", fields);
                base.export_attribute (obj, "CleanTradeProductType", "CPT", "CPT", fields);
                base.export_attribute (obj, "CleanTradeProductType", "RUT", "RUT", fields);
                base.export_attribute (obj, "CleanTradeProductType", "RDT", "RDT", fields);
                base.export_attribute (obj, "CleanTradeProductType", "SRT", "SRT", fields);
                base.export_attribute (obj, "CleanTradeProductType", "NRT", "NRT", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CleanTradeProductType_collapse" aria-expanded="true" aria-controls="CleanTradeProductType_collapse" style="margin-left: 10px;">CleanTradeProductType</a></legend>
                    <div id="CleanTradeProductType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#PHY}}<div><b>PHY</b>: {{PHY}}</div>{{/PHY}}
                    {{#APN}}<div><b>APN</b>: {{APN}}</div>{{/APN}}
                    {{#CPT}}<div><b>CPT</b>: {{CPT}}</div>{{/CPT}}
                    {{#RUT}}<div><b>RUT</b>: {{RUT}}</div>{{/RUT}}
                    {{#RDT}}<div><b>RDT</b>: {{RDT}}</div>{{/RDT}}
                    {{#SRT}}<div><b>SRT</b>: {{SRT}}</div>{{/SRT}}
                    {{#NRT}}<div><b>NRT</b>: {{NRT}}</div>{{/NRT}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CleanTradeProductType_collapse" aria-expanded="true" aria-controls="{{id}}_CleanTradeProductType_collapse" style="margin-left: 10px;">CleanTradeProductType</a></legend>
                    <div id="{{id}}_CleanTradeProductType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PHY'>PHY: </label><div class='col-sm-8'><input id='{{id}}_PHY' class='form-control' type='text'{{#PHY}} value='{{PHY}}'{{/PHY}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_APN'>APN: </label><div class='col-sm-8'><input id='{{id}}_APN' class='form-control' type='text'{{#APN}} value='{{APN}}'{{/APN}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CPT'>CPT: </label><div class='col-sm-8'><input id='{{id}}_CPT' class='form-control' type='text'{{#CPT}} value='{{CPT}}'{{/CPT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RUT'>RUT: </label><div class='col-sm-8'><input id='{{id}}_RUT' class='form-control' type='text'{{#RUT}} value='{{RUT}}'{{/RUT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RDT'>RDT: </label><div class='col-sm-8'><input id='{{id}}_RDT' class='form-control' type='text'{{#RDT}} value='{{RDT}}'{{/RDT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SRT'>SRT: </label><div class='col-sm-8'><input id='{{id}}_SRT' class='form-control' type='text'{{#SRT}} value='{{SRT}}'{{/SRT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NRT'>NRT: </label><div class='col-sm-8'><input id='{{id}}_NRT' class='form-control' type='text'{{#NRT}} value='{{NRT}}'{{/NRT}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CleanTradeProductType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PHY").value; if ("" !== temp) obj["PHY"] = temp;
                temp = document.getElementById (id + "_APN").value; if ("" !== temp) obj["APN"] = temp;
                temp = document.getElementById (id + "_CPT").value; if ("" !== temp) obj["CPT"] = temp;
                temp = document.getElementById (id + "_RUT").value; if ("" !== temp) obj["RUT"] = temp;
                temp = document.getElementById (id + "_RDT").value; if ("" !== temp) obj["RDT"] = temp;
                temp = document.getElementById (id + "_SRT").value; if ("" !== temp) obj["SRT"] = temp;
                temp = document.getElementById (id + "_NRT").value; if ("" !== temp) obj["NRT"] = temp;

                return (obj);
            }
        }

        class TimeZoneType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TimeZoneType;
                if (null == bucket)
                   cim_data.TimeZoneType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TimeZoneType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TimeZoneType";
                base.parse_attribute (/<cim:TimeZoneType.PPT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PPT", sub, context);
                let bucket = context.parsed.TimeZoneType;
                if (null == bucket)
                   context.parsed.TimeZoneType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "TimeZoneType", "PPT", "PPT", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TimeZoneType_collapse" aria-expanded="true" aria-controls="TimeZoneType_collapse" style="margin-left: 10px;">TimeZoneType</a></legend>
                    <div id="TimeZoneType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#PPT}}<div><b>PPT</b>: {{PPT}}</div>{{/PPT}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TimeZoneType_collapse" aria-expanded="true" aria-controls="{{id}}_TimeZoneType_collapse" style="margin-left: 10px;">TimeZoneType</a></legend>
                    <div id="{{id}}_TimeZoneType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PPT'>PPT: </label><div class='col-sm-8'><input id='{{id}}_PPT' class='form-control' type='text'{{#PPT}} value='{{PPT}}'{{/PPT}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TimeZoneType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PPT").value; if ("" !== temp) obj["PPT"] = temp;

                return (obj);
            }
        }

        /**
         * market statement document status
         *
         */
        class MarketStatementDocStatus extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketStatementDocStatus;
                if (null == bucket)
                   cim_data.MarketStatementDocStatus = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketStatementDocStatus[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketStatementDocStatus";
                base.parse_attribute (/<cim:MarketStatementDocStatus.APPROVED\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "APPROVED", sub, context);
                base.parse_attribute (/<cim:MarketStatementDocStatus.CANCELLED\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CANCELLED", sub, context);
                let bucket = context.parsed.MarketStatementDocStatus;
                if (null == bucket)
                   context.parsed.MarketStatementDocStatus = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "MarketStatementDocStatus", "APPROVED", "APPROVED", fields);
                base.export_attribute (obj, "MarketStatementDocStatus", "CANCELLED", "CANCELLED", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketStatementDocStatus_collapse" aria-expanded="true" aria-controls="MarketStatementDocStatus_collapse" style="margin-left: 10px;">MarketStatementDocStatus</a></legend>
                    <div id="MarketStatementDocStatus_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#APPROVED}}<div><b>APPROVED</b>: {{APPROVED}}</div>{{/APPROVED}}
                    {{#CANCELLED}}<div><b>CANCELLED</b>: {{CANCELLED}}</div>{{/CANCELLED}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketStatementDocStatus_collapse" aria-expanded="true" aria-controls="{{id}}_MarketStatementDocStatus_collapse" style="margin-left: 10px;">MarketStatementDocStatus</a></legend>
                    <div id="{{id}}_MarketStatementDocStatus_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_APPROVED'>APPROVED: </label><div class='col-sm-8'><input id='{{id}}_APPROVED' class='form-control' type='text'{{#APPROVED}} value='{{APPROVED}}'{{/APPROVED}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CANCELLED'>CANCELLED: </label><div class='col-sm-8'><input id='{{id}}_CANCELLED' class='form-control' type='text'{{#CANCELLED}} value='{{CANCELLED}}'{{/CANCELLED}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketStatementDocStatus" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_APPROVED").value; if ("" !== temp) obj["APPROVED"] = temp;
                temp = document.getElementById (id + "_CANCELLED").value; if ("" !== temp) obj["CANCELLED"] = temp;

                return (obj);
            }
        }

        class LoadFollowingCapacityType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LoadFollowingCapacityType;
                if (null == bucket)
                   cim_data.LoadFollowingCapacityType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadFollowingCapacityType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LoadFollowingCapacityType";
                base.parse_attribute (/<cim:LoadFollowingCapacityType.UP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UP", sub, context);
                base.parse_attribute (/<cim:LoadFollowingCapacityType.DOWN\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DOWN", sub, context);
                let bucket = context.parsed.LoadFollowingCapacityType;
                if (null == bucket)
                   context.parsed.LoadFollowingCapacityType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "LoadFollowingCapacityType", "UP", "UP", fields);
                base.export_attribute (obj, "LoadFollowingCapacityType", "DOWN", "DOWN", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LoadFollowingCapacityType_collapse" aria-expanded="true" aria-controls="LoadFollowingCapacityType_collapse" style="margin-left: 10px;">LoadFollowingCapacityType</a></legend>
                    <div id="LoadFollowingCapacityType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#UP}}<div><b>UP</b>: {{UP}}</div>{{/UP}}
                    {{#DOWN}}<div><b>DOWN</b>: {{DOWN}}</div>{{/DOWN}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LoadFollowingCapacityType_collapse" aria-expanded="true" aria-controls="{{id}}_LoadFollowingCapacityType_collapse" style="margin-left: 10px;">LoadFollowingCapacityType</a></legend>
                    <div id="{{id}}_LoadFollowingCapacityType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UP'>UP: </label><div class='col-sm-8'><input id='{{id}}_UP' class='form-control' type='text'{{#UP}} value='{{UP}}'{{/UP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DOWN'>DOWN: </label><div class='col-sm-8'><input id='{{id}}_DOWN' class='form-control' type='text'{{#DOWN}} value='{{DOWN}}'{{/DOWN}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LoadFollowingCapacityType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_UP").value; if ("" !== temp) obj["UP"] = temp;
                temp = document.getElementById (id + "_DOWN").value; if ("" !== temp) obj["DOWN"] = temp;

                return (obj);
            }
        }

        class OASISMarketType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OASISMarketType;
                if (null == bucket)
                   cim_data.OASISMarketType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OASISMarketType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISMarketType";
                base.parse_attribute (/<cim:OASISMarketType.IFM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IFM", sub, context);
                base.parse_attribute (/<cim:OASISMarketType.RUC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RUC", sub, context);
                base.parse_attribute (/<cim:OASISMarketType.HASP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HASP", sub, context);
                base.parse_attribute (/<cim:OASISMarketType.RTM\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RTM", sub, context);
                base.parse_attribute (/<cim:OASISMarketType.N\/A\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "N/A", sub, context);
                base.parse_attribute (/<cim:OASISMarketType.All\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "All", sub, context);
                let bucket = context.parsed.OASISMarketType;
                if (null == bucket)
                   context.parsed.OASISMarketType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "OASISMarketType", "IFM", "IFM", fields);
                base.export_attribute (obj, "OASISMarketType", "RUC", "RUC", fields);
                base.export_attribute (obj, "OASISMarketType", "HASP", "HASP", fields);
                base.export_attribute (obj, "OASISMarketType", "RTM", "RTM", fields);
                base.export_attribute (obj, "OASISMarketType", "N/A", "N\/A", fields);
                base.export_attribute (obj, "OASISMarketType", "All", "All", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OASISMarketType_collapse" aria-expanded="true" aria-controls="OASISMarketType_collapse" style="margin-left: 10px;">OASISMarketType</a></legend>
                    <div id="OASISMarketType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#IFM}}<div><b>IFM</b>: {{IFM}}</div>{{/IFM}}
                    {{#RUC}}<div><b>RUC</b>: {{RUC}}</div>{{/RUC}}
                    {{#HASP}}<div><b>HASP</b>: {{HASP}}</div>{{/HASP}}
                    {{#RTM}}<div><b>RTM</b>: {{RTM}}</div>{{/RTM}}
                    {{#N/A}}<div><b>N/A</b>: {{N/A}}</div>{{/N/A}}
                    {{#All}}<div><b>All</b>: {{All}}</div>{{/All}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OASISMarketType_collapse" aria-expanded="true" aria-controls="{{id}}_OASISMarketType_collapse" style="margin-left: 10px;">OASISMarketType</a></legend>
                    <div id="{{id}}_OASISMarketType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IFM'>IFM: </label><div class='col-sm-8'><input id='{{id}}_IFM' class='form-control' type='text'{{#IFM}} value='{{IFM}}'{{/IFM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RUC'>RUC: </label><div class='col-sm-8'><input id='{{id}}_RUC' class='form-control' type='text'{{#RUC}} value='{{RUC}}'{{/RUC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HASP'>HASP: </label><div class='col-sm-8'><input id='{{id}}_HASP' class='form-control' type='text'{{#HASP}} value='{{HASP}}'{{/HASP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RTM'>RTM: </label><div class='col-sm-8'><input id='{{id}}_RTM' class='form-control' type='text'{{#RTM}} value='{{RTM}}'{{/RTM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_N/A'>N/A: </label><div class='col-sm-8'><input id='{{id}}_N/A' class='form-control' type='text'{{#N/A}} value='{{N/A}}'{{/N/A}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_All'>All: </label><div class='col-sm-8'><input id='{{id}}_All' class='form-control' type='text'{{#All}} value='{{All}}'{{/All}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OASISMarketType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_IFM").value; if ("" !== temp) obj["IFM"] = temp;
                temp = document.getElementById (id + "_RUC").value; if ("" !== temp) obj["RUC"] = temp;
                temp = document.getElementById (id + "_HASP").value; if ("" !== temp) obj["HASP"] = temp;
                temp = document.getElementById (id + "_RTM").value; if ("" !== temp) obj["RTM"] = temp;
                temp = document.getElementById (id + "_N/A").value; if ("" !== temp) obj["N/A"] = temp;
                temp = document.getElementById (id + "_All").value; if ("" !== temp) obj["All"] = temp;

                return (obj);
            }
        }

        class SourceSinkFlag extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SourceSinkFlag;
                if (null == bucket)
                   cim_data.SourceSinkFlag = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SourceSinkFlag[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SourceSinkFlag";
                base.parse_attribute (/<cim:SourceSinkFlag.CSNK\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CSNK", sub, context);
                base.parse_attribute (/<cim:SourceSinkFlag.CSRC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CSRC", sub, context);
                let bucket = context.parsed.SourceSinkFlag;
                if (null == bucket)
                   context.parsed.SourceSinkFlag = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "SourceSinkFlag", "CSNK", "CSNK", fields);
                base.export_attribute (obj, "SourceSinkFlag", "CSRC", "CSRC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SourceSinkFlag_collapse" aria-expanded="true" aria-controls="SourceSinkFlag_collapse" style="margin-left: 10px;">SourceSinkFlag</a></legend>
                    <div id="SourceSinkFlag_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#CSNK}}<div><b>CSNK</b>: {{CSNK}}</div>{{/CSNK}}
                    {{#CSRC}}<div><b>CSRC</b>: {{CSRC}}</div>{{/CSRC}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SourceSinkFlag_collapse" aria-expanded="true" aria-controls="{{id}}_SourceSinkFlag_collapse" style="margin-left: 10px;">SourceSinkFlag</a></legend>
                    <div id="{{id}}_SourceSinkFlag_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CSNK'>CSNK: </label><div class='col-sm-8'><input id='{{id}}_CSNK' class='form-control' type='text'{{#CSNK}} value='{{CSNK}}'{{/CSNK}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CSRC'>CSRC: </label><div class='col-sm-8'><input id='{{id}}_CSRC' class='form-control' type='text'{{#CSRC}} value='{{CSRC}}'{{/CSRC}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SourceSinkFlag" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_CSNK").value; if ("" !== temp) obj["CSNK"] = temp;
                temp = document.getElementById (id + "_CSRC").value; if ("" !== temp) obj["CSRC"] = temp;

                return (obj);
            }
        }

        /**
         * ancillary serivce types
         *
         */
        class AncillaryCommodityType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AncillaryCommodityType;
                if (null == bucket)
                   cim_data.AncillaryCommodityType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AncillaryCommodityType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AncillaryCommodityType";
                base.parse_attribute (/<cim:AncillaryCommodityType.REGUP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "REGUP", sub, context);
                base.parse_attribute (/<cim:AncillaryCommodityType.REGDN\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "REGDN", sub, context);
                base.parse_attribute (/<cim:AncillaryCommodityType.SPIN\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SPIN", sub, context);
                base.parse_attribute (/<cim:AncillaryCommodityType.NONSPIN\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NONSPIN", sub, context);
                let bucket = context.parsed.AncillaryCommodityType;
                if (null == bucket)
                   context.parsed.AncillaryCommodityType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "AncillaryCommodityType", "REGUP", "REGUP", fields);
                base.export_attribute (obj, "AncillaryCommodityType", "REGDN", "REGDN", fields);
                base.export_attribute (obj, "AncillaryCommodityType", "SPIN", "SPIN", fields);
                base.export_attribute (obj, "AncillaryCommodityType", "NONSPIN", "NONSPIN", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AncillaryCommodityType_collapse" aria-expanded="true" aria-controls="AncillaryCommodityType_collapse" style="margin-left: 10px;">AncillaryCommodityType</a></legend>
                    <div id="AncillaryCommodityType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#REGUP}}<div><b>REGUP</b>: {{REGUP}}</div>{{/REGUP}}
                    {{#REGDN}}<div><b>REGDN</b>: {{REGDN}}</div>{{/REGDN}}
                    {{#SPIN}}<div><b>SPIN</b>: {{SPIN}}</div>{{/SPIN}}
                    {{#NONSPIN}}<div><b>NONSPIN</b>: {{NONSPIN}}</div>{{/NONSPIN}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AncillaryCommodityType_collapse" aria-expanded="true" aria-controls="{{id}}_AncillaryCommodityType_collapse" style="margin-left: 10px;">AncillaryCommodityType</a></legend>
                    <div id="{{id}}_AncillaryCommodityType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_REGUP'>REGUP: </label><div class='col-sm-8'><input id='{{id}}_REGUP' class='form-control' type='text'{{#REGUP}} value='{{REGUP}}'{{/REGUP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_REGDN'>REGDN: </label><div class='col-sm-8'><input id='{{id}}_REGDN' class='form-control' type='text'{{#REGDN}} value='{{REGDN}}'{{/REGDN}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SPIN'>SPIN: </label><div class='col-sm-8'><input id='{{id}}_SPIN' class='form-control' type='text'{{#SPIN}} value='{{SPIN}}'{{/SPIN}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NONSPIN'>NONSPIN: </label><div class='col-sm-8'><input id='{{id}}_NONSPIN' class='form-control' type='text'{{#NONSPIN}} value='{{NONSPIN}}'{{/NONSPIN}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AncillaryCommodityType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_REGUP").value; if ("" !== temp) obj["REGUP"] = temp;
                temp = document.getElementById (id + "_REGDN").value; if ("" !== temp) obj["REGDN"] = temp;
                temp = document.getElementById (id + "_SPIN").value; if ("" !== temp) obj["SPIN"] = temp;
                temp = document.getElementById (id + "_NONSPIN").value; if ("" !== temp) obj["NONSPIN"] = temp;

                return (obj);
            }
        }

        class OASISErrCode extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OASISErrCode;
                if (null == bucket)
                   cim_data.OASISErrCode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OASISErrCode[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISErrCode";
                base.parse_attribute (/<cim:OASISErrCode.1000\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "1000", sub, context);
                base.parse_attribute (/<cim:OASISErrCode.1001\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "1001", sub, context);
                base.parse_attribute (/<cim:OASISErrCode.1002\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "1002", sub, context);
                base.parse_attribute (/<cim:OASISErrCode.1003\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "1003", sub, context);
                base.parse_attribute (/<cim:OASISErrCode.1004\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "1004", sub, context);
                base.parse_attribute (/<cim:OASISErrCode.1005\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "1005", sub, context);
                base.parse_attribute (/<cim:OASISErrCode.1006\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "1006", sub, context);
                base.parse_attribute (/<cim:OASISErrCode.1007\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "1007", sub, context);
                base.parse_attribute (/<cim:OASISErrCode.1008\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "1008", sub, context);
                base.parse_attribute (/<cim:OASISErrCode.1009\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "1009", sub, context);
                base.parse_attribute (/<cim:OASISErrCode.1010\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "1010", sub, context);
                let bucket = context.parsed.OASISErrCode;
                if (null == bucket)
                   context.parsed.OASISErrCode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "OASISErrCode", "1000", "1000", fields);
                base.export_attribute (obj, "OASISErrCode", "1001", "1001", fields);
                base.export_attribute (obj, "OASISErrCode", "1002", "1002", fields);
                base.export_attribute (obj, "OASISErrCode", "1003", "1003", fields);
                base.export_attribute (obj, "OASISErrCode", "1004", "1004", fields);
                base.export_attribute (obj, "OASISErrCode", "1005", "1005", fields);
                base.export_attribute (obj, "OASISErrCode", "1006", "1006", fields);
                base.export_attribute (obj, "OASISErrCode", "1007", "1007", fields);
                base.export_attribute (obj, "OASISErrCode", "1008", "1008", fields);
                base.export_attribute (obj, "OASISErrCode", "1009", "1009", fields);
                base.export_attribute (obj, "OASISErrCode", "1010", "1010", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OASISErrCode_collapse" aria-expanded="true" aria-controls="OASISErrCode_collapse" style="margin-left: 10px;">OASISErrCode</a></legend>
                    <div id="OASISErrCode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#1000}}<div><b>1000</b>: {{1000}}</div>{{/1000}}
                    {{#1001}}<div><b>1001</b>: {{1001}}</div>{{/1001}}
                    {{#1002}}<div><b>1002</b>: {{1002}}</div>{{/1002}}
                    {{#1003}}<div><b>1003</b>: {{1003}}</div>{{/1003}}
                    {{#1004}}<div><b>1004</b>: {{1004}}</div>{{/1004}}
                    {{#1005}}<div><b>1005</b>: {{1005}}</div>{{/1005}}
                    {{#1006}}<div><b>1006</b>: {{1006}}</div>{{/1006}}
                    {{#1007}}<div><b>1007</b>: {{1007}}</div>{{/1007}}
                    {{#1008}}<div><b>1008</b>: {{1008}}</div>{{/1008}}
                    {{#1009}}<div><b>1009</b>: {{1009}}</div>{{/1009}}
                    {{#1010}}<div><b>1010</b>: {{1010}}</div>{{/1010}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OASISErrCode_collapse" aria-expanded="true" aria-controls="{{id}}_OASISErrCode_collapse" style="margin-left: 10px;">OASISErrCode</a></legend>
                    <div id="{{id}}_OASISErrCode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_1000'>1000: </label><div class='col-sm-8'><input id='{{id}}_1000' class='form-control' type='text'{{#1000}} value='{{1000}}'{{/1000}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_1001'>1001: </label><div class='col-sm-8'><input id='{{id}}_1001' class='form-control' type='text'{{#1001}} value='{{1001}}'{{/1001}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_1002'>1002: </label><div class='col-sm-8'><input id='{{id}}_1002' class='form-control' type='text'{{#1002}} value='{{1002}}'{{/1002}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_1003'>1003: </label><div class='col-sm-8'><input id='{{id}}_1003' class='form-control' type='text'{{#1003}} value='{{1003}}'{{/1003}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_1004'>1004: </label><div class='col-sm-8'><input id='{{id}}_1004' class='form-control' type='text'{{#1004}} value='{{1004}}'{{/1004}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_1005'>1005: </label><div class='col-sm-8'><input id='{{id}}_1005' class='form-control' type='text'{{#1005}} value='{{1005}}'{{/1005}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_1006'>1006: </label><div class='col-sm-8'><input id='{{id}}_1006' class='form-control' type='text'{{#1006}} value='{{1006}}'{{/1006}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_1007'>1007: </label><div class='col-sm-8'><input id='{{id}}_1007' class='form-control' type='text'{{#1007}} value='{{1007}}'{{/1007}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_1008'>1008: </label><div class='col-sm-8'><input id='{{id}}_1008' class='form-control' type='text'{{#1008}} value='{{1008}}'{{/1008}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_1009'>1009: </label><div class='col-sm-8'><input id='{{id}}_1009' class='form-control' type='text'{{#1009}} value='{{1009}}'{{/1009}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_1010'>1010: </label><div class='col-sm-8'><input id='{{id}}_1010' class='form-control' type='text'{{#1010}} value='{{1010}}'{{/1010}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OASISErrCode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_1000").value; if ("" !== temp) obj["1000"] = temp;
                temp = document.getElementById (id + "_1001").value; if ("" !== temp) obj["1001"] = temp;
                temp = document.getElementById (id + "_1002").value; if ("" !== temp) obj["1002"] = temp;
                temp = document.getElementById (id + "_1003").value; if ("" !== temp) obj["1003"] = temp;
                temp = document.getElementById (id + "_1004").value; if ("" !== temp) obj["1004"] = temp;
                temp = document.getElementById (id + "_1005").value; if ("" !== temp) obj["1005"] = temp;
                temp = document.getElementById (id + "_1006").value; if ("" !== temp) obj["1006"] = temp;
                temp = document.getElementById (id + "_1007").value; if ("" !== temp) obj["1007"] = temp;
                temp = document.getElementById (id + "_1008").value; if ("" !== temp) obj["1008"] = temp;
                temp = document.getElementById (id + "_1009").value; if ("" !== temp) obj["1009"] = temp;
                temp = document.getElementById (id + "_1010").value; if ("" !== temp) obj["1010"] = temp;

                return (obj);
            }
        }

        /**
         * Description of market statement
         *
         */
        class MarketStatementDescription extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketStatementDescription;
                if (null == bucket)
                   cim_data.MarketStatementDescription = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketStatementDescription[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketStatementDescription";
                base.parse_attribute (/<cim:MarketStatementDescription.DAILY_INITIAL_CREDIT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DAILY_INITIAL_CREDIT", sub, context);
                base.parse_attribute (/<cim:MarketStatementDescription.DAILY_INITIAL_MARKET\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DAILY_INITIAL_MARKET", sub, context);
                base.parse_attribute (/<cim:MarketStatementDescription.MONTHLY_INITIAL_MARKET\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MONTHLY_INITIAL_MARKET", sub, context);
                base.parse_attribute (/<cim:MarketStatementDescription.DAILY_RECALC_MARKET\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DAILY_RECALC_MARKET", sub, context);
                base.parse_attribute (/<cim:MarketStatementDescription.MONTHLY_RECALC_MARKET\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MONTHLY_RECALC_MARKET", sub, context);
                let bucket = context.parsed.MarketStatementDescription;
                if (null == bucket)
                   context.parsed.MarketStatementDescription = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "MarketStatementDescription", "DAILY_INITIAL_CREDIT", "DAILY_INITIAL_CREDIT", fields);
                base.export_attribute (obj, "MarketStatementDescription", "DAILY_INITIAL_MARKET", "DAILY_INITIAL_MARKET", fields);
                base.export_attribute (obj, "MarketStatementDescription", "MONTHLY_INITIAL_MARKET", "MONTHLY_INITIAL_MARKET", fields);
                base.export_attribute (obj, "MarketStatementDescription", "DAILY_RECALC_MARKET", "DAILY_RECALC_MARKET", fields);
                base.export_attribute (obj, "MarketStatementDescription", "MONTHLY_RECALC_MARKET", "MONTHLY_RECALC_MARKET", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketStatementDescription_collapse" aria-expanded="true" aria-controls="MarketStatementDescription_collapse" style="margin-left: 10px;">MarketStatementDescription</a></legend>
                    <div id="MarketStatementDescription_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#DAILY_INITIAL_CREDIT}}<div><b>DAILY_INITIAL_CREDIT</b>: {{DAILY_INITIAL_CREDIT}}</div>{{/DAILY_INITIAL_CREDIT}}
                    {{#DAILY_INITIAL_MARKET}}<div><b>DAILY_INITIAL_MARKET</b>: {{DAILY_INITIAL_MARKET}}</div>{{/DAILY_INITIAL_MARKET}}
                    {{#MONTHLY_INITIAL_MARKET}}<div><b>MONTHLY_INITIAL_MARKET</b>: {{MONTHLY_INITIAL_MARKET}}</div>{{/MONTHLY_INITIAL_MARKET}}
                    {{#DAILY_RECALC_MARKET}}<div><b>DAILY_RECALC_MARKET</b>: {{DAILY_RECALC_MARKET}}</div>{{/DAILY_RECALC_MARKET}}
                    {{#MONTHLY_RECALC_MARKET}}<div><b>MONTHLY_RECALC_MARKET</b>: {{MONTHLY_RECALC_MARKET}}</div>{{/MONTHLY_RECALC_MARKET}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketStatementDescription_collapse" aria-expanded="true" aria-controls="{{id}}_MarketStatementDescription_collapse" style="margin-left: 10px;">MarketStatementDescription</a></legend>
                    <div id="{{id}}_MarketStatementDescription_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DAILY_INITIAL_CREDIT'>DAILY_INITIAL_CREDIT: </label><div class='col-sm-8'><input id='{{id}}_DAILY_INITIAL_CREDIT' class='form-control' type='text'{{#DAILY_INITIAL_CREDIT}} value='{{DAILY_INITIAL_CREDIT}}'{{/DAILY_INITIAL_CREDIT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DAILY_INITIAL_MARKET'>DAILY_INITIAL_MARKET: </label><div class='col-sm-8'><input id='{{id}}_DAILY_INITIAL_MARKET' class='form-control' type='text'{{#DAILY_INITIAL_MARKET}} value='{{DAILY_INITIAL_MARKET}}'{{/DAILY_INITIAL_MARKET}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MONTHLY_INITIAL_MARKET'>MONTHLY_INITIAL_MARKET: </label><div class='col-sm-8'><input id='{{id}}_MONTHLY_INITIAL_MARKET' class='form-control' type='text'{{#MONTHLY_INITIAL_MARKET}} value='{{MONTHLY_INITIAL_MARKET}}'{{/MONTHLY_INITIAL_MARKET}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DAILY_RECALC_MARKET'>DAILY_RECALC_MARKET: </label><div class='col-sm-8'><input id='{{id}}_DAILY_RECALC_MARKET' class='form-control' type='text'{{#DAILY_RECALC_MARKET}} value='{{DAILY_RECALC_MARKET}}'{{/DAILY_RECALC_MARKET}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MONTHLY_RECALC_MARKET'>MONTHLY_RECALC_MARKET: </label><div class='col-sm-8'><input id='{{id}}_MONTHLY_RECALC_MARKET' class='form-control' type='text'{{#MONTHLY_RECALC_MARKET}} value='{{MONTHLY_RECALC_MARKET}}'{{/MONTHLY_RECALC_MARKET}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketStatementDescription" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_DAILY_INITIAL_CREDIT").value; if ("" !== temp) obj["DAILY_INITIAL_CREDIT"] = temp;
                temp = document.getElementById (id + "_DAILY_INITIAL_MARKET").value; if ("" !== temp) obj["DAILY_INITIAL_MARKET"] = temp;
                temp = document.getElementById (id + "_MONTHLY_INITIAL_MARKET").value; if ("" !== temp) obj["MONTHLY_INITIAL_MARKET"] = temp;
                temp = document.getElementById (id + "_DAILY_RECALC_MARKET").value; if ("" !== temp) obj["DAILY_RECALC_MARKET"] = temp;
                temp = document.getElementById (id + "_MONTHLY_RECALC_MARKET").value; if ("" !== temp) obj["MONTHLY_RECALC_MARKET"] = temp;

                return (obj);
            }
        }

        class SystemType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SystemType;
                if (null == bucket)
                   cim_data.SystemType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SystemType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SystemType";
                base.parse_attribute (/<cim:SystemType.OASIS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OASIS", sub, context);
                let bucket = context.parsed.SystemType;
                if (null == bucket)
                   context.parsed.SystemType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "SystemType", "OASIS", "OASIS", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SystemType_collapse" aria-expanded="true" aria-controls="SystemType_collapse" style="margin-left: 10px;">SystemType</a></legend>
                    <div id="SystemType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#OASIS}}<div><b>OASIS</b>: {{OASIS}}</div>{{/OASIS}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SystemType_collapse" aria-expanded="true" aria-controls="{{id}}_SystemType_collapse" style="margin-left: 10px;">SystemType</a></legend>
                    <div id="{{id}}_SystemType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OASIS'>OASIS: </label><div class='col-sm-8'><input id='{{id}}_OASIS' class='form-control' type='text'{{#OASIS}} value='{{OASIS}}'{{/OASIS}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SystemType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_OASIS").value; if ("" !== temp) obj["OASIS"] = temp;

                return (obj);
            }
        }

        class OASISStatusType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.OASISStatusType;
                if (null == bucket)
                   cim_data.OASISStatusType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OASISStatusType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OASISStatusType";
                base.parse_attribute (/<cim:OASISStatusType.Data_Transfer_Procedure_Initiated\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Data_Transfer_Procedure_Initiated", sub, context);
                base.parse_attribute (/<cim:OASISStatusType.Valid\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Valid", sub, context);
                base.parse_attribute (/<cim:OASISStatusType.Obsolete\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Obsolete", sub, context);
                base.parse_attribute (/<cim:OASISStatusType.Data_Transfer_Succesful\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Data_Transfer_Succesful", sub, context);
                base.parse_attribute (/<cim:OASISStatusType.Push_Failed\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Push_Failed", sub, context);
                base.parse_attribute (/<cim:OASISStatusType.Forced_Termination\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Forced_Termination", sub, context);
                let bucket = context.parsed.OASISStatusType;
                if (null == bucket)
                   context.parsed.OASISStatusType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "OASISStatusType", "Data_Transfer_Procedure_Initiated", "Data_Transfer_Procedure_Initiated", fields);
                base.export_attribute (obj, "OASISStatusType", "Valid", "Valid", fields);
                base.export_attribute (obj, "OASISStatusType", "Obsolete", "Obsolete", fields);
                base.export_attribute (obj, "OASISStatusType", "Data_Transfer_Succesful", "Data_Transfer_Succesful", fields);
                base.export_attribute (obj, "OASISStatusType", "Push_Failed", "Push_Failed", fields);
                base.export_attribute (obj, "OASISStatusType", "Forced_Termination", "Forced_Termination", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OASISStatusType_collapse" aria-expanded="true" aria-controls="OASISStatusType_collapse" style="margin-left: 10px;">OASISStatusType</a></legend>
                    <div id="OASISStatusType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Data_Transfer_Procedure_Initiated}}<div><b>Data_Transfer_Procedure_Initiated</b>: {{Data_Transfer_Procedure_Initiated}}</div>{{/Data_Transfer_Procedure_Initiated}}
                    {{#Valid}}<div><b>Valid</b>: {{Valid}}</div>{{/Valid}}
                    {{#Obsolete}}<div><b>Obsolete</b>: {{Obsolete}}</div>{{/Obsolete}}
                    {{#Data_Transfer_Succesful}}<div><b>Data_Transfer_Succesful</b>: {{Data_Transfer_Succesful}}</div>{{/Data_Transfer_Succesful}}
                    {{#Push_Failed}}<div><b>Push_Failed</b>: {{Push_Failed}}</div>{{/Push_Failed}}
                    {{#Forced_Termination}}<div><b>Forced_Termination</b>: {{Forced_Termination}}</div>{{/Forced_Termination}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OASISStatusType_collapse" aria-expanded="true" aria-controls="{{id}}_OASISStatusType_collapse" style="margin-left: 10px;">OASISStatusType</a></legend>
                    <div id="{{id}}_OASISStatusType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Data_Transfer_Procedure_Initiated'>Data_Transfer_Procedure_Initiated: </label><div class='col-sm-8'><input id='{{id}}_Data_Transfer_Procedure_Initiated' class='form-control' type='text'{{#Data_Transfer_Procedure_Initiated}} value='{{Data_Transfer_Procedure_Initiated}}'{{/Data_Transfer_Procedure_Initiated}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Valid'>Valid: </label><div class='col-sm-8'><input id='{{id}}_Valid' class='form-control' type='text'{{#Valid}} value='{{Valid}}'{{/Valid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Obsolete'>Obsolete: </label><div class='col-sm-8'><input id='{{id}}_Obsolete' class='form-control' type='text'{{#Obsolete}} value='{{Obsolete}}'{{/Obsolete}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Data_Transfer_Succesful'>Data_Transfer_Succesful: </label><div class='col-sm-8'><input id='{{id}}_Data_Transfer_Succesful' class='form-control' type='text'{{#Data_Transfer_Succesful}} value='{{Data_Transfer_Succesful}}'{{/Data_Transfer_Succesful}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Push_Failed'>Push_Failed: </label><div class='col-sm-8'><input id='{{id}}_Push_Failed' class='form-control' type='text'{{#Push_Failed}} value='{{Push_Failed}}'{{/Push_Failed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Forced_Termination'>Forced_Termination: </label><div class='col-sm-8'><input id='{{id}}_Forced_Termination' class='form-control' type='text'{{#Forced_Termination}} value='{{Forced_Termination}}'{{/Forced_Termination}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "OASISStatusType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Data_Transfer_Procedure_Initiated").value; if ("" !== temp) obj["Data_Transfer_Procedure_Initiated"] = temp;
                temp = document.getElementById (id + "_Valid").value; if ("" !== temp) obj["Valid"] = temp;
                temp = document.getElementById (id + "_Obsolete").value; if ("" !== temp) obj["Obsolete"] = temp;
                temp = document.getElementById (id + "_Data_Transfer_Succesful").value; if ("" !== temp) obj["Data_Transfer_Succesful"] = temp;
                temp = document.getElementById (id + "_Push_Failed").value; if ("" !== temp) obj["Push_Failed"] = temp;
                temp = document.getElementById (id + "_Forced_Termination").value; if ("" !== temp) obj["Forced_Termination"] = temp;

                return (obj);
            }
        }

        class SelfSchedTypeRawBid extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.SelfSchedTypeRawBid;
                if (null == bucket)
                   cim_data.SelfSchedTypeRawBid = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SelfSchedTypeRawBid[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SelfSchedTypeRawBid";
                base.parse_attribute (/<cim:SelfSchedTypeRawBid.PT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PT", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeRawBid.ETC\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ETC", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeRawBid.TOR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TOR", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeRawBid.RMT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMT", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeRawBid.SP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SP", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeRawBid.RA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RA", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeRawBid.BAS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BAS", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeRawBid.LOF\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LOF", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeRawBid.WHL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WHL", sub, context);
                base.parse_attribute (/<cim:SelfSchedTypeRawBid.LPT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LPT", sub, context);
                let bucket = context.parsed.SelfSchedTypeRawBid;
                if (null == bucket)
                   context.parsed.SelfSchedTypeRawBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "SelfSchedTypeRawBid", "PT", "PT", fields);
                base.export_attribute (obj, "SelfSchedTypeRawBid", "ETC", "ETC", fields);
                base.export_attribute (obj, "SelfSchedTypeRawBid", "TOR", "TOR", fields);
                base.export_attribute (obj, "SelfSchedTypeRawBid", "RMT", "RMT", fields);
                base.export_attribute (obj, "SelfSchedTypeRawBid", "SP", "SP", fields);
                base.export_attribute (obj, "SelfSchedTypeRawBid", "RA", "RA", fields);
                base.export_attribute (obj, "SelfSchedTypeRawBid", "BAS", "BAS", fields);
                base.export_attribute (obj, "SelfSchedTypeRawBid", "LOF", "LOF", fields);
                base.export_attribute (obj, "SelfSchedTypeRawBid", "WHL", "WHL", fields);
                base.export_attribute (obj, "SelfSchedTypeRawBid", "LPT", "LPT", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SelfSchedTypeRawBid_collapse" aria-expanded="true" aria-controls="SelfSchedTypeRawBid_collapse" style="margin-left: 10px;">SelfSchedTypeRawBid</a></legend>
                    <div id="SelfSchedTypeRawBid_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#PT}}<div><b>PT</b>: {{PT}}</div>{{/PT}}
                    {{#ETC}}<div><b>ETC</b>: {{ETC}}</div>{{/ETC}}
                    {{#TOR}}<div><b>TOR</b>: {{TOR}}</div>{{/TOR}}
                    {{#RMT}}<div><b>RMT</b>: {{RMT}}</div>{{/RMT}}
                    {{#SP}}<div><b>SP</b>: {{SP}}</div>{{/SP}}
                    {{#RA}}<div><b>RA</b>: {{RA}}</div>{{/RA}}
                    {{#BAS}}<div><b>BAS</b>: {{BAS}}</div>{{/BAS}}
                    {{#LOF}}<div><b>LOF</b>: {{LOF}}</div>{{/LOF}}
                    {{#WHL}}<div><b>WHL</b>: {{WHL}}</div>{{/WHL}}
                    {{#LPT}}<div><b>LPT</b>: {{LPT}}</div>{{/LPT}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SelfSchedTypeRawBid_collapse" aria-expanded="true" aria-controls="{{id}}_SelfSchedTypeRawBid_collapse" style="margin-left: 10px;">SelfSchedTypeRawBid</a></legend>
                    <div id="{{id}}_SelfSchedTypeRawBid_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PT'>PT: </label><div class='col-sm-8'><input id='{{id}}_PT' class='form-control' type='text'{{#PT}} value='{{PT}}'{{/PT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ETC'>ETC: </label><div class='col-sm-8'><input id='{{id}}_ETC' class='form-control' type='text'{{#ETC}} value='{{ETC}}'{{/ETC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TOR'>TOR: </label><div class='col-sm-8'><input id='{{id}}_TOR' class='form-control' type='text'{{#TOR}} value='{{TOR}}'{{/TOR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RMT'>RMT: </label><div class='col-sm-8'><input id='{{id}}_RMT' class='form-control' type='text'{{#RMT}} value='{{RMT}}'{{/RMT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SP'>SP: </label><div class='col-sm-8'><input id='{{id}}_SP' class='form-control' type='text'{{#SP}} value='{{SP}}'{{/SP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RA'>RA: </label><div class='col-sm-8'><input id='{{id}}_RA' class='form-control' type='text'{{#RA}} value='{{RA}}'{{/RA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BAS'>BAS: </label><div class='col-sm-8'><input id='{{id}}_BAS' class='form-control' type='text'{{#BAS}} value='{{BAS}}'{{/BAS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LOF'>LOF: </label><div class='col-sm-8'><input id='{{id}}_LOF' class='form-control' type='text'{{#LOF}} value='{{LOF}}'{{/LOF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WHL'>WHL: </label><div class='col-sm-8'><input id='{{id}}_WHL' class='form-control' type='text'{{#WHL}} value='{{WHL}}'{{/WHL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LPT'>LPT: </label><div class='col-sm-8'><input id='{{id}}_LPT' class='form-control' type='text'{{#LPT}} value='{{LPT}}'{{/LPT}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SelfSchedTypeRawBid" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PT").value; if ("" !== temp) obj["PT"] = temp;
                temp = document.getElementById (id + "_ETC").value; if ("" !== temp) obj["ETC"] = temp;
                temp = document.getElementById (id + "_TOR").value; if ("" !== temp) obj["TOR"] = temp;
                temp = document.getElementById (id + "_RMT").value; if ("" !== temp) obj["RMT"] = temp;
                temp = document.getElementById (id + "_SP").value; if ("" !== temp) obj["SP"] = temp;
                temp = document.getElementById (id + "_RA").value; if ("" !== temp) obj["RA"] = temp;
                temp = document.getElementById (id + "_BAS").value; if ("" !== temp) obj["BAS"] = temp;
                temp = document.getElementById (id + "_LOF").value; if ("" !== temp) obj["LOF"] = temp;
                temp = document.getElementById (id + "_WHL").value; if ("" !== temp) obj["WHL"] = temp;
                temp = document.getElementById (id + "_LPT").value; if ("" !== temp) obj["LPT"] = temp;

                return (obj);
            }
        }

        /**
         * MIN_CONSTRAINT
         * MAX_CONSTRAINT
         *
         * FIXED_CONSTRAINT
         *
         */
        class ADSInstructionTypeOOS extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ADSInstructionTypeOOS;
                if (null == bucket)
                   cim_data.ADSInstructionTypeOOS = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ADSInstructionTypeOOS[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ADSInstructionTypeOOS";
                base.parse_attribute (/<cim:ADSInstructionTypeOOS.MIN_CONSTRAINT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MIN_CONSTRAINT", sub, context);
                base.parse_attribute (/<cim:ADSInstructionTypeOOS.MAX_CONSTRAINT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MAX_CONSTRAINT", sub, context);
                base.parse_attribute (/<cim:ADSInstructionTypeOOS.FIXED_CONSTRAINT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FIXED_CONSTRAINT", sub, context);
                let bucket = context.parsed.ADSInstructionTypeOOS;
                if (null == bucket)
                   context.parsed.ADSInstructionTypeOOS = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "ADSInstructionTypeOOS", "MIN_CONSTRAINT", "MIN_CONSTRAINT", fields);
                base.export_attribute (obj, "ADSInstructionTypeOOS", "MAX_CONSTRAINT", "MAX_CONSTRAINT", fields);
                base.export_attribute (obj, "ADSInstructionTypeOOS", "FIXED_CONSTRAINT", "FIXED_CONSTRAINT", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ADSInstructionTypeOOS_collapse" aria-expanded="true" aria-controls="ADSInstructionTypeOOS_collapse" style="margin-left: 10px;">ADSInstructionTypeOOS</a></legend>
                    <div id="ADSInstructionTypeOOS_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#MIN_CONSTRAINT}}<div><b>MIN_CONSTRAINT</b>: {{MIN_CONSTRAINT}}</div>{{/MIN_CONSTRAINT}}
                    {{#MAX_CONSTRAINT}}<div><b>MAX_CONSTRAINT</b>: {{MAX_CONSTRAINT}}</div>{{/MAX_CONSTRAINT}}
                    {{#FIXED_CONSTRAINT}}<div><b>FIXED_CONSTRAINT</b>: {{FIXED_CONSTRAINT}}</div>{{/FIXED_CONSTRAINT}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ADSInstructionTypeOOS_collapse" aria-expanded="true" aria-controls="{{id}}_ADSInstructionTypeOOS_collapse" style="margin-left: 10px;">ADSInstructionTypeOOS</a></legend>
                    <div id="{{id}}_ADSInstructionTypeOOS_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MIN_CONSTRAINT'>MIN_CONSTRAINT: </label><div class='col-sm-8'><input id='{{id}}_MIN_CONSTRAINT' class='form-control' type='text'{{#MIN_CONSTRAINT}} value='{{MIN_CONSTRAINT}}'{{/MIN_CONSTRAINT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MAX_CONSTRAINT'>MAX_CONSTRAINT: </label><div class='col-sm-8'><input id='{{id}}_MAX_CONSTRAINT' class='form-control' type='text'{{#MAX_CONSTRAINT}} value='{{MAX_CONSTRAINT}}'{{/MAX_CONSTRAINT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FIXED_CONSTRAINT'>FIXED_CONSTRAINT: </label><div class='col-sm-8'><input id='{{id}}_FIXED_CONSTRAINT' class='form-control' type='text'{{#FIXED_CONSTRAINT}} value='{{FIXED_CONSTRAINT}}'{{/FIXED_CONSTRAINT}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ADSInstructionTypeOOS" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MIN_CONSTRAINT").value; if ("" !== temp) obj["MIN_CONSTRAINT"] = temp;
                temp = document.getElementById (id + "_MAX_CONSTRAINT").value; if ("" !== temp) obj["MAX_CONSTRAINT"] = temp;
                temp = document.getElementById (id + "_FIXED_CONSTRAINT").value; if ("" !== temp) obj["FIXED_CONSTRAINT"] = temp;

                return (obj);
            }
        }

        class JobScheduleType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.JobScheduleType;
                if (null == bucket)
                   cim_data.JobScheduleType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.JobScheduleType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "JobScheduleType";
                base.parse_attribute (/<cim:JobScheduleType.CRITICAL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CRITICAL", sub, context);
                base.parse_attribute (/<cim:JobScheduleType.NONCRITICAL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NONCRITICAL", sub, context);
                let bucket = context.parsed.JobScheduleType;
                if (null == bucket)
                   context.parsed.JobScheduleType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "JobScheduleType", "CRITICAL", "CRITICAL", fields);
                base.export_attribute (obj, "JobScheduleType", "NONCRITICAL", "NONCRITICAL", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#JobScheduleType_collapse" aria-expanded="true" aria-controls="JobScheduleType_collapse" style="margin-left: 10px;">JobScheduleType</a></legend>
                    <div id="JobScheduleType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#CRITICAL}}<div><b>CRITICAL</b>: {{CRITICAL}}</div>{{/CRITICAL}}
                    {{#NONCRITICAL}}<div><b>NONCRITICAL</b>: {{NONCRITICAL}}</div>{{/NONCRITICAL}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_JobScheduleType_collapse" aria-expanded="true" aria-controls="{{id}}_JobScheduleType_collapse" style="margin-left: 10px;">JobScheduleType</a></legend>
                    <div id="{{id}}_JobScheduleType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CRITICAL'>CRITICAL: </label><div class='col-sm-8'><input id='{{id}}_CRITICAL' class='form-control' type='text'{{#CRITICAL}} value='{{CRITICAL}}'{{/CRITICAL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NONCRITICAL'>NONCRITICAL: </label><div class='col-sm-8'><input id='{{id}}_NONCRITICAL' class='form-control' type='text'{{#NONCRITICAL}} value='{{NONCRITICAL}}'{{/NONCRITICAL}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "JobScheduleType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_CRITICAL").value; if ("" !== temp) obj["CRITICAL"] = temp;
                temp = document.getElementById (id + "_NONCRITICAL").value; if ("" !== temp) obj["NONCRITICAL"] = temp;

                return (obj);
            }
        }

        /**
         * Path Flow - PF
         * Path Inflow Limit - PIL
         * Path Inflow Available Limit - PIAL
         * Path Inflow Armed Limit - PIML
         * Path Outflow Limit - POL
         * Path Outflow Available Limit - POAL
         * Path Outflow Armed Limit - OARL
         * Generation Output - GO
         * Generation Max Operating Limit - GMOL
         * Generation Min Operating Limit - GNOL
         * Generation Regulation - GR
         * Generation Status - GS
         * Pump Production - PP
         * System Load - SL
         * System ACE - ACE
         *
         * System INADV - INADV
         *
         */
        class MeasurementTypeEMS extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MeasurementTypeEMS;
                if (null == bucket)
                   cim_data.MeasurementTypeEMS = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MeasurementTypeEMS[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MeasurementTypeEMS";
                base.parse_attribute (/<cim:MeasurementTypeEMS.PF\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PF", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.PIL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PIL", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.PIAL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PIAL", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.PIML\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PIML", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.POL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "POL", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.POAL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "POAL", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.OARL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OARL", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.GO\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GO", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.GMOL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GMOL", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.GNOL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GNOL", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.GR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GR", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.GS\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GS", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.PP\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PP", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.SL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SL", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.ACE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ACE", sub, context);
                base.parse_attribute (/<cim:MeasurementTypeEMS.INADV\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "INADV", sub, context);
                let bucket = context.parsed.MeasurementTypeEMS;
                if (null == bucket)
                   context.parsed.MeasurementTypeEMS = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "MeasurementTypeEMS", "PF", "PF", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "PIL", "PIL", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "PIAL", "PIAL", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "PIML", "PIML", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "POL", "POL", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "POAL", "POAL", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "OARL", "OARL", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "GO", "GO", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "GMOL", "GMOL", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "GNOL", "GNOL", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "GR", "GR", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "GS", "GS", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "PP", "PP", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "SL", "SL", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "ACE", "ACE", fields);
                base.export_attribute (obj, "MeasurementTypeEMS", "INADV", "INADV", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MeasurementTypeEMS_collapse" aria-expanded="true" aria-controls="MeasurementTypeEMS_collapse" style="margin-left: 10px;">MeasurementTypeEMS</a></legend>
                    <div id="MeasurementTypeEMS_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#PF}}<div><b>PF</b>: {{PF}}</div>{{/PF}}
                    {{#PIL}}<div><b>PIL</b>: {{PIL}}</div>{{/PIL}}
                    {{#PIAL}}<div><b>PIAL</b>: {{PIAL}}</div>{{/PIAL}}
                    {{#PIML}}<div><b>PIML</b>: {{PIML}}</div>{{/PIML}}
                    {{#POL}}<div><b>POL</b>: {{POL}}</div>{{/POL}}
                    {{#POAL}}<div><b>POAL</b>: {{POAL}}</div>{{/POAL}}
                    {{#OARL}}<div><b>OARL</b>: {{OARL}}</div>{{/OARL}}
                    {{#GO}}<div><b>GO</b>: {{GO}}</div>{{/GO}}
                    {{#GMOL}}<div><b>GMOL</b>: {{GMOL}}</div>{{/GMOL}}
                    {{#GNOL}}<div><b>GNOL</b>: {{GNOL}}</div>{{/GNOL}}
                    {{#GR}}<div><b>GR</b>: {{GR}}</div>{{/GR}}
                    {{#GS}}<div><b>GS</b>: {{GS}}</div>{{/GS}}
                    {{#PP}}<div><b>PP</b>: {{PP}}</div>{{/PP}}
                    {{#SL}}<div><b>SL</b>: {{SL}}</div>{{/SL}}
                    {{#ACE}}<div><b>ACE</b>: {{ACE}}</div>{{/ACE}}
                    {{#INADV}}<div><b>INADV</b>: {{INADV}}</div>{{/INADV}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MeasurementTypeEMS_collapse" aria-expanded="true" aria-controls="{{id}}_MeasurementTypeEMS_collapse" style="margin-left: 10px;">MeasurementTypeEMS</a></legend>
                    <div id="{{id}}_MeasurementTypeEMS_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PF'>PF: </label><div class='col-sm-8'><input id='{{id}}_PF' class='form-control' type='text'{{#PF}} value='{{PF}}'{{/PF}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PIL'>PIL: </label><div class='col-sm-8'><input id='{{id}}_PIL' class='form-control' type='text'{{#PIL}} value='{{PIL}}'{{/PIL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PIAL'>PIAL: </label><div class='col-sm-8'><input id='{{id}}_PIAL' class='form-control' type='text'{{#PIAL}} value='{{PIAL}}'{{/PIAL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PIML'>PIML: </label><div class='col-sm-8'><input id='{{id}}_PIML' class='form-control' type='text'{{#PIML}} value='{{PIML}}'{{/PIML}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_POL'>POL: </label><div class='col-sm-8'><input id='{{id}}_POL' class='form-control' type='text'{{#POL}} value='{{POL}}'{{/POL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_POAL'>POAL: </label><div class='col-sm-8'><input id='{{id}}_POAL' class='form-control' type='text'{{#POAL}} value='{{POAL}}'{{/POAL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OARL'>OARL: </label><div class='col-sm-8'><input id='{{id}}_OARL' class='form-control' type='text'{{#OARL}} value='{{OARL}}'{{/OARL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GO'>GO: </label><div class='col-sm-8'><input id='{{id}}_GO' class='form-control' type='text'{{#GO}} value='{{GO}}'{{/GO}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GMOL'>GMOL: </label><div class='col-sm-8'><input id='{{id}}_GMOL' class='form-control' type='text'{{#GMOL}} value='{{GMOL}}'{{/GMOL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GNOL'>GNOL: </label><div class='col-sm-8'><input id='{{id}}_GNOL' class='form-control' type='text'{{#GNOL}} value='{{GNOL}}'{{/GNOL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GR'>GR: </label><div class='col-sm-8'><input id='{{id}}_GR' class='form-control' type='text'{{#GR}} value='{{GR}}'{{/GR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GS'>GS: </label><div class='col-sm-8'><input id='{{id}}_GS' class='form-control' type='text'{{#GS}} value='{{GS}}'{{/GS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PP'>PP: </label><div class='col-sm-8'><input id='{{id}}_PP' class='form-control' type='text'{{#PP}} value='{{PP}}'{{/PP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SL'>SL: </label><div class='col-sm-8'><input id='{{id}}_SL' class='form-control' type='text'{{#SL}} value='{{SL}}'{{/SL}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ACE'>ACE: </label><div class='col-sm-8'><input id='{{id}}_ACE' class='form-control' type='text'{{#ACE}} value='{{ACE}}'{{/ACE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_INADV'>INADV: </label><div class='col-sm-8'><input id='{{id}}_INADV' class='form-control' type='text'{{#INADV}} value='{{INADV}}'{{/INADV}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MeasurementTypeEMS" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PF").value; if ("" !== temp) obj["PF"] = temp;
                temp = document.getElementById (id + "_PIL").value; if ("" !== temp) obj["PIL"] = temp;
                temp = document.getElementById (id + "_PIAL").value; if ("" !== temp) obj["PIAL"] = temp;
                temp = document.getElementById (id + "_PIML").value; if ("" !== temp) obj["PIML"] = temp;
                temp = document.getElementById (id + "_POL").value; if ("" !== temp) obj["POL"] = temp;
                temp = document.getElementById (id + "_POAL").value; if ("" !== temp) obj["POAL"] = temp;
                temp = document.getElementById (id + "_OARL").value; if ("" !== temp) obj["OARL"] = temp;
                temp = document.getElementById (id + "_GO").value; if ("" !== temp) obj["GO"] = temp;
                temp = document.getElementById (id + "_GMOL").value; if ("" !== temp) obj["GMOL"] = temp;
                temp = document.getElementById (id + "_GNOL").value; if ("" !== temp) obj["GNOL"] = temp;
                temp = document.getElementById (id + "_GR").value; if ("" !== temp) obj["GR"] = temp;
                temp = document.getElementById (id + "_GS").value; if ("" !== temp) obj["GS"] = temp;
                temp = document.getElementById (id + "_PP").value; if ("" !== temp) obj["PP"] = temp;
                temp = document.getElementById (id + "_SL").value; if ("" !== temp) obj["SL"] = temp;
                temp = document.getElementById (id + "_ACE").value; if ("" !== temp) obj["ACE"] = temp;
                temp = document.getElementById (id + "_INADV").value; if ("" !== temp) obj["INADV"] = temp;

                return (obj);
            }
        }

        /**
         * MW
         *
         * FLAG
         *
         */
        class UnitTypeEMS extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.UnitTypeEMS;
                if (null == bucket)
                   cim_data.UnitTypeEMS = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UnitTypeEMS[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "UnitTypeEMS";
                base.parse_attribute (/<cim:UnitTypeEMS.MW\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MW", sub, context);
                base.parse_attribute (/<cim:UnitTypeEMS.FLAG\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FLAG", sub, context);
                let bucket = context.parsed.UnitTypeEMS;
                if (null == bucket)
                   context.parsed.UnitTypeEMS = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "UnitTypeEMS", "MW", "MW", fields);
                base.export_attribute (obj, "UnitTypeEMS", "FLAG", "FLAG", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#UnitTypeEMS_collapse" aria-expanded="true" aria-controls="UnitTypeEMS_collapse" style="margin-left: 10px;">UnitTypeEMS</a></legend>
                    <div id="UnitTypeEMS_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#MW}}<div><b>MW</b>: {{MW}}</div>{{/MW}}
                    {{#FLAG}}<div><b>FLAG</b>: {{FLAG}}</div>{{/FLAG}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_UnitTypeEMS_collapse" aria-expanded="true" aria-controls="{{id}}_UnitTypeEMS_collapse" style="margin-left: 10px;">UnitTypeEMS</a></legend>
                    <div id="{{id}}_UnitTypeEMS_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MW'>MW: </label><div class='col-sm-8'><input id='{{id}}_MW' class='form-control' type='text'{{#MW}} value='{{MW}}'{{/MW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FLAG'>FLAG: </label><div class='col-sm-8'><input id='{{id}}_FLAG' class='form-control' type='text'{{#FLAG}} value='{{FLAG}}'{{/FLAG}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "UnitTypeEMS" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_MW").value; if ("" !== temp) obj["MW"] = temp;
                temp = document.getElementById (id + "_FLAG").value; if ("" !== temp) obj["FLAG"] = temp;

                return (obj);
            }
        }

        class DispatchAcceptStatus extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DispatchAcceptStatus;
                if (null == bucket)
                   cim_data.DispatchAcceptStatus = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DispatchAcceptStatus[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DispatchAcceptStatus";
                base.parse_attribute (/<cim:DispatchAcceptStatus.NON_RESPONSE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NON_RESPONSE", sub, context);
                base.parse_attribute (/<cim:DispatchAcceptStatus.OK\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OK", sub, context);
                base.parse_attribute (/<cim:DispatchAcceptStatus.CANNOT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CANNOT", sub, context);
                base.parse_attribute (/<cim:DispatchAcceptStatus.ACCEPT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ACCEPT", sub, context);
                base.parse_attribute (/<cim:DispatchAcceptStatus.DECLINE\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DECLINE", sub, context);
                base.parse_attribute (/<cim:DispatchAcceptStatus.PARTIAL\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PARTIAL", sub, context);
                let bucket = context.parsed.DispatchAcceptStatus;
                if (null == bucket)
                   context.parsed.DispatchAcceptStatus = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "DispatchAcceptStatus", "NON_RESPONSE", "NON_RESPONSE", fields);
                base.export_attribute (obj, "DispatchAcceptStatus", "OK", "OK", fields);
                base.export_attribute (obj, "DispatchAcceptStatus", "CANNOT", "CANNOT", fields);
                base.export_attribute (obj, "DispatchAcceptStatus", "ACCEPT", "ACCEPT", fields);
                base.export_attribute (obj, "DispatchAcceptStatus", "DECLINE", "DECLINE", fields);
                base.export_attribute (obj, "DispatchAcceptStatus", "PARTIAL", "PARTIAL", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DispatchAcceptStatus_collapse" aria-expanded="true" aria-controls="DispatchAcceptStatus_collapse" style="margin-left: 10px;">DispatchAcceptStatus</a></legend>
                    <div id="DispatchAcceptStatus_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#NON_RESPONSE}}<div><b>NON_RESPONSE</b>: {{NON_RESPONSE}}</div>{{/NON_RESPONSE}}
                    {{#OK}}<div><b>OK</b>: {{OK}}</div>{{/OK}}
                    {{#CANNOT}}<div><b>CANNOT</b>: {{CANNOT}}</div>{{/CANNOT}}
                    {{#ACCEPT}}<div><b>ACCEPT</b>: {{ACCEPT}}</div>{{/ACCEPT}}
                    {{#DECLINE}}<div><b>DECLINE</b>: {{DECLINE}}</div>{{/DECLINE}}
                    {{#PARTIAL}}<div><b>PARTIAL</b>: {{PARTIAL}}</div>{{/PARTIAL}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DispatchAcceptStatus_collapse" aria-expanded="true" aria-controls="{{id}}_DispatchAcceptStatus_collapse" style="margin-left: 10px;">DispatchAcceptStatus</a></legend>
                    <div id="{{id}}_DispatchAcceptStatus_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NON_RESPONSE'>NON_RESPONSE: </label><div class='col-sm-8'><input id='{{id}}_NON_RESPONSE' class='form-control' type='text'{{#NON_RESPONSE}} value='{{NON_RESPONSE}}'{{/NON_RESPONSE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OK'>OK: </label><div class='col-sm-8'><input id='{{id}}_OK' class='form-control' type='text'{{#OK}} value='{{OK}}'{{/OK}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CANNOT'>CANNOT: </label><div class='col-sm-8'><input id='{{id}}_CANNOT' class='form-control' type='text'{{#CANNOT}} value='{{CANNOT}}'{{/CANNOT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ACCEPT'>ACCEPT: </label><div class='col-sm-8'><input id='{{id}}_ACCEPT' class='form-control' type='text'{{#ACCEPT}} value='{{ACCEPT}}'{{/ACCEPT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DECLINE'>DECLINE: </label><div class='col-sm-8'><input id='{{id}}_DECLINE' class='form-control' type='text'{{#DECLINE}} value='{{DECLINE}}'{{/DECLINE}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PARTIAL'>PARTIAL: </label><div class='col-sm-8'><input id='{{id}}_PARTIAL' class='form-control' type='text'{{#PARTIAL}} value='{{PARTIAL}}'{{/PARTIAL}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DispatchAcceptStatus" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_NON_RESPONSE").value; if ("" !== temp) obj["NON_RESPONSE"] = temp;
                temp = document.getElementById (id + "_OK").value; if ("" !== temp) obj["OK"] = temp;
                temp = document.getElementById (id + "_CANNOT").value; if ("" !== temp) obj["CANNOT"] = temp;
                temp = document.getElementById (id + "_ACCEPT").value; if ("" !== temp) obj["ACCEPT"] = temp;
                temp = document.getElementById (id + "_DECLINE").value; if ("" !== temp) obj["DECLINE"] = temp;
                temp = document.getElementById (id + "_PARTIAL").value; if ("" !== temp) obj["PARTIAL"] = temp;

                return (obj);
            }
        }

        class ResourceCertificationType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ResourceCertificationType;
                if (null == bucket)
                   cim_data.ResourceCertificationType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceCertificationType[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceCertificationType";
                base.parse_attribute (/<cim:ResourceCertificationType.GT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GT", sub, context);
                base.parse_attribute (/<cim:ResourceCertificationType.RG\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RG", sub, context);
                base.parse_attribute (/<cim:ResourceCertificationType.SR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SR", sub, context);
                base.parse_attribute (/<cim:ResourceCertificationType.NR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "NR", sub, context);
                base.parse_attribute (/<cim:ResourceCertificationType.IR\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IR", sub, context);
                let bucket = context.parsed.ResourceCertificationType;
                if (null == bucket)
                   context.parsed.ResourceCertificationType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "ResourceCertificationType", "GT", "GT", fields);
                base.export_attribute (obj, "ResourceCertificationType", "RG", "RG", fields);
                base.export_attribute (obj, "ResourceCertificationType", "SR", "SR", fields);
                base.export_attribute (obj, "ResourceCertificationType", "NR", "NR", fields);
                base.export_attribute (obj, "ResourceCertificationType", "IR", "IR", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ResourceCertificationType_collapse" aria-expanded="true" aria-controls="ResourceCertificationType_collapse" style="margin-left: 10px;">ResourceCertificationType</a></legend>
                    <div id="ResourceCertificationType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#GT}}<div><b>GT</b>: {{GT}}</div>{{/GT}}
                    {{#RG}}<div><b>RG</b>: {{RG}}</div>{{/RG}}
                    {{#SR}}<div><b>SR</b>: {{SR}}</div>{{/SR}}
                    {{#NR}}<div><b>NR</b>: {{NR}}</div>{{/NR}}
                    {{#IR}}<div><b>IR</b>: {{IR}}</div>{{/IR}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ResourceCertificationType_collapse" aria-expanded="true" aria-controls="{{id}}_ResourceCertificationType_collapse" style="margin-left: 10px;">ResourceCertificationType</a></legend>
                    <div id="{{id}}_ResourceCertificationType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GT'>GT: </label><div class='col-sm-8'><input id='{{id}}_GT' class='form-control' type='text'{{#GT}} value='{{GT}}'{{/GT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RG'>RG: </label><div class='col-sm-8'><input id='{{id}}_RG' class='form-control' type='text'{{#RG}} value='{{RG}}'{{/RG}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SR'>SR: </label><div class='col-sm-8'><input id='{{id}}_SR' class='form-control' type='text'{{#SR}} value='{{SR}}'{{/SR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NR'>NR: </label><div class='col-sm-8'><input id='{{id}}_NR' class='form-control' type='text'{{#NR}} value='{{NR}}'{{/NR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IR'>IR: </label><div class='col-sm-8'><input id='{{id}}_IR' class='form-control' type='text'{{#IR}} value='{{IR}}'{{/IR}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ResourceCertificationType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_GT").value; if ("" !== temp) obj["GT"] = temp;
                temp = document.getElementById (id + "_RG").value; if ("" !== temp) obj["RG"] = temp;
                temp = document.getElementById (id + "_SR").value; if ("" !== temp) obj["SR"] = temp;
                temp = document.getElementById (id + "_NR").value; if ("" !== temp) obj["NR"] = temp;
                temp = document.getElementById (id + "_IR").value; if ("" !== temp) obj["IR"] = temp;

                return (obj);
            }
        }

        return (
            {
                SegmentCurveType: SegmentCurveType,
                SchedClassType: SchedClassType,
                DispatchTransactionType: DispatchTransactionType,
                LoadFollowingCapacityType: LoadFollowingCapacityType,
                OASISErrCode: OASISErrCode,
                OASISMarketType: OASISMarketType,
                OASISDataItems: OASISDataItems,
                OrganisationCode: OrganisationCode,
                LFCResourceType: LFCResourceType,
                MarketStatementLineItemAliasName: MarketStatementLineItemAliasName,
                ZoneType: ZoneType,
                TradeProductType: TradeProductType,
                SelfScheduleType: SelfScheduleType,
                MarketStatementDocStatus: MarketStatementDocStatus,
                runTypeCAISO: runTypeCAISO,
                MarketStatementDescription: MarketStatementDescription,
                UOMType: UOMType,
                MktSubClassType: MktSubClassType,
                MarketStatementDocType: MarketStatementDocType,
                MQSDELType: MQSDELType,
                OrganisationType: OrganisationType,
                SelfSchedTypeCleanBid: SelfSchedTypeCleanBid,
                OASISReportType: OASISReportType,
                OASISStatusType: OASISStatusType,
                OASISIntervalType: OASISIntervalType,
                AlarmDisplayType: AlarmDisplayType,
                ADSInstructionTypeCommitment: ADSInstructionTypeCommitment,
                ADSInstructionTypeOOS: ADSInstructionTypeOOS,
                JobStartEndType: JobStartEndType,
                SourceSinkType: SourceSinkType,
                TimeZoneType: TimeZoneType,
                ResourceCertificationType: ResourceCertificationType,
                SpinningEventNameType: SpinningEventNameType,
                EnergyTypeCode: EnergyTypeCode,
                OASISBidReportType: OASISBidReportType,
                SelfSchedTypeRawBid: SelfSchedTypeRawBid,
                AncillaryCommodityType: AncillaryCommodityType,
                MarketProductTypeAsReq: MarketProductTypeAsReq,
                DispatchAcceptStatus: DispatchAcceptStatus,
                UnitTypeEMS: UnitTypeEMS,
                MeasurementTypeEMS: MeasurementTypeEMS,
                SourceSinkFlag: SourceSinkFlag,
                TradeStatusType: TradeStatusType,
                BidStatusType: BidStatusType,
                RequestorRmrTest: RequestorRmrTest,
                SelfScheduleTypeMB: SelfScheduleTypeMB,
                OASISMeasType: OASISMeasType,
                CleanTradeProductType: CleanTradeProductType,
                PriceSetFlag: PriceSetFlag,
                OASISMasterType: OASISMasterType,
                SystemType: SystemType,
                SpinningEventType: SpinningEventType,
                DAMMarketType: DAMMarketType,
                JobScheduleType: JobScheduleType,
                AllocationEnergyTypeCode: AllocationEnergyTypeCode,
                AdderType: AdderType,
                BidPriceCapType: BidPriceCapType,
                JobFlagType: JobFlagType,
                MarketScheduleServices: MarketScheduleServices,
                ResourceCertificationCategory: ResourceCertificationCategory,
                CurrentStatusSC: CurrentStatusSC,
                OASISErrDescription: OASISErrDescription
            }
        );
    }
);