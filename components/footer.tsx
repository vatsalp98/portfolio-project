import Link from "next/link";
import Layout from "./layout";

export default function Footer() {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
            <Layout className={"py-8 flex items-center justify-between"}>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center">
                    Check out my <Link href="https://github.com/vatsalp98" className="underline underline-offset-2 ml-1 hover:text-primary" target="_blank"> projects</Link>
                </div>
                
            </Layout>
        </footer>
    );
}