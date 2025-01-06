import React from 'react';
import { useStoreApi, useReactFlow, Panel } from '@xyflow/react';

export default function Buttons() {
  const store = useStoreApi();
  const { zoomIn, zoomOut, setCenter } = useReactFlow();

  const focusNode = () => {
    const { nodeLookup } = store.getState();
    const nodes = Array.from(nodeLookup).map(([, node]) => node);

    if (nodes.length > 0) {
      const node = nodes[0];

      const x = node.position.x + (node.measured.width ?? 0) / 2;
      const y = node.position.y + (node.measured.height ?? 0) / 2;
      const zoom = 1.85;
      setCenter(x, y, { zoom, duration: 1000 });
    }
  };

  return (
    <Panel position="top-left" className='p-2 mr-3 mt-4 bg-gray-600 text-gray-100 rounded-md'>
      <div className="description">
        This is an example of how you can use the zoom pan helper hook
      </div>
      <div>
        <button onClick={focusNode} className='fw-bold p-2 mr-3 mt-4 border-2 border-gray-400 rounded-md'>
          focus node
        </button>
        <button onClick={zoomIn} className='fw-bold p-2 mr-3 mt-4 border-2 border-gray-400 rounded-md'>
          zoom in
        </button>
        <button onClick={zoomOut} className='fw-bold p-2 mr-3 mt-4 border-2 border-gray-400 rounded-md'>
          zoom out
        </button>
      </div>
    </Panel>
  );
};