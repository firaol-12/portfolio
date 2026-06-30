import React from "react";
// import img1 from "../assets/project/Augmented Reality Business Card Poster.png"
// import img2 from "../assets/project/Minimal AR Food Circle Poster (2).png"
// import img3 from "../assets/project/Dark Blue and White Futuristic Geometric Modern Technology Flyer.png"

export default function WebAR (){
    return(
        <div className="md:w-5/6 flex flex-col md:flex-row justify-center gap-12 md:gap-0 md:justify-around items-center ">
            <div className="ww-70 h-95 flex justify-between items-center flex-col rounded-2xl  shadow-2xl shadow-black/40 ">
                <img src="https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_400,dpr_auto/v1782810991/Augmented_Reality_Business_Card_Poster_g3qsfg.png" alt="Project 2" className="bject-cover w-70 h-75  rounded-t-2xl rounded-b-3xl" />
                    <div className="flex h-20 w-full justify-center items-center">
                    <button className="rounded-4xl text-white bg-amber-300 pt-2 pb-2 pl-8 pr-8 w-40 "><a href="https://youtu.be/luoY-jTQ7vk">View more</a></button>
                </div>
            </div>

            <div className="w-70 h-95 flex justify-between items-center flex-col rounded-2xl  shadow-2xl shadow-black/40 ">
                <img src="https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_400,dpr_auto/v1782810999/Minimal_AR_Food_Circle_Poster_2_lqd3by.png" alt="Project 1" className="object-cover w-70 h-75 rounded-t-2xl rounded-b-3xl" />
                <div className="flex h-20 w-full justify-center items-center">
                    <button className="rounded-4xl text-white bg-amber-300 pt-2 pb-2 pl-8 pr-8 w-40 "><a href="https://youtube.com/shorts/EB319IGgqi4?feature=share">View more</a></button>
                </div>
            </div>

            <div className="w-70 h-95 flex justify-between items-center flex-col rounded-2xl  shadow-2xl shadow-black/40 ">
                <img src="https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_400,dpr_auto/v1782810988/Dark_Blue_and_White_Futuristic_Geometric_Modern_Technology_Flyer_p8p8ci.png" alt="Project 3" className="bject-cover w-70 h-75  rounded-t-2xl rounded-b-3xl" />
                    <div className="flex h-20 w-full justify-center items-center">
                    <button className="rounded-4xl text-white bg-amber-300 pt-2 pb-2 pl-8 pr-8 w-40 "><a href="https://youtu.be/hF3fS9LHzeY">View more</a></button>
                </div>
            </div>
        </div>
    )
}