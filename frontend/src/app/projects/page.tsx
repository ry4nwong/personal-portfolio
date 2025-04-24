import Link from 'next/link'

interface Project {
  title: string
  slug: string
  start_date: string
  end_date: string
  header: string
  github_url: string
}

export default async function ProjectPage() {
  const res = await fetch('http://localhost:8000/api/projects/')

  if (!res.ok) {
    return <div>Failed to load projects</div>
  }

  const projects: Project[] = await res.json()

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}