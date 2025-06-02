import { BriefcaseBusiness } from 'lucide-react';

export default function ExperienceHeader() {
  return (
    <section className="flex flex-col px-10 py-10 gap-5 card bg-[var(--card-bg-dark)] w-full mb-8">
      <div className="mb-3">
        <BriefcaseBusiness size={40} />
      </div>

      <h1 className="text-4xl font-bold text-left text-[var(--foreground)]">
        Experience
      </h1>
      <p className="text-lg">
        Here is a timeline of my professional journey, showcasing the roles I've undertaken and the impact I've made along the way.
      </p>
    </section>
  );
}