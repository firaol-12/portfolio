import React from "react";
import Navbar from "./components/nav.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import ProfileSkills from "./components/tool.jsx";
import Project from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="tools"><ProfileSkills /></section>
      <section id="projects"><Project /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}