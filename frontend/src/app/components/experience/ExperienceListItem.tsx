import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FormattedDate from "../FormattedDate";

type Props = {
    experience: {
        title: string;
        company: string;
        slug: string;
        icon: string;
        start_date: string;
        end_date: string;
        header: string;
        description_url: string;
        stack: string[];
    }
}

export default function ExperienceListItem({ experience }: Props) {
    return (
        <li className="relative mb-15 ms-6 py-5">
            <span className="absolute -start-8 top-20 flex items-center justify-center w-3 h-3 rounded-full ring-4 ring-white bg-[var(--primary)]" />
            <time className="absolute -start-35 top-16 text-md text-[var(--foreground)] w-16 text-right">
                {experience.start_date}
            </time>
            <div className="ml-10 px-10 py-10 max-w-2xl card bg-[var(--card-bg)]">
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
    );
}