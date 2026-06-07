"use client";

import { useState } from "react";

const bioTemplates: Record<string, string[]> = {
  professional: [
    "I am a {role} passionate about {interest}. I help people and businesses grow through creative ideas, practical solutions, and consistent work.",
    "{role} focused on {interest}. I enjoy solving problems, learning new skills, and building meaningful projects.",
    "Hi, I’m a {role} with a strong interest in {interest}. I create value through dedication, creativity, and continuous improvement.",
  ],
  instagram: [
    "{role} | Lover of {interest} ✨\nCreating, learning, and growing every day.",
    "Living life with passion for {interest} 🌟\n{role} | Dream big. Work hard.",
    "{role} sharing my journey in {interest} 🚀\nFollow along for ideas, stories, and inspiration.",
  ],
  linkedin: [
    "I am a {role} with experience and interest in {interest}. I enjoy working on meaningful projects, learning continuously, and connecting with people in my field.",
    "As a {role}, I am passionate about {interest} and focused on building practical solutions, growing professionally, and creating long-term value.",
    "{role} passionate about {interest}. I believe in continuous learning, strong communication, and results-driven work.",
  ],
  short: [
    "{role} passionate about {interest}.",
    "{role} | Interested in {interest}.",
    "Creative {role} focused on {interest}.",
  ],
};

const relatedTools = [
  {
    title: "AI Caption Generator",
    description: "Generate captions for Instagram, business, travel, and more.",
    href: "/tools/ai-caption-generator",
  },
  {
    title: "Word Counter",
    description: "Count words and characters for your bio.",
    href: "/tools/word-counter",
  },
  {
    title: "YouTube Money Calculator",
    description: "Estimate creator earnings from YouTube views.",
    href: "/tools/youtube-money-calculator",
  },
  {
    title: "Image Tools",
    description: "Edit and optimize images for your social profiles.",
    href: "/tools/image-tools",
  },
];

export default function AIBioGeneratorClient() {
  const [role, setRole] = useState("");
  const [interest, setInterest] = useState("");
  const [style, setStyle] = useState("professional");
  const [bios, setBios] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  function generateBios() {
    if (!role.trim() || !interest.trim()) {
      setBios(["Please enter your role and interest."]);
      return;
    }

    const templates = bioTemplates[style];

    const generated = templates.map((template) =>
      template
        .replaceAll("{role}", role.trim())
        .replaceAll("{interest}", interest.trim())
    );

    setBios(generated);
    setCopiedIndex(null);
  }

  function clearAll() {
    setRole("");
    setInterest("");
    setStyle("professional");
    setBios([]);
    setCopiedIndex(null);
  }

  function copyBio(bio: string, index: number) {
    navigator.clipboard.writeText(bio);
    setCopiedIndex(index);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools/ai-tools" className="text-cyan-400">
          ← Back to AI Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          AI Bio Generator Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Generate Instagram bios, LinkedIn summaries, professional bios, short
          personal bios, and portfolio profile descriptions for free. Enter your
          role, niche, or interest and create ready-to-copy bio ideas instantly.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Your Role or Profession
          </label>

          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Example: Web Developer, Student, Designer, Entrepreneur"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <label className="mt-5 block text-sm font-medium text-slate-300">
            Interest, Niche, or Topic
          </label>

          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Example: AI tools, fitness, startups, travel, marketing"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <label className="mt-5 block text-sm font-medium text-slate-300">
            Bio Style
          </label>

          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          >
            <option value="professional">Professional Bio</option>
            <option value="instagram">Instagram Bio</option>
            <option value="linkedin">LinkedIn Bio</option>
            <option value="short">Short Bio</option>
          </select>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={generateBios}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Generate Bio
            </button>

            <button
              onClick={clearAll}
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Clear All
            </button>
          </div>

          {bios.length > 0 && (
            <div className="mt-8 space-y-4">
              {bios.map((bio, index) => (
                <div key={index} className="rounded-xl bg-slate-950 p-5">
                  <p className="whitespace-pre-line text-slate-300">{bio}</p>

                  {!bio.startsWith("Please") && (
                    <button
                      onClick={() => copyBio(bio, index)}
                      className="mt-4 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-800"
                    >
                      {copiedIndex === index ? "Copied!" : "Copy Bio"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free AI Bio Generator for Instagram, LinkedIn and Professional Profiles
          </h2>

          <p className="mt-4 text-slate-300">
            This free AI bio generator helps you create short, clear, and
            professional profile bios for Instagram, LinkedIn, personal
            websites, resumes, portfolios, freelancer profiles, business pages,
            and social media accounts.
          </p>

          <p className="mt-4 text-slate-300">
            A good bio should explain who you are, what you do, and what you are
            interested in. Instead of starting from a blank page, you can use
            this tool to generate bio ideas based on your role and niche, then
            edit the result to match your personality or brand.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            How to Generate a Bio Online
          </h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Enter your role, profession, or identity.</li>
            <li>Enter your interest, niche, topic, or industry.</li>
            <li>Select a bio style such as Instagram, LinkedIn, or professional.</li>
            <li>Click the Generate Bio button.</li>
            <li>Copy your favorite bio and customize it if needed.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Where Can You Use Generated Bios?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Instagram profile bio</li>
            <li>• LinkedIn headline or summary</li>
            <li>• Personal website about section</li>
            <li>• Resume profile summary</li>
            <li>• Freelancer profile or portfolio intro</li>
            <li>• Creator profile, business page, or social media account</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Tips for Writing a Better Bio
          </h2>

          <p className="mt-4 text-slate-300">
            To make your bio more effective, keep it specific, simple, and
            relevant to your audience. Mention your role, your main interest,
            and the value you provide. For professional platforms like LinkedIn,
            use a clear and confident tone. For Instagram or creator profiles,
            use a more personal and friendly tone.
          </p>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Keep your bio short and easy to read</li>
            <li>• Mention your role or profession clearly</li>
            <li>• Include your niche, passion, or area of focus</li>
            <li>• Use a tone that matches the platform</li>
            <li>• Add personality for social media profiles</li>
            <li>• Edit the generated bio so it sounds natural</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Related Tools</h2>

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
              <h3 className="font-semibold">What is an AI bio generator?</h3>
              <p className="mt-2 text-slate-300">
                An AI bio generator creates profile bio ideas based on your role,
                niche, and preferred style.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this AI bio generator free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this tool is free to use and does not require registration.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I generate Instagram bios?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can generate Instagram bios, short bios, personal bios,
                LinkedIn bios, and professional profile bios.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I use this for LinkedIn?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can use the generated text as a LinkedIn summary,
                professional bio, resume intro, or portfolio description.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Should I edit the generated bio?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, editing the result is recommended so your bio sounds more
                personal, natural, and specific to you.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}