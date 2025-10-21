"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" prefetch className="flex items-center gap-2" aria-label="HID Consulting — Technology Division">
              <span className="md:hidden inline-flex">
                <Image src="/brand/logo-mark.svg" alt="HID" width={24} height={24} priority />
              </span>
              <span className="hidden md:inline-flex">
                <Image src="/brand/logo-wordmark.svg" alt="HID Consulting — Technology Division" width={220} height={24} priority />
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--muted)]">
            <Link href="/services" prefetch className="hover:text-white">Services</Link>
            <Link href="/pricing" prefetch className="hover:text-white">Pricing</Link>
            <Link href="/blog" prefetch className="hover:text-white">Blog</Link>
            <Link href="/contact" prefetch className="rounded-md bg-brand px-3 py-1.5 font-medium text-white hover:bg-brand-dark">Contact</Link>
          </nav>
          <button
            aria-label="Toggle navigation"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-[var(--border)] p-2 text-[var(--muted)] hover:text-white"
            onClick={() => setOpen(!open)}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              {open ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 5h14a1 1 0 100-2H3a1 1 0 000 2zm14 4H3a1 1 0 100 2h14a1 1 0 100-2zm0 6H3a1 1 0 100 2h14a1 1 0 100-2z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="md:hidden pb-4" aria-label="Mobile">
            <ul className="grid gap-2 text-sm text-[var(--muted)]">
              <li><Link href="/services" prefetch className="block rounded-md px-3 py-2 hover:bg-[var(--card)] hover:text-white" onClick={() => setOpen(false)}>Services</Link></li>
              <li><Link href="/pricing" prefetch className="block rounded-md px-3 py-2 hover:bg-[var(--card)] hover:text-white" onClick={() => setOpen(false)}>Pricing</Link></li>
              <li><Link href="/blog" prefetch className="block rounded-md px-3 py-2 hover:bg-[var(--card)] hover:text-white" onClick={() => setOpen(false)}>Blog</Link></li>
              <li><Link href="/contact" prefetch className="block rounded-md bg-brand px-3 py-2 font-medium text-white hover:bg-brand-dark" onClick={() => setOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}


