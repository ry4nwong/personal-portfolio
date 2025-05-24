import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import FormattedDate from '@/app/components/FormattedDate'

interface StackItem {
  name: string
  icon: string
}

interface Experience {
  title: string
  company: string
  slug: string
  icon: string
  start_date: string
  end_date: string
  header: string
  stack: StackItem[]
  description: string
}

export default async function SlugExperiencePage({ params, }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const res = await fetch(`http://localhost:8000/api/experience/${slug}`)

  const experience: Experience = await res.json()

  return (
    <main className="max-w-5xl mx-auto px-10 py-10 bg-[var(--background)] mt-20">
      <div className='flex flex-col'>
        <Image src={experience.icon} alt="Company Logo" width={50} height={50} className="w-50 h-30" />
        <h1 className="text-3xl font-semibold text-left pb-4 text-[var(--foreground)]">
          {experience.title}
        </h1>
      </div>
      <FormattedDate
        start={experience.start_date}
        end={experience.end_date}
        className="mb-8 text-sm text-[var(--muted)]"
      />
      <ul className="flex flex-wrap gap-2 pb-2">
        {experience.stack.map((item: StackItem, index: number) => (
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
      <div className="prose prose-lg max-w-none leading-relaxed">
        <ReactMarkdown remarkPlugins={[[remarkGfm, { breaks: true }]]}>{experience.description}</ReactMarkdown>
      </div>
    </main>
  )
}  