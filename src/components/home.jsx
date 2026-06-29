import React, { useState } from "react";
import bg from "../assets/aw.avif"
import profile from "../assets/profile2 (1).png"
import star from "../assets/—Pngtree—5 star rating game_21024554.png"

export default function Home() {
  const [activeBtn, setActiveBtn] = useState("contact");

  return (
    <div className="m-0 p-0">
      <div
        className="flex flex-col md:flex-row justify-center items-center w-full h-screen m-0 p-0 md:pl-20 md:pr-20 md:px-20"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Left quote section */}
        <div className="hidden md:flex justify-center flex-col gap-5  md:w-1/4 md:h-60 relative top-15 ml-15 mt-10">
          <h1 className="text-9xl">,,</h1>
          <h3 className="text-left">
            I specialize in Web Development and WebAR, creating responsive 
            websites and browser-based augmented reality experiences that 
            are fast, engaging, and accessible across devices.
          </h3>
        </div>

        {/* Center profile section */}
        <div className="w-full h-screen relative md:w-200 md:h-full flex flex-col justify-end items-center">

          {/* Name and title */}
          <div className="absolute text-center top-20 md:top-35 w-full px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-black z-10">
              I'm <span className="text-amber-400">Firaol,</span>
            </h1>
            <h1 className="text-6xl md:text-6xl font-bold text-black z-10">
              Software Developer
            </h1>
          </div>

          {/* Profile image */}
          <div className="w-full md:max-w-none md:w-150 absolute bottom-0 h-130 md:h-115 flex justify-center items-center">
            <img className="w-full h-full object-cover" src={profile} alt="" />
          </div>

          {/* Buttons */}
          <div className="absolute w-80 md:w-80 h-14 md:h-13 flex justify-center items-center bottom-4 bg-gray-200 rounded-full">
            <a
              href="#contact"
              onClick={() => setActiveBtn("contact")}
              className={`rounded-full text-amber-50 w-40 h-13 text-sm md:text-center flex justify-center items-center transition-colors
                ${activeBtn === "contact" ? "bg-amber-300" : "bg-transparent text-black"}`}
            >
              Contact me
            </a>
            <a
              href="#projects"
              onClick={() => setActiveBtn("projects")}
              className={`rounded-full w-40 h-13 text-sm md:text-center flex justify-center items-center transition-colors
                ${activeBtn === "projects" ? "bg-amber-300 text-amber-50" : "bg-transparent text-black"}`}
            >
              View Project
            </a>
          </div>
        </div>

        {/* Right experience section */}
        <div className="hidden md:flex md:w-60 md:h-40 relative top-25 pl-10 mr-15 flex-col justify-center items-end border-b-8">
          <img className="h-12 w-30 object-cover" src={star} alt="" />
          <h1 className="text-4xl">3 Years</h1>
          <h1 className="text-2xl"> of exprience</h1>
        </div>
      </div>
    </div>
  );
}