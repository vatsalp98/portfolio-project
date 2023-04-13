"use client"

import AnimatedText from "@/components/animatedText";
import HireMeFloater from "@/components/hireMe";
import Layout from "@/components/layout";
import Roles from "@/components/typingEffect/roles";
import { LinkOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const roles = [
  "Web Developer",
  "Mobile Developer", 
  "Back-end Developer",
  "Front-end Developer",
  "Software Developer",
];

export default function Home() {
  return (
    <>
    <main className="w-full">
      <Layout className={"pt-0 md:pt-16 sm:pt-8"}>
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full">
            <Image src="/new_profile.png" alt="Profile Picture" width={550} height={550} className="w-full h-auto lg:hidden md:inline-block md:w-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"/>
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ml-5">
            <AnimatedText text={"Bringing Ideas to reality with latest technologies."} className={"!text-6xl !text-left pb-10 xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"} />
            <Roles superpowers={roles} className={"!text-4xl !text-left font-bold w-full mx-auto lg:!text-center text-dark dark:text-light"}/>
            <p className="my-4 font-medium md:text-sm xs:text-xs text-dark dark:text-light">
              I’m focused on building responsive web and mobile applications while focusing on serverless back-end technologies. I am currently developing an application to help developing countries improve their health services.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link href={"/vatsaal_resume.pdf"} target={"_blank"}
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
              download={true}>
                Resume <LinkOutlined style={{ fontSize: 24, paddingLeft: 5}}/>
              </Link>
              <Link href={"mailto:vatsalparmar98@gmail.com"} target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline md:text-base">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      
    </main>
    </>
  )
}
