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
                this._id = template.id;
                var bucket = cim_data.ResourceClearing;
                if (null == bucket)
                   cim_data.ResourceClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceClearing";

                var bucket = context.parsed.ResourceClearing;
                if (null == bucket)
                   context.parsed.ResourceClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.MarketResults;
                if (null == bucket)
                   cim_data.MarketResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketResults[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "MarketResults", "startUpCost", base.from_float, fields);
                base.export_element (obj, "MarketResults", "minimumLoadCost", base.from_float, fields);
                base.export_element (obj, "MarketResults", "contingentOperatingResAvail", base.from_string, fields);
                base.export_element (obj, "MarketResults", "energyCost", base.from_float, fields);
                base.export_element (obj, "MarketResults", "totalCost", base.from_float, fields);
                base.export_element (obj, "MarketResults", "ancillarySvcCost", base.from_float, fields);
                base.export_element (obj, "MarketResults", "totalRucCost", base.from_float, fields);
                base.export_attribute (obj, "MarketResults", "EnergyMarket", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.PnodeResults;
                if (null == bucket)
                   cim_data.PnodeResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PnodeResults[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "PnodeResults", "marginalClearingPrice", base.from_float, fields);
                base.export_element (obj, "PnodeResults", "costLMP", base.from_float, fields);
                base.export_element (obj, "PnodeResults", "lossLMP", base.from_float, fields);
                base.export_element (obj, "PnodeResults", "congestLMP", base.from_float, fields);
                base.export_element (obj, "PnodeResults", "scheduledMW", base.from_float, fields);
                base.export_element (obj, "PnodeResults", "updateUser", base.from_string, fields);
                base.export_element (obj, "PnodeResults", "updateTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "PnodeResults", "updateType", base.from_string, fields);
                base.export_attribute (obj, "PnodeResults", "Pnode", fields);
                base.export_attribute (obj, "PnodeResults", "PnodeClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ConstraintClearing;
                if (null == bucket)
                   cim_data.ConstraintClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConstraintClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "ConstraintClearing";

                var bucket = context.parsed.ConstraintClearing;
                if (null == bucket)
                   context.parsed.ConstraintClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.InstructionClearing;
                if (null == bucket)
                   cim_data.InstructionClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InstructionClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "InstructionClearing";

                var bucket = context.parsed.InstructionClearing;
                if (null == bucket)
                   context.parsed.InstructionClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.SelfScheduleBreakdown;
                if (null == bucket)
                   cim_data.SelfScheduleBreakdown = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SelfScheduleBreakdown[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "SelfScheduleBreakdown", "selfSchedMW", base.from_float, fields);
                base.export_element (obj, "SelfScheduleBreakdown", "selfSchedType", base.from_string, fields);
                base.export_attribute (obj, "SelfScheduleBreakdown", "ResourceAwardInstruction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ExPostLossResults;
                if (null == bucket)
                   cim_data.ExPostLossResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExPostLossResults[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ExPostLossResults", "totalLossMW", base.from_float, fields);
                base.export_element (obj, "ExPostLossResults", "ehvLossMW", base.from_float, fields);
                base.export_attribute (obj, "ExPostLossResults", "ExPostLoss", fields);
                base.export_attribute (obj, "ExPostLossResults", "SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ResourceDispatchResults;
                if (null == bucket)
                   cim_data.ResourceDispatchResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceDispatchResults[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ResourceDispatchResults", "blockedDispatch", base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "blockedPublishDOP", base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "contingencyFlag", base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "limitIndicator", base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "lowerLimit", base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "maxRampRate", base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "operatingLimitHigh", base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "operatingLimitLow", base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "penaltyDispatchIndicator", base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "regulatingLimitHigh", base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "regulatingLimitLow", base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "resourceStatus", base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "totalSchedule", base.from_float, fields);
                base.export_element (obj, "ResourceDispatchResults", "updateTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "ResourceDispatchResults", "updateType", base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "updateUser", base.from_string, fields);
                base.export_element (obj, "ResourceDispatchResults", "upperLimit", base.from_float, fields);
                base.export_attribute (obj, "ResourceDispatchResults", "RegisteredResource", fields);
                base.export_attribute (obj, "ResourceDispatchResults", "ResourceClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.DotInstruction;
                if (null == bucket)
                   cim_data.DotInstruction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DotInstruction[this._id];
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

                var bucket = context.parsed.DotInstruction;
                if (null == bucket)
                   context.parsed.DotInstruction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "DotInstruction", "actualRampRate", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "compliantIndicator", base.from_string, fields);
                base.export_element (obj, "DotInstruction", "DOT", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "economicMaxOverride", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "expectedEnergy", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "generatorPerformanceDegree", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "hourAheadSchedEnergy", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "hourlySchedule", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "instructionTime", base.from_datetime, fields);
                base.export_element (obj, "DotInstruction", "maximumEmergencyInd", base.from_boolean, fields);
                base.export_element (obj, "DotInstruction", "meterLoadFollowing", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "nonRampRestrictedMW", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "nonSpinReserve", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "previousDOTTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "DotInstruction", "rampRateLimit", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "regulationStatus", base.from_string, fields);
                base.export_element (obj, "DotInstruction", "spinReserve", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "standardRampEnergy", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "supplementalEnergy", base.from_float, fields);
                base.export_element (obj, "DotInstruction", "unitStatus", base.from_string, fields);
                base.export_attribute (obj, "DotInstruction", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.MPMTestResults;
                if (null == bucket)
                   cim_data.MPMTestResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MPMTestResults[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "MPMTestResults", "outcome", base.from_string, fields);
                base.export_element (obj, "MPMTestResults", "marginPercent", base.from_string, fields);
                base.export_attribute (obj, "MPMTestResults", "MPMClearing", fields);
                base.export_attribute (obj, "MPMTestResults", "AggregatedPnode", fields);
                base.export_attribute (obj, "MPMTestResults", "MPMTestCategory", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.RMROperatorInput;
                if (null == bucket)
                   cim_data.RMROperatorInput = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RMROperatorInput[this._id];
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

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                base.export_element (obj, "RMROperatorInput", "manuallySchedRMRMw", base.from_float, fields);
                base.export_element (obj, "RMROperatorInput", "updateUser", base.from_string, fields);
                base.export_element (obj, "RMROperatorInput", "updateTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "RMROperatorInput", "updateType", base.from_string, fields);
                base.export_attribute (obj, "RMROperatorInput", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ResourceAwardInstruction;
                if (null == bucket)
                   cim_data.ResourceAwardInstruction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceAwardInstruction[this._id];
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

                var bucket = context.parsed.ResourceAwardInstruction;
                if (null == bucket)
                   context.parsed.ResourceAwardInstruction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ResourceAwardInstruction", "awardMW", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "clearedMW", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "clearedPrice", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "congestLMP", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "costLMP", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "dispatcherAddedMW", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "economicMax", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "economicMin", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "effRegulationDownLimit", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "effRegulationUpLimit", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "lmp", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "lossLMP", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "manuallyBlocked", base.from_string, fields);
                base.export_element (obj, "ResourceAwardInstruction", "marginalResourceIndicator", base.from_string, fields);
                base.export_element (obj, "ResourceAwardInstruction", "mustRunInd", base.from_boolean, fields);
                base.export_element (obj, "ResourceAwardInstruction", "noLoadCost", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "optimalBidCost", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "optimalBidPay", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "optimalMargin", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "overrideTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "ResourceAwardInstruction", "overrideValue", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "selfSchedMW", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "startUpCost", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "status", base.from_string, fields);
                base.export_element (obj, "ResourceAwardInstruction", "totalRevenue", base.from_float, fields);
                base.export_element (obj, "ResourceAwardInstruction", "updateTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "ResourceAwardInstruction", "updateType", base.from_string, fields);
                base.export_element (obj, "ResourceAwardInstruction", "updateUser", base.from_string, fields);
                base.export_attribute (obj, "ResourceAwardInstruction", "RegisteredResource", fields);
                base.export_attribute (obj, "ResourceAwardInstruction", "MarketProduct", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.LoadFollowingOperatorInput;
                if (null == bucket)
                   cim_data.LoadFollowingOperatorInput = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadFollowingOperatorInput[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "LoadFollowingOperatorInput", "dataEntryTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "LoadFollowingOperatorInput", "tempLoadFollowingUpManualCap", base.from_float, fields);
                base.export_element (obj, "LoadFollowingOperatorInput", "tempLoadFollowingDownManualCap", base.from_float, fields);
                base.export_element (obj, "LoadFollowingOperatorInput", "updateUser", base.from_string, fields);
                base.export_element (obj, "LoadFollowingOperatorInput", "updateTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "LoadFollowingOperatorInput", "updateType", base.from_string, fields);
                base.export_attribute (obj, "LoadFollowingOperatorInput", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.MPMResourceStatus;
                if (null == bucket)
                   cim_data.MPMResourceStatus = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MPMResourceStatus[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MPMResourceStatus";
                base.parse_element (/<cim:MPMResourceStatus.resourceStatus>([\s\S]*?)<\/cim:MPMResourceStatus.resourceStatus>/g, obj, "resourceStatus", base.to_string, sub, context);
                base.parse_attribute (/<cim:MPMResourceStatus.MPMTestCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MPMTestCategory", sub, context);
                base.parse_attribute (/<cim:MPMResourceStatus.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);

                var bucket = context.parsed.MPMResourceStatus;
                if (null == bucket)
                   context.parsed.MPMResourceStatus = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "MPMResourceStatus", "resourceStatus", base.from_string, fields);
                base.export_attribute (obj, "MPMResourceStatus", "MPMTestCategory", fields);
                base.export_attribute (obj, "MPMResourceStatus", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.MitigatedBidSegment;
                if (null == bucket)
                   cim_data.MitigatedBidSegment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MitigatedBidSegment[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "MitigatedBidSegment", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "MitigatedBidSegment", "thresholdType", base.from_string, fields);
                base.export_element (obj, "MitigatedBidSegment", "segmentNumber", base.from_string, fields);
                base.export_element (obj, "MitigatedBidSegment", "segmentMW", base.from_float, fields);
                base.export_attribute (obj, "MitigatedBidSegment", "Bid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.MarketStatement;
                if (null == bucket)
                   cim_data.MarketStatement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketStatement[this._id];
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

                var bucket = context.parsed.MarketStatement;
                if (null == bucket)
                   context.parsed.MarketStatement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_element (obj, "MarketStatement", "tradeDate", base.from_datetime, fields);
                base.export_element (obj, "MarketStatement", "referenceNumber", base.from_string, fields);
                base.export_element (obj, "MarketStatement", "start", base.from_datetime, fields);
                base.export_element (obj, "MarketStatement", "end", base.from_datetime, fields);
                base.export_element (obj, "MarketStatement", "transactionDate", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ResourceLoadFollowingInst;
                if (null == bucket)
                   cim_data.ResourceLoadFollowingInst = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceLoadFollowingInst[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ResourceLoadFollowingInst", "instructionID", base.from_string, fields);
                base.export_element (obj, "ResourceLoadFollowingInst", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "ResourceLoadFollowingInst", "calcLoadFollowingMW", base.from_float, fields);
                base.export_element (obj, "ResourceLoadFollowingInst", "dispWindowLowLimt", base.from_float, fields);
                base.export_element (obj, "ResourceLoadFollowingInst", "dispWindowHighLimt", base.from_float, fields);
                base.export_attribute (obj, "ResourceLoadFollowingInst", "RegisteredResource", fields);
                base.export_attribute (obj, "ResourceLoadFollowingInst", "ResourceClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.PnodeClearing;
                if (null == bucket)
                   cim_data.PnodeClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PnodeClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "PnodeClearing";

                var bucket = context.parsed.PnodeClearing;
                if (null == bucket)
                   context.parsed.PnodeClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.InstructionClearingDOT;
                if (null == bucket)
                   cim_data.InstructionClearingDOT = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InstructionClearingDOT[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "InstructionClearingDOT";
                base.parse_element (/<cim:InstructionClearingDOT.contingencyActive>([\s\S]*?)<\/cim:InstructionClearingDOT.contingencyActive>/g, obj, "contingencyActive", base.to_string, sub, context);
                base.parse_element (/<cim:InstructionClearingDOT.dispatchMode>([\s\S]*?)<\/cim:InstructionClearingDOT.dispatchMode>/g, obj, "dispatchMode", base.to_string, sub, context);

                var bucket = context.parsed.InstructionClearingDOT;
                if (null == bucket)
                   context.parsed.InstructionClearingDOT = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                base.export_element (obj, "InstructionClearingDOT", "contingencyActive", base.from_string, fields);
                base.export_element (obj, "InstructionClearingDOT", "dispatchMode", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.LossClearingResults;
                if (null == bucket)
                   cim_data.LossClearingResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LossClearingResults[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "LossClearingResults", "lossMW", base.from_float, fields);
                base.export_attribute (obj, "LossClearingResults", "LossClearing", fields);
                base.export_attribute (obj, "LossClearingResults", "RUCZone", fields);
                base.export_attribute (obj, "LossClearingResults", "SubControlArea", fields);
                base.export_attribute (obj, "LossClearingResults", "HostControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.RUCAwardInstruction;
                if (null == bucket)
                   cim_data.RUCAwardInstruction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RUCAwardInstruction[this._id];
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
                base.parse_attribute (/<cim:RUCAwardInstruction.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);

                var bucket = context.parsed.RUCAwardInstruction;
                if (null == bucket)
                   context.parsed.RUCAwardInstruction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "RUCAwardInstruction", "clearedPrice", base.from_float, fields);
                base.export_element (obj, "RUCAwardInstruction", "marketProductType", base.from_string, fields);
                base.export_element (obj, "RUCAwardInstruction", "RUCAward", base.from_float, fields);
                base.export_element (obj, "RUCAwardInstruction", "RUCCapacity", base.from_float, fields);
                base.export_element (obj, "RUCAwardInstruction", "RUCSchedule", base.from_float, fields);
                base.export_element (obj, "RUCAwardInstruction", "updateTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "RUCAwardInstruction", "updateType", base.from_string, fields);
                base.export_element (obj, "RUCAwardInstruction", "updateUser", base.from_string, fields);
                base.export_attribute (obj, "RUCAwardInstruction", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.MPMClearing;
                if (null == bucket)
                   cim_data.MPMClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MPMClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "MPMClearing";
                base.parse_element (/<cim:MPMClearing.LMPMFinalFlag>([\s\S]*?)<\/cim:MPMClearing.LMPMFinalFlag>/g, obj, "LMPMFinalFlag", base.to_string, sub, context);
                base.parse_element (/<cim:MPMClearing.SMPMFinalFlag>([\s\S]*?)<\/cim:MPMClearing.SMPMFinalFlag>/g, obj, "SMPMFinalFlag", base.to_string, sub, context);
                base.parse_element (/<cim:MPMClearing.mitigationOccuredFlag>([\s\S]*?)<\/cim:MPMClearing.mitigationOccuredFlag>/g, obj, "mitigationOccuredFlag", base.to_string, sub, context);

                var bucket = context.parsed.MPMClearing;
                if (null == bucket)
                   context.parsed.MPMClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                base.export_element (obj, "MPMClearing", "LMPMFinalFlag", base.from_string, fields);
                base.export_element (obj, "MPMClearing", "SMPMFinalFlag", base.from_string, fields);
                base.export_element (obj, "MPMClearing", "mitigationOccuredFlag", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.BillDeterminant;
                if (null == bucket)
                   cim_data.BillDeterminant = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BillDeterminant[this._id];
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

                var bucket = context.parsed.BillDeterminant;
                if (null == bucket)
                   context.parsed.BillDeterminant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_element (obj, "BillDeterminant", "calculationLevel", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "configVersion", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "deleteStatus", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "BillDeterminant", "exception", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "factor", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "frequency", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "numberInterval", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "offset", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "precisionLevel", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "primaryYN", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "referenceFlag", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "reportable", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "roundOff", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "source", base.from_string, fields);
                base.export_element (obj, "BillDeterminant", "terminationDate", base.from_datetime, fields);
                base.export_element (obj, "BillDeterminant", "unitOfMeasure", base.from_string, fields);
                base.export_attribute (obj, "BillDeterminant", "ChargeProfile", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ExPostPricing;
                if (null == bucket)
                   cim_data.ExPostPricing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExPostPricing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "ExPostPricing";
                base.parse_element (/<cim:ExPostPricing.energyPrice>([\s\S]*?)<\/cim:ExPostPricing.energyPrice>/g, obj, "energyPrice", base.to_float, sub, context);

                var bucket = context.parsed.ExPostPricing;
                if (null == bucket)
                   context.parsed.ExPostPricing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                base.export_element (obj, "ExPostPricing", "energyPrice", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.TransactionBidResults;
                if (null == bucket)
                   cim_data.TransactionBidResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransactionBidResults[this._id];
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

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "TransactionBidResults", "clearedMW", base.from_float, fields);
                base.export_element (obj, "TransactionBidResults", "clearedPrice", base.from_float, fields);
                base.export_attribute (obj, "TransactionBidResults", "TransactionBidClearing", fields);
                base.export_attribute (obj, "TransactionBidResults", "TransactionBid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.AncillaryServiceClearing;
                if (null == bucket)
                   cim_data.AncillaryServiceClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AncillaryServiceClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "AncillaryServiceClearing";
                base.parse_attribute (/<cim:AncillaryServiceClearing.MarketCaseClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketCaseClearing", sub, context);

                var bucket = context.parsed.AncillaryServiceClearing;
                if (null == bucket)
                   context.parsed.AncillaryServiceClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                base.export_attribute (obj, "AncillaryServiceClearing", "MarketCaseClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.GeneralClearingResults;
                if (null == bucket)
                   cim_data.GeneralClearingResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GeneralClearingResults[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "GeneralClearingResults", "loadForecast", base.from_string, fields);
                base.export_element (obj, "GeneralClearingResults", "totalLoad", base.from_float, fields);
                base.export_element (obj, "GeneralClearingResults", "totalNetInterchange", base.from_float, fields);
                base.export_attribute (obj, "GeneralClearingResults", "GeneralClearing", fields);
                base.export_attribute (obj, "GeneralClearingResults", "SubControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.Commitments;
                if (null == bucket)
                   cim_data.Commitments = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Commitments[this._id];
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
                base.parse_attribute (/<cim:Commitments.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);

                var bucket = context.parsed.Commitments;
                if (null == bucket)
                   context.parsed.Commitments = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "Commitments", "commitmentType", base.from_string, fields);
                base.export_element (obj, "Commitments", "instructionCost", base.from_float, fields);
                base.export_element (obj, "Commitments", "instructionType", base.from_string, fields);
                base.export_element (obj, "Commitments", "intervalEndTime", base.from_datetime, fields);
                base.export_element (obj, "Commitments", "intervalStartTime", base.from_datetime, fields);
                base.export_element (obj, "Commitments", "minStatusChangeTime", base.from_string, fields);
                base.export_element (obj, "Commitments", "noLoadCost", base.from_float, fields);
                base.export_element (obj, "Commitments", "updateTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "Commitments", "updateType", base.from_string, fields);
                base.export_element (obj, "Commitments", "updateUser", base.from_string, fields);
                base.export_attribute (obj, "Commitments", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.MitigatedBid;
                if (null == bucket)
                   cim_data.MitigatedBid = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MitigatedBid[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MitigatedBid";
                base.parse_attribute (/<cim:MitigatedBid.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);

                var bucket = context.parsed.MitigatedBid;
                if (null == bucket)
                   context.parsed.MitigatedBid = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_attribute (obj, "MitigatedBid", "Bid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ExPostResource;
                if (null == bucket)
                   cim_data.ExPostResource = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExPostResource[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "ExPostResource";

                var bucket = context.parsed.ExPostResource;
                if (null == bucket)
                   context.parsed.ExPostResource = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.GeneralClearing;
                if (null == bucket)
                   cim_data.GeneralClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GeneralClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "GeneralClearing";

                var bucket = context.parsed.GeneralClearing;
                if (null == bucket)
                   context.parsed.GeneralClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.PassThroughBill;
                if (null == bucket)
                   cim_data.PassThroughBill = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PassThroughBill[this._id];
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
                base.parse_attribute (/<cim:PassThroughBill.MarketStatementLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketStatementLineItem", sub, context);

                var bucket = context.parsed.PassThroughBill;
                if (null == bucket)
                   context.parsed.PassThroughBill = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_element (obj, "PassThroughBill", "adjustedAmount", base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "amount", base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "billedTo", base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "billEnd", base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "billRunType", base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "billStart", base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "effectiveDate", base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "isDisputed", base.from_boolean, fields);
                base.export_element (obj, "PassThroughBill", "isProfiled", base.from_boolean, fields);
                base.export_element (obj, "PassThroughBill", "paidTo", base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "previousEnd", base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "previousStart", base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "price", base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "productCode", base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "providedBy", base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "quantity", base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "serviceEnd", base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "serviceStart", base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "soldTo", base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "taxAmount", base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "timeZone", base.from_string, fields);
                base.export_element (obj, "PassThroughBill", "tradeDate", base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "transactionDate", base.from_datetime, fields);
                base.export_element (obj, "PassThroughBill", "transactionType", base.from_string, fields);
                base.export_attribute (obj, "PassThroughBill", "MarketStatementLineItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ExPostResourceResults;
                if (null == bucket)
                   cim_data.ExPostResourceResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExPostResourceResults[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ExPostResourceResults", "congestionLMP", base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "desiredMW", base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "dispatchRate", base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "lmp", base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "lossLMP", base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "maxEconomicMW", base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "minEconomicMW", base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "resourceMW", base.from_float, fields);
                base.export_element (obj, "ExPostResourceResults", "status", base.from_string, fields);
                base.export_attribute (obj, "ExPostResourceResults", "ExPostResource", fields);
                base.export_attribute (obj, "ExPostResourceResults", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.TransactionBidClearing;
                if (null == bucket)
                   cim_data.TransactionBidClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransactionBidClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "TransactionBidClearing";

                var bucket = context.parsed.TransactionBidClearing;
                if (null == bucket)
                   context.parsed.TransactionBidClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.Settlement;
                if (null == bucket)
                   cim_data.Settlement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Settlement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Settlement";
                base.parse_element (/<cim:Settlement.tradeDate>([\s\S]*?)<\/cim:Settlement.tradeDate>/g, obj, "tradeDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:Settlement.EnergyMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyMarket", sub, context);

                var bucket = context.parsed.Settlement;
                if (null == bucket)
                   context.parsed.Settlement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Document"](obj, exporters, false);

                base.export_element (obj, "Settlement", "tradeDate", base.from_datetime, fields);
                base.export_attribute (obj, "Settlement", "EnergyMarket", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ExPostPricingResults;
                if (null == bucket)
                   cim_data.ExPostPricingResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExPostPricingResults[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ExPostPricingResults", "congestLMP", base.from_float, fields);
                base.export_element (obj, "ExPostPricingResults", "lmp", base.from_float, fields);
                base.export_element (obj, "ExPostPricingResults", "lossLMP", base.from_float, fields);
                base.export_attribute (obj, "ExPostPricingResults", "ExPostPricing", fields);
                base.export_attribute (obj, "ExPostPricingResults", "Pnode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.Instructions;
                if (null == bucket)
                   cim_data.Instructions = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Instructions[this._id];
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

                var bucket = context.parsed.Instructions;
                if (null == bucket)
                   context.parsed.Instructions = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "Instructions", "bindingDOT", base.from_float, fields);
                base.export_element (obj, "Instructions", "bindingInstruction", base.from_string, fields);
                base.export_element (obj, "Instructions", "instructionCost", base.from_float, fields);
                base.export_element (obj, "Instructions", "instructionSource", base.from_string, fields);
                base.export_element (obj, "Instructions", "instructionStartTime", base.from_datetime, fields);
                base.export_element (obj, "Instructions", "instructionType", base.from_string, fields);
                base.export_element (obj, "Instructions", "manuallyBlocked", base.from_string, fields);
                base.export_element (obj, "Instructions", "minStatusChangeTime", base.from_string, fields);
                base.export_element (obj, "Instructions", "updateTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "Instructions", "updateType", base.from_string, fields);
                base.export_element (obj, "Instructions", "updateUser", base.from_string, fields);
                base.export_attribute (obj, "Instructions", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ResourceAwardClearing;
                if (null == bucket)
                   cim_data.ResourceAwardClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceAwardClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceAwardClearing";
                base.parse_element (/<cim:ResourceAwardClearing.dispatchMode>([\s\S]*?)<\/cim:ResourceAwardClearing.dispatchMode>/g, obj, "dispatchMode", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceAwardClearing.contingencyActive>([\s\S]*?)<\/cim:ResourceAwardClearing.contingencyActive>/g, obj, "contingencyActive", base.to_string, sub, context);

                var bucket = context.parsed.ResourceAwardClearing;
                if (null == bucket)
                   context.parsed.ResourceAwardClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                base.export_element (obj, "ResourceAwardClearing", "dispatchMode", base.from_string, fields);
                base.export_element (obj, "ResourceAwardClearing", "contingencyActive", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ExPostMarketRegionResults;
                if (null == bucket)
                   cim_data.ExPostMarketRegionResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExPostMarketRegionResults[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ExPostMarketRegionResults", "exPostClearedPrice", base.from_float, fields);
                base.export_attribute (obj, "ExPostMarketRegionResults", "MarketRegion", fields);
                base.export_attribute (obj, "ExPostMarketRegionResults", "ExPostMarketRegion", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ExPostMarketRegion;
                if (null == bucket)
                   cim_data.ExPostMarketRegion = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExPostMarketRegion[this._id];
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

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                base.export_attribute (obj, "ExPostMarketRegion", "ExPostMarketRegionResults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ChargeProfile;
                if (null == bucket)
                   cim_data.ChargeProfile = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ChargeProfile[this._id];
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
                base.parse_attribute (/<cim:ChargeProfile.PassTroughBill\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PassTroughBill", sub, context);
                base.parse_attribute (/<cim:ChargeProfile.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);

                var bucket = context.parsed.ChargeProfile;
                if (null == bucket)
                   context.parsed.ChargeProfile = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Profile"](obj, exporters, false);

                base.export_element (obj, "ChargeProfile", "type", base.from_string, fields);
                base.export_element (obj, "ChargeProfile", "frequency", base.from_string, fields);
                base.export_element (obj, "ChargeProfile", "numberInterval", base.from_string, fields);
                base.export_element (obj, "ChargeProfile", "unitOfMeasure", base.from_string, fields);
                base.export_attribute (obj, "ChargeProfile", "BillDeterminant", fields);
                base.export_attribute (obj, "ChargeProfile", "PassTroughBill", fields);
                base.export_attribute (obj, "ChargeProfile", "Bid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.LossClearing;
                if (null == bucket)
                   cim_data.LossClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LossClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "LossClearing";

                var bucket = context.parsed.LossClearing;
                if (null == bucket)
                   context.parsed.LossClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.RMRDetermination;
                if (null == bucket)
                   cim_data.RMRDetermination = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RMRDetermination[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RMRDetermination";
                base.parse_attribute (/<cim:RMRDetermination.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);

                var bucket = context.parsed.RMRDetermination;
                if (null == bucket)
                   context.parsed.RMRDetermination = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_attribute (obj, "RMRDetermination", "Bid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.InstructionClearingDOP;
                if (null == bucket)
                   cim_data.InstructionClearingDOP = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InstructionClearingDOP[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "InstructionClearingDOP";

                var bucket = context.parsed.InstructionClearingDOP;
                if (null == bucket)
                   context.parsed.InstructionClearingDOP = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ConstraintResults;
                if (null == bucket)
                   cim_data.ConstraintResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConstraintResults[this._id];
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

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "ConstraintResults", "baseFlow", base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "BGLimit", base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "BGTRResCap", base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "bindingLimit", base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "clearedValue", base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "competitivePathConstraint", base.from_string, fields);
                base.export_element (obj, "ConstraintResults", "constraintType", base.from_string, fields);
                base.export_element (obj, "ConstraintResults", "limitFlag", base.from_string, fields);
                base.export_element (obj, "ConstraintResults", "optimizationFlag", base.from_string, fields);
                base.export_element (obj, "ConstraintResults", "overloadMW", base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "percentMW", base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "shadowPrice", base.from_float, fields);
                base.export_element (obj, "ConstraintResults", "updateTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "ConstraintResults", "updateType", base.from_string, fields);
                base.export_element (obj, "ConstraintResults", "updateUser", base.from_string, fields);
                base.export_attribute (obj, "ConstraintResults", "MktContingency", fields);
                base.export_attribute (obj, "ConstraintResults", "ConstraintClearing", fields);
                base.export_attribute (obj, "ConstraintResults", "Flowgate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.MarketRegionResults;
                if (null == bucket)
                   cim_data.MarketRegionResults = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketRegionResults[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "MarketRegionResults", "clearedMW", base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "clearedPrice", base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "dispatchCtMW", base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "dispatchHydroMW", base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "dispatchRate", base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "dispatchSteamMW", base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "imbalanceEnergyBias", base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "limitFlag", base.from_string, fields);
                base.export_element (obj, "MarketRegionResults", "lumpyIndicator", base.from_string, fields);
                base.export_element (obj, "MarketRegionResults", "maxSufficiencyIndex", base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "minSufficiencyIndex", base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "reqMaxMW", base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "reqMinMW", base.from_float, fields);
                base.export_element (obj, "MarketRegionResults", "selfScheduleMW", base.from_float, fields);
                base.export_attribute (obj, "MarketRegionResults", "MarketProduct", fields);
                base.export_attribute (obj, "MarketRegionResults", "MarketRegion", fields);
                base.export_attribute (obj, "MarketRegionResults", "AncillaryServiceClearing", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.DopInstruction;
                if (null == bucket)
                   cim_data.DopInstruction = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DopInstruction[this._id];
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
                base.parse_attribute (/<cim:DopInstruction.RegisteredResouce\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResouce", sub, context);

                var bucket = context.parsed.DopInstruction;
                if (null == bucket)
                   context.parsed.DopInstruction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "DopInstruction", "mwDOP", base.from_string, fields);
                base.export_element (obj, "DopInstruction", "timestampDOP", base.from_datetime, fields);
                base.export_element (obj, "DopInstruction", "plotPriority", base.from_string, fields);
                base.export_element (obj, "DopInstruction", "runIndicatorDOP", base.from_string, fields);
                base.export_element (obj, "DopInstruction", "updateUser", base.from_string, fields);
                base.export_element (obj, "DopInstruction", "updateTimeStamp", base.from_datetime, fields);
                base.export_element (obj, "DopInstruction", "updateType", base.from_string, fields);
                base.export_attribute (obj, "DopInstruction", "RegisteredResouce", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ExPostLoss;
                if (null == bucket)
                   cim_data.ExPostLoss = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ExPostLoss[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "ExPostLoss";

                var bucket = context.parsed.ExPostLoss;
                if (null == bucket)
                   context.parsed.ExPostLoss = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.MarketStatementLineItem;
                if (null == bucket)
                   cim_data.MarketStatementLineItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MarketStatementLineItem[this._id];
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
                base.parse_attribute (/<cim:MarketStatementLineItem.ContainerMarketStatementLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ContainerMarketStatementLineItem", sub, context);
                base.parse_attribute (/<cim:MarketStatementLineItem.PassThroughBill\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PassThroughBill", sub, context);

                var bucket = context.parsed.MarketStatementLineItem;
                if (null == bucket)
                   context.parsed.MarketStatementLineItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "MarketStatementLineItem", "intervalNumber", base.from_string, fields);
                base.export_element (obj, "MarketStatementLineItem", "intervalDate", base.from_datetime, fields);
                base.export_element (obj, "MarketStatementLineItem", "quantityUOM", base.from_string, fields);
                base.export_element (obj, "MarketStatementLineItem", "previousAmount", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "currentAmount", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "netAmount", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "previousQuantity", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "currentQuantity", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "netQuantity", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "previsouPrice", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "currentPrice", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "netPrice", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "previousISOAmount", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "currentISOAmount", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "netISOAmount", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "previousISOQuantity", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "currentISOQuantity", base.from_float, fields);
                base.export_element (obj, "MarketStatementLineItem", "netISOQuantity", base.from_float, fields);
                base.export_attribute (obj, "MarketStatementLineItem", "MarketStatement", fields);
                base.export_attribute (obj, "MarketStatementLineItem", "ContainerMarketStatementLineItem", fields);
                base.export_attribute (obj, "MarketStatementLineItem", "PassThroughBill", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.MitigatedBidClearing;
                if (null == bucket)
                   cim_data.MitigatedBidClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MitigatedBidClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "MitigatedBidClearing";

                var bucket = context.parsed.MitigatedBidClearing;
                if (null == bucket)
                   context.parsed.MitigatedBidClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.ChargeProfileData;
                if (null == bucket)
                   cim_data.ChargeProfileData = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ChargeProfileData[this._id];
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

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ChargeProfileData", "sequence", base.from_string, fields);
                base.export_element (obj, "ChargeProfileData", "timeStamp", base.from_datetime, fields);
                base.export_element (obj, "ChargeProfileData", "value", base.from_float, fields);
                base.export_attribute (obj, "ChargeProfileData", "BillDeterminant", fields);
                base.export_attribute (obj, "ChargeProfileData", "ChargeProfile", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                this._id = template.id;
                var bucket = cim_data.CommitmentClearing;
                if (null == bucket)
                   cim_data.CommitmentClearing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CommitmentClearing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = MarketPlan.MarketFactors.prototype.parse.call (this, context, sub);
                obj.cls = "CommitmentClearing";

                var bucket = context.parsed.CommitmentClearing;
                if (null == bucket)
                   context.parsed.CommitmentClearing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["MarketFactors"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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