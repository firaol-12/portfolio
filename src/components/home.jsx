import React from "react";
import profile from "../assets/profile2 (1).png"
import star from "../assets/—Pngtree—5 star rating game_21024554.png"

export default function Home() {
    return(
        <div>
            <div className="flex justify-center items-center w-full h-screen bg-white pl-20 pr-20">
                <div className="w-1/4 h-60  relative top-25 ml-15 mt-10">
                    <h1 className="text-9xl">"</h1>
                    <h3 className="text-left">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Ipsum doloribus reiciendis, necessitatibus aut architecto 
                        accusamus quas
                    </h3>
                </div>
                <div className="relative w-200 h-full  flex flex-col justify-end items-center">
                    <div className="absolute text-center top-35  w-full  ">
                        <h1 className="text-7xl font-bold text-black z-10">
                            I'm <span className="text-amber-400">Firaol,</span>
                        </h1>
                        <h1 className="text-7xl font-bold text-black z-10">
                            Software Developer
                        </h1>
                    </div>

                    <div className=" w-140 absolute bottom-0  h-105  flex justify-center items-center">
                        <img className="w-full h-full object-cover" src={profile} alt="" />
                    </div>

                    <div className="absolute w-90 h-17 gap-5 flex justify-center items-center bottom-4 bg-amber-50 rounded-full">
                        <button className="rounded-full text-amber-50 w-40 h-13 bg-amber-300 border">Contact me</button>
                        <button className="rounded-full w-40 h-13 text-black border-2">Hire me</button>
                    </div>
                </div>
                <div className="relative top-25 w-60 h-40 pl-10  mr-15  flex flex-col justify-center items-end border-b-8">
                    <img className="h-10 w-30 object-cover" src={star} alt="" />
                    <h1 className="text-4xl">4 Years</h1>
                    <h1 className="text-2xl">exprience</h1>

                </div>
            </div>
        </div>
    )
}