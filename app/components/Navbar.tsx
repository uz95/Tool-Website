export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">
        <a href="/" className="text-xl font-bold">
          QuickToolsHub
        </a>

        <div className="flex gap-5 text-sm text-slate-300">
          <a href="/" className="hover:text-cyan-400">
            Home
          </a>
          <a href="/tools" className="hover:text-cyan-400">
            Tools
          </a>
          <a href="/about" className="hover:text-cyan-400">
            About
          </a>
          <a href="/blog" className="hover:text-cyan-400">
  Blog
</a>
          <a href="/contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}