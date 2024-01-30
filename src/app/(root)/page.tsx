import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0">
                    <div className="flex flex-col justify-center gap-8">
                        <h1 className="h1-bold">
                            Life is an Event. Make it Memorable.
                        </h1>
                        <p className="p-regular-20 md:p-regular-24">
                            Whether you need event registration system, badge
                            printing app, event check-in app, Our event platform
                            offers services and tools to simplify the event
                            management process.
                        </p>
                        <Button
                            asChild
                            className="button w-full sm:w-fit"
                            size="lg"
                        >
                            <Link href="#events">Explore Now</Link>
                        </Button>
                    </div>
                    <Image
                        src="/assets/images/hero.webp"
                        alt="hero"
                        width={1000}
                        height={1000}
                        className="object-contain object-center max-h-[70vh] 2xl:max-h-[50vh] self-center"
                    />
                </div>
            </section>
            <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
                <h2 className="h2-bold">
                    Trasted by <br /> Thousend of Events
                </h2>
                <div className="flex flex-col md:flex-row gap-5">
                    search filter
                </div>
            </section>
        </main>
    );
}
