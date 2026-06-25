"use client";

import { useMemo, useState } from "react";

const relatedTools = [
  {
    title: "AI Bio Generator",
    description: "Generate short bios for profiles and websites.",
    href: "/tools/ai-bio-generator",
  },
  {
    title: "AI Caption Generator",
    description: "Generate captions for social media posts.",
    href: "/tools/ai-caption-generator",
  },
  {
    title: "Percentage Calculator",
    description: "Calculate percentages online.",
    href: "/tools/percentage-calculator",
  },
  {
    title: "All Tools",
    description: "Explore all free online tools.",
    href: "/tools",
  },
];

export default function WordCounterClient() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const spaces = (text.match(/ /g) || []).length;

    const sentences = trimmed
      ? trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
      : 0;

    const paragraphs = trimmed
      ? trimmed.split(/\n+/).filter((p) => p.trim().length > 0).length
      : 0;

    const readingTime = words > 0 ? Math.max(1, Math.ceil(words / 200)) : 0;

    return {
      words,
      characters,
      charactersNoSpaces,
      spaces,
      sentences,
      paragraphs,
      readingTime,
    };
  }, [text]);

  function clearText() {
    setText("");
  }

  function copyText() {
    if (!text) return;
    navigator.clipboard.writeText(text);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Word Counter Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Count words online for free. Paste or type your text to instantly
          count words, characters, characters without spaces, spaces, sentences,
          paragraphs, and estimated reading time. This tool is useful for
          essays, assignments, blog posts, SEO content, social media captions,
          reports, and writing projects.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Type or Paste Your Text
          </label>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here to count words and characters..."
            className="mt-3 min-h-72 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Words" value={stats.words} />
            <StatCard label="Characters" value={stats.characters} />
            <StatCard
              label="Characters No Spaces"
              value={stats.charactersNoSpaces}
            />
            <StatCard label="Spaces" value={stats.spaces} />
            <StatCard label="Sentences" value={stats.sentences} />
            <StatCard label="Paragraphs" value={stats.paragraphs} />
            <StatCard label="Reading Time" value={`${stats.readingTime} min`} />
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={copyText}
              disabled={!text}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Copy Text
            </button>

            <button
              onClick={clearText}
              disabled={!text}
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Clear Text
            </button>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free Online Word Counter Tool
          </h2>

          <p className="mt-4 text-slate-300">
            This free online word counter helps you quickly check the length of
            any text. You can use it as a word count checker, character counter,
            sentence counter, paragraph counter, essay word counter, or blog
            content length checker.
          </p>

          <p className="mt-4 text-slate-300">
            Writers, students, bloggers, marketers, freelancers, teachers, and
            content creators can use this tool to make sure their writing fits a
            required word count, character limit, or content length guideline.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            How to Count Words Online
          </h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Type or paste your text into the text box.</li>
            <li>View the word count and character count instantly.</li>
            <li>Check spaces, sentences, paragraphs, and reading time.</li>
            <li>Copy your text or clear the box to start again.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            What Can You Use This Word Counter For?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Count words in essays and assignments</li>
            <li>• Check character count for social media posts</li>
            <li>• Measure blog post and article length</li>
            <li>• Count words for SEO content and website copy</li>
            <li>• Check paragraph and sentence count</li>
            <li>• Estimate reading time for articles and reports</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Word Count vs Character Count
          </h2>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800">
            <table className="w-full text-left">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-4 py-3">Metric</th>
                  <th className="px-4 py-3">Meaning</th>
                  <th className="px-4 py-3">Common Use</th>
                </tr>
              </thead>

              <tbody className="bg-slate-950 text-slate-300">
                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Word Count
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Total number of words in the text
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Essays, articles, blog posts, assignments
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Character Count
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Total letters, numbers, punctuation, and spaces
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Titles, meta descriptions, captions, bios
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Reading Time
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Estimated time needed to read the text
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Blog posts, reports, articles, newsletters
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Related Writing Tools</h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedTools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-cyan-400"
              >
                <h3 className="font-bold text-cyan-400">{tool.title}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  {tool.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                How do I count words online?
              </h3>
              <p className="mt-2 text-slate-300">
                Paste or type your text into the box and the tool will instantly
                show the total word count.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this word counter free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this online word counter is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does it count characters with spaces?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, the tool counts total characters and also shows spaces
                separately.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I use this for essays?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this word counter is useful for essays, assignments,
                reports, and academic writing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does this tool show reading time?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, it estimates reading time based on about 200 words per
                minute.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is my text uploaded to a server?
              </h3>
              <p className="mt-2 text-slate-300">
                No. Your text is processed directly inside your browser.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) {
  return (
    <div className="rounded-xl bg-slate-950 p-4 text-center">
      <div className="text-2xl font-bold text-cyan-400">{value}</div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </div>
  );
}