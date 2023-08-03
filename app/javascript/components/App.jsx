import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Modules from "../components/Modules";
import ModuleOne from "../components/ModuleOne";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modules" element={<Modules />} />
      <Route path="/module/1" element={<ModuleOne />} />
    </Routes>
  </Router>
);

export default App