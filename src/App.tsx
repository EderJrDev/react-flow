import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import BasicFlow from './pages/basic-flow/basicFlow';
import Layout from './pages/layout/layout';
import Home from './pages/home/home';
import SubFlow from './pages/sub-flow/subFlow';
import ProviderFlow from "./pages/hook-flow/hookFlow";
import TreeFlow from "./pages/tree-flow/treeFlow";
import ValidationFlow from "./pages/validation-flow/ValidationFlow";
import StyledFlow from "./pages/styledFlow/styledFlow";

export default function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/basic-flow" element={<BasicFlow />} />
          <Route path="/sub-flow" element={<SubFlow />} />
          <Route path="/hook-flow" element={<ProviderFlow />} />
          <Route path="/tree-flow" element={<TreeFlow />} />
          <Route path="/validation-flow" element={<ValidationFlow />} />
          <Route path="/styled-flow" element={<StyledFlow />} />
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}