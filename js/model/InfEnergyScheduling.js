define
(
    ["model/base", "model/Common", "model/Core", "model/ExternalInputs"],
    /**
     * This package provides the capability to schedule and account for transactions for the exchange of electric power between companies.
     *
     * It includes transations for megawatts which are generated, consumed, lost, passed through, sold and purchased. These classes are used by Accounting and Billing for Energy, Generation Capacity, Transmission, and Ancillary Services.
     *
     */
    function (base, Common, Core, ExternalInputs)
    {

        class TieLine extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TieLine;
                if (null == bucket)
                   cim_data.TieLine = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TieLine[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TieLine";
                base.parse_attribute (/<cim:TieLine.SideA_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SideA_SubControlArea", sub, context);
                base.parse_attribute (/<cim:TieLine.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context);
                base.parse_attributes (/<cim:TieLine.ParentOfA\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ParentOfA", sub, context);
                base.parse_attribute (/<cim:TieLine.ParentOfB\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ParentOfB", sub, context);
                base.parse_attribute (/<cim:TieLine.SideB_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SideB_SubControlArea", sub, context);
                var bucket = context.parsed.TieLine;
                if (null == bucket)
                   context.parsed.TieLine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TieLine", "SideA_SubControlArea", "SideA_SubControlArea", fields);
                base.export_attribute (obj, "TieLine", "EnergyTransaction", "EnergyTransaction", fields);
                base.export_attributes (obj, "TieLine", "ParentOfA", "ParentOfA", fields);
                base.export_attribute (obj, "TieLine", "ParentOfB", "ParentOfB", fields);
                base.export_attribute (obj, "TieLine", "SideB_SubControlArea", "SideB_SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TieLine_collapse" aria-expanded="true" aria-controls="TieLine_collapse" style="margin-left: 10px;">TieLine</a></legend>
                    <div id="TieLine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#SideA_SubControlArea}}<div><b>SideA_SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SideA_SubControlArea}}&quot;);})'>{{SideA_SubControlArea}}</a></div>{{/SideA_SubControlArea}}
                    {{#EnergyTransaction}}<div><b>EnergyTransaction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyTransaction}}&quot;);})'>{{EnergyTransaction}}</a></div>{{/EnergyTransaction}}
                    {{#ParentOfA}}<div><b>ParentOfA</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ParentOfA}}
                    {{#ParentOfB}}<div><b>ParentOfB</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ParentOfB}}&quot;);})'>{{ParentOfB}}</a></div>{{/ParentOfB}}
                    {{#SideB_SubControlArea}}<div><b>SideB_SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SideB_SubControlArea}}&quot;);})'>{{SideB_SubControlArea}}</a></div>{{/SideB_SubControlArea}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ParentOfA) obj.ParentOfA_string = obj.ParentOfA.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ParentOfA_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TieLine_collapse" aria-expanded="true" aria-controls="TieLine_collapse" style="margin-left: 10px;">TieLine</a></legend>
                    <div id="TieLine_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SideA_SubControlArea'>SideA_SubControlArea: </label><div class='col-sm-8'><input id='SideA_SubControlArea' class='form-control' type='text'{{#SideA_SubControlArea}} value='{{SideA_SubControlArea}}'{{/SideA_SubControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergyTransaction'>EnergyTransaction: </label><div class='col-sm-8'><input id='EnergyTransaction' class='form-control' type='text'{{#EnergyTransaction}} value='{{EnergyTransaction}}'{{/EnergyTransaction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ParentOfA'>ParentOfA: </label><div class='col-sm-8'><input id='ParentOfA' class='form-control' type='text'{{#ParentOfA}} value='{{ParentOfA}}_string'{{/ParentOfA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ParentOfB'>ParentOfB: </label><div class='col-sm-8'><input id='ParentOfB' class='form-control' type='text'{{#ParentOfB}} value='{{ParentOfB}}'{{/ParentOfB}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SideB_SubControlArea'>SideB_SubControlArea: </label><div class='col-sm-8'><input id='SideB_SubControlArea' class='form-control' type='text'{{#SideB_SubControlArea}} value='{{SideB_SubControlArea}}'{{/SideB_SubControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TieLine" };
                super.submit (obj);
                temp = document.getElementById ("SideA_SubControlArea").value; if ("" != temp) obj.SideA_SubControlArea = temp;
                temp = document.getElementById ("EnergyTransaction").value; if ("" != temp) obj.EnergyTransaction = temp;
                temp = document.getElementById ("ParentOfA").value; if ("" != temp) obj.ParentOfA = temp.split (",");
                temp = document.getElementById ("ParentOfB").value; if ("" != temp) obj.ParentOfB = temp;
                temp = document.getElementById ("SideB_SubControlArea").value; if ("" != temp) obj.SideB_SubControlArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SideA_SubControlArea", "SubControlArea", "1", "0..*"],
                        ["EnergyTransaction", "EnergyTransaction", "0..1", "0..*"],
                        ["ParentOfA", "ControlAreaOperator", "0..*", "0..*"],
                        ["ParentOfB", "CustomerConsumer", "0..1", "0..*"],
                        ["SideB_SubControlArea", "SubControlArea", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Curtailing entity must be providing at least one service to the EnergyTransaction.
         *
         * The CurtailmentProfile must be completely contained within the EnergyProfile timeframe for this EnergyTransaction.
         *
         */
        class CurtailmentProfile extends ExternalInputs.Profile
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CurtailmentProfile;
                if (null == bucket)
                   cim_data.CurtailmentProfile = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CurtailmentProfile[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExternalInputs.Profile.prototype.parse.call (this, context, sub);
                obj.cls = "CurtailmentProfile";
                base.parse_attribute (/<cim:CurtailmentProfile.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context);
                var bucket = context.parsed.CurtailmentProfile;
                if (null == bucket)
                   context.parsed.CurtailmentProfile = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExternalInputs.Profile.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CurtailmentProfile", "EnergyTransaction", "EnergyTransaction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurtailmentProfile_collapse" aria-expanded="true" aria-controls="CurtailmentProfile_collapse" style="margin-left: 10px;">CurtailmentProfile</a></legend>
                    <div id="CurtailmentProfile_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ExternalInputs.Profile.prototype.template.call (this) +
                    `
                    {{#EnergyTransaction}}<div><b>EnergyTransaction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyTransaction}}&quot;);})'>{{EnergyTransaction}}</a></div>{{/EnergyTransaction}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurtailmentProfile_collapse" aria-expanded="true" aria-controls="CurtailmentProfile_collapse" style="margin-left: 10px;">CurtailmentProfile</a></legend>
                    <div id="CurtailmentProfile_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ExternalInputs.Profile.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergyTransaction'>EnergyTransaction: </label><div class='col-sm-8'><input id='EnergyTransaction' class='form-control' type='text'{{#EnergyTransaction}} value='{{EnergyTransaction}}'{{/EnergyTransaction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CurtailmentProfile" };
                super.submit (obj);
                temp = document.getElementById ("EnergyTransaction").value; if ("" != temp) obj.EnergyTransaction = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["EnergyTransaction", "EnergyTransaction", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A corridor containing one or more rights of way
         *
         */
        class TransmissionCorridor extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransmissionCorridor;
                if (null == bucket)
                   cim_data.TransmissionCorridor = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionCorridor[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionCorridor";
                base.parse_attributes (/<cim:TransmissionCorridor.TransmissionRightOfWays\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionRightOfWays", sub, context);
                base.parse_attributes (/<cim:TransmissionCorridor.ContainedIn\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContainedIn", sub, context);
                var bucket = context.parsed.TransmissionCorridor;
                if (null == bucket)
                   context.parsed.TransmissionCorridor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "TransmissionCorridor", "TransmissionRightOfWays", "TransmissionRightOfWays", fields);
                base.export_attributes (obj, "TransmissionCorridor", "ContainedIn", "ContainedIn", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionCorridor_collapse" aria-expanded="true" aria-controls="TransmissionCorridor_collapse" style="margin-left: 10px;">TransmissionCorridor</a></legend>
                    <div id="TransmissionCorridor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#TransmissionRightOfWays}}<div><b>TransmissionRightOfWays</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TransmissionRightOfWays}}
                    {{#ContainedIn}}<div><b>ContainedIn</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ContainedIn}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TransmissionRightOfWays) obj.TransmissionRightOfWays_string = obj.TransmissionRightOfWays.join ();
                if (obj.ContainedIn) obj.ContainedIn_string = obj.ContainedIn.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TransmissionRightOfWays_string;
                delete obj.ContainedIn_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionCorridor_collapse" aria-expanded="true" aria-controls="TransmissionCorridor_collapse" style="margin-left: 10px;">TransmissionCorridor</a></legend>
                    <div id="TransmissionCorridor_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "TransmissionCorridor" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TransmissionRightOfWays", "TransmissionRightOfWay", "1..*", "1"],
                        ["ContainedIn", "TransmissionPath", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * An account for tracking inadvertent interchange versus time for each control area.
         *
         * A control area may have more than one inadvertent account in order to track inadvertent over one or more specific tie points in addition to the usual overall net inadvertent. Separate accounts would also be used to track designated time periods, such as on-peak and off-peak.
         *
         */
        class InadvertentAccount extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InadvertentAccount;
                if (null == bucket)
                   cim_data.InadvertentAccount = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InadvertentAccount[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "InadvertentAccount";
                base.parse_attribute (/<cim:InadvertentAccount.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                var bucket = context.parsed.InadvertentAccount;
                if (null == bucket)
                   context.parsed.InadvertentAccount = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "InadvertentAccount", "SubControlArea", "SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InadvertentAccount_collapse" aria-expanded="true" aria-controls="InadvertentAccount_collapse" style="margin-left: 10px;">InadvertentAccount</a></legend>
                    <div id="InadvertentAccount_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SubControlArea}}&quot;);})'>{{SubControlArea}}</a></div>{{/SubControlArea}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InadvertentAccount_collapse" aria-expanded="true" aria-controls="InadvertentAccount_collapse" style="margin-left: 10px;">InadvertentAccount</a></legend>
                    <div id="InadvertentAccount_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SubControlArea'>SubControlArea: </label><div class='col-sm-8'><input id='SubControlArea' class='form-control' type='text'{{#SubControlArea}} value='{{SubControlArea}}'{{/SubControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "InadvertentAccount" };
                super.submit (obj);
                temp = document.getElementById ("SubControlArea").value; if ("" != temp) obj.SubControlArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SubControlArea", "SubControlArea", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * LossProfile is associated with an EnerrgyTransaction and must be completely contained within the time frame of the EnergyProfile associated with this EnergyTransaction.
         *
         */
        class LossProfile extends ExternalInputs.Profile
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LossProfile;
                if (null == bucket)
                   cim_data.LossProfile = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LossProfile[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExternalInputs.Profile.prototype.parse.call (this, context, sub);
                obj.cls = "LossProfile";
                base.parse_attribute (/<cim:LossProfile.HasLoss_\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HasLoss_", sub, context);
                base.parse_attribute (/<cim:LossProfile.EnergyTransaction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransaction", sub, context);
                var bucket = context.parsed.LossProfile;
                if (null == bucket)
                   context.parsed.LossProfile = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExternalInputs.Profile.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "LossProfile", "HasLoss_", "HasLoss_", fields);
                base.export_attribute (obj, "LossProfile", "EnergyTransaction", "EnergyTransaction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LossProfile_collapse" aria-expanded="true" aria-controls="LossProfile_collapse" style="margin-left: 10px;">LossProfile</a></legend>
                    <div id="LossProfile_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ExternalInputs.Profile.prototype.template.call (this) +
                    `
                    {{#HasLoss_}}<div><b>HasLoss_</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HasLoss_}}&quot;);})'>{{HasLoss_}}</a></div>{{/HasLoss_}}
                    {{#EnergyTransaction}}<div><b>EnergyTransaction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyTransaction}}&quot;);})'>{{EnergyTransaction}}</a></div>{{/EnergyTransaction}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LossProfile_collapse" aria-expanded="true" aria-controls="LossProfile_collapse" style="margin-left: 10px;">LossProfile</a></legend>
                    <div id="LossProfile_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ExternalInputs.Profile.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HasLoss_'>HasLoss_: </label><div class='col-sm-8'><input id='HasLoss_' class='form-control' type='text'{{#HasLoss_}} value='{{HasLoss_}}'{{/HasLoss_}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergyTransaction'>EnergyTransaction: </label><div class='col-sm-8'><input id='EnergyTransaction' class='form-control' type='text'{{#EnergyTransaction}} value='{{EnergyTransaction}}'{{/EnergyTransaction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "LossProfile" };
                super.submit (obj);
                temp = document.getElementById ("HasLoss_").value; if ("" != temp) obj.HasLoss_ = temp;
                temp = document.getElementById ("EnergyTransaction").value; if ("" != temp) obj.EnergyTransaction = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["HasLoss_", "TransmissionProvider", "0..1", "0..*"],
                        ["EnergyTransaction", "EnergyTransaction", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Control area current net tie (scheduled interchange) sent to real time dispatch.
         *
         */
        class CurrentScheduledInterchange extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CurrentScheduledInterchange;
                if (null == bucket)
                   cim_data.CurrentScheduledInterchange = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CurrentScheduledInterchange[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CurrentScheduledInterchange";
                base.parse_element (/<cim:CurrentScheduledInterchange.currentNetTieMW>([\s\S]*?)<\/cim:CurrentScheduledInterchange.currentNetTieMW>/g, obj, "currentNetTieMW", base.to_float, sub, context);
                base.parse_element (/<cim:CurrentScheduledInterchange.useEmergencySchedule>([\s\S]*?)<\/cim:CurrentScheduledInterchange.useEmergencySchedule>/g, obj, "useEmergencySchedule", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:CurrentScheduledInterchange.InternalControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InternalControlArea", sub, context);
                var bucket = context.parsed.CurrentScheduledInterchange;
                if (null == bucket)
                   context.parsed.CurrentScheduledInterchange = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CurrentScheduledInterchange", "currentNetTieMW", "currentNetTieMW",  base.from_float, fields);
                base.export_element (obj, "CurrentScheduledInterchange", "useEmergencySchedule", "useEmergencySchedule",  base.from_boolean, fields);
                base.export_attribute (obj, "CurrentScheduledInterchange", "InternalControlArea", "InternalControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurrentScheduledInterchange_collapse" aria-expanded="true" aria-controls="CurrentScheduledInterchange_collapse" style="margin-left: 10px;">CurrentScheduledInterchange</a></legend>
                    <div id="CurrentScheduledInterchange_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#currentNetTieMW}}<div><b>currentNetTieMW</b>: {{currentNetTieMW}}</div>{{/currentNetTieMW}}
                    {{#useEmergencySchedule}}<div><b>useEmergencySchedule</b>: {{useEmergencySchedule}}</div>{{/useEmergencySchedule}}
                    {{#InternalControlArea}}<div><b>InternalControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{InternalControlArea}}&quot;);})'>{{InternalControlArea}}</a></div>{{/InternalControlArea}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurrentScheduledInterchange_collapse" aria-expanded="true" aria-controls="CurrentScheduledInterchange_collapse" style="margin-left: 10px;">CurrentScheduledInterchange</a></legend>
                    <div id="CurrentScheduledInterchange_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='currentNetTieMW'>currentNetTieMW: </label><div class='col-sm-8'><input id='currentNetTieMW' class='form-control' type='text'{{#currentNetTieMW}} value='{{currentNetTieMW}}'{{/currentNetTieMW}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='useEmergencySchedule'>useEmergencySchedule: </label><div class='col-sm-8'><input id='useEmergencySchedule' class='form-check-input' type='checkbox'{{#useEmergencySchedule}} checked{{/useEmergencySchedule}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='InternalControlArea'>InternalControlArea: </label><div class='col-sm-8'><input id='InternalControlArea' class='form-control' type='text'{{#InternalControlArea}} value='{{InternalControlArea}}'{{/InternalControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CurrentScheduledInterchange" };
                super.submit (obj);
                temp = document.getElementById ("currentNetTieMW").value; if ("" != temp) obj.currentNetTieMW = temp;
                temp = document.getElementById ("useEmergencySchedule").checked; if (temp) obj.useEmergencySchedule = true;
                temp = document.getElementById ("InternalControlArea").value; if ("" != temp) obj.InternalControlArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["InternalControlArea", "InternalControlArea", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Control area emergency schedules
         *
         */
        class CurrentEmergencyScheduledInterchange extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CurrentEmergencyScheduledInterchange;
                if (null == bucket)
                   cim_data.CurrentEmergencyScheduledInterchange = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CurrentEmergencyScheduledInterchange[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "CurrentEmergencyScheduledInterchange";
                base.parse_element (/<cim:CurrentEmergencyScheduledInterchange.emergencyScheduleMW>([\s\S]*?)<\/cim:CurrentEmergencyScheduledInterchange.emergencyScheduleMW>/g, obj, "emergencyScheduleMW", base.to_float, sub, context);
                base.parse_element (/<cim:CurrentEmergencyScheduledInterchange.emergencyScheduleStartTime>([\s\S]*?)<\/cim:CurrentEmergencyScheduledInterchange.emergencyScheduleStartTime>/g, obj, "emergencyScheduleStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:CurrentEmergencyScheduledInterchange.emergencyScheduleRampTime>([\s\S]*?)<\/cim:CurrentEmergencyScheduledInterchange.emergencyScheduleRampTime>/g, obj, "emergencyScheduleRampTime", base.to_string, sub, context);
                base.parse_attribute (/<cim:CurrentEmergencyScheduledInterchange.InternalControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InternalControlArea", sub, context);
                var bucket = context.parsed.CurrentEmergencyScheduledInterchange;
                if (null == bucket)
                   context.parsed.CurrentEmergencyScheduledInterchange = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "CurrentEmergencyScheduledInterchange", "emergencyScheduleMW", "emergencyScheduleMW",  base.from_float, fields);
                base.export_element (obj, "CurrentEmergencyScheduledInterchange", "emergencyScheduleStartTime", "emergencyScheduleStartTime",  base.from_datetime, fields);
                base.export_element (obj, "CurrentEmergencyScheduledInterchange", "emergencyScheduleRampTime", "emergencyScheduleRampTime",  base.from_string, fields);
                base.export_attribute (obj, "CurrentEmergencyScheduledInterchange", "InternalControlArea", "InternalControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurrentEmergencyScheduledInterchange_collapse" aria-expanded="true" aria-controls="CurrentEmergencyScheduledInterchange_collapse" style="margin-left: 10px;">CurrentEmergencyScheduledInterchange</a></legend>
                    <div id="CurrentEmergencyScheduledInterchange_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#emergencyScheduleMW}}<div><b>emergencyScheduleMW</b>: {{emergencyScheduleMW}}</div>{{/emergencyScheduleMW}}
                    {{#emergencyScheduleStartTime}}<div><b>emergencyScheduleStartTime</b>: {{emergencyScheduleStartTime}}</div>{{/emergencyScheduleStartTime}}
                    {{#emergencyScheduleRampTime}}<div><b>emergencyScheduleRampTime</b>: {{emergencyScheduleRampTime}}</div>{{/emergencyScheduleRampTime}}
                    {{#InternalControlArea}}<div><b>InternalControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{InternalControlArea}}&quot;);})'>{{InternalControlArea}}</a></div>{{/InternalControlArea}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurrentEmergencyScheduledInterchange_collapse" aria-expanded="true" aria-controls="CurrentEmergencyScheduledInterchange_collapse" style="margin-left: 10px;">CurrentEmergencyScheduledInterchange</a></legend>
                    <div id="CurrentEmergencyScheduledInterchange_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='emergencyScheduleMW'>emergencyScheduleMW: </label><div class='col-sm-8'><input id='emergencyScheduleMW' class='form-control' type='text'{{#emergencyScheduleMW}} value='{{emergencyScheduleMW}}'{{/emergencyScheduleMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='emergencyScheduleStartTime'>emergencyScheduleStartTime: </label><div class='col-sm-8'><input id='emergencyScheduleStartTime' class='form-control' type='text'{{#emergencyScheduleStartTime}} value='{{emergencyScheduleStartTime}}'{{/emergencyScheduleStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='emergencyScheduleRampTime'>emergencyScheduleRampTime: </label><div class='col-sm-8'><input id='emergencyScheduleRampTime' class='form-control' type='text'{{#emergencyScheduleRampTime}} value='{{emergencyScheduleRampTime}}'{{/emergencyScheduleRampTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='InternalControlArea'>InternalControlArea: </label><div class='col-sm-8'><input id='InternalControlArea' class='form-control' type='text'{{#InternalControlArea}} value='{{InternalControlArea}}'{{/InternalControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CurrentEmergencyScheduledInterchange" };
                super.submit (obj);
                temp = document.getElementById ("emergencyScheduleMW").value; if ("" != temp) obj.emergencyScheduleMW = temp;
                temp = document.getElementById ("emergencyScheduleStartTime").value; if ("" != temp) obj.emergencyScheduleStartTime = temp;
                temp = document.getElementById ("emergencyScheduleRampTime").value; if ("" != temp) obj.emergencyScheduleRampTime = temp;
                temp = document.getElementById ("InternalControlArea").value; if ("" != temp) obj.InternalControlArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["InternalControlArea", "InternalControlArea", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * The control area's reserve specification.
         *
         */
        class AreaReserveSpec extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AreaReserveSpec;
                if (null == bucket)
                   cim_data.AreaReserveSpec = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AreaReserveSpec[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AreaReserveSpec";
                base.parse_element (/<cim:AreaReserveSpec.Description>([\s\S]*?)<\/cim:AreaReserveSpec.Description>/g, obj, "Description", base.to_string, sub, context);
                base.parse_element (/<cim:AreaReserveSpec.lowerRegMarginReqt>([\s\S]*?)<\/cim:AreaReserveSpec.lowerRegMarginReqt>/g, obj, "lowerRegMarginReqt", base.to_string, sub, context);
                base.parse_element (/<cim:AreaReserveSpec.opReserveReqt>([\s\S]*?)<\/cim:AreaReserveSpec.opReserveReqt>/g, obj, "opReserveReqt", base.to_string, sub, context);
                base.parse_element (/<cim:AreaReserveSpec.primaryReserveReqt>([\s\S]*?)<\/cim:AreaReserveSpec.primaryReserveReqt>/g, obj, "primaryReserveReqt", base.to_string, sub, context);
                base.parse_element (/<cim:AreaReserveSpec.raiseRegMarginReqt>([\s\S]*?)<\/cim:AreaReserveSpec.raiseRegMarginReqt>/g, obj, "raiseRegMarginReqt", base.to_string, sub, context);
                base.parse_element (/<cim:AreaReserveSpec.spinningReserveReqt>([\s\S]*?)<\/cim:AreaReserveSpec.spinningReserveReqt>/g, obj, "spinningReserveReqt", base.to_string, sub, context);
                base.parse_attributes (/<cim:AreaReserveSpec.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                var bucket = context.parsed.AreaReserveSpec;
                if (null == bucket)
                   context.parsed.AreaReserveSpec = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AreaReserveSpec", "Description", "Description",  base.from_string, fields);
                base.export_element (obj, "AreaReserveSpec", "lowerRegMarginReqt", "lowerRegMarginReqt",  base.from_string, fields);
                base.export_element (obj, "AreaReserveSpec", "opReserveReqt", "opReserveReqt",  base.from_string, fields);
                base.export_element (obj, "AreaReserveSpec", "primaryReserveReqt", "primaryReserveReqt",  base.from_string, fields);
                base.export_element (obj, "AreaReserveSpec", "raiseRegMarginReqt", "raiseRegMarginReqt",  base.from_string, fields);
                base.export_element (obj, "AreaReserveSpec", "spinningReserveReqt", "spinningReserveReqt",  base.from_string, fields);
                base.export_attributes (obj, "AreaReserveSpec", "SubControlArea", "SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AreaReserveSpec_collapse" aria-expanded="true" aria-controls="AreaReserveSpec_collapse" style="margin-left: 10px;">AreaReserveSpec</a></legend>
                    <div id="AreaReserveSpec_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Description}}<div><b>Description</b>: {{Description}}</div>{{/Description}}
                    {{#lowerRegMarginReqt}}<div><b>lowerRegMarginReqt</b>: {{lowerRegMarginReqt}}</div>{{/lowerRegMarginReqt}}
                    {{#opReserveReqt}}<div><b>opReserveReqt</b>: {{opReserveReqt}}</div>{{/opReserveReqt}}
                    {{#primaryReserveReqt}}<div><b>primaryReserveReqt</b>: {{primaryReserveReqt}}</div>{{/primaryReserveReqt}}
                    {{#raiseRegMarginReqt}}<div><b>raiseRegMarginReqt</b>: {{raiseRegMarginReqt}}</div>{{/raiseRegMarginReqt}}
                    {{#spinningReserveReqt}}<div><b>spinningReserveReqt</b>: {{spinningReserveReqt}}</div>{{/spinningReserveReqt}}
                    {{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SubControlArea}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.SubControlArea) obj.SubControlArea_string = obj.SubControlArea.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SubControlArea_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AreaReserveSpec_collapse" aria-expanded="true" aria-controls="AreaReserveSpec_collapse" style="margin-left: 10px;">AreaReserveSpec</a></legend>
                    <div id="AreaReserveSpec_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Description'>Description: </label><div class='col-sm-8'><input id='Description' class='form-control' type='text'{{#Description}} value='{{Description}}'{{/Description}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowerRegMarginReqt'>lowerRegMarginReqt: </label><div class='col-sm-8'><input id='lowerRegMarginReqt' class='form-control' type='text'{{#lowerRegMarginReqt}} value='{{lowerRegMarginReqt}}'{{/lowerRegMarginReqt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='opReserveReqt'>opReserveReqt: </label><div class='col-sm-8'><input id='opReserveReqt' class='form-control' type='text'{{#opReserveReqt}} value='{{opReserveReqt}}'{{/opReserveReqt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='primaryReserveReqt'>primaryReserveReqt: </label><div class='col-sm-8'><input id='primaryReserveReqt' class='form-control' type='text'{{#primaryReserveReqt}} value='{{primaryReserveReqt}}'{{/primaryReserveReqt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='raiseRegMarginReqt'>raiseRegMarginReqt: </label><div class='col-sm-8'><input id='raiseRegMarginReqt' class='form-control' type='text'{{#raiseRegMarginReqt}} value='{{raiseRegMarginReqt}}'{{/raiseRegMarginReqt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='spinningReserveReqt'>spinningReserveReqt: </label><div class='col-sm-8'><input id='spinningReserveReqt' class='form-control' type='text'{{#spinningReserveReqt}} value='{{spinningReserveReqt}}'{{/spinningReserveReqt}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "AreaReserveSpec" };
                super.submit (obj);
                temp = document.getElementById ("Description").value; if ("" != temp) obj.Description = temp;
                temp = document.getElementById ("lowerRegMarginReqt").value; if ("" != temp) obj.lowerRegMarginReqt = temp;
                temp = document.getElementById ("opReserveReqt").value; if ("" != temp) obj.opReserveReqt = temp;
                temp = document.getElementById ("primaryReserveReqt").value; if ("" != temp) obj.primaryReserveReqt = temp;
                temp = document.getElementById ("raiseRegMarginReqt").value; if ("" != temp) obj.raiseRegMarginReqt = temp;
                temp = document.getElementById ("spinningReserveReqt").value; if ("" != temp) obj.spinningReserveReqt = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SubControlArea", "SubControlArea", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * A continuously variable component of a control area's MW net interchange schedule.
         *
         * Dynamic schedules are sent and received by control areas.
         *
         */
        class DynamicSchedule extends Core.BasicIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DynamicSchedule;
                if (null == bucket)
                   cim_data.DynamicSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DynamicSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.BasicIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "DynamicSchedule";
                base.parse_element (/<cim:DynamicSchedule.dynSchedSignRev>([\s\S]*?)<\/cim:DynamicSchedule.dynSchedSignRev>/g, obj, "dynSchedSignRev", base.to_boolean, sub, context);
                base.parse_element (/<cim:DynamicSchedule.dynSchedStatus>([\s\S]*?)<\/cim:DynamicSchedule.dynSchedStatus>/g, obj, "dynSchedStatus", base.to_string, sub, context);
                base.parse_attribute (/<cim:DynamicSchedule.MktMeasurement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktMeasurement", sub, context);
                base.parse_attribute (/<cim:DynamicSchedule.Receive_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Receive_SubControlArea", sub, context);
                base.parse_attribute (/<cim:DynamicSchedule.Send_SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Send_SubControlArea", sub, context);
                var bucket = context.parsed.DynamicSchedule;
                if (null == bucket)
                   context.parsed.DynamicSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.BasicIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "DynamicSchedule", "dynSchedSignRev", "dynSchedSignRev",  base.from_boolean, fields);
                base.export_element (obj, "DynamicSchedule", "dynSchedStatus", "dynSchedStatus",  base.from_string, fields);
                base.export_attribute (obj, "DynamicSchedule", "MktMeasurement", "MktMeasurement", fields);
                base.export_attribute (obj, "DynamicSchedule", "Receive_SubControlArea", "Receive_SubControlArea", fields);
                base.export_attribute (obj, "DynamicSchedule", "Send_SubControlArea", "Send_SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DynamicSchedule_collapse" aria-expanded="true" aria-controls="DynamicSchedule_collapse" style="margin-left: 10px;">DynamicSchedule</a></legend>
                    <div id="DynamicSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.BasicIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#dynSchedSignRev}}<div><b>dynSchedSignRev</b>: {{dynSchedSignRev}}</div>{{/dynSchedSignRev}}
                    {{#dynSchedStatus}}<div><b>dynSchedStatus</b>: {{dynSchedStatus}}</div>{{/dynSchedStatus}}
                    {{#MktMeasurement}}<div><b>MktMeasurement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktMeasurement}}&quot;);})'>{{MktMeasurement}}</a></div>{{/MktMeasurement}}
                    {{#Receive_SubControlArea}}<div><b>Receive_SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Receive_SubControlArea}}&quot;);})'>{{Receive_SubControlArea}}</a></div>{{/Receive_SubControlArea}}
                    {{#Send_SubControlArea}}<div><b>Send_SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Send_SubControlArea}}&quot;);})'>{{Send_SubControlArea}}</a></div>{{/Send_SubControlArea}}
                    </div>
                    <fieldset>

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DynamicSchedule_collapse" aria-expanded="true" aria-controls="DynamicSchedule_collapse" style="margin-left: 10px;">DynamicSchedule</a></legend>
                    <div id="DynamicSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.BasicIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='dynSchedSignRev'>dynSchedSignRev: </label><div class='col-sm-8'><input id='dynSchedSignRev' class='form-check-input' type='checkbox'{{#dynSchedSignRev}} checked{{/dynSchedSignRev}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dynSchedStatus'>dynSchedStatus: </label><div class='col-sm-8'><input id='dynSchedStatus' class='form-control' type='text'{{#dynSchedStatus}} value='{{dynSchedStatus}}'{{/dynSchedStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktMeasurement'>MktMeasurement: </label><div class='col-sm-8'><input id='MktMeasurement' class='form-control' type='text'{{#MktMeasurement}} value='{{MktMeasurement}}'{{/MktMeasurement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Receive_SubControlArea'>Receive_SubControlArea: </label><div class='col-sm-8'><input id='Receive_SubControlArea' class='form-control' type='text'{{#Receive_SubControlArea}} value='{{Receive_SubControlArea}}'{{/Receive_SubControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Send_SubControlArea'>Send_SubControlArea: </label><div class='col-sm-8'><input id='Send_SubControlArea' class='form-control' type='text'{{#Send_SubControlArea}} value='{{Send_SubControlArea}}'{{/Send_SubControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "DynamicSchedule" };
                super.submit (obj);
                temp = document.getElementById ("dynSchedSignRev").checked; if (temp) obj.dynSchedSignRev = true;
                temp = document.getElementById ("dynSchedStatus").value; if ("" != temp) obj.dynSchedStatus = temp;
                temp = document.getElementById ("MktMeasurement").value; if ("" != temp) obj.MktMeasurement = temp;
                temp = document.getElementById ("Receive_SubControlArea").value; if ("" != temp) obj.Receive_SubControlArea = temp;
                temp = document.getElementById ("Send_SubControlArea").value; if ("" != temp) obj.Send_SubControlArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MktMeasurement", "MktMeasurement", "1", "0..*"],
                        ["Receive_SubControlArea", "SubControlArea", "1", "0..*"],
                        ["Send_SubControlArea", "SubControlArea", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * An EnergyProduct is offered commercially as a ContractOrTariff.
         *
         */
        class EnergyProduct extends Common.Agreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnergyProduct;
                if (null == bucket)
                   cim_data.EnergyProduct = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyProduct[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyProduct";
                base.parse_attributes (/<cim:EnergyProduct.EnergyTransactions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyTransactions", sub, context);
                base.parse_attributes (/<cim:EnergyProduct.ResoldBy_Marketer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResoldBy_Marketer", sub, context);
                base.parse_attribute (/<cim:EnergyProduct.GenerationProvider\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenerationProvider", sub, context);
                base.parse_attribute (/<cim:EnergyProduct.TitleHeldBy_Marketer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TitleHeldBy_Marketer", sub, context);
                var bucket = context.parsed.EnergyProduct;
                if (null == bucket)
                   context.parsed.EnergyProduct = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "EnergyProduct", "EnergyTransactions", "EnergyTransactions", fields);
                base.export_attributes (obj, "EnergyProduct", "ResoldBy_Marketer", "ResoldBy_Marketer", fields);
                base.export_attribute (obj, "EnergyProduct", "GenerationProvider", "GenerationProvider", fields);
                base.export_attribute (obj, "EnergyProduct", "TitleHeldBy_Marketer", "TitleHeldBy_Marketer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyProduct_collapse" aria-expanded="true" aria-controls="EnergyProduct_collapse" style="margin-left: 10px;">EnergyProduct</a></legend>
                    <div id="EnergyProduct_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
                    `
                    {{#EnergyTransactions}}<div><b>EnergyTransactions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EnergyTransactions}}
                    {{#ResoldBy_Marketer}}<div><b>ResoldBy_Marketer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ResoldBy_Marketer}}
                    {{#GenerationProvider}}<div><b>GenerationProvider</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GenerationProvider}}&quot;);})'>{{GenerationProvider}}</a></div>{{/GenerationProvider}}
                    {{#TitleHeldBy_Marketer}}<div><b>TitleHeldBy_Marketer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TitleHeldBy_Marketer}}&quot;);})'>{{TitleHeldBy_Marketer}}</a></div>{{/TitleHeldBy_Marketer}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EnergyTransactions) obj.EnergyTransactions_string = obj.EnergyTransactions.join ();
                if (obj.ResoldBy_Marketer) obj.ResoldBy_Marketer_string = obj.ResoldBy_Marketer.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EnergyTransactions_string;
                delete obj.ResoldBy_Marketer_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyProduct_collapse" aria-expanded="true" aria-controls="EnergyProduct_collapse" style="margin-left: 10px;">EnergyProduct</a></legend>
                    <div id="EnergyProduct_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ResoldBy_Marketer'>ResoldBy_Marketer: </label><div class='col-sm-8'><input id='ResoldBy_Marketer' class='form-control' type='text'{{#ResoldBy_Marketer}} value='{{ResoldBy_Marketer}}_string'{{/ResoldBy_Marketer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GenerationProvider'>GenerationProvider: </label><div class='col-sm-8'><input id='GenerationProvider' class='form-control' type='text'{{#GenerationProvider}} value='{{GenerationProvider}}'{{/GenerationProvider}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TitleHeldBy_Marketer'>TitleHeldBy_Marketer: </label><div class='col-sm-8'><input id='TitleHeldBy_Marketer' class='form-control' type='text'{{#TitleHeldBy_Marketer}} value='{{TitleHeldBy_Marketer}}'{{/TitleHeldBy_Marketer}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "EnergyProduct" };
                super.submit (obj);
                temp = document.getElementById ("ResoldBy_Marketer").value; if ("" != temp) obj.ResoldBy_Marketer = temp.split (",");
                temp = document.getElementById ("GenerationProvider").value; if ("" != temp) obj.GenerationProvider = temp;
                temp = document.getElementById ("TitleHeldBy_Marketer").value; if ("" != temp) obj.TitleHeldBy_Marketer = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["EnergyTransactions", "EnergyTransaction", "1..*", "1"],
                        ["ResoldBy_Marketer", "Marketer", "0..*", "0..*"],
                        ["GenerationProvider", "GenerationProvider", "1", "1..*"],
                        ["TitleHeldBy_Marketer", "Marketer", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A collection of transmission lines that are close proximity to each other.
         *
         */
        class TransmissionRightOfWay extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransmissionRightOfWay;
                if (null == bucket)
                   cim_data.TransmissionRightOfWay = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionRightOfWay[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionRightOfWay";
                base.parse_attributes (/<cim:TransmissionRightOfWay.MktLine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktLine", sub, context);
                base.parse_attribute (/<cim:TransmissionRightOfWay.TransmissionCorridor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionCorridor", sub, context);
                var bucket = context.parsed.TransmissionRightOfWay;
                if (null == bucket)
                   context.parsed.TransmissionRightOfWay = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "TransmissionRightOfWay", "MktLine", "MktLine", fields);
                base.export_attribute (obj, "TransmissionRightOfWay", "TransmissionCorridor", "TransmissionCorridor", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionRightOfWay_collapse" aria-expanded="true" aria-controls="TransmissionRightOfWay_collapse" style="margin-left: 10px;">TransmissionRightOfWay</a></legend>
                    <div id="TransmissionRightOfWay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#MktLine}}<div><b>MktLine</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktLine}}
                    {{#TransmissionCorridor}}<div><b>TransmissionCorridor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransmissionCorridor}}&quot;);})'>{{TransmissionCorridor}}</a></div>{{/TransmissionCorridor}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MktLine) obj.MktLine_string = obj.MktLine.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MktLine_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransmissionRightOfWay_collapse" aria-expanded="true" aria-controls="TransmissionRightOfWay_collapse" style="margin-left: 10px;">TransmissionRightOfWay</a></legend>
                    <div id="TransmissionRightOfWay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransmissionCorridor'>TransmissionCorridor: </label><div class='col-sm-8'><input id='TransmissionCorridor' class='form-control' type='text'{{#TransmissionCorridor}} value='{{TransmissionCorridor}}'{{/TransmissionCorridor}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TransmissionRightOfWay" };
                super.submit (obj);
                temp = document.getElementById ("TransmissionCorridor").value; if ("" != temp) obj.TransmissionCorridor = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MktLine", "MktLine", "0..*", "0..1"],
                        ["TransmissionCorridor", "TransmissionCorridor", "1", "1..*"]
                    ]
                );
            }
        }

        /**
         * There is one internal control area in the system, which is the single control area in the primary network company.
         *
         * Real time generation control affects only the internal control area.
         *
         */
        class InternalControlArea extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InternalControlArea;
                if (null == bucket)
                   cim_data.InternalControlArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InternalControlArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "InternalControlArea";
                base.parse_attributes (/<cim:InternalControlArea.CurrentEmergencySI\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CurrentEmergencySI", sub, context);
                base.parse_attribute (/<cim:InternalControlArea.CurrentScheduledInterchange\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CurrentScheduledInterchange", sub, context);
                var bucket = context.parsed.InternalControlArea;
                if (null == bucket)
                   context.parsed.InternalControlArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "InternalControlArea", "CurrentEmergencySI", "CurrentEmergencySI", fields);
                base.export_attribute (obj, "InternalControlArea", "CurrentScheduledInterchange", "CurrentScheduledInterchange", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InternalControlArea_collapse" aria-expanded="true" aria-controls="InternalControlArea_collapse" style="margin-left: 10px;">InternalControlArea</a></legend>
                    <div id="InternalControlArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#CurrentEmergencySI}}<div><b>CurrentEmergencySI</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CurrentEmergencySI}}
                    {{#CurrentScheduledInterchange}}<div><b>CurrentScheduledInterchange</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CurrentScheduledInterchange}}&quot;);})'>{{CurrentScheduledInterchange}}</a></div>{{/CurrentScheduledInterchange}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CurrentEmergencySI) obj.CurrentEmergencySI_string = obj.CurrentEmergencySI.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CurrentEmergencySI_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InternalControlArea_collapse" aria-expanded="true" aria-controls="InternalControlArea_collapse" style="margin-left: 10px;">InternalControlArea</a></legend>
                    <div id="InternalControlArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CurrentScheduledInterchange'>CurrentScheduledInterchange: </label><div class='col-sm-8'><input id='CurrentScheduledInterchange' class='form-control' type='text'{{#CurrentScheduledInterchange}} value='{{CurrentScheduledInterchange}}'{{/CurrentScheduledInterchange}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "InternalControlArea" };
                super.submit (obj);
                temp = document.getElementById ("CurrentScheduledInterchange").value; if ("" != temp) obj.CurrentScheduledInterchange = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CurrentEmergencySI", "CurrentEmergencyScheduledInterchange", "0..*", "1"],
                        ["CurrentScheduledInterchange", "CurrentScheduledInterchange", "0..1", "1"]
                    ]
                );
            }
        }

        return (
            {
                TransmissionCorridor: TransmissionCorridor,
                AreaReserveSpec: AreaReserveSpec,
                DynamicSchedule: DynamicSchedule,
                LossProfile: LossProfile,
                CurtailmentProfile: CurtailmentProfile,
                TransmissionRightOfWay: TransmissionRightOfWay,
                CurrentScheduledInterchange: CurrentScheduledInterchange,
                TieLine: TieLine,
                InternalControlArea: InternalControlArea,
                InadvertentAccount: InadvertentAccount,
                EnergyProduct: EnergyProduct,
                CurrentEmergencyScheduledInterchange: CurrentEmergencyScheduledInterchange
            }
        );
    }
);