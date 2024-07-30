"use client";
import '../App.css';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center text-white p-4 md:p-8">
            <div className="w-full md:w-2/3 mx-4 md:mx-32">
                <section className="text-center mt-12">
                    <h1 className="text-4xl md:text-6xl mb-6 md:mb-12 font-bold">Contact</h1>
                    <p className="text-lg md:text-xl mb-4">
                        For any inquiries, feel free to reach out to us via email or Instagram.
                    </p>
                    <p className="text-lg md:text-xl mb-8">
                        Email: <a href="mailto:youthincs@gmail.com" className="text-blue-400">youthincs@gmail.com</a>
                    </p>
                    <p className="text-lg md:text-xl mb-8">
                        Instagram: <a href="https://www.instagram.com/codingcampus_org/" className="text-blue-400"
                                      target="_blank" rel="noopener noreferrer">@codingcampus_org</a>
                    </p>
                </section>
                <div data-aos="fade-up" className="mt-24 flex flex-row md:flex-row items-center md:items-start mt-8">
                    <p className="text-lg px-6 my-auto">
                        This event is organized by Coding Campus, Coding Campus, a dynamic non-profit organization driven
                        by a collective passion for coding education. Our mission? To democratize access to programming
                        knowledge and ignite the flames of curiosity in students!
                    </p>
                    <a href="https://linktr.ee/codingcampus">
                        <img src="src/assets/cclogo.jpeg" className="h-full" alt="Coding Campus Logo"/>
                    </a>
                </div>
            </div>
        </div>
    );
}