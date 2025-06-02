import Link from "next/link";
import Image from "next/image";

export default function SecondaryLinkSection() {
    return (
        <section className="flex flex-col gap-8 border px-4 py-8 card bg-[var(--card-bg)] items-center">
            <Link 
                href="https://soundcloud.com/fakeoutdubstep" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg"
            >
                <Image src="/logos/soundcloud.svg" alt="SoundCloud" width={60} height={60} />
            </Link>
        </section>
    );
}