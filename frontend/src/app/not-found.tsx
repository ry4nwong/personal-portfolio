import AnimatedButton from "./components/home/animated-button";

export default function NotFound() {
    return (
      <main className="flex flex-col items-center justify-center mt-80 text-center px-4">
        <h1 className="text-6xl font-bold mb-4 text-[var(--foreground)]">404</h1>
        <p className="text-xl text-[var(--muted)] mb-6">Sorry! The page you're looking for doesn't exist.</p>
        <AnimatedButton href="/" text="Go Home --->" />
      </main>
    );
  }