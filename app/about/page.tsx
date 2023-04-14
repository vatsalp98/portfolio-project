"use client"

import AnimatedText from "@/components/animatedText";
import Layout from "@/components/layout";
import EducationSection from "@/components/sections/education";
import SkillsSection from "@/components/sections/skills";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
    value: number;
}

const AnimatedNumbers = (props: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref);
    useEffect(() => {
        if(isInView) {
            motionValue.set(props.value);
        }
    }, [isInView, props.value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= props.value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, props.value]);

    return <span ref={ref} className="text-dark dark:text-light"></span>
}

export default function AboutPage() {
    return (
        <>
        <head>
            <title>Vatsaal | About</title>
        </head>
        <main className="flex w-full flex-col items-center justify-center">
            <Layout className={"pt-16"}>
                <AnimatedText text={"Passion fuels Me"} className={"!text-6xl mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"}/>
                <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                    <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                        <p className="my-4 font-medium text-dark dark:text-light">
                            I have always had a natural talent for technology and working with computers. In 2005, I began working with HTML and CSS to make some minor edits on a small business website that I was running. What I initially thought would be just a few small changes turned into a passion for programming.
                        </p>
                        <p className="my-4 font-medium text-dark dark:text-light">
                            Fascinated with how intricate programming can be I was quickly drawn to learn more. I started learning javascript and was even more enthused with making websites interactive. I am now spending my time building projects with Next JS, AWS, Azure and learning new technologies.
                        </p>
                        <p className="my-4 font-medium text-dark dark:text-light">
                            I excel in software architecture, design patterns, and agile methodologies to deliver high-quality projects on time. I have excellent communication skills, collaborate well with teams, and share my knowledge with the tech community through open-source contributions.
                        </p>
                    </div>
                    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"/>
                        <Image src={"/profile.jpg"} alt={"Profile Pic"} width={"400"} height={"400"} className="w-full h-auto rounded-2xl"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"/>
                    </div>

                    <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-dark dark:text-light">
                                <AnimatedNumbers value={20}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light/75">satisfied clients</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-dark dark:text-light">
                                <AnimatedNumbers value={50}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light/75">projects completed</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-dark dark:text-light">
                                <AnimatedNumbers value={5}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light/75">years of experience</h2>
                        </div>
                    </div>
                </div>
            </Layout>
            <EducationSection />
            <SkillsSection />
        </main>
        </>
    );
}