import Link from "next/link";
import Logo from "./logo";
import { usePathname, useRouter  } from "next/navigation";
import {motion} from "framer-motion";
import { CodeOutlined, GithubFilled, GithubOutlined, LinkedinFilled, LinkedinOutlined, MenuOutlined, MessageFilled, ThunderboltFilled, TwitterOutlined } from "@ant-design/icons";
import { useState } from "react";
import { MobileCustomLink } from "./mobileCustomLink";
import {MdDarkMode} from "react-icons/md";
import {SiHackerrank} from "react-icons/si";
import {BiMailSend} from "react-icons/bi";
import {BsFillSunFill, BsGithub} from "react-icons/bs";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import DesktopSocials from "./desktopSocialIcons";
import HamburgerMenu from "./hamburgerMenu";

interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
}


const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className }) => {
    const pathName = usePathname();
    const router = useRouter();

    const handleClick = () => {
        router.push(href);
    }

    return (
        <Link href={href} className={`${className} relative group font-semibold text-dark dark:text-light`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${pathName === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    );
};

export default function NavBar() {
    
    const [open, setOpen] = useState(false);
    const {darkMode, setDarkMode} = useThemeSwitcher();

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-light relative z-10 lg:px-16 sm:px-12 xs:px-8 dark:bg-dark">
            
            <HamburgerMenu open={open} className={"flex-col justify-center items-center hidden lg:flex"} onClick={handleClick} />
            
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4"/>
                    <CustomLink href="/about" title="About" className="mx-4"/>
                    <CustomLink href="/projects" title="Projects" className="mx-4"/>
                    <CustomLink href="/experience" title="Experience" className="ml-4"/>
                </nav>
                
                <nav className="flex items-center justify-center flex-wrap">
                    <DesktopSocials />
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
                    <DesktopSocials />
                </nav>
            </motion.div> : null
            }

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
}