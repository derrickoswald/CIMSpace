define
(
    ["model/base", "model/Common", "model/Core", "model/ExternalInputs", "model/MarketPlan"],
    /**
     * Results from the execution of a market.
     *
     */
    function (base, Common, Core, ExternalInputs, MarketPlan)
    {

        /**
         * Model of market results, including cleaing result of resources.
         *
         * Associated with ResourceDispatchResults.
         *
         */
        class ResourceClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ResourceClearing;
                if (null == bucket)
                   cim_data.ResourceClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceClearing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceClearing";
                base.parse_attributes (/<cim:ResourceClearing.ResourceLoadFollowingInst\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceLoadFollowingInst", sub, context);
                base.parse_attributes (/<cim:ResourceClearing.ResourceDispatchResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceDispatchResults", sub, context);
                var bucket = context.parsed.ResourceClearing;
                if (null == bucket)
                   context.parsed.ResourceClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ResourceClearing", "ResourceLoadFollowingInst", "ResourceLoadFollowingInst", fields);
                base.export_attributes (obj, "ResourceClearing", "ResourceDispatchResults", "ResourceDispatchResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceClearing_collapse" aria-expanded="true" aria-controls="ResourceClearing_collapse" style="margin-left: 10px;">ResourceClearing</a></legend>
                    <div id="ResourceClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#ResourceLoadFollowingInst}}<div><b>ResourceLoadFollowingInst</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ResourceLoadFollowingInst}}
                    {{#ResourceDispatchResults}}<div><b>ResourceDispatchResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ResourceDispatchResults}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ResourceLoadFollowingInst) obj.ResourceLoadFollowingInst_string = obj.ResourceLoadFollowingInst.join ();
                if (obj.ResourceDispatchResults) obj.ResourceDispatchResults_string = obj.ResourceDispatchResults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ResourceLoadFollowingInst_string;
                delete obj.ResourceDispatchResults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceClearing_collapse" aria-expanded="true" aria-controls="ResourceClearing_collapse" style="margin-left: 10px;">ResourceClearing</a></legend>
                    <div id="ResourceClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "ResourceClearing" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ResourceLoadFollowingInst", "ResourceLoadFollowingInst", "0..*", "0..1"],
                        ["ResourceDispatchResults", "ResourceDispatchResults", "1..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * This class holds elements that are single values for the entire market time horizon.
         *
         * That is, for the Day Ahead market, there is 1 value for each element, not hourly based.  Is a summary of the market run
         *
         */
        class MarketResults extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MarketResults;
                if (null == bucket)
                   cim_data.MarketResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketResults[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketResults";
                base.parse_element (/<cim:MarketResults.startUpCost>([\s\S]*?)<\/cim:MarketResults.startUpCost>/g, obj, "startUpCost", base.to_float, sub, context);
                base.parse_element (/<cim:MarketResults.minimumLoadCost>([\s\S]*?)<\/cim:MarketResults.minimumLoadCost>/g, obj, "minimumLoadCost", base.to_float, sub, context);
                base.parse_element (/<cim:MarketResults.contingentOperatingResAvail>([\s\S]*?)<\/cim:MarketResults.contingentOperatingResAvail>/g, obj, "contingentOperatingResAvail", base.to_string, sub, context);
                base.parse_element (/<cim:MarketResults.energyCost>([\s\S]*?)<\/cim:MarketResults.energyCost>/g, obj, "energyCost", base.to_float, sub, context);
                base.parse_element (/<cim:MarketResults.totalCost>([\s\S]*?)<\/cim:MarketResults.totalCost>/g, obj, "totalCost", base.to_float, sub, context);
                base.parse_element (/<cim:MarketResults.ancillarySvcCost>([\s\S]*?)<\/cim:MarketResults.ancillarySvcCost>/g, obj, "ancillarySvcCost", base.to_float, sub, context);
                base.parse_element (/<cim:MarketResults.totalRucCost>([\s\S]*?)<\/cim:MarketResults.totalRucCost>/g, obj, "totalRucCost", base.to_float, sub, context);
                base.parse_attribute (/<cim:MarketResults.EnergyMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyMarket", sub, context);
                var bucket = context.parsed.MarketResults;
                if (null == bucket)
                   context.parsed.MarketResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketResults", "startUpCost", "startUpCost",  base.from_float, fields);
                base.export_element (obj, "MarketResults", "minimumLoadCost", "minimumLoadCost",  base.from_float, fields);
                base.export_element (obj, "MarketResults", "contingentOperatingResAvail", "contingentOperatingResAvail",  base.from_string, fields);
                base.export_element (obj, "MarketResults", "energyCost", "energyCost",  base.from_float, fields);
                base.export_element (obj, "MarketResults", "totalCost", "totalCost",  base.from_float, fields);
                base.export_element (obj, "MarketResults", "ancillarySvcCost", "ancillarySvcCost",  base.from_float, fields);
                base.export_element (obj, "MarketResults", "totalRucCost", "totalRucCost",  base.from_float, fields);
                base.export_attribute (obj, "MarketResults", "EnergyMarket", "EnergyMarket", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketResults_collapse" aria-expanded="true" aria-controls="MarketResults_collapse" style="margin-left: 10px;">MarketResults</a></legend>
                    <div id="MarketResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#startUpCost}}<div><b>startUpCost</b>: {{startUpCost}}</div>{{/startUpCost}}
                    {{#minimumLoadCost}}<div><b>minimumLoadCost</b>: {{minimumLoadCost}}</div>{{/minimumLoadCost}}
                    {{#contingentOperatingResAvail}}<div><b>contingentOperatingResAvail</b>: {{contingentOperatingResAvail}}</div>{{/contingentOperatingResAvail}}
                    {{#energyCost}}<div><b>energyCost</b>: {{energyCost}}</div>{{/energyCost}}
                    {{#totalCost}}<div><b>totalCost</b>: {{totalCost}}</div>{{/totalCost}}
                    {{#ancillarySvcCost}}<div><b>ancillarySvcCost</b>: {{ancillarySvcCost}}</div>{{/ancillarySvcCost}}
                    {{#totalRucCost}}<div><b>totalRucCost</b>: {{totalRucCost}}</div>{{/totalRucCost}}
                    {{#EnergyMarket}}<div><b>EnergyMarket</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyMarket}}&quot;);})'>{{EnergyMarket}}</a></div>{{/EnergyMarket}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketResults_collapse" aria-expanded="true" aria-controls="MarketResults_collapse" style="margin-left: 10px;">MarketResults</a></legend>
                    <div id="MarketResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startUpCost'>startUpCost: </label><div class='col-sm-8'><input id='startUpCost' class='form-control' type='text'{{#startUpCost}} value='{{startUpCost}}'{{/startUpCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumLoadCost'>minimumLoadCost: </label><div class='col-sm-8'><input id='minimumLoadCost' class='form-control' type='text'{{#minimumLoadCost}} value='{{minimumLoadCost}}'{{/minimumLoadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contingentOperatingResAvail'>contingentOperatingResAvail: </label><div class='col-sm-8'><input id='contingentOperatingResAvail' class='form-control' type='text'{{#contingentOperatingResAvail}} value='{{contingentOperatingResAvail}}'{{/contingentOperatingResAvail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyCost'>energyCost: </label><div class='col-sm-8'><input id='energyCost' class='form-control' type='text'{{#energyCost}} value='{{energyCost}}'{{/energyCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='totalCost'>totalCost: </label><div class='col-sm-8'><input id='totalCost' class='form-control' type='text'{{#totalCost}} value='{{totalCost}}'{{/totalCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ancillarySvcCost'>ancillarySvcCost: </label><div class='col-sm-8'><input id='ancillarySvcCost' class='form-control' type='text'{{#ancillarySvcCost}} value='{{ancillarySvcCost}}'{{/ancillarySvcCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='totalRucCost'>totalRucCost: </label><div class='col-sm-8'><input id='totalRucCost' class='form-control' type='text'{{#totalRucCost}} value='{{totalRucCost}}'{{/totalRucCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergyMarket'>EnergyMarket: </label><div class='col-sm-8'><input id='EnergyMarket' class='form-control' type='text'{{#EnergyMarket}} value='{{EnergyMarket}}'{{/EnergyMarket}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MarketResults" };
                super.submit (obj);
                temp = document.getElementById ("startUpCost").value; if ("" != temp) obj.startUpCost = temp;
                temp = document.getElementById ("minimumLoadCost").value; if ("" != temp) obj.minimumLoadCost = temp;
                temp = document.getElementById ("contingentOperatingResAvail").value; if ("" != temp) obj.contingentOperatingResAvail = temp;
                temp = document.getElementById ("energyCost").value; if ("" != temp) obj.energyCost = temp;
                temp = document.getElementById ("totalCost").value; if ("" != temp) obj.totalCost = temp;
                temp = document.getElementById ("ancillarySvcCost").value; if ("" != temp) obj.ancillarySvcCost = temp;
                temp = document.getElementById ("totalRucCost").value; if ("" != temp) obj.totalRucCost = temp;
                temp = document.getElementById ("EnergyMarket").value; if ("" != temp) obj.EnergyMarket = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["EnergyMarket", "EnergyMarket", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Provides the total price, the cost component, the loss component, and the congestion component for Pnodes for the forward and real time markets.
         *
         * There are several prices produced based on the run type (MPM, RUC, Pricing, or Scheduling/Dispatch).
         *
         */
        class PnodeResults extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PnodeResults;
                if (null == bucket)
                   cim_data.PnodeResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PnodeResults[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PnodeResults";
                base.parse_element (/<cim:PnodeResults.marginalClearingPrice>([\s\S]*?)<\/cim:PnodeResults.marginalClearingPrice>/g, obj, "marginalClearingPrice", base.to_float, sub, context);
                base.parse_element (/<cim:PnodeResults.costLMP>([\s\S]*?)<\/cim:PnodeResults.costLMP>/g, obj, "costLMP", base.to_float, sub, context);
                base.parse_element (/<cim:PnodeResults.lossLMP>([\s\S]*?)<\/cim:PnodeResults.lossLMP>/g, obj, "lossLMP", base.to_float, sub, context);
                base.parse_element (/<cim:PnodeResults.congestLMP>([\s\S]*?)<\/cim:PnodeResults.congestLMP>/g, obj, "congestLMP", base.to_float, sub, context);
                base.parse_element (/<cim:PnodeResults.scheduledMW>([\s\S]*?)<\/cim:PnodeResults.scheduledMW>/g, obj, "scheduledMW", base.to_float, sub, context);
                base.parse_element (/<cim:PnodeResults.updateUser>([\s\S]*?)<\/cim:PnodeResults.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:PnodeResults.updateTimeStamp>([\s\S]*?)<\/cim:PnodeResults.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:PnodeResults.updateType>([\s\S]*?)<\/cim:PnodeResults.updateType>/g, obj, "updateType", base.to_string, sub, context);
                base.parse_attribute (/<cim:PnodeResults.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                base.parse_attribute (/<cim:PnodeResults.PnodeClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PnodeClearing", sub, context);
                var bucket = context.parsed.PnodeResults;
                if (null == bucket)
                   context.parsed.PnodeResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PnodeResults", "marginalClearingPrice", "marginalClearingPrice",  base.from_float, fields);
                base.export_element (obj, "PnodeResults", "costLMP", "costLMP",  base.from_float, fields);
                base.export_element (obj, "PnodeResults", "lossLMP", "lossLMP",  base.from_float, fields);
                base.export_element (obj, "PnodeResults", "congestLMP", "congestLMP",  base.from_float, fields);
                base.export_element (obj, "PnodeResults", "scheduledMW", "scheduledMW",  base.from_float, fields);
                base.export_element (obj, "PnodeResults", "updateUser", "updateUser",  base.from_string, fields);
                base.export_element (obj, "PnodeResults", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "PnodeResults", "updateType", "updateType",  base.from_string, fields);
                base.export_attribute (obj, "PnodeResults", "Pnode", "Pnode", fields);
                base.export_attribute (obj, "PnodeResults", "PnodeClearing", "PnodeClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PnodeResults_collapse" aria-expanded="true" aria-controls="PnodeResults_collapse" style="margin-left: 10px;">PnodeResults</a></legend>
                    <div id="PnodeResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#marginalClearingPrice}}<div><b>marginalClearingPrice</b>: {{marginalClearingPrice}}</div>{{/marginalClearingPrice}}
                    {{#costLMP}}<div><b>costLMP</b>: {{costLMP}}</div>{{/costLMP}}
                    {{#lossLMP}}<div><b>lossLMP</b>: {{lossLMP}}</div>{{/lossLMP}}
                    {{#congestLMP}}<div><b>congestLMP</b>: {{congestLMP}}</div>{{/congestLMP}}
                    {{#scheduledMW}}<div><b>scheduledMW</b>: {{scheduledMW}}</div>{{/scheduledMW}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#updateType}}<div><b>updateType</b>: {{updateType}}</div>{{/updateType}}
                    {{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Pnode}}&quot;);})'>{{Pnode}}</a></div>{{/Pnode}}
                    {{#PnodeClearing}}<div><b>PnodeClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PnodeClearing}}&quot;);})'>{{PnodeClearing}}</a></div>{{/PnodeClearing}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PnodeResults_collapse" aria-expanded="true" aria-controls="PnodeResults_collapse" style="margin-left: 10px;">PnodeResults</a></legend>
                    <div id="PnodeResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marginalClearingPrice'>marginalClearingPrice: </label><div class='col-sm-8'><input id='marginalClearingPrice' class='form-control' type='text'{{#marginalClearingPrice}} value='{{marginalClearingPrice}}'{{/marginalClearingPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='costLMP'>costLMP: </label><div class='col-sm-8'><input id='costLMP' class='form-control' type='text'{{#costLMP}} value='{{costLMP}}'{{/costLMP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lossLMP'>lossLMP: </label><div class='col-sm-8'><input id='lossLMP' class='form-control' type='text'{{#lossLMP}} value='{{lossLMP}}'{{/lossLMP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='congestLMP'>congestLMP: </label><div class='col-sm-8'><input id='congestLMP' class='form-control' type='text'{{#congestLMP}} value='{{congestLMP}}'{{/congestLMP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scheduledMW'>scheduledMW: </label><div class='col-sm-8'><input id='scheduledMW' class='form-control' type='text'{{#scheduledMW}} value='{{scheduledMW}}'{{/scheduledMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateUser'>updateUser: </label><div class='col-sm-8'><input id='updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateType'>updateType: </label><div class='col-sm-8'><input id='updateType' class='form-control' type='text'{{#updateType}} value='{{updateType}}'{{/updateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Pnode'>Pnode: </label><div class='col-sm-8'><input id='Pnode' class='form-control' type='text'{{#Pnode}} value='{{Pnode}}'{{/Pnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PnodeClearing'>PnodeClearing: </label><div class='col-sm-8'><input id='PnodeClearing' class='form-control' type='text'{{#PnodeClearing}} value='{{PnodeClearing}}'{{/PnodeClearing}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PnodeResults" };
                super.submit (obj);
                temp = document.getElementById ("marginalClearingPrice").value; if ("" != temp) obj.marginalClearingPrice = temp;
                temp = document.getElementById ("costLMP").value; if ("" != temp) obj.costLMP = temp;
                temp = document.getElementById ("lossLMP").value; if ("" != temp) obj.lossLMP = temp;
                temp = document.getElementById ("congestLMP").value; if ("" != temp) obj.congestLMP = temp;
                temp = document.getElementById ("scheduledMW").value; if ("" != temp) obj.scheduledMW = temp;
                temp = document.getElementById ("updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById ("updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;
                temp = document.getElementById ("updateType").value; if ("" != temp) obj.updateType = temp;
                temp = document.getElementById ("Pnode").value; if ("" != temp) obj.Pnode = temp;
                temp = document.getElementById ("PnodeClearing").value; if ("" != temp) obj.PnodeClearing = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Pnode", "Pnode", "0..1", "1..*"],
                        ["PnodeClearing", "PnodeClearing", "0..1", "1..*"]
                    ]
                );
            }
        }

        /**
         * Groups all items associated with Binding Constraints and Constraint Violations per interval and market.
         *
         */
        class ConstraintClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ConstraintClearing;
                if (null == bucket)
                   cim_data.ConstraintClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConstraintClearing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "ConstraintClearing";
                base.parse_attributes (/<cim:ConstraintClearing.ConstraintResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConstraintResults", sub, context);
                var bucket = context.parsed.ConstraintClearing;
                if (null == bucket)
                   context.parsed.ConstraintClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ConstraintClearing", "ConstraintResults", "ConstraintResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConstraintClearing_collapse" aria-expanded="true" aria-controls="ConstraintClearing_collapse" style="margin-left: 10px;">ConstraintClearing</a></legend>
                    <div id="ConstraintClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#ConstraintResults}}<div><b>ConstraintResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConstraintResults}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ConstraintResults) obj.ConstraintResults_string = obj.ConstraintResults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ConstraintResults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConstraintClearing_collapse" aria-expanded="true" aria-controls="ConstraintClearing_collapse" style="margin-left: 10px;">ConstraintClearing</a></legend>
                    <div id="ConstraintClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "ConstraintClearing" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ConstraintResults", "ConstraintResults", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Model of market clearing, relating to commitment instructions.
         *
         * Identifies interval
         *
         */
        class InstructionClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.InstructionClearing;
                if (null == bucket)
                   cim_data.InstructionClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InstructionClearing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "InstructionClearing";
                base.parse_attributes (/<cim:InstructionClearing.Instructions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Instructions", sub, context);
                var bucket = context.parsed.InstructionClearing;
                if (null == bucket)
                   context.parsed.InstructionClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "InstructionClearing", "Instructions", "Instructions", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InstructionClearing_collapse" aria-expanded="true" aria-controls="InstructionClearing_collapse" style="margin-left: 10px;">InstructionClearing</a></legend>
                    <div id="InstructionClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#Instructions}}<div><b>Instructions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Instructions}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Instructions) obj.Instructions_string = obj.Instructions.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Instructions_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InstructionClearing_collapse" aria-expanded="true" aria-controls="InstructionClearing_collapse" style="margin-left: 10px;">InstructionClearing</a></legend>
                    <div id="InstructionClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Instructions'>Instructions: </label><div class='col-sm-8'><input id='Instructions' class='form-control' type='text'{{#Instructions}} value='{{Instructions}}_string'{{/Instructions}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "InstructionClearing" };
                super.submit (obj);
                temp = document.getElementById ("Instructions").value; if ("" != temp) obj.Instructions = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Instructions", "Instructions", "1..*", "1..*"]
                    ]
                );
            }
        }

        /**
         * Model of Self Schedules Results.
         *
         * Includes self schedule MW,and type of self schedule for each self schedule type included in total self schedule MW value found in ResourceAwardInstruction.
         *
         */
        class SelfScheduleBreakdown extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SelfScheduleBreakdown;
                if (null == bucket)
                   cim_data.SelfScheduleBreakdown = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SelfScheduleBreakdown[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SelfScheduleBreakdown";
                base.parse_element (/<cim:SelfScheduleBreakdown.selfSchedMW>([\s\S]*?)<\/cim:SelfScheduleBreakdown.selfSchedMW>/g, obj, "selfSchedMW", base.to_float, sub, context);
                base.parse_element (/<cim:SelfScheduleBreakdown.selfSchedType>([\s\S]*?)<\/cim:SelfScheduleBreakdown.selfSchedType>/g, obj, "selfSchedType", base.to_string, sub, context);
                base.parse_attribute (/<cim:SelfScheduleBreakdown.ResourceAwardInstruction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceAwardInstruction", sub, context);
                var bucket = context.parsed.SelfScheduleBreakdown;
                if (null == bucket)
                   context.parsed.SelfScheduleBreakdown = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SelfScheduleBreakdown", "selfSchedMW", "selfSchedMW",  base.from_float, fields);
                base.export_element (obj, "SelfScheduleBreakdown", "selfSchedType", "selfSchedType",  base.from_string, fields);
                base.export_attribute (obj, "SelfScheduleBreakdown", "ResourceAwardInstruction", "ResourceAwardInstruction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SelfScheduleBreakdown_collapse" aria-expanded="true" aria-controls="SelfScheduleBreakdown_collapse" style="margin-left: 10px;">SelfScheduleBreakdown</a></legend>
                    <div id="SelfScheduleBreakdown_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#selfSchedMW}}<div><b>selfSchedMW</b>: {{selfSchedMW}}</div>{{/selfSchedMW}}
                    {{#selfSchedType}}<div><b>selfSchedType</b>: {{selfSchedType}}</div>{{/selfSchedType}}
                    {{#ResourceAwardInstruction}}<div><b>ResourceAwardInstruction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ResourceAwardInstruction}}&quot;);})'>{{ResourceAwardInstruction}}</a></div>{{/ResourceAwardInstruction}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SelfScheduleBreakdown_collapse" aria-expanded="true" aria-controls="SelfScheduleBreakdown_collapse" style="margin-left: 10px;">SelfScheduleBreakdown</a></legend>
                    <div id="SelfScheduleBreakdown_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='selfSchedMW'>selfSchedMW: </label><div class='col-sm-8'><input id='selfSchedMW' class='form-control' type='text'{{#selfSchedMW}} value='{{selfSchedMW}}'{{/selfSchedMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='selfSchedType'>selfSchedType: </label><div class='col-sm-8'><input id='selfSchedType' class='form-control' type='text'{{#selfSchedType}} value='{{selfSchedType}}'{{/selfSchedType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ResourceAwardInstruction'>ResourceAwardInstruction: </label><div class='col-sm-8'><input id='ResourceAwardInstruction' class='form-control' type='text'{{#ResourceAwardInstruction}} value='{{ResourceAwardInstruction}}'{{/ResourceAwardInstruction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "SelfScheduleBreakdown" };
                super.submit (obj);
                temp = document.getElementById ("selfSchedMW").value; if ("" != temp) obj.selfSchedMW = temp;
                temp = document.getElementById ("selfSchedType").value; if ("" != temp) obj.selfSchedType = temp;
                temp = document.getElementById ("ResourceAwardInstruction").value; if ("" != temp) obj.ResourceAwardInstruction = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ResourceAwardInstruction", "ResourceAwardInstruction", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Model results of ex-post calculation of MW losses.
         *
         * Summarizes loss in two categories losses on the the extra high voltage transmission and total losses. Calculated for each subcontrol area.
         *
         */
        class ExPostLossResults extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExPostLossResults;
                if (null == bucket)
                   cim_data.ExPostLossResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExPostLossResults[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ExPostLossResults";
                base.parse_element (/<cim:ExPostLossResults.totalLossMW>([\s\S]*?)<\/cim:ExPostLossResults.totalLossMW>/g, obj, "totalLossMW", base.to_float, sub, context);
                base.parse_element (/<cim:ExPostLossResults.ehvLossMW>([\s\S]*?)<\/cim:ExPostLossResults.ehvLossMW>/g, obj, "ehvLossMW", base.to_float, sub, context);
                base.parse_attribute (/<cim:ExPostLossResults.ExPostLoss\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExPostLoss", sub, context);
                base.parse_attribute (/<cim:ExPostLossResults.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                var bucket = context.parsed.ExPostLossResults;
                if (null == bucket)
                   context.parsed.ExPostLossResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ExPostLossResults", "totalLossMW", "totalLossMW",  base.from_float, fields);
                base.export_element (obj, "ExPostLossResults", "ehvLossMW", "ehvLossMW",  base.from_float, fields);
                base.export_attribute (obj, "ExPostLossResults", "ExPostLoss", "ExPostLoss", fields);
                base.export_attribute (obj, "ExPostLossResults", "SubControlArea", "SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostLossResults_collapse" aria-expanded="true" aria-controls="ExPostLossResults_collapse" style="margin-left: 10px;">ExPostLossResults</a></legend>
                    <div id="ExPostLossResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#totalLossMW}}<div><b>totalLossMW</b>: {{totalLossMW}}</div>{{/totalLossMW}}
                    {{#ehvLossMW}}<div><b>ehvLossMW</b>: {{ehvLossMW}}</div>{{/ehvLossMW}}
                    {{#ExPostLoss}}<div><b>ExPostLoss</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ExPostLoss}}&quot;);})'>{{ExPostLoss}}</a></div>{{/ExPostLoss}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostLossResults_collapse" aria-expanded="true" aria-controls="ExPostLossResults_collapse" style="margin-left: 10px;">ExPostLossResults</a></legend>
                    <div id="ExPostLossResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='totalLossMW'>totalLossMW: </label><div class='col-sm-8'><input id='totalLossMW' class='form-control' type='text'{{#totalLossMW}} value='{{totalLossMW}}'{{/totalLossMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ehvLossMW'>ehvLossMW: </label><div class='col-sm-8'><input id='ehvLossMW' class='form-control' type='text'{{#ehvLossMW}} value='{{ehvLossMW}}'{{/ehvLossMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ExPostLoss'>ExPostLoss: </label><div class='col-sm-8'><input id='ExPostLoss' class='form-control' type='text'{{#ExPostLoss}} value='{{ExPostLoss}}'{{/ExPostLoss}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SubControlArea'>SubControlArea: </label><div class='col-sm-8'><input id='SubControlArea' class='form-control' type='text'{{#SubControlArea}} value='{{SubControlArea}}'{{/SubControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ExPostLossResults" };
                super.submit (obj);
                temp = document.getElementById ("totalLossMW").value; if ("" != temp) obj.totalLossMW = temp;
                temp = document.getElementById ("ehvLossMW").value; if ("" != temp) obj.ehvLossMW = temp;
                temp = document.getElementById ("ExPostLoss").value; if ("" != temp) obj.ExPostLoss = temp;
                temp = document.getElementById ("SubControlArea").value; if ("" != temp) obj.SubControlArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ExPostLoss", "ExPostLoss", "1", "0..*"],
                        ["SubControlArea", "SubControlArea", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * The ResourceDispatchResults class provides market results that can be provided to a SC.
         *
         * The specific data provided consists of several indicators such as contingency flags, blocked start up, and RMR dispatch. It also provides the projected overall and the regulating status of the resource.
         *
         */
        class ResourceDispatchResults extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ResourceDispatchResults;
                if (null == bucket)
                   cim_data.ResourceDispatchResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceDispatchResults[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceDispatchResults";
                base.parse_element (/<cim:ResourceDispatchResults.blockedDispatch>([\s\S]*?)<\/cim:ResourceDispatchResults.blockedDispatch>/g, obj, "blockedDispatch", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.blockedPublishDOP>([\s\S]*?)<\/cim:ResourceDispatchResults.blockedPublishDOP>/g, obj, "blockedPublishDOP", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.contingencyFlag>([\s\S]*?)<\/cim:ResourceDispatchResults.contingencyFlag>/g, obj, "contingencyFlag", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.limitIndicator>([\s\S]*?)<\/cim:ResourceDispatchResults.limitIndicator>/g, obj, "limitIndicator", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.lowerLimit>([\s\S]*?)<\/cim:ResourceDispatchResults.lowerLimit>/g, obj, "lowerLimit", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.maxRampRate>([\s\S]*?)<\/cim:ResourceDispatchResults.maxRampRate>/g, obj, "maxRampRate", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.operatingLimitHigh>([\s\S]*?)<\/cim:ResourceDispatchResults.operatingLimitHigh>/g, obj, "operatingLimitHigh", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.operatingLimitLow>([\s\S]*?)<\/cim:ResourceDispatchResults.operatingLimitLow>/g, obj, "operatingLimitLow", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.penaltyDispatchIndicator>([\s\S]*?)<\/cim:ResourceDispatchResults.penaltyDispatchIndicator>/g, obj, "penaltyDispatchIndicator", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.regulatingLimitHigh>([\s\S]*?)<\/cim:ResourceDispatchResults.regulatingLimitHigh>/g, obj, "regulatingLimitHigh", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.regulatingLimitLow>([\s\S]*?)<\/cim:ResourceDispatchResults.regulatingLimitLow>/g, obj, "regulatingLimitLow", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.resourceStatus>([\s\S]*?)<\/cim:ResourceDispatchResults.resourceStatus>/g, obj, "resourceStatus", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.totalSchedule>([\s\S]*?)<\/cim:ResourceDispatchResults.totalSchedule>/g, obj, "totalSchedule", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.updateTimeStamp>([\s\S]*?)<\/cim:ResourceDispatchResults.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.updateType>([\s\S]*?)<\/cim:ResourceDispatchResults.updateType>/g, obj, "updateType", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.updateUser>([\s\S]*?)<\/cim:ResourceDispatchResults.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceDispatchResults.upperLimit>([\s\S]*?)<\/cim:ResourceDispatchResults.upperLimit>/g, obj, "upperLimit", base.to_float, sub, context);
                base.parse_attribute (/<cim:ResourceDispatchResults.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:ResourceDispatchResults.ResourceClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceClearing", sub, context);
                var bucket = context.parsed.ResourceDispatchResults;
                if (null == bucket)
                   context.parsed.ResourceDispatchResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ResourceDispatchResults", "blockedDispatch", "blockedDispatch",  base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "blockedPublishDOP", "blockedPublishDOP",  base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "contingencyFlag", "contingencyFlag",  base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "limitIndicator", "limitIndicator",  base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "lowerLimit", "lowerLimit",  base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "maxRampRate", "maxRampRate",  base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "operatingLimitHigh", "operatingLimitHigh",  base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "operatingLimitLow", "operatingLimitLow",  base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "penaltyDispatchIndicator", "penaltyDispatchIndicator",  base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "regulatingLimitHigh", "regulatingLimitHigh",  base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "regulatingLimitLow", "regulatingLimitLow",  base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "resourceStatus", "resourceStatus",  base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "totalSchedule", "totalSchedule",  base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "ResourceDispatchResults", "updateType", "updateType",  base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "updateUser", "updateUser",  base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "upperLimit", "upperLimit",  base.from_float, fields);
                base.export_attribute (obj, "ResourceDispatchResults", "RegisteredResource", "RegisteredResource", fields);
                base.export_attribute (obj, "ResourceDispatchResults", "ResourceClearing", "ResourceClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceDispatchResults_collapse" aria-expanded="true" aria-controls="ResourceDispatchResults_collapse" style="margin-left: 10px;">ResourceDispatchResults</a></legend>
                    <div id="ResourceDispatchResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#blockedDispatch}}<div><b>blockedDispatch</b>: {{blockedDispatch}}</div>{{/blockedDispatch}}
                    {{#blockedPublishDOP}}<div><b>blockedPublishDOP</b>: {{blockedPublishDOP}}</div>{{/blockedPublishDOP}}
                    {{#contingencyFlag}}<div><b>contingencyFlag</b>: {{contingencyFlag}}</div>{{/contingencyFlag}}
                    {{#limitIndicator}}<div><b>limitIndicator</b>: {{limitIndicator}}</div>{{/limitIndicator}}
                    {{#lowerLimit}}<div><b>lowerLimit</b>: {{lowerLimit}}</div>{{/lowerLimit}}
                    {{#maxRampRate}}<div><b>maxRampRate</b>: {{maxRampRate}}</div>{{/maxRampRate}}
                    {{#operatingLimitHigh}}<div><b>operatingLimitHigh</b>: {{operatingLimitHigh}}</div>{{/operatingLimitHigh}}
                    {{#operatingLimitLow}}<div><b>operatingLimitLow</b>: {{operatingLimitLow}}</div>{{/operatingLimitLow}}
                    {{#penaltyDispatchIndicator}}<div><b>penaltyDispatchIndicator</b>: {{penaltyDispatchIndicator}}</div>{{/penaltyDispatchIndicator}}
                    {{#regulatingLimitHigh}}<div><b>regulatingLimitHigh</b>: {{regulatingLimitHigh}}</div>{{/regulatingLimitHigh}}
                    {{#regulatingLimitLow}}<div><b>regulatingLimitLow</b>: {{regulatingLimitLow}}</div>{{/regulatingLimitLow}}
                    {{#resourceStatus}}<div><b>resourceStatus</b>: {{resourceStatus}}</div>{{/resourceStatus}}
                    {{#totalSchedule}}<div><b>totalSchedule</b>: {{totalSchedule}}</div>{{/totalSchedule}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#updateType}}<div><b>updateType</b>: {{updateType}}</div>{{/updateType}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#upperLimit}}<div><b>upperLimit</b>: {{upperLimit}}</div>{{/upperLimit}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    {{#ResourceClearing}}<div><b>ResourceClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ResourceClearing}}&quot;);})'>{{ResourceClearing}}</a></div>{{/ResourceClearing}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceDispatchResults_collapse" aria-expanded="true" aria-controls="ResourceDispatchResults_collapse" style="margin-left: 10px;">ResourceDispatchResults</a></legend>
                    <div id="ResourceDispatchResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='blockedDispatch'>blockedDispatch: </label><div class='col-sm-8'><input id='blockedDispatch' class='form-control' type='text'{{#blockedDispatch}} value='{{blockedDispatch}}'{{/blockedDispatch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='blockedPublishDOP'>blockedPublishDOP: </label><div class='col-sm-8'><input id='blockedPublishDOP' class='form-control' type='text'{{#blockedPublishDOP}} value='{{blockedPublishDOP}}'{{/blockedPublishDOP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contingencyFlag'>contingencyFlag: </label><div class='col-sm-8'><input id='contingencyFlag' class='form-control' type='text'{{#contingencyFlag}} value='{{contingencyFlag}}'{{/contingencyFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='limitIndicator'>limitIndicator: </label><div class='col-sm-8'><input id='limitIndicator' class='form-control' type='text'{{#limitIndicator}} value='{{limitIndicator}}'{{/limitIndicator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowerLimit'>lowerLimit: </label><div class='col-sm-8'><input id='lowerLimit' class='form-control' type='text'{{#lowerLimit}} value='{{lowerLimit}}'{{/lowerLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxRampRate'>maxRampRate: </label><div class='col-sm-8'><input id='maxRampRate' class='form-control' type='text'{{#maxRampRate}} value='{{maxRampRate}}'{{/maxRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='operatingLimitHigh'>operatingLimitHigh: </label><div class='col-sm-8'><input id='operatingLimitHigh' class='form-control' type='text'{{#operatingLimitHigh}} value='{{operatingLimitHigh}}'{{/operatingLimitHigh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='operatingLimitLow'>operatingLimitLow: </label><div class='col-sm-8'><input id='operatingLimitLow' class='form-control' type='text'{{#operatingLimitLow}} value='{{operatingLimitLow}}'{{/operatingLimitLow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='penaltyDispatchIndicator'>penaltyDispatchIndicator: </label><div class='col-sm-8'><input id='penaltyDispatchIndicator' class='form-control' type='text'{{#penaltyDispatchIndicator}} value='{{penaltyDispatchIndicator}}'{{/penaltyDispatchIndicator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='regulatingLimitHigh'>regulatingLimitHigh: </label><div class='col-sm-8'><input id='regulatingLimitHigh' class='form-control' type='text'{{#regulatingLimitHigh}} value='{{regulatingLimitHigh}}'{{/regulatingLimitHigh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='regulatingLimitLow'>regulatingLimitLow: </label><div class='col-sm-8'><input id='regulatingLimitLow' class='form-control' type='text'{{#regulatingLimitLow}} value='{{regulatingLimitLow}}'{{/regulatingLimitLow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='resourceStatus'>resourceStatus: </label><div class='col-sm-8'><input id='resourceStatus' class='form-control' type='text'{{#resourceStatus}} value='{{resourceStatus}}'{{/resourceStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='totalSchedule'>totalSchedule: </label><div class='col-sm-8'><input id='totalSchedule' class='form-control' type='text'{{#totalSchedule}} value='{{totalSchedule}}'{{/totalSchedule}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateType'>updateType: </label><div class='col-sm-8'><input id='updateType' class='form-control' type='text'{{#updateType}} value='{{updateType}}'{{/updateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateUser'>updateUser: </label><div class='col-sm-8'><input id='updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='upperLimit'>upperLimit: </label><div class='col-sm-8'><input id='upperLimit' class='form-control' type='text'{{#upperLimit}} value='{{upperLimit}}'{{/upperLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ResourceClearing'>ResourceClearing: </label><div class='col-sm-8'><input id='ResourceClearing' class='form-control' type='text'{{#ResourceClearing}} value='{{ResourceClearing}}'{{/ResourceClearing}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ResourceDispatchResults" };
                super.submit (obj);
                temp = document.getElementById ("blockedDispatch").value; if ("" != temp) obj.blockedDispatch = temp;
                temp = document.getElementById ("blockedPublishDOP").value; if ("" != temp) obj.blockedPublishDOP = temp;
                temp = document.getElementById ("contingencyFlag").value; if ("" != temp) obj.contingencyFlag = temp;
                temp = document.getElementById ("limitIndicator").value; if ("" != temp) obj.limitIndicator = temp;
                temp = document.getElementById ("lowerLimit").value; if ("" != temp) obj.lowerLimit = temp;
                temp = document.getElementById ("maxRampRate").value; if ("" != temp) obj.maxRampRate = temp;
                temp = document.getElementById ("operatingLimitHigh").value; if ("" != temp) obj.operatingLimitHigh = temp;
                temp = document.getElementById ("operatingLimitLow").value; if ("" != temp) obj.operatingLimitLow = temp;
                temp = document.getElementById ("penaltyDispatchIndicator").value; if ("" != temp) obj.penaltyDispatchIndicator = temp;
                temp = document.getElementById ("regulatingLimitHigh").value; if ("" != temp) obj.regulatingLimitHigh = temp;
                temp = document.getElementById ("regulatingLimitLow").value; if ("" != temp) obj.regulatingLimitLow = temp;
                temp = document.getElementById ("resourceStatus").value; if ("" != temp) obj.resourceStatus = temp;
                temp = document.getElementById ("totalSchedule").value; if ("" != temp) obj.totalSchedule = temp;
                temp = document.getElementById ("updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;
                temp = document.getElementById ("updateType").value; if ("" != temp) obj.updateType = temp;
                temp = document.getElementById ("updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById ("upperLimit").value; if ("" != temp) obj.upperLimit = temp;
                temp = document.getElementById ("RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;
                temp = document.getElementById ("ResourceClearing").value; if ("" != temp) obj.ResourceClearing = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredResource", "RegisteredResource", "0..1", "0..*"],
                        ["ResourceClearing", "ResourceClearing", "0..1", "1..*"]
                    ]
                );
            }
        }

        /**
         * Provides the necessary information (on a resource basis) to capture the Dispatch Operating Target (DOT) results on a Dispatch interval.
         *
         * This information is only relevant to the RT interval market.
         *
         */
        class DotInstruction extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DotInstruction;
                if (null == bucket)
                   cim_data.DotInstruction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DotInstruction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DotInstruction";
                base.parse_element (/<cim:DotInstruction.actualRampRate>([\s\S]*?)<\/cim:DotInstruction.actualRampRate>/g, obj, "actualRampRate", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.compliantIndicator>([\s\S]*?)<\/cim:DotInstruction.compliantIndicator>/g, obj, "compliantIndicator", base.to_string, sub, context);
                base.parse_element (/<cim:DotInstruction.DOT>([\s\S]*?)<\/cim:DotInstruction.DOT>/g, obj, "DOT", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.economicMaxOverride>([\s\S]*?)<\/cim:DotInstruction.economicMaxOverride>/g, obj, "economicMaxOverride", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.expectedEnergy>([\s\S]*?)<\/cim:DotInstruction.expectedEnergy>/g, obj, "expectedEnergy", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.generatorPerformanceDegree>([\s\S]*?)<\/cim:DotInstruction.generatorPerformanceDegree>/g, obj, "generatorPerformanceDegree", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.hourAheadSchedEnergy>([\s\S]*?)<\/cim:DotInstruction.hourAheadSchedEnergy>/g, obj, "hourAheadSchedEnergy", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.hourlySchedule>([\s\S]*?)<\/cim:DotInstruction.hourlySchedule>/g, obj, "hourlySchedule", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.instructionTime>([\s\S]*?)<\/cim:DotInstruction.instructionTime>/g, obj, "instructionTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:DotInstruction.maximumEmergencyInd>([\s\S]*?)<\/cim:DotInstruction.maximumEmergencyInd>/g, obj, "maximumEmergencyInd", base.to_boolean, sub, context);
                base.parse_element (/<cim:DotInstruction.meterLoadFollowing>([\s\S]*?)<\/cim:DotInstruction.meterLoadFollowing>/g, obj, "meterLoadFollowing", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.nonRampRestrictedMW>([\s\S]*?)<\/cim:DotInstruction.nonRampRestrictedMW>/g, obj, "nonRampRestrictedMW", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.nonSpinReserve>([\s\S]*?)<\/cim:DotInstruction.nonSpinReserve>/g, obj, "nonSpinReserve", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.previousDOTTimeStamp>([\s\S]*?)<\/cim:DotInstruction.previousDOTTimeStamp>/g, obj, "previousDOTTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:DotInstruction.rampRateLimit>([\s\S]*?)<\/cim:DotInstruction.rampRateLimit>/g, obj, "rampRateLimit", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.regulationStatus>([\s\S]*?)<\/cim:DotInstruction.regulationStatus>/g, obj, "regulationStatus", base.to_string, sub, context);
                base.parse_element (/<cim:DotInstruction.spinReserve>([\s\S]*?)<\/cim:DotInstruction.spinReserve>/g, obj, "spinReserve", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.standardRampEnergy>([\s\S]*?)<\/cim:DotInstruction.standardRampEnergy>/g, obj, "standardRampEnergy", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.supplementalEnergy>([\s\S]*?)<\/cim:DotInstruction.supplementalEnergy>/g, obj, "supplementalEnergy", base.to_float, sub, context);
                base.parse_element (/<cim:DotInstruction.unitStatus>([\s\S]*?)<\/cim:DotInstruction.unitStatus>/g, obj, "unitStatus", base.to_string, sub, context);
                base.parse_attribute (/<cim:DotInstruction.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attributes (/<cim:DotInstruction.InstructionClearingDOT\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InstructionClearingDOT", sub, context);
                var bucket = context.parsed.DotInstruction;
                if (null == bucket)
                   context.parsed.DotInstruction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DotInstruction", "actualRampRate", "actualRampRate",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "compliantIndicator", "compliantIndicator",  base.from_string, fields);
                base.export_element (obj, "DotInstruction", "DOT", "DOT",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "economicMaxOverride", "economicMaxOverride",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "expectedEnergy", "expectedEnergy",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "generatorPerformanceDegree", "generatorPerformanceDegree",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "hourAheadSchedEnergy", "hourAheadSchedEnergy",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "hourlySchedule", "hourlySchedule",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "instructionTime", "instructionTime",  base.from_datetime, fields);
                base.export_element (obj, "DotInstruction", "maximumEmergencyInd", "maximumEmergencyInd",  base.from_boolean, fields);
                base.export_element (obj, "DotInstruction", "meterLoadFollowing", "meterLoadFollowing",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "nonRampRestrictedMW", "nonRampRestrictedMW",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "nonSpinReserve", "nonSpinReserve",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "previousDOTTimeStamp", "previousDOTTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "DotInstruction", "rampRateLimit", "rampRateLimit",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "regulationStatus", "regulationStatus",  base.from_string, fields);
                base.export_element (obj, "DotInstruction", "spinReserve", "spinReserve",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "standardRampEnergy", "standardRampEnergy",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "supplementalEnergy", "supplementalEnergy",  base.from_float, fields);
                base.export_element (obj, "DotInstruction", "unitStatus", "unitStatus",  base.from_string, fields);
                base.export_attribute (obj, "DotInstruction", "RegisteredResource", "RegisteredResource", fields);
                base.export_attributes (obj, "DotInstruction", "InstructionClearingDOT", "InstructionClearingDOT", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DotInstruction_collapse" aria-expanded="true" aria-controls="DotInstruction_collapse" style="margin-left: 10px;">DotInstruction</a></legend>
                    <div id="DotInstruction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#actualRampRate}}<div><b>actualRampRate</b>: {{actualRampRate}}</div>{{/actualRampRate}}
                    {{#compliantIndicator}}<div><b>compliantIndicator</b>: {{compliantIndicator}}</div>{{/compliantIndicator}}
                    {{#DOT}}<div><b>DOT</b>: {{DOT}}</div>{{/DOT}}
                    {{#economicMaxOverride}}<div><b>economicMaxOverride</b>: {{economicMaxOverride}}</div>{{/economicMaxOverride}}
                    {{#expectedEnergy}}<div><b>expectedEnergy</b>: {{expectedEnergy}}</div>{{/expectedEnergy}}
                    {{#generatorPerformanceDegree}}<div><b>generatorPerformanceDegree</b>: {{generatorPerformanceDegree}}</div>{{/generatorPerformanceDegree}}
                    {{#hourAheadSchedEnergy}}<div><b>hourAheadSchedEnergy</b>: {{hourAheadSchedEnergy}}</div>{{/hourAheadSchedEnergy}}
                    {{#hourlySchedule}}<div><b>hourlySchedule</b>: {{hourlySchedule}}</div>{{/hourlySchedule}}
                    {{#instructionTime}}<div><b>instructionTime</b>: {{instructionTime}}</div>{{/instructionTime}}
                    {{#maximumEmergencyInd}}<div><b>maximumEmergencyInd</b>: {{maximumEmergencyInd}}</div>{{/maximumEmergencyInd}}
                    {{#meterLoadFollowing}}<div><b>meterLoadFollowing</b>: {{meterLoadFollowing}}</div>{{/meterLoadFollowing}}
                    {{#nonRampRestrictedMW}}<div><b>nonRampRestrictedMW</b>: {{nonRampRestrictedMW}}</div>{{/nonRampRestrictedMW}}
                    {{#nonSpinReserve}}<div><b>nonSpinReserve</b>: {{nonSpinReserve}}</div>{{/nonSpinReserve}}
                    {{#previousDOTTimeStamp}}<div><b>previousDOTTimeStamp</b>: {{previousDOTTimeStamp}}</div>{{/previousDOTTimeStamp}}
                    {{#rampRateLimit}}<div><b>rampRateLimit</b>: {{rampRateLimit}}</div>{{/rampRateLimit}}
                    {{#regulationStatus}}<div><b>regulationStatus</b>: {{regulationStatus}}</div>{{/regulationStatus}}
                    {{#spinReserve}}<div><b>spinReserve</b>: {{spinReserve}}</div>{{/spinReserve}}
                    {{#standardRampEnergy}}<div><b>standardRampEnergy</b>: {{standardRampEnergy}}</div>{{/standardRampEnergy}}
                    {{#supplementalEnergy}}<div><b>supplementalEnergy</b>: {{supplementalEnergy}}</div>{{/supplementalEnergy}}
                    {{#unitStatus}}<div><b>unitStatus</b>: {{unitStatus}}</div>{{/unitStatus}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    {{#InstructionClearingDOT}}<div><b>InstructionClearingDOT</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/InstructionClearingDOT}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.InstructionClearingDOT) obj.InstructionClearingDOT_string = obj.InstructionClearingDOT.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.InstructionClearingDOT_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DotInstruction_collapse" aria-expanded="true" aria-controls="DotInstruction_collapse" style="margin-left: 10px;">DotInstruction</a></legend>
                    <div id="DotInstruction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='actualRampRate'>actualRampRate: </label><div class='col-sm-8'><input id='actualRampRate' class='form-control' type='text'{{#actualRampRate}} value='{{actualRampRate}}'{{/actualRampRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='compliantIndicator'>compliantIndicator: </label><div class='col-sm-8'><input id='compliantIndicator' class='form-control' type='text'{{#compliantIndicator}} value='{{compliantIndicator}}'{{/compliantIndicator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DOT'>DOT: </label><div class='col-sm-8'><input id='DOT' class='form-control' type='text'{{#DOT}} value='{{DOT}}'{{/DOT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='economicMaxOverride'>economicMaxOverride: </label><div class='col-sm-8'><input id='economicMaxOverride' class='form-control' type='text'{{#economicMaxOverride}} value='{{economicMaxOverride}}'{{/economicMaxOverride}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='expectedEnergy'>expectedEnergy: </label><div class='col-sm-8'><input id='expectedEnergy' class='form-control' type='text'{{#expectedEnergy}} value='{{expectedEnergy}}'{{/expectedEnergy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='generatorPerformanceDegree'>generatorPerformanceDegree: </label><div class='col-sm-8'><input id='generatorPerformanceDegree' class='form-control' type='text'{{#generatorPerformanceDegree}} value='{{generatorPerformanceDegree}}'{{/generatorPerformanceDegree}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hourAheadSchedEnergy'>hourAheadSchedEnergy: </label><div class='col-sm-8'><input id='hourAheadSchedEnergy' class='form-control' type='text'{{#hourAheadSchedEnergy}} value='{{hourAheadSchedEnergy}}'{{/hourAheadSchedEnergy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='hourlySchedule'>hourlySchedule: </label><div class='col-sm-8'><input id='hourlySchedule' class='form-control' type='text'{{#hourlySchedule}} value='{{hourlySchedule}}'{{/hourlySchedule}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='instructionTime'>instructionTime: </label><div class='col-sm-8'><input id='instructionTime' class='form-control' type='text'{{#instructionTime}} value='{{instructionTime}}'{{/instructionTime}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='maximumEmergencyInd'>maximumEmergencyInd: </label><div class='col-sm-8'><input id='maximumEmergencyInd' class='form-check-input' type='checkbox'{{#maximumEmergencyInd}} checked{{/maximumEmergencyInd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='meterLoadFollowing'>meterLoadFollowing: </label><div class='col-sm-8'><input id='meterLoadFollowing' class='form-control' type='text'{{#meterLoadFollowing}} value='{{meterLoadFollowing}}'{{/meterLoadFollowing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='nonRampRestrictedMW'>nonRampRestrictedMW: </label><div class='col-sm-8'><input id='nonRampRestrictedMW' class='form-control' type='text'{{#nonRampRestrictedMW}} value='{{nonRampRestrictedMW}}'{{/nonRampRestrictedMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='nonSpinReserve'>nonSpinReserve: </label><div class='col-sm-8'><input id='nonSpinReserve' class='form-control' type='text'{{#nonSpinReserve}} value='{{nonSpinReserve}}'{{/nonSpinReserve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='previousDOTTimeStamp'>previousDOTTimeStamp: </label><div class='col-sm-8'><input id='previousDOTTimeStamp' class='form-control' type='text'{{#previousDOTTimeStamp}} value='{{previousDOTTimeStamp}}'{{/previousDOTTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rampRateLimit'>rampRateLimit: </label><div class='col-sm-8'><input id='rampRateLimit' class='form-control' type='text'{{#rampRateLimit}} value='{{rampRateLimit}}'{{/rampRateLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='regulationStatus'>regulationStatus: </label><div class='col-sm-8'><input id='regulationStatus' class='form-control' type='text'{{#regulationStatus}} value='{{regulationStatus}}'{{/regulationStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='spinReserve'>spinReserve: </label><div class='col-sm-8'><input id='spinReserve' class='form-control' type='text'{{#spinReserve}} value='{{spinReserve}}'{{/spinReserve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='standardRampEnergy'>standardRampEnergy: </label><div class='col-sm-8'><input id='standardRampEnergy' class='form-control' type='text'{{#standardRampEnergy}} value='{{standardRampEnergy}}'{{/standardRampEnergy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='supplementalEnergy'>supplementalEnergy: </label><div class='col-sm-8'><input id='supplementalEnergy' class='form-control' type='text'{{#supplementalEnergy}} value='{{supplementalEnergy}}'{{/supplementalEnergy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unitStatus'>unitStatus: </label><div class='col-sm-8'><input id='unitStatus' class='form-control' type='text'{{#unitStatus}} value='{{unitStatus}}'{{/unitStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='InstructionClearingDOT'>InstructionClearingDOT: </label><div class='col-sm-8'><input id='InstructionClearingDOT' class='form-control' type='text'{{#InstructionClearingDOT}} value='{{InstructionClearingDOT}}_string'{{/InstructionClearingDOT}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "DotInstruction" };
                super.submit (obj);
                temp = document.getElementById ("actualRampRate").value; if ("" != temp) obj.actualRampRate = temp;
                temp = document.getElementById ("compliantIndicator").value; if ("" != temp) obj.compliantIndicator = temp;
                temp = document.getElementById ("DOT").value; if ("" != temp) obj.DOT = temp;
                temp = document.getElementById ("economicMaxOverride").value; if ("" != temp) obj.economicMaxOverride = temp;
                temp = document.getElementById ("expectedEnergy").value; if ("" != temp) obj.expectedEnergy = temp;
                temp = document.getElementById ("generatorPerformanceDegree").value; if ("" != temp) obj.generatorPerformanceDegree = temp;
                temp = document.getElementById ("hourAheadSchedEnergy").value; if ("" != temp) obj.hourAheadSchedEnergy = temp;
                temp = document.getElementById ("hourlySchedule").value; if ("" != temp) obj.hourlySchedule = temp;
                temp = document.getElementById ("instructionTime").value; if ("" != temp) obj.instructionTime = temp;
                temp = document.getElementById ("maximumEmergencyInd").checked; if (temp) obj.maximumEmergencyInd = true;
                temp = document.getElementById ("meterLoadFollowing").value; if ("" != temp) obj.meterLoadFollowing = temp;
                temp = document.getElementById ("nonRampRestrictedMW").value; if ("" != temp) obj.nonRampRestrictedMW = temp;
                temp = document.getElementById ("nonSpinReserve").value; if ("" != temp) obj.nonSpinReserve = temp;
                temp = document.getElementById ("previousDOTTimeStamp").value; if ("" != temp) obj.previousDOTTimeStamp = temp;
                temp = document.getElementById ("rampRateLimit").value; if ("" != temp) obj.rampRateLimit = temp;
                temp = document.getElementById ("regulationStatus").value; if ("" != temp) obj.regulationStatus = temp;
                temp = document.getElementById ("spinReserve").value; if ("" != temp) obj.spinReserve = temp;
                temp = document.getElementById ("standardRampEnergy").value; if ("" != temp) obj.standardRampEnergy = temp;
                temp = document.getElementById ("supplementalEnergy").value; if ("" != temp) obj.supplementalEnergy = temp;
                temp = document.getElementById ("unitStatus").value; if ("" != temp) obj.unitStatus = temp;
                temp = document.getElementById ("RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;
                temp = document.getElementById ("InstructionClearingDOT").value; if ("" != temp) obj.InstructionClearingDOT = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredResource", "RegisteredResource", "0..1", "0..*"],
                        ["InstructionClearingDOT", "InstructionClearingDOT", "1..*", "1..*"]
                    ]
                );
            }
        }

        /**
         * Provides the outcome and margin percent (as appropriate) result data for the MPM tests.
         *
         * There are relationships to Zone for Designated Congestion Area Tests, CurveSchedData for bid segment tests, to the SubControlArea for the system wide level tests, and Pnodes for the LMPM impact tests.
         *
         */
        class MPMTestResults extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MPMTestResults;
                if (null == bucket)
                   cim_data.MPMTestResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MPMTestResults[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MPMTestResults";
                base.parse_element (/<cim:MPMTestResults.outcome>([\s\S]*?)<\/cim:MPMTestResults.outcome>/g, obj, "outcome", base.to_string, sub, context);
                base.parse_element (/<cim:MPMTestResults.marginPercent>([\s\S]*?)<\/cim:MPMTestResults.marginPercent>/g, obj, "marginPercent", base.to_string, sub, context);
                base.parse_attribute (/<cim:MPMTestResults.MPMClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MPMClearing", sub, context);
                base.parse_attribute (/<cim:MPMTestResults.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AggregatedPnode", sub, context);
                base.parse_attribute (/<cim:MPMTestResults.MPMTestCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MPMTestCategory", sub, context);
                var bucket = context.parsed.MPMTestResults;
                if (null == bucket)
                   context.parsed.MPMTestResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MPMTestResults", "outcome", "outcome",  base.from_string, fields);
                base.export_element (obj, "MPMTestResults", "marginPercent", "marginPercent",  base.from_string, fields);
                base.export_attribute (obj, "MPMTestResults", "MPMClearing", "MPMClearing", fields);
                base.export_attribute (obj, "MPMTestResults", "AggregatedPnode", "AggregatedPnode", fields);
                base.export_attribute (obj, "MPMTestResults", "MPMTestCategory", "MPMTestCategory", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MPMTestResults_collapse" aria-expanded="true" aria-controls="MPMTestResults_collapse" style="margin-left: 10px;">MPMTestResults</a></legend>
                    <div id="MPMTestResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#outcome}}<div><b>outcome</b>: {{outcome}}</div>{{/outcome}}
                    {{#marginPercent}}<div><b>marginPercent</b>: {{marginPercent}}</div>{{/marginPercent}}
                    {{#MPMClearing}}<div><b>MPMClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MPMClearing}}&quot;);})'>{{MPMClearing}}</a></div>{{/MPMClearing}}
                    {{#AggregatedPnode}}<div><b>AggregatedPnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AggregatedPnode}}&quot;);})'>{{AggregatedPnode}}</a></div>{{/AggregatedPnode}}
                    {{#MPMTestCategory}}<div><b>MPMTestCategory</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MPMTestCategory}}&quot;);})'>{{MPMTestCategory}}</a></div>{{/MPMTestCategory}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MPMTestResults_collapse" aria-expanded="true" aria-controls="MPMTestResults_collapse" style="margin-left: 10px;">MPMTestResults</a></legend>
                    <div id="MPMTestResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='outcome'>outcome: </label><div class='col-sm-8'><input id='outcome' class='form-control' type='text'{{#outcome}} value='{{outcome}}'{{/outcome}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marginPercent'>marginPercent: </label><div class='col-sm-8'><input id='marginPercent' class='form-control' type='text'{{#marginPercent}} value='{{marginPercent}}'{{/marginPercent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MPMClearing'>MPMClearing: </label><div class='col-sm-8'><input id='MPMClearing' class='form-control' type='text'{{#MPMClearing}} value='{{MPMClearing}}'{{/MPMClearing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AggregatedPnode'>AggregatedPnode: </label><div class='col-sm-8'><input id='AggregatedPnode' class='form-control' type='text'{{#AggregatedPnode}} value='{{AggregatedPnode}}'{{/AggregatedPnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MPMTestCategory'>MPMTestCategory: </label><div class='col-sm-8'><input id='MPMTestCategory' class='form-control' type='text'{{#MPMTestCategory}} value='{{MPMTestCategory}}'{{/MPMTestCategory}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MPMTestResults" };
                super.submit (obj);
                temp = document.getElementById ("outcome").value; if ("" != temp) obj.outcome = temp;
                temp = document.getElementById ("marginPercent").value; if ("" != temp) obj.marginPercent = temp;
                temp = document.getElementById ("MPMClearing").value; if ("" != temp) obj.MPMClearing = temp;
                temp = document.getElementById ("AggregatedPnode").value; if ("" != temp) obj.AggregatedPnode = temp;
                temp = document.getElementById ("MPMTestCategory").value; if ("" != temp) obj.MPMTestCategory = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MPMClearing", "MPMClearing", "0..1", "0..*"],
                        ["AggregatedPnode", "AggregatedPnode", "1", "1..*"],
                        ["MPMTestCategory", "MPMTestCategory", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * RMR Operator's entry of the RMR requirement per market interval.
         *
         */
        class RMROperatorInput extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RMROperatorInput;
                if (null == bucket)
                   cim_data.RMROperatorInput = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RMROperatorInput[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "RMROperatorInput";
                base.parse_element (/<cim:RMROperatorInput.manuallySchedRMRMw>([\s\S]*?)<\/cim:RMROperatorInput.manuallySchedRMRMw>/g, obj, "manuallySchedRMRMw", base.to_float, sub, context);
                base.parse_element (/<cim:RMROperatorInput.updateUser>([\s\S]*?)<\/cim:RMROperatorInput.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:RMROperatorInput.updateTimeStamp>([\s\S]*?)<\/cim:RMROperatorInput.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:RMROperatorInput.updateType>([\s\S]*?)<\/cim:RMROperatorInput.updateType>/g, obj, "updateType", base.to_string, sub, context);
                base.parse_attribute (/<cim:RMROperatorInput.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                var bucket = context.parsed.RMROperatorInput;
                if (null == bucket)
                   context.parsed.RMROperatorInput = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "RMROperatorInput", "manuallySchedRMRMw", "manuallySchedRMRMw",  base.from_float, fields);
                base.export_element (obj, "RMROperatorInput", "updateUser", "updateUser",  base.from_string, fields);
                base.export_element (obj, "RMROperatorInput", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "RMROperatorInput", "updateType", "updateType",  base.from_string, fields);
                base.export_attribute (obj, "RMROperatorInput", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMROperatorInput_collapse" aria-expanded="true" aria-controls="RMROperatorInput_collapse" style="margin-left: 10px;">RMROperatorInput</a></legend>
                    <div id="RMROperatorInput_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#manuallySchedRMRMw}}<div><b>manuallySchedRMRMw</b>: {{manuallySchedRMRMw}}</div>{{/manuallySchedRMRMw}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#updateType}}<div><b>updateType</b>: {{updateType}}</div>{{/updateType}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMROperatorInput_collapse" aria-expanded="true" aria-controls="RMROperatorInput_collapse" style="margin-left: 10px;">RMROperatorInput</a></legend>
                    <div id="RMROperatorInput_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='manuallySchedRMRMw'>manuallySchedRMRMw: </label><div class='col-sm-8'><input id='manuallySchedRMRMw' class='form-control' type='text'{{#manuallySchedRMRMw}} value='{{manuallySchedRMRMw}}'{{/manuallySchedRMRMw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateUser'>updateUser: </label><div class='col-sm-8'><input id='updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateType'>updateType: </label><div class='col-sm-8'><input id='updateType' class='form-control' type='text'{{#updateType}} value='{{updateType}}'{{/updateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "RMROperatorInput" };
                super.submit (obj);
                temp = document.getElementById ("manuallySchedRMRMw").value; if ("" != temp) obj.manuallySchedRMRMw = temp;
                temp = document.getElementById ("updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById ("updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;
                temp = document.getElementById ("updateType").value; if ("" != temp) obj.updateType = temp;
                temp = document.getElementById ("RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredResource", "RegisteredResource", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Model of market results, instruction for resource.
         *
         * Contains details of award as attributes
         *
         */
        class ResourceAwardInstruction extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ResourceAwardInstruction;
                if (null == bucket)
                   cim_data.ResourceAwardInstruction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceAwardInstruction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceAwardInstruction";
                base.parse_element (/<cim:ResourceAwardInstruction.awardMW>([\s\S]*?)<\/cim:ResourceAwardInstruction.awardMW>/g, obj, "awardMW", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.clearedMW>([\s\S]*?)<\/cim:ResourceAwardInstruction.clearedMW>/g, obj, "clearedMW", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.clearedPrice>([\s\S]*?)<\/cim:ResourceAwardInstruction.clearedPrice>/g, obj, "clearedPrice", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.congestLMP>([\s\S]*?)<\/cim:ResourceAwardInstruction.congestLMP>/g, obj, "congestLMP", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.costLMP>([\s\S]*?)<\/cim:ResourceAwardInstruction.costLMP>/g, obj, "costLMP", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.dispatcherAddedMW>([\s\S]*?)<\/cim:ResourceAwardInstruction.dispatcherAddedMW>/g, obj, "dispatcherAddedMW", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.economicMax>([\s\S]*?)<\/cim:ResourceAwardInstruction.economicMax>/g, obj, "economicMax", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.economicMin>([\s\S]*?)<\/cim:ResourceAwardInstruction.economicMin>/g, obj, "economicMin", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.effRegulationDownLimit>([\s\S]*?)<\/cim:ResourceAwardInstruction.effRegulationDownLimit>/g, obj, "effRegulationDownLimit", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.effRegulationUpLimit>([\s\S]*?)<\/cim:ResourceAwardInstruction.effRegulationUpLimit>/g, obj, "effRegulationUpLimit", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.lmp>([\s\S]*?)<\/cim:ResourceAwardInstruction.lmp>/g, obj, "lmp", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.lossLMP>([\s\S]*?)<\/cim:ResourceAwardInstruction.lossLMP>/g, obj, "lossLMP", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.manuallyBlocked>([\s\S]*?)<\/cim:ResourceAwardInstruction.manuallyBlocked>/g, obj, "manuallyBlocked", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.marginalResourceIndicator>([\s\S]*?)<\/cim:ResourceAwardInstruction.marginalResourceIndicator>/g, obj, "marginalResourceIndicator", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.mustRunInd>([\s\S]*?)<\/cim:ResourceAwardInstruction.mustRunInd>/g, obj, "mustRunInd", base.to_boolean, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.noLoadCost>([\s\S]*?)<\/cim:ResourceAwardInstruction.noLoadCost>/g, obj, "noLoadCost", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.optimalBidCost>([\s\S]*?)<\/cim:ResourceAwardInstruction.optimalBidCost>/g, obj, "optimalBidCost", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.optimalBidPay>([\s\S]*?)<\/cim:ResourceAwardInstruction.optimalBidPay>/g, obj, "optimalBidPay", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.optimalMargin>([\s\S]*?)<\/cim:ResourceAwardInstruction.optimalMargin>/g, obj, "optimalMargin", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.overrideTimeStamp>([\s\S]*?)<\/cim:ResourceAwardInstruction.overrideTimeStamp>/g, obj, "overrideTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.overrideValue>([\s\S]*?)<\/cim:ResourceAwardInstruction.overrideValue>/g, obj, "overrideValue", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.selfSchedMW>([\s\S]*?)<\/cim:ResourceAwardInstruction.selfSchedMW>/g, obj, "selfSchedMW", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.startUpCost>([\s\S]*?)<\/cim:ResourceAwardInstruction.startUpCost>/g, obj, "startUpCost", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.status>([\s\S]*?)<\/cim:ResourceAwardInstruction.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.totalRevenue>([\s\S]*?)<\/cim:ResourceAwardInstruction.totalRevenue>/g, obj, "totalRevenue", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.updateTimeStamp>([\s\S]*?)<\/cim:ResourceAwardInstruction.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.updateType>([\s\S]*?)<\/cim:ResourceAwardInstruction.updateType>/g, obj, "updateType", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceAwardInstruction.updateUser>([\s\S]*?)<\/cim:ResourceAwardInstruction.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_attribute (/<cim:ResourceAwardInstruction.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:ResourceAwardInstruction.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);
                base.parse_attributes (/<cim:ResourceAwardInstruction.ClearingResourceAward\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ClearingResourceAward", sub, context);
                base.parse_attributes (/<cim:ResourceAwardInstruction.SelfScheduleBreakdown\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SelfScheduleBreakdown", sub, context);
                var bucket = context.parsed.ResourceAwardInstruction;
                if (null == bucket)
                   context.parsed.ResourceAwardInstruction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ResourceAwardInstruction", "awardMW", "awardMW",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "clearedMW", "clearedMW",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "clearedPrice", "clearedPrice",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "congestLMP", "congestLMP",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "costLMP", "costLMP",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "dispatcherAddedMW", "dispatcherAddedMW",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "economicMax", "economicMax",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "economicMin", "economicMin",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "effRegulationDownLimit", "effRegulationDownLimit",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "effRegulationUpLimit", "effRegulationUpLimit",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "lmp", "lmp",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "lossLMP", "lossLMP",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "manuallyBlocked", "manuallyBlocked",  base.from_string, fields);
                base.export_element (obj, "ResourceAwardInstruction", "marginalResourceIndicator", "marginalResourceIndicator",  base.from_string, fields);
                base.export_element (obj, "ResourceAwardInstruction", "mustRunInd", "mustRunInd",  base.from_boolean, fields);
                base.export_element (obj, "ResourceAwardInstruction", "noLoadCost", "noLoadCost",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "optimalBidCost", "optimalBidCost",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "optimalBidPay", "optimalBidPay",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "optimalMargin", "optimalMargin",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "overrideTimeStamp", "overrideTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "ResourceAwardInstruction", "overrideValue", "overrideValue",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "selfSchedMW", "selfSchedMW",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "startUpCost", "startUpCost",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "status", "status",  base.from_string, fields);
                base.export_element (obj, "ResourceAwardInstruction", "totalRevenue", "totalRevenue",  base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "ResourceAwardInstruction", "updateType", "updateType",  base.from_string, fields);
                base.export_element (obj, "ResourceAwardInstruction", "updateUser", "updateUser",  base.from_string, fields);
                base.export_attribute (obj, "ResourceAwardInstruction", "RegisteredResource", "RegisteredResource", fields);
                base.export_attribute (obj, "ResourceAwardInstruction", "MarketProduct", "MarketProduct", fields);
                base.export_attributes (obj, "ResourceAwardInstruction", "ClearingResourceAward", "ClearingResourceAward", fields);
                base.export_attributes (obj, "ResourceAwardInstruction", "SelfScheduleBreakdown", "SelfScheduleBreakdown", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceAwardInstruction_collapse" aria-expanded="true" aria-controls="ResourceAwardInstruction_collapse" style="margin-left: 10px;">ResourceAwardInstruction</a></legend>
                    <div id="ResourceAwardInstruction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#awardMW}}<div><b>awardMW</b>: {{awardMW}}</div>{{/awardMW}}
                    {{#clearedMW}}<div><b>clearedMW</b>: {{clearedMW}}</div>{{/clearedMW}}
                    {{#clearedPrice}}<div><b>clearedPrice</b>: {{clearedPrice}}</div>{{/clearedPrice}}
                    {{#congestLMP}}<div><b>congestLMP</b>: {{congestLMP}}</div>{{/congestLMP}}
                    {{#costLMP}}<div><b>costLMP</b>: {{costLMP}}</div>{{/costLMP}}
                    {{#dispatcherAddedMW}}<div><b>dispatcherAddedMW</b>: {{dispatcherAddedMW}}</div>{{/dispatcherAddedMW}}
                    {{#economicMax}}<div><b>economicMax</b>: {{economicMax}}</div>{{/economicMax}}
                    {{#economicMin}}<div><b>economicMin</b>: {{economicMin}}</div>{{/economicMin}}
                    {{#effRegulationDownLimit}}<div><b>effRegulationDownLimit</b>: {{effRegulationDownLimit}}</div>{{/effRegulationDownLimit}}
                    {{#effRegulationUpLimit}}<div><b>effRegulationUpLimit</b>: {{effRegulationUpLimit}}</div>{{/effRegulationUpLimit}}
                    {{#lmp}}<div><b>lmp</b>: {{lmp}}</div>{{/lmp}}
                    {{#lossLMP}}<div><b>lossLMP</b>: {{lossLMP}}</div>{{/lossLMP}}
                    {{#manuallyBlocked}}<div><b>manuallyBlocked</b>: {{manuallyBlocked}}</div>{{/manuallyBlocked}}
                    {{#marginalResourceIndicator}}<div><b>marginalResourceIndicator</b>: {{marginalResourceIndicator}}</div>{{/marginalResourceIndicator}}
                    {{#mustRunInd}}<div><b>mustRunInd</b>: {{mustRunInd}}</div>{{/mustRunInd}}
                    {{#noLoadCost}}<div><b>noLoadCost</b>: {{noLoadCost}}</div>{{/noLoadCost}}
                    {{#optimalBidCost}}<div><b>optimalBidCost</b>: {{optimalBidCost}}</div>{{/optimalBidCost}}
                    {{#optimalBidPay}}<div><b>optimalBidPay</b>: {{optimalBidPay}}</div>{{/optimalBidPay}}
                    {{#optimalMargin}}<div><b>optimalMargin</b>: {{optimalMargin}}</div>{{/optimalMargin}}
                    {{#overrideTimeStamp}}<div><b>overrideTimeStamp</b>: {{overrideTimeStamp}}</div>{{/overrideTimeStamp}}
                    {{#overrideValue}}<div><b>overrideValue</b>: {{overrideValue}}</div>{{/overrideValue}}
                    {{#selfSchedMW}}<div><b>selfSchedMW</b>: {{selfSchedMW}}</div>{{/selfSchedMW}}
                    {{#startUpCost}}<div><b>startUpCost</b>: {{startUpCost}}</div>{{/startUpCost}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#totalRevenue}}<div><b>totalRevenue</b>: {{totalRevenue}}</div>{{/totalRevenue}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#updateType}}<div><b>updateType</b>: {{updateType}}</div>{{/updateType}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    {{#MarketProduct}}<div><b>MarketProduct</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketProduct}}&quot;);})'>{{MarketProduct}}</a></div>{{/MarketProduct}}
                    {{#ClearingResourceAward}}<div><b>ClearingResourceAward</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ClearingResourceAward}}
                    {{#SelfScheduleBreakdown}}<div><b>SelfScheduleBreakdown</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SelfScheduleBreakdown}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ClearingResourceAward) obj.ClearingResourceAward_string = obj.ClearingResourceAward.join ();
                if (obj.SelfScheduleBreakdown) obj.SelfScheduleBreakdown_string = obj.SelfScheduleBreakdown.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ClearingResourceAward_string;
                delete obj.SelfScheduleBreakdown_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceAwardInstruction_collapse" aria-expanded="true" aria-controls="ResourceAwardInstruction_collapse" style="margin-left: 10px;">ResourceAwardInstruction</a></legend>
                    <div id="ResourceAwardInstruction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='awardMW'>awardMW: </label><div class='col-sm-8'><input id='awardMW' class='form-control' type='text'{{#awardMW}} value='{{awardMW}}'{{/awardMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clearedMW'>clearedMW: </label><div class='col-sm-8'><input id='clearedMW' class='form-control' type='text'{{#clearedMW}} value='{{clearedMW}}'{{/clearedMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clearedPrice'>clearedPrice: </label><div class='col-sm-8'><input id='clearedPrice' class='form-control' type='text'{{#clearedPrice}} value='{{clearedPrice}}'{{/clearedPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='congestLMP'>congestLMP: </label><div class='col-sm-8'><input id='congestLMP' class='form-control' type='text'{{#congestLMP}} value='{{congestLMP}}'{{/congestLMP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='costLMP'>costLMP: </label><div class='col-sm-8'><input id='costLMP' class='form-control' type='text'{{#costLMP}} value='{{costLMP}}'{{/costLMP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dispatcherAddedMW'>dispatcherAddedMW: </label><div class='col-sm-8'><input id='dispatcherAddedMW' class='form-control' type='text'{{#dispatcherAddedMW}} value='{{dispatcherAddedMW}}'{{/dispatcherAddedMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='economicMax'>economicMax: </label><div class='col-sm-8'><input id='economicMax' class='form-control' type='text'{{#economicMax}} value='{{economicMax}}'{{/economicMax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='economicMin'>economicMin: </label><div class='col-sm-8'><input id='economicMin' class='form-control' type='text'{{#economicMin}} value='{{economicMin}}'{{/economicMin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effRegulationDownLimit'>effRegulationDownLimit: </label><div class='col-sm-8'><input id='effRegulationDownLimit' class='form-control' type='text'{{#effRegulationDownLimit}} value='{{effRegulationDownLimit}}'{{/effRegulationDownLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effRegulationUpLimit'>effRegulationUpLimit: </label><div class='col-sm-8'><input id='effRegulationUpLimit' class='form-control' type='text'{{#effRegulationUpLimit}} value='{{effRegulationUpLimit}}'{{/effRegulationUpLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lmp'>lmp: </label><div class='col-sm-8'><input id='lmp' class='form-control' type='text'{{#lmp}} value='{{lmp}}'{{/lmp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lossLMP'>lossLMP: </label><div class='col-sm-8'><input id='lossLMP' class='form-control' type='text'{{#lossLMP}} value='{{lossLMP}}'{{/lossLMP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='manuallyBlocked'>manuallyBlocked: </label><div class='col-sm-8'><input id='manuallyBlocked' class='form-control' type='text'{{#manuallyBlocked}} value='{{manuallyBlocked}}'{{/manuallyBlocked}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marginalResourceIndicator'>marginalResourceIndicator: </label><div class='col-sm-8'><input id='marginalResourceIndicator' class='form-control' type='text'{{#marginalResourceIndicator}} value='{{marginalResourceIndicator}}'{{/marginalResourceIndicator}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='mustRunInd'>mustRunInd: </label><div class='col-sm-8'><input id='mustRunInd' class='form-check-input' type='checkbox'{{#mustRunInd}} checked{{/mustRunInd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='noLoadCost'>noLoadCost: </label><div class='col-sm-8'><input id='noLoadCost' class='form-control' type='text'{{#noLoadCost}} value='{{noLoadCost}}'{{/noLoadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='optimalBidCost'>optimalBidCost: </label><div class='col-sm-8'><input id='optimalBidCost' class='form-control' type='text'{{#optimalBidCost}} value='{{optimalBidCost}}'{{/optimalBidCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='optimalBidPay'>optimalBidPay: </label><div class='col-sm-8'><input id='optimalBidPay' class='form-control' type='text'{{#optimalBidPay}} value='{{optimalBidPay}}'{{/optimalBidPay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='optimalMargin'>optimalMargin: </label><div class='col-sm-8'><input id='optimalMargin' class='form-control' type='text'{{#optimalMargin}} value='{{optimalMargin}}'{{/optimalMargin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='overrideTimeStamp'>overrideTimeStamp: </label><div class='col-sm-8'><input id='overrideTimeStamp' class='form-control' type='text'{{#overrideTimeStamp}} value='{{overrideTimeStamp}}'{{/overrideTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='overrideValue'>overrideValue: </label><div class='col-sm-8'><input id='overrideValue' class='form-control' type='text'{{#overrideValue}} value='{{overrideValue}}'{{/overrideValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='selfSchedMW'>selfSchedMW: </label><div class='col-sm-8'><input id='selfSchedMW' class='form-control' type='text'{{#selfSchedMW}} value='{{selfSchedMW}}'{{/selfSchedMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startUpCost'>startUpCost: </label><div class='col-sm-8'><input id='startUpCost' class='form-control' type='text'{{#startUpCost}} value='{{startUpCost}}'{{/startUpCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='totalRevenue'>totalRevenue: </label><div class='col-sm-8'><input id='totalRevenue' class='form-control' type='text'{{#totalRevenue}} value='{{totalRevenue}}'{{/totalRevenue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateType'>updateType: </label><div class='col-sm-8'><input id='updateType' class='form-control' type='text'{{#updateType}} value='{{updateType}}'{{/updateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateUser'>updateUser: </label><div class='col-sm-8'><input id='updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketProduct'>MarketProduct: </label><div class='col-sm-8'><input id='MarketProduct' class='form-control' type='text'{{#MarketProduct}} value='{{MarketProduct}}'{{/MarketProduct}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ClearingResourceAward'>ClearingResourceAward: </label><div class='col-sm-8'><input id='ClearingResourceAward' class='form-control' type='text'{{#ClearingResourceAward}} value='{{ClearingResourceAward}}_string'{{/ClearingResourceAward}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ResourceAwardInstruction" };
                super.submit (obj);
                temp = document.getElementById ("awardMW").value; if ("" != temp) obj.awardMW = temp;
                temp = document.getElementById ("clearedMW").value; if ("" != temp) obj.clearedMW = temp;
                temp = document.getElementById ("clearedPrice").value; if ("" != temp) obj.clearedPrice = temp;
                temp = document.getElementById ("congestLMP").value; if ("" != temp) obj.congestLMP = temp;
                temp = document.getElementById ("costLMP").value; if ("" != temp) obj.costLMP = temp;
                temp = document.getElementById ("dispatcherAddedMW").value; if ("" != temp) obj.dispatcherAddedMW = temp;
                temp = document.getElementById ("economicMax").value; if ("" != temp) obj.economicMax = temp;
                temp = document.getElementById ("economicMin").value; if ("" != temp) obj.economicMin = temp;
                temp = document.getElementById ("effRegulationDownLimit").value; if ("" != temp) obj.effRegulationDownLimit = temp;
                temp = document.getElementById ("effRegulationUpLimit").value; if ("" != temp) obj.effRegulationUpLimit = temp;
                temp = document.getElementById ("lmp").value; if ("" != temp) obj.lmp = temp;
                temp = document.getElementById ("lossLMP").value; if ("" != temp) obj.lossLMP = temp;
                temp = document.getElementById ("manuallyBlocked").value; if ("" != temp) obj.manuallyBlocked = temp;
                temp = document.getElementById ("marginalResourceIndicator").value; if ("" != temp) obj.marginalResourceIndicator = temp;
                temp = document.getElementById ("mustRunInd").checked; if (temp) obj.mustRunInd = true;
                temp = document.getElementById ("noLoadCost").value; if ("" != temp) obj.noLoadCost = temp;
                temp = document.getElementById ("optimalBidCost").value; if ("" != temp) obj.optimalBidCost = temp;
                temp = document.getElementById ("optimalBidPay").value; if ("" != temp) obj.optimalBidPay = temp;
                temp = document.getElementById ("optimalMargin").value; if ("" != temp) obj.optimalMargin = temp;
                temp = document.getElementById ("overrideTimeStamp").value; if ("" != temp) obj.overrideTimeStamp = temp;
                temp = document.getElementById ("overrideValue").value; if ("" != temp) obj.overrideValue = temp;
                temp = document.getElementById ("selfSchedMW").value; if ("" != temp) obj.selfSchedMW = temp;
                temp = document.getElementById ("startUpCost").value; if ("" != temp) obj.startUpCost = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("totalRevenue").value; if ("" != temp) obj.totalRevenue = temp;
                temp = document.getElementById ("updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;
                temp = document.getElementById ("updateType").value; if ("" != temp) obj.updateType = temp;
                temp = document.getElementById ("updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById ("RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;
                temp = document.getElementById ("MarketProduct").value; if ("" != temp) obj.MarketProduct = temp;
                temp = document.getElementById ("ClearingResourceAward").value; if ("" != temp) obj.ClearingResourceAward = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredResource", "RegisteredResource", "0..1", "0..*"],
                        ["MarketProduct", "MarketProduct", "1", "0..*"],
                        ["ClearingResourceAward", "ResourceAwardClearing", "1..*", "1..*"],
                        ["SelfScheduleBreakdown", "SelfScheduleBreakdown", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * Model of load following capabilities that are entered by operators on a temporary basis.
         *
         * Related to Registered Resources in Metered Subsystems
         *
         */
        class LoadFollowingOperatorInput extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.LoadFollowingOperatorInput;
                if (null == bucket)
                   cim_data.LoadFollowingOperatorInput = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadFollowingOperatorInput[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LoadFollowingOperatorInput";
                base.parse_element (/<cim:LoadFollowingOperatorInput.dataEntryTimeStamp>([\s\S]*?)<\/cim:LoadFollowingOperatorInput.dataEntryTimeStamp>/g, obj, "dataEntryTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:LoadFollowingOperatorInput.tempLoadFollowingUpManualCap>([\s\S]*?)<\/cim:LoadFollowingOperatorInput.tempLoadFollowingUpManualCap>/g, obj, "tempLoadFollowingUpManualCap", base.to_float, sub, context);
                base.parse_element (/<cim:LoadFollowingOperatorInput.tempLoadFollowingDownManualCap>([\s\S]*?)<\/cim:LoadFollowingOperatorInput.tempLoadFollowingDownManualCap>/g, obj, "tempLoadFollowingDownManualCap", base.to_float, sub, context);
                base.parse_element (/<cim:LoadFollowingOperatorInput.updateUser>([\s\S]*?)<\/cim:LoadFollowingOperatorInput.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:LoadFollowingOperatorInput.updateTimeStamp>([\s\S]*?)<\/cim:LoadFollowingOperatorInput.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:LoadFollowingOperatorInput.updateType>([\s\S]*?)<\/cim:LoadFollowingOperatorInput.updateType>/g, obj, "updateType", base.to_string, sub, context);
                base.parse_attribute (/<cim:LoadFollowingOperatorInput.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                var bucket = context.parsed.LoadFollowingOperatorInput;
                if (null == bucket)
                   context.parsed.LoadFollowingOperatorInput = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "LoadFollowingOperatorInput", "dataEntryTimeStamp", "dataEntryTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "LoadFollowingOperatorInput", "tempLoadFollowingUpManualCap", "tempLoadFollowingUpManualCap",  base.from_float, fields);
                base.export_element (obj, "LoadFollowingOperatorInput", "tempLoadFollowingDownManualCap", "tempLoadFollowingDownManualCap",  base.from_float, fields);
                base.export_element (obj, "LoadFollowingOperatorInput", "updateUser", "updateUser",  base.from_string, fields);
                base.export_element (obj, "LoadFollowingOperatorInput", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "LoadFollowingOperatorInput", "updateType", "updateType",  base.from_string, fields);
                base.export_attribute (obj, "LoadFollowingOperatorInput", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadFollowingOperatorInput_collapse" aria-expanded="true" aria-controls="LoadFollowingOperatorInput_collapse" style="margin-left: 10px;">LoadFollowingOperatorInput</a></legend>
                    <div id="LoadFollowingOperatorInput_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#dataEntryTimeStamp}}<div><b>dataEntryTimeStamp</b>: {{dataEntryTimeStamp}}</div>{{/dataEntryTimeStamp}}
                    {{#tempLoadFollowingUpManualCap}}<div><b>tempLoadFollowingUpManualCap</b>: {{tempLoadFollowingUpManualCap}}</div>{{/tempLoadFollowingUpManualCap}}
                    {{#tempLoadFollowingDownManualCap}}<div><b>tempLoadFollowingDownManualCap</b>: {{tempLoadFollowingDownManualCap}}</div>{{/tempLoadFollowingDownManualCap}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#updateType}}<div><b>updateType</b>: {{updateType}}</div>{{/updateType}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadFollowingOperatorInput_collapse" aria-expanded="true" aria-controls="LoadFollowingOperatorInput_collapse" style="margin-left: 10px;">LoadFollowingOperatorInput</a></legend>
                    <div id="LoadFollowingOperatorInput_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dataEntryTimeStamp'>dataEntryTimeStamp: </label><div class='col-sm-8'><input id='dataEntryTimeStamp' class='form-control' type='text'{{#dataEntryTimeStamp}} value='{{dataEntryTimeStamp}}'{{/dataEntryTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tempLoadFollowingUpManualCap'>tempLoadFollowingUpManualCap: </label><div class='col-sm-8'><input id='tempLoadFollowingUpManualCap' class='form-control' type='text'{{#tempLoadFollowingUpManualCap}} value='{{tempLoadFollowingUpManualCap}}'{{/tempLoadFollowingUpManualCap}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tempLoadFollowingDownManualCap'>tempLoadFollowingDownManualCap: </label><div class='col-sm-8'><input id='tempLoadFollowingDownManualCap' class='form-control' type='text'{{#tempLoadFollowingDownManualCap}} value='{{tempLoadFollowingDownManualCap}}'{{/tempLoadFollowingDownManualCap}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateUser'>updateUser: </label><div class='col-sm-8'><input id='updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateType'>updateType: </label><div class='col-sm-8'><input id='updateType' class='form-control' type='text'{{#updateType}} value='{{updateType}}'{{/updateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "LoadFollowingOperatorInput" };
                super.submit (obj);
                temp = document.getElementById ("dataEntryTimeStamp").value; if ("" != temp) obj.dataEntryTimeStamp = temp;
                temp = document.getElementById ("tempLoadFollowingUpManualCap").value; if ("" != temp) obj.tempLoadFollowingUpManualCap = temp;
                temp = document.getElementById ("tempLoadFollowingDownManualCap").value; if ("" != temp) obj.tempLoadFollowingDownManualCap = temp;
                temp = document.getElementById ("updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById ("updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;
                temp = document.getElementById ("updateType").value; if ("" != temp) obj.updateType = temp;
                temp = document.getElementById ("RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredResource", "RegisteredResource", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Model of results of Market Power tests, gives status of resource for the associated interval
         *
         */
        class MPMResourceStatus extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MPMResourceStatus;
                if (null == bucket)
                   cim_data.MPMResourceStatus = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MPMResourceStatus[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MPMResourceStatus";
                base.parse_element (/<cim:MPMResourceStatus.resourceStatus>([\s\S]*?)<\/cim:MPMResourceStatus.resourceStatus>/g, obj, "resourceStatus", base.to_string, sub, context);
                base.parse_attribute (/<cim:MPMResourceStatus.MPMTestCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MPMTestCategory", sub, context);
                base.parse_attribute (/<cim:MPMResourceStatus.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attributes (/<cim:MPMResourceStatus.MitigatedBidClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MitigatedBidClearing", sub, context);
                var bucket = context.parsed.MPMResourceStatus;
                if (null == bucket)
                   context.parsed.MPMResourceStatus = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MPMResourceStatus", "resourceStatus", "resourceStatus",  base.from_string, fields);
                base.export_attribute (obj, "MPMResourceStatus", "MPMTestCategory", "MPMTestCategory", fields);
                base.export_attribute (obj, "MPMResourceStatus", "RegisteredResource", "RegisteredResource", fields);
                base.export_attributes (obj, "MPMResourceStatus", "MitigatedBidClearing", "MitigatedBidClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MPMResourceStatus_collapse" aria-expanded="true" aria-controls="MPMResourceStatus_collapse" style="margin-left: 10px;">MPMResourceStatus</a></legend>
                    <div id="MPMResourceStatus_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#resourceStatus}}<div><b>resourceStatus</b>: {{resourceStatus}}</div>{{/resourceStatus}}
                    {{#MPMTestCategory}}<div><b>MPMTestCategory</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MPMTestCategory}}&quot;);})'>{{MPMTestCategory}}</a></div>{{/MPMTestCategory}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    {{#MitigatedBidClearing}}<div><b>MitigatedBidClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MitigatedBidClearing}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MitigatedBidClearing) obj.MitigatedBidClearing_string = obj.MitigatedBidClearing.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MitigatedBidClearing_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MPMResourceStatus_collapse" aria-expanded="true" aria-controls="MPMResourceStatus_collapse" style="margin-left: 10px;">MPMResourceStatus</a></legend>
                    <div id="MPMResourceStatus_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='resourceStatus'>resourceStatus: </label><div class='col-sm-8'><input id='resourceStatus' class='form-control' type='text'{{#resourceStatus}} value='{{resourceStatus}}'{{/resourceStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MPMTestCategory'>MPMTestCategory: </label><div class='col-sm-8'><input id='MPMTestCategory' class='form-control' type='text'{{#MPMTestCategory}} value='{{MPMTestCategory}}'{{/MPMTestCategory}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MitigatedBidClearing'>MitigatedBidClearing: </label><div class='col-sm-8'><input id='MitigatedBidClearing' class='form-control' type='text'{{#MitigatedBidClearing}} value='{{MitigatedBidClearing}}_string'{{/MitigatedBidClearing}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MPMResourceStatus" };
                super.submit (obj);
                temp = document.getElementById ("resourceStatus").value; if ("" != temp) obj.resourceStatus = temp;
                temp = document.getElementById ("MPMTestCategory").value; if ("" != temp) obj.MPMTestCategory = temp;
                temp = document.getElementById ("RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;
                temp = document.getElementById ("MitigatedBidClearing").value; if ("" != temp) obj.MitigatedBidClearing = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MPMTestCategory", "MPMTestCategory", "1", "0..*"],
                        ["RegisteredResource", "RegisteredResource", "0..1", "0..*"],
                        ["MitigatedBidClearing", "MitigatedBidClearing", "1..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Model of mitigated bid.
         *
         * Indicates segment of piece-wise linear bid, that has been mitigated
         *
         */
        class MitigatedBidSegment extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MitigatedBidSegment;
                if (null == bucket)
                   cim_data.MitigatedBidSegment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MitigatedBidSegment[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MitigatedBidSegment";
                base.parse_element (/<cim:MitigatedBidSegment.intervalStartTime>([\s\S]*?)<\/cim:MitigatedBidSegment.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:MitigatedBidSegment.thresholdType>([\s\S]*?)<\/cim:MitigatedBidSegment.thresholdType>/g, obj, "thresholdType", base.to_string, sub, context);
                base.parse_element (/<cim:MitigatedBidSegment.segmentNumber>([\s\S]*?)<\/cim:MitigatedBidSegment.segmentNumber>/g, obj, "segmentNumber", base.to_string, sub, context);
                base.parse_element (/<cim:MitigatedBidSegment.segmentMW>([\s\S]*?)<\/cim:MitigatedBidSegment.segmentMW>/g, obj, "segmentMW", base.to_float, sub, context);
                base.parse_attribute (/<cim:MitigatedBidSegment.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);
                var bucket = context.parsed.MitigatedBidSegment;
                if (null == bucket)
                   context.parsed.MitigatedBidSegment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MitigatedBidSegment", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_element (obj, "MitigatedBidSegment", "thresholdType", "thresholdType",  base.from_string, fields);
                base.export_element (obj, "MitigatedBidSegment", "segmentNumber", "segmentNumber",  base.from_string, fields);
                base.export_element (obj, "MitigatedBidSegment", "segmentMW", "segmentMW",  base.from_float, fields);
                base.export_attribute (obj, "MitigatedBidSegment", "Bid", "Bid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MitigatedBidSegment_collapse" aria-expanded="true" aria-controls="MitigatedBidSegment_collapse" style="margin-left: 10px;">MitigatedBidSegment</a></legend>
                    <div id="MitigatedBidSegment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#thresholdType}}<div><b>thresholdType</b>: {{thresholdType}}</div>{{/thresholdType}}
                    {{#segmentNumber}}<div><b>segmentNumber</b>: {{segmentNumber}}</div>{{/segmentNumber}}
                    {{#segmentMW}}<div><b>segmentMW</b>: {{segmentMW}}</div>{{/segmentMW}}
                    {{#Bid}}<div><b>Bid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Bid}}&quot;);})'>{{Bid}}</a></div>{{/Bid}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MitigatedBidSegment_collapse" aria-expanded="true" aria-controls="MitigatedBidSegment_collapse" style="margin-left: 10px;">MitigatedBidSegment</a></legend>
                    <div id="MitigatedBidSegment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='thresholdType'>thresholdType: </label><div class='col-sm-8'><input id='thresholdType' class='form-control' type='text'{{#thresholdType}} value='{{thresholdType}}'{{/thresholdType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='segmentNumber'>segmentNumber: </label><div class='col-sm-8'><input id='segmentNumber' class='form-control' type='text'{{#segmentNumber}} value='{{segmentNumber}}'{{/segmentNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='segmentMW'>segmentMW: </label><div class='col-sm-8'><input id='segmentMW' class='form-control' type='text'{{#segmentMW}} value='{{segmentMW}}'{{/segmentMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Bid'>Bid: </label><div class='col-sm-8'><input id='Bid' class='form-control' type='text'{{#Bid}} value='{{Bid}}'{{/Bid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MitigatedBidSegment" };
                super.submit (obj);
                temp = document.getElementById ("intervalStartTime").value; if ("" != temp) obj.intervalStartTime = temp;
                temp = document.getElementById ("thresholdType").value; if ("" != temp) obj.thresholdType = temp;
                temp = document.getElementById ("segmentNumber").value; if ("" != temp) obj.segmentNumber = temp;
                temp = document.getElementById ("segmentMW").value; if ("" != temp) obj.segmentMW = temp;
                temp = document.getElementById ("Bid").value; if ("" != temp) obj.Bid = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Bid", "Bid", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A statement is a roll up of statement line items.
         *
         * Each statement along with its line items provide the details of specific charges at any given time.  Used by Billing and Settlement
         *
         */
        class MarketStatement extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MarketStatement;
                if (null == bucket)
                   cim_data.MarketStatement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketStatement[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "MarketStatement";
                base.parse_element (/<cim:MarketStatement.tradeDate>([\s\S]*?)<\/cim:MarketStatement.tradeDate>/g, obj, "tradeDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketStatement.referenceNumber>([\s\S]*?)<\/cim:MarketStatement.referenceNumber>/g, obj, "referenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatement.start>([\s\S]*?)<\/cim:MarketStatement.start>/g, obj, "start", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketStatement.end>([\s\S]*?)<\/cim:MarketStatement.end>/g, obj, "end", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketStatement.transactionDate>([\s\S]*?)<\/cim:MarketStatement.transactionDate>/g, obj, "transactionDate", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:MarketStatement.MarketStatementLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketStatementLineItem", sub, context);
                var bucket = context.parsed.MarketStatement;
                if (null == bucket)
                   context.parsed.MarketStatement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketStatement", "tradeDate", "tradeDate",  base.from_datetime, fields);
                base.export_element (obj, "MarketStatement", "referenceNumber", "referenceNumber",  base.from_string, fields);
                base.export_element (obj, "MarketStatement", "start", "start",  base.from_datetime, fields);
                base.export_element (obj, "MarketStatement", "end", "end",  base.from_datetime, fields);
                base.export_element (obj, "MarketStatement", "transactionDate", "transactionDate",  base.from_datetime, fields);
                base.export_attributes (obj, "MarketStatement", "MarketStatementLineItem", "MarketStatementLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketStatement_collapse" aria-expanded="true" aria-controls="MarketStatement_collapse" style="margin-left: 10px;">MarketStatement</a></legend>
                    <div id="MarketStatement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#tradeDate}}<div><b>tradeDate</b>: {{tradeDate}}</div>{{/tradeDate}}
                    {{#referenceNumber}}<div><b>referenceNumber</b>: {{referenceNumber}}</div>{{/referenceNumber}}
                    {{#start}}<div><b>start</b>: {{start}}</div>{{/start}}
                    {{#end}}<div><b>end</b>: {{end}}</div>{{/end}}
                    {{#transactionDate}}<div><b>transactionDate</b>: {{transactionDate}}</div>{{/transactionDate}}
                    {{#MarketStatementLineItem}}<div><b>MarketStatementLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketStatementLineItem}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MarketStatementLineItem) obj.MarketStatementLineItem_string = obj.MarketStatementLineItem.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MarketStatementLineItem_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketStatement_collapse" aria-expanded="true" aria-controls="MarketStatement_collapse" style="margin-left: 10px;">MarketStatement</a></legend>
                    <div id="MarketStatement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tradeDate'>tradeDate: </label><div class='col-sm-8'><input id='tradeDate' class='form-control' type='text'{{#tradeDate}} value='{{tradeDate}}'{{/tradeDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='referenceNumber'>referenceNumber: </label><div class='col-sm-8'><input id='referenceNumber' class='form-control' type='text'{{#referenceNumber}} value='{{referenceNumber}}'{{/referenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='start'>start: </label><div class='col-sm-8'><input id='start' class='form-control' type='text'{{#start}} value='{{start}}'{{/start}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='end'>end: </label><div class='col-sm-8'><input id='end' class='form-control' type='text'{{#end}} value='{{end}}'{{/end}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='transactionDate'>transactionDate: </label><div class='col-sm-8'><input id='transactionDate' class='form-control' type='text'{{#transactionDate}} value='{{transactionDate}}'{{/transactionDate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MarketStatement" };
                super.submit (obj);
                temp = document.getElementById ("tradeDate").value; if ("" != temp) obj.tradeDate = temp;
                temp = document.getElementById ("referenceNumber").value; if ("" != temp) obj.referenceNumber = temp;
                temp = document.getElementById ("start").value; if ("" != temp) obj.start = temp;
                temp = document.getElementById ("end").value; if ("" != temp) obj.end = temp;
                temp = document.getElementById ("transactionDate").value; if ("" != temp) obj.transactionDate = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MarketStatementLineItem", "MarketStatementLineItem", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * Model of market clearing results for resources that bid to follow load
         *
         */
        class ResourceLoadFollowingInst extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ResourceLoadFollowingInst;
                if (null == bucket)
                   cim_data.ResourceLoadFollowingInst = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceLoadFollowingInst[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceLoadFollowingInst";
                base.parse_element (/<cim:ResourceLoadFollowingInst.instructionID>([\s\S]*?)<\/cim:ResourceLoadFollowingInst.instructionID>/g, obj, "instructionID", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceLoadFollowingInst.intervalStartTime>([\s\S]*?)<\/cim:ResourceLoadFollowingInst.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:ResourceLoadFollowingInst.calcLoadFollowingMW>([\s\S]*?)<\/cim:ResourceLoadFollowingInst.calcLoadFollowingMW>/g, obj, "calcLoadFollowingMW", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceLoadFollowingInst.dispWindowLowLimt>([\s\S]*?)<\/cim:ResourceLoadFollowingInst.dispWindowLowLimt>/g, obj, "dispWindowLowLimt", base.to_float, sub, context);
                base.parse_element (/<cim:ResourceLoadFollowingInst.dispWindowHighLimt>([\s\S]*?)<\/cim:ResourceLoadFollowingInst.dispWindowHighLimt>/g, obj, "dispWindowHighLimt", base.to_float, sub, context);
                base.parse_attribute (/<cim:ResourceLoadFollowingInst.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attribute (/<cim:ResourceLoadFollowingInst.ResourceClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceClearing", sub, context);
                var bucket = context.parsed.ResourceLoadFollowingInst;
                if (null == bucket)
                   context.parsed.ResourceLoadFollowingInst = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ResourceLoadFollowingInst", "instructionID", "instructionID",  base.from_string, fields);
                base.export_element (obj, "ResourceLoadFollowingInst", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_element (obj, "ResourceLoadFollowingInst", "calcLoadFollowingMW", "calcLoadFollowingMW",  base.from_float, fields);
                base.export_element (obj, "ResourceLoadFollowingInst", "dispWindowLowLimt", "dispWindowLowLimt",  base.from_float, fields);
                base.export_element (obj, "ResourceLoadFollowingInst", "dispWindowHighLimt", "dispWindowHighLimt",  base.from_float, fields);
                base.export_attribute (obj, "ResourceLoadFollowingInst", "RegisteredResource", "RegisteredResource", fields);
                base.export_attribute (obj, "ResourceLoadFollowingInst", "ResourceClearing", "ResourceClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceLoadFollowingInst_collapse" aria-expanded="true" aria-controls="ResourceLoadFollowingInst_collapse" style="margin-left: 10px;">ResourceLoadFollowingInst</a></legend>
                    <div id="ResourceLoadFollowingInst_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#instructionID}}<div><b>instructionID</b>: {{instructionID}}</div>{{/instructionID}}
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#calcLoadFollowingMW}}<div><b>calcLoadFollowingMW</b>: {{calcLoadFollowingMW}}</div>{{/calcLoadFollowingMW}}
                    {{#dispWindowLowLimt}}<div><b>dispWindowLowLimt</b>: {{dispWindowLowLimt}}</div>{{/dispWindowLowLimt}}
                    {{#dispWindowHighLimt}}<div><b>dispWindowHighLimt</b>: {{dispWindowHighLimt}}</div>{{/dispWindowHighLimt}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    {{#ResourceClearing}}<div><b>ResourceClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ResourceClearing}}&quot;);})'>{{ResourceClearing}}</a></div>{{/ResourceClearing}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceLoadFollowingInst_collapse" aria-expanded="true" aria-controls="ResourceLoadFollowingInst_collapse" style="margin-left: 10px;">ResourceLoadFollowingInst</a></legend>
                    <div id="ResourceLoadFollowingInst_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='instructionID'>instructionID: </label><div class='col-sm-8'><input id='instructionID' class='form-control' type='text'{{#instructionID}} value='{{instructionID}}'{{/instructionID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='calcLoadFollowingMW'>calcLoadFollowingMW: </label><div class='col-sm-8'><input id='calcLoadFollowingMW' class='form-control' type='text'{{#calcLoadFollowingMW}} value='{{calcLoadFollowingMW}}'{{/calcLoadFollowingMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dispWindowLowLimt'>dispWindowLowLimt: </label><div class='col-sm-8'><input id='dispWindowLowLimt' class='form-control' type='text'{{#dispWindowLowLimt}} value='{{dispWindowLowLimt}}'{{/dispWindowLowLimt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dispWindowHighLimt'>dispWindowHighLimt: </label><div class='col-sm-8'><input id='dispWindowHighLimt' class='form-control' type='text'{{#dispWindowHighLimt}} value='{{dispWindowHighLimt}}'{{/dispWindowHighLimt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ResourceClearing'>ResourceClearing: </label><div class='col-sm-8'><input id='ResourceClearing' class='form-control' type='text'{{#ResourceClearing}} value='{{ResourceClearing}}'{{/ResourceClearing}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ResourceLoadFollowingInst" };
                super.submit (obj);
                temp = document.getElementById ("instructionID").value; if ("" != temp) obj.instructionID = temp;
                temp = document.getElementById ("intervalStartTime").value; if ("" != temp) obj.intervalStartTime = temp;
                temp = document.getElementById ("calcLoadFollowingMW").value; if ("" != temp) obj.calcLoadFollowingMW = temp;
                temp = document.getElementById ("dispWindowLowLimt").value; if ("" != temp) obj.dispWindowLowLimt = temp;
                temp = document.getElementById ("dispWindowHighLimt").value; if ("" != temp) obj.dispWindowHighLimt = temp;
                temp = document.getElementById ("RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;
                temp = document.getElementById ("ResourceClearing").value; if ("" != temp) obj.ResourceClearing = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredResource", "RegisteredResource", "0..1", "0..*"],
                        ["ResourceClearing", "ResourceClearing", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Pricing node clearing results posted for a given settlement period.
         *
         */
        class PnodeClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PnodeClearing;
                if (null == bucket)
                   cim_data.PnodeClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PnodeClearing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "PnodeClearing";
                base.parse_attributes (/<cim:PnodeClearing.PnodeResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PnodeResults", sub, context);
                var bucket = context.parsed.PnodeClearing;
                if (null == bucket)
                   context.parsed.PnodeClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "PnodeClearing", "PnodeResults", "PnodeResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PnodeClearing_collapse" aria-expanded="true" aria-controls="PnodeClearing_collapse" style="margin-left: 10px;">PnodeClearing</a></legend>
                    <div id="PnodeClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#PnodeResults}}<div><b>PnodeResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PnodeResults}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PnodeResults) obj.PnodeResults_string = obj.PnodeResults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PnodeResults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PnodeClearing_collapse" aria-expanded="true" aria-controls="PnodeClearing_collapse" style="margin-left: 10px;">PnodeClearing</a></legend>
                    <div id="PnodeClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "PnodeClearing" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["PnodeResults", "PnodeResults", "1..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Model of market clearing, related to Dispatch Operating Target (model of anticipatory dispatch).
         *
         * Identifies interval
         *
         */
        class InstructionClearingDOT extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.InstructionClearingDOT;
                if (null == bucket)
                   cim_data.InstructionClearingDOT = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InstructionClearingDOT[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "InstructionClearingDOT";
                base.parse_element (/<cim:InstructionClearingDOT.contingencyActive>([\s\S]*?)<\/cim:InstructionClearingDOT.contingencyActive>/g, obj, "contingencyActive", base.to_string, sub, context);
                base.parse_element (/<cim:InstructionClearingDOT.dispatchMode>([\s\S]*?)<\/cim:InstructionClearingDOT.dispatchMode>/g, obj, "dispatchMode", base.to_string, sub, context);
                base.parse_attributes (/<cim:InstructionClearingDOT.DotInstruction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DotInstruction", sub, context);
                var bucket = context.parsed.InstructionClearingDOT;
                if (null == bucket)
                   context.parsed.InstructionClearingDOT = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "InstructionClearingDOT", "contingencyActive", "contingencyActive",  base.from_string, fields);
                base.export_element (obj, "InstructionClearingDOT", "dispatchMode", "dispatchMode",  base.from_string, fields);
                base.export_attributes (obj, "InstructionClearingDOT", "DotInstruction", "DotInstruction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InstructionClearingDOT_collapse" aria-expanded="true" aria-controls="InstructionClearingDOT_collapse" style="margin-left: 10px;">InstructionClearingDOT</a></legend>
                    <div id="InstructionClearingDOT_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#contingencyActive}}<div><b>contingencyActive</b>: {{contingencyActive}}</div>{{/contingencyActive}}
                    {{#dispatchMode}}<div><b>dispatchMode</b>: {{dispatchMode}}</div>{{/dispatchMode}}
                    {{#DotInstruction}}<div><b>DotInstruction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DotInstruction}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.DotInstruction) obj.DotInstruction_string = obj.DotInstruction.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DotInstruction_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InstructionClearingDOT_collapse" aria-expanded="true" aria-controls="InstructionClearingDOT_collapse" style="margin-left: 10px;">InstructionClearingDOT</a></legend>
                    <div id="InstructionClearingDOT_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contingencyActive'>contingencyActive: </label><div class='col-sm-8'><input id='contingencyActive' class='form-control' type='text'{{#contingencyActive}} value='{{contingencyActive}}'{{/contingencyActive}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dispatchMode'>dispatchMode: </label><div class='col-sm-8'><input id='dispatchMode' class='form-control' type='text'{{#dispatchMode}} value='{{dispatchMode}}'{{/dispatchMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DotInstruction'>DotInstruction: </label><div class='col-sm-8'><input id='DotInstruction' class='form-control' type='text'{{#DotInstruction}} value='{{DotInstruction}}_string'{{/DotInstruction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "InstructionClearingDOT" };
                super.submit (obj);
                temp = document.getElementById ("contingencyActive").value; if ("" != temp) obj.contingencyActive = temp;
                temp = document.getElementById ("dispatchMode").value; if ("" != temp) obj.dispatchMode = temp;
                temp = document.getElementById ("DotInstruction").value; if ("" != temp) obj.DotInstruction = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["DotInstruction", "DotInstruction", "1..*", "1..*"]
                    ]
                );
            }
        }

        /**
         * Provides the MW loss for RUC Zones, subcontrol areas, and the total loss.
         *
         */
        class LossClearingResults extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.LossClearingResults;
                if (null == bucket)
                   cim_data.LossClearingResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LossClearingResults[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "LossClearingResults";
                base.parse_element (/<cim:LossClearingResults.lossMW>([\s\S]*?)<\/cim:LossClearingResults.lossMW>/g, obj, "lossMW", base.to_float, sub, context);
                base.parse_attribute (/<cim:LossClearingResults.LossClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LossClearing", sub, context);
                base.parse_attribute (/<cim:LossClearingResults.RUCZone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RUCZone", sub, context);
                base.parse_attribute (/<cim:LossClearingResults.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                base.parse_attribute (/<cim:LossClearingResults.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                var bucket = context.parsed.LossClearingResults;
                if (null == bucket)
                   context.parsed.LossClearingResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "LossClearingResults", "lossMW", "lossMW",  base.from_float, fields);
                base.export_attribute (obj, "LossClearingResults", "LossClearing", "LossClearing", fields);
                base.export_attribute (obj, "LossClearingResults", "RUCZone", "RUCZone", fields);
                base.export_attribute (obj, "LossClearingResults", "SubControlArea", "SubControlArea", fields);
                base.export_attribute (obj, "LossClearingResults", "HostControlArea", "HostControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LossClearingResults_collapse" aria-expanded="true" aria-controls="LossClearingResults_collapse" style="margin-left: 10px;">LossClearingResults</a></legend>
                    <div id="LossClearingResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#lossMW}}<div><b>lossMW</b>: {{lossMW}}</div>{{/lossMW}}
                    {{#LossClearing}}<div><b>LossClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LossClearing}}&quot;);})'>{{LossClearing}}</a></div>{{/LossClearing}}
                    {{#RUCZone}}<div><b>RUCZone</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RUCZone}}&quot;);})'>{{RUCZone}}</a></div>{{/RUCZone}}
                    {{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SubControlArea}}&quot;);})'>{{SubControlArea}}</a></div>{{/SubControlArea}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HostControlArea}}&quot;);})'>{{HostControlArea}}</a></div>{{/HostControlArea}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LossClearingResults_collapse" aria-expanded="true" aria-controls="LossClearingResults_collapse" style="margin-left: 10px;">LossClearingResults</a></legend>
                    <div id="LossClearingResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lossMW'>lossMW: </label><div class='col-sm-8'><input id='lossMW' class='form-control' type='text'{{#lossMW}} value='{{lossMW}}'{{/lossMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LossClearing'>LossClearing: </label><div class='col-sm-8'><input id='LossClearing' class='form-control' type='text'{{#LossClearing}} value='{{LossClearing}}'{{/LossClearing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RUCZone'>RUCZone: </label><div class='col-sm-8'><input id='RUCZone' class='form-control' type='text'{{#RUCZone}} value='{{RUCZone}}'{{/RUCZone}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SubControlArea'>SubControlArea: </label><div class='col-sm-8'><input id='SubControlArea' class='form-control' type='text'{{#SubControlArea}} value='{{SubControlArea}}'{{/SubControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "LossClearingResults" };
                super.submit (obj);
                temp = document.getElementById ("lossMW").value; if ("" != temp) obj.lossMW = temp;
                temp = document.getElementById ("LossClearing").value; if ("" != temp) obj.LossClearing = temp;
                temp = document.getElementById ("RUCZone").value; if ("" != temp) obj.RUCZone = temp;
                temp = document.getElementById ("SubControlArea").value; if ("" != temp) obj.SubControlArea = temp;
                temp = document.getElementById ("HostControlArea").value; if ("" != temp) obj.HostControlArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["LossClearing", "LossClearing", "0..1", "0..*"],
                        ["RUCZone", "RUCZone", "0..1", "0..*"],
                        ["SubControlArea", "SubControlArea", "0..1", "1..*"],
                        ["HostControlArea", "HostControlArea", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * This class models the information about the RUC awards
         *
         */
        class RUCAwardInstruction extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RUCAwardInstruction;
                if (null == bucket)
                   cim_data.RUCAwardInstruction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RUCAwardInstruction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RUCAwardInstruction";
                base.parse_element (/<cim:RUCAwardInstruction.clearedPrice>([\s\S]*?)<\/cim:RUCAwardInstruction.clearedPrice>/g, obj, "clearedPrice", base.to_float, sub, context);
                base.parse_element (/<cim:RUCAwardInstruction.marketProductType>([\s\S]*?)<\/cim:RUCAwardInstruction.marketProductType>/g, obj, "marketProductType", base.to_string, sub, context);
                base.parse_element (/<cim:RUCAwardInstruction.RUCAward>([\s\S]*?)<\/cim:RUCAwardInstruction.RUCAward>/g, obj, "RUCAward", base.to_float, sub, context);
                base.parse_element (/<cim:RUCAwardInstruction.RUCCapacity>([\s\S]*?)<\/cim:RUCAwardInstruction.RUCCapacity>/g, obj, "RUCCapacity", base.to_float, sub, context);
                base.parse_element (/<cim:RUCAwardInstruction.RUCSchedule>([\s\S]*?)<\/cim:RUCAwardInstruction.RUCSchedule>/g, obj, "RUCSchedule", base.to_float, sub, context);
                base.parse_element (/<cim:RUCAwardInstruction.updateTimeStamp>([\s\S]*?)<\/cim:RUCAwardInstruction.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:RUCAwardInstruction.updateType>([\s\S]*?)<\/cim:RUCAwardInstruction.updateType>/g, obj, "updateType", base.to_string, sub, context);
                base.parse_element (/<cim:RUCAwardInstruction.updateUser>([\s\S]*?)<\/cim:RUCAwardInstruction.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_attributes (/<cim:RUCAwardInstruction.ClearingResourceAward\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ClearingResourceAward", sub, context);
                base.parse_attribute (/<cim:RUCAwardInstruction.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                var bucket = context.parsed.RUCAwardInstruction;
                if (null == bucket)
                   context.parsed.RUCAwardInstruction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RUCAwardInstruction", "clearedPrice", "clearedPrice",  base.from_float, fields);
                base.export_element (obj, "RUCAwardInstruction", "marketProductType", "marketProductType",  base.from_string, fields);
                base.export_element (obj, "RUCAwardInstruction", "RUCAward", "RUCAward",  base.from_float, fields);
                base.export_element (obj, "RUCAwardInstruction", "RUCCapacity", "RUCCapacity",  base.from_float, fields);
                base.export_element (obj, "RUCAwardInstruction", "RUCSchedule", "RUCSchedule",  base.from_float, fields);
                base.export_element (obj, "RUCAwardInstruction", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "RUCAwardInstruction", "updateType", "updateType",  base.from_string, fields);
                base.export_element (obj, "RUCAwardInstruction", "updateUser", "updateUser",  base.from_string, fields);
                base.export_attributes (obj, "RUCAwardInstruction", "ClearingResourceAward", "ClearingResourceAward", fields);
                base.export_attribute (obj, "RUCAwardInstruction", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RUCAwardInstruction_collapse" aria-expanded="true" aria-controls="RUCAwardInstruction_collapse" style="margin-left: 10px;">RUCAwardInstruction</a></legend>
                    <div id="RUCAwardInstruction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#clearedPrice}}<div><b>clearedPrice</b>: {{clearedPrice}}</div>{{/clearedPrice}}
                    {{#marketProductType}}<div><b>marketProductType</b>: {{marketProductType}}</div>{{/marketProductType}}
                    {{#RUCAward}}<div><b>RUCAward</b>: {{RUCAward}}</div>{{/RUCAward}}
                    {{#RUCCapacity}}<div><b>RUCCapacity</b>: {{RUCCapacity}}</div>{{/RUCCapacity}}
                    {{#RUCSchedule}}<div><b>RUCSchedule</b>: {{RUCSchedule}}</div>{{/RUCSchedule}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#updateType}}<div><b>updateType</b>: {{updateType}}</div>{{/updateType}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#ClearingResourceAward}}<div><b>ClearingResourceAward</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ClearingResourceAward}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ClearingResourceAward) obj.ClearingResourceAward_string = obj.ClearingResourceAward.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ClearingResourceAward_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RUCAwardInstruction_collapse" aria-expanded="true" aria-controls="RUCAwardInstruction_collapse" style="margin-left: 10px;">RUCAwardInstruction</a></legend>
                    <div id="RUCAwardInstruction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clearedPrice'>clearedPrice: </label><div class='col-sm-8'><input id='clearedPrice' class='form-control' type='text'{{#clearedPrice}} value='{{clearedPrice}}'{{/clearedPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='marketProductType'>marketProductType: </label><div class='col-sm-8'><input id='marketProductType' class='form-control' type='text'{{#marketProductType}} value='{{marketProductType}}'{{/marketProductType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RUCAward'>RUCAward: </label><div class='col-sm-8'><input id='RUCAward' class='form-control' type='text'{{#RUCAward}} value='{{RUCAward}}'{{/RUCAward}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RUCCapacity'>RUCCapacity: </label><div class='col-sm-8'><input id='RUCCapacity' class='form-control' type='text'{{#RUCCapacity}} value='{{RUCCapacity}}'{{/RUCCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RUCSchedule'>RUCSchedule: </label><div class='col-sm-8'><input id='RUCSchedule' class='form-control' type='text'{{#RUCSchedule}} value='{{RUCSchedule}}'{{/RUCSchedule}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateType'>updateType: </label><div class='col-sm-8'><input id='updateType' class='form-control' type='text'{{#updateType}} value='{{updateType}}'{{/updateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateUser'>updateUser: </label><div class='col-sm-8'><input id='updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ClearingResourceAward'>ClearingResourceAward: </label><div class='col-sm-8'><input id='ClearingResourceAward' class='form-control' type='text'{{#ClearingResourceAward}} value='{{ClearingResourceAward}}_string'{{/ClearingResourceAward}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "RUCAwardInstruction" };
                super.submit (obj);
                temp = document.getElementById ("clearedPrice").value; if ("" != temp) obj.clearedPrice = temp;
                temp = document.getElementById ("marketProductType").value; if ("" != temp) obj.marketProductType = temp;
                temp = document.getElementById ("RUCAward").value; if ("" != temp) obj.RUCAward = temp;
                temp = document.getElementById ("RUCCapacity").value; if ("" != temp) obj.RUCCapacity = temp;
                temp = document.getElementById ("RUCSchedule").value; if ("" != temp) obj.RUCSchedule = temp;
                temp = document.getElementById ("updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;
                temp = document.getElementById ("updateType").value; if ("" != temp) obj.updateType = temp;
                temp = document.getElementById ("updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById ("ClearingResourceAward").value; if ("" != temp) obj.ClearingResourceAward = temp.split (",");
                temp = document.getElementById ("RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ClearingResourceAward", "ResourceAwardClearing", "1..*", "1..*"],
                        ["RegisteredResource", "RegisteredResource", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Model of results of Market Power tests, and possible mitigation.
         *
         * Interval based
         *
         */
        class MPMClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MPMClearing;
                if (null == bucket)
                   cim_data.MPMClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MPMClearing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "MPMClearing";
                base.parse_element (/<cim:MPMClearing.LMPMFinalFlag>([\s\S]*?)<\/cim:MPMClearing.LMPMFinalFlag>/g, obj, "LMPMFinalFlag", base.to_string, sub, context);
                base.parse_element (/<cim:MPMClearing.SMPMFinalFlag>([\s\S]*?)<\/cim:MPMClearing.SMPMFinalFlag>/g, obj, "SMPMFinalFlag", base.to_string, sub, context);
                base.parse_element (/<cim:MPMClearing.mitigationOccuredFlag>([\s\S]*?)<\/cim:MPMClearing.mitigationOccuredFlag>/g, obj, "mitigationOccuredFlag", base.to_string, sub, context);
                base.parse_attributes (/<cim:MPMClearing.MPMTestResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MPMTestResults", sub, context);
                var bucket = context.parsed.MPMClearing;
                if (null == bucket)
                   context.parsed.MPMClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "MPMClearing", "LMPMFinalFlag", "LMPMFinalFlag",  base.from_string, fields);
                base.export_element (obj, "MPMClearing", "SMPMFinalFlag", "SMPMFinalFlag",  base.from_string, fields);
                base.export_element (obj, "MPMClearing", "mitigationOccuredFlag", "mitigationOccuredFlag",  base.from_string, fields);
                base.export_attributes (obj, "MPMClearing", "MPMTestResults", "MPMTestResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MPMClearing_collapse" aria-expanded="true" aria-controls="MPMClearing_collapse" style="margin-left: 10px;">MPMClearing</a></legend>
                    <div id="MPMClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#LMPMFinalFlag}}<div><b>LMPMFinalFlag</b>: {{LMPMFinalFlag}}</div>{{/LMPMFinalFlag}}
                    {{#SMPMFinalFlag}}<div><b>SMPMFinalFlag</b>: {{SMPMFinalFlag}}</div>{{/SMPMFinalFlag}}
                    {{#mitigationOccuredFlag}}<div><b>mitigationOccuredFlag</b>: {{mitigationOccuredFlag}}</div>{{/mitigationOccuredFlag}}
                    {{#MPMTestResults}}<div><b>MPMTestResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MPMTestResults}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MPMTestResults) obj.MPMTestResults_string = obj.MPMTestResults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MPMTestResults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MPMClearing_collapse" aria-expanded="true" aria-controls="MPMClearing_collapse" style="margin-left: 10px;">MPMClearing</a></legend>
                    <div id="MPMClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LMPMFinalFlag'>LMPMFinalFlag: </label><div class='col-sm-8'><input id='LMPMFinalFlag' class='form-control' type='text'{{#LMPMFinalFlag}} value='{{LMPMFinalFlag}}'{{/LMPMFinalFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SMPMFinalFlag'>SMPMFinalFlag: </label><div class='col-sm-8'><input id='SMPMFinalFlag' class='form-control' type='text'{{#SMPMFinalFlag}} value='{{SMPMFinalFlag}}'{{/SMPMFinalFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mitigationOccuredFlag'>mitigationOccuredFlag: </label><div class='col-sm-8'><input id='mitigationOccuredFlag' class='form-control' type='text'{{#mitigationOccuredFlag}} value='{{mitigationOccuredFlag}}'{{/mitigationOccuredFlag}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MPMClearing" };
                super.submit (obj);
                temp = document.getElementById ("LMPMFinalFlag").value; if ("" != temp) obj.LMPMFinalFlag = temp;
                temp = document.getElementById ("SMPMFinalFlag").value; if ("" != temp) obj.SMPMFinalFlag = temp;
                temp = document.getElementById ("mitigationOccuredFlag").value; if ("" != temp) obj.mitigationOccuredFlag = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MPMTestResults", "MPMTestResults", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Model various charges to support billing and settlement of
         *
         */
        class BillDeterminant extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.BillDeterminant;
                if (null == bucket)
                   cim_data.BillDeterminant = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BillDeterminant[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "BillDeterminant";
                base.parse_element (/<cim:BillDeterminant.calculationLevel>([\s\S]*?)<\/cim:BillDeterminant.calculationLevel>/g, obj, "calculationLevel", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.configVersion>([\s\S]*?)<\/cim:BillDeterminant.configVersion>/g, obj, "configVersion", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.deleteStatus>([\s\S]*?)<\/cim:BillDeterminant.deleteStatus>/g, obj, "deleteStatus", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.effectiveDate>([\s\S]*?)<\/cim:BillDeterminant.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:BillDeterminant.exception>([\s\S]*?)<\/cim:BillDeterminant.exception>/g, obj, "exception", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.factor>([\s\S]*?)<\/cim:BillDeterminant.factor>/g, obj, "factor", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.frequency>([\s\S]*?)<\/cim:BillDeterminant.frequency>/g, obj, "frequency", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.numberInterval>([\s\S]*?)<\/cim:BillDeterminant.numberInterval>/g, obj, "numberInterval", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.offset>([\s\S]*?)<\/cim:BillDeterminant.offset>/g, obj, "offset", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.precisionLevel>([\s\S]*?)<\/cim:BillDeterminant.precisionLevel>/g, obj, "precisionLevel", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.primaryYN>([\s\S]*?)<\/cim:BillDeterminant.primaryYN>/g, obj, "primaryYN", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.referenceFlag>([\s\S]*?)<\/cim:BillDeterminant.referenceFlag>/g, obj, "referenceFlag", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.reportable>([\s\S]*?)<\/cim:BillDeterminant.reportable>/g, obj, "reportable", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.roundOff>([\s\S]*?)<\/cim:BillDeterminant.roundOff>/g, obj, "roundOff", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.source>([\s\S]*?)<\/cim:BillDeterminant.source>/g, obj, "source", base.to_string, sub, context);
                base.parse_element (/<cim:BillDeterminant.terminationDate>([\s\S]*?)<\/cim:BillDeterminant.terminationDate>/g, obj, "terminationDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:BillDeterminant.unitOfMeasure>([\s\S]*?)<\/cim:BillDeterminant.unitOfMeasure>/g, obj, "unitOfMeasure", base.to_string, sub, context);
                base.parse_attribute (/<cim:BillDeterminant.ChargeProfile\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeProfile", sub, context);
                base.parse_attributes (/<cim:BillDeterminant.MktUserAttribute\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktUserAttribute", sub, context);
                base.parse_attributes (/<cim:BillDeterminant.ChargeProfileData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeProfileData", sub, context);
                base.parse_attributes (/<cim:BillDeterminant.ChargeComponents\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeComponents", sub, context);
                var bucket = context.parsed.BillDeterminant;
                if (null == bucket)
                   context.parsed.BillDeterminant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "BillDeterminant", "calculationLevel", "calculationLevel",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "configVersion", "configVersion",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "deleteStatus", "deleteStatus",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "effectiveDate", "effectiveDate",  base.from_datetime, fields);
                base.export_element (obj, "BillDeterminant", "exception", "exception",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "factor", "factor",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "frequency", "frequency",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "numberInterval", "numberInterval",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "offset", "offset",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "precisionLevel", "precisionLevel",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "primaryYN", "primaryYN",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "referenceFlag", "referenceFlag",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "reportable", "reportable",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "roundOff", "roundOff",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "source", "source",  base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "terminationDate", "terminationDate",  base.from_datetime, fields);
                base.export_element (obj, "BillDeterminant", "unitOfMeasure", "unitOfMeasure",  base.from_string, fields);
                base.export_attribute (obj, "BillDeterminant", "ChargeProfile", "ChargeProfile", fields);
                base.export_attributes (obj, "BillDeterminant", "MktUserAttribute", "MktUserAttribute", fields);
                base.export_attributes (obj, "BillDeterminant", "ChargeProfileData", "ChargeProfileData", fields);
                base.export_attributes (obj, "BillDeterminant", "ChargeComponents", "ChargeComponents", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BillDeterminant_collapse" aria-expanded="true" aria-controls="BillDeterminant_collapse" style="margin-left: 10px;">BillDeterminant</a></legend>
                    <div id="BillDeterminant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#calculationLevel}}<div><b>calculationLevel</b>: {{calculationLevel}}</div>{{/calculationLevel}}
                    {{#configVersion}}<div><b>configVersion</b>: {{configVersion}}</div>{{/configVersion}}
                    {{#deleteStatus}}<div><b>deleteStatus</b>: {{deleteStatus}}</div>{{/deleteStatus}}
                    {{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
                    {{#exception}}<div><b>exception</b>: {{exception}}</div>{{/exception}}
                    {{#factor}}<div><b>factor</b>: {{factor}}</div>{{/factor}}
                    {{#frequency}}<div><b>frequency</b>: {{frequency}}</div>{{/frequency}}
                    {{#numberInterval}}<div><b>numberInterval</b>: {{numberInterval}}</div>{{/numberInterval}}
                    {{#offset}}<div><b>offset</b>: {{offset}}</div>{{/offset}}
                    {{#precisionLevel}}<div><b>precisionLevel</b>: {{precisionLevel}}</div>{{/precisionLevel}}
                    {{#primaryYN}}<div><b>primaryYN</b>: {{primaryYN}}</div>{{/primaryYN}}
                    {{#referenceFlag}}<div><b>referenceFlag</b>: {{referenceFlag}}</div>{{/referenceFlag}}
                    {{#reportable}}<div><b>reportable</b>: {{reportable}}</div>{{/reportable}}
                    {{#roundOff}}<div><b>roundOff</b>: {{roundOff}}</div>{{/roundOff}}
                    {{#source}}<div><b>source</b>: {{source}}</div>{{/source}}
                    {{#terminationDate}}<div><b>terminationDate</b>: {{terminationDate}}</div>{{/terminationDate}}
                    {{#unitOfMeasure}}<div><b>unitOfMeasure</b>: {{unitOfMeasure}}</div>{{/unitOfMeasure}}
                    {{#ChargeProfile}}<div><b>ChargeProfile</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChargeProfile}}&quot;);})'>{{ChargeProfile}}</a></div>{{/ChargeProfile}}
                    {{#MktUserAttribute}}<div><b>MktUserAttribute</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktUserAttribute}}
                    {{#ChargeProfileData}}<div><b>ChargeProfileData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChargeProfileData}}
                    {{#ChargeComponents}}<div><b>ChargeComponents</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChargeComponents}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MktUserAttribute) obj.MktUserAttribute_string = obj.MktUserAttribute.join ();
                if (obj.ChargeProfileData) obj.ChargeProfileData_string = obj.ChargeProfileData.join ();
                if (obj.ChargeComponents) obj.ChargeComponents_string = obj.ChargeComponents.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MktUserAttribute_string;
                delete obj.ChargeProfileData_string;
                delete obj.ChargeComponents_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BillDeterminant_collapse" aria-expanded="true" aria-controls="BillDeterminant_collapse" style="margin-left: 10px;">BillDeterminant</a></legend>
                    <div id="BillDeterminant_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='calculationLevel'>calculationLevel: </label><div class='col-sm-8'><input id='calculationLevel' class='form-control' type='text'{{#calculationLevel}} value='{{calculationLevel}}'{{/calculationLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='configVersion'>configVersion: </label><div class='col-sm-8'><input id='configVersion' class='form-control' type='text'{{#configVersion}} value='{{configVersion}}'{{/configVersion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='deleteStatus'>deleteStatus: </label><div class='col-sm-8'><input id='deleteStatus' class='form-control' type='text'{{#deleteStatus}} value='{{deleteStatus}}'{{/deleteStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='exception'>exception: </label><div class='col-sm-8'><input id='exception' class='form-control' type='text'{{#exception}} value='{{exception}}'{{/exception}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='factor'>factor: </label><div class='col-sm-8'><input id='factor' class='form-control' type='text'{{#factor}} value='{{factor}}'{{/factor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='frequency'>frequency: </label><div class='col-sm-8'><input id='frequency' class='form-control' type='text'{{#frequency}} value='{{frequency}}'{{/frequency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='numberInterval'>numberInterval: </label><div class='col-sm-8'><input id='numberInterval' class='form-control' type='text'{{#numberInterval}} value='{{numberInterval}}'{{/numberInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='offset'>offset: </label><div class='col-sm-8'><input id='offset' class='form-control' type='text'{{#offset}} value='{{offset}}'{{/offset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='precisionLevel'>precisionLevel: </label><div class='col-sm-8'><input id='precisionLevel' class='form-control' type='text'{{#precisionLevel}} value='{{precisionLevel}}'{{/precisionLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='primaryYN'>primaryYN: </label><div class='col-sm-8'><input id='primaryYN' class='form-control' type='text'{{#primaryYN}} value='{{primaryYN}}'{{/primaryYN}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='referenceFlag'>referenceFlag: </label><div class='col-sm-8'><input id='referenceFlag' class='form-control' type='text'{{#referenceFlag}} value='{{referenceFlag}}'{{/referenceFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reportable'>reportable: </label><div class='col-sm-8'><input id='reportable' class='form-control' type='text'{{#reportable}} value='{{reportable}}'{{/reportable}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='roundOff'>roundOff: </label><div class='col-sm-8'><input id='roundOff' class='form-control' type='text'{{#roundOff}} value='{{roundOff}}'{{/roundOff}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='source'>source: </label><div class='col-sm-8'><input id='source' class='form-control' type='text'{{#source}} value='{{source}}'{{/source}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='terminationDate'>terminationDate: </label><div class='col-sm-8'><input id='terminationDate' class='form-control' type='text'{{#terminationDate}} value='{{terminationDate}}'{{/terminationDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unitOfMeasure'>unitOfMeasure: </label><div class='col-sm-8'><input id='unitOfMeasure' class='form-control' type='text'{{#unitOfMeasure}} value='{{unitOfMeasure}}'{{/unitOfMeasure}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChargeProfile'>ChargeProfile: </label><div class='col-sm-8'><input id='ChargeProfile' class='form-control' type='text'{{#ChargeProfile}} value='{{ChargeProfile}}'{{/ChargeProfile}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktUserAttribute'>MktUserAttribute: </label><div class='col-sm-8'><input id='MktUserAttribute' class='form-control' type='text'{{#MktUserAttribute}} value='{{MktUserAttribute}}_string'{{/MktUserAttribute}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChargeComponents'>ChargeComponents: </label><div class='col-sm-8'><input id='ChargeComponents' class='form-control' type='text'{{#ChargeComponents}} value='{{ChargeComponents}}_string'{{/ChargeComponents}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "BillDeterminant" };
                super.submit (obj);
                temp = document.getElementById ("calculationLevel").value; if ("" != temp) obj.calculationLevel = temp;
                temp = document.getElementById ("configVersion").value; if ("" != temp) obj.configVersion = temp;
                temp = document.getElementById ("deleteStatus").value; if ("" != temp) obj.deleteStatus = temp;
                temp = document.getElementById ("effectiveDate").value; if ("" != temp) obj.effectiveDate = temp;
                temp = document.getElementById ("exception").value; if ("" != temp) obj.exception = temp;
                temp = document.getElementById ("factor").value; if ("" != temp) obj.factor = temp;
                temp = document.getElementById ("frequency").value; if ("" != temp) obj.frequency = temp;
                temp = document.getElementById ("numberInterval").value; if ("" != temp) obj.numberInterval = temp;
                temp = document.getElementById ("offset").value; if ("" != temp) obj.offset = temp;
                temp = document.getElementById ("precisionLevel").value; if ("" != temp) obj.precisionLevel = temp;
                temp = document.getElementById ("primaryYN").value; if ("" != temp) obj.primaryYN = temp;
                temp = document.getElementById ("referenceFlag").value; if ("" != temp) obj.referenceFlag = temp;
                temp = document.getElementById ("reportable").value; if ("" != temp) obj.reportable = temp;
                temp = document.getElementById ("roundOff").value; if ("" != temp) obj.roundOff = temp;
                temp = document.getElementById ("source").value; if ("" != temp) obj.source = temp;
                temp = document.getElementById ("terminationDate").value; if ("" != temp) obj.terminationDate = temp;
                temp = document.getElementById ("unitOfMeasure").value; if ("" != temp) obj.unitOfMeasure = temp;
                temp = document.getElementById ("ChargeProfile").value; if ("" != temp) obj.ChargeProfile = temp;
                temp = document.getElementById ("MktUserAttribute").value; if ("" != temp) obj.MktUserAttribute = temp.split (",");
                temp = document.getElementById ("ChargeComponents").value; if ("" != temp) obj.ChargeComponents = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ChargeProfile", "ChargeProfile", "0..1", "0..1"],
                        ["MktUserAttribute", "MktUserAttribute", "0..*", "0..*"],
                        ["ChargeProfileData", "ChargeProfileData", "0..*", "0..1"],
                        ["ChargeComponents", "ChargeComponent", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Model of ex-post pricing of nodes
         *
         */
        class ExPostPricing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExPostPricing;
                if (null == bucket)
                   cim_data.ExPostPricing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExPostPricing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "ExPostPricing";
                base.parse_element (/<cim:ExPostPricing.energyPrice>([\s\S]*?)<\/cim:ExPostPricing.energyPrice>/g, obj, "energyPrice", base.to_float, sub, context);
                base.parse_attributes (/<cim:ExPostPricing.ExPostResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExPostResults", sub, context);
                var bucket = context.parsed.ExPostPricing;
                if (null == bucket)
                   context.parsed.ExPostPricing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExPostPricing", "energyPrice", "energyPrice",  base.from_float, fields);
                base.export_attributes (obj, "ExPostPricing", "ExPostResults", "ExPostResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostPricing_collapse" aria-expanded="true" aria-controls="ExPostPricing_collapse" style="margin-left: 10px;">ExPostPricing</a></legend>
                    <div id="ExPostPricing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#energyPrice}}<div><b>energyPrice</b>: {{energyPrice}}</div>{{/energyPrice}}
                    {{#ExPostResults}}<div><b>ExPostResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ExPostResults}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ExPostResults) obj.ExPostResults_string = obj.ExPostResults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ExPostResults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostPricing_collapse" aria-expanded="true" aria-controls="ExPostPricing_collapse" style="margin-left: 10px;">ExPostPricing</a></legend>
                    <div id="ExPostPricing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='energyPrice'>energyPrice: </label><div class='col-sm-8'><input id='energyPrice' class='form-control' type='text'{{#energyPrice}} value='{{energyPrice}}'{{/energyPrice}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ExPostPricing" };
                super.submit (obj);
                temp = document.getElementById ("energyPrice").value; if ("" != temp) obj.energyPrice = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ExPostResults", "ExPostPricingResults", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * Contains the cleared results for each TransactionBid submitted to and accepted by the market.
         *
         */
        class TransactionBidResults extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TransactionBidResults;
                if (null == bucket)
                   cim_data.TransactionBidResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransactionBidResults[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransactionBidResults";
                base.parse_element (/<cim:TransactionBidResults.clearedMW>([\s\S]*?)<\/cim:TransactionBidResults.clearedMW>/g, obj, "clearedMW", base.to_float, sub, context);
                base.parse_element (/<cim:TransactionBidResults.clearedPrice>([\s\S]*?)<\/cim:TransactionBidResults.clearedPrice>/g, obj, "clearedPrice", base.to_float, sub, context);
                base.parse_attribute (/<cim:TransactionBidResults.TransactionBidClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransactionBidClearing", sub, context);
                base.parse_attribute (/<cim:TransactionBidResults.TransactionBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransactionBid", sub, context);
                var bucket = context.parsed.TransactionBidResults;
                if (null == bucket)
                   context.parsed.TransactionBidResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransactionBidResults", "clearedMW", "clearedMW",  base.from_float, fields);
                base.export_element (obj, "TransactionBidResults", "clearedPrice", "clearedPrice",  base.from_float, fields);
                base.export_attribute (obj, "TransactionBidResults", "TransactionBidClearing", "TransactionBidClearing", fields);
                base.export_attribute (obj, "TransactionBidResults", "TransactionBid", "TransactionBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransactionBidResults_collapse" aria-expanded="true" aria-controls="TransactionBidResults_collapse" style="margin-left: 10px;">TransactionBidResults</a></legend>
                    <div id="TransactionBidResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#clearedMW}}<div><b>clearedMW</b>: {{clearedMW}}</div>{{/clearedMW}}
                    {{#clearedPrice}}<div><b>clearedPrice</b>: {{clearedPrice}}</div>{{/clearedPrice}}
                    {{#TransactionBidClearing}}<div><b>TransactionBidClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransactionBidClearing}}&quot;);})'>{{TransactionBidClearing}}</a></div>{{/TransactionBidClearing}}
                    {{#TransactionBid}}<div><b>TransactionBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransactionBid}}&quot;);})'>{{TransactionBid}}</a></div>{{/TransactionBid}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransactionBidResults_collapse" aria-expanded="true" aria-controls="TransactionBidResults_collapse" style="margin-left: 10px;">TransactionBidResults</a></legend>
                    <div id="TransactionBidResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clearedMW'>clearedMW: </label><div class='col-sm-8'><input id='clearedMW' class='form-control' type='text'{{#clearedMW}} value='{{clearedMW}}'{{/clearedMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clearedPrice'>clearedPrice: </label><div class='col-sm-8'><input id='clearedPrice' class='form-control' type='text'{{#clearedPrice}} value='{{clearedPrice}}'{{/clearedPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransactionBidClearing'>TransactionBidClearing: </label><div class='col-sm-8'><input id='TransactionBidClearing' class='form-control' type='text'{{#TransactionBidClearing}} value='{{TransactionBidClearing}}'{{/TransactionBidClearing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TransactionBid'>TransactionBid: </label><div class='col-sm-8'><input id='TransactionBid' class='form-control' type='text'{{#TransactionBid}} value='{{TransactionBid}}'{{/TransactionBid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TransactionBidResults" };
                super.submit (obj);
                temp = document.getElementById ("clearedMW").value; if ("" != temp) obj.clearedMW = temp;
                temp = document.getElementById ("clearedPrice").value; if ("" != temp) obj.clearedPrice = temp;
                temp = document.getElementById ("TransactionBidClearing").value; if ("" != temp) obj.TransactionBidClearing = temp;
                temp = document.getElementById ("TransactionBid").value; if ("" != temp) obj.TransactionBid = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TransactionBidClearing", "TransactionBidClearing", "1", "0..*"],
                        ["TransactionBid", "TransactionBid", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Model of results of market clearing with respect to  Ancillary Service products
         *
         */
        class AncillaryServiceClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.AncillaryServiceClearing;
                if (null == bucket)
                   cim_data.AncillaryServiceClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AncillaryServiceClearing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "AncillaryServiceClearing";
                base.parse_attributes (/<cim:AncillaryServiceClearing.MarketRegionResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRegionResults", sub, context);
                base.parse_attribute (/<cim:AncillaryServiceClearing.MarketCaseClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketCaseClearing", sub, context);
                var bucket = context.parsed.AncillaryServiceClearing;
                if (null == bucket)
                   context.parsed.AncillaryServiceClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "AncillaryServiceClearing", "MarketRegionResults", "MarketRegionResults", fields);
                base.export_attribute (obj, "AncillaryServiceClearing", "MarketCaseClearing", "MarketCaseClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AncillaryServiceClearing_collapse" aria-expanded="true" aria-controls="AncillaryServiceClearing_collapse" style="margin-left: 10px;">AncillaryServiceClearing</a></legend>
                    <div id="AncillaryServiceClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#MarketRegionResults}}<div><b>MarketRegionResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketRegionResults}}
                    {{#MarketCaseClearing}}<div><b>MarketCaseClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketCaseClearing}}&quot;);})'>{{MarketCaseClearing}}</a></div>{{/MarketCaseClearing}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MarketRegionResults) obj.MarketRegionResults_string = obj.MarketRegionResults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MarketRegionResults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AncillaryServiceClearing_collapse" aria-expanded="true" aria-controls="AncillaryServiceClearing_collapse" style="margin-left: 10px;">AncillaryServiceClearing</a></legend>
                    <div id="AncillaryServiceClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketCaseClearing'>MarketCaseClearing: </label><div class='col-sm-8'><input id='MarketCaseClearing' class='form-control' type='text'{{#MarketCaseClearing}} value='{{MarketCaseClearing}}'{{/MarketCaseClearing}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "AncillaryServiceClearing" };
                super.submit (obj);
                temp = document.getElementById ("MarketCaseClearing").value; if ("" != temp) obj.MarketCaseClearing = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MarketRegionResults", "MarketRegionResults", "1..*", "0..1"],
                        ["MarketCaseClearing", "MarketCaseClearing", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Provides the adjusted load forecast value on a load forecast zone basis.
         *
         */
        class GeneralClearingResults extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GeneralClearingResults;
                if (null == bucket)
                   cim_data.GeneralClearingResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GeneralClearingResults[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "GeneralClearingResults";
                base.parse_element (/<cim:GeneralClearingResults.loadForecast>([\s\S]*?)<\/cim:GeneralClearingResults.loadForecast>/g, obj, "loadForecast", base.to_string, sub, context);
                base.parse_element (/<cim:GeneralClearingResults.totalLoad>([\s\S]*?)<\/cim:GeneralClearingResults.totalLoad>/g, obj, "totalLoad", base.to_float, sub, context);
                base.parse_element (/<cim:GeneralClearingResults.totalNetInterchange>([\s\S]*?)<\/cim:GeneralClearingResults.totalNetInterchange>/g, obj, "totalNetInterchange", base.to_float, sub, context);
                base.parse_attribute (/<cim:GeneralClearingResults.GeneralClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneralClearing", sub, context);
                base.parse_attribute (/<cim:GeneralClearingResults.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                var bucket = context.parsed.GeneralClearingResults;
                if (null == bucket)
                   context.parsed.GeneralClearingResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "GeneralClearingResults", "loadForecast", "loadForecast",  base.from_string, fields);
                base.export_element (obj, "GeneralClearingResults", "totalLoad", "totalLoad",  base.from_float, fields);
                base.export_element (obj, "GeneralClearingResults", "totalNetInterchange", "totalNetInterchange",  base.from_float, fields);
                base.export_attribute (obj, "GeneralClearingResults", "GeneralClearing", "GeneralClearing", fields);
                base.export_attribute (obj, "GeneralClearingResults", "SubControlArea", "SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeneralClearingResults_collapse" aria-expanded="true" aria-controls="GeneralClearingResults_collapse" style="margin-left: 10px;">GeneralClearingResults</a></legend>
                    <div id="GeneralClearingResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#loadForecast}}<div><b>loadForecast</b>: {{loadForecast}}</div>{{/loadForecast}}
                    {{#totalLoad}}<div><b>totalLoad</b>: {{totalLoad}}</div>{{/totalLoad}}
                    {{#totalNetInterchange}}<div><b>totalNetInterchange</b>: {{totalNetInterchange}}</div>{{/totalNetInterchange}}
                    {{#GeneralClearing}}<div><b>GeneralClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneralClearing}}&quot;);})'>{{GeneralClearing}}</a></div>{{/GeneralClearing}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeneralClearingResults_collapse" aria-expanded="true" aria-controls="GeneralClearingResults_collapse" style="margin-left: 10px;">GeneralClearingResults</a></legend>
                    <div id="GeneralClearingResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='loadForecast'>loadForecast: </label><div class='col-sm-8'><input id='loadForecast' class='form-control' type='text'{{#loadForecast}} value='{{loadForecast}}'{{/loadForecast}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='totalLoad'>totalLoad: </label><div class='col-sm-8'><input id='totalLoad' class='form-control' type='text'{{#totalLoad}} value='{{totalLoad}}'{{/totalLoad}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='totalNetInterchange'>totalNetInterchange: </label><div class='col-sm-8'><input id='totalNetInterchange' class='form-control' type='text'{{#totalNetInterchange}} value='{{totalNetInterchange}}'{{/totalNetInterchange}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='GeneralClearing'>GeneralClearing: </label><div class='col-sm-8'><input id='GeneralClearing' class='form-control' type='text'{{#GeneralClearing}} value='{{GeneralClearing}}'{{/GeneralClearing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SubControlArea'>SubControlArea: </label><div class='col-sm-8'><input id='SubControlArea' class='form-control' type='text'{{#SubControlArea}} value='{{SubControlArea}}'{{/SubControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "GeneralClearingResults" };
                super.submit (obj);
                temp = document.getElementById ("loadForecast").value; if ("" != temp) obj.loadForecast = temp;
                temp = document.getElementById ("totalLoad").value; if ("" != temp) obj.totalLoad = temp;
                temp = document.getElementById ("totalNetInterchange").value; if ("" != temp) obj.totalNetInterchange = temp;
                temp = document.getElementById ("GeneralClearing").value; if ("" != temp) obj.GeneralClearing = temp;
                temp = document.getElementById ("SubControlArea").value; if ("" != temp) obj.SubControlArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["GeneralClearing", "GeneralClearing", "0..1", "0..*"],
                        ["SubControlArea", "SubControlArea", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Provides the necessary information (on a resource basis) to capture the Startup/Shutdown commitment results.
         *
         * This information is relevant to all markets.
         *
         */
        class Commitments extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Commitments;
                if (null == bucket)
                   cim_data.Commitments = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Commitments[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Commitments";
                base.parse_element (/<cim:Commitments.commitmentType>([\s\S]*?)<\/cim:Commitments.commitmentType>/g, obj, "commitmentType", base.to_string, sub, context);
                base.parse_element (/<cim:Commitments.instructionCost>([\s\S]*?)<\/cim:Commitments.instructionCost>/g, obj, "instructionCost", base.to_float, sub, context);
                base.parse_element (/<cim:Commitments.instructionType>([\s\S]*?)<\/cim:Commitments.instructionType>/g, obj, "instructionType", base.to_string, sub, context);
                base.parse_element (/<cim:Commitments.intervalEndTime>([\s\S]*?)<\/cim:Commitments.intervalEndTime>/g, obj, "intervalEndTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Commitments.intervalStartTime>([\s\S]*?)<\/cim:Commitments.intervalStartTime>/g, obj, "intervalStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Commitments.minStatusChangeTime>([\s\S]*?)<\/cim:Commitments.minStatusChangeTime>/g, obj, "minStatusChangeTime", base.to_string, sub, context);
                base.parse_element (/<cim:Commitments.noLoadCost>([\s\S]*?)<\/cim:Commitments.noLoadCost>/g, obj, "noLoadCost", base.to_float, sub, context);
                base.parse_element (/<cim:Commitments.updateTimeStamp>([\s\S]*?)<\/cim:Commitments.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:Commitments.updateType>([\s\S]*?)<\/cim:Commitments.updateType>/g, obj, "updateType", base.to_string, sub, context);
                base.parse_element (/<cim:Commitments.updateUser>([\s\S]*?)<\/cim:Commitments.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_attributes (/<cim:Commitments.CommitmentClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CommitmentClearing", sub, context);
                base.parse_attribute (/<cim:Commitments.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                var bucket = context.parsed.Commitments;
                if (null == bucket)
                   context.parsed.Commitments = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Commitments", "commitmentType", "commitmentType",  base.from_string, fields);
                base.export_element (obj, "Commitments", "instructionCost", "instructionCost",  base.from_float, fields);
                base.export_element (obj, "Commitments", "instructionType", "instructionType",  base.from_string, fields);
                base.export_element (obj, "Commitments", "intervalEndTime", "intervalEndTime",  base.from_datetime, fields);
                base.export_element (obj, "Commitments", "intervalStartTime", "intervalStartTime",  base.from_datetime, fields);
                base.export_element (obj, "Commitments", "minStatusChangeTime", "minStatusChangeTime",  base.from_string, fields);
                base.export_element (obj, "Commitments", "noLoadCost", "noLoadCost",  base.from_float, fields);
                base.export_element (obj, "Commitments", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "Commitments", "updateType", "updateType",  base.from_string, fields);
                base.export_element (obj, "Commitments", "updateUser", "updateUser",  base.from_string, fields);
                base.export_attributes (obj, "Commitments", "CommitmentClearing", "CommitmentClearing", fields);
                base.export_attribute (obj, "Commitments", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Commitments_collapse" aria-expanded="true" aria-controls="Commitments_collapse" style="margin-left: 10px;">Commitments</a></legend>
                    <div id="Commitments_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#commitmentType}}<div><b>commitmentType</b>: {{commitmentType}}</div>{{/commitmentType}}
                    {{#instructionCost}}<div><b>instructionCost</b>: {{instructionCost}}</div>{{/instructionCost}}
                    {{#instructionType}}<div><b>instructionType</b>: {{instructionType}}</div>{{/instructionType}}
                    {{#intervalEndTime}}<div><b>intervalEndTime</b>: {{intervalEndTime}}</div>{{/intervalEndTime}}
                    {{#intervalStartTime}}<div><b>intervalStartTime</b>: {{intervalStartTime}}</div>{{/intervalStartTime}}
                    {{#minStatusChangeTime}}<div><b>minStatusChangeTime</b>: {{minStatusChangeTime}}</div>{{/minStatusChangeTime}}
                    {{#noLoadCost}}<div><b>noLoadCost</b>: {{noLoadCost}}</div>{{/noLoadCost}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#updateType}}<div><b>updateType</b>: {{updateType}}</div>{{/updateType}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#CommitmentClearing}}<div><b>CommitmentClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/CommitmentClearing}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CommitmentClearing) obj.CommitmentClearing_string = obj.CommitmentClearing.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CommitmentClearing_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Commitments_collapse" aria-expanded="true" aria-controls="Commitments_collapse" style="margin-left: 10px;">Commitments</a></legend>
                    <div id="Commitments_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='commitmentType'>commitmentType: </label><div class='col-sm-8'><input id='commitmentType' class='form-control' type='text'{{#commitmentType}} value='{{commitmentType}}'{{/commitmentType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='instructionCost'>instructionCost: </label><div class='col-sm-8'><input id='instructionCost' class='form-control' type='text'{{#instructionCost}} value='{{instructionCost}}'{{/instructionCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='instructionType'>instructionType: </label><div class='col-sm-8'><input id='instructionType' class='form-control' type='text'{{#instructionType}} value='{{instructionType}}'{{/instructionType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalEndTime'>intervalEndTime: </label><div class='col-sm-8'><input id='intervalEndTime' class='form-control' type='text'{{#intervalEndTime}} value='{{intervalEndTime}}'{{/intervalEndTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalStartTime'>intervalStartTime: </label><div class='col-sm-8'><input id='intervalStartTime' class='form-control' type='text'{{#intervalStartTime}} value='{{intervalStartTime}}'{{/intervalStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minStatusChangeTime'>minStatusChangeTime: </label><div class='col-sm-8'><input id='minStatusChangeTime' class='form-control' type='text'{{#minStatusChangeTime}} value='{{minStatusChangeTime}}'{{/minStatusChangeTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='noLoadCost'>noLoadCost: </label><div class='col-sm-8'><input id='noLoadCost' class='form-control' type='text'{{#noLoadCost}} value='{{noLoadCost}}'{{/noLoadCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateType'>updateType: </label><div class='col-sm-8'><input id='updateType' class='form-control' type='text'{{#updateType}} value='{{updateType}}'{{/updateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateUser'>updateUser: </label><div class='col-sm-8'><input id='updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='CommitmentClearing'>CommitmentClearing: </label><div class='col-sm-8'><input id='CommitmentClearing' class='form-control' type='text'{{#CommitmentClearing}} value='{{CommitmentClearing}}_string'{{/CommitmentClearing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Commitments" };
                super.submit (obj);
                temp = document.getElementById ("commitmentType").value; if ("" != temp) obj.commitmentType = temp;
                temp = document.getElementById ("instructionCost").value; if ("" != temp) obj.instructionCost = temp;
                temp = document.getElementById ("instructionType").value; if ("" != temp) obj.instructionType = temp;
                temp = document.getElementById ("intervalEndTime").value; if ("" != temp) obj.intervalEndTime = temp;
                temp = document.getElementById ("intervalStartTime").value; if ("" != temp) obj.intervalStartTime = temp;
                temp = document.getElementById ("minStatusChangeTime").value; if ("" != temp) obj.minStatusChangeTime = temp;
                temp = document.getElementById ("noLoadCost").value; if ("" != temp) obj.noLoadCost = temp;
                temp = document.getElementById ("updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;
                temp = document.getElementById ("updateType").value; if ("" != temp) obj.updateType = temp;
                temp = document.getElementById ("updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById ("CommitmentClearing").value; if ("" != temp) obj.CommitmentClearing = temp.split (",");
                temp = document.getElementById ("RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["CommitmentClearing", "CommitmentClearing", "1..*", "1..*"],
                        ["RegisteredResource", "RegisteredResource", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Mitigated bid results posted for a given settlement period.
         *
         */
        class MitigatedBid extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MitigatedBid;
                if (null == bucket)
                   cim_data.MitigatedBid = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MitigatedBid[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MitigatedBid";
                base.parse_attributes (/<cim:MitigatedBid.MitigatedBidClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MitigatedBidClearing", sub, context);
                base.parse_attribute (/<cim:MitigatedBid.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);
                var bucket = context.parsed.MitigatedBid;
                if (null == bucket)
                   context.parsed.MitigatedBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MitigatedBid", "MitigatedBidClearing", "MitigatedBidClearing", fields);
                base.export_attribute (obj, "MitigatedBid", "Bid", "Bid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MitigatedBid_collapse" aria-expanded="true" aria-controls="MitigatedBid_collapse" style="margin-left: 10px;">MitigatedBid</a></legend>
                    <div id="MitigatedBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#MitigatedBidClearing}}<div><b>MitigatedBidClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MitigatedBidClearing}}
                    {{#Bid}}<div><b>Bid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Bid}}&quot;);})'>{{Bid}}</a></div>{{/Bid}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MitigatedBidClearing) obj.MitigatedBidClearing_string = obj.MitigatedBidClearing.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MitigatedBidClearing_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MitigatedBid_collapse" aria-expanded="true" aria-controls="MitigatedBid_collapse" style="margin-left: 10px;">MitigatedBid</a></legend>
                    <div id="MitigatedBid_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MitigatedBidClearing'>MitigatedBidClearing: </label><div class='col-sm-8'><input id='MitigatedBidClearing' class='form-control' type='text'{{#MitigatedBidClearing}} value='{{MitigatedBidClearing}}_string'{{/MitigatedBidClearing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Bid'>Bid: </label><div class='col-sm-8'><input id='Bid' class='form-control' type='text'{{#Bid}} value='{{Bid}}'{{/Bid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MitigatedBid" };
                super.submit (obj);
                temp = document.getElementById ("MitigatedBidClearing").value; if ("" != temp) obj.MitigatedBidClearing = temp.split (",");
                temp = document.getElementById ("Bid").value; if ("" != temp) obj.Bid = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MitigatedBidClearing", "MitigatedBidClearing", "1..*", "0..*"],
                        ["Bid", "Bid", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Model of ex-post pricing of resources.
         *
         */
        class ExPostResource extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExPostResource;
                if (null == bucket)
                   cim_data.ExPostResource = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExPostResource[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "ExPostResource";
                base.parse_attributes (/<cim:ExPostResource.ExPostResourceResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExPostResourceResults", sub, context);
                var bucket = context.parsed.ExPostResource;
                if (null == bucket)
                   context.parsed.ExPostResource = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ExPostResource", "ExPostResourceResults", "ExPostResourceResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostResource_collapse" aria-expanded="true" aria-controls="ExPostResource_collapse" style="margin-left: 10px;">ExPostResource</a></legend>
                    <div id="ExPostResource_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#ExPostResourceResults}}<div><b>ExPostResourceResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ExPostResourceResults}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ExPostResourceResults) obj.ExPostResourceResults_string = obj.ExPostResourceResults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ExPostResourceResults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostResource_collapse" aria-expanded="true" aria-controls="ExPostResource_collapse" style="margin-left: 10px;">ExPostResource</a></legend>
                    <div id="ExPostResource_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "ExPostResource" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ExPostResourceResults", "ExPostResourceResults", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * Model of clearing result of the market run at the market level.
         *
         * Identifies interval
         *
         */
        class GeneralClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GeneralClearing;
                if (null == bucket)
                   cim_data.GeneralClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GeneralClearing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "GeneralClearing";
                base.parse_attributes (/<cim:GeneralClearing.GeneralClearingResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneralClearingResults", sub, context);
                var bucket = context.parsed.GeneralClearing;
                if (null == bucket)
                   context.parsed.GeneralClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "GeneralClearing", "GeneralClearingResults", "GeneralClearingResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeneralClearing_collapse" aria-expanded="true" aria-controls="GeneralClearing_collapse" style="margin-left: 10px;">GeneralClearing</a></legend>
                    <div id="GeneralClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#GeneralClearingResults}}<div><b>GeneralClearingResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/GeneralClearingResults}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.GeneralClearingResults) obj.GeneralClearingResults_string = obj.GeneralClearingResults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.GeneralClearingResults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#GeneralClearing_collapse" aria-expanded="true" aria-controls="GeneralClearing_collapse" style="margin-left: 10px;">GeneralClearing</a></legend>
                    <div id="GeneralClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "GeneralClearing" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["GeneralClearingResults", "GeneralClearingResults", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Pass Through Bill is used for:
         * 1)Two sided charge transactions with or without ISO involvement (hence the ?pass thru?)
         * 2) Specific direct charges or payments that are calculated outside or provided directly to settlements
         *
         * 3) Specific charge bill determinants that are externally supplied and used in charge calculations
         *
         */
        class PassThroughBill extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PassThroughBill;
                if (null == bucket)
                   cim_data.PassThroughBill = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PassThroughBill[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "PassThroughBill";
                base.parse_element (/<cim:PassThroughBill.adjustedAmount>([\s\S]*?)<\/cim:PassThroughBill.adjustedAmount>/g, obj, "adjustedAmount", base.to_string, sub, context);
                base.parse_element (/<cim:PassThroughBill.amount>([\s\S]*?)<\/cim:PassThroughBill.amount>/g, obj, "amount", base.to_string, sub, context);
                base.parse_element (/<cim:PassThroughBill.billedTo>([\s\S]*?)<\/cim:PassThroughBill.billedTo>/g, obj, "billedTo", base.to_string, sub, context);
                base.parse_element (/<cim:PassThroughBill.billEnd>([\s\S]*?)<\/cim:PassThroughBill.billEnd>/g, obj, "billEnd", base.to_datetime, sub, context);
                base.parse_element (/<cim:PassThroughBill.billRunType>([\s\S]*?)<\/cim:PassThroughBill.billRunType>/g, obj, "billRunType", base.to_string, sub, context);
                base.parse_element (/<cim:PassThroughBill.billStart>([\s\S]*?)<\/cim:PassThroughBill.billStart>/g, obj, "billStart", base.to_datetime, sub, context);
                base.parse_element (/<cim:PassThroughBill.effectiveDate>([\s\S]*?)<\/cim:PassThroughBill.effectiveDate>/g, obj, "effectiveDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:PassThroughBill.isDisputed>([\s\S]*?)<\/cim:PassThroughBill.isDisputed>/g, obj, "isDisputed", base.to_boolean, sub, context);
                base.parse_element (/<cim:PassThroughBill.isProfiled>([\s\S]*?)<\/cim:PassThroughBill.isProfiled>/g, obj, "isProfiled", base.to_boolean, sub, context);
                base.parse_element (/<cim:PassThroughBill.paidTo>([\s\S]*?)<\/cim:PassThroughBill.paidTo>/g, obj, "paidTo", base.to_string, sub, context);
                base.parse_element (/<cim:PassThroughBill.previousEnd>([\s\S]*?)<\/cim:PassThroughBill.previousEnd>/g, obj, "previousEnd", base.to_datetime, sub, context);
                base.parse_element (/<cim:PassThroughBill.previousStart>([\s\S]*?)<\/cim:PassThroughBill.previousStart>/g, obj, "previousStart", base.to_datetime, sub, context);
                base.parse_element (/<cim:PassThroughBill.price>([\s\S]*?)<\/cim:PassThroughBill.price>/g, obj, "price", base.to_string, sub, context);
                base.parse_element (/<cim:PassThroughBill.productCode>([\s\S]*?)<\/cim:PassThroughBill.productCode>/g, obj, "productCode", base.to_string, sub, context);
                base.parse_element (/<cim:PassThroughBill.providedBy>([\s\S]*?)<\/cim:PassThroughBill.providedBy>/g, obj, "providedBy", base.to_string, sub, context);
                base.parse_element (/<cim:PassThroughBill.quantity>([\s\S]*?)<\/cim:PassThroughBill.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_element (/<cim:PassThroughBill.serviceEnd>([\s\S]*?)<\/cim:PassThroughBill.serviceEnd>/g, obj, "serviceEnd", base.to_datetime, sub, context);
                base.parse_element (/<cim:PassThroughBill.serviceStart>([\s\S]*?)<\/cim:PassThroughBill.serviceStart>/g, obj, "serviceStart", base.to_datetime, sub, context);
                base.parse_element (/<cim:PassThroughBill.soldTo>([\s\S]*?)<\/cim:PassThroughBill.soldTo>/g, obj, "soldTo", base.to_string, sub, context);
                base.parse_element (/<cim:PassThroughBill.taxAmount>([\s\S]*?)<\/cim:PassThroughBill.taxAmount>/g, obj, "taxAmount", base.to_string, sub, context);
                base.parse_element (/<cim:PassThroughBill.timeZone>([\s\S]*?)<\/cim:PassThroughBill.timeZone>/g, obj, "timeZone", base.to_string, sub, context);
                base.parse_element (/<cim:PassThroughBill.tradeDate>([\s\S]*?)<\/cim:PassThroughBill.tradeDate>/g, obj, "tradeDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:PassThroughBill.transactionDate>([\s\S]*?)<\/cim:PassThroughBill.transactionDate>/g, obj, "transactionDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:PassThroughBill.transactionType>([\s\S]*?)<\/cim:PassThroughBill.transactionType>/g, obj, "transactionType", base.to_string, sub, context);
                base.parse_attributes (/<cim:PassThroughBill.MktUserAttribute\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktUserAttribute", sub, context);
                base.parse_attributes (/<cim:PassThroughBill.ChargeProfiles\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeProfiles", sub, context);
                base.parse_attribute (/<cim:PassThroughBill.MarketStatementLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketStatementLineItem", sub, context);
                var bucket = context.parsed.PassThroughBill;
                if (null == bucket)
                   context.parsed.PassThroughBill = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "PassThroughBill", "adjustedAmount", "adjustedAmount",  base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "amount", "amount",  base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "billedTo", "billedTo",  base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "billEnd", "billEnd",  base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "billRunType", "billRunType",  base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "billStart", "billStart",  base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "effectiveDate", "effectiveDate",  base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "isDisputed", "isDisputed",  base.from_boolean, fields);
                base.export_element (obj, "PassThroughBill", "isProfiled", "isProfiled",  base.from_boolean, fields);
                base.export_element (obj, "PassThroughBill", "paidTo", "paidTo",  base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "previousEnd", "previousEnd",  base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "previousStart", "previousStart",  base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "price", "price",  base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "productCode", "productCode",  base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "providedBy", "providedBy",  base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "quantity", "quantity",  base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "serviceEnd", "serviceEnd",  base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "serviceStart", "serviceStart",  base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "soldTo", "soldTo",  base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "taxAmount", "taxAmount",  base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "timeZone", "timeZone",  base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "tradeDate", "tradeDate",  base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "transactionDate", "transactionDate",  base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "transactionType", "transactionType",  base.from_string, fields);
                base.export_attributes (obj, "PassThroughBill", "MktUserAttribute", "MktUserAttribute", fields);
                base.export_attributes (obj, "PassThroughBill", "ChargeProfiles", "ChargeProfiles", fields);
                base.export_attribute (obj, "PassThroughBill", "MarketStatementLineItem", "MarketStatementLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PassThroughBill_collapse" aria-expanded="true" aria-controls="PassThroughBill_collapse" style="margin-left: 10px;">PassThroughBill</a></legend>
                    <div id="PassThroughBill_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#adjustedAmount}}<div><b>adjustedAmount</b>: {{adjustedAmount}}</div>{{/adjustedAmount}}
                    {{#amount}}<div><b>amount</b>: {{amount}}</div>{{/amount}}
                    {{#billedTo}}<div><b>billedTo</b>: {{billedTo}}</div>{{/billedTo}}
                    {{#billEnd}}<div><b>billEnd</b>: {{billEnd}}</div>{{/billEnd}}
                    {{#billRunType}}<div><b>billRunType</b>: {{billRunType}}</div>{{/billRunType}}
                    {{#billStart}}<div><b>billStart</b>: {{billStart}}</div>{{/billStart}}
                    {{#effectiveDate}}<div><b>effectiveDate</b>: {{effectiveDate}}</div>{{/effectiveDate}}
                    {{#isDisputed}}<div><b>isDisputed</b>: {{isDisputed}}</div>{{/isDisputed}}
                    {{#isProfiled}}<div><b>isProfiled</b>: {{isProfiled}}</div>{{/isProfiled}}
                    {{#paidTo}}<div><b>paidTo</b>: {{paidTo}}</div>{{/paidTo}}
                    {{#previousEnd}}<div><b>previousEnd</b>: {{previousEnd}}</div>{{/previousEnd}}
                    {{#previousStart}}<div><b>previousStart</b>: {{previousStart}}</div>{{/previousStart}}
                    {{#price}}<div><b>price</b>: {{price}}</div>{{/price}}
                    {{#productCode}}<div><b>productCode</b>: {{productCode}}</div>{{/productCode}}
                    {{#providedBy}}<div><b>providedBy</b>: {{providedBy}}</div>{{/providedBy}}
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#serviceEnd}}<div><b>serviceEnd</b>: {{serviceEnd}}</div>{{/serviceEnd}}
                    {{#serviceStart}}<div><b>serviceStart</b>: {{serviceStart}}</div>{{/serviceStart}}
                    {{#soldTo}}<div><b>soldTo</b>: {{soldTo}}</div>{{/soldTo}}
                    {{#taxAmount}}<div><b>taxAmount</b>: {{taxAmount}}</div>{{/taxAmount}}
                    {{#timeZone}}<div><b>timeZone</b>: {{timeZone}}</div>{{/timeZone}}
                    {{#tradeDate}}<div><b>tradeDate</b>: {{tradeDate}}</div>{{/tradeDate}}
                    {{#transactionDate}}<div><b>transactionDate</b>: {{transactionDate}}</div>{{/transactionDate}}
                    {{#transactionType}}<div><b>transactionType</b>: {{transactionType}}</div>{{/transactionType}}
                    {{#MktUserAttribute}}<div><b>MktUserAttribute</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktUserAttribute}}
                    {{#ChargeProfiles}}<div><b>ChargeProfiles</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChargeProfiles}}
                    {{#MarketStatementLineItem}}<div><b>MarketStatementLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketStatementLineItem}}&quot;);})'>{{MarketStatementLineItem}}</a></div>{{/MarketStatementLineItem}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MktUserAttribute) obj.MktUserAttribute_string = obj.MktUserAttribute.join ();
                if (obj.ChargeProfiles) obj.ChargeProfiles_string = obj.ChargeProfiles.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MktUserAttribute_string;
                delete obj.ChargeProfiles_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PassThroughBill_collapse" aria-expanded="true" aria-controls="PassThroughBill_collapse" style="margin-left: 10px;">PassThroughBill</a></legend>
                    <div id="PassThroughBill_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='adjustedAmount'>adjustedAmount: </label><div class='col-sm-8'><input id='adjustedAmount' class='form-control' type='text'{{#adjustedAmount}} value='{{adjustedAmount}}'{{/adjustedAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='amount'>amount: </label><div class='col-sm-8'><input id='amount' class='form-control' type='text'{{#amount}} value='{{amount}}'{{/amount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='billedTo'>billedTo: </label><div class='col-sm-8'><input id='billedTo' class='form-control' type='text'{{#billedTo}} value='{{billedTo}}'{{/billedTo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='billEnd'>billEnd: </label><div class='col-sm-8'><input id='billEnd' class='form-control' type='text'{{#billEnd}} value='{{billEnd}}'{{/billEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='billRunType'>billRunType: </label><div class='col-sm-8'><input id='billRunType' class='form-control' type='text'{{#billRunType}} value='{{billRunType}}'{{/billRunType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='billStart'>billStart: </label><div class='col-sm-8'><input id='billStart' class='form-control' type='text'{{#billStart}} value='{{billStart}}'{{/billStart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='effectiveDate'>effectiveDate: </label><div class='col-sm-8'><input id='effectiveDate' class='form-control' type='text'{{#effectiveDate}} value='{{effectiveDate}}'{{/effectiveDate}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isDisputed'>isDisputed: </label><div class='col-sm-8'><input id='isDisputed' class='form-check-input' type='checkbox'{{#isDisputed}} checked{{/isDisputed}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='isProfiled'>isProfiled: </label><div class='col-sm-8'><input id='isProfiled' class='form-check-input' type='checkbox'{{#isProfiled}} checked{{/isProfiled}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='paidTo'>paidTo: </label><div class='col-sm-8'><input id='paidTo' class='form-control' type='text'{{#paidTo}} value='{{paidTo}}'{{/paidTo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='previousEnd'>previousEnd: </label><div class='col-sm-8'><input id='previousEnd' class='form-control' type='text'{{#previousEnd}} value='{{previousEnd}}'{{/previousEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='previousStart'>previousStart: </label><div class='col-sm-8'><input id='previousStart' class='form-control' type='text'{{#previousStart}} value='{{previousStart}}'{{/previousStart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='price'>price: </label><div class='col-sm-8'><input id='price' class='form-control' type='text'{{#price}} value='{{price}}'{{/price}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='productCode'>productCode: </label><div class='col-sm-8'><input id='productCode' class='form-control' type='text'{{#productCode}} value='{{productCode}}'{{/productCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='providedBy'>providedBy: </label><div class='col-sm-8'><input id='providedBy' class='form-control' type='text'{{#providedBy}} value='{{providedBy}}'{{/providedBy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='quantity'>quantity: </label><div class='col-sm-8'><input id='quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='serviceEnd'>serviceEnd: </label><div class='col-sm-8'><input id='serviceEnd' class='form-control' type='text'{{#serviceEnd}} value='{{serviceEnd}}'{{/serviceEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='serviceStart'>serviceStart: </label><div class='col-sm-8'><input id='serviceStart' class='form-control' type='text'{{#serviceStart}} value='{{serviceStart}}'{{/serviceStart}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='soldTo'>soldTo: </label><div class='col-sm-8'><input id='soldTo' class='form-control' type='text'{{#soldTo}} value='{{soldTo}}'{{/soldTo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='taxAmount'>taxAmount: </label><div class='col-sm-8'><input id='taxAmount' class='form-control' type='text'{{#taxAmount}} value='{{taxAmount}}'{{/taxAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeZone'>timeZone: </label><div class='col-sm-8'><input id='timeZone' class='form-control' type='text'{{#timeZone}} value='{{timeZone}}'{{/timeZone}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tradeDate'>tradeDate: </label><div class='col-sm-8'><input id='tradeDate' class='form-control' type='text'{{#tradeDate}} value='{{tradeDate}}'{{/tradeDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='transactionDate'>transactionDate: </label><div class='col-sm-8'><input id='transactionDate' class='form-control' type='text'{{#transactionDate}} value='{{transactionDate}}'{{/transactionDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='transactionType'>transactionType: </label><div class='col-sm-8'><input id='transactionType' class='form-control' type='text'{{#transactionType}} value='{{transactionType}}'{{/transactionType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktUserAttribute'>MktUserAttribute: </label><div class='col-sm-8'><input id='MktUserAttribute' class='form-control' type='text'{{#MktUserAttribute}} value='{{MktUserAttribute}}_string'{{/MktUserAttribute}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketStatementLineItem'>MarketStatementLineItem: </label><div class='col-sm-8'><input id='MarketStatementLineItem' class='form-control' type='text'{{#MarketStatementLineItem}} value='{{MarketStatementLineItem}}'{{/MarketStatementLineItem}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "PassThroughBill" };
                super.submit (obj);
                temp = document.getElementById ("adjustedAmount").value; if ("" != temp) obj.adjustedAmount = temp;
                temp = document.getElementById ("amount").value; if ("" != temp) obj.amount = temp;
                temp = document.getElementById ("billedTo").value; if ("" != temp) obj.billedTo = temp;
                temp = document.getElementById ("billEnd").value; if ("" != temp) obj.billEnd = temp;
                temp = document.getElementById ("billRunType").value; if ("" != temp) obj.billRunType = temp;
                temp = document.getElementById ("billStart").value; if ("" != temp) obj.billStart = temp;
                temp = document.getElementById ("effectiveDate").value; if ("" != temp) obj.effectiveDate = temp;
                temp = document.getElementById ("isDisputed").checked; if (temp) obj.isDisputed = true;
                temp = document.getElementById ("isProfiled").checked; if (temp) obj.isProfiled = true;
                temp = document.getElementById ("paidTo").value; if ("" != temp) obj.paidTo = temp;
                temp = document.getElementById ("previousEnd").value; if ("" != temp) obj.previousEnd = temp;
                temp = document.getElementById ("previousStart").value; if ("" != temp) obj.previousStart = temp;
                temp = document.getElementById ("price").value; if ("" != temp) obj.price = temp;
                temp = document.getElementById ("productCode").value; if ("" != temp) obj.productCode = temp;
                temp = document.getElementById ("providedBy").value; if ("" != temp) obj.providedBy = temp;
                temp = document.getElementById ("quantity").value; if ("" != temp) obj.quantity = temp;
                temp = document.getElementById ("serviceEnd").value; if ("" != temp) obj.serviceEnd = temp;
                temp = document.getElementById ("serviceStart").value; if ("" != temp) obj.serviceStart = temp;
                temp = document.getElementById ("soldTo").value; if ("" != temp) obj.soldTo = temp;
                temp = document.getElementById ("taxAmount").value; if ("" != temp) obj.taxAmount = temp;
                temp = document.getElementById ("timeZone").value; if ("" != temp) obj.timeZone = temp;
                temp = document.getElementById ("tradeDate").value; if ("" != temp) obj.tradeDate = temp;
                temp = document.getElementById ("transactionDate").value; if ("" != temp) obj.transactionDate = temp;
                temp = document.getElementById ("transactionType").value; if ("" != temp) obj.transactionType = temp;
                temp = document.getElementById ("MktUserAttribute").value; if ("" != temp) obj.MktUserAttribute = temp.split (",");
                temp = document.getElementById ("MarketStatementLineItem").value; if ("" != temp) obj.MarketStatementLineItem = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MktUserAttribute", "MktUserAttribute", "0..*", "0..*"],
                        ["ChargeProfiles", "ChargeProfile", "0..*", "0..1"],
                        ["MarketStatementLineItem", "MarketStatementLineItem", "0..1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Model of ex-post pricing of resources contains components of LMPs: energy, congestion, loss.
         *
         * Resource based.
         *
         */
        class ExPostResourceResults extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExPostResourceResults;
                if (null == bucket)
                   cim_data.ExPostResourceResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExPostResourceResults[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ExPostResourceResults";
                base.parse_element (/<cim:ExPostResourceResults.congestionLMP>([\s\S]*?)<\/cim:ExPostResourceResults.congestionLMP>/g, obj, "congestionLMP", base.to_float, sub, context);
                base.parse_element (/<cim:ExPostResourceResults.desiredMW>([\s\S]*?)<\/cim:ExPostResourceResults.desiredMW>/g, obj, "desiredMW", base.to_float, sub, context);
                base.parse_element (/<cim:ExPostResourceResults.dispatchRate>([\s\S]*?)<\/cim:ExPostResourceResults.dispatchRate>/g, obj, "dispatchRate", base.to_float, sub, context);
                base.parse_element (/<cim:ExPostResourceResults.lmp>([\s\S]*?)<\/cim:ExPostResourceResults.lmp>/g, obj, "lmp", base.to_float, sub, context);
                base.parse_element (/<cim:ExPostResourceResults.lossLMP>([\s\S]*?)<\/cim:ExPostResourceResults.lossLMP>/g, obj, "lossLMP", base.to_float, sub, context);
                base.parse_element (/<cim:ExPostResourceResults.maxEconomicMW>([\s\S]*?)<\/cim:ExPostResourceResults.maxEconomicMW>/g, obj, "maxEconomicMW", base.to_float, sub, context);
                base.parse_element (/<cim:ExPostResourceResults.minEconomicMW>([\s\S]*?)<\/cim:ExPostResourceResults.minEconomicMW>/g, obj, "minEconomicMW", base.to_float, sub, context);
                base.parse_element (/<cim:ExPostResourceResults.resourceMW>([\s\S]*?)<\/cim:ExPostResourceResults.resourceMW>/g, obj, "resourceMW", base.to_float, sub, context);
                base.parse_element (/<cim:ExPostResourceResults.status>([\s\S]*?)<\/cim:ExPostResourceResults.status>/g, obj, "status", base.to_string, sub, context);
                base.parse_attribute (/<cim:ExPostResourceResults.ExPostResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExPostResource", sub, context);
                base.parse_attribute (/<cim:ExPostResourceResults.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                var bucket = context.parsed.ExPostResourceResults;
                if (null == bucket)
                   context.parsed.ExPostResourceResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ExPostResourceResults", "congestionLMP", "congestionLMP",  base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "desiredMW", "desiredMW",  base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "dispatchRate", "dispatchRate",  base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "lmp", "lmp",  base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "lossLMP", "lossLMP",  base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "maxEconomicMW", "maxEconomicMW",  base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "minEconomicMW", "minEconomicMW",  base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "resourceMW", "resourceMW",  base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "status", "status",  base.from_string, fields);
                base.export_attribute (obj, "ExPostResourceResults", "ExPostResource", "ExPostResource", fields);
                base.export_attribute (obj, "ExPostResourceResults", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostResourceResults_collapse" aria-expanded="true" aria-controls="ExPostResourceResults_collapse" style="margin-left: 10px;">ExPostResourceResults</a></legend>
                    <div id="ExPostResourceResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#congestionLMP}}<div><b>congestionLMP</b>: {{congestionLMP}}</div>{{/congestionLMP}}
                    {{#desiredMW}}<div><b>desiredMW</b>: {{desiredMW}}</div>{{/desiredMW}}
                    {{#dispatchRate}}<div><b>dispatchRate</b>: {{dispatchRate}}</div>{{/dispatchRate}}
                    {{#lmp}}<div><b>lmp</b>: {{lmp}}</div>{{/lmp}}
                    {{#lossLMP}}<div><b>lossLMP</b>: {{lossLMP}}</div>{{/lossLMP}}
                    {{#maxEconomicMW}}<div><b>maxEconomicMW</b>: {{maxEconomicMW}}</div>{{/maxEconomicMW}}
                    {{#minEconomicMW}}<div><b>minEconomicMW</b>: {{minEconomicMW}}</div>{{/minEconomicMW}}
                    {{#resourceMW}}<div><b>resourceMW</b>: {{resourceMW}}</div>{{/resourceMW}}
                    {{#status}}<div><b>status</b>: {{status}}</div>{{/status}}
                    {{#ExPostResource}}<div><b>ExPostResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ExPostResource}}&quot;);})'>{{ExPostResource}}</a></div>{{/ExPostResource}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostResourceResults_collapse" aria-expanded="true" aria-controls="ExPostResourceResults_collapse" style="margin-left: 10px;">ExPostResourceResults</a></legend>
                    <div id="ExPostResourceResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='congestionLMP'>congestionLMP: </label><div class='col-sm-8'><input id='congestionLMP' class='form-control' type='text'{{#congestionLMP}} value='{{congestionLMP}}'{{/congestionLMP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='desiredMW'>desiredMW: </label><div class='col-sm-8'><input id='desiredMW' class='form-control' type='text'{{#desiredMW}} value='{{desiredMW}}'{{/desiredMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dispatchRate'>dispatchRate: </label><div class='col-sm-8'><input id='dispatchRate' class='form-control' type='text'{{#dispatchRate}} value='{{dispatchRate}}'{{/dispatchRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lmp'>lmp: </label><div class='col-sm-8'><input id='lmp' class='form-control' type='text'{{#lmp}} value='{{lmp}}'{{/lmp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lossLMP'>lossLMP: </label><div class='col-sm-8'><input id='lossLMP' class='form-control' type='text'{{#lossLMP}} value='{{lossLMP}}'{{/lossLMP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxEconomicMW'>maxEconomicMW: </label><div class='col-sm-8'><input id='maxEconomicMW' class='form-control' type='text'{{#maxEconomicMW}} value='{{maxEconomicMW}}'{{/maxEconomicMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minEconomicMW'>minEconomicMW: </label><div class='col-sm-8'><input id='minEconomicMW' class='form-control' type='text'{{#minEconomicMW}} value='{{minEconomicMW}}'{{/minEconomicMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='resourceMW'>resourceMW: </label><div class='col-sm-8'><input id='resourceMW' class='form-control' type='text'{{#resourceMW}} value='{{resourceMW}}'{{/resourceMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='status'>status: </label><div class='col-sm-8'><input id='status' class='form-control' type='text'{{#status}} value='{{status}}'{{/status}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ExPostResource'>ExPostResource: </label><div class='col-sm-8'><input id='ExPostResource' class='form-control' type='text'{{#ExPostResource}} value='{{ExPostResource}}'{{/ExPostResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ExPostResourceResults" };
                super.submit (obj);
                temp = document.getElementById ("congestionLMP").value; if ("" != temp) obj.congestionLMP = temp;
                temp = document.getElementById ("desiredMW").value; if ("" != temp) obj.desiredMW = temp;
                temp = document.getElementById ("dispatchRate").value; if ("" != temp) obj.dispatchRate = temp;
                temp = document.getElementById ("lmp").value; if ("" != temp) obj.lmp = temp;
                temp = document.getElementById ("lossLMP").value; if ("" != temp) obj.lossLMP = temp;
                temp = document.getElementById ("maxEconomicMW").value; if ("" != temp) obj.maxEconomicMW = temp;
                temp = document.getElementById ("minEconomicMW").value; if ("" != temp) obj.minEconomicMW = temp;
                temp = document.getElementById ("resourceMW").value; if ("" != temp) obj.resourceMW = temp;
                temp = document.getElementById ("status").value; if ("" != temp) obj.status = temp;
                temp = document.getElementById ("ExPostResource").value; if ("" != temp) obj.ExPostResource = temp;
                temp = document.getElementById ("RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ExPostResource", "ExPostResource", "1", "0..*"],
                        ["RegisteredResource", "RegisteredResource", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Contains the intervals relavent for the associated TransactionBidResults.
         *
         * For example, Day Ahead cleared results for the transaction bids for each interval of the market day.
         *
         */
        class TransactionBidClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TransactionBidClearing;
                if (null == bucket)
                   cim_data.TransactionBidClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransactionBidClearing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "TransactionBidClearing";
                base.parse_attributes (/<cim:TransactionBidClearing.TransactionBidResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransactionBidResults", sub, context);
                var bucket = context.parsed.TransactionBidClearing;
                if (null == bucket)
                   context.parsed.TransactionBidClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "TransactionBidClearing", "TransactionBidResults", "TransactionBidResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransactionBidClearing_collapse" aria-expanded="true" aria-controls="TransactionBidClearing_collapse" style="margin-left: 10px;">TransactionBidClearing</a></legend>
                    <div id="TransactionBidClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#TransactionBidResults}}<div><b>TransactionBidResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TransactionBidResults}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TransactionBidResults) obj.TransactionBidResults_string = obj.TransactionBidResults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TransactionBidResults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TransactionBidClearing_collapse" aria-expanded="true" aria-controls="TransactionBidClearing_collapse" style="margin-left: 10px;">TransactionBidClearing</a></legend>
                    <div id="TransactionBidClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "TransactionBidClearing" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TransactionBidResults", "TransactionBidResults", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * Specifies a settlement run.
         *
         */
        class Settlement extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Settlement;
                if (null == bucket)
                   cim_data.Settlement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Settlement[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Settlement";
                base.parse_element (/<cim:Settlement.tradeDate>([\s\S]*?)<\/cim:Settlement.tradeDate>/g, obj, "tradeDate", base.to_datetime, sub, context);
                base.parse_attributes (/<cim:Settlement.MajorChargeGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MajorChargeGroup", sub, context);
                base.parse_attributes (/<cim:Settlement.MarketInvoiceLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketInvoiceLineItem", sub, context);
                base.parse_attributes (/<cim:Settlement.MarketLedgerEntry\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketLedgerEntry", sub, context);
                base.parse_attribute (/<cim:Settlement.EnergyMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyMarket", sub, context);
                var bucket = context.parsed.Settlement;
                if (null == bucket)
                   context.parsed.Settlement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Settlement", "tradeDate", "tradeDate",  base.from_datetime, fields);
                base.export_attributes (obj, "Settlement", "MajorChargeGroup", "MajorChargeGroup", fields);
                base.export_attributes (obj, "Settlement", "MarketInvoiceLineItem", "MarketInvoiceLineItem", fields);
                base.export_attributes (obj, "Settlement", "MarketLedgerEntry", "MarketLedgerEntry", fields);
                base.export_attribute (obj, "Settlement", "EnergyMarket", "EnergyMarket", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Settlement_collapse" aria-expanded="true" aria-controls="Settlement_collapse" style="margin-left: 10px;">Settlement</a></legend>
                    <div id="Settlement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#tradeDate}}<div><b>tradeDate</b>: {{tradeDate}}</div>{{/tradeDate}}
                    {{#MajorChargeGroup}}<div><b>MajorChargeGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MajorChargeGroup}}
                    {{#MarketInvoiceLineItem}}<div><b>MarketInvoiceLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketInvoiceLineItem}}
                    {{#MarketLedgerEntry}}<div><b>MarketLedgerEntry</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MarketLedgerEntry}}
                    {{#EnergyMarket}}<div><b>EnergyMarket</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyMarket}}&quot;);})'>{{EnergyMarket}}</a></div>{{/EnergyMarket}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MajorChargeGroup) obj.MajorChargeGroup_string = obj.MajorChargeGroup.join ();
                if (obj.MarketInvoiceLineItem) obj.MarketInvoiceLineItem_string = obj.MarketInvoiceLineItem.join ();
                if (obj.MarketLedgerEntry) obj.MarketLedgerEntry_string = obj.MarketLedgerEntry.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MajorChargeGroup_string;
                delete obj.MarketInvoiceLineItem_string;
                delete obj.MarketLedgerEntry_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Settlement_collapse" aria-expanded="true" aria-controls="Settlement_collapse" style="margin-left: 10px;">Settlement</a></legend>
                    <div id="Settlement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tradeDate'>tradeDate: </label><div class='col-sm-8'><input id='tradeDate' class='form-control' type='text'{{#tradeDate}} value='{{tradeDate}}'{{/tradeDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MajorChargeGroup'>MajorChargeGroup: </label><div class='col-sm-8'><input id='MajorChargeGroup' class='form-control' type='text'{{#MajorChargeGroup}} value='{{MajorChargeGroup}}_string'{{/MajorChargeGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketInvoiceLineItem'>MarketInvoiceLineItem: </label><div class='col-sm-8'><input id='MarketInvoiceLineItem' class='form-control' type='text'{{#MarketInvoiceLineItem}} value='{{MarketInvoiceLineItem}}_string'{{/MarketInvoiceLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketLedgerEntry'>MarketLedgerEntry: </label><div class='col-sm-8'><input id='MarketLedgerEntry' class='form-control' type='text'{{#MarketLedgerEntry}} value='{{MarketLedgerEntry}}_string'{{/MarketLedgerEntry}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='EnergyMarket'>EnergyMarket: </label><div class='col-sm-8'><input id='EnergyMarket' class='form-control' type='text'{{#EnergyMarket}} value='{{EnergyMarket}}'{{/EnergyMarket}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Settlement" };
                super.submit (obj);
                temp = document.getElementById ("tradeDate").value; if ("" != temp) obj.tradeDate = temp;
                temp = document.getElementById ("MajorChargeGroup").value; if ("" != temp) obj.MajorChargeGroup = temp.split (",");
                temp = document.getElementById ("MarketInvoiceLineItem").value; if ("" != temp) obj.MarketInvoiceLineItem = temp.split (",");
                temp = document.getElementById ("MarketLedgerEntry").value; if ("" != temp) obj.MarketLedgerEntry = temp.split (",");
                temp = document.getElementById ("EnergyMarket").value; if ("" != temp) obj.EnergyMarket = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MajorChargeGroup", "MajorChargeGroup", "1..*", "0..*"],
                        ["MarketInvoiceLineItem", "MarketInvoiceLineItem", "0..*", "0..*"],
                        ["MarketLedgerEntry", "MarketLedgerEntry", "0..*", "0..*"],
                        ["EnergyMarket", "EnergyMarket", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Model of ex-post pricing of nodes.
         *
         * Includes LMP information, pnode based.
         *
         */
        class ExPostPricingResults extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExPostPricingResults;
                if (null == bucket)
                   cim_data.ExPostPricingResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExPostPricingResults[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ExPostPricingResults";
                base.parse_element (/<cim:ExPostPricingResults.congestLMP>([\s\S]*?)<\/cim:ExPostPricingResults.congestLMP>/g, obj, "congestLMP", base.to_float, sub, context);
                base.parse_element (/<cim:ExPostPricingResults.lmp>([\s\S]*?)<\/cim:ExPostPricingResults.lmp>/g, obj, "lmp", base.to_float, sub, context);
                base.parse_element (/<cim:ExPostPricingResults.lossLMP>([\s\S]*?)<\/cim:ExPostPricingResults.lossLMP>/g, obj, "lossLMP", base.to_float, sub, context);
                base.parse_attribute (/<cim:ExPostPricingResults.ExPostPricing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExPostPricing", sub, context);
                base.parse_attribute (/<cim:ExPostPricingResults.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                var bucket = context.parsed.ExPostPricingResults;
                if (null == bucket)
                   context.parsed.ExPostPricingResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ExPostPricingResults", "congestLMP", "congestLMP",  base.from_float, fields);
                base.export_element (obj, "ExPostPricingResults", "lmp", "lmp",  base.from_float, fields);
                base.export_element (obj, "ExPostPricingResults", "lossLMP", "lossLMP",  base.from_float, fields);
                base.export_attribute (obj, "ExPostPricingResults", "ExPostPricing", "ExPostPricing", fields);
                base.export_attribute (obj, "ExPostPricingResults", "Pnode", "Pnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostPricingResults_collapse" aria-expanded="true" aria-controls="ExPostPricingResults_collapse" style="margin-left: 10px;">ExPostPricingResults</a></legend>
                    <div id="ExPostPricingResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#congestLMP}}<div><b>congestLMP</b>: {{congestLMP}}</div>{{/congestLMP}}
                    {{#lmp}}<div><b>lmp</b>: {{lmp}}</div>{{/lmp}}
                    {{#lossLMP}}<div><b>lossLMP</b>: {{lossLMP}}</div>{{/lossLMP}}
                    {{#ExPostPricing}}<div><b>ExPostPricing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ExPostPricing}}&quot;);})'>{{ExPostPricing}}</a></div>{{/ExPostPricing}}
                    {{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Pnode}}&quot;);})'>{{Pnode}}</a></div>{{/Pnode}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostPricingResults_collapse" aria-expanded="true" aria-controls="ExPostPricingResults_collapse" style="margin-left: 10px;">ExPostPricingResults</a></legend>
                    <div id="ExPostPricingResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='congestLMP'>congestLMP: </label><div class='col-sm-8'><input id='congestLMP' class='form-control' type='text'{{#congestLMP}} value='{{congestLMP}}'{{/congestLMP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lmp'>lmp: </label><div class='col-sm-8'><input id='lmp' class='form-control' type='text'{{#lmp}} value='{{lmp}}'{{/lmp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lossLMP'>lossLMP: </label><div class='col-sm-8'><input id='lossLMP' class='form-control' type='text'{{#lossLMP}} value='{{lossLMP}}'{{/lossLMP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ExPostPricing'>ExPostPricing: </label><div class='col-sm-8'><input id='ExPostPricing' class='form-control' type='text'{{#ExPostPricing}} value='{{ExPostPricing}}'{{/ExPostPricing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Pnode'>Pnode: </label><div class='col-sm-8'><input id='Pnode' class='form-control' type='text'{{#Pnode}} value='{{Pnode}}'{{/Pnode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ExPostPricingResults" };
                super.submit (obj);
                temp = document.getElementById ("congestLMP").value; if ("" != temp) obj.congestLMP = temp;
                temp = document.getElementById ("lmp").value; if ("" != temp) obj.lmp = temp;
                temp = document.getElementById ("lossLMP").value; if ("" != temp) obj.lossLMP = temp;
                temp = document.getElementById ("ExPostPricing").value; if ("" != temp) obj.ExPostPricing = temp;
                temp = document.getElementById ("Pnode").value; if ("" != temp) obj.Pnode = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ExPostPricing", "ExPostPricing", "1", "0..*"],
                        ["Pnode", "Pnode", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Provides the necessary information (on a resource basis) to capture the Startup/Shutdown instruction results.
         *
         * This information is relevant to the DA Market (RUC only) as well as the RT Market (HASP, Pre-dispatch, and Interval).
         *
         */
        class Instructions extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Instructions;
                if (null == bucket)
                   cim_data.Instructions = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Instructions[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Instructions";
                base.parse_element (/<cim:Instructions.bindingDOT>([\s\S]*?)<\/cim:Instructions.bindingDOT>/g, obj, "bindingDOT", base.to_float, sub, context);
                base.parse_element (/<cim:Instructions.bindingInstruction>([\s\S]*?)<\/cim:Instructions.bindingInstruction>/g, obj, "bindingInstruction", base.to_string, sub, context);
                base.parse_element (/<cim:Instructions.instructionCost>([\s\S]*?)<\/cim:Instructions.instructionCost>/g, obj, "instructionCost", base.to_float, sub, context);
                base.parse_element (/<cim:Instructions.instructionSource>([\s\S]*?)<\/cim:Instructions.instructionSource>/g, obj, "instructionSource", base.to_string, sub, context);
                base.parse_element (/<cim:Instructions.instructionStartTime>([\s\S]*?)<\/cim:Instructions.instructionStartTime>/g, obj, "instructionStartTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Instructions.instructionType>([\s\S]*?)<\/cim:Instructions.instructionType>/g, obj, "instructionType", base.to_string, sub, context);
                base.parse_element (/<cim:Instructions.manuallyBlocked>([\s\S]*?)<\/cim:Instructions.manuallyBlocked>/g, obj, "manuallyBlocked", base.to_string, sub, context);
                base.parse_element (/<cim:Instructions.minStatusChangeTime>([\s\S]*?)<\/cim:Instructions.minStatusChangeTime>/g, obj, "minStatusChangeTime", base.to_string, sub, context);
                base.parse_element (/<cim:Instructions.updateTimeStamp>([\s\S]*?)<\/cim:Instructions.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:Instructions.updateType>([\s\S]*?)<\/cim:Instructions.updateType>/g, obj, "updateType", base.to_string, sub, context);
                base.parse_element (/<cim:Instructions.updateUser>([\s\S]*?)<\/cim:Instructions.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_attribute (/<cim:Instructions.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attributes (/<cim:Instructions.InstructionClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InstructionClearing", sub, context);
                var bucket = context.parsed.Instructions;
                if (null == bucket)
                   context.parsed.Instructions = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Instructions", "bindingDOT", "bindingDOT",  base.from_float, fields);
                base.export_element (obj, "Instructions", "bindingInstruction", "bindingInstruction",  base.from_string, fields);
                base.export_element (obj, "Instructions", "instructionCost", "instructionCost",  base.from_float, fields);
                base.export_element (obj, "Instructions", "instructionSource", "instructionSource",  base.from_string, fields);
                base.export_element (obj, "Instructions", "instructionStartTime", "instructionStartTime",  base.from_datetime, fields);
                base.export_element (obj, "Instructions", "instructionType", "instructionType",  base.from_string, fields);
                base.export_element (obj, "Instructions", "manuallyBlocked", "manuallyBlocked",  base.from_string, fields);
                base.export_element (obj, "Instructions", "minStatusChangeTime", "minStatusChangeTime",  base.from_string, fields);
                base.export_element (obj, "Instructions", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "Instructions", "updateType", "updateType",  base.from_string, fields);
                base.export_element (obj, "Instructions", "updateUser", "updateUser",  base.from_string, fields);
                base.export_attribute (obj, "Instructions", "RegisteredResource", "RegisteredResource", fields);
                base.export_attributes (obj, "Instructions", "InstructionClearing", "InstructionClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Instructions_collapse" aria-expanded="true" aria-controls="Instructions_collapse" style="margin-left: 10px;">Instructions</a></legend>
                    <div id="Instructions_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#bindingDOT}}<div><b>bindingDOT</b>: {{bindingDOT}}</div>{{/bindingDOT}}
                    {{#bindingInstruction}}<div><b>bindingInstruction</b>: {{bindingInstruction}}</div>{{/bindingInstruction}}
                    {{#instructionCost}}<div><b>instructionCost</b>: {{instructionCost}}</div>{{/instructionCost}}
                    {{#instructionSource}}<div><b>instructionSource</b>: {{instructionSource}}</div>{{/instructionSource}}
                    {{#instructionStartTime}}<div><b>instructionStartTime</b>: {{instructionStartTime}}</div>{{/instructionStartTime}}
                    {{#instructionType}}<div><b>instructionType</b>: {{instructionType}}</div>{{/instructionType}}
                    {{#manuallyBlocked}}<div><b>manuallyBlocked</b>: {{manuallyBlocked}}</div>{{/manuallyBlocked}}
                    {{#minStatusChangeTime}}<div><b>minStatusChangeTime</b>: {{minStatusChangeTime}}</div>{{/minStatusChangeTime}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#updateType}}<div><b>updateType</b>: {{updateType}}</div>{{/updateType}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResource}}&quot;);})'>{{RegisteredResource}}</a></div>{{/RegisteredResource}}
                    {{#InstructionClearing}}<div><b>InstructionClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/InstructionClearing}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.InstructionClearing) obj.InstructionClearing_string = obj.InstructionClearing.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.InstructionClearing_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Instructions_collapse" aria-expanded="true" aria-controls="Instructions_collapse" style="margin-left: 10px;">Instructions</a></legend>
                    <div id="Instructions_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bindingDOT'>bindingDOT: </label><div class='col-sm-8'><input id='bindingDOT' class='form-control' type='text'{{#bindingDOT}} value='{{bindingDOT}}'{{/bindingDOT}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bindingInstruction'>bindingInstruction: </label><div class='col-sm-8'><input id='bindingInstruction' class='form-control' type='text'{{#bindingInstruction}} value='{{bindingInstruction}}'{{/bindingInstruction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='instructionCost'>instructionCost: </label><div class='col-sm-8'><input id='instructionCost' class='form-control' type='text'{{#instructionCost}} value='{{instructionCost}}'{{/instructionCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='instructionSource'>instructionSource: </label><div class='col-sm-8'><input id='instructionSource' class='form-control' type='text'{{#instructionSource}} value='{{instructionSource}}'{{/instructionSource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='instructionStartTime'>instructionStartTime: </label><div class='col-sm-8'><input id='instructionStartTime' class='form-control' type='text'{{#instructionStartTime}} value='{{instructionStartTime}}'{{/instructionStartTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='instructionType'>instructionType: </label><div class='col-sm-8'><input id='instructionType' class='form-control' type='text'{{#instructionType}} value='{{instructionType}}'{{/instructionType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='manuallyBlocked'>manuallyBlocked: </label><div class='col-sm-8'><input id='manuallyBlocked' class='form-control' type='text'{{#manuallyBlocked}} value='{{manuallyBlocked}}'{{/manuallyBlocked}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minStatusChangeTime'>minStatusChangeTime: </label><div class='col-sm-8'><input id='minStatusChangeTime' class='form-control' type='text'{{#minStatusChangeTime}} value='{{minStatusChangeTime}}'{{/minStatusChangeTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateType'>updateType: </label><div class='col-sm-8'><input id='updateType' class='form-control' type='text'{{#updateType}} value='{{updateType}}'{{/updateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateUser'>updateUser: </label><div class='col-sm-8'><input id='updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource}}'{{/RegisteredResource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='InstructionClearing'>InstructionClearing: </label><div class='col-sm-8'><input id='InstructionClearing' class='form-control' type='text'{{#InstructionClearing}} value='{{InstructionClearing}}_string'{{/InstructionClearing}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Instructions" };
                super.submit (obj);
                temp = document.getElementById ("bindingDOT").value; if ("" != temp) obj.bindingDOT = temp;
                temp = document.getElementById ("bindingInstruction").value; if ("" != temp) obj.bindingInstruction = temp;
                temp = document.getElementById ("instructionCost").value; if ("" != temp) obj.instructionCost = temp;
                temp = document.getElementById ("instructionSource").value; if ("" != temp) obj.instructionSource = temp;
                temp = document.getElementById ("instructionStartTime").value; if ("" != temp) obj.instructionStartTime = temp;
                temp = document.getElementById ("instructionType").value; if ("" != temp) obj.instructionType = temp;
                temp = document.getElementById ("manuallyBlocked").value; if ("" != temp) obj.manuallyBlocked = temp;
                temp = document.getElementById ("minStatusChangeTime").value; if ("" != temp) obj.minStatusChangeTime = temp;
                temp = document.getElementById ("updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;
                temp = document.getElementById ("updateType").value; if ("" != temp) obj.updateType = temp;
                temp = document.getElementById ("updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById ("RegisteredResource").value; if ("" != temp) obj.RegisteredResource = temp;
                temp = document.getElementById ("InstructionClearing").value; if ("" != temp) obj.InstructionClearing = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RegisteredResource", "RegisteredResource", "1", "0..*"],
                        ["InstructionClearing", "InstructionClearing", "1..*", "1..*"]
                    ]
                );
            }
        }

        /**
         * Models details of bid and offer market clearing.
         *
         * Class indicates whether a contingency is active and whether the automatic dispatching system is active for this interval of the market solution
         *
         */
        class ResourceAwardClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ResourceAwardClearing;
                if (null == bucket)
                   cim_data.ResourceAwardClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceAwardClearing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceAwardClearing";
                base.parse_element (/<cim:ResourceAwardClearing.dispatchMode>([\s\S]*?)<\/cim:ResourceAwardClearing.dispatchMode>/g, obj, "dispatchMode", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceAwardClearing.contingencyActive>([\s\S]*?)<\/cim:ResourceAwardClearing.contingencyActive>/g, obj, "contingencyActive", base.to_string, sub, context);
                base.parse_attributes (/<cim:ResourceAwardClearing.RUCAwardInstruction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RUCAwardInstruction", sub, context);
                base.parse_attributes (/<cim:ResourceAwardClearing.ResourceAwardInstruction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceAwardInstruction", sub, context);
                var bucket = context.parsed.ResourceAwardClearing;
                if (null == bucket)
                   context.parsed.ResourceAwardClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_element (obj, "ResourceAwardClearing", "dispatchMode", "dispatchMode",  base.from_string, fields);
                base.export_element (obj, "ResourceAwardClearing", "contingencyActive", "contingencyActive",  base.from_string, fields);
                base.export_attributes (obj, "ResourceAwardClearing", "RUCAwardInstruction", "RUCAwardInstruction", fields);
                base.export_attributes (obj, "ResourceAwardClearing", "ResourceAwardInstruction", "ResourceAwardInstruction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceAwardClearing_collapse" aria-expanded="true" aria-controls="ResourceAwardClearing_collapse" style="margin-left: 10px;">ResourceAwardClearing</a></legend>
                    <div id="ResourceAwardClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#dispatchMode}}<div><b>dispatchMode</b>: {{dispatchMode}}</div>{{/dispatchMode}}
                    {{#contingencyActive}}<div><b>contingencyActive</b>: {{contingencyActive}}</div>{{/contingencyActive}}
                    {{#RUCAwardInstruction}}<div><b>RUCAwardInstruction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RUCAwardInstruction}}
                    {{#ResourceAwardInstruction}}<div><b>ResourceAwardInstruction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ResourceAwardInstruction}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.RUCAwardInstruction) obj.RUCAwardInstruction_string = obj.RUCAwardInstruction.join ();
                if (obj.ResourceAwardInstruction) obj.ResourceAwardInstruction_string = obj.ResourceAwardInstruction.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RUCAwardInstruction_string;
                delete obj.ResourceAwardInstruction_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResourceAwardClearing_collapse" aria-expanded="true" aria-controls="ResourceAwardClearing_collapse" style="margin-left: 10px;">ResourceAwardClearing</a></legend>
                    <div id="ResourceAwardClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dispatchMode'>dispatchMode: </label><div class='col-sm-8'><input id='dispatchMode' class='form-control' type='text'{{#dispatchMode}} value='{{dispatchMode}}'{{/dispatchMode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='contingencyActive'>contingencyActive: </label><div class='col-sm-8'><input id='contingencyActive' class='form-control' type='text'{{#contingencyActive}} value='{{contingencyActive}}'{{/contingencyActive}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RUCAwardInstruction'>RUCAwardInstruction: </label><div class='col-sm-8'><input id='RUCAwardInstruction' class='form-control' type='text'{{#RUCAwardInstruction}} value='{{RUCAwardInstruction}}_string'{{/RUCAwardInstruction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ResourceAwardInstruction'>ResourceAwardInstruction: </label><div class='col-sm-8'><input id='ResourceAwardInstruction' class='form-control' type='text'{{#ResourceAwardInstruction}} value='{{ResourceAwardInstruction}}_string'{{/ResourceAwardInstruction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ResourceAwardClearing" };
                super.submit (obj);
                temp = document.getElementById ("dispatchMode").value; if ("" != temp) obj.dispatchMode = temp;
                temp = document.getElementById ("contingencyActive").value; if ("" != temp) obj.contingencyActive = temp;
                temp = document.getElementById ("RUCAwardInstruction").value; if ("" != temp) obj.RUCAwardInstruction = temp.split (",");
                temp = document.getElementById ("ResourceAwardInstruction").value; if ("" != temp) obj.ResourceAwardInstruction = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["RUCAwardInstruction", "RUCAwardInstruction", "1..*", "1..*"],
                        ["ResourceAwardInstruction", "ResourceAwardInstruction", "1..*", "1..*"]
                    ]
                );
            }
        }

        /**
         * Model of expost calculation of cleared MW on a region basis.
         *
         * Includes cleared price
         *
         */
        class ExPostMarketRegionResults extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExPostMarketRegionResults;
                if (null == bucket)
                   cim_data.ExPostMarketRegionResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExPostMarketRegionResults[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ExPostMarketRegionResults";
                base.parse_element (/<cim:ExPostMarketRegionResults.exPostClearedPrice>([\s\S]*?)<\/cim:ExPostMarketRegionResults.exPostClearedPrice>/g, obj, "exPostClearedPrice", base.to_float, sub, context);
                base.parse_attribute (/<cim:ExPostMarketRegionResults.MarketRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRegion", sub, context);
                base.parse_attribute (/<cim:ExPostMarketRegionResults.ExPostMarketRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExPostMarketRegion", sub, context);
                var bucket = context.parsed.ExPostMarketRegionResults;
                if (null == bucket)
                   context.parsed.ExPostMarketRegionResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ExPostMarketRegionResults", "exPostClearedPrice", "exPostClearedPrice",  base.from_float, fields);
                base.export_attribute (obj, "ExPostMarketRegionResults", "MarketRegion", "MarketRegion", fields);
                base.export_attribute (obj, "ExPostMarketRegionResults", "ExPostMarketRegion", "ExPostMarketRegion", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostMarketRegionResults_collapse" aria-expanded="true" aria-controls="ExPostMarketRegionResults_collapse" style="margin-left: 10px;">ExPostMarketRegionResults</a></legend>
                    <div id="ExPostMarketRegionResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#exPostClearedPrice}}<div><b>exPostClearedPrice</b>: {{exPostClearedPrice}}</div>{{/exPostClearedPrice}}
                    {{#MarketRegion}}<div><b>MarketRegion</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketRegion}}&quot;);})'>{{MarketRegion}}</a></div>{{/MarketRegion}}
                    {{#ExPostMarketRegion}}<div><b>ExPostMarketRegion</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ExPostMarketRegion}}&quot;);})'>{{ExPostMarketRegion}}</a></div>{{/ExPostMarketRegion}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostMarketRegionResults_collapse" aria-expanded="true" aria-controls="ExPostMarketRegionResults_collapse" style="margin-left: 10px;">ExPostMarketRegionResults</a></legend>
                    <div id="ExPostMarketRegionResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='exPostClearedPrice'>exPostClearedPrice: </label><div class='col-sm-8'><input id='exPostClearedPrice' class='form-control' type='text'{{#exPostClearedPrice}} value='{{exPostClearedPrice}}'{{/exPostClearedPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketRegion'>MarketRegion: </label><div class='col-sm-8'><input id='MarketRegion' class='form-control' type='text'{{#MarketRegion}} value='{{MarketRegion}}'{{/MarketRegion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ExPostMarketRegion'>ExPostMarketRegion: </label><div class='col-sm-8'><input id='ExPostMarketRegion' class='form-control' type='text'{{#ExPostMarketRegion}} value='{{ExPostMarketRegion}}'{{/ExPostMarketRegion}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ExPostMarketRegionResults" };
                super.submit (obj);
                temp = document.getElementById ("exPostClearedPrice").value; if ("" != temp) obj.exPostClearedPrice = temp;
                temp = document.getElementById ("MarketRegion").value; if ("" != temp) obj.MarketRegion = temp;
                temp = document.getElementById ("ExPostMarketRegion").value; if ("" != temp) obj.ExPostMarketRegion = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MarketRegion", "MarketRegion", "1", "0..*"],
                        ["ExPostMarketRegion", "ExPostMarketRegion", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Model of ex-post calculation of cleared MW on a regional basis
         *
         */
        class ExPostMarketRegion extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExPostMarketRegion;
                if (null == bucket)
                   cim_data.ExPostMarketRegion = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExPostMarketRegion[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "ExPostMarketRegion";
                base.parse_attribute (/<cim:ExPostMarketRegion.ExPostMarketRegionResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExPostMarketRegionResults", sub, context);
                var bucket = context.parsed.ExPostMarketRegion;
                if (null == bucket)
                   context.parsed.ExPostMarketRegion = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ExPostMarketRegion", "ExPostMarketRegionResults", "ExPostMarketRegionResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostMarketRegion_collapse" aria-expanded="true" aria-controls="ExPostMarketRegion_collapse" style="margin-left: 10px;">ExPostMarketRegion</a></legend>
                    <div id="ExPostMarketRegion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#ExPostMarketRegionResults}}<div><b>ExPostMarketRegionResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ExPostMarketRegionResults}}&quot;);})'>{{ExPostMarketRegionResults}}</a></div>{{/ExPostMarketRegionResults}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostMarketRegion_collapse" aria-expanded="true" aria-controls="ExPostMarketRegion_collapse" style="margin-left: 10px;">ExPostMarketRegion</a></legend>
                    <div id="ExPostMarketRegion_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ExPostMarketRegionResults'>ExPostMarketRegionResults: </label><div class='col-sm-8'><input id='ExPostMarketRegionResults' class='form-control' type='text'{{#ExPostMarketRegionResults}} value='{{ExPostMarketRegionResults}}'{{/ExPostMarketRegionResults}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ExPostMarketRegion" };
                super.submit (obj);
                temp = document.getElementById ("ExPostMarketRegionResults").value; if ("" != temp) obj.ExPostMarketRegionResults = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ExPostMarketRegionResults", "ExPostMarketRegionResults", "0..1", "1"]
                    ]
                );
            }
        }

        /**
         * A type of profile for financial charges
         *
         */
        class ChargeProfile extends ExternalInputs.Profile
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ChargeProfile;
                if (null == bucket)
                   cim_data.ChargeProfile = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ChargeProfile[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExternalInputs.Profile.prototype.parse.call (this, context, sub);
                obj.cls = "ChargeProfile";
                base.parse_element (/<cim:ChargeProfile.type>([\s\S]*?)<\/cim:ChargeProfile.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeProfile.frequency>([\s\S]*?)<\/cim:ChargeProfile.frequency>/g, obj, "frequency", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeProfile.numberInterval>([\s\S]*?)<\/cim:ChargeProfile.numberInterval>/g, obj, "numberInterval", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeProfile.unitOfMeasure>([\s\S]*?)<\/cim:ChargeProfile.unitOfMeasure>/g, obj, "unitOfMeasure", base.to_string, sub, context);
                base.parse_attribute (/<cim:ChargeProfile.BillDeterminant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BillDeterminant", sub, context);
                base.parse_attributes (/<cim:ChargeProfile.ChargeProfileData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeProfileData", sub, context);
                base.parse_attribute (/<cim:ChargeProfile.PassTroughBill\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PassTroughBill", sub, context);
                base.parse_attribute (/<cim:ChargeProfile.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);
                var bucket = context.parsed.ChargeProfile;
                if (null == bucket)
                   context.parsed.ChargeProfile = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExternalInputs.Profile.prototype.export.call (this, obj, false);

                base.export_element (obj, "ChargeProfile", "type", "type",  base.from_string, fields);
                base.export_element (obj, "ChargeProfile", "frequency", "frequency",  base.from_string, fields);
                base.export_element (obj, "ChargeProfile", "numberInterval", "numberInterval",  base.from_string, fields);
                base.export_element (obj, "ChargeProfile", "unitOfMeasure", "unitOfMeasure",  base.from_string, fields);
                base.export_attribute (obj, "ChargeProfile", "BillDeterminant", "BillDeterminant", fields);
                base.export_attributes (obj, "ChargeProfile", "ChargeProfileData", "ChargeProfileData", fields);
                base.export_attribute (obj, "ChargeProfile", "PassTroughBill", "PassTroughBill", fields);
                base.export_attribute (obj, "ChargeProfile", "Bid", "Bid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ChargeProfile_collapse" aria-expanded="true" aria-controls="ChargeProfile_collapse" style="margin-left: 10px;">ChargeProfile</a></legend>
                    <div id="ChargeProfile_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ExternalInputs.Profile.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#frequency}}<div><b>frequency</b>: {{frequency}}</div>{{/frequency}}
                    {{#numberInterval}}<div><b>numberInterval</b>: {{numberInterval}}</div>{{/numberInterval}}
                    {{#unitOfMeasure}}<div><b>unitOfMeasure</b>: {{unitOfMeasure}}</div>{{/unitOfMeasure}}
                    {{#BillDeterminant}}<div><b>BillDeterminant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BillDeterminant}}&quot;);})'>{{BillDeterminant}}</a></div>{{/BillDeterminant}}
                    {{#ChargeProfileData}}<div><b>ChargeProfileData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ChargeProfileData}}
                    {{#PassTroughBill}}<div><b>PassTroughBill</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PassTroughBill}}&quot;);})'>{{PassTroughBill}}</a></div>{{/PassTroughBill}}
                    {{#Bid}}<div><b>Bid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Bid}}&quot;);})'>{{Bid}}</a></div>{{/Bid}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ChargeProfileData) obj.ChargeProfileData_string = obj.ChargeProfileData.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ChargeProfileData_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ChargeProfile_collapse" aria-expanded="true" aria-controls="ChargeProfile_collapse" style="margin-left: 10px;">ChargeProfile</a></legend>
                    <div id="ChargeProfile_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ExternalInputs.Profile.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><input id='type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='frequency'>frequency: </label><div class='col-sm-8'><input id='frequency' class='form-control' type='text'{{#frequency}} value='{{frequency}}'{{/frequency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='numberInterval'>numberInterval: </label><div class='col-sm-8'><input id='numberInterval' class='form-control' type='text'{{#numberInterval}} value='{{numberInterval}}'{{/numberInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unitOfMeasure'>unitOfMeasure: </label><div class='col-sm-8'><input id='unitOfMeasure' class='form-control' type='text'{{#unitOfMeasure}} value='{{unitOfMeasure}}'{{/unitOfMeasure}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BillDeterminant'>BillDeterminant: </label><div class='col-sm-8'><input id='BillDeterminant' class='form-control' type='text'{{#BillDeterminant}} value='{{BillDeterminant}}'{{/BillDeterminant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PassTroughBill'>PassTroughBill: </label><div class='col-sm-8'><input id='PassTroughBill' class='form-control' type='text'{{#PassTroughBill}} value='{{PassTroughBill}}'{{/PassTroughBill}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Bid'>Bid: </label><div class='col-sm-8'><input id='Bid' class='form-control' type='text'{{#Bid}} value='{{Bid}}'{{/Bid}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ChargeProfile" };
                super.submit (obj);
                temp = document.getElementById ("type").value; if ("" != temp) obj.type = temp;
                temp = document.getElementById ("frequency").value; if ("" != temp) obj.frequency = temp;
                temp = document.getElementById ("numberInterval").value; if ("" != temp) obj.numberInterval = temp;
                temp = document.getElementById ("unitOfMeasure").value; if ("" != temp) obj.unitOfMeasure = temp;
                temp = document.getElementById ("BillDeterminant").value; if ("" != temp) obj.BillDeterminant = temp;
                temp = document.getElementById ("PassTroughBill").value; if ("" != temp) obj.PassTroughBill = temp;
                temp = document.getElementById ("Bid").value; if ("" != temp) obj.Bid = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["BillDeterminant", "BillDeterminant", "0..1", "0..1"],
                        ["ChargeProfileData", "ChargeProfileData", "0..*", "0..1"],
                        ["PassTroughBill", "PassThroughBill", "0..1", "0..*"],
                        ["Bid", "Bid", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * RT only and is published on 5 minute intervals for the previous RT time interval results.
         *
         */
        class LossClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.LossClearing;
                if (null == bucket)
                   cim_data.LossClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LossClearing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "LossClearing";
                base.parse_attributes (/<cim:LossClearing.LossClearingResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LossClearingResults", sub, context);
                var bucket = context.parsed.LossClearing;
                if (null == bucket)
                   context.parsed.LossClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "LossClearing", "LossClearingResults", "LossClearingResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LossClearing_collapse" aria-expanded="true" aria-controls="LossClearing_collapse" style="margin-left: 10px;">LossClearing</a></legend>
                    <div id="LossClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#LossClearingResults}}<div><b>LossClearingResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LossClearingResults}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.LossClearingResults) obj.LossClearingResults_string = obj.LossClearingResults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.LossClearingResults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LossClearing_collapse" aria-expanded="true" aria-controls="LossClearing_collapse" style="margin-left: 10px;">LossClearing</a></legend>
                    <div id="LossClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "LossClearing" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["LossClearingResults", "LossClearingResults", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Indicates whether unit is a reliablity must run unit: required to be on to satisfy Grid Code Reliablitiy criteria, load demand, or voltage support.
         *
         */
        class RMRDetermination extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RMRDetermination;
                if (null == bucket)
                   cim_data.RMRDetermination = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RMRDetermination[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RMRDetermination";
                base.parse_attribute (/<cim:RMRDetermination.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);
                base.parse_attributes (/<cim:RMRDetermination.MitigatedBidClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MitigatedBidClearing", sub, context);
                var bucket = context.parsed.RMRDetermination;
                if (null == bucket)
                   context.parsed.RMRDetermination = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "RMRDetermination", "Bid", "Bid", fields);
                base.export_attributes (obj, "RMRDetermination", "MitigatedBidClearing", "MitigatedBidClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMRDetermination_collapse" aria-expanded="true" aria-controls="RMRDetermination_collapse" style="margin-left: 10px;">RMRDetermination</a></legend>
                    <div id="RMRDetermination_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#Bid}}<div><b>Bid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Bid}}&quot;);})'>{{Bid}}</a></div>{{/Bid}}
                    {{#MitigatedBidClearing}}<div><b>MitigatedBidClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MitigatedBidClearing}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MitigatedBidClearing) obj.MitigatedBidClearing_string = obj.MitigatedBidClearing.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MitigatedBidClearing_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RMRDetermination_collapse" aria-expanded="true" aria-controls="RMRDetermination_collapse" style="margin-left: 10px;">RMRDetermination</a></legend>
                    <div id="RMRDetermination_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Bid'>Bid: </label><div class='col-sm-8'><input id='Bid' class='form-control' type='text'{{#Bid}} value='{{Bid}}'{{/Bid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MitigatedBidClearing'>MitigatedBidClearing: </label><div class='col-sm-8'><input id='MitigatedBidClearing' class='form-control' type='text'{{#MitigatedBidClearing}} value='{{MitigatedBidClearing}}_string'{{/MitigatedBidClearing}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "RMRDetermination" };
                super.submit (obj);
                temp = document.getElementById ("Bid").value; if ("" != temp) obj.Bid = temp;
                temp = document.getElementById ("MitigatedBidClearing").value; if ("" != temp) obj.MitigatedBidClearing = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Bid", "Bid", "0..1", "0..*"],
                        ["MitigatedBidClearing", "MitigatedBidClearing", "1..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Model of market clearing, related to Dispatch Operating Point.
         *
         * Identifies interval
         *
         */
        class InstructionClearingDOP extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.InstructionClearingDOP;
                if (null == bucket)
                   cim_data.InstructionClearingDOP = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InstructionClearingDOP[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "InstructionClearingDOP";
                base.parse_attributes (/<cim:InstructionClearingDOP.DopInstruction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DopInstruction", sub, context);
                var bucket = context.parsed.InstructionClearingDOP;
                if (null == bucket)
                   context.parsed.InstructionClearingDOP = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "InstructionClearingDOP", "DopInstruction", "DopInstruction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InstructionClearingDOP_collapse" aria-expanded="true" aria-controls="InstructionClearingDOP_collapse" style="margin-left: 10px;">InstructionClearingDOP</a></legend>
                    <div id="InstructionClearingDOP_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#DopInstruction}}<div><b>DopInstruction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DopInstruction}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.DopInstruction) obj.DopInstruction_string = obj.DopInstruction.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DopInstruction_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InstructionClearingDOP_collapse" aria-expanded="true" aria-controls="InstructionClearingDOP_collapse" style="margin-left: 10px;">InstructionClearingDOP</a></legend>
                    <div id="InstructionClearingDOP_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DopInstruction'>DopInstruction: </label><div class='col-sm-8'><input id='DopInstruction' class='form-control' type='text'{{#DopInstruction}} value='{{DopInstruction}}_string'{{/DopInstruction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "InstructionClearingDOP" };
                super.submit (obj);
                temp = document.getElementById ("DopInstruction").value; if ("" != temp) obj.DopInstruction = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["DopInstruction", "DopInstruction", "1..*", "1..*"]
                    ]
                );
            }
        }

        /**
         * Provides the Market results for the constraint processing for either the DAM or RTM.
         *
         * The data includes the constraint type (binding or violated), the solved value for the constraint, and the associated shadow price.
         *
         */
        class ConstraintResults extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ConstraintResults;
                if (null == bucket)
                   cim_data.ConstraintResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConstraintResults[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ConstraintResults";
                base.parse_element (/<cim:ConstraintResults.baseFlow>([\s\S]*?)<\/cim:ConstraintResults.baseFlow>/g, obj, "baseFlow", base.to_float, sub, context);
                base.parse_element (/<cim:ConstraintResults.BGLimit>([\s\S]*?)<\/cim:ConstraintResults.BGLimit>/g, obj, "BGLimit", base.to_float, sub, context);
                base.parse_element (/<cim:ConstraintResults.BGTRResCap>([\s\S]*?)<\/cim:ConstraintResults.BGTRResCap>/g, obj, "BGTRResCap", base.to_float, sub, context);
                base.parse_element (/<cim:ConstraintResults.bindingLimit>([\s\S]*?)<\/cim:ConstraintResults.bindingLimit>/g, obj, "bindingLimit", base.to_float, sub, context);
                base.parse_element (/<cim:ConstraintResults.clearedValue>([\s\S]*?)<\/cim:ConstraintResults.clearedValue>/g, obj, "clearedValue", base.to_float, sub, context);
                base.parse_element (/<cim:ConstraintResults.competitivePathConstraint>([\s\S]*?)<\/cim:ConstraintResults.competitivePathConstraint>/g, obj, "competitivePathConstraint", base.to_string, sub, context);
                base.parse_element (/<cim:ConstraintResults.constraintType>([\s\S]*?)<\/cim:ConstraintResults.constraintType>/g, obj, "constraintType", base.to_string, sub, context);
                base.parse_element (/<cim:ConstraintResults.limitFlag>([\s\S]*?)<\/cim:ConstraintResults.limitFlag>/g, obj, "limitFlag", base.to_string, sub, context);
                base.parse_element (/<cim:ConstraintResults.optimizationFlag>([\s\S]*?)<\/cim:ConstraintResults.optimizationFlag>/g, obj, "optimizationFlag", base.to_string, sub, context);
                base.parse_element (/<cim:ConstraintResults.overloadMW>([\s\S]*?)<\/cim:ConstraintResults.overloadMW>/g, obj, "overloadMW", base.to_float, sub, context);
                base.parse_element (/<cim:ConstraintResults.percentMW>([\s\S]*?)<\/cim:ConstraintResults.percentMW>/g, obj, "percentMW", base.to_float, sub, context);
                base.parse_element (/<cim:ConstraintResults.shadowPrice>([\s\S]*?)<\/cim:ConstraintResults.shadowPrice>/g, obj, "shadowPrice", base.to_float, sub, context);
                base.parse_element (/<cim:ConstraintResults.updateTimeStamp>([\s\S]*?)<\/cim:ConstraintResults.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:ConstraintResults.updateType>([\s\S]*?)<\/cim:ConstraintResults.updateType>/g, obj, "updateType", base.to_string, sub, context);
                base.parse_element (/<cim:ConstraintResults.updateUser>([\s\S]*?)<\/cim:ConstraintResults.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_attribute (/<cim:ConstraintResults.MktContingency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktContingency", sub, context);
                base.parse_attribute (/<cim:ConstraintResults.ConstraintClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConstraintClearing", sub, context);
                base.parse_attribute (/<cim:ConstraintResults.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Flowgate", sub, context);
                var bucket = context.parsed.ConstraintResults;
                if (null == bucket)
                   context.parsed.ConstraintResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ConstraintResults", "baseFlow", "baseFlow",  base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "BGLimit", "BGLimit",  base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "BGTRResCap", "BGTRResCap",  base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "bindingLimit", "bindingLimit",  base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "clearedValue", "clearedValue",  base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "competitivePathConstraint", "competitivePathConstraint",  base.from_string, fields);
                base.export_element (obj, "ConstraintResults", "constraintType", "constraintType",  base.from_string, fields);
                base.export_element (obj, "ConstraintResults", "limitFlag", "limitFlag",  base.from_string, fields);
                base.export_element (obj, "ConstraintResults", "optimizationFlag", "optimizationFlag",  base.from_string, fields);
                base.export_element (obj, "ConstraintResults", "overloadMW", "overloadMW",  base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "percentMW", "percentMW",  base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "shadowPrice", "shadowPrice",  base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "ConstraintResults", "updateType", "updateType",  base.from_string, fields);
                base.export_element (obj, "ConstraintResults", "updateUser", "updateUser",  base.from_string, fields);
                base.export_attribute (obj, "ConstraintResults", "MktContingency", "MktContingency", fields);
                base.export_attribute (obj, "ConstraintResults", "ConstraintClearing", "ConstraintClearing", fields);
                base.export_attribute (obj, "ConstraintResults", "Flowgate", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConstraintResults_collapse" aria-expanded="true" aria-controls="ConstraintResults_collapse" style="margin-left: 10px;">ConstraintResults</a></legend>
                    <div id="ConstraintResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#baseFlow}}<div><b>baseFlow</b>: {{baseFlow}}</div>{{/baseFlow}}
                    {{#BGLimit}}<div><b>BGLimit</b>: {{BGLimit}}</div>{{/BGLimit}}
                    {{#BGTRResCap}}<div><b>BGTRResCap</b>: {{BGTRResCap}}</div>{{/BGTRResCap}}
                    {{#bindingLimit}}<div><b>bindingLimit</b>: {{bindingLimit}}</div>{{/bindingLimit}}
                    {{#clearedValue}}<div><b>clearedValue</b>: {{clearedValue}}</div>{{/clearedValue}}
                    {{#competitivePathConstraint}}<div><b>competitivePathConstraint</b>: {{competitivePathConstraint}}</div>{{/competitivePathConstraint}}
                    {{#constraintType}}<div><b>constraintType</b>: {{constraintType}}</div>{{/constraintType}}
                    {{#limitFlag}}<div><b>limitFlag</b>: {{limitFlag}}</div>{{/limitFlag}}
                    {{#optimizationFlag}}<div><b>optimizationFlag</b>: {{optimizationFlag}}</div>{{/optimizationFlag}}
                    {{#overloadMW}}<div><b>overloadMW</b>: {{overloadMW}}</div>{{/overloadMW}}
                    {{#percentMW}}<div><b>percentMW</b>: {{percentMW}}</div>{{/percentMW}}
                    {{#shadowPrice}}<div><b>shadowPrice</b>: {{shadowPrice}}</div>{{/shadowPrice}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#updateType}}<div><b>updateType</b>: {{updateType}}</div>{{/updateType}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#MktContingency}}<div><b>MktContingency</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MktContingency}}&quot;);})'>{{MktContingency}}</a></div>{{/MktContingency}}
                    {{#ConstraintClearing}}<div><b>ConstraintClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ConstraintClearing}}&quot;);})'>{{ConstraintClearing}}</a></div>{{/ConstraintClearing}}
                    {{#Flowgate}}<div><b>Flowgate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Flowgate}}&quot;);})'>{{Flowgate}}</a></div>{{/Flowgate}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConstraintResults_collapse" aria-expanded="true" aria-controls="ConstraintResults_collapse" style="margin-left: 10px;">ConstraintResults</a></legend>
                    <div id="ConstraintResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='baseFlow'>baseFlow: </label><div class='col-sm-8'><input id='baseFlow' class='form-control' type='text'{{#baseFlow}} value='{{baseFlow}}'{{/baseFlow}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BGLimit'>BGLimit: </label><div class='col-sm-8'><input id='BGLimit' class='form-control' type='text'{{#BGLimit}} value='{{BGLimit}}'{{/BGLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BGTRResCap'>BGTRResCap: </label><div class='col-sm-8'><input id='BGTRResCap' class='form-control' type='text'{{#BGTRResCap}} value='{{BGTRResCap}}'{{/BGTRResCap}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bindingLimit'>bindingLimit: </label><div class='col-sm-8'><input id='bindingLimit' class='form-control' type='text'{{#bindingLimit}} value='{{bindingLimit}}'{{/bindingLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clearedValue'>clearedValue: </label><div class='col-sm-8'><input id='clearedValue' class='form-control' type='text'{{#clearedValue}} value='{{clearedValue}}'{{/clearedValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='competitivePathConstraint'>competitivePathConstraint: </label><div class='col-sm-8'><input id='competitivePathConstraint' class='form-control' type='text'{{#competitivePathConstraint}} value='{{competitivePathConstraint}}'{{/competitivePathConstraint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='constraintType'>constraintType: </label><div class='col-sm-8'><input id='constraintType' class='form-control' type='text'{{#constraintType}} value='{{constraintType}}'{{/constraintType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='limitFlag'>limitFlag: </label><div class='col-sm-8'><input id='limitFlag' class='form-control' type='text'{{#limitFlag}} value='{{limitFlag}}'{{/limitFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='optimizationFlag'>optimizationFlag: </label><div class='col-sm-8'><input id='optimizationFlag' class='form-control' type='text'{{#optimizationFlag}} value='{{optimizationFlag}}'{{/optimizationFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='overloadMW'>overloadMW: </label><div class='col-sm-8'><input id='overloadMW' class='form-control' type='text'{{#overloadMW}} value='{{overloadMW}}'{{/overloadMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='percentMW'>percentMW: </label><div class='col-sm-8'><input id='percentMW' class='form-control' type='text'{{#percentMW}} value='{{percentMW}}'{{/percentMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='shadowPrice'>shadowPrice: </label><div class='col-sm-8'><input id='shadowPrice' class='form-control' type='text'{{#shadowPrice}} value='{{shadowPrice}}'{{/shadowPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateType'>updateType: </label><div class='col-sm-8'><input id='updateType' class='form-control' type='text'{{#updateType}} value='{{updateType}}'{{/updateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateUser'>updateUser: </label><div class='col-sm-8'><input id='updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktContingency'>MktContingency: </label><div class='col-sm-8'><input id='MktContingency' class='form-control' type='text'{{#MktContingency}} value='{{MktContingency}}'{{/MktContingency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConstraintClearing'>ConstraintClearing: </label><div class='col-sm-8'><input id='ConstraintClearing' class='form-control' type='text'{{#ConstraintClearing}} value='{{ConstraintClearing}}'{{/ConstraintClearing}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Flowgate'>Flowgate: </label><div class='col-sm-8'><input id='Flowgate' class='form-control' type='text'{{#Flowgate}} value='{{Flowgate}}'{{/Flowgate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ConstraintResults" };
                super.submit (obj);
                temp = document.getElementById ("baseFlow").value; if ("" != temp) obj.baseFlow = temp;
                temp = document.getElementById ("BGLimit").value; if ("" != temp) obj.BGLimit = temp;
                temp = document.getElementById ("BGTRResCap").value; if ("" != temp) obj.BGTRResCap = temp;
                temp = document.getElementById ("bindingLimit").value; if ("" != temp) obj.bindingLimit = temp;
                temp = document.getElementById ("clearedValue").value; if ("" != temp) obj.clearedValue = temp;
                temp = document.getElementById ("competitivePathConstraint").value; if ("" != temp) obj.competitivePathConstraint = temp;
                temp = document.getElementById ("constraintType").value; if ("" != temp) obj.constraintType = temp;
                temp = document.getElementById ("limitFlag").value; if ("" != temp) obj.limitFlag = temp;
                temp = document.getElementById ("optimizationFlag").value; if ("" != temp) obj.optimizationFlag = temp;
                temp = document.getElementById ("overloadMW").value; if ("" != temp) obj.overloadMW = temp;
                temp = document.getElementById ("percentMW").value; if ("" != temp) obj.percentMW = temp;
                temp = document.getElementById ("shadowPrice").value; if ("" != temp) obj.shadowPrice = temp;
                temp = document.getElementById ("updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;
                temp = document.getElementById ("updateType").value; if ("" != temp) obj.updateType = temp;
                temp = document.getElementById ("updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById ("MktContingency").value; if ("" != temp) obj.MktContingency = temp;
                temp = document.getElementById ("ConstraintClearing").value; if ("" != temp) obj.ConstraintClearing = temp;
                temp = document.getElementById ("Flowgate").value; if ("" != temp) obj.Flowgate = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MktContingency", "MktContingency", "1", "0..*"],
                        ["ConstraintClearing", "ConstraintClearing", "0..1", "0..*"],
                        ["Flowgate", "Flowgate", "1", "1..*"]
                    ]
                );
            }
        }

        /**
         * Provides all Region Ancillary Service results for the DA and RT markets.
         *
         * The specific data is commodity type (Regulation Up, Regulation Down, Spinning Reserve, Non-spinning Reserve, or Total Up reserves) based for the cleared MW, cleared price, and total capacity required for the region.
         *
         */
        class MarketRegionResults extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MarketRegionResults;
                if (null == bucket)
                   cim_data.MarketRegionResults = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketRegionResults[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MarketRegionResults";
                base.parse_element (/<cim:MarketRegionResults.clearedMW>([\s\S]*?)<\/cim:MarketRegionResults.clearedMW>/g, obj, "clearedMW", base.to_float, sub, context);
                base.parse_element (/<cim:MarketRegionResults.clearedPrice>([\s\S]*?)<\/cim:MarketRegionResults.clearedPrice>/g, obj, "clearedPrice", base.to_float, sub, context);
                base.parse_element (/<cim:MarketRegionResults.dispatchCtMW>([\s\S]*?)<\/cim:MarketRegionResults.dispatchCtMW>/g, obj, "dispatchCtMW", base.to_float, sub, context);
                base.parse_element (/<cim:MarketRegionResults.dispatchHydroMW>([\s\S]*?)<\/cim:MarketRegionResults.dispatchHydroMW>/g, obj, "dispatchHydroMW", base.to_float, sub, context);
                base.parse_element (/<cim:MarketRegionResults.dispatchRate>([\s\S]*?)<\/cim:MarketRegionResults.dispatchRate>/g, obj, "dispatchRate", base.to_float, sub, context);
                base.parse_element (/<cim:MarketRegionResults.dispatchSteamMW>([\s\S]*?)<\/cim:MarketRegionResults.dispatchSteamMW>/g, obj, "dispatchSteamMW", base.to_float, sub, context);
                base.parse_element (/<cim:MarketRegionResults.imbalanceEnergyBias>([\s\S]*?)<\/cim:MarketRegionResults.imbalanceEnergyBias>/g, obj, "imbalanceEnergyBias", base.to_float, sub, context);
                base.parse_element (/<cim:MarketRegionResults.limitFlag>([\s\S]*?)<\/cim:MarketRegionResults.limitFlag>/g, obj, "limitFlag", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRegionResults.lumpyIndicator>([\s\S]*?)<\/cim:MarketRegionResults.lumpyIndicator>/g, obj, "lumpyIndicator", base.to_string, sub, context);
                base.parse_element (/<cim:MarketRegionResults.maxSufficiencyIndex>([\s\S]*?)<\/cim:MarketRegionResults.maxSufficiencyIndex>/g, obj, "maxSufficiencyIndex", base.to_float, sub, context);
                base.parse_element (/<cim:MarketRegionResults.minSufficiencyIndex>([\s\S]*?)<\/cim:MarketRegionResults.minSufficiencyIndex>/g, obj, "minSufficiencyIndex", base.to_float, sub, context);
                base.parse_element (/<cim:MarketRegionResults.reqMaxMW>([\s\S]*?)<\/cim:MarketRegionResults.reqMaxMW>/g, obj, "reqMaxMW", base.to_float, sub, context);
                base.parse_element (/<cim:MarketRegionResults.reqMinMW>([\s\S]*?)<\/cim:MarketRegionResults.reqMinMW>/g, obj, "reqMinMW", base.to_float, sub, context);
                base.parse_element (/<cim:MarketRegionResults.selfScheduleMW>([\s\S]*?)<\/cim:MarketRegionResults.selfScheduleMW>/g, obj, "selfScheduleMW", base.to_float, sub, context);
                base.parse_attribute (/<cim:MarketRegionResults.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);
                base.parse_attribute (/<cim:MarketRegionResults.MarketRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketRegion", sub, context);
                base.parse_attribute (/<cim:MarketRegionResults.AncillaryServiceClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AncillaryServiceClearing", sub, context);
                var bucket = context.parsed.MarketRegionResults;
                if (null == bucket)
                   context.parsed.MarketRegionResults = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MarketRegionResults", "clearedMW", "clearedMW",  base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "clearedPrice", "clearedPrice",  base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "dispatchCtMW", "dispatchCtMW",  base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "dispatchHydroMW", "dispatchHydroMW",  base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "dispatchRate", "dispatchRate",  base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "dispatchSteamMW", "dispatchSteamMW",  base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "imbalanceEnergyBias", "imbalanceEnergyBias",  base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "limitFlag", "limitFlag",  base.from_string, fields);
                base.export_element (obj, "MarketRegionResults", "lumpyIndicator", "lumpyIndicator",  base.from_string, fields);
                base.export_element (obj, "MarketRegionResults", "maxSufficiencyIndex", "maxSufficiencyIndex",  base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "minSufficiencyIndex", "minSufficiencyIndex",  base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "reqMaxMW", "reqMaxMW",  base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "reqMinMW", "reqMinMW",  base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "selfScheduleMW", "selfScheduleMW",  base.from_float, fields);
                base.export_attribute (obj, "MarketRegionResults", "MarketProduct", "MarketProduct", fields);
                base.export_attribute (obj, "MarketRegionResults", "MarketRegion", "MarketRegion", fields);
                base.export_attribute (obj, "MarketRegionResults", "AncillaryServiceClearing", "AncillaryServiceClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketRegionResults_collapse" aria-expanded="true" aria-controls="MarketRegionResults_collapse" style="margin-left: 10px;">MarketRegionResults</a></legend>
                    <div id="MarketRegionResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#clearedMW}}<div><b>clearedMW</b>: {{clearedMW}}</div>{{/clearedMW}}
                    {{#clearedPrice}}<div><b>clearedPrice</b>: {{clearedPrice}}</div>{{/clearedPrice}}
                    {{#dispatchCtMW}}<div><b>dispatchCtMW</b>: {{dispatchCtMW}}</div>{{/dispatchCtMW}}
                    {{#dispatchHydroMW}}<div><b>dispatchHydroMW</b>: {{dispatchHydroMW}}</div>{{/dispatchHydroMW}}
                    {{#dispatchRate}}<div><b>dispatchRate</b>: {{dispatchRate}}</div>{{/dispatchRate}}
                    {{#dispatchSteamMW}}<div><b>dispatchSteamMW</b>: {{dispatchSteamMW}}</div>{{/dispatchSteamMW}}
                    {{#imbalanceEnergyBias}}<div><b>imbalanceEnergyBias</b>: {{imbalanceEnergyBias}}</div>{{/imbalanceEnergyBias}}
                    {{#limitFlag}}<div><b>limitFlag</b>: {{limitFlag}}</div>{{/limitFlag}}
                    {{#lumpyIndicator}}<div><b>lumpyIndicator</b>: {{lumpyIndicator}}</div>{{/lumpyIndicator}}
                    {{#maxSufficiencyIndex}}<div><b>maxSufficiencyIndex</b>: {{maxSufficiencyIndex}}</div>{{/maxSufficiencyIndex}}
                    {{#minSufficiencyIndex}}<div><b>minSufficiencyIndex</b>: {{minSufficiencyIndex}}</div>{{/minSufficiencyIndex}}
                    {{#reqMaxMW}}<div><b>reqMaxMW</b>: {{reqMaxMW}}</div>{{/reqMaxMW}}
                    {{#reqMinMW}}<div><b>reqMinMW</b>: {{reqMinMW}}</div>{{/reqMinMW}}
                    {{#selfScheduleMW}}<div><b>selfScheduleMW</b>: {{selfScheduleMW}}</div>{{/selfScheduleMW}}
                    {{#MarketProduct}}<div><b>MarketProduct</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketProduct}}&quot;);})'>{{MarketProduct}}</a></div>{{/MarketProduct}}
                    {{#MarketRegion}}<div><b>MarketRegion</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketRegion}}&quot;);})'>{{MarketRegion}}</a></div>{{/MarketRegion}}
                    {{#AncillaryServiceClearing}}<div><b>AncillaryServiceClearing</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AncillaryServiceClearing}}&quot;);})'>{{AncillaryServiceClearing}}</a></div>{{/AncillaryServiceClearing}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketRegionResults_collapse" aria-expanded="true" aria-controls="MarketRegionResults_collapse" style="margin-left: 10px;">MarketRegionResults</a></legend>
                    <div id="MarketRegionResults_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clearedMW'>clearedMW: </label><div class='col-sm-8'><input id='clearedMW' class='form-control' type='text'{{#clearedMW}} value='{{clearedMW}}'{{/clearedMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='clearedPrice'>clearedPrice: </label><div class='col-sm-8'><input id='clearedPrice' class='form-control' type='text'{{#clearedPrice}} value='{{clearedPrice}}'{{/clearedPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dispatchCtMW'>dispatchCtMW: </label><div class='col-sm-8'><input id='dispatchCtMW' class='form-control' type='text'{{#dispatchCtMW}} value='{{dispatchCtMW}}'{{/dispatchCtMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dispatchHydroMW'>dispatchHydroMW: </label><div class='col-sm-8'><input id='dispatchHydroMW' class='form-control' type='text'{{#dispatchHydroMW}} value='{{dispatchHydroMW}}'{{/dispatchHydroMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dispatchRate'>dispatchRate: </label><div class='col-sm-8'><input id='dispatchRate' class='form-control' type='text'{{#dispatchRate}} value='{{dispatchRate}}'{{/dispatchRate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='dispatchSteamMW'>dispatchSteamMW: </label><div class='col-sm-8'><input id='dispatchSteamMW' class='form-control' type='text'{{#dispatchSteamMW}} value='{{dispatchSteamMW}}'{{/dispatchSteamMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='imbalanceEnergyBias'>imbalanceEnergyBias: </label><div class='col-sm-8'><input id='imbalanceEnergyBias' class='form-control' type='text'{{#imbalanceEnergyBias}} value='{{imbalanceEnergyBias}}'{{/imbalanceEnergyBias}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='limitFlag'>limitFlag: </label><div class='col-sm-8'><input id='limitFlag' class='form-control' type='text'{{#limitFlag}} value='{{limitFlag}}'{{/limitFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lumpyIndicator'>lumpyIndicator: </label><div class='col-sm-8'><input id='lumpyIndicator' class='form-control' type='text'{{#lumpyIndicator}} value='{{lumpyIndicator}}'{{/lumpyIndicator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxSufficiencyIndex'>maxSufficiencyIndex: </label><div class='col-sm-8'><input id='maxSufficiencyIndex' class='form-control' type='text'{{#maxSufficiencyIndex}} value='{{maxSufficiencyIndex}}'{{/maxSufficiencyIndex}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minSufficiencyIndex'>minSufficiencyIndex: </label><div class='col-sm-8'><input id='minSufficiencyIndex' class='form-control' type='text'{{#minSufficiencyIndex}} value='{{minSufficiencyIndex}}'{{/minSufficiencyIndex}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reqMaxMW'>reqMaxMW: </label><div class='col-sm-8'><input id='reqMaxMW' class='form-control' type='text'{{#reqMaxMW}} value='{{reqMaxMW}}'{{/reqMaxMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='reqMinMW'>reqMinMW: </label><div class='col-sm-8'><input id='reqMinMW' class='form-control' type='text'{{#reqMinMW}} value='{{reqMinMW}}'{{/reqMinMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='selfScheduleMW'>selfScheduleMW: </label><div class='col-sm-8'><input id='selfScheduleMW' class='form-control' type='text'{{#selfScheduleMW}} value='{{selfScheduleMW}}'{{/selfScheduleMW}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketProduct'>MarketProduct: </label><div class='col-sm-8'><input id='MarketProduct' class='form-control' type='text'{{#MarketProduct}} value='{{MarketProduct}}'{{/MarketProduct}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketRegion'>MarketRegion: </label><div class='col-sm-8'><input id='MarketRegion' class='form-control' type='text'{{#MarketRegion}} value='{{MarketRegion}}'{{/MarketRegion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AncillaryServiceClearing'>AncillaryServiceClearing: </label><div class='col-sm-8'><input id='AncillaryServiceClearing' class='form-control' type='text'{{#AncillaryServiceClearing}} value='{{AncillaryServiceClearing}}'{{/AncillaryServiceClearing}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MarketRegionResults" };
                super.submit (obj);
                temp = document.getElementById ("clearedMW").value; if ("" != temp) obj.clearedMW = temp;
                temp = document.getElementById ("clearedPrice").value; if ("" != temp) obj.clearedPrice = temp;
                temp = document.getElementById ("dispatchCtMW").value; if ("" != temp) obj.dispatchCtMW = temp;
                temp = document.getElementById ("dispatchHydroMW").value; if ("" != temp) obj.dispatchHydroMW = temp;
                temp = document.getElementById ("dispatchRate").value; if ("" != temp) obj.dispatchRate = temp;
                temp = document.getElementById ("dispatchSteamMW").value; if ("" != temp) obj.dispatchSteamMW = temp;
                temp = document.getElementById ("imbalanceEnergyBias").value; if ("" != temp) obj.imbalanceEnergyBias = temp;
                temp = document.getElementById ("limitFlag").value; if ("" != temp) obj.limitFlag = temp;
                temp = document.getElementById ("lumpyIndicator").value; if ("" != temp) obj.lumpyIndicator = temp;
                temp = document.getElementById ("maxSufficiencyIndex").value; if ("" != temp) obj.maxSufficiencyIndex = temp;
                temp = document.getElementById ("minSufficiencyIndex").value; if ("" != temp) obj.minSufficiencyIndex = temp;
                temp = document.getElementById ("reqMaxMW").value; if ("" != temp) obj.reqMaxMW = temp;
                temp = document.getElementById ("reqMinMW").value; if ("" != temp) obj.reqMinMW = temp;
                temp = document.getElementById ("selfScheduleMW").value; if ("" != temp) obj.selfScheduleMW = temp;
                temp = document.getElementById ("MarketProduct").value; if ("" != temp) obj.MarketProduct = temp;
                temp = document.getElementById ("MarketRegion").value; if ("" != temp) obj.MarketRegion = temp;
                temp = document.getElementById ("AncillaryServiceClearing").value; if ("" != temp) obj.AncillaryServiceClearing = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MarketProduct", "MarketProduct", "0..1", "0..1"],
                        ["MarketRegion", "MarketRegion", "1", "1..*"],
                        ["AncillaryServiceClearing", "AncillaryServiceClearing", "0..1", "1..*"]
                    ]
                );
            }
        }

        /**
         * Provides the necessary information (on a resource basis) to capture the Dispatch Operating Point (DOP) results on a Dispatch interval.
         *
         * This information is only relevant to the RT interval market.
         *
         */
        class DopInstruction extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DopInstruction;
                if (null == bucket)
                   cim_data.DopInstruction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DopInstruction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DopInstruction";
                base.parse_element (/<cim:DopInstruction.mwDOP>([\s\S]*?)<\/cim:DopInstruction.mwDOP>/g, obj, "mwDOP", base.to_string, sub, context);
                base.parse_element (/<cim:DopInstruction.timestampDOP>([\s\S]*?)<\/cim:DopInstruction.timestampDOP>/g, obj, "timestampDOP", base.to_datetime, sub, context);
                base.parse_element (/<cim:DopInstruction.plotPriority>([\s\S]*?)<\/cim:DopInstruction.plotPriority>/g, obj, "plotPriority", base.to_string, sub, context);
                base.parse_element (/<cim:DopInstruction.runIndicatorDOP>([\s\S]*?)<\/cim:DopInstruction.runIndicatorDOP>/g, obj, "runIndicatorDOP", base.to_string, sub, context);
                base.parse_element (/<cim:DopInstruction.updateUser>([\s\S]*?)<\/cim:DopInstruction.updateUser>/g, obj, "updateUser", base.to_string, sub, context);
                base.parse_element (/<cim:DopInstruction.updateTimeStamp>([\s\S]*?)<\/cim:DopInstruction.updateTimeStamp>/g, obj, "updateTimeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:DopInstruction.updateType>([\s\S]*?)<\/cim:DopInstruction.updateType>/g, obj, "updateType", base.to_string, sub, context);
                base.parse_attributes (/<cim:DopInstruction.InstructionClearingDOP\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InstructionClearingDOP", sub, context);
                base.parse_attribute (/<cim:DopInstruction.RegisteredResouce\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResouce", sub, context);
                var bucket = context.parsed.DopInstruction;
                if (null == bucket)
                   context.parsed.DopInstruction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DopInstruction", "mwDOP", "mwDOP",  base.from_string, fields);
                base.export_element (obj, "DopInstruction", "timestampDOP", "timestampDOP",  base.from_datetime, fields);
                base.export_element (obj, "DopInstruction", "plotPriority", "plotPriority",  base.from_string, fields);
                base.export_element (obj, "DopInstruction", "runIndicatorDOP", "runIndicatorDOP",  base.from_string, fields);
                base.export_element (obj, "DopInstruction", "updateUser", "updateUser",  base.from_string, fields);
                base.export_element (obj, "DopInstruction", "updateTimeStamp", "updateTimeStamp",  base.from_datetime, fields);
                base.export_element (obj, "DopInstruction", "updateType", "updateType",  base.from_string, fields);
                base.export_attributes (obj, "DopInstruction", "InstructionClearingDOP", "InstructionClearingDOP", fields);
                base.export_attribute (obj, "DopInstruction", "RegisteredResouce", "RegisteredResouce", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DopInstruction_collapse" aria-expanded="true" aria-controls="DopInstruction_collapse" style="margin-left: 10px;">DopInstruction</a></legend>
                    <div id="DopInstruction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#mwDOP}}<div><b>mwDOP</b>: {{mwDOP}}</div>{{/mwDOP}}
                    {{#timestampDOP}}<div><b>timestampDOP</b>: {{timestampDOP}}</div>{{/timestampDOP}}
                    {{#plotPriority}}<div><b>plotPriority</b>: {{plotPriority}}</div>{{/plotPriority}}
                    {{#runIndicatorDOP}}<div><b>runIndicatorDOP</b>: {{runIndicatorDOP}}</div>{{/runIndicatorDOP}}
                    {{#updateUser}}<div><b>updateUser</b>: {{updateUser}}</div>{{/updateUser}}
                    {{#updateTimeStamp}}<div><b>updateTimeStamp</b>: {{updateTimeStamp}}</div>{{/updateTimeStamp}}
                    {{#updateType}}<div><b>updateType</b>: {{updateType}}</div>{{/updateType}}
                    {{#InstructionClearingDOP}}<div><b>InstructionClearingDOP</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/InstructionClearingDOP}}
                    {{#RegisteredResouce}}<div><b>RegisteredResouce</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegisteredResouce}}&quot;);})'>{{RegisteredResouce}}</a></div>{{/RegisteredResouce}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.InstructionClearingDOP) obj.InstructionClearingDOP_string = obj.InstructionClearingDOP.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.InstructionClearingDOP_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DopInstruction_collapse" aria-expanded="true" aria-controls="DopInstruction_collapse" style="margin-left: 10px;">DopInstruction</a></legend>
                    <div id="DopInstruction_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='mwDOP'>mwDOP: </label><div class='col-sm-8'><input id='mwDOP' class='form-control' type='text'{{#mwDOP}} value='{{mwDOP}}'{{/mwDOP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timestampDOP'>timestampDOP: </label><div class='col-sm-8'><input id='timestampDOP' class='form-control' type='text'{{#timestampDOP}} value='{{timestampDOP}}'{{/timestampDOP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='plotPriority'>plotPriority: </label><div class='col-sm-8'><input id='plotPriority' class='form-control' type='text'{{#plotPriority}} value='{{plotPriority}}'{{/plotPriority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='runIndicatorDOP'>runIndicatorDOP: </label><div class='col-sm-8'><input id='runIndicatorDOP' class='form-control' type='text'{{#runIndicatorDOP}} value='{{runIndicatorDOP}}'{{/runIndicatorDOP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateUser'>updateUser: </label><div class='col-sm-8'><input id='updateUser' class='form-control' type='text'{{#updateUser}} value='{{updateUser}}'{{/updateUser}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateTimeStamp'>updateTimeStamp: </label><div class='col-sm-8'><input id='updateTimeStamp' class='form-control' type='text'{{#updateTimeStamp}} value='{{updateTimeStamp}}'{{/updateTimeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='updateType'>updateType: </label><div class='col-sm-8'><input id='updateType' class='form-control' type='text'{{#updateType}} value='{{updateType}}'{{/updateType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='InstructionClearingDOP'>InstructionClearingDOP: </label><div class='col-sm-8'><input id='InstructionClearingDOP' class='form-control' type='text'{{#InstructionClearingDOP}} value='{{InstructionClearingDOP}}_string'{{/InstructionClearingDOP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RegisteredResouce'>RegisteredResouce: </label><div class='col-sm-8'><input id='RegisteredResouce' class='form-control' type='text'{{#RegisteredResouce}} value='{{RegisteredResouce}}'{{/RegisteredResouce}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "DopInstruction" };
                super.submit (obj);
                temp = document.getElementById ("mwDOP").value; if ("" != temp) obj.mwDOP = temp;
                temp = document.getElementById ("timestampDOP").value; if ("" != temp) obj.timestampDOP = temp;
                temp = document.getElementById ("plotPriority").value; if ("" != temp) obj.plotPriority = temp;
                temp = document.getElementById ("runIndicatorDOP").value; if ("" != temp) obj.runIndicatorDOP = temp;
                temp = document.getElementById ("updateUser").value; if ("" != temp) obj.updateUser = temp;
                temp = document.getElementById ("updateTimeStamp").value; if ("" != temp) obj.updateTimeStamp = temp;
                temp = document.getElementById ("updateType").value; if ("" != temp) obj.updateType = temp;
                temp = document.getElementById ("InstructionClearingDOP").value; if ("" != temp) obj.InstructionClearingDOP = temp.split (",");
                temp = document.getElementById ("RegisteredResouce").value; if ("" != temp) obj.RegisteredResouce = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["InstructionClearingDOP", "InstructionClearingDOP", "1..*", "1..*"],
                        ["RegisteredResouce", "RegisteredResource", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Model of ex-post calcultion of MW losses.
         *
         */
        class ExPostLoss extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExPostLoss;
                if (null == bucket)
                   cim_data.ExPostLoss = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExPostLoss[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "ExPostLoss";
                base.parse_attributes (/<cim:ExPostLoss.ExPostLossResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExPostLossResults", sub, context);
                var bucket = context.parsed.ExPostLoss;
                if (null == bucket)
                   context.parsed.ExPostLoss = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ExPostLoss", "ExPostLossResults", "ExPostLossResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostLoss_collapse" aria-expanded="true" aria-controls="ExPostLoss_collapse" style="margin-left: 10px;">ExPostLoss</a></legend>
                    <div id="ExPostLoss_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#ExPostLossResults}}<div><b>ExPostLossResults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ExPostLossResults}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ExPostLossResults) obj.ExPostLossResults_string = obj.ExPostLossResults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ExPostLossResults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ExPostLoss_collapse" aria-expanded="true" aria-controls="ExPostLoss_collapse" style="margin-left: 10px;">ExPostLoss</a></legend>
                    <div id="ExPostLoss_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "ExPostLoss" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ExPostLossResults", "ExPostLossResults", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * An individual line item on a statement.
         *
         */
        class MarketStatementLineItem extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MarketStatementLineItem;
                if (null == bucket)
                   cim_data.MarketStatementLineItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketStatementLineItem[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MarketStatementLineItem";
                base.parse_element (/<cim:MarketStatementLineItem.intervalNumber>([\s\S]*?)<\/cim:MarketStatementLineItem.intervalNumber>/g, obj, "intervalNumber", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.intervalDate>([\s\S]*?)<\/cim:MarketStatementLineItem.intervalDate>/g, obj, "intervalDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.quantityUOM>([\s\S]*?)<\/cim:MarketStatementLineItem.quantityUOM>/g, obj, "quantityUOM", base.to_string, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.previousAmount>([\s\S]*?)<\/cim:MarketStatementLineItem.previousAmount>/g, obj, "previousAmount", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.currentAmount>([\s\S]*?)<\/cim:MarketStatementLineItem.currentAmount>/g, obj, "currentAmount", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.netAmount>([\s\S]*?)<\/cim:MarketStatementLineItem.netAmount>/g, obj, "netAmount", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.previousQuantity>([\s\S]*?)<\/cim:MarketStatementLineItem.previousQuantity>/g, obj, "previousQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.currentQuantity>([\s\S]*?)<\/cim:MarketStatementLineItem.currentQuantity>/g, obj, "currentQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.netQuantity>([\s\S]*?)<\/cim:MarketStatementLineItem.netQuantity>/g, obj, "netQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.previsouPrice>([\s\S]*?)<\/cim:MarketStatementLineItem.previsouPrice>/g, obj, "previsouPrice", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.currentPrice>([\s\S]*?)<\/cim:MarketStatementLineItem.currentPrice>/g, obj, "currentPrice", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.netPrice>([\s\S]*?)<\/cim:MarketStatementLineItem.netPrice>/g, obj, "netPrice", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.previousISOAmount>([\s\S]*?)<\/cim:MarketStatementLineItem.previousISOAmount>/g, obj, "previousISOAmount", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.currentISOAmount>([\s\S]*?)<\/cim:MarketStatementLineItem.currentISOAmount>/g, obj, "currentISOAmount", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.netISOAmount>([\s\S]*?)<\/cim:MarketStatementLineItem.netISOAmount>/g, obj, "netISOAmount", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.previousISOQuantity>([\s\S]*?)<\/cim:MarketStatementLineItem.previousISOQuantity>/g, obj, "previousISOQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.currentISOQuantity>([\s\S]*?)<\/cim:MarketStatementLineItem.currentISOQuantity>/g, obj, "currentISOQuantity", base.to_float, sub, context);
                base.parse_element (/<cim:MarketStatementLineItem.netISOQuantity>([\s\S]*?)<\/cim:MarketStatementLineItem.netISOQuantity>/g, obj, "netISOQuantity", base.to_float, sub, context);
                base.parse_attribute (/<cim:MarketStatementLineItem.MarketStatement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketStatement", sub, context);
                base.parse_attributes (/<cim:MarketStatementLineItem.MktUserAttribute\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktUserAttribute", sub, context);
                base.parse_attribute (/<cim:MarketStatementLineItem.ContainerMarketStatementLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContainerMarketStatementLineItem", sub, context);
                base.parse_attributes (/<cim:MarketStatementLineItem.ComponentMarketStatementLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ComponentMarketStatementLineItem", sub, context);
                base.parse_attribute (/<cim:MarketStatementLineItem.PassThroughBill\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PassThroughBill", sub, context);
                var bucket = context.parsed.MarketStatementLineItem;
                if (null == bucket)
                   context.parsed.MarketStatementLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketStatementLineItem", "intervalNumber", "intervalNumber",  base.from_string, fields);
                base.export_element (obj, "MarketStatementLineItem", "intervalDate", "intervalDate",  base.from_datetime, fields);
                base.export_element (obj, "MarketStatementLineItem", "quantityUOM", "quantityUOM",  base.from_string, fields);
                base.export_element (obj, "MarketStatementLineItem", "previousAmount", "previousAmount",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "currentAmount", "currentAmount",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "netAmount", "netAmount",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "previousQuantity", "previousQuantity",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "currentQuantity", "currentQuantity",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "netQuantity", "netQuantity",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "previsouPrice", "previsouPrice",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "currentPrice", "currentPrice",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "netPrice", "netPrice",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "previousISOAmount", "previousISOAmount",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "currentISOAmount", "currentISOAmount",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "netISOAmount", "netISOAmount",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "previousISOQuantity", "previousISOQuantity",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "currentISOQuantity", "currentISOQuantity",  base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "netISOQuantity", "netISOQuantity",  base.from_float, fields);
                base.export_attribute (obj, "MarketStatementLineItem", "MarketStatement", "MarketStatement", fields);
                base.export_attributes (obj, "MarketStatementLineItem", "MktUserAttribute", "MktUserAttribute", fields);
                base.export_attribute (obj, "MarketStatementLineItem", "ContainerMarketStatementLineItem", "ContainerMarketStatementLineItem", fields);
                base.export_attributes (obj, "MarketStatementLineItem", "ComponentMarketStatementLineItem", "ComponentMarketStatementLineItem", fields);
                base.export_attribute (obj, "MarketStatementLineItem", "PassThroughBill", "PassThroughBill", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketStatementLineItem_collapse" aria-expanded="true" aria-controls="MarketStatementLineItem_collapse" style="margin-left: 10px;">MarketStatementLineItem</a></legend>
                    <div id="MarketStatementLineItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#intervalNumber}}<div><b>intervalNumber</b>: {{intervalNumber}}</div>{{/intervalNumber}}
                    {{#intervalDate}}<div><b>intervalDate</b>: {{intervalDate}}</div>{{/intervalDate}}
                    {{#quantityUOM}}<div><b>quantityUOM</b>: {{quantityUOM}}</div>{{/quantityUOM}}
                    {{#previousAmount}}<div><b>previousAmount</b>: {{previousAmount}}</div>{{/previousAmount}}
                    {{#currentAmount}}<div><b>currentAmount</b>: {{currentAmount}}</div>{{/currentAmount}}
                    {{#netAmount}}<div><b>netAmount</b>: {{netAmount}}</div>{{/netAmount}}
                    {{#previousQuantity}}<div><b>previousQuantity</b>: {{previousQuantity}}</div>{{/previousQuantity}}
                    {{#currentQuantity}}<div><b>currentQuantity</b>: {{currentQuantity}}</div>{{/currentQuantity}}
                    {{#netQuantity}}<div><b>netQuantity</b>: {{netQuantity}}</div>{{/netQuantity}}
                    {{#previsouPrice}}<div><b>previsouPrice</b>: {{previsouPrice}}</div>{{/previsouPrice}}
                    {{#currentPrice}}<div><b>currentPrice</b>: {{currentPrice}}</div>{{/currentPrice}}
                    {{#netPrice}}<div><b>netPrice</b>: {{netPrice}}</div>{{/netPrice}}
                    {{#previousISOAmount}}<div><b>previousISOAmount</b>: {{previousISOAmount}}</div>{{/previousISOAmount}}
                    {{#currentISOAmount}}<div><b>currentISOAmount</b>: {{currentISOAmount}}</div>{{/currentISOAmount}}
                    {{#netISOAmount}}<div><b>netISOAmount</b>: {{netISOAmount}}</div>{{/netISOAmount}}
                    {{#previousISOQuantity}}<div><b>previousISOQuantity</b>: {{previousISOQuantity}}</div>{{/previousISOQuantity}}
                    {{#currentISOQuantity}}<div><b>currentISOQuantity</b>: {{currentISOQuantity}}</div>{{/currentISOQuantity}}
                    {{#netISOQuantity}}<div><b>netISOQuantity</b>: {{netISOQuantity}}</div>{{/netISOQuantity}}
                    {{#MarketStatement}}<div><b>MarketStatement</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MarketStatement}}&quot;);})'>{{MarketStatement}}</a></div>{{/MarketStatement}}
                    {{#MktUserAttribute}}<div><b>MktUserAttribute</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MktUserAttribute}}
                    {{#ContainerMarketStatementLineItem}}<div><b>ContainerMarketStatementLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ContainerMarketStatementLineItem}}&quot;);})'>{{ContainerMarketStatementLineItem}}</a></div>{{/ContainerMarketStatementLineItem}}
                    {{#ComponentMarketStatementLineItem}}<div><b>ComponentMarketStatementLineItem</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ComponentMarketStatementLineItem}}
                    {{#PassThroughBill}}<div><b>PassThroughBill</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PassThroughBill}}&quot;);})'>{{PassThroughBill}}</a></div>{{/PassThroughBill}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MktUserAttribute) obj.MktUserAttribute_string = obj.MktUserAttribute.join ();
                if (obj.ComponentMarketStatementLineItem) obj.ComponentMarketStatementLineItem_string = obj.ComponentMarketStatementLineItem.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MktUserAttribute_string;
                delete obj.ComponentMarketStatementLineItem_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MarketStatementLineItem_collapse" aria-expanded="true" aria-controls="MarketStatementLineItem_collapse" style="margin-left: 10px;">MarketStatementLineItem</a></legend>
                    <div id="MarketStatementLineItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalNumber'>intervalNumber: </label><div class='col-sm-8'><input id='intervalNumber' class='form-control' type='text'{{#intervalNumber}} value='{{intervalNumber}}'{{/intervalNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='intervalDate'>intervalDate: </label><div class='col-sm-8'><input id='intervalDate' class='form-control' type='text'{{#intervalDate}} value='{{intervalDate}}'{{/intervalDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='quantityUOM'>quantityUOM: </label><div class='col-sm-8'><input id='quantityUOM' class='form-control' type='text'{{#quantityUOM}} value='{{quantityUOM}}'{{/quantityUOM}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='previousAmount'>previousAmount: </label><div class='col-sm-8'><input id='previousAmount' class='form-control' type='text'{{#previousAmount}} value='{{previousAmount}}'{{/previousAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='currentAmount'>currentAmount: </label><div class='col-sm-8'><input id='currentAmount' class='form-control' type='text'{{#currentAmount}} value='{{currentAmount}}'{{/currentAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='netAmount'>netAmount: </label><div class='col-sm-8'><input id='netAmount' class='form-control' type='text'{{#netAmount}} value='{{netAmount}}'{{/netAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='previousQuantity'>previousQuantity: </label><div class='col-sm-8'><input id='previousQuantity' class='form-control' type='text'{{#previousQuantity}} value='{{previousQuantity}}'{{/previousQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='currentQuantity'>currentQuantity: </label><div class='col-sm-8'><input id='currentQuantity' class='form-control' type='text'{{#currentQuantity}} value='{{currentQuantity}}'{{/currentQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='netQuantity'>netQuantity: </label><div class='col-sm-8'><input id='netQuantity' class='form-control' type='text'{{#netQuantity}} value='{{netQuantity}}'{{/netQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='previsouPrice'>previsouPrice: </label><div class='col-sm-8'><input id='previsouPrice' class='form-control' type='text'{{#previsouPrice}} value='{{previsouPrice}}'{{/previsouPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='currentPrice'>currentPrice: </label><div class='col-sm-8'><input id='currentPrice' class='form-control' type='text'{{#currentPrice}} value='{{currentPrice}}'{{/currentPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='netPrice'>netPrice: </label><div class='col-sm-8'><input id='netPrice' class='form-control' type='text'{{#netPrice}} value='{{netPrice}}'{{/netPrice}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='previousISOAmount'>previousISOAmount: </label><div class='col-sm-8'><input id='previousISOAmount' class='form-control' type='text'{{#previousISOAmount}} value='{{previousISOAmount}}'{{/previousISOAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='currentISOAmount'>currentISOAmount: </label><div class='col-sm-8'><input id='currentISOAmount' class='form-control' type='text'{{#currentISOAmount}} value='{{currentISOAmount}}'{{/currentISOAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='netISOAmount'>netISOAmount: </label><div class='col-sm-8'><input id='netISOAmount' class='form-control' type='text'{{#netISOAmount}} value='{{netISOAmount}}'{{/netISOAmount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='previousISOQuantity'>previousISOQuantity: </label><div class='col-sm-8'><input id='previousISOQuantity' class='form-control' type='text'{{#previousISOQuantity}} value='{{previousISOQuantity}}'{{/previousISOQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='currentISOQuantity'>currentISOQuantity: </label><div class='col-sm-8'><input id='currentISOQuantity' class='form-control' type='text'{{#currentISOQuantity}} value='{{currentISOQuantity}}'{{/currentISOQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='netISOQuantity'>netISOQuantity: </label><div class='col-sm-8'><input id='netISOQuantity' class='form-control' type='text'{{#netISOQuantity}} value='{{netISOQuantity}}'{{/netISOQuantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MarketStatement'>MarketStatement: </label><div class='col-sm-8'><input id='MarketStatement' class='form-control' type='text'{{#MarketStatement}} value='{{MarketStatement}}'{{/MarketStatement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MktUserAttribute'>MktUserAttribute: </label><div class='col-sm-8'><input id='MktUserAttribute' class='form-control' type='text'{{#MktUserAttribute}} value='{{MktUserAttribute}}_string'{{/MktUserAttribute}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ContainerMarketStatementLineItem'>ContainerMarketStatementLineItem: </label><div class='col-sm-8'><input id='ContainerMarketStatementLineItem' class='form-control' type='text'{{#ContainerMarketStatementLineItem}} value='{{ContainerMarketStatementLineItem}}'{{/ContainerMarketStatementLineItem}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='PassThroughBill'>PassThroughBill: </label><div class='col-sm-8'><input id='PassThroughBill' class='form-control' type='text'{{#PassThroughBill}} value='{{PassThroughBill}}'{{/PassThroughBill}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MarketStatementLineItem" };
                super.submit (obj);
                temp = document.getElementById ("intervalNumber").value; if ("" != temp) obj.intervalNumber = temp;
                temp = document.getElementById ("intervalDate").value; if ("" != temp) obj.intervalDate = temp;
                temp = document.getElementById ("quantityUOM").value; if ("" != temp) obj.quantityUOM = temp;
                temp = document.getElementById ("previousAmount").value; if ("" != temp) obj.previousAmount = temp;
                temp = document.getElementById ("currentAmount").value; if ("" != temp) obj.currentAmount = temp;
                temp = document.getElementById ("netAmount").value; if ("" != temp) obj.netAmount = temp;
                temp = document.getElementById ("previousQuantity").value; if ("" != temp) obj.previousQuantity = temp;
                temp = document.getElementById ("currentQuantity").value; if ("" != temp) obj.currentQuantity = temp;
                temp = document.getElementById ("netQuantity").value; if ("" != temp) obj.netQuantity = temp;
                temp = document.getElementById ("previsouPrice").value; if ("" != temp) obj.previsouPrice = temp;
                temp = document.getElementById ("currentPrice").value; if ("" != temp) obj.currentPrice = temp;
                temp = document.getElementById ("netPrice").value; if ("" != temp) obj.netPrice = temp;
                temp = document.getElementById ("previousISOAmount").value; if ("" != temp) obj.previousISOAmount = temp;
                temp = document.getElementById ("currentISOAmount").value; if ("" != temp) obj.currentISOAmount = temp;
                temp = document.getElementById ("netISOAmount").value; if ("" != temp) obj.netISOAmount = temp;
                temp = document.getElementById ("previousISOQuantity").value; if ("" != temp) obj.previousISOQuantity = temp;
                temp = document.getElementById ("currentISOQuantity").value; if ("" != temp) obj.currentISOQuantity = temp;
                temp = document.getElementById ("netISOQuantity").value; if ("" != temp) obj.netISOQuantity = temp;
                temp = document.getElementById ("MarketStatement").value; if ("" != temp) obj.MarketStatement = temp;
                temp = document.getElementById ("MktUserAttribute").value; if ("" != temp) obj.MktUserAttribute = temp.split (",");
                temp = document.getElementById ("ContainerMarketStatementLineItem").value; if ("" != temp) obj.ContainerMarketStatementLineItem = temp;
                temp = document.getElementById ("PassThroughBill").value; if ("" != temp) obj.PassThroughBill = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MarketStatement", "MarketStatement", "1", "0..*"],
                        ["MktUserAttribute", "MktUserAttribute", "0..*", "0..*"],
                        ["ContainerMarketStatementLineItem", "MarketStatementLineItem", "0..1", "0..*"],
                        ["ComponentMarketStatementLineItem", "MarketStatementLineItem", "0..*", "0..1"],
                        ["PassThroughBill", "PassThroughBill", "0..1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Model of market power mitigation through reference or mitigated bids.
         *
         * Interval based.
         *
         */
        class MitigatedBidClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MitigatedBidClearing;
                if (null == bucket)
                   cim_data.MitigatedBidClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MitigatedBidClearing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "MitigatedBidClearing";
                base.parse_attributes (/<cim:MitigatedBidClearing.MitigatedBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MitigatedBid", sub, context);
                base.parse_attributes (/<cim:MitigatedBidClearing.RMRDetermination\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RMRDetermination", sub, context);
                base.parse_attributes (/<cim:MitigatedBidClearing.MPMResourceStatus\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MPMResourceStatus", sub, context);
                var bucket = context.parsed.MitigatedBidClearing;
                if (null == bucket)
                   context.parsed.MitigatedBidClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MitigatedBidClearing", "MitigatedBid", "MitigatedBid", fields);
                base.export_attributes (obj, "MitigatedBidClearing", "RMRDetermination", "RMRDetermination", fields);
                base.export_attributes (obj, "MitigatedBidClearing", "MPMResourceStatus", "MPMResourceStatus", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MitigatedBidClearing_collapse" aria-expanded="true" aria-controls="MitigatedBidClearing_collapse" style="margin-left: 10px;">MitigatedBidClearing</a></legend>
                    <div id="MitigatedBidClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#MitigatedBid}}<div><b>MitigatedBid</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MitigatedBid}}
                    {{#RMRDetermination}}<div><b>RMRDetermination</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/RMRDetermination}}
                    {{#MPMResourceStatus}}<div><b>MPMResourceStatus</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/MPMResourceStatus}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MitigatedBid) obj.MitigatedBid_string = obj.MitigatedBid.join ();
                if (obj.RMRDetermination) obj.RMRDetermination_string = obj.RMRDetermination.join ();
                if (obj.MPMResourceStatus) obj.MPMResourceStatus_string = obj.MPMResourceStatus.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MitigatedBid_string;
                delete obj.RMRDetermination_string;
                delete obj.MPMResourceStatus_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MitigatedBidClearing_collapse" aria-expanded="true" aria-controls="MitigatedBidClearing_collapse" style="margin-left: 10px;">MitigatedBidClearing</a></legend>
                    <div id="MitigatedBidClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MitigatedBid'>MitigatedBid: </label><div class='col-sm-8'><input id='MitigatedBid' class='form-control' type='text'{{#MitigatedBid}} value='{{MitigatedBid}}_string'{{/MitigatedBid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='RMRDetermination'>RMRDetermination: </label><div class='col-sm-8'><input id='RMRDetermination' class='form-control' type='text'{{#RMRDetermination}} value='{{RMRDetermination}}_string'{{/RMRDetermination}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MPMResourceStatus'>MPMResourceStatus: </label><div class='col-sm-8'><input id='MPMResourceStatus' class='form-control' type='text'{{#MPMResourceStatus}} value='{{MPMResourceStatus}}_string'{{/MPMResourceStatus}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "MitigatedBidClearing" };
                super.submit (obj);
                temp = document.getElementById ("MitigatedBid").value; if ("" != temp) obj.MitigatedBid = temp.split (",");
                temp = document.getElementById ("RMRDetermination").value; if ("" != temp) obj.RMRDetermination = temp.split (",");
                temp = document.getElementById ("MPMResourceStatus").value; if ("" != temp) obj.MPMResourceStatus = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["MitigatedBid", "MitigatedBid", "0..*", "1..*"],
                        ["RMRDetermination", "RMRDetermination", "0..*", "1..*"],
                        ["MPMResourceStatus", "MPMResourceStatus", "0..*", "1..*"]
                    ]
                );
            }
        }

        /**
         * Model of various charges associated with an energy profile to support billing and settlement
         *
         */
        class ChargeProfileData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ChargeProfileData;
                if (null == bucket)
                   cim_data.ChargeProfileData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ChargeProfileData[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ChargeProfileData";
                base.parse_element (/<cim:ChargeProfileData.sequence>([\s\S]*?)<\/cim:ChargeProfileData.sequence>/g, obj, "sequence", base.to_string, sub, context);
                base.parse_element (/<cim:ChargeProfileData.timeStamp>([\s\S]*?)<\/cim:ChargeProfileData.timeStamp>/g, obj, "timeStamp", base.to_datetime, sub, context);
                base.parse_element (/<cim:ChargeProfileData.value>([\s\S]*?)<\/cim:ChargeProfileData.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_attribute (/<cim:ChargeProfileData.BillDeterminant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BillDeterminant", sub, context);
                base.parse_attribute (/<cim:ChargeProfileData.ChargeProfile\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ChargeProfile", sub, context);
                var bucket = context.parsed.ChargeProfileData;
                if (null == bucket)
                   context.parsed.ChargeProfileData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ChargeProfileData", "sequence", "sequence",  base.from_string, fields);
                base.export_element (obj, "ChargeProfileData", "timeStamp", "timeStamp",  base.from_datetime, fields);
                base.export_element (obj, "ChargeProfileData", "value", "value",  base.from_float, fields);
                base.export_attribute (obj, "ChargeProfileData", "BillDeterminant", "BillDeterminant", fields);
                base.export_attribute (obj, "ChargeProfileData", "ChargeProfile", "ChargeProfile", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ChargeProfileData_collapse" aria-expanded="true" aria-controls="ChargeProfileData_collapse" style="margin-left: 10px;">ChargeProfileData</a></legend>
                    <div id="ChargeProfileData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#sequence}}<div><b>sequence</b>: {{sequence}}</div>{{/sequence}}
                    {{#timeStamp}}<div><b>timeStamp</b>: {{timeStamp}}</div>{{/timeStamp}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#BillDeterminant}}<div><b>BillDeterminant</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BillDeterminant}}&quot;);})'>{{BillDeterminant}}</a></div>{{/BillDeterminant}}
                    {{#ChargeProfile}}<div><b>ChargeProfile</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ChargeProfile}}&quot;);})'>{{ChargeProfile}}</a></div>{{/ChargeProfile}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ChargeProfileData_collapse" aria-expanded="true" aria-controls="ChargeProfileData_collapse" style="margin-left: 10px;">ChargeProfileData</a></legend>
                    <div id="ChargeProfileData_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='sequence'>sequence: </label><div class='col-sm-8'><input id='sequence' class='form-control' type='text'{{#sequence}} value='{{sequence}}'{{/sequence}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeStamp'>timeStamp: </label><div class='col-sm-8'><input id='timeStamp' class='form-control' type='text'{{#timeStamp}} value='{{timeStamp}}'{{/timeStamp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BillDeterminant'>BillDeterminant: </label><div class='col-sm-8'><input id='BillDeterminant' class='form-control' type='text'{{#BillDeterminant}} value='{{BillDeterminant}}'{{/BillDeterminant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ChargeProfile'>ChargeProfile: </label><div class='col-sm-8'><input id='ChargeProfile' class='form-control' type='text'{{#ChargeProfile}} value='{{ChargeProfile}}'{{/ChargeProfile}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ChargeProfileData" };
                super.submit (obj);
                temp = document.getElementById ("sequence").value; if ("" != temp) obj.sequence = temp;
                temp = document.getElementById ("timeStamp").value; if ("" != temp) obj.timeStamp = temp;
                temp = document.getElementById ("value").value; if ("" != temp) obj.value = temp;
                temp = document.getElementById ("BillDeterminant").value; if ("" != temp) obj.BillDeterminant = temp;
                temp = document.getElementById ("ChargeProfile").value; if ("" != temp) obj.ChargeProfile = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["BillDeterminant", "BillDeterminant", "0..1", "0..*"],
                        ["ChargeProfile", "ChargeProfile", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * Models results of market clearing which call for commitment of units.
         *
         */
        class CommitmentClearing extends MarketPlan.MarketFactors
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.CommitmentClearing;
                if (null == bucket)
                   cim_data.CommitmentClearing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CommitmentClearing[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "CommitmentClearing";
                base.parse_attributes (/<cim:CommitmentClearing.Commitments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Commitments", sub, context);
                var bucket = context.parsed.CommitmentClearing;
                if (null == bucket)
                   context.parsed.CommitmentClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = MarketPlan.MarketFactors.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "CommitmentClearing", "Commitments", "Commitments", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CommitmentClearing_collapse" aria-expanded="true" aria-controls="CommitmentClearing_collapse" style="margin-left: 10px;">CommitmentClearing</a></legend>
                    <div id="CommitmentClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.template.call (this) +
                    `
                    {{#Commitments}}<div><b>Commitments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Commitments}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Commitments) obj.Commitments_string = obj.Commitments.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Commitments_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CommitmentClearing_collapse" aria-expanded="true" aria-controls="CommitmentClearing_collapse" style="margin-left: 10px;">CommitmentClearing</a></legend>
                    <div id="CommitmentClearing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + MarketPlan.MarketFactors.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Commitments'>Commitments: </label><div class='col-sm-8'><input id='Commitments' class='form-control' type='text'{{#Commitments}} value='{{Commitments}}_string'{{/Commitments}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CommitmentClearing" };
                super.submit (obj);
                temp = document.getElementById ("Commitments").value; if ("" != temp) obj.Commitments = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Commitments", "Commitments", "1..*", "1..*"]
                    ]
                );
            }
        }

        return (
            {
                ExPostLossResults: ExPostLossResults,
                MitigatedBidSegment: MitigatedBidSegment,
                TransactionBidResults: TransactionBidResults,
                ExPostPricingResults: ExPostPricingResults,
                CommitmentClearing: CommitmentClearing,
                ResourceLoadFollowingInst: ResourceLoadFollowingInst,
                AncillaryServiceClearing: AncillaryServiceClearing,
                InstructionClearingDOT: InstructionClearingDOT,
                GeneralClearingResults: GeneralClearingResults,
                MitigatedBidClearing: MitigatedBidClearing,
                Instructions: Instructions,
                TransactionBidClearing: TransactionBidClearing,
                LossClearingResults: LossClearingResults,
                InstructionClearing: InstructionClearing,
                LossClearing: LossClearing,
                MitigatedBid: MitigatedBid,
                ExPostResourceResults: ExPostResourceResults,
                InstructionClearingDOP: InstructionClearingDOP,
                ConstraintClearing: ConstraintClearing,
                Settlement: Settlement,
                SelfScheduleBreakdown: SelfScheduleBreakdown,
                MPMClearing: MPMClearing,
                ResourceDispatchResults: ResourceDispatchResults,
                PassThroughBill: PassThroughBill,
                MarketResults: MarketResults,
                GeneralClearing: GeneralClearing,
                ResourceAwardClearing: ResourceAwardClearing,
                RUCAwardInstruction: RUCAwardInstruction,
                ExPostLoss: ExPostLoss,
                ExPostMarketRegion: ExPostMarketRegion,
                LoadFollowingOperatorInput: LoadFollowingOperatorInput,
                ChargeProfile: ChargeProfile,
                ExPostResource: ExPostResource,
                ChargeProfileData: ChargeProfileData,
                RMRDetermination: RMRDetermination,
                DopInstruction: DopInstruction,
                PnodeResults: PnodeResults,
                MarketStatement: MarketStatement,
                ResourceAwardInstruction: ResourceAwardInstruction,
                RMROperatorInput: RMROperatorInput,
                ResourceClearing: ResourceClearing,
                MPMTestResults: MPMTestResults,
                Commitments: Commitments,
                ExPostPricing: ExPostPricing,
                ConstraintResults: ConstraintResults,
                DotInstruction: DotInstruction,
                ExPostMarketRegionResults: ExPostMarketRegionResults,
                MarketStatementLineItem: MarketStatementLineItem,
                MPMResourceStatus: MPMResourceStatus,
                PnodeClearing: PnodeClearing,
                MarketRegionResults: MarketRegionResults,
                BillDeterminant: BillDeterminant
            }
        );
    }
);