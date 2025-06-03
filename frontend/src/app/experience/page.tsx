import ExperienceHeader from '../components/experience/ExperienceHeader';
import ExperienceListItem from '../components/experience/ExperienceListItem';
import experience from '@/app/json/experience.json';

export default async function ExperiencePage() {
  return (
    <main className="mx-auto">
      <ExperienceHeader />

      <ol className="relative border-s-2 border-[var(--muted)] lg:ms-30 ms-20">
        {experience.map((experience, index) => (
          <ExperienceListItem key={index} experience={experience} />
        ))}
      </ol>
    </main>
  );
}