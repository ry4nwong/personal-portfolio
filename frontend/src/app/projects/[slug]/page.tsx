import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { formatDate } from '@/app/utils/formatDate'

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

export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const res = await fetch(`http://localhost:8000/api/projects/${slug}`)

	const project: Project = await res.json()

	return (
		<div className="max-w-5xl mx-auto px-10 py-10">
			<h1 className="text-4xl font-bold text-left pb-4 text-[var(--foreground)]">
				{project.title}
			</h1>
			<h2 className="pb-8 text-[var(--secondary)]">
				{formatDate(project.start_date)} - {project.end_date !== null ? formatDate(project.end_date) : "Present"}
			</h2>
			<ul className="flex flex-wrap gap-2 pb-2">
				{project.stack.map((item: StackItem, index: number) => (
					<li key={index}>
						<button
							type="button"
							className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] text-sm font-bold"
						>
							{item.icon && (
								<img
									src={item.icon}
									alt={item.name}
									className="w-5 h-5"
								/>
							)}
							{item.name}
						</button>
					</li>
				))}
			</ul>
			<div className="prose prose-lg max-w-none">
				<ReactMarkdown remarkPlugins={[[remarkGfm, { breaks: true }]]}>{project.description}</ReactMarkdown>
			</div>
			{project.github_url && (
				<Link href={project.github_url}>GitHub</Link>
			)}
		</div>
	)
}  