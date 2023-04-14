import Link from "next/link";
import {motion} from "framer-motion";

const MotionLink = motion(Link);

export default function Logo() {
    return (
        <div className="flex items-center justify-center mt-2">
            <MotionLink href={"/"} className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold dark:text-light"
            whileHover={{
                backgroundColor: ["#121212","rgba(245, 40, 145, 0.8)", "rgba(245, 0, 16, 0.8)", "rgba(0, 94, 245, 0.8)", "rgba(154, 219, 41, 0.8)","#121212"],
                transition: {duration: 1, repeat: Infinity},
                scale: 1.2,
            }}
            >
                VP
            </MotionLink>
        </div>
    );
}