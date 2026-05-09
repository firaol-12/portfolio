import React from "react";
// import HeroSection from "./components/home.jsx";
import Navbar from "./components/nav.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}