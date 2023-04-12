"use client"

import AnimatedText from "@/components/animatedText";
import Details from "@/components/details";

export default function ExperiencePage() {
    return (
        <main className="mt-24 mb-32">
            <h2 className="font-bold text-8xl mb-24 w-full text-center">
                <AnimatedText text={"Experience"} className={""}/>
            </h2>
            <div className="w-[75%] mx-auto relative">
                <ul>
                    <Details 
                        position={"Founder & CEO"} 
                        company={"Apfly"} 
                        companyLink={"https://apfly.live"} 
                        time={"2022-Present"} 
                        address={"Burnaby, BC"} 
                        work={"I'm an innovative entrepreneur with a marketing and technology background, passionate about helping small businesses grow their online presence. As the founder and CEO of a startup, I develop user-friendly tools and resources for social media marketing, website design, and SEO. My goal is to empower local businesses to succeed in the competitive online marketplace."}                        
                    />
                    <Details 
                        position={"Mobile developer"} 
                        company={"SalonEverywhere"} 
                        companyLink={"https://saloneverywhere.com"} 
                        time={"2020-2022"} 
                        address={"Toronto, ON"} 
                        work={"I was a mobile developer at SalonEverywhere, responsible for publishing a Flutter app on both the App Store and Google Play Store. In addition to this, I also integrated AWS backend services to the app, ensuring its scalability, security, and reliability. With attention to detail and dedication to excellence, I delivered a high-quality product that enhanced the user experience. My skills and expertise in mobile app development and AWS backend helped SalonEverywhere reach new heights and provide users with a seamless mobile experience."}
                    />
                </ul>
            </div>
        </main>
    );
}