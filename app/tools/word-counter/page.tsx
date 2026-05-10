"use client";

import { useMemo, useState } from "react";

export default function WordCounterPage() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed ? trimmed.split(/\s+/).length : 0;

    const characters = text.length;

    const spaces = (text.match(/ /g) || []).length;

    const sentences = trimmed
      ? trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
      : 0;

    const paragraphs = trimmed
      ? trimmed.split(/\n+/).filter((p) => p.trim().length > 0).length
      : 0;

    return {
      words,
      characters,
      spaces,
      sentences,
      paragraphs,
    };
  }, [text]);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">Word Counter</h1>

        <p className="mt-4 text-slate-300">
          Use this free word counter to count words, characters, spaces,
          sentences, and paragraphs instantly.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="min-h-64 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <StatCard label="Words" value={stats.words} />
            <StatCard label="Characters" value={stats.characters} />
            <StatCard label="Spaces" value={stats.spaces} />
            <StatCard label="Sentences" value={stats.sentences} />
            <StatCard label="Paragraphs" value={stats.paragraphs} />
          </div>

          <button
            onClick={() => setText("")}
            className="mt-6 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
          >
            Clear Text
          </button>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">What is a Word Counter?</h2>

          <p className="mt-4 text-slate-300">
            A word counter is a simple online tool that helps you count words,
            characters, spaces, sentences, and paragraphs in your text. It is
            useful for essays, articles, social media posts, SEO content, and
            assignments.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Who Can Use This Tool?</h2>

          <p className="mt-4 text-slate-300">
            Writers, students, bloggers, marketers, freelancers, and content
            creators can use this tool to check text length quickly.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">Is this word counter free?</h3>

              <p className="mt-2 text-slate-300">
                Yes, this online word counter is completely free.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does it count spaces separately?
              </h3>

              <p className="mt-2 text-slate-300">
                Yes, the tool also shows the total number of spaces in your
                text.
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
  value: number;
}) {
  return (
    <div className="rounded-xl bg-slate-950 p-4 text-center">
      <div className="text-2xl font-bold text-cyan-400">{value}</div>

      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </div>
  );
}