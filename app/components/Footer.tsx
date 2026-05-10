export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-xl font-bold">QuickToolsHub</h2>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              Free online calculators, converters, AI tools, image tools, PDF
              tools, and text utilities.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-300">
            <a href="/tools" className="hover:text-cyan-400">
              Tools
            </a>
            <a href="/about" className="hover:text-cyan-400">
              About
            </a>
            <a href="/contact" className="hover:text-cyan-400">
              Contact
            </a>
            <a href="/privacy-policy" className="hover:text-cyan-400">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-cyan-400">
              Terms
            </a>
          </div>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          © 2026 QuickToolsHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}