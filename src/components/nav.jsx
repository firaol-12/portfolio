import React from "react";

export default function Navbar(){
    return(
        <div className="w-full h-15 flex justify-center fixed top-5 z-50">
            <div className="w-4/5 h-full bg-black rounded-full flex justify-center items-center ">
                <div className="flex justify-center items-center text-amber-50 w-150 gap-15 h-full border-amber-50 ">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Survice</a>
                </div>
                <div>
                    <h2 className="text-amber-50">Firaol</h2>
                </div>
                <div className="flex justify-center items-center text-amber-50 w-150 gap-15 h-full border-amber-50 ">
                    <a href="">projects</a>
                    <a href="">Tools</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </div>
    )
}