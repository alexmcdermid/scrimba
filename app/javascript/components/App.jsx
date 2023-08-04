import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from "./ThemeProvider";
import Nav from "./Nav.jsx"
import Home from "./Home";
import Modules from "./Modules";
import DisplayPhotos from "./Module1/DisplayPhotos";
import ModuleHome from "./ModuleHome";

const App = () => (
  <Router>
    <ThemeProvider>
      <Nav />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/module/:id" element={<ModuleHome />} />
          <Route path="/module/:id/display-photos" element={<DisplayPhotos />} />
        </Routes>
    </ThemeProvider>
  </Router>
);

export default App