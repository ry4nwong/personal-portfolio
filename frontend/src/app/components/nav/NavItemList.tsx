import NavItem from './NavItem';

export default function NavItemList({ className }: { className?: string }) {
  return (
    <ul className={className}>
      <NavItem href="/projects" alt="Projects" />
      <NavItem href="/experience" alt="Experience" />
      {/* <NavItem href="/music" src="/music.svg" alt="Music" /> */}
      <NavItem href="/about" alt="About" />
    </ul>
  );
}