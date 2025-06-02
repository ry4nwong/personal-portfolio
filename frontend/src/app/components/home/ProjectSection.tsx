import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import FormattedDate from '../FormattedDate';

export default function ProjectSection() {
  return (
    <section className="flex flex-col gap-8 py-5">
      <Link href="/projects" className="flex justify-between w-full px-5 hover:underline">
        <h2 className="text-4xl font-semibold mb-2">
          Featured Projects
        </h2>
        <ArrowUpRight />
      </Link>

      <Link
        href="/projects/festival-recommender"
        className="block bg-[var(--card-bg)] card p-10 hover:shadow-lg transition"
      >
        <h2 className="text-xl font-semibold text-[var(--primary)] mb-1">
          Festival Recommender
        </h2>
        <FormattedDate
          start="October 2024"
          end="Present"
          className="text-sm text-[var(--muted)] mb-2"
        />
        <p className="text-[var(--foreground)]">An AI-backed festival recommendation chatbot I am currently building!</p>
      </Link>

      <Link
        href="/projects/festival-recommender"
        className="block bg-[var(--card-bg)] card p-10 hover:shadow-lg transition"
      >
        <h2 className="text-xl font-semibold text-[var(--primary)] mb-1">
          Gainz
        </h2>
        <FormattedDate
          start="July 2024"
          end="October 2024"
          className="text-sm text-[var(--muted)] mb-2"
        />
        <p className="text-[var(--foreground)]">Application for logging and tracking workouts to keep you accountable.</p>
      </Link>
    </section>
  );
}