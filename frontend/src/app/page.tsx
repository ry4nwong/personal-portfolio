import Link from 'next/link'
import Image from 'next/image';
import AnimatedButton from './components/AnimatedButton';

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center px-10">
//       <h2 className="text-5xl font-bold mt-20 mb-10">
//         Hi, I'm Ryan!
//       </h2>
//       <p className="text-lg text-center max-w-2xl text-[var(--foreground)] mb-10">
//         I am a software engineer with a passion for building things from 0-1.
//         Feel free to explore my page, or get in touch with me!
//       </p>
//       <div className="flex items-center">
//         <ul className="flex items-center gap-10">
//           <li>
//             <AnimatedButton href="/projects" text="My Projects --->" />
//           </li>
//           <li>
//             <AnimatedButton href="/experience" text="Let's Connect --->" />
//           </li>
//         </ul>
//       </div>
//     </main>
//   );
// }

export default function Home() {
  return (
    <main className="">
      <div className="min-h-screen flex flex-col flex-1 items-center justify-between bg-[url('/background.png')] bg-cover w-full pt-25">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl flex-grow lg:-mt-40 px-20 2xl:px-0 py-20 lg:py-0">
          <div className="flex-1 text-center">
            <h2 className="text-7xl font-bold mb-20 leading-tight typewriter">
              Hi, I'm Ryan!
            </h2>
            <p className="text-lg max-w-2xl text-[var(--foreground)] max-w-2xl mb-15 mx-auto lg:mx-0">
              I am a software engineer with a passion for building things from 0-1.
              Feel free to explore my page, or get in touch with me!
            </p>
            <ul className="flex items-center gap-15 justify-center">
              <li>
                <AnimatedButton href="/projects" text="My Projects --->" />
              </li>
              <li>
                <AnimatedButton href="/experience" text="Let's Connect --->" />
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
        <div className="mb-20">
          <Link href="#about">
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

      <section id="about">
        <div className="flex flex-col mb-30 px-15 py-20 bg-[#004aad]">
          <h2 className="text-5xl font-bold mb-10">
            About Me
          </h2>
          <p className="text-lg text-left max-w-2xl text-[var(--foreground)] mb-10">
            My journey into software began in high school, when I built a website for my car detailing business to support local families during COVID-19.
            That experience sparked my passion for designing user-focused applications and solving real business problems.
            I went on to study Computer Science at UC San Diego and interned at Sephora and Intuit.
            Now, I’m actively exploring full-time opportunities!
          </p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end mt-10 ">
          <img
            src="/dark-cad.png"
            alt="Ryan Wong"
            className="w-90 h-90 object-cover rounded-full border-4 border-[var(--border)]"
          />
        </div>
      </section>
    </main>
  );
}