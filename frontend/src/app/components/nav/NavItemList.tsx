import NavItem from './NavItem';

export default function NavItemList({ className }: { className?: string }) {
  return (
    <ul className={className}>
      <NavItem href="/projects" src="/hammer.svg" alt="Projects" />
      <NavItem href="/experience" src="/resume.svg" alt="Experience" />
      {/* <NavItem href="/music" src="/music.svg" alt="Music" /> */}
      <NavItem href="/about" src="/engineer.svg" alt="About" />
    </ul>
  );
}