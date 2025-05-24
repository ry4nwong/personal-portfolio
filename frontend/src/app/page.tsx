'use client'
import Link from 'next/link'
import Image from 'next/image';
import { ArrowUpRight, CircleUser, Mail } from 'lucide-react';
import AnimatedButton from './components/home/animated-button';
import LogoCarousel from './components/home/logo-carousel';
import FormattedDate from './components/FormattedDate';
import { useIsVisible } from './hooks/visibility';
import { useRef } from 'react';

export default function Home() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  return (
    <main className="flex flex-col flex-1 items-center w-full lg:pt-25 pt-15 bg-[var(--background)]">
      <div className="grid grid-cols-2 items-start w-full flex-grow px-5 py-10 mb-10 max-w-6xl gap-5">
        <div className="grid grid-cols-1 gap-5">
          <div className="text-left px-10 py-10 border border-[var(--border)] rounded-2xl">
            <div className="mb-8">
              <CircleUser color='white' size={48} />
            </div>
            <h2 className="text-6xl mb-6 leading-tight">
              Hi, I'm <span className="font-bold">Ryan!</span>
            </h2>
            <p className="text-md text-[var(--foreground)] w-full leading-relaxed">
              Full-stack software engineer based in the <span className="font-bold">Bay Area</span>. Self-proclaimed vibe coder. I love to build cool projects!
            </p>
          </div>

          <div className="border border-[var(--border)] rounded-2xl dark-gradient h-auto px-10 py-10">
            <LogoCarousel />
          </div>

          <iframe src="https://open.spotify.com/embed/track/4Ug4rZBHDvh8pEfdl1i8H9?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />

          <div className="flex flex-col gap-5 py-10 px-10 border border-[var(--border)] rounded-2xl">
            <Link href="/experience" className="flex justify-between w-full px-5 hover:underline">
              <h2 className="text-4xl font-semibold mb-2">
                My Experience
              </h2>
              <ArrowUpRight />
            </Link>
            <div className="flex flex-col gap-3 gradient-bg bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl px-15 py-5">
              <Image
                src="/intuit.svg"
                alt="Intuit"
                width={48}
                height={24}
                className="w-15 h-10"
              />
              <h2 className="text-lg text-[var(--foreground)]">
                Software Engineer Intern at Intuit
              </h2>
              <p className="text-[var(--muted)] text-sm">
                2023
              </p>
            </div>
            <div className="flex flex-col gap-3 gradient-bg bg-[var(--background)] border border-[var(--border)] rounded-2xl px-15 py-5">
              <Image
                src="/sephora.svg"
                alt="Sephora"
                width={48}
                height={24}
                className="w-20 h-10"
              />
              <h2 className="text-lg text-[var(--foreground)]">
                Software Engineer Intern at Sephora
              </h2>
              <p className="text-[var(--muted)] text-sm">
                2022
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 py-10 px-10 border border-[var(--border)] rounded-2xl">
            <div className="flex flex-col gap-2 mb-2">
              <h2 className="text-3xl font-semibold px-4">
                🚀 Contact Me
              </h2>
              <p className="px-5">
                I will respond as soon as possible!
              </p>
            </div>

            <form className="flex flex-col gap-4 w-full max-w-2xl">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="block w-full p-2 border border-[var(--border)] rounded-lg text-base focus:border-blue-500 bg-[var(--card-bg)]"
                  placeholder="Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full p-2 border border-[var(--border)] rounded-lg text-base focus:border-blue-500 bg-[var(--card-bg)]"
                  placeholder="Email"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="block w-full p-2 border border-[var(--border)] rounded-lg text-sm focus:border-blue-500 bg-[var(--card-bg)]"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-2 rounded-lg font-semibold bg-[var(--muted)] transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <div className="flex justify-between w-full gap-5">
            <div className="border border-[var(--border)] rounded-2xl accent-gradient bg-[var(--card-bg)] py-10 w-full flex justify-center">
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={20}
                height={20}
                className="w-70 h-70 object-contain"
              />
            </div>

            <div className="flex flex-col gap-8 border px-4 py-8 border border-[var(--border)] bg-[var(--card-bg)] rounded-2xl items-center">
              <Link href="https://github.com/ry4nwong" target="_blank" rel="noopener noreferrer" className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg">
                <Image src="/logos/github.svg" alt="GitHub" width={50} height={50} />
              </Link>
              <Link href="https://www.linkedin.com/in/ryanwong20" target="_blank" rel="noopener noreferrer" className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg">
                <Image src="/logos/linkedin.svg" alt="LinkedIn" width={60} height={60} />
              </Link>
              <Link href="https://medium.com/@rnwong2002" target="_blank" rel="noopener noreferrer" className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg">
                <Image src="/logos/medium.svg" alt="LinkedIn" width={50} height={50} />
              </Link>
              <Link href="mailto:rnwong2002@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg">
                <Mail size={40} />
              </Link>

            </div>
          </div>

          <div className="flex flex-col border border-[var(--border)] px-10 py-10 rounded-2xl">
            <h2 className="text-4xl font-semibold leading-tight mb-2 text-[var(--secondary)]">
              My Mission
            </h2>

            <p className="text-lg leading-relaxed">
              is to assist businesses in building practical, scalable tools by combining backend systems knowledge, robust API design, and simple, yet effective frontends.
            </p>
          </div>

          <div className="flex flex-row gap-10 border border-[var(--border)] px-10 py-10 rounded-2xl dark-bg">
            <Image src="/logos/hevy.png" alt="LinkedIn" width={50} height={50} className="h-20 w-20 rounded-2xl object-contain" />

            <Link href="https://hevy.com/user/ryanwong" target="_blank" rel="noopener noreferrer" className="flex flex-wrap gap-5 w-full hover:underline py-5">
              <h2 className="text-xl font-semibold">
                Follow My Workout Progress
              </h2>
              <ArrowUpRight />
            </Link>
          </div>

          <div className="flex flex-col gap-5 py-5">
            <Link href="/projects" className="flex justify-between w-full px-5 hover:underline">
              <h2 className="text-4xl font-semibold mb-2">
                Featured Projects
              </h2>
              <ArrowUpRight />
            </Link>

            <Link
              href={`/projects/festival-recommender`}
              className="block bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-10 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-[var(--primary)] mb-1">
                Festival Recommender
              </h2>
              <FormattedDate
                start="2024-10-02"
                end=""
                className="text-sm text-[var(--muted)] mb-2"
              />
              <p className="text-[var(--foreground)]">An AI-backed festival recommendation chatbot I am currently building!</p>
            </Link>

            <Link
              href="/projects/festival-recommender"
              className="block bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-10 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-[var(--primary)] mb-1">
                Gainz
              </h2>
              <FormattedDate
                start="2024-07-02"
                end="2024-10-02"
                className="text-sm text-[var(--muted)] mb-2"
              />
              <p className="text-[var(--foreground)]">Application for logging and tracking workouts to keep you accountable.</p>
            </Link>
          </div>
        </div>
      </div>



      {/* <section id="experience" className="flex justify-center lg:px-10 px-5 pt-25 pb-15 bg-[var(--background)]">
        <div ref={ref2} className={`grid md:grid-cols-2 gap-2 lg:gap-4 max-w-7xl w-full transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
          <div className="flex md:flex-col justify-between px-20 py-10 md:border md:border-[var(--border)] bg-[var(--card-bg)] rounded-2xl">
            <h2 className="text-4xl md:mb-10 font-semibold">
              My Experience
            </h2>
            <AnimatedButton href="/experience" text="View More --->" />
          </div>
          <div className="flex flex-col gap-3 dark-gradient bg-[var(--background)] border border-[var(--border)] rounded-2xl px-15 py-10 h-50">
            <Image
              src="/intuit.svg"
              alt="Intuit"
              width={48}
              height={24}
              className="w-20 h-10"
            />
            <h2 className="text-xl text-[var(--foreground)]">
              Software Engineer Intern at Intuit
            </h2>
            <p className="text-[var(--muted)] text-sm">
              2023
            </p>
          </div>
          <div />
          <div className="flex flex-col gap-3 dark-gradient bg-[var(--background)] border border-[var(--border)] rounded-2xl px-15 py-10 h-50">
            <Image
              src="/sephora.svg"
              alt="Sephora"
              width={48}
              height={24}
              className="w-25 h-10"
            />
            <h2 className="text-xl text-[var(--foreground)]">
              Software Engineer Intern at Sephora
            </h2>
            <p className="text-[var(--muted)] text-sm">
              2022
            </p>
          </div>
        </div>
      </section> */}

      {/* <section id="projects" className="flex justify-center px-10 py-25 bg-[var(--background)]">
        <div ref={ref3} className={`flex flex-row max-w-7xl justify-center transition-opacity ease-in duration-1000 ${isVisible3 ? "opacity-100" : "opacity-0"} self-center`}>
          <div className="flex-col px-5 max-w-sm">
            <h2 className="text-4xl mb-10 font-semibold">
              Featured Projects
            </h2>
            <AnimatedButton href="/projects" text="See All --->" />
          </div>
          <div className="grid lg:grid-cols-2 gap-4 w-full">
            <Link
              href={`/projects/festival-recommender`}
              className="block bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-[var(--primary)] mb-1">
                Festival Recommender
              </h2>
              <FormattedDate
                start="2024-10-02"
                end=""
                className="text-sm text-[var(--muted)] mb-2"
              />
              <p className="text-[var(--foreground)]">An AI-backed festival recommendation chatbot I am currently building!</p>
            </Link>
            <Link
              href={`/projects/festival-recommender`}
              className="block bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-[var(--primary)] mb-1">
                Gainz
              </h2>
              <FormattedDate
                start="2024-07-02"
                end="2024-10-02"
                className="text-sm text-[var(--muted)] mb-2"
              />
              <p className="text-[var(--foreground)]">Application for logging and tracking workouts to keep you accountable.</p>
            </Link>
          </div>
        </div>
      </section> */}

      {/* <section id="connect" className="flex justify-center lg:px-10 py-15 bg-[var(--background)]">
        <div ref={ref4} className={`flex px-20 py-10 w-full items-center justify-between flex-col max-w-7xl border border-[var(--border)] accent-gradient bg-[#000000] lg:rounded-2xl transition-opacity ease-in duration-1000 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-3xl mb-15 font-semibold text-center w-full">
            Let's Connect!
          </h2>
          <div className="flex md:flex-row flex-col gap-5 w-3/4 justify-center">
            <div className="flex flex-row py-2 px-4 gap-2 border border-[var(--border)] rounded-2xl bg-[var(--muted)]">
              <Image
                src="/logos/linkedin.svg"
                alt="LinkedIn"
                width={10}
                height={10}
                className="w-5 h-5"
              />
              <p>Email</p>
            </div>
            <div className="flex flex-row py-2 px-4 gap-2 border border-[var(--border)] rounded-2xl bg-[var(--muted)]">
              <Image
                src="/logos/linkedin.svg"
                alt="LinkedIn"
                width={10}
                height={10}
                className="w-5 h-5"
              />
              <p>LinkedIn</p>
            </div>
            <div className="flex flex-row py-2 px-4 gap-2 border border-[var(--border)] rounded-2xl bg-[var(--muted)]">
              <Image
                src="/logos/github.svg"
                alt="Github"
                width={10}
                height={10}
                className="w-5 h-5"
              />
              <p>Github</p>
            </div>
          </div>
        </div>
      </section> */}
    </main >
  );
}