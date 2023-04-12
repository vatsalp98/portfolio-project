import {motion} from "framer-motion";

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleWord = {
    initial: {
        opacity: 1,
        y:50,
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            delay: 0.5,
        }
    }
}

type Props = {
    text: String,
    className: String,
}


export default function AnimatedText(props: Props) {
    return (
        <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${props.className}`}
            variants={quote}
            initial="initial"
            animate="animate">
                {
                    props.text.split(" ").map((word, index) => (
                        <motion.span key={word+"-"+index} className="inline-block"
                        variants={singleWord}>
                            {word}&nbsp;
                        </motion.span>
                    ))
                }
            </motion.h1>
        </div>
    );
}