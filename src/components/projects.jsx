import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Website from "./webComponent";
import WebAR from "./WebAR";
import Automation from "./Automation";

gsap.registerPlugin(ScrollTrigger);


export default function Project() {
  const [activeTab, setActiveTab] = useState("Website");
const container = useRef(null);
    const topText = useRef(null);
    const bottomText = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: {
        trigger: container.current, // watch this element
        start: 'top 80%',           // when top of container hits 80% down the viewport
        // markers: true,           // 👈 uncomment while testing, shows debug lines
      },
    });

      tl.from(topText.current, {
          opacity: 0,
          x: -50,
          scale: 0.8,
          duration: 1.0,
        })
       .from(bottomText.current, {
          opacity: 0,
          x: 50,
          scale: 0.8,
          duration: 1.0,
        }, '<')
    }, { scope: container });

  const tabs = ["Website", "WebAR"];

  const renderComponent = () => {
    if (activeTab === "Website") return <Website />;
    if (activeTab === "WebAR") return <WebAR />;
    // if (activeTab === "Automation") return <Automation />;
  };

  return (
    <div ref={container} className="flex w-full justify-center items-center flex-col p-10 md:p-5 md:mb-8">
      <div className="md:h-15 flex justify-center items-center flex-col pb-5 md:pb-10 gap-5 md:mt-20">
        <h1 ref={topText} className="text-amber-300 text-3xl text-center pb-5 md:pb-0">My Projects</h1>
        <p ref={bottomText} className="text-center w-full md:w-140">
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
            className={`cursor-pointer rounded-4xl py-2 md:py-0 md:pt-2 md:pb-2 md:pl-8 md:pr-8 w-26 md:w-40 transition-colors
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