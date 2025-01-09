// import { NodeResizer } from "@reactflow/node-resizer";
import { Handle, NodeResizer, Position, type NodeProps } from "@xyflow/react";
import React from "react";

export function Square({ selected }: NodeProps) {
  return (
    <div className="bg-violet-500 rounded w-full h-full min-w-[200px] min-h-[200px]">
      {/* SOUCE - A CONEXAO SAI DO ELEMENTO E SÓ PODE SER CONECTADO A UM ELEMENTO TARGET */}
      {/* TARGET - A CONEXÃO NÃO SAI DO ELEMENTO, SÓ PODE RECEBER A CONECÇÃO DE UM ELEMENTO SOURCE  */}

      <NodeResizer
        minHeight={200}
        minWidth={200}
        isVisible={selected}
        lineClassName="border-violet-400"
        handleClassName="h-3 w-3 bg-white border-2 border-violet-400"
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        // className="-right-5 w-3 h-3 bg-violet-500/60"
        style={{ right: "-10px", width: "16px", height: "16px", backgroundColor: "violet" }}
      />
      <Handle
        id="left"
        type="source"
        position={Position.Left}
        style={{ left: "-10px", width: "16px", height: "16px", backgroundColor: "violet" }}
      // className="-left-5 w-3 h-3 bg-violet-500/60"
      />

      <Handle
        id="top"
        type="source"
        position={Position.Top}
        // className="-top-5 w-3 h-3 bg-violet-500/60"
        style={{ top: "-10px", width: "16px", height: "16px", backgroundColor: "violet" }}
      />
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        // className="-bottom-5 w-3 h-3 bg-violet-500/60"
        style={{ bottom: "-10px", width: "16px", height: "16px", backgroundColor: "violet" }}
      />
    </div>
  )
}