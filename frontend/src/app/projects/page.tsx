import Link from 'next/link'
import FormattedDate from '../components/FormattedDate'

interface Project {
  title: string
  slug: string
  start_date: string
  end_date: string
  header: string
  github_url: string
}

export default async function ProjectPage() {
  const res = await fetch('http://localhost:8000/api/projects/', {
    cache: 'no-store',
  });

  if (!res.ok) {
    return <div className="text-center text-red-500">Failed to load projects</div>
  }

  const projects: Project[] = await res.json();
  projects.sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime());

  return (
    <main className="max-w-5xl mx-auto px-15 py-10 mt-20">
      <h1 className="text-4xl font-bold text-left pb-4 text-[var(--foreground)]">
        Projects
      </h1>
      <p className="text-lg pb-8 text-[var(--secondary)]">
        Some of the projects I have worked on, including a rave/festival recommendation chatbot and a fitness tracking application.
        You can find the source code for most of them on my{' '}
        <a
          href="https://github.com/ry4nwong"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[var(--primary)] hover:text-[var(--link-hover)]"
        >
          GitHub
        </a>
        , or click the link to view the project!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-[var(--primary)] mb-1">
              {project.title}
            </h2>
            <FormattedDate
              start={project.start_date}
              end={project.end_date}
              className="text-sm text-[var(--muted)] mb-2"
            />
            <p className="text-[var(--foreground)]">{project.header}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
