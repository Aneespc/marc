import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link href="" className="footer-logo">Marc Frames</Link>
        <div className="footer-links">
          <Link href="https://www.instagram.com/marc.frames_/" className="footer-link">Instagram</Link>
          <Link href="#" className="footer-link">LinkedIn</Link>
          <Link href="#" className="footer-link">Journal</Link>
          <Link href="#" className="footer-link">Contact</Link>
        </div>
        <div className="footer-copyright">
          © 2024 MARC FRAMES. ARCHITECTURES CAPTURING ARCHITECTURE.
        </div>
      </div>
    </footer>
  );
}
