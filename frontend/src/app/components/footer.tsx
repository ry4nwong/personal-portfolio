import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="flex mt-10 flex-col lg:flex-row justify-between gap-5 border-t border-[var(--border)] bg-[var(--background)] py-10 md:px-30 2xl:px-60 px-10 text-md text-[var(--muted)]">
            <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-4">
                    {/* <p className="text-lg mb-2">Connect With Me</p> */}
                    <Link href="https://github.com/ry4nwong" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Github
                    </Link>
                    /
                    <Link href="https://www.linkedin.com/in/ryanwong20" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        LinkedIn
                    </Link>
                    /
                    <Link href="mailto:rnwong2002@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        rnwong2002@gmail.com
                    </Link>
                    /
                    <Link href="https://drive.google.com/file/d/1xDRXq2o68mmNy1MQDTfWUh9jEivKzP7S/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Resume
                    </Link>
                </div>
                <p className="text-sm">© {new Date().getFullYear()} Ryan Wong. All rights reserved.</p>
            </div>
            <div className="flex flex-col justify-between gap-4">
                <p className="text-md">Built With</p>
                <div className="flex flex-row gap-2">
                    <button
                        type="button"
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] text-sm font-bold"
                    >
                        <Image
                            src="/logos/nextjs.svg"
                            alt="Next.js"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                        Next.js
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] text-sm font-bold"
                    >
                        <Image
                            src="/logos/django.svg"
                            alt="Django.js"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                        Django
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] text-sm font-bold"
                    >
                        <Image
                            src="/logos/postgresql.svg"
                            alt="PostgreSQL"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                        PostgreSQL
                    </button>
                </div>
            </div>

        </footer>
    );
}