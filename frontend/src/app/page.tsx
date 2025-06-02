import Link from 'next/link';
import Image from 'next/image';
import IntroSection from './components/home/IntroSection';
import LogoCarousel from './components/home/LogoCarousel';
import HevyCard from './components/home/HevyCard';
import ExperienceSection from './components/home/ExperienceSection';
import ContactSection from './components/home/ContactSection';
import ProjectSection from './components/home/ProjectSection';
import MainLinksSection from './components/home/MainLinkSection';
import SecondaryLinkSection from './components/home/SecondaryLinkSection';

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center w-full">
      {/* Outer grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start w-full flex-grow mb-10 gap-8">
        {/* Left side grid */}
        <div className="grid grid-cols-1 gap-8">
          <IntroSection />

          {/* Embedded Spotify Song */}
          <iframe 
            src="https://open.spotify.com/embed/track/4Ug4rZBHDvh8pEfdl1i8H9?utm_source=generator" 
            width="100%" 
            height="152" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy" 
          />

          <ExperienceSection />


          <section className="card dark-gradient px-10 pt-10 pb-5">
            <LogoCarousel />
            <p className="text-lg font-semibold mt-8 pt-4 px-8 border-t border-[var(--muted)]">My Tech Stack</p>
          </section>

          <ContactSection />
        </div>

        {/* Right side grid */}
        <div className="grid grid-cols-1 gap-8">
          <div className="flex justify-between w-full gap-8">
            {/* Avatar w/ background */}
            <section className="card accent-gradient bg-[var(--card-bg)] py-10 w-full flex justify-center">
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={20}
                height={20}
                quality={100}
                className="w-70 h-70 object-contain"
              />
            </section>

            <MainLinksSection />
          </div>

          {/* Personal quote */}
          <section className="py-15 px-15 card bg-[var(--card-bg-dark)]">
            <p className="text-lg leading-relaxed">
              "I’ve always loved exploring ways to bridge my personal passions, whether it’s music or fitness, with software engineering; this website is a reflection of that intersection. 
              This serves as a space to showcase my experience, document creative side projects, and share the hobbies that inspire me."
            </p>
          </section>

          <div className="flex justify-between w-full gap-8">
            <SecondaryLinkSection />
            <HevyCard />
          </div>

          <ProjectSection />
        </div>
      </div>
    </main >
  );
}