"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <nav className="mx-auto max-w-7xl px-6 py-5 text-white">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold">
            FastWebToolsHub
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="/" className="hover:text-cyan-400">
              Home
            </a>
            <a href="/tools" className="hover:text-cyan-400">
              Tools
            </a>
            <a href="/blog" className="hover:text-cyan-400">
              Blog
            </a>
            <a href="/about" className="hover:text-cyan-400">
              About
            </a>
            <a href="/contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-slate-700 px-3 py-2 text-slate-300 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div className="mt-5 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 text-sm text-slate-300 md:hidden">
            <a href="/" className="hover:text-cyan-400">
              Home
            </a>
            <a href="/tools" className="hover:text-cyan-400">
              Tools
            </a>
            <a href="/blog" className="hover:text-cyan-400">
              Blog
            </a>
            <a href="/about" className="hover:text-cyan-400">
              About
            </a>
            <a href="/contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}