import Image from 'next/image';
import FormattedDate from '@/app/components/FormattedDate';
import experiences from '@/app/json/experience.json';
import StackItemList from '@/app/components/StackItemList';
import { getMarkdownData } from '@/app/utils/getMarkdown';

export default async function SlugExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = experiences.find((experience) => experience.slug === slug);

  if (!experience) {
    return <div className="text-center text-red-500 mt-100">Failed to load experience</div>;
  }

  const description = await getMarkdownData(experience.description_url);

  return (
    <main className="mx-auto">
      <div className="border px-10 py-10 card bg-[var(--card-bg-dark)]">
        <div className="mb-8">
          <Image src={experience.icon} alt="Company Logo" width={50} height={50} className="w-30 h-10" />
        </div>
        <h1 className="text-3xl font-semibold text-left pb-4 text-[var(--foreground)]">
          {experience.title}
        </h1>
        <FormattedDate
          start={experience.start_date}
          end={experience.end_date}
          className="mb-8 text-sm text-[var(--muted)]"
        />

        <StackItemList stack={experience.stack} />
      </div>

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </main>
  );
}  