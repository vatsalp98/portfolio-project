"use client"

import AnimatedText from "@/components/animatedText";
import Details from "@/components/detailsExperience";
import DotIcon from "@/components/dotIcon";
import {useScroll, motion} from "framer-motion";
import { useRef } from "react";
import DetailsEducation from "../detailsEducation";


export default function EducationSection() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]

        }
    );

    return (
        <main className="mt-32 mb-32">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">
                <AnimatedText text={"Education"} className={"md:!text-6xl xs:!text-4xl md:mb-16"}/>
            </h2>
            <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-light" ref={ref}
                style={{scaleY: scrollYProgress}}
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <DetailsEducation 
                        type={"Bachelors of Applied Sciences"} 
                        time={"2015 - 2022"} 
                        place={"Simon Fraser University (SFU)"} 
                        info={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, Data Analysis and Mathematical data modelling."} 
                    />
                    <DetailsEducation 
                        type={"International Baccalaureat (I.B)"} 
                        time={"2012 - 2025"} 
                        place={"Ecole Internationale Arc-En-Ciel (Togo, Africa)"} 
                        info={"Relevant courses included Mathematics (HL), Physics (HL), Economy (HL), French A (SL), English B (SL), Chemistry (SL)"} 
                    />
                </ul>
            </div>
        </main>
    );
}