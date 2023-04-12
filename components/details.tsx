type Props = {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
}

export default function Details(props: Props) {
    return (
        <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <div>
                <h3 className="capitalize font-bold text-2xl">{props.position}&nbsp;<a target={"_blank"} href={props.companyLink} className="text-primary capitalize">@ {props.company}</a></h3>
                <span className="capitalize font-medium text-dark/75">
                    {props.time} | {props.address}
                </span>
                <p className="font-medium w-full text-lg">
                    {props.work}
                </p>
            </div>

        </li>
    );
}