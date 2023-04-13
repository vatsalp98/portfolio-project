import Link from "next/link";
import Logo from "./logo";
import { usePathname  } from "next/navigation";
import {motion} from "framer-motion";
import { CodeOutlined, GithubFilled, GithubOutlined, LinkedinFilled, LinkedinOutlined, MenuOutlined, MessageFilled, ThunderboltFilled, TwitterOutlined } from "@ant-design/icons";
import { useState } from "react";
import { MobileCustomLink } from "./mobileCustomLink";
import {MdDarkMode} from "react-icons/md";
import {SiHackerrank} from "react-icons/si";
import {BiMailSend} from "react-icons/bi";

interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className }) => {
    const router = usePathname();
    return (
        <Link href={href} className={`${className} relative group font-semibold text-dark dark:text-light`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${router === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    );
};

export default function NavBar() {
    
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-light relative z-10 lg:px-16 sm:px-12 xs:px-8">

            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm ${open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${open ? 'opacity-0': 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4"/>
                    <CustomLink href="/about" title="About" className="mx-4"/>
                    <CustomLink href="/projects" title="Projects" className="mx-4"/>
                    <CustomLink href="/experience" title="Experience" className="ml-4"/>
                </nav>
                
                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a href="https://twitter.com/vatsalparmar98" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="w-6 mr-3">
                        <TwitterOutlined style={{ fontSize: '30px', color: "#1DA1F2" }}/>
                    </motion.a>
                    <motion.a href="https://github.com/vatsalp98" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="w-6 mx-3">
                        <GithubFilled style={{ fontSize: '30px', color: "black" }}/>
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/vatsalparmar98/" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="mx-3">
                        <LinkedinFilled style={{ fontSize: '30px', color: "#1DA1F2" }}/>
                    </motion.a>
                    <motion.a href="mailto:vatsalparmar98@gmail.com" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="mx-3">
                        <BiMailSend className="w-8 h-8 text-primary"/>
                    </motion.a>
                    <motion.a href="https://www.hackerrank.com/vparmar2" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="mx-4">
                        <SiHackerrank className="w-8 h-8 text-green-600"/>
                    </motion.a>
                    <motion.a href="https://www.hackerrank.com/vparmar2" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="w-6 ml-4">
                        <MdDarkMode className="w-8 h-8 text-dark dark:text-light"/>
                    </motion.a>
                </nav>
            </div>
            {
                open ? 
                <motion.div className="min-w-[70vw] z-30 flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-between items-center bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 dark:text-light"
                initial={{scale:0, opacity: 0, x: "-50", y: "-50"}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 1.1,}}
                >
                <nav className="flex items-center flex-col justify-center text-light dark:text-dark">
                    <MobileCustomLink href="/" title="Home" className="" toggle={handleClick}/>
                    <MobileCustomLink href="/about" title="About" className="" toggle={handleClick}/>
                    <MobileCustomLink href="/projects" title="Projects" className="" toggle={handleClick}/>
                    <MobileCustomLink href="/experience" title="Experience" className="" toggle={handleClick}/>
                </nav>
                
                <nav className="flex items-center justify-center flex-wrap mt-2">
                    <motion.a href="https://twitter.com/vatsalparmar98" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="w-6 mr-3 sm:mx-1">
                        <TwitterOutlined style={{ fontSize: '30px', color: "blue" }}/>
                    </motion.a>
                    <motion.a href="https://github.com/vatsalp98" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="w-6 mx-3 sm:mx-1">
                        <GithubOutlined style={{ fontSize: '30px' }}/>
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/vatsalparmar98/" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="w-6 mx-3 sm:mx-1">
                        <LinkedinFilled style={{ fontSize: '30px', color: "blue" }}/>
                    </motion.a>
                    <motion.a href="mailto:vatsalparmar98@gmail.com" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="w-6 ml-3 sm:mx-1">
                        <MessageFilled style={{ fontSize: '26px', color: "teal" }}/>
                    </motion.a>
                    <motion.a href="https://www.hackerrank.com/vparmar2" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="w-6 ml-4 sm:mx-1">
                        <CodeOutlined style={{ fontSize: '26px', color: "teal" }}/>
                    </motion.a>
                    <motion.a href="https://www.hackerrank.com/vparmar2" target={"_blank"} whileHover={{y:-5}} whileTap={{scale: 0.9}} className="w-6 ml-4 sm:mx-1">
                        <ThunderboltFilled style={{ fontSize: '26px', color: "teal" }}/>
                    </motion.a>
                </nav>
            </motion.div> : null
            }

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
}