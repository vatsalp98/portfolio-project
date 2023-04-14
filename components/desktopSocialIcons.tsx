
import { TfiLinkedin } from "react-icons/tfi";
import { motion } from "framer-motion";
import { BsGithub, BsFillSunFill } from "react-icons/bs";
import { CgTwitter } from "react-icons/cg";
import { SiHackerrank } from "react-icons/si";


export default function DesktopSocials() {
    return (
        <>
            <motion.a href="https://twitter.com/vatsalparmar98" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="w-6 mr-3" title="twitter">
                <CgTwitter className="text-dark dark:text-light text-[28px]"/>
            </motion.a>
            <motion.a href="https://github.com/vatsalp98" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="w-6 mx-3">
                <BsGithub className="text-dark dark:text-light text-[28px]"/>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/vatsalparmar98/" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="mx-3">
                <TfiLinkedin className="text-dark dark:text-light text-[28px]"/>
            </motion.a>
            <motion.a href="https://www.hackerrank.com/vparmar2" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="mx-4">
                <SiHackerrank className="text-dark dark:text-light text-[28px]"/>
            </motion.a>
        </>
    );
}