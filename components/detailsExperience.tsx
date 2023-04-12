import { motion } from "framer-motion";
import DotIcon from "./dotIcon";
import { useRef } from "react";

type Props = {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
}

export default function DetailsExperience(props: Props) {
    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <DotIcon reference={ref}/>
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration: 0.5, type: 'spring'}}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{props.position}&nbsp;<a target={"_blank"} href={props.companyLink} className="text-primary capitalize">@ {props.company}</a></h3>
                <span className="capitalize font-medium text-dark/75 xs:text-sm">
                    {props.time} | {props.address}
                </span>
                <p className="font-medium w-full text-lg md:text-sm">
                    {props.work}
                </p>
            </motion.div>

        </li>
    );
}