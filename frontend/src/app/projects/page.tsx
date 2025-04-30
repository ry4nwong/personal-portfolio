import Link from 'next/link'
import { formatDate } from '../utils/formatDate'

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

	return (
		<div className="max-w-5xl mx-auto px-10 py-10">
			<h1 className="text-4xl font-bold text-left pb-4 text-[var(--foreground)]">
        Projects
			</h1>
			<p className="text-lg pb-8 text-[var(--secondary)]">
        Some of the projects I have worked on, including a rave/festival recommendation chatbot and a fitness tracking application. 
        You can find the source code for most of them on my GitHub, or click the link to view the project!
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<Link
						key={project.slug}
						href={`/projects/${project.slug}`}
						className="block bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6 hover:shadow-lg transition"
					>
						<h2 className="text-xl font-semibold text-[var(--primary)] mb-2">
							{project.title}
						</h2>
						<p className="text-sm text-[var(--muted)] mb-1">
							{formatDate(project.start_date)} – {project.end_date ? formatDate(project.end_date) : 'Present'}
						</p>
						<p className="text-[var(--foreground)]">{project.header}</p>
					</Link>
				))}
			</div>
		</div>
	)
}
