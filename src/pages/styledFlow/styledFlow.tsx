import * as React from "react";
import * as Toolbar from '@radix-ui/react-toolbar'
import {
  Background,
  type Node,
  Controls,
  ReactFlow,
  ConnectionMode,
  useEdgesState,
  type Connection,
  addEdge,
  useNodesState,
} from "@xyflow/react";
import { Square } from "./components/nodes/square";
import { DefaultEdge } from "./components/edges/defaultEdge";

const NODE_TYPES = {
  square: Square,
};

const EDGE_TYPES = {
  default: DefaultEdge,
}

const INITIAL_NODES = [
  {
    id: "1",
    type: "square",
    position: { x: 200, y: 400 },
    data: {},
  },
  {
    id: "2",
    type: "square",
    position: { x: 1000, y: 400 },
    data: {},
  },
] satisfies Node[];

function StyledFlow() {
  // useEdgesState - É UM USE STATE PARA ARMAZENAR OS EDGES - OU SEJA AS CONECÇÕES
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  // nodes - os elementos arrastaveis 
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

  const onConnect = React.useCallback((conection: Connection) => {
    return setEdges(edges => addEdge(conection, edges));
  }, []);

  function addSquareNode() {
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: "square",
        position: { x: 750, y: 350 },
        data: {},
      }
    ])
  }

  return (
    <div className="w-screen h-screen bg-slate-300">
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{ type: "default" }}
      >
        {/* Background personalizado */}
        <Background gap={12} size={2} color="#E6E6E1" />

        {/* Controles personalizados */}
        <Controls
          className="rounded-md p-2 bg-white text-gray-600"
        // position="bottom-center"
        // orientation="horizontal"
        />
      </ReactFlow>

      <Toolbar.Root className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden">
        <Toolbar.Button
          onClick={addSquareNode}
          className="w-32 h-32 bg-violet-500 mt-6 rounded transition-transform hover:-translate-y-2"
        />
      </Toolbar.Root>
    </div>
  );
}

export default StyledFlow;
