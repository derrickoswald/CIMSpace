define
(
    ["model/base", "model/Common", "model/Core", "model/ExternalInputs", "model/MarketPlan"],
    /**
     * Results from the execution of a market.
     */
    function (base, Common, Core, ExternalInputs, MarketPlan)
    {

        /**
         * Model of market results, including cleaing result of resources.
         * Associated with ResourceDispatchResults.
         */
        function parse_ResourceClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "ResourceClearing";
            bucket = context.parsed.ResourceClearing;
            if (null == bucket)
                context.parsed.ResourceClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class holds elements that are single values for the entire market time horizon.
         * That is, for the Day Ahead market, there is 1 value for each element, not hourly based.  Is a summary of the market run
         */
        function parse_MarketResults (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketResults";
            /**
             * Total Start-up Cost ($) over the time horizon
             */
            obj["startUpCost"] = base.to_float (base.parse_element (/<cim:MarketResults.startUpCost>([\s\S]*?)<\/cim:MarketResults.startUpCost>/g, sub, context, true));
            /**
             * Total Minimum Load Cost ($) over the time horizon
             */
            obj["minimumLoadCost"] = base.to_float (base.parse_element (/<cim:MarketResults.minimumLoadCost>([\s\S]*?)<\/cim:MarketResults.minimumLoadCost>/g, sub, context, true));
            /**
             * Global Contingent Operating Reserve Availability Indicator (Yes/No)
             */
            obj["contingentOperatingResAvail"] = base.parse_element (/<cim:MarketResults.contingentOperatingResAvail>([\s\S]*?)<\/cim:MarketResults.contingentOperatingResAvail>/g, sub, context, true);
            /**
             * Total Energy Cost ($) over the time horizon
             */
            obj["energyCost"] = base.to_float (base.parse_element (/<cim:MarketResults.energyCost>([\s\S]*?)<\/cim:MarketResults.energyCost>/g, sub, context, true));
            /**
             * Total Cost (Energy + AS) cost ($) by over the time horizon
             */
            obj["totalCost"] = base.to_float (base.parse_element (/<cim:MarketResults.totalCost>([\s\S]*?)<\/cim:MarketResults.totalCost>/g, sub, context, true));
            /**
             * Total  AS Cost (i.e., payment) ($) over the time horizon
             */
            obj["ancillarySvcCost"] = base.to_float (base.parse_element (/<cim:MarketResults.ancillarySvcCost>([\s\S]*?)<\/cim:MarketResults.ancillarySvcCost>/g, sub, context, true));
            /**
             * The total RUC capacity cost for this interval
             */
            obj["totalRucCost"] = base.to_float (base.parse_element (/<cim:MarketResults.totalRucCost>([\s\S]*?)<\/cim:MarketResults.totalRucCost>/g, sub, context, true));
            /**
             * 
             */
            obj["EnergyMarket"] = base.parse_attribute (/<cim:MarketResults.EnergyMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MarketResults;
            if (null == bucket)
                context.parsed.MarketResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides the total price, the cost component, the loss component, and the congestion component for Pnodes for the forward and real time markets.
         * There are several prices produced based on the run type (MPM, RUC, Pricing, or Scheduling/Dispatch).
         */
        function parse_PnodeResults (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "PnodeResults";
            /**
             * Locational Marginal Price (LMP) ($/MWh)
             */
            obj["marginalClearingPrice"] = base.to_float (base.parse_element (/<cim:PnodeResults.marginalClearingPrice>([\s\S]*?)<\/cim:PnodeResults.marginalClearingPrice>/g, sub, context, true));
            /**
             * Cost component of Locational Marginal Pricing (LMP) in monetary units per MW.
             */
            obj["costLMP"] = base.to_float (base.parse_element (/<cim:PnodeResults.costLMP>([\s\S]*?)<\/cim:PnodeResults.costLMP>/g, sub, context, true));
            /**
             * Loss component of Location Marginal Price (LMP) in monetary units per MW.
             */
            obj["lossLMP"] = base.to_float (base.parse_element (/<cim:PnodeResults.lossLMP>([\s\S]*?)<\/cim:PnodeResults.lossLMP>/g, sub, context, true));
            /**
             * Congestion component of Location Marginal Price (LMP) in monetary units per MW.
             */
            obj["congestLMP"] = base.to_float (base.parse_element (/<cim:PnodeResults.congestLMP>([\s\S]*?)<\/cim:PnodeResults.congestLMP>/g, sub, context, true));
            /**
             * total MW schedule at the pnode
             */
            obj["scheduledMW"] = base.to_float (base.parse_element (/<cim:PnodeResults.scheduledMW>([\s\S]*?)<\/cim:PnodeResults.scheduledMW>/g, sub, context, true));
            obj["updateUser"] = base.parse_element (/<cim:PnodeResults.updateUser>([\s\S]*?)<\/cim:PnodeResults.updateUser>/g, sub, context, true);
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:PnodeResults.updateTimeStamp>([\s\S]*?)<\/cim:PnodeResults.updateTimeStamp>/g, sub, context, true));
            obj["updateType"] = base.parse_element (/<cim:PnodeResults.updateType>([\s\S]*?)<\/cim:PnodeResults.updateType>/g, sub, context, true);
            /**
             * 
             */
            obj["Pnode"] = base.parse_attribute (/<cim:PnodeResults.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["PnodeClearing"] = base.parse_attribute (/<cim:PnodeResults.PnodeClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PnodeResults;
            if (null == bucket)
                context.parsed.PnodeResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Groups all items associated with Binding Constraints and Constraint Violations per interval and market.
         */
        function parse_ConstraintClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "ConstraintClearing";
            bucket = context.parsed.ConstraintClearing;
            if (null == bucket)
                context.parsed.ConstraintClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of market clearing, relating to commitment instructions.
         * Identifies interval
         */
        function parse_InstructionClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "InstructionClearing";
            bucket = context.parsed.InstructionClearing;
            if (null == bucket)
                context.parsed.InstructionClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of Self Schedules Results.
         * Includes self schedule MW,and type of self schedule for each self schedule type included in total self schedule MW value found in ResourceAwardInstruction.
         */
        function parse_SelfScheduleBreakdown (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "SelfScheduleBreakdown";
            /**
             * Cleared value for the specific self schedule type listed.
             */
            obj["selfSchedMW"] = base.to_float (base.parse_element (/<cim:SelfScheduleBreakdown.selfSchedMW>([\s\S]*?)<\/cim:SelfScheduleBreakdown.selfSchedMW>/g, sub, context, true));
            /**
             * Self schedule breakdown type.
             */
            obj["selfSchedType"] = base.parse_element (/<cim:SelfScheduleBreakdown.selfSchedType>([\s\S]*?)<\/cim:SelfScheduleBreakdown.selfSchedType>/g, sub, context, true);
            /**
             * 
             */
            obj["ResourceAwardInstruction"] = base.parse_attribute (/<cim:SelfScheduleBreakdown.ResourceAwardInstruction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.SelfScheduleBreakdown;
            if (null == bucket)
                context.parsed.SelfScheduleBreakdown = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model results of ex-post calculation of MW losses.
         * Summarizes loss in two categories losses on the the extra high voltage transmission and total losses. Calculated for each subcontrol area.
         */
        function parse_ExPostLossResults (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExPostLossResults";
            /**
             * Total MW losses in the company
             * Attribute Usage: Information purposes - Output of LPA engine.
             */
            obj["totalLossMW"] = base.to_float (base.parse_element (/<cim:ExPostLossResults.totalLossMW>([\s\S]*?)<\/cim:ExPostLossResults.totalLossMW>/g, sub, context, true));
            /**
             * EHV MW losses in the company
             * Attribute Usage: Information purposes - Output of LPA engine.
             */
            obj["ehvLossMW"] = base.to_float (base.parse_element (/<cim:ExPostLossResults.ehvLossMW>([\s\S]*?)<\/cim:ExPostLossResults.ehvLossMW>/g, sub, context, true));
            /**
             * 
             */
            obj["ExPostLoss"] = base.parse_attribute (/<cim:ExPostLossResults.ExPostLoss\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["SubControlArea"] = base.parse_attribute (/<cim:ExPostLossResults.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ExPostLossResults;
            if (null == bucket)
                context.parsed.ExPostLossResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The ResourceDispatchResults class provides market results that can be provided to a SC.
         * The specific data provided consists of several indicators such as contingency flags, blocked start up, and RMR dispatch. It also provides the projected overall and the regulating status of the resource.
         */
        function parse_ResourceDispatchResults (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceDispatchResults";
            /**
             * Blocked Dispatch Indicator (Yes/No)
             */
            obj["blockedDispatch"] = base.parse_element (/<cim:ResourceDispatchResults.blockedDispatch>([\s\S]*?)<\/cim:ResourceDispatchResults.blockedDispatch>/g, sub, context, true);
            /**
             * Block sending DOP to ADS (Y/N)
             */
            obj["blockedPublishDOP"] = base.parse_element (/<cim:ResourceDispatchResults.blockedPublishDOP>([\s\S]*?)<\/cim:ResourceDispatchResults.blockedPublishDOP>/g, sub, context, true);
            /**
             * Contingent Operating Reserve Indicator (Yes/No).
             * Resource participating with AS capacity in contingency dispatch.
             */
            obj["contingencyFlag"] = base.parse_element (/<cim:ResourceDispatchResults.contingencyFlag>([\s\S]*?)<\/cim:ResourceDispatchResults.contingencyFlag>/g, sub, context, true);
            /**
             * indicate which limit is the constraints
             */
            obj["limitIndicator"] = base.parse_element (/<cim:ResourceDispatchResults.limitIndicator>([\s\S]*?)<\/cim:ResourceDispatchResults.limitIndicator>/g, sub, context, true);
            /**
             * resource energy ramping lower limit
             */
            obj["lowerLimit"] = base.to_float (base.parse_element (/<cim:ResourceDispatchResults.lowerLimit>([\s\S]*?)<\/cim:ResourceDispatchResults.lowerLimit>/g, sub, context, true));
            /**
             * maximum ramp rate
             */
            obj["maxRampRate"] = base.to_float (base.parse_element (/<cim:ResourceDispatchResults.maxRampRate>([\s\S]*?)<\/cim:ResourceDispatchResults.maxRampRate>/g, sub, context, true));
            /**
             * The upper operating limit incorporating any derate used by the RTD for the Binding Interval.
             */
            obj["operatingLimitHigh"] = base.to_float (base.parse_element (/<cim:ResourceDispatchResults.operatingLimitHigh>([\s\S]*?)<\/cim:ResourceDispatchResults.operatingLimitHigh>/g, sub, context, true));
            /**
             * The lower operating limit incorporating any derate used by the RTD for the Binding Interval.
             */
            obj["operatingLimitLow"] = base.to_float (base.parse_element (/<cim:ResourceDispatchResults.operatingLimitLow>([\s\S]*?)<\/cim:ResourceDispatchResults.operatingLimitLow>/g, sub, context, true));
            /**
             * Penalty Dispatch Indicator (Yes / No) indicating an un-economic adjustment.
             */
            obj["penaltyDispatchIndicator"] = base.parse_element (/<cim:ResourceDispatchResults.penaltyDispatchIndicator>([\s\S]*?)<\/cim:ResourceDispatchResults.penaltyDispatchIndicator>/g, sub, context, true);
            /**
             * The upper regulating limit incorporating any derate used by the RTD for the Binding Interval.
             */
            obj["regulatingLimitHigh"] = base.to_float (base.parse_element (/<cim:ResourceDispatchResults.regulatingLimitHigh>([\s\S]*?)<\/cim:ResourceDispatchResults.regulatingLimitHigh>/g, sub, context, true));
            /**
             * The lower regulating limit incorporating any derate used by the RTD for the Binding Interval.
             */
            obj["regulatingLimitLow"] = base.to_float (base.parse_element (/<cim:ResourceDispatchResults.regulatingLimitLow>([\s\S]*?)<\/cim:ResourceDispatchResults.regulatingLimitLow>/g, sub, context, true));
            /**
             * Unit Commitment Status (On/Off/Starting)
             */
            obj["resourceStatus"] = base.parse_element (/<cim:ResourceDispatchResults.resourceStatus>([\s\S]*?)<\/cim:ResourceDispatchResults.resourceStatus>/g, sub, context, true);
            /**
             * Resource total upward schedule.  total schedule = En + all AS per resource per interval
             */
            obj["totalSchedule"] = base.to_float (base.parse_element (/<cim:ResourceDispatchResults.totalSchedule>([\s\S]*?)<\/cim:ResourceDispatchResults.totalSchedule>/g, sub, context, true));
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:ResourceDispatchResults.updateTimeStamp>([\s\S]*?)<\/cim:ResourceDispatchResults.updateTimeStamp>/g, sub, context, true));
            obj["updateType"] = base.parse_element (/<cim:ResourceDispatchResults.updateType>([\s\S]*?)<\/cim:ResourceDispatchResults.updateType>/g, sub, context, true);
            obj["updateUser"] = base.parse_element (/<cim:ResourceDispatchResults.updateUser>([\s\S]*?)<\/cim:ResourceDispatchResults.updateUser>/g, sub, context, true);
            /**
             * resource energy ramping upper limit
             */
            obj["upperLimit"] = base.to_float (base.parse_element (/<cim:ResourceDispatchResults.upperLimit>([\s\S]*?)<\/cim:ResourceDispatchResults.upperLimit>/g, sub, context, true));
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:ResourceDispatchResults.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["ResourceClearing"] = base.parse_attribute (/<cim:ResourceDispatchResults.ResourceClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ResourceDispatchResults;
            if (null == bucket)
                context.parsed.ResourceDispatchResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides the necessary information (on a resource basis) to capture the Dispatch Operating Target (DOT) results on a Dispatch interval.
         * This information is only relevant to the RT interval market.
         */
        function parse_DotInstruction (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DotInstruction";
            /**
             * Actual ramp rate.
             */
            obj["actualRampRate"] = base.to_float (base.parse_element (/<cim:DotInstruction.actualRampRate>([\s\S]*?)<\/cim:DotInstruction.actualRampRate>/g, sub, context, true));
            /**
             * Flag indicating whether or not the resource was in compliance with the instruction (plus/minus 10%).
             * Directs if a unit is allowed to set the price (ex-post pricing).
             */
            obj["compliantIndicator"] = base.parse_element (/<cim:DotInstruction.compliantIndicator>([\s\S]*?)<\/cim:DotInstruction.compliantIndicator>/g, sub, context, true);
            /**
             * Dispatch operating target value.
             */
            obj["DOT"] = base.to_float (base.parse_element (/<cim:DotInstruction.DOT>([\s\S]*?)<\/cim:DotInstruction.DOT>/g, sub, context, true));
            /**
             * Economic Max Limit override for unit, this value is null, if it is not, this value overrides the Energy column value.
             * Allows dispatcher to override the unit's energy value.
             */
            obj["economicMaxOverride"] = base.to_float (base.parse_element (/<cim:DotInstruction.economicMaxOverride>([\s\S]*?)<\/cim:DotInstruction.economicMaxOverride>/g, sub, context, true));
            /**
             * Expected energy.
             */
            obj["expectedEnergy"] = base.to_float (base.parse_element (/<cim:DotInstruction.expectedEnergy>([\s\S]*?)<\/cim:DotInstruction.expectedEnergy>/g, sub, context, true));
            /**
             * The Degree of Generator Performance (DGP) used for the unit.
             * Measure of how a generator responds to raise /lower signals.  Calculated every five minutes.
             */
            obj["generatorPerformanceDegree"] = base.to_float (base.parse_element (/<cim:DotInstruction.generatorPerformanceDegree>([\s\S]*?)<\/cim:DotInstruction.generatorPerformanceDegree>/g, sub, context, true));
            /**
             * HASP results.
             */
            obj["hourAheadSchedEnergy"] = base.to_float (base.parse_element (/<cim:DotInstruction.hourAheadSchedEnergy>([\s\S]*?)<\/cim:DotInstruction.hourAheadSchedEnergy>/g, sub, context, true));
            /**
             * Hourly Schedule (DA Energy Schedule).
             */
            obj["hourlySchedule"] = base.to_float (base.parse_element (/<cim:DotInstruction.hourlySchedule>([\s\S]*?)<\/cim:DotInstruction.hourlySchedule>/g, sub, context, true));
            /**
             * The date/time for the instruction.
             */
            obj["instructionTime"] = base.to_datetime (base.parse_element (/<cim:DotInstruction.instructionTime>([\s\S]*?)<\/cim:DotInstruction.instructionTime>/g, sub, context, true));
            /**
             * True if maximum emergency limit activated; false otherwise.
             * If unit is requested  to move up to its max emergency limit., this flag is set to true.
             */
            obj["maximumEmergencyInd"] = base.to_boolean (base.parse_element (/<cim:DotInstruction.maximumEmergencyInd>([\s\S]*?)<\/cim:DotInstruction.maximumEmergencyInd>/g, sub, context, true));
            /**
             * Meter Sub System Load Following.
             */
            obj["meterLoadFollowing"] = base.to_float (base.parse_element (/<cim:DotInstruction.meterLoadFollowing>([\s\S]*?)<\/cim:DotInstruction.meterLoadFollowing>/g, sub, context, true));
            /**
             * Desired MW that is not ramp restricted.
             * If no ramp rate limit existed for the unit, this is the MW value tha t the unit was requested to move to.
             */
            obj["nonRampRestrictedMW"] = base.to_float (base.parse_element (/<cim:DotInstruction.nonRampRestrictedMW>([\s\S]*?)<\/cim:DotInstruction.nonRampRestrictedMW>/g, sub, context, true));
            /**
             * Non Spin Reserve used to procure energy.
             */
            obj["nonSpinReserve"] = base.to_float (base.parse_element (/<cim:DotInstruction.nonSpinReserve>([\s\S]*?)<\/cim:DotInstruction.nonSpinReserve>/g, sub, context, true));
            /**
             * Timestamp when the previous DOT value was issued.
             */
            obj["previousDOTTimeStamp"] = base.to_datetime (base.parse_element (/<cim:DotInstruction.previousDOTTimeStamp>([\s\S]*?)<\/cim:DotInstruction.previousDOTTimeStamp>/g, sub, context, true));
            /**
             * The ramp rate limit for the unit in MWs per minute.
             * Participant bidding data.
             */
            obj["rampRateLimit"] = base.to_float (base.parse_element (/<cim:DotInstruction.rampRateLimit>([\s\S]*?)<\/cim:DotInstruction.rampRateLimit>/g, sub, context, true));
            /**
             * Regulation Status (Yes/No).
             */
            obj["regulationStatus"] = base.parse_element (/<cim:DotInstruction.regulationStatus>([\s\S]*?)<\/cim:DotInstruction.regulationStatus>/g, sub, context, true);
            /**
             * Spin Reserve used to procure energy.
             */
            obj["spinReserve"] = base.to_float (base.parse_element (/<cim:DotInstruction.spinReserve>([\s\S]*?)<\/cim:DotInstruction.spinReserve>/g, sub, context, true));
            /**
             * Standard ramping energy (MWH).
             */
            obj["standardRampEnergy"] = base.to_float (base.parse_element (/<cim:DotInstruction.standardRampEnergy>([\s\S]*?)<\/cim:DotInstruction.standardRampEnergy>/g, sub, context, true));
            /**
             * Supplemental Energy procure by Real Time Dispatch.
             */
            obj["supplementalEnergy"] = base.to_float (base.parse_element (/<cim:DotInstruction.supplementalEnergy>([\s\S]*?)<\/cim:DotInstruction.supplementalEnergy>/g, sub, context, true));
            /**
             * Output results from the case identifying the reason the unit was committed by the software.
             */
            obj["unitStatus"] = base.parse_element (/<cim:DotInstruction.unitStatus>([\s\S]*?)<\/cim:DotInstruction.unitStatus>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:DotInstruction.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DotInstruction;
            if (null == bucket)
                context.parsed.DotInstruction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides the outcome and margin percent (as appropriate) result data for the MPM tests.
         * There are relationships to Zone for Designated Congestion Area Tests, CurveSchedData for bid segment tests, to the SubControlArea for the system wide level tests, and Pnodes for the LMPM impact tests.
         */
        function parse_MPMTestResults (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MPMTestResults";
            /**
             * The results of the test.
             * For the Price, Impact, and Conduct tests, typical values are NA, Pass, Fail, Disable, or Skip.
             */
            obj["outcome"] = base.parse_element (/<cim:MPMTestResults.outcome>([\s\S]*?)<\/cim:MPMTestResults.outcome>/g, sub, context, true);
            /**
             * Used to show the Margin % result of the Impact test
             */
            obj["marginPercent"] = base.parse_element (/<cim:MPMTestResults.marginPercent>([\s\S]*?)<\/cim:MPMTestResults.marginPercent>/g, sub, context, true);
            /**
             * 
             */
            obj["MPMClearing"] = base.parse_attribute (/<cim:MPMTestResults.MPMClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["AggregatedPnode"] = base.parse_attribute (/<cim:MPMTestResults.AggregatedPnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["MPMTestCategory"] = base.parse_attribute (/<cim:MPMTestResults.MPMTestCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MPMTestResults;
            if (null == bucket)
                context.parsed.MPMTestResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * RMR Operator's entry of the RMR requirement per market interval.
         */
        function parse_RMROperatorInput (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "RMROperatorInput";
            /**
             * The lower of the original pre-dispatch or the AC run schedule (Also known as the RMR Reguirement) becomes the pre-dispatch value.
             */
            obj["manuallySchedRMRMw"] = base.to_float (base.parse_element (/<cim:RMROperatorInput.manuallySchedRMRMw>([\s\S]*?)<\/cim:RMROperatorInput.manuallySchedRMRMw>/g, sub, context, true));
            obj["updateUser"] = base.parse_element (/<cim:RMROperatorInput.updateUser>([\s\S]*?)<\/cim:RMROperatorInput.updateUser>/g, sub, context, true);
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:RMROperatorInput.updateTimeStamp>([\s\S]*?)<\/cim:RMROperatorInput.updateTimeStamp>/g, sub, context, true));
            obj["updateType"] = base.parse_element (/<cim:RMROperatorInput.updateType>([\s\S]*?)<\/cim:RMROperatorInput.updateType>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:RMROperatorInput.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RMROperatorInput;
            if (null == bucket)
                context.parsed.RMROperatorInput = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of market results, instruction for resource.
         * Contains details of award as attributes
         */
        function parse_ResourceAwardInstruction (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceAwardInstruction";
            /**
             * For DA Energy: Not Applicable;   
            
            For DA AS: DA AS market award;   
            
            For RT Energy: Not Applicable;
             * For RT AS: RT AS market award (excluding DA AS market or self-proviison awards)
             */
            obj["awardMW"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.awardMW>([\s\S]*?)<\/cim:ResourceAwardInstruction.awardMW>/g, sub, context, true));
            /**
             * For DA Energy: Total Schedule = DA market schedule + DA self-schedule award;   
            
            For DA AS: DA Ancillary Service Awards = DA AS market award + DA AS self-provision award;   
            
            For RT Energy: Total Schedule = RT market schedule + RT self-schedule award;
             * For RT AS: RT Ancillary Service Awards = RT AS self-provision award + RT AS market award + DA AS market award + DA AS self-provision award;
             */
            obj["clearedMW"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.clearedMW>([\s\S]*?)<\/cim:ResourceAwardInstruction.clearedMW>/g, sub, context, true));
            /**
             * Marginal Price ($/MW) for the commodity (Regulation Up, Regulation Down, Spinning Reserve, or Non-spinning reserve) for pricing run.
             */
            obj["clearedPrice"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.clearedPrice>([\s\S]*?)<\/cim:ResourceAwardInstruction.clearedPrice>/g, sub, context, true));
            /**
             * Congestion component of Location Marginal Price (LMP) in monetary units per MW.
             */
            obj["congestLMP"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.congestLMP>([\s\S]*?)<\/cim:ResourceAwardInstruction.congestLMP>/g, sub, context, true));
            /**
             * Cost component of Locational Marginal Pricing (LMP) in monetary units per MW.
             */
            obj["costLMP"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.costLMP>([\s\S]*?)<\/cim:ResourceAwardInstruction.costLMP>/g, sub, context, true));
            /**
             * The tier2 mw added by dispatcher action
             * Market results of the synchronized reserve market
             */
            obj["dispatcherAddedMW"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.dispatcherAddedMW>([\s\S]*?)<\/cim:ResourceAwardInstruction.dispatcherAddedMW>/g, sub, context, true));
            /**
             * Unit max output for dispatch; bid in economic maximum
             */
            obj["economicMax"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.economicMax>([\s\S]*?)<\/cim:ResourceAwardInstruction.economicMax>/g, sub, context, true));
            /**
             * Unit min output for dispatch; bid in economic minimum
             */
            obj["economicMin"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.economicMin>([\s\S]*?)<\/cim:ResourceAwardInstruction.economicMin>/g, sub, context, true));
            /**
             * Effective Regulation Down Limit (MW)
             */
            obj["effRegulationDownLimit"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.effRegulationDownLimit>([\s\S]*?)<\/cim:ResourceAwardInstruction.effRegulationDownLimit>/g, sub, context, true));
            /**
             * Effective Regulation Up Limit
             */
            obj["effRegulationUpLimit"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.effRegulationUpLimit>([\s\S]*?)<\/cim:ResourceAwardInstruction.effRegulationUpLimit>/g, sub, context, true));
            /**
             * Locational marginal price value
             */
            obj["lmp"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.lmp>([\s\S]*?)<\/cim:ResourceAwardInstruction.lmp>/g, sub, context, true));
            /**
             * Loss component of Location Marginal Price (LMP) in monetary units per MW.
             */
            obj["lossLMP"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.lossLMP>([\s\S]*?)<\/cim:ResourceAwardInstruction.lossLMP>/g, sub, context, true));
            /**
             * Indicates if an award was manually blocked (Y/N).
             * Valid for Spinning and Non-spinning.
             */
            obj["manuallyBlocked"] = base.parse_element (/<cim:ResourceAwardInstruction.manuallyBlocked>([\s\S]*?)<\/cim:ResourceAwardInstruction.manuallyBlocked>/g, sub, context, true);
            /**
             * Indicator (Yes / No) that this resource set the price for this dispatch / schedule.
             */
            obj["marginalResourceIndicator"] = base.parse_element (/<cim:ResourceAwardInstruction.marginalResourceIndicator>([\s\S]*?)<\/cim:ResourceAwardInstruction.marginalResourceIndicator>/g, sub, context, true);
            /**
             * Identifes if the unit was set to must run by the market participant responsible for bidding in the unit
             */
            obj["mustRunInd"] = base.to_boolean (base.parse_element (/<cim:ResourceAwardInstruction.mustRunInd>([\s\S]*?)<\/cim:ResourceAwardInstruction.mustRunInd>/g, sub, context, true));
            /**
             * Unit no-load cost in case of energy commodity
             */
            obj["noLoadCost"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.noLoadCost>([\s\S]*?)<\/cim:ResourceAwardInstruction.noLoadCost>/g, sub, context, true));
            /**
             * Optimal Bid cost
             */
            obj["optimalBidCost"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.optimalBidCost>([\s\S]*?)<\/cim:ResourceAwardInstruction.optimalBidCost>/g, sub, context, true));
            /**
             * Optimal Bid production payment based on LMP
             */
            obj["optimalBidPay"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.optimalBidPay>([\s\S]*?)<\/cim:ResourceAwardInstruction.optimalBidPay>/g, sub, context, true));
            /**
             * Optimal Bid production margin
             */
            obj["optimalMargin"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.optimalMargin>([\s\S]*?)<\/cim:ResourceAwardInstruction.optimalMargin>/g, sub, context, true));
            /**
             * Time the manual data entry occured.
             */
            obj["overrideTimeStamp"] = base.to_datetime (base.parse_element (/<cim:ResourceAwardInstruction.overrideTimeStamp>([\s\S]*?)<\/cim:ResourceAwardInstruction.overrideTimeStamp>/g, sub, context, true));
            /**
             * Provides the ability for the grid operator to override items, such as spin capacity requirements, prior to running the algorithm.
             * This value is market product based (spin, non-spin, reg up, reg down, or RUC).
             */
            obj["overrideValue"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.overrideValue>([\s\S]*?)<\/cim:ResourceAwardInstruction.overrideValue>/g, sub, context, true));
            /**
             * For DA Energy: DA total self-schedule award;   
            For DA AS: DA AS self-provision award;   
            For RT Energy: RT total self-schedule award;
             * For RT AS: RT AS self-provision award (excluding DA AS market or self-provision awards)
             */
            obj["selfSchedMW"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.selfSchedMW>([\s\S]*?)<\/cim:ResourceAwardInstruction.selfSchedMW>/g, sub, context, true));
            /**
             * Unit start up cost in case of energy commodity
             */
            obj["startUpCost"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.startUpCost>([\s\S]*?)<\/cim:ResourceAwardInstruction.startUpCost>/g, sub, context, true));
            /**
             * In or out status of resource
             */
            obj["status"] = base.parse_element (/<cim:ResourceAwardInstruction.status>([\s\S]*?)<\/cim:ResourceAwardInstruction.status>/g, sub, context, true);
            /**
             * Total bid revenue (startup_cost + no_load_cost + bid_pay)
             */
            obj["totalRevenue"] = base.to_float (base.parse_element (/<cim:ResourceAwardInstruction.totalRevenue>([\s\S]*?)<\/cim:ResourceAwardInstruction.totalRevenue>/g, sub, context, true));
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:ResourceAwardInstruction.updateTimeStamp>([\s\S]*?)<\/cim:ResourceAwardInstruction.updateTimeStamp>/g, sub, context, true));
            obj["updateType"] = base.parse_element (/<cim:ResourceAwardInstruction.updateType>([\s\S]*?)<\/cim:ResourceAwardInstruction.updateType>/g, sub, context, true);
            obj["updateUser"] = base.parse_element (/<cim:ResourceAwardInstruction.updateUser>([\s\S]*?)<\/cim:ResourceAwardInstruction.updateUser>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:ResourceAwardInstruction.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["MarketProduct"] = base.parse_attribute (/<cim:ResourceAwardInstruction.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ResourceAwardInstruction;
            if (null == bucket)
                context.parsed.ResourceAwardInstruction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of load following capabilities that are entered by operators on a temporary basis.
         * Related to Registered Resources in Metered Subsystems
         */
        function parse_LoadFollowingOperatorInput (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LoadFollowingOperatorInput";
            /**
             * Time the data entry was performed
             */
            obj["dataEntryTimeStamp"] = base.to_datetime (base.parse_element (/<cim:LoadFollowingOperatorInput.dataEntryTimeStamp>([\s\S]*?)<\/cim:LoadFollowingOperatorInput.dataEntryTimeStamp>/g, sub, context, true));
            /**
             * temporarily manually entered LFU capacity.
             */
            obj["tempLoadFollowingUpManualCap"] = base.to_float (base.parse_element (/<cim:LoadFollowingOperatorInput.tempLoadFollowingUpManualCap>([\s\S]*?)<\/cim:LoadFollowingOperatorInput.tempLoadFollowingUpManualCap>/g, sub, context, true));
            /**
             * temporarily manually entered LFD capacity
             */
            obj["tempLoadFollowingDownManualCap"] = base.to_float (base.parse_element (/<cim:LoadFollowingOperatorInput.tempLoadFollowingDownManualCap>([\s\S]*?)<\/cim:LoadFollowingOperatorInput.tempLoadFollowingDownManualCap>/g, sub, context, true));
            obj["updateUser"] = base.parse_element (/<cim:LoadFollowingOperatorInput.updateUser>([\s\S]*?)<\/cim:LoadFollowingOperatorInput.updateUser>/g, sub, context, true);
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:LoadFollowingOperatorInput.updateTimeStamp>([\s\S]*?)<\/cim:LoadFollowingOperatorInput.updateTimeStamp>/g, sub, context, true));
            obj["updateType"] = base.parse_element (/<cim:LoadFollowingOperatorInput.updateType>([\s\S]*?)<\/cim:LoadFollowingOperatorInput.updateType>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:LoadFollowingOperatorInput.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.LoadFollowingOperatorInput;
            if (null == bucket)
                context.parsed.LoadFollowingOperatorInput = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of results of Market Power tests, gives status of resource for the associated interval
         */
        function parse_MPMResourceStatus (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MPMResourceStatus";
            /**
             * Interval Test Status
             * 'N' - not applicable
             */
            obj["resourceStatus"] = base.parse_element (/<cim:MPMResourceStatus.resourceStatus>([\s\S]*?)<\/cim:MPMResourceStatus.resourceStatus>/g, sub, context, true);
            /**
             * 
             */
            obj["MPMTestCategory"] = base.parse_attribute (/<cim:MPMResourceStatus.MPMTestCategory\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:MPMResourceStatus.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MPMResourceStatus;
            if (null == bucket)
                context.parsed.MPMResourceStatus = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of mitigated bid.
         * Indicates segment of piece-wise linear bid, that has been mitigated
         */
        function parse_MitigatedBidSegment (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MitigatedBidSegment";
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:MitigatedBidSegment.intervalStartTime>([\s\S]*?)<\/cim:MitigatedBidSegment.intervalStartTime>/g, sub, context, true));
            obj["thresholdType"] = base.parse_element (/<cim:MitigatedBidSegment.thresholdType>([\s\S]*?)<\/cim:MitigatedBidSegment.thresholdType>/g, sub, context, true);
            /**
             * Mitigated Bid Segment Number
             */
            obj["segmentNumber"] = base.parse_element (/<cim:MitigatedBidSegment.segmentNumber>([\s\S]*?)<\/cim:MitigatedBidSegment.segmentNumber>/g, sub, context, true);
            /**
             * Mitigated bid segment MW value
             */
            obj["segmentMW"] = base.to_float (base.parse_element (/<cim:MitigatedBidSegment.segmentMW>([\s\S]*?)<\/cim:MitigatedBidSegment.segmentMW>/g, sub, context, true));
            /**
             * 
             */
            obj["Bid"] = base.parse_attribute (/<cim:MitigatedBidSegment.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MitigatedBidSegment;
            if (null == bucket)
                context.parsed.MitigatedBidSegment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A statement is a roll up of statement line items.
         * Each statement along with its line items provide the details of specific charges at any given time.  Used by Billing and Settlement
         */
        function parse_MarketStatement (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "MarketStatement";
            /**
             * The date of which Settlement is run.
             */
            obj["tradeDate"] = base.to_datetime (base.parse_element (/<cim:MarketStatement.tradeDate>([\s\S]*?)<\/cim:MarketStatement.tradeDate>/g, sub, context, true));
            /**
             * The version number of previous statement (in the case of true up).
             */
            obj["referenceNumber"] = base.parse_element (/<cim:MarketStatement.referenceNumber>([\s\S]*?)<\/cim:MarketStatement.referenceNumber>/g, sub, context, true);
            /**
             * The start of a bill period.
             */
            obj["start"] = base.to_datetime (base.parse_element (/<cim:MarketStatement.start>([\s\S]*?)<\/cim:MarketStatement.start>/g, sub, context, true));
            /**
             * The end of a bill period.
             */
            obj["end"] = base.to_datetime (base.parse_element (/<cim:MarketStatement.end>([\s\S]*?)<\/cim:MarketStatement.end>/g, sub, context, true));
            /**
             * The date of which this statement is issued.
             */
            obj["transactionDate"] = base.to_datetime (base.parse_element (/<cim:MarketStatement.transactionDate>([\s\S]*?)<\/cim:MarketStatement.transactionDate>/g, sub, context, true));
            bucket = context.parsed.MarketStatement;
            if (null == bucket)
                context.parsed.MarketStatement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of market clearing results for resources that bid to follow load
         */
        function parse_ResourceLoadFollowingInst (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ResourceLoadFollowingInst";
            /**
             * Unique instruction id per instruction, assigned by the SC and provided to ADS.
             * ADS passes through.
             */
            obj["instructionID"] = base.parse_element (/<cim:ResourceLoadFollowingInst.instructionID>([\s\S]*?)<\/cim:ResourceLoadFollowingInst.instructionID>/g, sub, context, true);
            /**
             * The start of the time interval for which requirement is defined.
             */
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:ResourceLoadFollowingInst.intervalStartTime>([\s\S]*?)<\/cim:ResourceLoadFollowingInst.intervalStartTime>/g, sub, context, true));
            /**
             * weighted average for RTPD and RTCD and same for RTID
             */
            obj["calcLoadFollowingMW"] = base.to_float (base.parse_element (/<cim:ResourceLoadFollowingInst.calcLoadFollowingMW>([\s\S]*?)<\/cim:ResourceLoadFollowingInst.calcLoadFollowingMW>/g, sub, context, true));
            obj["dispWindowLowLimt"] = base.to_float (base.parse_element (/<cim:ResourceLoadFollowingInst.dispWindowLowLimt>([\s\S]*?)<\/cim:ResourceLoadFollowingInst.dispWindowLowLimt>/g, sub, context, true));
            obj["dispWindowHighLimt"] = base.to_float (base.parse_element (/<cim:ResourceLoadFollowingInst.dispWindowHighLimt>([\s\S]*?)<\/cim:ResourceLoadFollowingInst.dispWindowHighLimt>/g, sub, context, true));
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:ResourceLoadFollowingInst.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["ResourceClearing"] = base.parse_attribute (/<cim:ResourceLoadFollowingInst.ResourceClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ResourceLoadFollowingInst;
            if (null == bucket)
                context.parsed.ResourceLoadFollowingInst = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Pricing node clearing results posted for a given settlement period.
         */
        function parse_PnodeClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "PnodeClearing";
            bucket = context.parsed.PnodeClearing;
            if (null == bucket)
                context.parsed.PnodeClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of market clearing, related to Dispatch Operating Target (model of anticipatory dispatch).
         * Identifies interval
         */
        function parse_InstructionClearingDOT (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "InstructionClearingDOT";
            /**
             * Indication that the system is currently operating in a contingency mode.
             */
            obj["contingencyActive"] = base.parse_element (/<cim:InstructionClearingDOT.contingencyActive>([\s\S]*?)<\/cim:InstructionClearingDOT.contingencyActive>/g, sub, context, true);
            obj["dispatchMode"] = base.parse_element (/<cim:InstructionClearingDOT.dispatchMode>([\s\S]*?)<\/cim:InstructionClearingDOT.dispatchMode>/g, sub, context, true);
            bucket = context.parsed.InstructionClearingDOT;
            if (null == bucket)
                context.parsed.InstructionClearingDOT = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides the MW loss for RUC Zones, subcontrol areas, and the total loss.
         */
        function parse_LossClearingResults (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "LossClearingResults";
            obj["lossMW"] = base.to_float (base.parse_element (/<cim:LossClearingResults.lossMW>([\s\S]*?)<\/cim:LossClearingResults.lossMW>/g, sub, context, true));
            /**
             * 
             */
            obj["LossClearing"] = base.parse_attribute (/<cim:LossClearingResults.LossClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RUCZone"] = base.parse_attribute (/<cim:LossClearingResults.RUCZone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["SubControlArea"] = base.parse_attribute (/<cim:LossClearingResults.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["HostControlArea"] = base.parse_attribute (/<cim:LossClearingResults.HostControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.LossClearingResults;
            if (null == bucket)
                context.parsed.LossClearingResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This class models the information about the RUC awards
         */
        function parse_RUCAwardInstruction (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RUCAwardInstruction";
            /**
             * Marginal Price ($/MW) for the commodity (Regulation Up, Regulation Down, Spinning Reserve, or Non-spinning reserve) for pricing run.
             */
            obj["clearedPrice"] = base.to_float (base.parse_element (/<cim:RUCAwardInstruction.clearedPrice>([\s\S]*?)<\/cim:RUCAwardInstruction.clearedPrice>/g, sub, context, true));
            /**
             * major product type may include the following but not limited to:
            
            Energy
            Regulation Up
            Regulation Dn
            Spinning Reserve
            Non-Spinning Reserve
             * Operating Reserve
             */
            obj["marketProductType"] = base.parse_element (/<cim:RUCAwardInstruction.marketProductType>([\s\S]*?)<\/cim:RUCAwardInstruction.marketProductType>/g, sub, context, true);
            /**
             * The RUC Award of a resource is the portion of the RUC Capacity that is not under RA or RMR contracts.
             * The RUC Award of a resource is the portion of the RUC Capacity that is eligible for RUC Availability payment.
             */
            obj["RUCAward"] = base.to_float (base.parse_element (/<cim:RUCAwardInstruction.RUCAward>([\s\S]*?)<\/cim:RUCAwardInstruction.RUCAward>/g, sub, context, true));
            /**
             * The RUC Capacity of a resource is the difference between (i) the RUC Schedule and (ii) the higher of the DA Schedule and the Minimum Load.
             */
            obj["RUCCapacity"] = base.to_float (base.parse_element (/<cim:RUCAwardInstruction.RUCCapacity>([\s\S]*?)<\/cim:RUCAwardInstruction.RUCCapacity>/g, sub, context, true));
            /**
             * The RUC Schedule of a resource is its output level that balances the load forecast used in RUC.
             * The RUC Schedule in RUC is similar to the DA Schedule in DAM.
             */
            obj["RUCSchedule"] = base.to_float (base.parse_element (/<cim:RUCAwardInstruction.RUCSchedule>([\s\S]*?)<\/cim:RUCAwardInstruction.RUCSchedule>/g, sub, context, true));
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:RUCAwardInstruction.updateTimeStamp>([\s\S]*?)<\/cim:RUCAwardInstruction.updateTimeStamp>/g, sub, context, true));
            obj["updateType"] = base.parse_element (/<cim:RUCAwardInstruction.updateType>([\s\S]*?)<\/cim:RUCAwardInstruction.updateType>/g, sub, context, true);
            obj["updateUser"] = base.parse_element (/<cim:RUCAwardInstruction.updateUser>([\s\S]*?)<\/cim:RUCAwardInstruction.updateUser>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:RUCAwardInstruction.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RUCAwardInstruction;
            if (null == bucket)
                context.parsed.RUCAwardInstruction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of results of Market Power tests, and possible mitigation.
         * Interval based
         */
        function parse_MPMClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "MPMClearing";
            obj["LMPMFinalFlag"] = base.parse_element (/<cim:MPMClearing.LMPMFinalFlag>([\s\S]*?)<\/cim:MPMClearing.LMPMFinalFlag>/g, sub, context, true);
            obj["SMPMFinalFlag"] = base.parse_element (/<cim:MPMClearing.SMPMFinalFlag>([\s\S]*?)<\/cim:MPMClearing.SMPMFinalFlag>/g, sub, context, true);
            obj["mitigationOccuredFlag"] = base.parse_element (/<cim:MPMClearing.mitigationOccuredFlag>([\s\S]*?)<\/cim:MPMClearing.mitigationOccuredFlag>/g, sub, context, true);
            bucket = context.parsed.MPMClearing;
            if (null == bucket)
                context.parsed.MPMClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model various charges to support billing and settlement of
         */
        function parse_BillDeterminant (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "BillDeterminant";
            /**
             * Level in charge calculation order.
             */
            obj["calculationLevel"] = base.parse_element (/<cim:BillDeterminant.calculationLevel>([\s\S]*?)<\/cim:BillDeterminant.calculationLevel>/g, sub, context, true);
            /**
             * The version of configuration of calculation logic in the settlement.
             */
            obj["configVersion"] = base.parse_element (/<cim:BillDeterminant.configVersion>([\s\S]*?)<\/cim:BillDeterminant.configVersion>/g, sub, context, true);
            obj["deleteStatus"] = base.parse_element (/<cim:BillDeterminant.deleteStatus>([\s\S]*?)<\/cim:BillDeterminant.deleteStatus>/g, sub, context, true);
            obj["effectiveDate"] = base.to_datetime (base.parse_element (/<cim:BillDeterminant.effectiveDate>([\s\S]*?)<\/cim:BillDeterminant.effectiveDate>/g, sub, context, true));
            obj["exception"] = base.parse_element (/<cim:BillDeterminant.exception>([\s\S]*?)<\/cim:BillDeterminant.exception>/g, sub, context, true);
            obj["factor"] = base.parse_element (/<cim:BillDeterminant.factor>([\s\S]*?)<\/cim:BillDeterminant.factor>/g, sub, context, true);
            obj["frequency"] = base.parse_element (/<cim:BillDeterminant.frequency>([\s\S]*?)<\/cim:BillDeterminant.frequency>/g, sub, context, true);
            /**
             * Number of intervals of bill determiant in trade day, eg 300 for five minute intervals.
             */
            obj["numberInterval"] = base.parse_element (/<cim:BillDeterminant.numberInterval>([\s\S]*?)<\/cim:BillDeterminant.numberInterval>/g, sub, context, true);
            obj["offset"] = base.parse_element (/<cim:BillDeterminant.offset>([\s\S]*?)<\/cim:BillDeterminant.offset>/g, sub, context, true);
            /**
             * The level of precision in the current value.
             */
            obj["precisionLevel"] = base.parse_element (/<cim:BillDeterminant.precisionLevel>([\s\S]*?)<\/cim:BillDeterminant.precisionLevel>/g, sub, context, true);
            obj["primaryYN"] = base.parse_element (/<cim:BillDeterminant.primaryYN>([\s\S]*?)<\/cim:BillDeterminant.primaryYN>/g, sub, context, true);
            obj["referenceFlag"] = base.parse_element (/<cim:BillDeterminant.referenceFlag>([\s\S]*?)<\/cim:BillDeterminant.referenceFlag>/g, sub, context, true);
            obj["reportable"] = base.parse_element (/<cim:BillDeterminant.reportable>([\s\S]*?)<\/cim:BillDeterminant.reportable>/g, sub, context, true);
            obj["roundOff"] = base.parse_element (/<cim:BillDeterminant.roundOff>([\s\S]*?)<\/cim:BillDeterminant.roundOff>/g, sub, context, true);
            obj["source"] = base.parse_element (/<cim:BillDeterminant.source>([\s\S]*?)<\/cim:BillDeterminant.source>/g, sub, context, true);
            obj["terminationDate"] = base.to_datetime (base.parse_element (/<cim:BillDeterminant.terminationDate>([\s\S]*?)<\/cim:BillDeterminant.terminationDate>/g, sub, context, true));
            /**
             * The UOM for the current value of the Bill Determinant.
             */
            obj["unitOfMeasure"] = base.parse_element (/<cim:BillDeterminant.unitOfMeasure>([\s\S]*?)<\/cim:BillDeterminant.unitOfMeasure>/g, sub, context, true);
            /**
             * 
             */
            obj["ChargeProfile"] = base.parse_attribute (/<cim:BillDeterminant.ChargeProfile\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.BillDeterminant;
            if (null == bucket)
                context.parsed.BillDeterminant = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of ex-post pricing of nodes
         */
        function parse_ExPostPricing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "ExPostPricing";
            /**
             * market energy price
             */
            obj["energyPrice"] = base.to_float (base.parse_element (/<cim:ExPostPricing.energyPrice>([\s\S]*?)<\/cim:ExPostPricing.energyPrice>/g, sub, context, true));
            bucket = context.parsed.ExPostPricing;
            if (null == bucket)
                context.parsed.ExPostPricing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Contains the cleared results for each TransactionBid submitted to and accepted by the market.
         */
        function parse_TransactionBidResults (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TransactionBidResults";
            /**
             * The market transaction megawatt
             */
            obj["clearedMW"] = base.to_float (base.parse_element (/<cim:TransactionBidResults.clearedMW>([\s\S]*?)<\/cim:TransactionBidResults.clearedMW>/g, sub, context, true));
            /**
             * The price of the market transaction
             */
            obj["clearedPrice"] = base.to_float (base.parse_element (/<cim:TransactionBidResults.clearedPrice>([\s\S]*?)<\/cim:TransactionBidResults.clearedPrice>/g, sub, context, true));
            /**
             * 
             */
            obj["TransactionBidClearing"] = base.parse_attribute (/<cim:TransactionBidResults.TransactionBidClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["TransactionBid"] = base.parse_attribute (/<cim:TransactionBidResults.TransactionBid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TransactionBidResults;
            if (null == bucket)
                context.parsed.TransactionBidResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of results of market clearing with respect to  Ancillary Service products
         */
        function parse_AncillaryServiceClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "AncillaryServiceClearing";
            /**
             * 
             */
            obj["MarketCaseClearing"] = base.parse_attribute (/<cim:AncillaryServiceClearing.MarketCaseClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.AncillaryServiceClearing;
            if (null == bucket)
                context.parsed.AncillaryServiceClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides the adjusted load forecast value on a load forecast zone basis.
         */
        function parse_GeneralClearingResults (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "GeneralClearingResults";
            /**
             * Load Prediction/Forecast (MW), by Time Period (5', 10', 15')
             */
            obj["loadForecast"] = base.parse_element (/<cim:GeneralClearingResults.loadForecast>([\s\S]*?)<\/cim:GeneralClearingResults.loadForecast>/g, sub, context, true);
            /**
             * Amount of load in the control zone
             * Attribute Usage: hourly load value for the specific area
             */
            obj["totalLoad"] = base.to_float (base.parse_element (/<cim:GeneralClearingResults.totalLoad>([\s\S]*?)<\/cim:GeneralClearingResults.totalLoad>/g, sub, context, true));
            /**
             * Amount of interchange for the control zone
             * Attribute Usage: hourly interchange value for the specific area
             */
            obj["totalNetInterchange"] = base.to_float (base.parse_element (/<cim:GeneralClearingResults.totalNetInterchange>([\s\S]*?)<\/cim:GeneralClearingResults.totalNetInterchange>/g, sub, context, true));
            /**
             * 
             */
            obj["GeneralClearing"] = base.parse_attribute (/<cim:GeneralClearingResults.GeneralClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["SubControlArea"] = base.parse_attribute (/<cim:GeneralClearingResults.SubControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.GeneralClearingResults;
            if (null == bucket)
                context.parsed.GeneralClearingResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides the necessary information (on a resource basis) to capture the Startup/Shutdown commitment results.
         * This information is relevant to all markets.
         */
        function parse_Commitments (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Commitments";
            /**
             * the type of UC status (self commitment, ISO commitment, or SCUC commitment)
             */
            obj["commitmentType"] = base.parse_element (/<cim:Commitments.commitmentType>([\s\S]*?)<\/cim:Commitments.commitmentType>/g, sub, context, true);
            /**
             * Total cost associated with changing the status of the resource.
             */
            obj["instructionCost"] = base.to_float (base.parse_element (/<cim:Commitments.instructionCost>([\s\S]*?)<\/cim:Commitments.instructionCost>/g, sub, context, true));
            /**
             * Indicator of either a Start-Up or a Shut-Down.
             */
            obj["instructionType"] = base.parse_element (/<cim:Commitments.instructionType>([\s\S]*?)<\/cim:Commitments.instructionType>/g, sub, context, true);
            /**
             * End time for the commitment period.
             * This will be on an interval boundary.
             */
            obj["intervalEndTime"] = base.to_datetime (base.parse_element (/<cim:Commitments.intervalEndTime>([\s\S]*?)<\/cim:Commitments.intervalEndTime>/g, sub, context, true));
            /**
             * Start time for the commitment period.
             * This will be on an interval boundary.
             */
            obj["intervalStartTime"] = base.to_datetime (base.parse_element (/<cim:Commitments.intervalStartTime>([\s\S]*?)<\/cim:Commitments.intervalStartTime>/g, sub, context, true));
            /**
             * SCUC commitment period start-up time.
             * Calculated start up time based on the StartUpTimeCurve provided with the Bid.
             */
            obj["minStatusChangeTime"] = base.parse_element (/<cim:Commitments.minStatusChangeTime>([\s\S]*?)<\/cim:Commitments.minStatusChangeTime>/g, sub, context, true);
            /**
             * Unit no load cost in case of energy commodity
             */
            obj["noLoadCost"] = base.to_float (base.parse_element (/<cim:Commitments.noLoadCost>([\s\S]*?)<\/cim:Commitments.noLoadCost>/g, sub, context, true));
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:Commitments.updateTimeStamp>([\s\S]*?)<\/cim:Commitments.updateTimeStamp>/g, sub, context, true));
            obj["updateType"] = base.parse_element (/<cim:Commitments.updateType>([\s\S]*?)<\/cim:Commitments.updateType>/g, sub, context, true);
            obj["updateUser"] = base.parse_element (/<cim:Commitments.updateUser>([\s\S]*?)<\/cim:Commitments.updateUser>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:Commitments.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Commitments;
            if (null == bucket)
                context.parsed.Commitments = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Mitigated bid results posted for a given settlement period.
         */
        function parse_MitigatedBid (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MitigatedBid";
            /**
             * 
             */
            obj["Bid"] = base.parse_attribute (/<cim:MitigatedBid.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MitigatedBid;
            if (null == bucket)
                context.parsed.MitigatedBid = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of ex-post pricing of resources.
         */
        function parse_ExPostResource (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "ExPostResource";
            bucket = context.parsed.ExPostResource;
            if (null == bucket)
                context.parsed.ExPostResource = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of clearing result of the market run at the market level.
         * Identifies interval
         */
        function parse_GeneralClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "GeneralClearing";
            bucket = context.parsed.GeneralClearing;
            if (null == bucket)
                context.parsed.GeneralClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Pass Through Bill is used for:
        1)Two sided charge transactions with or without ISO involvement (hence the ?pass thru?)
        2) Specific direct charges or payments that are calculated outside or provided directly to settlements
         * 3) Specific charge bill determinants that are externally supplied and used in charge calculations
         */
        function parse_PassThroughBill (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "PassThroughBill";
            obj["adjustedAmount"] = base.parse_element (/<cim:PassThroughBill.adjustedAmount>([\s\S]*?)<\/cim:PassThroughBill.adjustedAmount>/g, sub, context, true);
            /**
             * The charge amount of the product/service.
             */
            obj["amount"] = base.parse_element (/<cim:PassThroughBill.amount>([\s\S]*?)<\/cim:PassThroughBill.amount>/g, sub, context, true);
            /**
             * The company to which the PTB transaction is billed.
             */
            obj["billedTo"] = base.parse_element (/<cim:PassThroughBill.billedTo>([\s\S]*?)<\/cim:PassThroughBill.billedTo>/g, sub, context, true);
            /**
             * Bill period end date
             */
            obj["billEnd"] = base.to_datetime (base.parse_element (/<cim:PassThroughBill.billEnd>([\s\S]*?)<\/cim:PassThroughBill.billEnd>/g, sub, context, true));
            /**
             * The settlement run type, for example: prelim, final, and rerun.
             */
            obj["billRunType"] = base.parse_element (/<cim:PassThroughBill.billRunType>([\s\S]*?)<\/cim:PassThroughBill.billRunType>/g, sub, context, true);
            /**
             * Bill period start date
             */
            obj["billStart"] = base.to_datetime (base.parse_element (/<cim:PassThroughBill.billStart>([\s\S]*?)<\/cim:PassThroughBill.billStart>/g, sub, context, true));
            /**
             * The effective date of the transaction
             */
            obj["effectiveDate"] = base.to_datetime (base.parse_element (/<cim:PassThroughBill.effectiveDate>([\s\S]*?)<\/cim:PassThroughBill.effectiveDate>/g, sub, context, true));
            /**
             * Disputed transaction indicator
             */
            obj["isDisputed"] = base.to_boolean (base.parse_element (/<cim:PassThroughBill.isDisputed>([\s\S]*?)<\/cim:PassThroughBill.isDisputed>/g, sub, context, true));
            /**
             * A flag indicating whether there is a profile data associated with the PTB.
             */
            obj["isProfiled"] = base.to_boolean (base.parse_element (/<cim:PassThroughBill.isProfiled>([\s\S]*?)<\/cim:PassThroughBill.isProfiled>/g, sub, context, true));
            /**
             * The company to which the PTB transaction is paid.
             */
            obj["paidTo"] = base.parse_element (/<cim:PassThroughBill.paidTo>([\s\S]*?)<\/cim:PassThroughBill.paidTo>/g, sub, context, true);
            /**
             * The previous bill period end date
             */
            obj["previousEnd"] = base.to_datetime (base.parse_element (/<cim:PassThroughBill.previousEnd>([\s\S]*?)<\/cim:PassThroughBill.previousEnd>/g, sub, context, true));
            /**
             * The previous bill period start date
             */
            obj["previousStart"] = base.to_datetime (base.parse_element (/<cim:PassThroughBill.previousStart>([\s\S]*?)<\/cim:PassThroughBill.previousStart>/g, sub, context, true));
            /**
             * The price of product/service.
             */
            obj["price"] = base.parse_element (/<cim:PassThroughBill.price>([\s\S]*?)<\/cim:PassThroughBill.price>/g, sub, context, true);
            /**
             * The product identifier for determining the charge type of the transaction.
             */
            obj["productCode"] = base.parse_element (/<cim:PassThroughBill.productCode>([\s\S]*?)<\/cim:PassThroughBill.productCode>/g, sub, context, true);
            /**
             * The company by which the PTB transaction service is provided.
             */
            obj["providedBy"] = base.parse_element (/<cim:PassThroughBill.providedBy>([\s\S]*?)<\/cim:PassThroughBill.providedBy>/g, sub, context, true);
            /**
             * The product quantity.
             */
            obj["quantity"] = base.parse_element (/<cim:PassThroughBill.quantity>([\s\S]*?)<\/cim:PassThroughBill.quantity>/g, sub, context, true);
            /**
             * The end date of service provided, if periodic.
             */
            obj["serviceEnd"] = base.to_datetime (base.parse_element (/<cim:PassThroughBill.serviceEnd>([\s\S]*?)<\/cim:PassThroughBill.serviceEnd>/g, sub, context, true));
            /**
             * The start date of service provided, if periodic.
             */
            obj["serviceStart"] = base.to_datetime (base.parse_element (/<cim:PassThroughBill.serviceStart>([\s\S]*?)<\/cim:PassThroughBill.serviceStart>/g, sub, context, true));
            /**
             * The company to which the PTB transaction is sold.
             */
            obj["soldTo"] = base.parse_element (/<cim:PassThroughBill.soldTo>([\s\S]*?)<\/cim:PassThroughBill.soldTo>/g, sub, context, true);
            /**
             * The tax on services taken.
             */
            obj["taxAmount"] = base.parse_element (/<cim:PassThroughBill.taxAmount>([\s\S]*?)<\/cim:PassThroughBill.taxAmount>/g, sub, context, true);
            /**
             * The time zone code
             */
            obj["timeZone"] = base.parse_element (/<cim:PassThroughBill.timeZone>([\s\S]*?)<\/cim:PassThroughBill.timeZone>/g, sub, context, true);
            /**
             * The trade date
             */
            obj["tradeDate"] = base.to_datetime (base.parse_element (/<cim:PassThroughBill.tradeDate>([\s\S]*?)<\/cim:PassThroughBill.tradeDate>/g, sub, context, true));
            /**
             * The date the transaction occurs.
             */
            obj["transactionDate"] = base.to_datetime (base.parse_element (/<cim:PassThroughBill.transactionDate>([\s\S]*?)<\/cim:PassThroughBill.transactionDate>/g, sub, context, true));
            /**
             * The type of transaction.
             * For example, charge customer, bill customer, matching AR/AP, or bill determinant
             */
            obj["transactionType"] = base.parse_element (/<cim:PassThroughBill.transactionType>([\s\S]*?)<\/cim:PassThroughBill.transactionType>/g, sub, context, true);
            /**
             * 
             */
            obj["MarketStatementLineItem"] = base.parse_attribute (/<cim:PassThroughBill.MarketStatementLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.PassThroughBill;
            if (null == bucket)
                context.parsed.PassThroughBill = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of ex-post pricing of resources contains components of LMPs: energy, congestion, loss.
         * Resource based.
         */
        function parse_ExPostResourceResults (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExPostResourceResults";
            /**
             * LMP component in USD (deprecated)
             */
            obj["congestionLMP"] = base.to_float (base.parse_element (/<cim:ExPostResourceResults.congestionLMP>([\s\S]*?)<\/cim:ExPostResourceResults.congestionLMP>/g, sub, context, true));
            /**
             * Desired output of unit
             */
            obj["desiredMW"] = base.to_float (base.parse_element (/<cim:ExPostResourceResults.desiredMW>([\s\S]*?)<\/cim:ExPostResourceResults.desiredMW>/g, sub, context, true));
            /**
             * Unit Dispatch rate from real time unit dispatch.
             */
            obj["dispatchRate"] = base.to_float (base.parse_element (/<cim:ExPostResourceResults.dispatchRate>([\s\S]*?)<\/cim:ExPostResourceResults.dispatchRate>/g, sub, context, true));
            /**
             * LMP (Local Marginal Price) in USD at the equipment (deprecated)
             */
            obj["lmp"] = base.to_float (base.parse_element (/<cim:ExPostResourceResults.lmp>([\s\S]*?)<\/cim:ExPostResourceResults.lmp>/g, sub, context, true));
            /**
             * loss lmp (deprecated)
             */
            obj["lossLMP"] = base.to_float (base.parse_element (/<cim:ExPostResourceResults.lossLMP>([\s\S]*?)<\/cim:ExPostResourceResults.lossLMP>/g, sub, context, true));
            /**
             * Economic Maximum MW
             */
            obj["maxEconomicMW"] = base.to_float (base.parse_element (/<cim:ExPostResourceResults.maxEconomicMW>([\s\S]*?)<\/cim:ExPostResourceResults.maxEconomicMW>/g, sub, context, true));
            /**
             * Economic Minimum MW
             */
            obj["minEconomicMW"] = base.to_float (base.parse_element (/<cim:ExPostResourceResults.minEconomicMW>([\s\S]*?)<\/cim:ExPostResourceResults.minEconomicMW>/g, sub, context, true));
            /**
             * Current MW output of the equipment
             * Attribute Usage: Information purposes - Information purposes - Output of LPA engine.
             */
            obj["resourceMW"] = base.to_float (base.parse_element (/<cim:ExPostResourceResults.resourceMW>([\s\S]*?)<\/cim:ExPostResourceResults.resourceMW>/g, sub, context, true));
            /**
             * Status of equipment
             */
            obj["status"] = base.parse_element (/<cim:ExPostResourceResults.status>([\s\S]*?)<\/cim:ExPostResourceResults.status>/g, sub, context, true);
            /**
             * 
             */
            obj["ExPostResource"] = base.parse_attribute (/<cim:ExPostResourceResults.ExPostResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:ExPostResourceResults.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ExPostResourceResults;
            if (null == bucket)
                context.parsed.ExPostResourceResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Contains the intervals relavent for the associated TransactionBidResults.
         * For example, Day Ahead cleared results for the transaction bids for each interval of the market day.
         */
        function parse_TransactionBidClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "TransactionBidClearing";
            bucket = context.parsed.TransactionBidClearing;
            if (null == bucket)
                context.parsed.TransactionBidClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Specifies a settlement run.
         */
        function parse_Settlement (context, sub)
        {
            var obj;
            var bucket;

            obj = Common.parse_Document (context, sub);
            obj.cls = "Settlement";
            /**
             * The trade date on which the settlement is run.
             */
            obj["tradeDate"] = base.to_datetime (base.parse_element (/<cim:Settlement.tradeDate>([\s\S]*?)<\/cim:Settlement.tradeDate>/g, sub, context, true));
            /**
             * 
             */
            obj["EnergyMarket"] = base.parse_attribute (/<cim:Settlement.EnergyMarket\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Settlement;
            if (null == bucket)
                context.parsed.Settlement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of ex-post pricing of nodes.
         * Includes LMP information, pnode based.
         */
        function parse_ExPostPricingResults (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExPostPricingResults";
            /**
             * Congestion component of Location Marginal Price (LMP) in monetary units per MW; congestion component of the hourly LMP at a specific pricing node
             * Attribute Usage: Result of the Security, Pricing, and Dispatch(SPD)/Simultaneous Feasibility Test(SFT) software and denotes the hourly congestion component of LMP for each pricing node.
             */
            obj["congestLMP"] = base.to_float (base.parse_element (/<cim:ExPostPricingResults.congestLMP>([\s\S]*?)<\/cim:ExPostPricingResults.congestLMP>/g, sub, context, true));
            /**
             * 5 min weighted average LMP; the Location Marginal Price of the Pnode for which price calculation is carried out.
             * Attribute Usage: 5 min weighted average LMP  to be displayed on UI
             */
            obj["lmp"] = base.to_float (base.parse_element (/<cim:ExPostPricingResults.lmp>([\s\S]*?)<\/cim:ExPostPricingResults.lmp>/g, sub, context, true));
            /**
             * Loss component of Location Marginal Price (LMP) in monetary units per MW; loss component of the hourly LMP at a specific pricing node
             * Attribute Usage: Result of the Security, Pricing, and Dispatch(SPD)/Simultaneous Feasibility Test(SFT) software and denotes the hourly loss component of LMP for each pricing node.
             */
            obj["lossLMP"] = base.to_float (base.parse_element (/<cim:ExPostPricingResults.lossLMP>([\s\S]*?)<\/cim:ExPostPricingResults.lossLMP>/g, sub, context, true));
            /**
             * 
             */
            obj["ExPostPricing"] = base.parse_attribute (/<cim:ExPostPricingResults.ExPostPricing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["Pnode"] = base.parse_attribute (/<cim:ExPostPricingResults.Pnode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ExPostPricingResults;
            if (null == bucket)
                context.parsed.ExPostPricingResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides the necessary information (on a resource basis) to capture the Startup/Shutdown instruction results.
         * This information is relevant to the DA Market (RUC only) as well as the RT Market (HASP, Pre-dispatch, and Interval).
         */
        function parse_Instructions (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "Instructions";
            obj["bindingDOT"] = base.to_float (base.parse_element (/<cim:Instructions.bindingDOT>([\s\S]*?)<\/cim:Instructions.bindingDOT>/g, sub, context, true));
            obj["bindingInstruction"] = base.parse_element (/<cim:Instructions.bindingInstruction>([\s\S]*?)<\/cim:Instructions.bindingInstruction>/g, sub, context, true);
            /**
             * Total cost associated with changing the status of the resource.
             */
            obj["instructionCost"] = base.to_float (base.parse_element (/<cim:Instructions.instructionCost>([\s\S]*?)<\/cim:Instructions.instructionCost>/g, sub, context, true));
            /**
             * instruction source for market quality results (INS, ACT)
             */
            obj["instructionSource"] = base.parse_element (/<cim:Instructions.instructionSource>([\s\S]*?)<\/cim:Instructions.instructionSource>/g, sub, context, true);
            /**
             * Time the resource should be at Pmin (for start ups).
             * Time the resource is off line.
             */
            obj["instructionStartTime"] = base.to_datetime (base.parse_element (/<cim:Instructions.instructionStartTime>([\s\S]*?)<\/cim:Instructions.instructionStartTime>/g, sub, context, true));
            /**
             * Indicator of either a Start-Up or a Shut-Down.
             */
            obj["instructionType"] = base.parse_element (/<cim:Instructions.instructionType>([\s\S]*?)<\/cim:Instructions.instructionType>/g, sub, context, true);
            /**
             * Manually Blocked Indicator (Yes/No).
             * The instruction has been blocked by an Operator.
             */
            obj["manuallyBlocked"] = base.parse_element (/<cim:Instructions.manuallyBlocked>([\s\S]*?)<\/cim:Instructions.manuallyBlocked>/g, sub, context, true);
            /**
             * Minimum start up time required to bring the unit online (minutes).
             * SCUC commitment period start-up time. Calculated start up time based on the StartUpTimeCurve provided with the Bid.
             */
            obj["minStatusChangeTime"] = base.parse_element (/<cim:Instructions.minStatusChangeTime>([\s\S]*?)<\/cim:Instructions.minStatusChangeTime>/g, sub, context, true);
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:Instructions.updateTimeStamp>([\s\S]*?)<\/cim:Instructions.updateTimeStamp>/g, sub, context, true));
            obj["updateType"] = base.parse_element (/<cim:Instructions.updateType>([\s\S]*?)<\/cim:Instructions.updateType>/g, sub, context, true);
            obj["updateUser"] = base.parse_element (/<cim:Instructions.updateUser>([\s\S]*?)<\/cim:Instructions.updateUser>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredResource"] = base.parse_attribute (/<cim:Instructions.RegisteredResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.Instructions;
            if (null == bucket)
                context.parsed.Instructions = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models details of bid and offer market clearing.
         * Class indicates whether a contingency is active and whether the automatic dispatching system is active for this interval of the market solution
         */
        function parse_ResourceAwardClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "ResourceAwardClearing";
            obj["dispatchMode"] = base.parse_element (/<cim:ResourceAwardClearing.dispatchMode>([\s\S]*?)<\/cim:ResourceAwardClearing.dispatchMode>/g, sub, context, true);
            /**
             * Indication that the system is currently operating in a contingency mode.
             */
            obj["contingencyActive"] = base.parse_element (/<cim:ResourceAwardClearing.contingencyActive>([\s\S]*?)<\/cim:ResourceAwardClearing.contingencyActive>/g, sub, context, true);
            bucket = context.parsed.ResourceAwardClearing;
            if (null == bucket)
                context.parsed.ResourceAwardClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of expost calculation of cleared MW on a region basis.
         * Includes cleared price
         */
        function parse_ExPostMarketRegionResults (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExPostMarketRegionResults";
            obj["exPostClearedPrice"] = base.to_float (base.parse_element (/<cim:ExPostMarketRegionResults.exPostClearedPrice>([\s\S]*?)<\/cim:ExPostMarketRegionResults.exPostClearedPrice>/g, sub, context, true));
            /**
             * 
             */
            obj["MarketRegion"] = base.parse_attribute (/<cim:ExPostMarketRegionResults.MarketRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["ExPostMarketRegion"] = base.parse_attribute (/<cim:ExPostMarketRegionResults.ExPostMarketRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ExPostMarketRegionResults;
            if (null == bucket)
                context.parsed.ExPostMarketRegionResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of ex-post calculation of cleared MW on a regional basis
         */
        function parse_ExPostMarketRegion (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "ExPostMarketRegion";
            /**
             * 
             */
            obj["ExPostMarketRegionResults"] = base.parse_attribute (/<cim:ExPostMarketRegion.ExPostMarketRegionResults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ExPostMarketRegion;
            if (null == bucket)
                context.parsed.ExPostMarketRegion = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A type of profile for financial charges
         */
        function parse_ChargeProfile (context, sub)
        {
            var obj;
            var bucket;

            obj = ExternalInputs.parse_Profile (context, sub);
            obj.cls = "ChargeProfile";
            /**
             * The type of profile.
             * It could be amount, price, or quantity.
             */
            obj["type"] = base.parse_element (/<cim:ChargeProfile.type>([\s\S]*?)<\/cim:ChargeProfile.type>/g, sub, context, true);
            /**
             * The calculation frequency, daily or monthly.
             */
            obj["frequency"] = base.parse_element (/<cim:ChargeProfile.frequency>([\s\S]*?)<\/cim:ChargeProfile.frequency>/g, sub, context, true);
            /**
             * The number of intervals in the profile data.
             */
            obj["numberInterval"] = base.parse_element (/<cim:ChargeProfile.numberInterval>([\s\S]*?)<\/cim:ChargeProfile.numberInterval>/g, sub, context, true);
            /**
             * The unit of measure applied to the value attribute of the profile data.
             */
            obj["unitOfMeasure"] = base.parse_element (/<cim:ChargeProfile.unitOfMeasure>([\s\S]*?)<\/cim:ChargeProfile.unitOfMeasure>/g, sub, context, true);
            /**
             * 
             */
            obj["BillDeterminant"] = base.parse_attribute (/<cim:ChargeProfile.BillDeterminant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["PassTroughBill"] = base.parse_attribute (/<cim:ChargeProfile.PassTroughBill\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["Bid"] = base.parse_attribute (/<cim:ChargeProfile.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ChargeProfile;
            if (null == bucket)
                context.parsed.ChargeProfile = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * RT only and is published on 5 minute intervals for the previous RT time interval results.
         */
        function parse_LossClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "LossClearing";
            bucket = context.parsed.LossClearing;
            if (null == bucket)
                context.parsed.LossClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Indicates whether unit is a reliablity must run unit: required to be on to satisfy Grid Code Reliablitiy criteria, load demand, or voltage support.
         */
        function parse_RMRDetermination (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "RMRDetermination";
            /**
             * 
             */
            obj["Bid"] = base.parse_attribute (/<cim:RMRDetermination.Bid\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.RMRDetermination;
            if (null == bucket)
                context.parsed.RMRDetermination = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of market clearing, related to Dispatch Operating Point.
         * Identifies interval
         */
        function parse_InstructionClearingDOP (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "InstructionClearingDOP";
            bucket = context.parsed.InstructionClearingDOP;
            if (null == bucket)
                context.parsed.InstructionClearingDOP = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides the Market results for the constraint processing for either the DAM or RTM.
         * The data includes the constraint type (binding or violated), the solved value for the constraint, and the associated shadow price.
         */
        function parse_ConstraintResults (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ConstraintResults";
            /**
             * Branch base Power Flow.
             */
            obj["baseFlow"] = base.to_float (base.parse_element (/<cim:ConstraintResults.baseFlow>([\s\S]*?)<\/cim:ConstraintResults.baseFlow>/g, sub, context, true));
            /**
             * This value is determined in DA and RTM.
             * The SCUC optimization ensures that the MW flow on the Branch Group will not exceed this limit in the relevant direction.
             */
            obj["BGLimit"] = base.to_float (base.parse_element (/<cim:ConstraintResults.BGLimit>([\s\S]*?)<\/cim:ConstraintResults.BGLimit>/g, sub, context, true));
            /**
             * Branch Group TR Reservation Capacity - This value is determined in DA and RTM.
             * It is the amount of spare transmission capacity that is left for the TR holder to use.
             */
            obj["BGTRResCap"] = base.to_float (base.parse_element (/<cim:ConstraintResults.BGTRResCap>([\s\S]*?)<\/cim:ConstraintResults.BGTRResCap>/g, sub, context, true));
            /**
             * MW Limit.
             */
            obj["bindingLimit"] = base.to_float (base.parse_element (/<cim:ConstraintResults.bindingLimit>([\s\S]*?)<\/cim:ConstraintResults.bindingLimit>/g, sub, context, true));
            /**
             * Cleared MW.
             */
            obj["clearedValue"] = base.to_float (base.parse_element (/<cim:ConstraintResults.clearedValue>([\s\S]*?)<\/cim:ConstraintResults.clearedValue>/g, sub, context, true));
            /**
             * Non-competitive path constraint Flag"(Y/N)  indicating whether the shadow price on a non-competitive path was non-zero.
             */
            obj["competitivePathConstraint"] = base.parse_element (/<cim:ConstraintResults.competitivePathConstraint>([\s\S]*?)<\/cim:ConstraintResults.competitivePathConstraint>/g, sub, context, true);
            /**
             * Type of constraint.
             */
            obj["constraintType"] = base.parse_element (/<cim:ConstraintResults.constraintType>([\s\S]*?)<\/cim:ConstraintResults.constraintType>/g, sub, context, true);
            /**
             * Limit flag ('Maximum', 'Minimum').
             */
            obj["limitFlag"] = base.parse_element (/<cim:ConstraintResults.limitFlag>([\s\S]*?)<\/cim:ConstraintResults.limitFlag>/g, sub, context, true);
            /**
             * Included in optimization Y/N.
             */
            obj["optimizationFlag"] = base.parse_element (/<cim:ConstraintResults.optimizationFlag>([\s\S]*?)<\/cim:ConstraintResults.optimizationFlag>/g, sub, context, true);
            /**
             * Transmission overload MW.
             */
            obj["overloadMW"] = base.to_float (base.parse_element (/<cim:ConstraintResults.overloadMW>([\s\S]*?)<\/cim:ConstraintResults.overloadMW>/g, sub, context, true));
            /**
             * Actual MW flow as percent of limit.
             */
            obj["percentMW"] = base.to_float (base.parse_element (/<cim:ConstraintResults.percentMW>([\s\S]*?)<\/cim:ConstraintResults.percentMW>/g, sub, context, true));
            /**
             * Shadow Price ($/MW) for the commodity.
             * Shadow price for the corresponding constraint.
             */
            obj["shadowPrice"] = base.to_float (base.parse_element (/<cim:ConstraintResults.shadowPrice>([\s\S]*?)<\/cim:ConstraintResults.shadowPrice>/g, sub, context, true));
            /**
             * Update time stamp.
             */
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:ConstraintResults.updateTimeStamp>([\s\S]*?)<\/cim:ConstraintResults.updateTimeStamp>/g, sub, context, true));
            /**
             * MQS change type.
             */
            obj["updateType"] = base.parse_element (/<cim:ConstraintResults.updateType>([\s\S]*?)<\/cim:ConstraintResults.updateType>/g, sub, context, true);
            /**
             * Updated user.
             */
            obj["updateUser"] = base.parse_element (/<cim:ConstraintResults.updateUser>([\s\S]*?)<\/cim:ConstraintResults.updateUser>/g, sub, context, true);
            /**
             * 
             */
            obj["MktContingency"] = base.parse_attribute (/<cim:ConstraintResults.MktContingency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["ConstraintClearing"] = base.parse_attribute (/<cim:ConstraintResults.ConstraintClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["Flowgate"] = base.parse_attribute (/<cim:ConstraintResults.Flowgate\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ConstraintResults;
            if (null == bucket)
                context.parsed.ConstraintResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides all Region Ancillary Service results for the DA and RT markets.
         * The specific data is commodity type (Regulation Up, Regulation Down, Spinning Reserve, Non-spinning Reserve, or Total Up reserves) based for the cleared MW, cleared price, and total capacity required for the region.
         */
        function parse_MarketRegionResults (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "MarketRegionResults";
            /**
             * Cleared generation Value in MW.
             * For AS, this value is clearedMW = AS Total.  For AS, clearedMW - selfScheduleMW = AS Procured
             */
            obj["clearedMW"] = base.to_float (base.parse_element (/<cim:MarketRegionResults.clearedMW>([\s\S]*?)<\/cim:MarketRegionResults.clearedMW>/g, sub, context, true));
            /**
             * Marginal Price ($/MW) for the commodity (Energy, Regulation Up, Regulation Down, Spinning Reserve, or Non-spinning reserve) based on the pricing run.
             */
            obj["clearedPrice"] = base.to_float (base.parse_element (/<cim:MarketRegionResults.clearedPrice>([\s\S]*?)<\/cim:MarketRegionResults.clearedPrice>/g, sub, context, true));
            /**
             * Dispatchable MW for Combustion units.
             */
            obj["dispatchCtMW"] = base.to_float (base.parse_element (/<cim:MarketRegionResults.dispatchCtMW>([\s\S]*?)<\/cim:MarketRegionResults.dispatchCtMW>/g, sub, context, true));
            /**
             * Dispatchable MW for Hydro units.
             */
            obj["dispatchHydroMW"] = base.to_float (base.parse_element (/<cim:MarketRegionResults.dispatchHydroMW>([\s\S]*?)<\/cim:MarketRegionResults.dispatchHydroMW>/g, sub, context, true));
            /**
             * Dispatch rate in MW/minutes.
             */
            obj["dispatchRate"] = base.to_float (base.parse_element (/<cim:MarketRegionResults.dispatchRate>([\s\S]*?)<\/cim:MarketRegionResults.dispatchRate>/g, sub, context, true));
            /**
             * Dispatchable MW for Steam units.
             */
            obj["dispatchSteamMW"] = base.to_float (base.parse_element (/<cim:MarketRegionResults.dispatchSteamMW>([\s\S]*?)<\/cim:MarketRegionResults.dispatchSteamMW>/g, sub, context, true));
            /**
             * Imbalance Energy Bias (MW) by Time Period (5' only)
             */
            obj["imbalanceEnergyBias"] = base.to_float (base.parse_element (/<cim:MarketRegionResults.imbalanceEnergyBias>([\s\S]*?)<\/cim:MarketRegionResults.imbalanceEnergyBias>/g, sub, context, true));
            /**
             * Locational AS Flags indicating whether the Upper or Lower Bound limit of the AS regional procurment is binding
             */
            obj["limitFlag"] = base.parse_element (/<cim:MarketRegionResults.limitFlag>([\s\S]*?)<\/cim:MarketRegionResults.limitFlag>/g, sub, context, true);
            /**
             * The "Lumpy Flag"(Y/N)  indicates whether the resource that sets the price is a lumpy generator by hour over the time horizon.
             * Only applicable for the Day Ahead Market
             */
            obj["lumpyIndicator"] = base.parse_element (/<cim:MarketRegionResults.lumpyIndicator>([\s\S]*?)<\/cim:MarketRegionResults.lumpyIndicator>/g, sub, context, true);
            /**
             * Region requirement maximum limit
             */
            obj["maxSufficiencyIndex"] = base.to_float (base.parse_element (/<cim:MarketRegionResults.maxSufficiencyIndex>([\s\S]*?)<\/cim:MarketRegionResults.maxSufficiencyIndex>/g, sub, context, true));
            /**
             * Region requirement minimum limit
             */
            obj["minSufficiencyIndex"] = base.to_float (base.parse_element (/<cim:MarketRegionResults.minSufficiencyIndex>([\s\S]*?)<\/cim:MarketRegionResults.minSufficiencyIndex>/g, sub, context, true));
            /**
             * Region requirement maximum limit
             */
            obj["reqMaxMW"] = base.to_float (base.parse_element (/<cim:MarketRegionResults.reqMaxMW>([\s\S]*?)<\/cim:MarketRegionResults.reqMaxMW>/g, sub, context, true));
            /**
             * Region requirement minimum limit
             */
            obj["reqMinMW"] = base.to_float (base.parse_element (/<cim:MarketRegionResults.reqMinMW>([\s\S]*?)<\/cim:MarketRegionResults.reqMinMW>/g, sub, context, true));
            /**
             * Aof AS, selfScheduleMW = AS Self-Provided
             */
            obj["selfScheduleMW"] = base.to_float (base.parse_element (/<cim:MarketRegionResults.selfScheduleMW>([\s\S]*?)<\/cim:MarketRegionResults.selfScheduleMW>/g, sub, context, true));
            /**
             * 
             */
            obj["MarketProduct"] = base.parse_attribute (/<cim:MarketRegionResults.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["MarketRegion"] = base.parse_attribute (/<cim:MarketRegionResults.MarketRegion\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["AncillaryServiceClearing"] = base.parse_attribute (/<cim:MarketRegionResults.AncillaryServiceClearing\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MarketRegionResults;
            if (null == bucket)
                context.parsed.MarketRegionResults = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Provides the necessary information (on a resource basis) to capture the Dispatch Operating Point (DOP) results on a Dispatch interval.
         * This information is only relevant to the RT interval market.
         */
        function parse_DopInstruction (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "DopInstruction";
            /**
             * Dispatched Operating Point (MW)
             */
            obj["mwDOP"] = base.parse_element (/<cim:DopInstruction.mwDOP>([\s\S]*?)<\/cim:DopInstruction.mwDOP>/g, sub, context, true);
            /**
             * DOP time stamp
             */
            obj["timestampDOP"] = base.to_datetime (base.parse_element (/<cim:DopInstruction.timestampDOP>([\s\S]*?)<\/cim:DopInstruction.timestampDOP>/g, sub, context, true));
            /**
             * A value used to establish priority of the DOP when plotting.
             * This is only applicable when two DOPs exist for the same time, but with different MW values.  E.g. when indicating a step in the curve.  Its used to determine if the curve steps up or down.
             */
            obj["plotPriority"] = base.parse_element (/<cim:DopInstruction.plotPriority>([\s\S]*?)<\/cim:DopInstruction.plotPriority>/g, sub, context, true);
            /**
             * Indication of DOP validity.
             * Shows the DOP is calculated from the latest run (YES). A NO indicator shows that the DOP is copied from a previous execution.
             */
            obj["runIndicatorDOP"] = base.parse_element (/<cim:DopInstruction.runIndicatorDOP>([\s\S]*?)<\/cim:DopInstruction.runIndicatorDOP>/g, sub, context, true);
            obj["updateUser"] = base.parse_element (/<cim:DopInstruction.updateUser>([\s\S]*?)<\/cim:DopInstruction.updateUser>/g, sub, context, true);
            obj["updateTimeStamp"] = base.to_datetime (base.parse_element (/<cim:DopInstruction.updateTimeStamp>([\s\S]*?)<\/cim:DopInstruction.updateTimeStamp>/g, sub, context, true));
            obj["updateType"] = base.parse_element (/<cim:DopInstruction.updateType>([\s\S]*?)<\/cim:DopInstruction.updateType>/g, sub, context, true);
            /**
             * 
             */
            obj["RegisteredResouce"] = base.parse_attribute (/<cim:DopInstruction.RegisteredResouce\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DopInstruction;
            if (null == bucket)
                context.parsed.DopInstruction = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of ex-post calcultion of MW losses.
         */
        function parse_ExPostLoss (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "ExPostLoss";
            bucket = context.parsed.ExPostLoss;
            if (null == bucket)
                context.parsed.ExPostLoss = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An individual line item on a statement.
         */
        function parse_MarketStatementLineItem (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "MarketStatementLineItem";
            /**
             * The number of intervals.
             */
            obj["intervalNumber"] = base.parse_element (/<cim:MarketStatementLineItem.intervalNumber>([\s\S]*?)<\/cim:MarketStatementLineItem.intervalNumber>/g, sub, context, true);
            /**
             * The date of which the settlement is run.
             */
            obj["intervalDate"] = base.to_datetime (base.parse_element (/<cim:MarketStatementLineItem.intervalDate>([\s\S]*?)<\/cim:MarketStatementLineItem.intervalDate>/g, sub, context, true));
            /**
             * The unit of measure for the quantity element of the line item.
             */
            obj["quantityUOM"] = base.parse_element (/<cim:MarketStatementLineItem.quantityUOM>([\s\S]*?)<\/cim:MarketStatementLineItem.quantityUOM>/g, sub, context, true);
            /**
             * Previous settlement amount.
             */
            obj["previousAmount"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.previousAmount>([\s\S]*?)<\/cim:MarketStatementLineItem.previousAmount>/g, sub, context, true));
            /**
             * Current settlement amount.
             */
            obj["currentAmount"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.currentAmount>([\s\S]*?)<\/cim:MarketStatementLineItem.currentAmount>/g, sub, context, true));
            /**
             * Net settlement amount.
             */
            obj["netAmount"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.netAmount>([\s\S]*?)<\/cim:MarketStatementLineItem.netAmount>/g, sub, context, true));
            /**
             * Previous settlement quantity, subject to the UOM.
             */
            obj["previousQuantity"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.previousQuantity>([\s\S]*?)<\/cim:MarketStatementLineItem.previousQuantity>/g, sub, context, true));
            /**
             * Current settlement quantity, subject to the UOM.
             */
            obj["currentQuantity"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.currentQuantity>([\s\S]*?)<\/cim:MarketStatementLineItem.currentQuantity>/g, sub, context, true));
            /**
             * Net settlement quantity, subject to the UOM.
             */
            obj["netQuantity"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.netQuantity>([\s\S]*?)<\/cim:MarketStatementLineItem.netQuantity>/g, sub, context, true));
            /**
             * Previous settlement price.
             */
            obj["previsouPrice"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.previsouPrice>([\s\S]*?)<\/cim:MarketStatementLineItem.previsouPrice>/g, sub, context, true));
            /**
             * Current settlement price.
             */
            obj["currentPrice"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.currentPrice>([\s\S]*?)<\/cim:MarketStatementLineItem.currentPrice>/g, sub, context, true));
            /**
             * Net settlement price.
             */
            obj["netPrice"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.netPrice>([\s\S]*?)<\/cim:MarketStatementLineItem.netPrice>/g, sub, context, true));
            /**
             * Previous ISO settlement amount.
             */
            obj["previousISOAmount"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.previousISOAmount>([\s\S]*?)<\/cim:MarketStatementLineItem.previousISOAmount>/g, sub, context, true));
            /**
             * Current ISO settlement amount.
             */
            obj["currentISOAmount"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.currentISOAmount>([\s\S]*?)<\/cim:MarketStatementLineItem.currentISOAmount>/g, sub, context, true));
            /**
             * Net ISO settlement amount.
             */
            obj["netISOAmount"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.netISOAmount>([\s\S]*?)<\/cim:MarketStatementLineItem.netISOAmount>/g, sub, context, true));
            /**
             * Previous ISO settlement quantity.
             */
            obj["previousISOQuantity"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.previousISOQuantity>([\s\S]*?)<\/cim:MarketStatementLineItem.previousISOQuantity>/g, sub, context, true));
            /**
             * Current ISO settlement quantity.
             */
            obj["currentISOQuantity"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.currentISOQuantity>([\s\S]*?)<\/cim:MarketStatementLineItem.currentISOQuantity>/g, sub, context, true));
            /**
             * Net ISO settlement quantity.
             */
            obj["netISOQuantity"] = base.to_float (base.parse_element (/<cim:MarketStatementLineItem.netISOQuantity>([\s\S]*?)<\/cim:MarketStatementLineItem.netISOQuantity>/g, sub, context, true));
            /**
             * 
             */
            obj["MarketStatement"] = base.parse_attribute (/<cim:MarketStatementLineItem.MarketStatement\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["ContainerMarketStatementLineItem"] = base.parse_attribute (/<cim:MarketStatementLineItem.ContainerMarketStatementLineItem\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["PassThroughBill"] = base.parse_attribute (/<cim:MarketStatementLineItem.PassThroughBill\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.MarketStatementLineItem;
            if (null == bucket)
                context.parsed.MarketStatementLineItem = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of market power mitigation through reference or mitigated bids.
         * Interval based.
         */
        function parse_MitigatedBidClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "MitigatedBidClearing";
            bucket = context.parsed.MitigatedBidClearing;
            if (null == bucket)
                context.parsed.MitigatedBidClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Model of various charges associated with an energy profile to support billing and settlement
         */
        function parse_ChargeProfileData (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ChargeProfileData";
            /**
             * The sequence number of the profile.
             */
            obj["sequence"] = base.parse_element (/<cim:ChargeProfileData.sequence>([\s\S]*?)<\/cim:ChargeProfileData.sequence>/g, sub, context, true);
            /**
             * The date and time of an interval.
             */
            obj["timeStamp"] = base.to_datetime (base.parse_element (/<cim:ChargeProfileData.timeStamp>([\s\S]*?)<\/cim:ChargeProfileData.timeStamp>/g, sub, context, true));
            /**
             * The value of an interval given a profile type (amount, price, or quantity), subject to the UOM.
             */
            obj["value"] = base.to_float (base.parse_element (/<cim:ChargeProfileData.value>([\s\S]*?)<\/cim:ChargeProfileData.value>/g, sub, context, true));
            /**
             * 
             */
            obj["BillDeterminant"] = base.parse_attribute (/<cim:ChargeProfileData.BillDeterminant\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * 
             */
            obj["ChargeProfile"] = base.parse_attribute (/<cim:ChargeProfileData.ChargeProfile\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ChargeProfileData;
            if (null == bucket)
                context.parsed.ChargeProfileData = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Models results of market clearing which call for commitment of units.
         */
        function parse_CommitmentClearing (context, sub)
        {
            var obj;
            var bucket;

            obj = MarketPlan.parse_MarketFactors (context, sub);
            obj.cls = "CommitmentClearing";
            bucket = context.parsed.CommitmentClearing;
            if (null == bucket)
                context.parsed.CommitmentClearing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_Commitments: parse_Commitments,
                parse_ExPostResourceResults: parse_ExPostResourceResults,
                parse_ResourceAwardInstruction: parse_ResourceAwardInstruction,
                parse_ResourceAwardClearing: parse_ResourceAwardClearing,
                parse_MPMResourceStatus: parse_MPMResourceStatus,
                parse_MitigatedBid: parse_MitigatedBid,
                parse_Settlement: parse_Settlement,
                parse_PnodeResults: parse_PnodeResults,
                parse_ResourceLoadFollowingInst: parse_ResourceLoadFollowingInst,
                parse_MarketStatement: parse_MarketStatement,
                parse_ConstraintResults: parse_ConstraintResults,
                parse_ChargeProfileData: parse_ChargeProfileData,
                parse_ExPostMarketRegion: parse_ExPostMarketRegion,
                parse_ExPostLoss: parse_ExPostLoss,
                parse_InstructionClearing: parse_InstructionClearing,
                parse_InstructionClearingDOT: parse_InstructionClearingDOT,
                parse_DotInstruction: parse_DotInstruction,
                parse_DopInstruction: parse_DopInstruction,
                parse_MPMTestResults: parse_MPMTestResults,
                parse_TransactionBidResults: parse_TransactionBidResults,
                parse_ConstraintClearing: parse_ConstraintClearing,
                parse_MarketResults: parse_MarketResults,
                parse_ExPostPricing: parse_ExPostPricing,
                parse_BillDeterminant: parse_BillDeterminant,
                parse_MPMClearing: parse_MPMClearing,
                parse_MitigatedBidClearing: parse_MitigatedBidClearing,
                parse_MitigatedBidSegment: parse_MitigatedBidSegment,
                parse_MarketRegionResults: parse_MarketRegionResults,
                parse_MarketStatementLineItem: parse_MarketStatementLineItem,
                parse_ExPostLossResults: parse_ExPostLossResults,
                parse_Instructions: parse_Instructions,
                parse_ResourceDispatchResults: parse_ResourceDispatchResults,
                parse_GeneralClearingResults: parse_GeneralClearingResults,
                parse_RUCAwardInstruction: parse_RUCAwardInstruction,
                parse_PassThroughBill: parse_PassThroughBill,
                parse_InstructionClearingDOP: parse_InstructionClearingDOP,
                parse_ExPostPricingResults: parse_ExPostPricingResults,
                parse_RMRDetermination: parse_RMRDetermination,
                parse_ExPostResource: parse_ExPostResource,
                parse_ChargeProfile: parse_ChargeProfile,
                parse_ResourceClearing: parse_ResourceClearing,
                parse_AncillaryServiceClearing: parse_AncillaryServiceClearing,
                parse_TransactionBidClearing: parse_TransactionBidClearing,
                parse_RMROperatorInput: parse_RMROperatorInput,
                parse_ExPostMarketRegionResults: parse_ExPostMarketRegionResults,
                parse_CommitmentClearing: parse_CommitmentClearing,
                parse_LossClearingResults: parse_LossClearingResults,
                parse_GeneralClearing: parse_GeneralClearing,
                parse_LoadFollowingOperatorInput: parse_LoadFollowingOperatorInput,
                parse_LossClearing: parse_LossClearing,
                parse_SelfScheduleBreakdown: parse_SelfScheduleBreakdown,
                parse_PnodeClearing: parse_PnodeClearing
            }
        );
    }
);