"use client";

import AnimatedText from "@/components/animatedText";
import DetailsExperience from "@/components/detailsExperience";
import DotIcon from "@/components/dotIcon";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

export default function ExperiencePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <main className="mt-32 mb-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        <AnimatedText
          text={"Experience"}
          className={"md:!text-6xl xs:!text-4xl md:mb-16"}
        />
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-light"
          ref={ref}
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <DetailsExperience
            position={"Co-Founder & CTO"}
            company={"Bookster Inc."}
            companyLink={"https://bookster.ca"}
            time={"2024-present"}
            address={"Burnaby, BC"}
            work={
              "As the Co-Founder and CTO of Bookster, I am dedicated to revolutionizing the way students access textbooks. With a strong passion for educational technology, I lead the development of innovative solutions that make renting textbooks simple and affordable. At Bookster, we leverage cutting-edge technology to provide a seamless rental experience, ensuring students have the resources they need to succeed. My commitment to education and technological expertise is driving Bookster towards a future where every student can easily access the learning materials they need."
            }
          />

          <DetailsExperience
            position={"Lead Web Developer"}
            company={"Cendmate Inc."}
            companyLink={"https://cendmate.com"}
            time={"2024-present"}
            address={"Burnaby, BC"}
            work={
              "As the Lead Web Developer at Cendmate, I am dedicated to transforming the landscape of global money transfers. With a passion for fintech innovation, I spearhead the development of robust web solutions that enable affordable and efficient money transfers worldwide. At Cendmate, we harness state-of-the-art technology to offer the lowest transfer rates, ensuring seamless and secure transactions for our users. My expertise in web development and commitment to financial accessibility are driving Cendmate towards a future where everyone can effortlessly send money across the globe."
            }
          />

          <DetailsExperience
            position={"Freelance developer"}
            company={"Self-Employed"}
            companyLink={"https://nechitrade.com"}
            time={"2022-2023"}
            address={"Vancouver, BC"}
            work={
              "As a freelance developer, I am dedicated to empowering native artisans by creating bespoke e-commerce websites that showcase their unique crafts. With a deep passion for supporting local communities and preserving cultural heritage, I develop tailored online platforms that enable artisans to reach a global audience. Leveraging cutting-edge technology, I ensure that each website is not only visually stunning but also user-friendly and optimized for seamless transactions. My commitment to blending traditional artistry with modern e-commerce solutions is driving the success of native artisans in the digital marketplace."
            }
          />

          <DetailsExperience
            position={"Lead Mobile developer"}
            company={"SalonEverywhere"}
            companyLink={"https://saloneverywhere.com"}
            time={"2020-2022"}
            address={"Toronto, ON"}
            work={
              "I was a mobile developer at SalonEverywhere, responsible for publishing a Flutter app on both the App Store and Google Play Store. In addition to this, I also integrated AWS backend services to the app, ensuring its scalability, security, and reliability. With attention to detail and dedication to excellence, I delivered a high-quality product that enhanced the user experience. My skills and expertise in mobile app development and AWS backend helped SalonEverywhere reach new heights and provide users with a seamless mobile experience."
            }
          />

          <DetailsExperience
            position={"IT Services"}
            company={"SFU"}
            companyLink={"https://www.sfu.ca/"}
            time={"2019-2020"}
            address={"Burnaby, BC"}
            work={
              "I have extensive experience in troubleshooting technical issues and providing hardware and software support in a fast-paced university environment. I'm skilled in network maintenance and system administration, and I have a strong communication ability that allows me to convey complex technical information to both technical and non-technical users. My top priority is to provide excellent customer service and ensure that all IT-related issues are resolved promptly and efficiently. At SFU, I'm part of a dedicated IT team that works tirelessly to deliver high-quality IT services to students and staff. I take pride in my work and have a proven track record of delivering results, making me a valuable member of the SFU community."
            }
          />
        </ul>
      </div>
    </main>
  );
}
