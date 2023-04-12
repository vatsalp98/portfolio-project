import Link from "next/link";
import Layout from "./layout";

export default function Footer() {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
            <Layout className={"py-8 flex items-center justify-between"}>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center">
                    Vatsaal D. Parmar
                </div>
                
            </Layout>
        </footer>
    );
}