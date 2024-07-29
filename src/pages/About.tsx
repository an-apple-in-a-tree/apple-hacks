"use client"; // This directive ensures that the code is run on the client side.
import '../App.css'; // Import the main CSS file for styling.
import "aos/dist/aos.css"; // Import the CSS file for Animate On Scroll (AOS) library.
import AOS from "aos"; // Import the AOS library for scroll animations.
import { useEffect } from "react"; // Import the useEffect hook from React.

export default function About() {
    // Initialize AOS with specific options when the component is mounted.
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration in milliseconds.
            once: true, // Ensure animation happens only once.
        });
    }, []);

    return (
        <div className="text-white p-4 md:p-8 w-full md:w-2/3 mx-4 md:mx-32 justify-around mt-12 md:mt-28">
            <h1 className="text-3xl md:text-5xl mb-6 md:mb-12 font-bold">🍏 About Apple Hacks 🍎</h1>
            <p data-aos="fade-up" className = "pb-8">This is the first iteration of Coding Campuses own annual hackathon! This year,
                we decided to partner with education institutions to run an ideathon.</p>
            {/* Event Details Section */}
            <section data-aos="fade-up" className="mb-4 md:mb-8">
                <h2 className="text-2xl md:text-3xl mb-2 md:mb-4 font-semibold">Event Details 📅</h2>
                <p className="text-lg md:text-xl">
                    Join us for an exciting 24-hour ideathon where students can learn how to code while building a project.
                    This event will be held on August 25th and is open to all students who are eager to innovate, learn,
                    collaborate, and create.
                </p>
            </section>

            {/* Objectives Section */}
            <section data-aos="fade-up" className="mb-4 md:mb-8">
                <h2 className="text-2xl md:text-3xl mb-2 md:mb-4 font-semibold">Objectives 🎯 </h2>
                <ul className="list-disc list-inside text-lg md:text-xl">
                    <li>Encourage innovation and creativity among students. </li>
                    <li>Provide a platform for learning and applying coding skills. </li>
                    <li>Foster collaboration and teamwork.</li>
                    <li>Build a functional project by the end of the event.</li>
                </ul>
            </section>

            {/* Schedule Section */}
            <section data-aos="fade-up" className="mb-4 md:mb-8">
                <h2 className="text-2xl md:text-3xl mb-2 md:mb-4 font-semibold">Schedule ⏰</h2>
                <p className="text-lg md:text-xl">
                    The ideathon will kick off at 9:00 AM on August 25th and will run continuously for 24 hours.
                    Participants will have access to mentors, workshops, and resources throughout the event.
                </p>
            </section>

            {/* Contact Information Section */}
            <section data-aos="fade-up" className="mb-4 md:mb-8">
                <h2 className="text-2xl md:text-3xl mb-2 md:mb-4 font-semibold">Contact Information 📧</h2>
                <p className="text-lg md:text-xl">
                    For any questions or additional information, please contact us at <a href="mailto:youthincs@gmail.com" className="text-blue-500">youthincs@gmail.com</a>.
                </p>
            </section>
        </div>
    );
}