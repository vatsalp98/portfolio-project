import { motion } from "framer-motion";
import DotIcon from "./dotIcon";
import { useRef } from "react";

type Props = {
    type: string;
    time: string;
    place: string;
    info: string;
}

export default function DetailsEducation(props: Props) {
    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <DotIcon reference={ref}/>
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration: 0.5, type: 'spring'}}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-dark dark:text-light">
                    {props.type}&nbsp;
                </h3>
                <span className="capitalize font-medium text-dark/75 xs:text-sm dark:text-light/75">
                    {props.time} | {props.place}
                </span>
                <p className="font-medium w-full text-lg md:text-sm text-dark dark:text-light">
                    {props.info}
                </p>
            </motion.div>

        </li>
    );
}