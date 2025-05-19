import Link from "next/link";
import Image from 'next/image';

export default function NavItem({ href, src, alt }: { href: string, src: string, alt: string }) {
    return (
        <li>
            <Link href={href} className="flex items-center gap-1.5 px-1 py-3 text-[var(--foreground)] hover:text-[var(--primary)] transition">
                {/* <Image src={src} alt={alt} width={16} height={16} /> */}
                {alt}
            </Link>
        </li>
    )
}