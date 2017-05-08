define
(
    ["model/base", "model/Core"],
    /**
     * An extension to the Core Package that in association with the Terminal class models Connectivity, that is the physical definition of how equipment is connected together.
     * In addition it models Topology, that is the logical definition of how equipment is connected via closed switches. The Topology definition is independent of the other electrical characteristics.
     */
    function (base, Core)
    {

        /**
         * Used to apply user standard names to topology buses.
         * Typically used for "bus/branch" case generation. Associated with one or more terminals that are normally connected with the bus name.    The associated terminals are normally connected by non-retained switches. For a ring bus station configuration, all busbar terminals in the ring are typically associated.   For a breaker and a half scheme, both busbars would normally be associated.  For a ring bus, all busbars would normally be associated.  For a "straight" busbar configuration, normally only the main terminal at the busbar would be associated.
         */
        function parse_BusNameMarker (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "BusNameMarker";
            /**
             * Priority of bus name marker for use as topology bus name.
             * Use 0 for don t care.  Use 1 for highest priority.  Use 2 as priority is less than 1 and so on.
             */
            obj["priority"] = base.parse_element (/<cim:BusNameMarker.priority>([\s\S]*?)<\/cim:BusNameMarker.priority>/g, sub, context, true);
            /**
             * The reporting group to which this bus name marker belongs.
             */
            obj["ReportingGroup"] = base.parse_attribute (/<cim:BusNameMarker.ReportingGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.BusNameMarker;
            if (null == bucket)
                context.parsed.BusNameMarker = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * DC bus.
         */
        function parse_DCTopologicalNode (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "DCTopologicalNode";
            /**
             * 
             */
            obj["DCEquipmentContainer"] = base.parse_attribute (/<cim:DCTopologicalNode.DCEquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.DCTopologicalNode;
            if (null == bucket)
                context.parsed.DCTopologicalNode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * For a detailed substation model a topological node is a set of connectivity nodes that, in the current network state, are connected together through any type of closed switches, including  jumpers.
         * Topological nodes change as the current network state changes (i.e., switches, breakers, etc. change state).
         */
        function parse_TopologicalNode (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TopologicalNode";
            /**
             * The active power injected into the bus at this location in addition to injections from equipment.
             * Positive sign means injection into the TopologicalNode (bus).
             */
            obj["pInjection"] = base.parse_element (/<cim:TopologicalNode.pInjection>([\s\S]*?)<\/cim:TopologicalNode.pInjection>/g, sub, context, true);
            /**
             * The reactive power injected into the bus at this location in addition to injections from equipment.
             * Positive sign means injection into the TopologicalNode (bus).
             */
            obj["qInjection"] = base.parse_element (/<cim:TopologicalNode.qInjection>([\s\S]*?)<\/cim:TopologicalNode.qInjection>/g, sub, context, true);
            /**
             * The island for which the node is an angle reference.
             * Normally there is one angle reference node for each island.
             */
            obj["AngleRefTopologicalIsland"] = base.parse_attribute (/<cim:TopologicalNode.AngleRefTopologicalIsland\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The state voltage associated with the topological node.
             */
            obj["SvVoltage"] = base.parse_attribute (/<cim:TopologicalNode.SvVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The reporting group to which the topological node belongs.
             */
            obj["ReportingGroup"] = base.parse_attribute (/<cim:TopologicalNode.ReportingGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The injection flows state variables associated with the topological node.
             */
            obj["SvInjection"] = base.parse_attribute (/<cim:TopologicalNode.SvInjection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The base voltage of the topologocial node.
             */
            obj["BaseVoltage"] = base.parse_attribute (/<cim:TopologicalNode.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * A topological node belongs to a topological island.
             */
            obj["TopologicalIsland"] = base.parse_attribute (/<cim:TopologicalNode.TopologicalIsland\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The connectivity node container to which the toplogical node belongs.
             */
            obj["ConnectivityNodeContainer"] = base.parse_attribute (/<cim:TopologicalNode.ConnectivityNodeContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TopologicalNode;
            if (null == bucket)
                context.parsed.TopologicalNode = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An electrically connected subset of the network.
         * Topological islands can change as the current network state changes: e.g. due to
         */
        function parse_TopologicalIsland (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TopologicalIsland";
            /**
             * The angle reference for the island.
             * Normally there is one TopologicalNode that is selected as the angle reference for each island.   Other reference schemes exist, so the association is typically optional.
             */
            obj["AngleRefTopologicalNode"] = base.parse_attribute (/<cim:TopologicalIsland.AngleRefTopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.TopologicalIsland;
            if (null == bucket)
                context.parsed.TopologicalIsland = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_TopologicalIsland: parse_TopologicalIsland,
                parse_BusNameMarker: parse_BusNameMarker,
                parse_TopologicalNode: parse_TopologicalNode,
                parse_DCTopologicalNode: parse_DCTopologicalNode
            }
        );
    }
);