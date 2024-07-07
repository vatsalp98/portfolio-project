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
        <meta
          name="description"
          content="I’m a software developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className={"pt-16"}>
          <AnimatedText
            text={"Experience trumps Knowledge"}
            className={
              "!text-6xl mb-12 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            }
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                showGit={false}
                type={"Money Transfer"}
                title={"CendMate Inc."}
                summary={
                  "Cendmate is your go-to Flutter app for quick and secure money transfers across Africa. Powered by AWS backend and Nium for payments, Cendmate ensures seamless transactions while prioritizing your privacy. Join Cendmate today for hassle-free financial connectivity in Africa."
                }
                img={"/cendmate.png"}
                link={"https://cendmate.com"}
                github={"https://cendmate.com"}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type={"Freelancing Project"}
                showGit={false}
                title={"G.V.P.P.S"}
                summary={
                  "The Typescript and Next JS website for the local table tennis club is designed to improve their online presence. It includes a modern design, easy navigation, and features such as a homepage, history, tournaments, news, and gallery. The website is also responsive and includes a contact page. It helps the club attract new members and supporters."
                }
                img={"/gvpps.png"}
                link={"https://gvpps.com"}
                github={"https://github.com/vatsalp98/GVPPS"}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                showGit={false}
                type={"Native Marketplace"}
                title={"Nechitrade"}
                summary={
                  "NativeGoods Marketplace is a professional online platform powered by Next.js and Payload CMS with TypeScript. Hosted on Railway and utilizing custom S3 storage for file management, our marketplace offers a secure and seamless browsing experience for users seeking authentic American Native goods.Integrated with Stripe for secure payment processing and the Shippo API for efficient shipping, NativeGoods Marketplace ensures smooth transactions and timely delivery. Our platform serves as a bridge between indigenous artisans and global consumers, promoting cultural heritage and economic empowerment."
                }
                img={"/nechitrade.png"}
                link={"https://nechitrade.com"}
                github={"https://nechitrade.com"}
              />
            </div>

            <div className="col-span-6">
              <ProjectDetails
                title={"Kiyanaw"}
                type={"Native Social Media"}
                img={"/kiyanaw.png"}
                link={"https://kiyanaw.com"}
                github={"https://kiyanaw.com"}
              />
            </div>

            <div className="col-span-6">
              <ProjectDetails
                title={"Teyutuanaka Blog"}
                type={"Native Blog"}
                img={"/teyutuanaka.png"}
                link={"https://teyutuanaka.co"}
                github={"https://teyutuanaka.co"}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                showGit={false}
                type={"Featured Project"}
                title={"WeDoc"}
                summary={
                  "The application was developed using React TS and is currently hosted on Netlify. Its purpose is to improve medical services in developing countries by enabling the local population to book medical experts online. By simplifying the process of connecting medical experts with patients, the app helps these experts reach a larger population, contributing to a healthier future for the country. Although the source code is not publicly available due to it being a live project, I invite you to visit the demo and test it out for yourself."
                }
                img={"/wedoc.jpg"}
                link={"https://wedoc.me"}
                github={"https://wedoc.me"}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                showGit={true}
                type={"Featured Project"}
                title={"RoomExpert"}
                summary={
                  "Room Expert has been built using the robust T3 Tech Stack and Appwrite for backend operations. Room Expert uses a state-of-the-art machine learning model called ControlNet. This model is responsible for generating different variations of the rooms according to the chosen styles. It intelligently considers the spatial characteristics and furniture arrangements to offer the most fitting design suggestions."
                }
                img={"/roomexpert.png"}
                link={"https://room-expert.vercel.app/"}
                github={"https://github.com/vatsalp98/RoomExpert"}
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
          </div>
        </Layout>
      </main>
    </>
  );
}
