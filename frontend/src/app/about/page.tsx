import { FileUser, BookOpen, ScrollText, BicepsFlexed } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MarkdownComponent from '../components/MarkdownComponent';
import ContactSection from '../components/home/ContactSection';

export default async function AboutPage() {
  return (
    <main className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start w-full flex-grow gap-8">
        <div className="flex flex-col gap-8">
          <section className="flex flex-col px-10 py-10 gap-5 card bg-[var(--card-bg-dark)]">
            <div className="mb-3 px-3">
              <FileUser size={40} />
            </div>
            <h1 className="px-3 text-4xl font-bold text-left text-[var(--foreground)]">
              About Me
            </h1>
            <MarkdownComponent url="src/data/about/about.md" />
          </section>

          <section className="border border-[var(--border)] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/pPIPsNIfYJ8"
              title="Mazda 6 Detailing - Satisfying Auto Detailing!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </section>

          <section className="flex flex-col px-10 py-10 gap-5 card bg-[var(--card-bg-dark)]">
            <div className="mb-3 px-3">
              <BicepsFlexed size={40} />
            </div>
            <h1 className="px-3 text-4xl font-bold text-left text-[var(--foreground)]">
              Fitness
            </h1>
            <MarkdownComponent url="src/data/about/fitness.md" />
          </section>
        </div>

        <div className="flex flex-col gap-8">
          <section className="card h-96">
            <Image
              src="/headshot.jpeg"
              alt="Headshot"
              width={50}
              height={50}
              quality={100}
              className="w-full h-full object-cover rounded-2xl"
            />
          </section>

          <section className="px-10 py-5 card">
            <Link 
              href="https://drive.google.com/file/d/1xDRXq2o68mmNy1MQDTfWUh9jEivKzP7S/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline flex flex-wrap justify-center gap-4 "
            >
              <ScrollText size={25} />
              <h1 className="text-md font-semibold">
                View my Resume
              </h1>
            </Link>

          </section>

          <section className="flex flex-col px-10 py-10 gap-5 card bg-[var(--card-bg-dark)]">
            <div className="mb-3 px-3">
              <BookOpen size={40} />
            </div>
            <h1 className="px-3 text-4xl font-bold text-left text-[var(--foreground)]">
              History
            </h1>
            <MarkdownComponent url="src/data/about/history.md" />
          </section>

          <ContactSection />
        </div>

      </div>

    </main>
  );
}