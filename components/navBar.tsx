import Link from "next/link";
import Logo from "./logo";
import { usePathname  } from "next/navigation";
import {motion} from "framer-motion";
import { GithubOutlined, LinkedinFilled, LinkedinOutlined, MessageFilled, TwitterOutlined } from "@ant-design/icons";

interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className }) => {
    const router = usePathname();
    return (
        <Link href={href} className={`${className} relative group font-semibold`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    );
};

export default function NavBar() {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-light">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4"/>
                <CustomLink href="/about" title="About" className="mx-4"/>
                <CustomLink href="/skills" title="Skills" className="mx-4"/>
                <CustomLink href="/projects" title="Projects" className="ml-4"/>
            </nav>
            <Logo />
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://twitter.com/vatsalparmar98" target={"_blank"} whileHover={{y:-3}} whileTap={{scale: 0.9}} className="w-6 mr-3">
                    <TwitterOutlined style={{ fontSize: '30px', color: "blue" }}/>
                </motion.a>
                <motion.a href="https://github.com/vatsalp98" target={"_blank"} whileHover={{y:-3}} whileTap={{scale: 0.9}} className="w-6 mx-3">
                    <GithubOutlined style={{ fontSize: '30px' }}/>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/vatsalparmar98/" target={"_blank"} whileHover={{y:-3}} whileTap={{scale: 0.9}} className="w-6 mx-3">
                    <LinkedinFilled style={{ fontSize: '30px', color: "blue" }}/>
                </motion.a>
                <motion.a href="mailto:vatsalparmar98@gmail.com" target={"_blank"} whileHover={{y:-3}} whileTap={{scale: 0.9}} className="w-6 ml-3">
                    <MessageFilled style={{ fontSize: '26px', color: "teal" }}/>
                </motion.a>
            </nav>
        </header>
    );
}