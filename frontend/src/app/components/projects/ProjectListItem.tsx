import Link from "next/link";
import FormattedDate from "../FormattedDate";

type Props = {
    project: {
        title: string;
        slug: string;
        start_date: string;
        end_date: string;
        stack: string[];
        header: string;
        description_url: string;
        github_url: string;
    }
}

export default function ProjectListItem({ project }: Props) {
    return (
        <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block bg-[var(--card-bg)] card p-6 hover:shadow-lg transition"
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
    );
}