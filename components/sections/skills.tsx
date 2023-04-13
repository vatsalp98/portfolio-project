"use client";

import AnimatedText from "@/components/animatedText";
import SkillDetails from "@/components/skill";
import {motion} from "framer-motion";


export default function SkillsSection() {
    return (
        <>
            <AnimatedText text={"Skills"} className={"font-bold text-8xl mt-32 w-full text-center mb-24 md:!text-6xl md:mt-32"} />
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm mb-10 pb-10">
                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
                whileHover={{scale: 1.05}}
                >
                    Software
                </motion.div>

                <SkillDetails text="Flutter" x="-20vw" y="2vw" />
                <SkillDetails text="JavaScript" x="-5vw" y="-10vw" />
                <SkillDetails text="TypeScript" x="20vw" y="6vw" />
                <SkillDetails text="AWS" x="0vw" y="12vw" />
                <SkillDetails text="HTML" x="-20w" y="-25vw" />
                <SkillDetails text="TailwindCSS" x="15vw" y="-12vw" />
                <SkillDetails text="NextJS" x="32vw" y="-5vw" />
                <SkillDetails text="ReactJS" x="9vw" y="-20vw" />
                <SkillDetails text="R" x="-15vw" y="18vw" />
                <SkillDetails text="MatLab" x="18vw" y="18vw" />
                <SkillDetails text="Google Cloud" x="-16vw" y="-20vw" />
                <SkillDetails text="Python" x="12vw" y="-5vw" />
                <SkillDetails text="SQL" x="-29vw" y="9vw" />
                <SkillDetails text="Git" x="-30vw" y="-7vw" />
                <SkillDetails text="serverless" x="0vw" y="22vw" />
            </div>
        </>
    );
}