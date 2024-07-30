"use client";
import '../App.css';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Register() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    const handleRegisterClick = () => {
        window.open("https://forms.gle/t5bF6vZyMbwwrUA28", "_blank");
    };

    return (
        <div className="h-screen flex items-center justify-center text-white p-4 md:p-8">
            <div className="w-full md:w-2/3 mx-4 md:mx-32">
                <section className="mx-4">
                    <h1 className="text-4xl md:text-6xl mb-6 md:mb-12 font-bold">Register</h1>
                    <p className="text-lg md:text-xl mb-8">
                        Join us for an exciting 24-hour ideathon where students can learn how to code while building a
                        project. This event will be held on August 25th and is open to all students who are eager to innovate, learn,
                        collaborate, and create.
                    </p>
                    <button
                        onClick={handleRegisterClick}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                        data-aos="fade-up"
                    >
                        Register Now
                    </button>
                </section>
            </div>
        </div>
    );
}