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

export default function AIBioGeneratorPage() {
  const [role, setRole] = useState("");
  const [interest, setInterest] = useState("");
  const [style, setStyle] = useState("professional");
  const [bios, setBios] = useState<string[]>([]);

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
  }

  function copyBio(bio: string) {
    navigator.clipboard.writeText(bio);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">AI Bio Generator</h1>

        <p className="mt-4 text-slate-300">
          Generate professional bios, Instagram bios, LinkedIn summaries, and
          short personal bios instantly.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Your Role
          </label>

          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Example: Web Developer"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <label className="mt-5 block text-sm font-medium text-slate-300">
            Interest or Niche
          </label>

          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Example: AI tools and startups"
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
            <option value="professional">Professional</option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
            <option value="short">Short Bio</option>
          </select>

          <button
            onClick={generateBios}
            className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Generate Bio
          </button>

          {bios.length > 0 && (
            <div className="mt-8 space-y-4">
              {bios.map((bio, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-slate-950 p-5"
                >
                  <p className="whitespace-pre-line text-slate-300">
                    {bio}
                  </p>

                  {!bio.startsWith("Please") && (
                    <button
                      onClick={() => copyBio(bio)}
                      className="mt-4 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-800"
                    >
                      Copy
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">What is an AI Bio Generator?</h2>

          <p className="mt-4 text-slate-300">
            An AI bio generator helps you quickly create personal bios for
            social media profiles, websites, portfolios, resumes, and
            professional platforms.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Where Can You Use These Bios?</h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Instagram profile bio</li>
            <li>• LinkedIn summary</li>
            <li>• Personal website</li>
            <li>• Resume profile section</li>
            <li>• Freelancer portfolio</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">Is this AI bio generator free?</h3>
              <p className="mt-2 text-slate-300">
                Yes, this bio generator is free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Can I use this for Instagram?</h3>
              <p className="mt-2 text-slate-300">
                Yes, you can generate Instagram bios, short bios, LinkedIn bios,
                and professional bios.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}