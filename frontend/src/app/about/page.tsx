import { FileUser, BookOpen } from "lucide-react";
import Image from 'next/image';
import { getMarkdownData } from '../utils/getMarkdown';

export default async function AboutPage() {
    const aboutSection = await getMarkdownData('content/about/about.md');
    const historySection = await getMarkdownData('content/about/history.md');

    return (
        <main className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start w-full flex-grow gap-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col px-10 py-10 gap-5 border border-[var(--border)] bg-[var(--card-bg-dark)] rounded-2xl">
                        <div className="mb-3 px-3">
                            <FileUser size={40} />
                        </div>
                        <h1 className="px-3 text-4xl font-bold text-left text-[var(--foreground)]">
                            About Me
                        </h1>
                        <div className="">
                            <article
                                className="prose"
                                dangerouslySetInnerHTML={{ __html: aboutSection }}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="border border-[var(--border)] rounded-2xl h-96">
                        <Image src="/headshot.jpeg" alt="Headshot" width={50} height={50} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="flex flex-col px-10 py-10 gap-5 border border-[var(--border)] bg-[var(--card-bg-dark)] rounded-2xl">
                    <div className="mb-3 px-3">
                        <BookOpen size={40} />
                    </div>
                    <h1 className="px-3 text-4xl font-bold text-left text-[var(--foreground)]">
                        History
                    </h1>
                    <div className="">
                        <article
                            className="prose"
                            dangerouslySetInnerHTML={{ __html: historySection }}
                        />
                    </div>
                </div>
                </div>
                
            </div>

        </main>
    );
}