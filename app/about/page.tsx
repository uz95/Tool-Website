export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">About QuickToolsHub</h1>

        <p className="mt-6 text-slate-300">
          QuickToolsHub is a free online tools website built to help users
          complete everyday digital tasks quickly and easily.
        </p>

        <p className="mt-4 text-slate-300">
          We provide calculators, image tools, PDF tools, AI writing tools,
          text utilities, and creator tools that work directly in your browser.
        </p>

        <p className="mt-4 text-slate-300">
          Our goal is to make useful tools simple, fast, and accessible for
          students, creators, freelancers, developers, and everyday users.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What We Offer</h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Free online calculators</li>
            <li>• Image converters and compressors</li>
            <li>• PDF conversion tools</li>
            <li>• AI bio and caption generators</li>
            <li>• Text and productivity utilities</li>
          </ul>
        </section>
      </div>
    </main>
  );
}