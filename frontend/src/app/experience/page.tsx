import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../components/home/animated-button";

export default function ExperiencePage() {
    const experiences = [
        {
            title: "Software Engineer Intern @ Intuit",
            date: "June 2023 - September 2023",
            src: "/intuit.svg",
            description:
                "Built internal tools in React and Django to automate reporting pipelines and reduce manual workflows by 40%.",
            latest: true,
        },
        {
            title: "Software Engineer Intern @ Sephora",
            date: "June 2022 - September 2022",
            src: "/sephora.svg",
            description:
                "Redesigned marketing site in Figma and rebuilt it in Tailwind CSS, improving conversion by 12%.",
        },
    ];

    return (
        <main className="max-w-5xl mx-auto px-15 py-10 mt-20">
            <h1 className="text-4xl font-bold text-left mb-5 text-[var(--foreground)] mb-5">
                Experience
            </h1>
            <p className="text-lg mb-10 text-[var(--secondary)]">
                Here is a timeline of my professional journey, showcasing the roles I've undertaken and the impact I've made along the way.
            </p>
            <ol className="relative border-s-2 border-[var(--muted)] ms-10">
                {experiences.map((exp, idx) => (
                    <li key={idx} className="relative mb-25 ms-6 py-10">
                        <span className="absolute -start-8 top-20 flex items-center justify-center w-3 h-3 rounded-full ring-4 ring-white bg-[var(--primary)]" />
                        <time className="absolute -start-35 top-18 text-md text-[var(--foreground)] w-16 text-right">
                            2023
                        </time>
                        <div className="ml-10 px-10 py-10 border border-[var(--border)] rounded-lg bg-[var(--card-bg)]">
                            <Image
                                src={exp.src}
                                alt="Company Logo"
                                width={50}
                                height={20}
                                className="w-[100px] mb-10"
                            />
                            <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                                {exp.title}
                            </h3>
                            <time className="block mb-6 text-sm text-gray-400 dark:text-gray-500">
                                {exp.date}
                            </time>
                            <p className="mb-10 text-base text-[var(--secondary)]">
                                {exp.description}
                            </p>
                            <Link href="#" className="hover:underline text-[var(--primary)]">
                                View More
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </main>
    );
}