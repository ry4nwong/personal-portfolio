import Link from 'next/link';

export default function AnimatedButton({ href, text }: { href: string, text: string }) {
  return (
    <Link href={href}>
      <button className="cursor-pointer relative overflow-hidden rounded-full border border-[var(--border)] bg-[var(--muted)] px-6 py-3 font-bold text-sm group">
        <span className="absolute left-0 top-0 h-full w-0 bg-[var(--hover)] transition-all duration-300 group-hover:w-full"></span>
        <p className="relative group-hover:text-[var(--bg)]">
          {text}
        </p>
      </button>
    </Link>
  );
}