import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import FormattedDate from '@/app/components/FormattedDate'

interface StackItem {
  name: string
  icon: string
}

interface Project {
  title: string
  slug: string
  start_date: string
  end_date: string
  stack: StackItem[]
  description: string
  github_url: string
}

export default async function SlugProjectPage({ params, }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const res = await fetch(`http://localhost:8000/api/projects/${slug}`)

  const project: Project = await res.json()

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
          {project.stack.map((item: StackItem, index: number) => (
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
      <div className="prose prose-lg max-w-none leading-relaxed px-10">
        <ReactMarkdown remarkPlugins={[[remarkGfm, { breaks: true }]]}>{project.description}</ReactMarkdown>
      </div>
    </main>
  )
}  