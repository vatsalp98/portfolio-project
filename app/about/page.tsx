"use client"

import AnimatedText from "@/components/animatedText";
import Layout from "@/components/layout";
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

    return <span ref={ref}></span>
}

export default function AboutPage() {
    return (
        <main className="flex w-full flex-col items-center justify-center">
            <Layout className={"pt-10"}>
                <AnimatedText text={"Passion fuels Me"} className={"!text-6xl pb-10"}/>
                <div className="grid w-full grid-cols-8 gap-16">
                    <div className="col-span-3 flex flex-col items-start justify-start">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                        <p className="my-4 font-medium">
                        I have always had a knack for technology and working with computers. In 2005, I started working with HTML and CSS to make some minor edits on a small business website that I was operating. What I thought was just a few small edits turned into a love for programming.
                        </p>
                    </div>
                    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"/>
                        <Image src={"/profile.jpg"} alt={"Profile Pic"} width={"400"} height={"400"} className="w-full h-auto rounded-2xl"/>
                    </div>

                    <div className="col-span-2 flex flex-col items-end justify-between">
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={20}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75">satisfied clients</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={50}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75">projects completed</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={5}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75">years of experience</h2>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    );
}