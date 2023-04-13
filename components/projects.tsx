import { GithubFilled } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

type Props = {
    title: string;
    type: string;
    img: string;
    link: string;
    github: string;
}

export default function ProjectDetails(props: Props) {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
            <Link href={props.link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <Image src={props.img} className="w-full h-auto" alt="Project Picture" width={500} height={500}/>
            </Link>

            <div className="w-full flex flex-col items-start justify-between pt-4">
                <span className="text-primary font-medium text-xl">{props.type}</span>
                <Link href={props.link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light">{props.title}</h2>
                </Link>
                
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={props.link} target="_blank" className="text-lg font-semibold text-dark dark:text-light"> Visit Project</Link>
                    <Link href={props.github} target="_blank" className="w-8"> <GithubFilled style={{fontSize: "34px", color: "black"}}/></Link>
                </div>
            </div>
        </article>
    );
}