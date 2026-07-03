import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
// import img1 from "../assets/code.png"
// import img2 from "../assets/ar.png"
// import img3 from "../assets/icons/automation (1).png"


export default function About(){
    const container = useRef(null);
    const left = useRef(null);
    const line = useRef(null);
    const leftContainer = useRef(null);
    const rightContainer = useRef(null);
    const right = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: {
        trigger: container.current, // watch this element
        start: 'top 80%',           // when top of container hits 80% down the viewport
        // markers: true,           // 👈 uncomment while testing, shows debug lines
      },
    });

      tl.from(left.current, {
          opacity: 0,
          x: -50,
          scale: 0.8,
          duration: 0.8,
        })
       .from(right.current, {
          opacity: 0,
          x: 50,
          scale: 0.8,
          duration: 0.8,
        }, '<')
        .from(line.current, {
          opacity: 0,
          y: 40,
          duration: 0.6,
        }, '-=0.4') // starts 0.4s before the previous one ends
        .from(leftContainer.current, {
          opacity: 0,
          scale: 0.5,
          duration: 0.8,
        }, '-=0.4')
        .from(rightContainer.current, {
          opacity: 0,
          scale: 0.5,
          duration: 0.8,
        }, '-=0.4')
    }, { scope: container });

    return(
        <div ref={container} className=" w-full md:h-150 gap-10 bg-[rgb(21,21,21)] flex flex-col justify-center items-center p-10 md:pl-35 md:pr-35">
            <div ref={line} className="w-full md:h-30 flex flex-col md:flex-row justify-center md:justify-between items-center border-b-4 border-b-amber-50">
                <div ref={left} className="w-80 md:w-100 md:h-full text-amber-50 flex justify-center md:justify-start items-center pb-2">
                    <h2 className="text-3xl text-amber-50">My Survices</h2>
                </div>

                <div ref={right} className="w-80  text-center md:text-start md:w-140 h-full text-white flex justify-center md:justify-start items-center pb-2 pl-2">
                    <p>
                        Helping businesses stand out with fast, beautiful websites and 
                        interactive WebAR expriences that captivate audiences
                    </p>
                </div>
            </div>

            <div className="w-full md:h-70 flex flex-col gap-5 md:gap-0 md:flex-row justify-center md:justify-between items-center">
                <div ref={leftContainer} className="w-80 md:w-140 h-80 md:h-70 p-5 bg-amber-300 rounded-3xl flex flex-col justify-around items-center">
                    <div className="w-20 h-20">
                        <img className="w-full h-full object-cover" src="https://res.cloudinary.com/djw0srhou/image/upload/v1782811840/code_w8wjk7.png" alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl text-center ">Website Development</h3>
                    </div>
                    <div>
                        <p className="text-center ">
                            Turning your vision into a professional online presence with responsive, high performance websites tailored to your goals.
                        </p>
                    </div>
                </div>

                <div ref={rightContainer} className="w-80 md:w-140 h-80 md:h-70 p-5 bg-amber-300 rounded-3xl flex flex-col justify-around items-center">
                    <div className="w-20 h-20">
                        <img className="w-full h-full object-cover" src="https://res.cloudinary.com/djw0srhou/image/upload/v1782811845/ar_zikurm.png" alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl text-center">Web Based Augmented Reality</h3>
                    </div>
                    <div>
                        <p className="text-center ">
                            Creating memorable customer experiences with browser 
                            based augmented reality, allowing users to view, 
                            explore, and interact with digital content in the real world 
                        </p>
                    </div>     
                </div>
{/* 
                <div className="w-80 md:w-100 h-80 md:h-70 p-5 bg-amber-300 rounded-3xl flex flex-col justify-around items-center">
                    <div className="w-20 h-20">
                        <img className="w-full h-full object-cover" src="https://res.cloudinary.com/djw0srhou/image/upload/v1782811928/automation_1_sfeizt.png" alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl text-center ">AI Automation</h3>
                    </div>
                    <div>
                        <p className="text-center ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Animi similique, aspernatur provident voluptates odio ex, 
                            quidem
                        </p>
                    </div>     
                </div> */}

            </div>
        </div>
    )
}
       