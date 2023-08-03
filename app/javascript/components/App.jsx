import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Modules from "../components/Modules";
import ModuleOne from "./ModuleOne/ModuleOne";
import DisplayPhotos from "./ModuleOne/DisplayPhotos";
import ModuleTwo from "./ModuleTwo/ModuleTwo";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modules" element={<Modules />} />
      <Route path="/module/1" element={<ModuleOne />} />
      <Route path="/module/1/display-photos" element={<DisplayPhotos />} />
      <Route path="/module/2" element={<ModuleTwo />} />
    </Routes>
  </Router>
);

export default App