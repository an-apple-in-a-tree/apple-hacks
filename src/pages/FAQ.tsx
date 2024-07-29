"use client";
import '../App.css';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <div className="text-white p-4 md:p-8 w-full md:w-2/3 mx-4 md:mx-32 justify-around mt-12 md:mt-28">
            <h1 data-aos="zoom-in" data-aos-duration="1000" className="mt-8 text-4xl md:text-6xl mb-6 md:mb-12 font-bold">Frequently Asked Questions</h1>
            <Accordion type="single">
                <AccordionItem value="item-1"  className = "py-4">
                    <AccordionTrigger className="text-2xl md:text-3xl">What is an ideathon?</AccordionTrigger>
                    <AccordionContent className="text-xl md:text-2xl">
                        An ideathon is an event where participants brainstorm and develop innovative ideas, often focusing on solving specific problems or challenges. It encourages creativity and collaboration among participants.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2"  className = "py-4">
                    <AccordionTrigger className="text-2xl md:text-3xl text-left">What is the difference between an ideathon and a hackathon?</AccordionTrigger>
                    <AccordionContent className="text-xl md:text-2xl">
                        An ideathon focuses on generating and developing ideas, while a hackathon involves building functional prototypes or projects, often with coding and technical skills. Ideathons are more about brainstorming and planning, whereas hackathons are about execution and development.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3"  className = "py-4">
                    <AccordionTrigger className="text-2xl md:text-3xl">How many people can be on a team?</AccordionTrigger>
                    <AccordionContent className="text-xl md:text-2xl">
                        Teams can typically consist of 3-5 members, but this can vary depending on the event's rules. It's important to check the specific guidelines of the event you are participating in.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className = "py-4">
                    <AccordionTrigger className="text-2xl md:text-3xl">Who is eligible to participate?</AccordionTrigger>
                    <AccordionContent className="text-xl md:text-2xl">
                        Any beginner coder is eligible to participate in an ideathon. The event is open to all students eager to innovate, learn, collaborate, and create. No prior experience is necessary, and participants from all backgrounds are welcome.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className = "py-4">
                    <AccordionTrigger className="text-2xl md:text-3xl">What should I build during an ideathon?</AccordionTrigger>
                    <AccordionContent className="text-xl md:text-2xl">
                        During an ideathon, you should focus on building innovative solutions to the given problem statements. This could include developing new apps, creating business plans, designing prototypes, or any other creative solutions that address the challenges presented.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className = "py-4">
                    <AccordionTrigger className="text-2xl md:text-3xl">What resources are available during an ideathon?</AccordionTrigger>
                    <AccordionContent className="text-xl md:text-2xl">
                        Participants typically have access to mentors, workshops, and various resources to help them develop their ideas. This can include access to software, hardware, and other tools necessary for brainstorming and prototyping.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className = "py-4 mb-8">
                    <AccordionTrigger className="text-2xl md:text-3xl">How do I prepare for Apple Hacks</AccordionTrigger>
                    <AccordionContent className="text-xl md:text-2xl">
                        To prepare for an ideathon, familiarize yourself with the event's theme and problem statements. Gather a team with diverse skills, and brainstorm potential ideas beforehand. It's also helpful to brush up on relevant skills and tools that might be useful during the event.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}