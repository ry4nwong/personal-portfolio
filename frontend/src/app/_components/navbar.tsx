import Link from "next/link";

export default function NavBar() {
    return (
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/about">About</Link></li>
            <li>Light/Dark Mode</li>
            <li><Link href="https://github.com/ry4nwong">Github</Link></li>
            <li><Link href="https://www.linkedin.com/in/ryanwong20">LinkedIn</Link></li>
          </ul>
        </nav>
    )
}