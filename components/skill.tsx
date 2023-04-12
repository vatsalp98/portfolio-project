import {motion} from "framer-motion";

type Props = {
    text: string;
    x: string;
    y: string;
}

export default function SkillDetails(props: Props) {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark text-lg cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold"
        whileHover={{scale: 1.05}}
        initial={{x: 0, y: 0}}
        animate={{x: props.x, y: props.y}}
        transition={{duration: 1.5}}
        viewport={{once: true}}
        >
            {props.text}
        </motion.div>
    );
}