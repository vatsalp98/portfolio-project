import { usePathname, useRouter } from "next/navigation";


interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
    toggle: any;
}

export const MobileCustomLink: React.FC<CustomLinkProps> = ({ href, title, className, toggle }) => {
    const pathName = usePathname();
    const router = useRouter();
    
    const handleClick =() =>{
        router.push(href);
        toggle();
    }

    return (
        <button onClick={handleClick} className={`${className} relative group font-semibold text-light dark:text-dark my-2`}>
            {title}
            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${pathName === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </button>
    );
};