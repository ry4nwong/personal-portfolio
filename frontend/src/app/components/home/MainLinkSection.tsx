import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function MainLinkSection() {
    return (
        <section className="flex flex-col gap-8 border px-4 py-8 card bg-[var(--card-bg)] items-center">
            <Link 
                href="https://www.linkedin.com/in/ryanwong20" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg"
            >
                <Image src="/logos/linkedin.svg" alt="LinkedIn" width={65} height={65} />
            </Link>

            <Link 
                href="https://github.com/ry4nwong" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg"
            >
                <Image src="/logos/github.svg" alt="GitHub" width={50} height={50} />
            </Link>

            <Link 
                href="https://medium.com/@rnwong2002" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg"
            >
                <Image src="/logos/medium.svg" alt="LinkedIn" width={50} height={50} />
            </Link>

            <Link 
                href="mailto:rnwong2002@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg"
            >
                <Mail size={40} />
            </Link>
        </section>
    );
}