import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="border-b border-[var(--border)] py-4 px-6 flex justify-between items-center font-bold">
			<div>
				<Link href="/" className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--primary)] transition">
					<img src="/computer.svg" alt="Home" className="w-6 h-6" />
          Ryan Wong
				</Link>
			</div>
			<ul className="flex flex-nowrap gap-4 items-center list-none justify-end">
				<li>
					<Link href="/projects" className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--primary)] transition">
						<img src="/hammer.svg" alt="Projects" className="w-5 h-5" />
            Projects
					</Link>
				</li>

				<li>
					<Link href="/music" className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--primary)] transition">
						<img src="/music.svg" alt="Music" className="w-5 h-5" />
            DJ/Music
					</Link>
				</li>

				<li>
					<Link href="/about" className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--primary)] transition">
						<img src="/engineer.svg" alt="About" className="w-5 h-5" />
            About
					</Link>
				</li>

				<li className="flex items-center cursor-pointer transition">
					<img src="/theme.svg" alt="Theme" className="w-6 h-6" />
				</li>

				<li>
					<Link href="https://github.com/ry4nwong" target="_blank" className="flex items-center transition" rel="noopener noreferrer">
						<img src="/github.svg" alt="GitHub" className="w-6 h-6" />
					</Link>
				</li>

				<li>
					<Link href="https://www.linkedin.com/in/ryanwong20" target="_blank" className="flex items-center transition" rel="noopener noreferrer">
						<img src="/linkedin.svg" alt="LinkedIn" className="w-7 h-7" />
					</Link>
				</li>

			</ul>
		</nav>
	)
}