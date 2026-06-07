export const metadata = {
  title: "AI Tools - FastWebToolsHub",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/ai-tools",
  },
};

const tools = [
  { title: "AI Bio Generator", href: "/tools/ai-bio-generator" },
  { title: "AI Caption Generator", href: "/tools/ai-caption-generator" },
];

export default function AiToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Free AI Tools</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Generate social media bios, captions, and AI-generated content
          instantly with free online AI tools.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-cyan-400"
            >
              <h2 className="text-xl font-bold">{tool.title}</h2>

              <p className="mt-3 text-sm text-slate-400">
                Open {tool.title}.
              </p>
            </a>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">AI Writing Tools</h2>

          <p className="mt-4 text-slate-300">
            Use artificial intelligence tools to create social media bios,
            captions, content ideas, and creator-focused text quickly.
          </p>
        </section>
      </div>
    </main>
  );
}