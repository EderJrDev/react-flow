import type * as React from "react";
import { Link } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex h-screen bg-gray-900">
      <nav className="w-52 bg-gray-800 flex flex-col p-3 box-border">
        <div className="flex items-center justify-center text-lg font-bold text-gray-100 mb-4">
          <Link to="/" className="my-2 no-underline">
            React Flow
          </Link>
        </div>
        <Link to="/basic-flow" className="my-2 no-underline">
          <button className="p-2 w-full bg-purple-600 text-white rounded hover:bg-purple-700">
            Basic Flow
          </button>
        </Link>
        <Link to="/sub-flow" className="my-2 no-underline">
          <button className="p-2 w-full bg-purple-600 text-white rounded hover:bg-purple-700">
            Sub Flow
          </button>
        </Link>
        <Link to="/hook-flow" className="my-2 no-underline">
          <button className="p-2 w-full bg-purple-600 text-white rounded hover:bg-purple-700">
            Hook Flow
          </button>
        </Link>
        <Link to="/tree-flow" className="my-2 no-underline">
          <button className="p-2 w-full bg-purple-600 text-white rounded hover:bg-purple-700">
            Tree Flow
          </button>
        </Link>
        <Link to="/validation-flow" className="my-2 no-underline">
          <button className="p-2 w-full bg-purple-600 text-white rounded hover:bg-purple-700">
            Validation Flow
          </button>
        </Link>
        <Link to="/styled-flow" className="my-2 no-underline">
          <button className="p-2 w-full bg-purple-600 text-white rounded hover:bg-purple-700">
            Styled Flow
          </button>
        </Link>
      </nav>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}

export default Layout;
