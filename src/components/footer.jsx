import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import img1 from "../assets/icons/instagram (1).png"
import img2 from "../assets/icons/linkedin (1).png"
import img3 from "../assets/icons/telegram (1).png"
import img4 from "../assets/icons/whatsapp (1).png"

export default function Footer(){
    return(
        <div className="bg-black text-amber-50 flex gap-10 md:gap-12 flex-col p-10 md:flex-row justify-start md:justify-around md:pl-30 md:pr-30 md:pt-10 md:pb-10 items-around items-start w-full md:h-80">
            <div className="w-full flex flex-col">
                <div>
                    <h1 className="text-2xl mb-3 ">Address</h1>
                </div>
                <div className="flex flex-col pl-5">
                    <a className="flex items-center gap-3" href="tel:+1234567890"><FaPhone /> +251942090003</a>
                    <a className="flex items-center gap-3" href="mailto:feranegash604@gmail.com"><FaEnvelope /> feranegash604@gmail.com</a>
                    <div className="flex items-center gap-3"><FaMapMarkerAlt />Ethiopia, Jimma</div>
                </div>
            </div>

            <div className="w-full flex flex-col">
                <div>
                    <h1 className="text-2xl mb-3">Pages</h1>
                </div>
                <div className="flex flex-col pl-5">
                    <a href="#home" className="text-amber-50 hover:text-amber-300 transition-colors">Home</a>
                    <a href="#about" className="text-amber-50 hover:text-amber-300 transition-colors">About</a>
                    <a href="#projects" className="text-amber-50 hover:text-amber-300 transition-colors">Projects</a>
                    <a href="#tools" className="text-amber-50 hover:text-amber-300 transition-colors">Tools</a>
                </div>
            </div>
            
            <div className=" w-full flex flex-col  justify-center align-center">
                <div>
                    <h1 className="text-2xl mb-3">Pages</h1>
                </div>
                <div className="pl-5 mb-5">
                    <p className="text-amber-50">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Exercitationem modi ex aliquam minima dolore dolorum facilis 
                        nam odio laborum fuga, tempore eius natus recusandae odit
                    </p>
                </div>
                <div className="flex jestify-center items-center gap-4 pl-5">
                    <button className="flex justify-center items-center rounded-full  w-12 h-12 bg-amber-50">
                        <img className="w-10 h-10 " src={img1} alt="" />
                    </button>
                    <button className="flex justify-center items-center rounded-full  w-12 h-12 bg-amber-50">
                        <img className="w-10 h-10 " src={img2} alt="" />
                    </button>
                    <button className="flex justify-center items-center rounded-full  w-12 h-12 bg-amber-50">
                        <img className="w-10 h-10 " src={img3} alt="" />
                    </button>
                    <button className="flex justify-center items-center rounded-full  w-12 h-12 bg-amber-50">
                        <img className="w-10 h-10 " src={img4} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}