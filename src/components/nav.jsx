import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Tools", href: "#tools" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="w-full fixed top-5 z-50 flex justify-center px-4">
      <div className="w-full max-w-6xl bg-black rounded-full flex justify-around items-center px-6 h-14">

        {/* LEFT LINKS */}
        <div className="hidden md:flex items-center gap-15">
          <a href="#home" className="text-amber-50 hover:text-amber-300 transition-colors">Home</a>
          <a href="#about" className="text-amber-50 hover:text-amber-300 transition-colors">Service</a>
        </div>

        {/* LOGO */}
        <a href="#home" className="text-amber-50 font-bold text-xl tracking-wide mx-auto md:mx-0">
          Firaol
        </a>

        {/* RIGHT LINKS */}
        <div className="hidden md:flex items-center gap-15">
          <a href="#projects" className="text-amber-50 hover:text-amber-300 transition-colors">Projects</a>
          <a href="#tools" className="text-amber-50 hover:text-amber-300 transition-colors">Tools</a>
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-amber-50 text-xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-16 w-[calc(100%-2rem)] max-w-5xl bg-black rounded-2xl flex flex-col items-center gap-5 py-6 md:hidden shadow-lg">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-amber-50 hover:text-amber-400 transition-colors text-lg"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}