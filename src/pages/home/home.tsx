import * as React from "react";

function Home(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center p-5">
      <img src="/workflow-01.webp" alt="Workflow" className="max-w-md mb-5" />
      <h1 className="text-4xl mb-2 text-gray-100">Estudo sobre o React Flow</h1>
      <p className="text-base text-gray-600">by EderJrDev - Frontend Developer at @smartnx</p>
    </div>
  );
}

export default Home;