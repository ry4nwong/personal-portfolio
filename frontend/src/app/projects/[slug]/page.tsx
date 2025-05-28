import Link from 'next/link'
import Image from 'next/image'
import FormattedDate from '@/app/components/FormattedDate'
import { getStackDetails } from '@/app/utils/getStackDetails'
import { getMarkdownData } from '@/app/utils/getMarkdown'
import projects from '@/data/projects/projects.json';
import stackItems from '@/data/stackItems.json'

export default async function SlugProjectPage({ params, }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return <div className="text-center text-red-500 mt-100">Failed to load projects</div>;
  }

  const stack = await getStackDetails(project.stack, stackItems);
  const description = await getMarkdownData(project.description_url);

  return (
    <main className="mx-auto">
      <div className="border px-10 py-10 border border-[var(--border)] bg-[var(--card-bg-dark)] rounded-2xl ">
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
        <ul className="flex flex-wrap gap-2 pb-2">
          {stack.map((item, index) => (
            <li key={index}>
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] text-sm font-bold"
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                )}
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </main>
  )
}  