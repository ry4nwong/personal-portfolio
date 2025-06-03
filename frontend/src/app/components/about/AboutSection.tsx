import { getMarkdownData } from '@/app/utils/getMarkdown';
import { FileUser } from 'lucide-react';

export default async function AboutSection() {
  const description = await getMarkdownData('/data/about/about.md');

  return (
    <section className="flex flex-col px-10 py-10 gap-5 card bg-[var(--card-bg-dark)]">
      <div className="mb-3 px-3">
        <FileUser size={40} />
      </div>
      <h1 className="px-3 text-4xl font-bold text-left text-[var(--foreground)]">
        About Me
      </h1>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </section>
  );
}