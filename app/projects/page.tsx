"use client";

import AnimatedText from "@/components/animatedText";
import FeaturedProject from "@/components/featuredProjects";
import Layout from "@/components/layout";
import ProjectDetails from "@/components/projects";

export default function ProjectsPage() {
    return (
        <>
            <head>
               <title>Vatsaal | Projects</title> 
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

                        <div className="col-span-6">
                            <ProjectDetails 
                                title={"Shift Manager"} 
                                type={"Project"} 
                                img={"/shift_img.jpg"} 
                                link={"https://shiftmanager.live"} 
                                github={"https://github.com/vatsalp98/shift-manager-web.git"}                            
                            />

                        </div>

                        <div className="col-span-6">
                            <ProjectDetails 
                                title={"SalonPro"} 
                                type={"Project"} 
                                img={"/salonPro2.png"} 
                                link={"https://saloneverywhere.com/salonpro"} 
                                github={"https://saloneverywhere.com/salonpro"}                            
                            />

                        </div>

                        <div className="col-span-12">
                            <FeaturedProject 
                                type={"Featured Project"} 
                                title={"G.V.P.P.S"} 
                                summary={"The Typescript and Next JS website for the local table tennis club is designed to improve their online presence. It includes a modern design, easy navigation, and features such as a homepage, history, tournaments, news, and gallery. The website is also responsive and includes a contact page. It helps the club attract new members and supporters."} 
                                img={"/gvpps.png"} 
                                link={"https://gvpps.com"} 
                                github={"https://github.com/vatsalp98/GVPPS"}                              
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject 
                                type={"Featured Project"} 
                                title={"Parmaart"} 
                                summary={"The Typescript and Next JS ecommerce website for the local supermarket provides a modern shopping experience. It features easy navigation, detailed product pages, customer reviews, and multiple payment options. The website's secure checkout and delivery options make it convenient for customers to shop online and helps the supermarket expand its customer base."} 
                                img={"/parmaart.jpg"} 
                                link={"https://parmaart.store"} 
                                github={"https://github.com/vatsalp98/parmart"}                                
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}