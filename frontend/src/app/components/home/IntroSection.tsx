import { CircleUser } from "lucide-react";

export default function IntroSection() {
    return (
        <section className="text-left px-10 py-10 card bg-[var(--card-bg-dark)]">
            <div className="mb-8">
                <CircleUser color='white' size={48} />
            </div>
            <h2 className="text-6xl mb-6 leading-tight">
                Hi, I'm <span className="font-bold">Ryan!</span>
            </h2>
            <p className="text-md text-[var(--foreground)] w-full leading-relaxed">
                Full-stack software engineer based in the <span className="font-bold">Bay Area</span>. 
                Self-proclaimed <span className="italic">gym rat</span> and <span className="italic">DJ</span>. 
                I love to build cool things!
            </p>
        </section>
    );
}