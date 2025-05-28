import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, ArrowUpRight } from 'lucide-react';
import FormattedDate from "../components/FormattedDate";
import experience from '@/data/experience/experience.json'

export default async function ExperiencePage() {
    return (
        <main className="mx-auto">
            <div className="flex flex-col px-10 py-10 gap-5 border border-[var(--border)] bg-[var(--card-bg-dark)] rounded-2xl w-full mb-8">
                <div className="mb-3">
                    <BriefcaseBusiness size={40} />
                </div>

                <h1 className="text-4xl font-bold text-left text-[var(--foreground)]">
                    Experience
                </h1>
                <p className="text-lg">
                    Here is a timeline of my professional journey, showcasing the roles I've undertaken and the impact I've made along the way.
                </p>
            </div>

            <ol className="relative border-s-2 border-[var(--muted)] lg:ms-30 ms-20">
                {experience.map((experience, idx) => (
                    <li key={idx} className="relative mb-15 ms-6 py-5">
                        <span className="absolute -start-8 top-20 flex items-center justify-center w-3 h-3 rounded-full ring-4 ring-white bg-[var(--primary)]" />
                        <time className="absolute -start-35 top-16 text-md text-[var(--foreground)] w-16 text-right">
                            {experience.start_date}
                        </time>
                        <div className="ml-10 px-10 py-10 max-w-2xl border border-[var(--border)] rounded-2xl bg-[var(--card-bg)] ">
                            <Image
                                src={experience.icon}
                                alt="Company Logo"
                                width={50}
                                height={20}
                                className="w-[100px] mb-10"
                            />
                            <h3 className="mb-2 text-xl font-semibold text-[var(--foreground)]">
                                {experience.title}
                                <span className="mx-1">at</span>
                                <span className="font-bold">{experience.company}</span>
                            </h3>
                            <FormattedDate start={experience.start_date} end={experience.end_date} className="text-sm text-[var(--muted)] mb-5" />
                            <p className="mb-10 text-base px-1">
                                {experience.header}
                            </p>
                            <Link key={experience.slug} href={`/experience/${experience.slug}`} className="hover:underline flex flex-wrap gap-2">
                                View More
                                <ArrowUpRight size={15} />
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </main>
    );
}