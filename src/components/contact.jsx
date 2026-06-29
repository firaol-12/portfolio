import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

    const form = useRef();
    const [status, setStatus] = useState("idle");
    const [toast, setToast] = useState(null); // { type: "success" | "error", message: string }

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");
        emailjs.sendForm("service_5jjw59f", "template_egu178q", form.current, {
            publicKey: "OvTJYe6mrwOs-mr0Z",
        })
            .then(() => {
                setStatus("idle");
                form.current.reset();
                setToast({ type: "success", message: "Message sent successfully!" });
            })
            .catch(() => {
                setStatus("idle");
                setToast({ type: "error", message: "Something went wrong. Please try again." });
            })
            .finally(() => {
                setTimeout(() => setToast(null), 3000);
            });
    };

    return (
        <div className="flex flex-col justify-center items-center w-full gap-5 md:gap-10 mt-5 mb-5 pt-10">

            {/* Toast notification */}
            {toast && (
                <div
                    className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-xl shadow-lg text-white transition-all
                    ${toast.type === "success" ? "bg-amber-400" : "bg-red-500"}`}
                >
                    {toast.message}
                </div>
            )}

            <div>
                <h1 className="text-amber-300 text-3xl text-center m-3">Contact Me</h1>
                <p className="text-center w-80 md:w-140">
                    Have a project in mind or want to work together? I'd love to hear from you.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center w-4/5">
                <div className="md:w-100 w-80">
                    <DotLottieReact
                        src="https://lottie.host/68ef7e1c-9742-4f9b-a354-d5f7786caab3/kLyRrTTRwZ.lottie"
                        loop
                        autoplay
                        className="md:w-100 md:h-100 w-80"
                    />
                </div>
                <div className="md:border-l-8 w-80 md:w-1/2 md:h-120 p-5">
                    <form ref={form} className="flex flex-col justify-center items-center gap-5" onSubmit={sendEmail}>
                        <input className="border-gray-400 border rounded-2xl w-80 md:w-120 p-3" name="Name" required type="text" placeholder="Name"></input>
                        <input className="border-gray-400 border rounded-2xl w-80 md:w-120 p-3" name="Email" required type="email" placeholder="Email"></input>
                        <textarea className="border-gray-400 border rounded-2xl w-80 md:w-120 p-3 h-55" name="Message" required  type="text" placeholder="Message"></textarea>
                        <button type="submit" className="rounded-2xl w-80 md:w-120 p-3 bg-amber-300 text-white" disabled={status === "sending"}>
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}