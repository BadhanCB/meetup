import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="border-t">
            <div className="flex-center wrapper w-full flex-between flex flex-col gap-4 p-5 text-center md:flex-row md:justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-3 text-xl md:min-w-max"
                >
                    <Image
                        src="/assets/images/logo.svg"
                        alt="Meetup logo"
                        width={38}
                        height={38}
                    />
                    <p>MeetUp</p>
                </Link>
                <p>{new Date().getFullYear()} . All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
