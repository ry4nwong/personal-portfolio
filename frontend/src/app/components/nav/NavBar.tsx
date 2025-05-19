import Link from "next/link";
import Image from 'next/image';
import NavItemList from "./navitemlist";

export default function NavBar() {
  return (
    <nav className="fixed w-full top-0 py-2.5 px-12 bg-[var(--background)] border-b border-[var(--border)] flex justify-between items-center z-50">
      <div>
        <Link href="/" className="flex items-center gap-2 py-2 text-lg text-[var(--foreground)] hover:text-[var(--primary)] font-bold transition">
          {/* <Image src="/computer.svg" alt="Home" width={24} height={24} /> */}
          Ryan Wong
        </Link>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <NavItemList className="hidden md:flex gap-5 list-none" />

        <div className="relative group">
          <button className="md:hidden px-2 py-3 flex items-center transition-transform duration-300" >
            <Image src="/arrow.svg" alt="Menu" width={24} height={24} className="transition-transform duration-300 group-hover:-rotate-90"/>
          </button>
          <div 
            className={`
              absolute mt-1 bg-[var(--background)] rounded-md overflow-hidden
              transition-all duration-300 ease-in-out
              max-h-0 group-hover:max-h-96
            `}
          >
            <NavItemList className="flex flex-col border border-[var(--border)] px-7 py-2 gap-1" />
          </div>
        </div>

        <ul className="flex gap-5 items-center list-none">
          {/* <li className="cursor-pointer">
            <Image src="/theme.svg" alt="Theme" width={24} height={24} />
          </li> */}
          <li>
            <Link href="https://github.com/ry4nwong" target="_blank" rel="noopener noreferrer">
              <Image src="/logos/github.svg" alt="GitHub" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/ryanwong20" target="_blank" rel="noopener noreferrer">
              <Image src="/logos/linkedin.svg" alt="LinkedIn" width={28} height={28} />
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}