import projects from '@/data/projects/projects.json';
import ProjectListItem from '../components/projects/ProjectListItem';
import ProjectHeader from '../components/projects/ProjectHeader';

export default async function ProjectPage() {
  return (
    <main className="mx-auto">
      <ProjectHeader />


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {projects.map((project, index) => (
          <ProjectListItem key={index} project={project} />
        ))}
      </div>
    </main>
  );
}
