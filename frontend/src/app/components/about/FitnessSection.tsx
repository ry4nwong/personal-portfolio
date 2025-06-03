import { BicepsFlexed } from "lucide-react";
import { getMarkdownData } from "@/app/utils/getMarkdown";

export default async function FitnessSection() {
    const description = await getMarkdownData("src/data/about/fitness.md");

    return (
        <section className="flex flex-col px-10 py-10 gap-5 card bg-[var(--card-bg-dark)]">
            <div className="mb-3 px-3">
                <BicepsFlexed size={40} />
            </div>
            <h1 className="px-3 text-4xl font-bold text-left text-[var(--foreground)]">
                Fitness
            </h1>
            <article
                className="prose"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </section>
    );
}