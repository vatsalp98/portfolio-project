import { GithubFilled } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

type Props = {
    type: string;
    title: string;
    summary: string;
    img: string;
    link: string;
    github: string;
}

export default function FeaturedProject(props: Props) {
    return (
        <article className="w-full flex items-center rounded-br-2xl justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <Link href={props.link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <Image src={props.img} className="w-full h-auto" alt="Project Picture" width={500} height={500}/>
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                <span className="text-primary font-medium text-xl">{props.type}</span>
                <Link href={props.link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light">{props.title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark">{props.summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={props.github} target="_blank" className="w-10"> <GithubFilled style={{fontSize: "34px", color: "black"}}/></Link>
                    <Link href={props.link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark duration-75 border-transparent hover:border-dark border-2"> Visit Project</Link>
                </div>
            </div>
        </article>
    );
}