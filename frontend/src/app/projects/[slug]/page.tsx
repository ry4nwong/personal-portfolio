import Link from 'next/link';
import FormattedDate from '@/app/components/FormattedDate';
import projects from '@/app/json/projects.json';
import StackItemList from '@/app/components/StackItemList';
import { getMarkdownData } from '@/app/utils/getMarkdown';

export async function generateStaticParams() {
  return [
    { slug: 'cad' },
    { slug: 'personal_portfolio' },
    { slug: 'intake-agent' },
    { slug: 'tick-exchange' },
    { slug: 'festival-recommender' },
    { slug: 'gainz' },
    { slug: 'food-locker' },
  ];
}

export default async function SlugProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <div className="text-center text-red-500 mt-100">Failed to load project</div>;
  }

  const description = await getMarkdownData(`src/data/projects/${slug}.md`);

  return (
    <main className="mx-auto">
      <div className="border px-10 py-10 card bg-[var(--card-bg-dark)]">
        <div className='flex justify-between'>
          <h1 className="text-4xl font-bold text-left pb-4 text-[var(--foreground)]">
            {project.title}
          </h1>
          {project.github_url && (
            <button
              type="button"
              className="px-4 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] text-sm font-bold"
            >
              <Link href={project.github_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                View on GitHub
              </Link>
            </button>
          )}
        </div>

        <FormattedDate
          start={project.start_date}
          end={project.end_date}
          className="mb-8 text-sm text-[var(--muted)]"
        />

        <StackItemList stack={project.stack} />
      </div>

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </main>
  );
}  