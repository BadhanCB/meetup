import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

const MobileNav = () => {
    return (
        <nav className="md:hidden ml-3">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <Image
                        src="/assets/icons/menu.svg"
                        alt="menu toggle icon"
                        width={24}
                        height={24}
                    />
                </SheetTrigger>
                <SheetContent className="md:hidden flex flex-col gap-6 bg-white">
                    <div className="flex items-center gap-3 text-xl">
                        <Image
                            src="/assets/images/logo.svg"
                            alt="Meetup logo"
                            width={38}
                            height={38}
                        />
                        <p>MeetUp</p>
                    </div>
                    <Separator className="border border-gray-50" />
                    <NavItems />
                </SheetContent>
            </Sheet>
        </nav>
    );
};

export default MobileNav;
