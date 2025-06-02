import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col gap-8 py-10 px-10 card bg-[var(--card-bg-dark)]">
      <Link href="/experience" className="flex justify-between w-full px-5 hover:underline">
        <h2 className="text-4xl font-semibold mb-2">
          My Experience
        </h2>
        <ArrowUpRight />
      </Link>

      <Link
        href={"/experience/intuit"}
        className="flex flex-col card bg-[var(--card-bg)] gap-3 px-15 py-8 hover:shadow-lg transition"
      >
        <Image
          src="/intuit.svg"
          alt="Intuit"
          width={48}
          height={24}
          className="w-15 h-5"
        />
        <h2 className="text-lg text-[var(--foreground)]">
          Software Engineer Intern at Intuit
        </h2>
        <p className="text-[var(--muted)] text-sm">
          2023
        </p>
      </Link>


      <Link
        href={"/experience/intuit"}
        className="flex flex-col card bg-[var(--card-bg)] gap-3 px-15 py-8 hover:shadow-lg transition"
      >
        <Image
          src="/sephora.svg"
          alt="Sephora"
          width={48}
          height={24}
          className="w-20 h-5"
        />
        <h2 className="text-lg text-[var(--foreground)]">
          Software Engineer Intern at Sephora
        </h2>
        <p className="text-[var(--muted)] text-sm">
          2022
        </p>
      </Link>
    </section>
  );
}