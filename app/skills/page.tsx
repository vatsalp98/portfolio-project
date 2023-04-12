"use client";

import AnimatedText from "@/components/animatedText";
import FeaturedProject from "@/components/featuredProjects";
import Layout from "@/components/layout";

export default function SkillsPage() {
    return (
        <>
            <head>
               <title>Vatsaal | Skills</title> 
               <meta name="description" content="I’m a software developer specializing in building (and occasionally designing) exceptional digital experiences." />
                <link rel="icon" href="./favicon.ico" />
            </head>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className={"pt-16"}>
                    <AnimatedText text={"Experience trumps Knowledge"} className={"!text-6xl mb-12"}/>

                    <div className="grid grid-cols-12 gap-24">
                        <div className="col-span-12">
                            <FeaturedProject 
                                type={"Featured Project"} 
                                title={"WeDoc"} 
                                summary={"The application was developed using React TS and is currently hosted on Netlify. Its purpose is to improve medical services in developing countries by enabling the local population to book medical experts online. By simplifying the process of connecting medical experts with patients, the app helps these experts reach a larger population, contributing to a healthier future for the country. Although the source code is not publicly available due to it being a live project, I invite you to visit the demo and test it out for yourself."} 
                                img={"/wedoc.jpg"} 
                                link={"https://wedoc.me"} 
                                github={"https://wedoc.me"}                            
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}