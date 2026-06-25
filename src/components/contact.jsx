import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Contact(){
    return(
        <div className="flex flex-col justify-center items-center w-full gap-5 md:gap-10 mt-5 mb-5 pt-10">
            <div>                
                <h1 className="text-3xl text-center m-3" >Contact Me</h1>
                <p className="text-center w-80 md:w-140">first
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quia dicta cum tenetur illo expedita commodi atque iusto 
                    eius cupiditate
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center w-4/5">
                <div className="md:w-100 w-80" >
                    <DotLottieReact
                    src="https://lottie.host/68ef7e1c-9742-4f9b-a354-d5f7786caab3/kLyRrTTRwZ.lottie"
                    loop
                    autoplay
                    className="md:w-100 md:h-100 w-80"
                    />
                </div>
                <div className="md:border-l-8 w-80 md:w-1/2 md:h-90 p-5">
                    <form className="flex flex-col justify-center items-center gap-5" action="">
                        <input className="border-gray-400 border rounded-2xl w-80 md:w-120 p-3" name="Name" placeholder="Name"></input>
                        <input className="border-gray-400 border rounded-2xl w-80 md:w-120 p-3" name="Email" placeholder="Email"></input>
                        <textarea className="border-gray-400 border rounded-2xl w-80 md:w-120 p-3 h-55" name="Message" placeholder="Message"></textarea>
                    </form>
                </div>
            </div>
        </div>
    )
}

