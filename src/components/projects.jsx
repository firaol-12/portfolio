import React, { useState } from "react";
import Website from "./webComponent";
import WebAR from "./WebAR";
import Automation from "./Automation";

export default function Project() {
  const [activeTab, setActiveTab] = useState("Website");

  const tabs = ["Website", "WebAR"];

  const renderComponent = () => {
    if (activeTab === "Website") return <Website />;
    if (activeTab === "WebAR") return <WebAR />;
    // if (activeTab === "Automation") return <Automation />;
  };

  return (
    <div className="flex w-full justify-center items-center flex-col p-10 md:p-5 md:mb-8">
      <div className="md:h-15 flex justify-center items-center flex-col pb-5 md:pb-10 gap-5">
        <h1 className="text-amber-300 text-3xl text-center pb-5 md:pb-0">My Projects</h1>
        <p className="text-center w-full md:w-140">
          Projects that showcase my ability to build responsive websites and 
          interactive WebAR experiences for real-world use.
        </p>
      </div>

      {/* Tab buttons */}
      <div className="w-50 md:w-80 h-10 mb-8 md:m-10 bg-gray-200 rounded-4xl flex justify-around items-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-4xl py-2 md:py-0 md:pt-2 md:pb-2 md:pl-8 md:pr-8 w-26 md:w-40 transition-colors
              ${activeTab === tab
                ? "bg-amber-300 text-white"
                : "bg-transparent text-black"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Active component */}
      {renderComponent()}
    </div>
  );
}