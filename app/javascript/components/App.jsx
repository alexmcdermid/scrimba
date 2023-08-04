import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Modules from "../components/Modules";
import DisplayPhotos from "./Module1/DisplayPhotos";
import ModuleHome from "./ModuleHome";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modules" element={<Modules />} />
      <Route path="/module/:id" element={<ModuleHome />} />
      <Route path="/module/:id/display-photos" element={<DisplayPhotos />} />
    </Routes>
  </Router>
);

export default App