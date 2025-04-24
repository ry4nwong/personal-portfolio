import Link from 'next/link'

interface StackItem {
    name: string
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
        <div>
            <h1>Project: {project.title}</h1>
            <h2>{project.start_date} - {project.end_date !== null ? project.end_date : "Present"}</h2>
            <h2>Stack:</h2>
            <ul>
                {project.stack.map((item: StackItem, index: number) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
            <p>Long description: {project.description}</p>
            {project.github_url && (
                <Link href={project.github_url}>GitHub</Link>
            )}
        </div>
    )
}  