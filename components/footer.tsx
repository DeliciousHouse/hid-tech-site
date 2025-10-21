import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-white">HID Consulting — Technology Division</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Napa, CA — <a href="mailto:bkam@hidconsult.com" className="hover:text-white">bkam@hidconsult.com</a></p>
            <p className="mt-2 text-sm text-[var(--muted)]">Secure, connected, and intelligent environments for homes and small businesses.</p>
          </div>
          <nav aria-label="Footer" className="text-sm text-[var(--muted)]">
            <ul className="space-y-2">
              <li><Link prefetch href="/services" className="hover:text-white">Services</Link></li>
              <li><Link prefetch href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link prefetch href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link prefetch href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </nav>
          <nav aria-label="Legal" className="text-sm text-[var(--muted)]">
            <ul className="space-y-2">
              <li><Link prefetch href="/legal/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link prefetch href="/legal/terms" className="hover:text-white">Terms</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} HID Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


