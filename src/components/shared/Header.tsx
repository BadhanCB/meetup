import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header>
            <div className="wrapper flex items-center justify-between border-b">
                {/* Logo with root link */}
                <Link href="/">
                    <div className="flex items-center gap-3 text-2xl">
                        <Image
                            src="/assets/images/logo.svg"
                            alt="Meetup logo"
                            width={50}
                            height={50}
                        />
                        <p>MeetUp</p>
                    </div>
                </Link>

                {/* NAV Items for large device */}
                <SignedIn>
                    <nav className="hidden md:flex-between">
                        <NavItems />
                    </nav>
                </SignedIn>
                {/* Logo */}

                {/* sign in and user management button provided by clerk */}
                <div className="flex items-center">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                        <MobileNav />
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">Sign In</Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    );
};

export default Header;
