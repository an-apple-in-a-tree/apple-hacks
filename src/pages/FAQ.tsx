"use client";
import '../App.css'
import "aos/dist/aos.css";
import AOS from "aos";
import {useEffect} from "react";

export default function FAQ () {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    })

    return (
        <div className = "text-white">
            <h1 data-aos = "fade-up" >Frequently Asked Questions</h1>
        </div>
    );

}