import React from "react";
import Navbar from "./components/nav.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import ProfileSkills from "./components/tool.jsx";
import Project from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
      useEffect(() => {
        AOS.init({
            duration: 800,      // animation duration in ms
            once: true,         // whether animation should happen only once
            easing: 'ease-in-out',
            offset: 100,        // offset (px) from trigger point
        });
    }, []);
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