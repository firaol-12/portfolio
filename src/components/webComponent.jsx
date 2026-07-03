import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
// import img1 from "../assets/project/img2.png"
// import img2 from "../assets/project/Home (3).png"
// import img3 from "../assets/project/img1.png"

export default function Website (){
    const container = useRef(null);
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: {
        trigger: container.current, // watch this element
        start: 'top 80%',           // when top of container hits 80% down the viewport
        // markers: true,           // 👈 uncomment while testing, shows debug lines
      },
    });

      tl.from(box1.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
        })
       .from(box2.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
        }, '<')
        .from(box3.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
        }, '<') // starts 0.4s before the previous one ends
    }, { scope: container });
    return(
        <div ref={container} className="md:w-5/6 flex flex-col md:flex-row justify-center gap-12 md:gap-0 md:justify-around items-center ">
            <div ref={box1} className="w-70 h-95 flex justify-between items-center flex-col rounded-2xl  shadow-2xl shadow-black/40 ">
                <img src="https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_400,dpr_auto/v1782811006/img2_dhke9m.png" alt="Project 1" className="object-cover w-70 h-75 overflow-hidden rounded-t-2xl rounded-b-3xl" />
                <div className="flex h-20 w-full justify-center items-center">
                    <button className="rounded-4xl text-white bg-amber-300 pt-2 pb-2 pl-8 pr-8 w-40View more"><a href="https://effulgent-semolina-13e511.netlify.app/" target="_blank" rel="noopener noreferrer">View more</a></button>
                </div>
            </div>
            <div ref={box2} className="ww-70 h-95 flex justify-between items-center flex-col rounded-2xl  shadow-2xl shadow-black/40 ">
                <img src="https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_400,dpr_auto/v1782811001/img1_arjrz9.png" alt="Project 2" className="bject-cover w-70 h-75 overflow-hidden rounded-t-2xl rounded-b-3xl" />
                    <div className="flex h-20 w-full justify-center items-center">
                    <button className="rounded-4xl text-white bg-amber-300 pt-2 pb-2 pl-8 pr-8 w-40 "><a href="https://bashaashaastudio.netlify.app/" target="_blank" rel="noopener noreferrer">View more</a></button>
                </div>
            </div>
            <div ref={box3} className="w-70 h-95 flex justify-between items-center flex-col rounded-2xl  shadow-2xl shadow-black/40 ">
                <img src="https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_400,dpr_auto/v1782810990/Home_3_bvvfbr.png" alt="Project 3" className="bject-cover w-70 h-75 overflow-hidden rounded-t-2xl rounded-b-3xl" />
                    <div className="flex h-20 w-full justify-center items-center">
                    <button className="rounded-4xl text-white bg-amber-300 pt-2 pb-2 pl-8 pr-8 w-40 "><a href="https://youtu.be/I9LpE_u1l2Y">View more</a></button>
                </div>
            </div>
        </div>
    )
}