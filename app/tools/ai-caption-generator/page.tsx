"use client";

import { useState } from "react";

const captionTemplates: Record<string, string[]> = {
  instagram: [
    "Living the moment and loving the journey ✨ #life #inspiration",
    "Small steps, big dreams, and good energy 🚀 #growth #motivation",
    "Creating memories one moment at a time 📸 #vibes #lifestyle",
  ],
  business: [
    "Building better ideas, one step at a time. #business #growth",
    "Success starts with action, consistency, and clear goals. #entrepreneur",
    "Turning ideas into impact through strategy and execution. #startup",
  ],
  travel: [
    "Exploring new places and collecting unforgettable memories 🌍 #travel",
    "Adventure begins where comfort ends ✈️ #wanderlust",
    "New city, new views, new stories. #travelgram",
  ],
  fitness: [
    "Progress is built one workout at a time 💪 #fitness",
    "Strong body, strong mind, strong goals. #health",
    "No excuses, just effort and consistency. #workout",
  ],
  motivational: [
    "Keep going. Your future self will thank you. 🚀 #motivation",
    "Dream big, start small, stay consistent. #success",
    "Every day is a new chance to become better. #growth",
  ],
};

export default function AICaptionGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("instagram");
  const [captions, setCaptions] = useState<string[]>([]);

  function generateCaptions() {
    if (!topic.trim()) {
      setCaptions(["Please enter a topic or keyword."]);
      return;
    }

    const templates = captionTemplates[style];

    const generated = templates.map(
      (caption) => `${caption}\n\nTopic: ${topic.trim()}`
    );

    setCaptions(generated);
  }

  function copyCaption(caption: string) {
    navigator.clipboard.writeText(caption);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">AI Caption Generator</h1>

        <p className="mt-4 text-slate-300">
          Generate captions for Instagram, business posts, travel photos,
          fitness content, and motivational posts.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Topic or Keyword
          </label>

          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Example: morning coffee, gym progress, startup journey"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <label className="mt-5 block text-sm font-medium text-slate-300">
            Caption Style
          </label>

          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          >
            <option value="instagram">Instagram</option>
            <option value="business">Business</option>
            <option value="travel">Travel</option>
            <option value="fitness">Fitness</option>
            <option value="motivational">Motivational</option>
          </select>

          <button
            onClick={generateCaptions}
            className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Generate Captions
          </button>

          {captions.length > 0 && (
            <div className="mt-8 space-y-4">
              {captions.map((caption, index) => (
                <div key={index} className="rounded-xl bg-slate-950 p-5">
                  <p className="whitespace-pre-line text-slate-300">
                    {caption}
                  </p>

                  {!caption.startsWith("Please") && (
                    <button
                      onClick={() => copyCaption(caption)}
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
          <h2 className="text-2xl font-bold">
            What is an AI Caption Generator?
          </h2>

          <p className="mt-4 text-slate-300">
            An AI caption generator helps you create post captions for social
            media, business pages, Instagram photos, reels, and online content.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Caption Ideas for Social Media</h2>

          <p className="mt-4 text-slate-300">
            Captions help make your posts more engaging. A good caption can
            explain your post, add personality, improve engagement, and include
            useful hashtags.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                Is this AI caption generator free?
              </h3>

              <p className="mt-2 text-slate-300">
                Yes, this caption generator is free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I use these captions for Instagram?
              </h3>

              <p className="mt-2 text-slate-300">
                Yes, you can use these captions for Instagram posts, reels,
                Facebook posts, TikTok captions, and other social media.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}