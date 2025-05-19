'use client'
import Link from 'next/link'
import Image from 'next/image';
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
    <main className="flex flex-col gap-40">
      <div className="min-h-screen flex flex-col flex-1 items-center justify-between w-full lg:pt-25 pt-10 hero-bg bg-top">
        <div className="flex flex-col max-w-7xl lg:flex-row items-center justify-between w-full flex-grow px-10 2xl:px-0 py-20 lg:py-0 mb-10">
          <div className="flex-1 text-center">
            <h2 className="text-7xl mb-20 leading-tight typewriter">
              Hi, I'm
              <span className="font-bold"> Ryan!</span>
            </h2>

            <p className="text-lg max-w-2xl text-[var(--foreground)] mb-15 mx-auto lg:mx-0">
              A software engineer with a passion for building things from 0-1.
              Feel free to explore my page, or get in touch with me!
            </p>
            <ul className="flex items-center gap-15 justify-center">
              <li>
                <AnimatedButton href="/projects" text="My Projects --->" />
              </li>
              <li>
                <AnimatedButton href="#connect" text="Let's Connect --->" />
              </li>
            </ul>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end mt-10 ">
            <img
              src="/dark-memoji.jpeg"
              alt="Ryan Wong"
              className="w-60 md:w-90 h-60 md:h-90 object-cover rounded-full border-4 border-[var(--border)]"
            />
          </div>
        </div>
        <div className="mb-10">
          <Link href="#mission">
            <Image
              src="/downarrow.svg"
              alt="Arrow Down"
              width={24}
              height={24}
              className="animate-bounce w-8 h-8 text-[var(--foreground)]"
            />
          </Link>
        </div>
      </div>

      <section id="mission" className="flex justify-center lg:px-10">
        <div ref={ref1} className={`flex flex-row px-15 py-15 items-center w-full max-w-7xl border border-[var(--border)] bg-[#2a3b63] lg:rounded-3xl transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col justify-center">
            <p className="md:text-2xl text-xl font-bold leading-relaxed text-[var(--foreground)] mb-10">
              My mission is to assist businesses in building practical, scalable tools by combining backend systems knowledge, robust API design, and simple, yet effective frontends.
            </p>
            <div className="hidden md:block px-10">
              <LogoCarousel />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="flex justify-center lg:px-10 px-5">
        <div ref={ref2} className={`grid md:grid-cols-2 gap-1 lg:gap-4 max-w-7xl w-full transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
          <div className="flex md:flex-col justify-between px-20 py-10 md:border md:border-[var(--border)] md:bg-[#000000] rounded-2xl">
            <h2 className="text-4xl md:mb-10 font-semibold">
              My Experience
            </h2>
            <AnimatedButton href="/experience" text="View More --->" />
          </div>
          <div className="flex flex-col gap-3 bg-[var(--secondary)] border border-[var(--border)] rounded-2xl px-15 py-10 h-50">
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
          <div className="flex flex-col gap-3 bg-[var(--secondary)] border border-[var(--border)] rounded-2xl px-15 py-10 h-50">
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
      </section>

      <section id="projects" ref={ref3} className={`flex flex-row max-w-7xl px-10 transition-opacity ease-in duration-1000 ${isVisible3 ? "opacity-100" : "opacity-0"} self-center`}>
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
      </section>

      <section id="connect" className="flex justify-center mb-30 lg:px-10">
        <div ref={ref4} className={`flex mb-30 px-20 py-10 w-full items-center justify-between flex-row max-w-7xl border border-[var(--border)] bg-[#000000] lg:rounded-3xl transition-opacity ease-in duration-1000 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-3xl mb-10 font-semibold text-center w-full">
            Let's Connect!
          </h2>
          
        </div>
        <div className="flex flex-col">

        </div>
      </section>
    </main>
  );
}