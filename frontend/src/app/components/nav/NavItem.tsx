import Link from 'next/link';

export default function NavItem({ href, alt }: { href: string, alt: string }) {
  return (
    <li>
      <Link href={href} className="flex items-center gap-1.5 px-1 py-3 text-[var(--foreground)] hover:text-[var(--primary)] transition">
        {alt}
      </Link>
    </li>
  );
}