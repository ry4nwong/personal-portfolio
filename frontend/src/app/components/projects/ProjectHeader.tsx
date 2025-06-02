import { NotebookPen } from "lucide-react";

export default function ProjectHeader() {
    return (
        <section className="flex flex-col px-10 py-10 gap-5 card bg-[var(--card-bg-dark)] mb-10">
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
        </section>
    );
}