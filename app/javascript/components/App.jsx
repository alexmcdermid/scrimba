import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from "./ThemeProvider";
import Nav from "./Nav.jsx"
import Home from "./Home";
import Modules from "./Modules";
import DisplayPhotos from "./Module1/DisplayPhotos";
import ModuleHome from "./ModuleHome";
import PassengerCounter from "./Module3/PassengerCounter";
import Challenges from "./Challenges/Challenges";
import VideoGameButton from "./Challenges/VideoGameButton";
import FlashCards from "./Challenges/FlashCards";
import RailsTestingBlog from "./Blog/RailsTestingBlog";
import AhoyOptimizationBlog from "./Blog/AhoyOptimizationBlog"
import Blog from "./Blog/Blog";

const App = () => (
  <Router>
    <ThemeProvider>
      <Nav />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="challenges/video-game-button" element={<VideoGameButton />} />
          <Route path="challenges/flash-cards" element={<FlashCards />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/module/:id" element={<ModuleHome />} />
          <Route path="/module/:id/display-photos" element={<DisplayPhotos />} />
          <Route path="/module/:id/passenger-counter" element={<PassengerCounter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/rails-testing" element={<RailsTestingBlog />} />
          <Route path="/blog/ahoy-optimization" element={<AhoyOptimizationBlog />} />
        </Routes>
    </ThemeProvider>
  </Router>
);

export default App