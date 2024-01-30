"use client"
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
    const pathname = usePathname();
    
    return (
        <ul className="flex md:flex-between w-full flex-col md:flex-row items-start md:items-center gap-5">
            {headerLinks.map((link, i) => {
                const isActive = pathname === link.route;

                return (
                    <li
                        key={i + link.label}
                        className={`${
                            isActive && "text-primary-500"
                        } flex-center whitespace-nowrap`}
                    >
                        <Link href={link.route} className="uppercase">
                            {link.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavItems;
