import { getSmoothStepPath, type EdgeProps } from "@xyflow/react";

export function DefaultEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style = { stroke: "#666", strokeWidth: 2 },
  sourcePosition,
  targetPosition,
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
    </>
  )
}
