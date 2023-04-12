import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    className: String,
}

export default function Layout(props: Props) {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light p-32 ${props.className}`}>{props.children}
        </div>
    );
}