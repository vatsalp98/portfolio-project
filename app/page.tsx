"use client";

import AnimatedText from "@/components/animatedText";
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
    <main className="">
      <Layout className={"pt-0"}>
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src="/new_profile.png" alt="Profile Picture" width={550} height={550}/>
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText text={"Bringing Ideas to reality with latest technologies."} className={"!text-6xl !text-left pb-10"} />
            <Roles superpowers={roles} className={"!text-4xl !text-left font-bold w-full mx-auto"}/>
            <p className="my-4 font-medium text-lg">
              I’m focused on building responsive web and mobile applications while focusing on serverless back-end technologies. I am currently developing an application to help developing countries improve their health services.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link href={"/vatsaal_resume.pdf"} target={"_blank"}
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
              download={true}>
                Resume <LinkOutlined style={{ fontSize: 24, paddingLeft: 5}}/>
              </Link>
              <Link href={"mailto:vatsalparmar98@gmail.com"} target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline">
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
