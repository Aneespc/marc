import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo headline-md">MARC FRAMES</Link>
      <div className="navbar-links">
        <Link href="/portfolio" className="nav-link">Portfolio</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}
