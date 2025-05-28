import Image from 'next/image'
import FormattedDate from '@/app/components/FormattedDate'
import { getStackDetails } from '@/app/utils/getStackDetails'
import { getMarkdownData } from '@/app/utils/getMarkdown'
import experiences from '@/data/experience/experience.json'
import stackItems from '@/data/stackItems.json'

export default async function SlugExperiencePage({ params, }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const experience = experiences.find((experience) => experience.slug === slug)

  if (!experience) {
    return <div className="text-center text-red-500 mt-100">Failed to load experience</div>;
  }

  const stack = await getStackDetails(experience.stack, stackItems);
  const description = await getMarkdownData(experience.description_url);

  return (
    <main className="mx-auto">
      <div className="border px-10 py-10 border border-[var(--border)] bg-[var(--card-bg-dark)] rounded-2xl ">
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