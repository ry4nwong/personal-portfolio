import Link from 'next/link';
import { NotebookPen } from 'lucide-react';
import FormattedDate from '../components/FormattedDate';
import projects from '@/data/projects/projects.json';

export default async function ProjectPage() {
  return (
    <main className="mx-auto">
      <div className="flex flex-col px-10 py-10 gap-5 border border-[var(--border)] bg-[var(--card-bg-dark)] rounded-2xl mb-10">
        <div className="mb-3">
          <NotebookPen size={40} />
        </div>
        <h1 className="text-4xl font-bold text-left text-[var(--foreground)]">
          Projects
        </h1>
        <p className="text-lg">
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
          , or click to view the project!
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6 hover:shadow-lg transition"
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
