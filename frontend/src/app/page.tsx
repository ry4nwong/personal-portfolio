import Link from 'next/link'
import Image from 'next/image';
import { ArrowUpRight, CircleUser, Mail } from 'lucide-react';
import LogoCarousel from './components/home/logo-carousel';
import FormattedDate from './components/FormattedDate';

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start w-full flex-grow mb-10 gap-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="text-left px-10 py-10 border border-[var(--border)] bg-[var(--card-bg-dark)] rounded-2xl">
            <div className="mb-8">
              <CircleUser color='white' size={48} />
            </div>
            <h2 className="text-6xl mb-6 leading-tight">
              Hi, I'm <span className="font-bold">Ryan!</span>
            </h2>
            <p className="text-md text-[var(--foreground)] w-full leading-relaxed">
              Full-stack software engineer based in the <span className="font-bold">Bay Area</span>. Self-proclaimed gym rat and DJ. I love to build cool things!
            </p>
          </div>

          <iframe src="https://open.spotify.com/embed/track/4Ug4rZBHDvh8pEfdl1i8H9?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />

          <div className="flex flex-col gap-8 py-10 px-10 border border-[var(--border)] rounded-2xl bg-[var(--card-bg-dark)]">
            <Link href="/experience" className="flex justify-between w-full px-5 hover:underline">
              <h2 className="text-4xl font-semibold mb-2">
                My Experience
              </h2>
              <ArrowUpRight />
            </Link>
            <div className="flex flex-col gap-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl px-15 py-8">
              <Image
                src="/intuit.svg"
                alt="Intuit"
                width={48}
                height={24}
                className="w-15 h-5"
              />
              <h2 className="text-lg text-[var(--foreground)]">
                Software Engineer Intern at Intuit
              </h2>
              <p className="text-[var(--muted)] text-sm">
                2023
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl px-15 py-8">
              <Image
                src="/sephora.svg"
                alt="Sephora"
                width={48}
                height={24}
                className="w-20 h-5"
              />
              <h2 className="text-lg text-[var(--foreground)]">
                Software Engineer Intern at Sephora
              </h2>
              <p className="text-[var(--muted)] text-sm">
                2022
              </p>
            </div>
          </div>

          <div className="border border-[var(--border)] rounded-2xl dark-gradient px-10 py-10">
            <LogoCarousel />
            {/* <p className="text-lg font-semibold mt-10">My Tech Stack</p> */}
          </div>

          {/* <div className="py-15 px-15 border border-[var(--border)] rounded-2xl ">
            <p className="text-lg leading-relaxed">
              "I’ve always loved exploring ways to bridge my personal passions—whether it’s music or fitness—with software engineering, and this site is a reflection of that intersection. 
              This website serves as a space to showcase my experience, document creative side projects, and share the hobbies that inspire me."
            </p>
          </div> */}

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

        <div className="grid grid-cols-1 gap-8">
          <div className="flex justify-between w-full gap-8">
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
              <Link href="https://www.linkedin.com/in/ryanwong20" target="_blank" rel="noopener noreferrer" className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg">
                <Image src="/logos/linkedin.svg" alt="LinkedIn" width={65} height={65} />
              </Link>
              <Link href="https://github.com/ry4nwong" target="_blank" rel="noopener noreferrer" className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg">
                <Image src="/logos/github.svg" alt="GitHub" width={50} height={50} />
              </Link>
              <Link href="https://medium.com/@rnwong2002" target="_blank" rel="noopener noreferrer" className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg">
                <Image src="/logos/medium.svg" alt="LinkedIn" width={50} height={50} />
              </Link>
              <Link href="mailto:rnwong2002@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg">
                <Mail size={40} />
              </Link>

            </div>
          </div>

          <div className="py-15 px-15 border border-[var(--border)] rounded-2xl bg-[var(--card-bg-dark)]">
            <p className="text-lg leading-relaxed">
              "I’ve always loved exploring ways to bridge my personal passions—whether it’s music or fitness—with software engineering, and this site is a reflection of that intersection. 
              This website serves as a space to showcase my experience, document creative side projects, and share the hobbies that inspire me."
            </p>
          </div>

          <div className="flex justify-between w-full gap-8">
            <div className="flex flex-col gap-8 border px-4 py-8 border border-[var(--border)] bg-[var(--card-bg)] rounded-2xl items-center">
              <Link href="https://soundcloud.com/fakeoutdubstep" target="_blank" rel="noopener noreferrer" className="hover:bg-[var(--muted)] px-2 py-2 rounded-lg">
                <Image src="/logos/soundcloud.svg" alt="SoundCloud" width={60} height={60} />
              </Link>
            </div>
            <div className="flex flex-col gap-10 border border-[var(--border)] px-10 py-10 rounded-2xl bg-[#000000] w-full items-center">
              <Image src="/logos/hevy.png" alt="LinkedIn" width={50} height={50} className="h-50 w-50 rounded-2xl object-contain" />

              <Link href="https://hevy.com/user/ryanwong" target="_blank" rel="noopener noreferrer" className="flex flex-wrap justify-center gap-5 w-full hover:underline py-5">
                <h2 className="text-xl font-semibold">
                  Follow My Workout Progress
                </h2>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8 py-5">
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
    </main >
  );
}