type Props = {
    open: boolean;
    className: string;
    onClick: any;
}

export default function HamburgerMenu(props: Props) {
    return (
        <button className={`${props.className}`} onClick={props.onClick}>
            <span className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm ${props.open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${props.open ? 'opacity-0': 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${props.open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
    );
}