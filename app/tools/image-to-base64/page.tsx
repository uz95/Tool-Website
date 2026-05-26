"use client";

import { useState } from "react";

export default function ImageToBase64Page() {
  const [base64, setBase64] = useState("");
  const [preview, setPreview] = useState("");

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    setPreview(URL.createObjectURL(file));

    const reader = new FileReader();

    reader.onload = () => {
      setBase64(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  function copyBase64() {
    navigator.clipboard.writeText(base64);
  }

  function clearAll() {
    setBase64("");
    setPreview("");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="text-cyan-400">← Back to Tools</a>

        <h1 className="mt-8 text-4xl font-bold">Image to Base64 Converter</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert JPG, PNG, WEBP, SVG, and other images to Base64 online for
          free. Useful for developers, HTML, CSS, and inline image embedding.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4"
          />

          {preview && (
            <div className="mt-8">
              <h2 className="mb-4 text-xl font-bold">Image Preview</h2>
              <img src={preview} alt="Uploaded image" className="max-h-80 rounded-2xl" />
            </div>
          )}

          {base64 && (
            <>
              <textarea
                value={base64}
                readOnly
                className="mt-8 h-64 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300"
              />

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={copyBase64}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
                >
                  Copy Base64
                </button>

                <button
                  onClick={clearAll}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-semibold"
                >
                  Clear All
                </button>
              </div>
            </>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">What Is Image to Base64?</h2>
          <p className="mt-4 text-slate-300">
            Image to Base64 conversion turns an image file into a text-based
            data URL. Developers use Base64 images in HTML, CSS, email templates,
            and small embedded assets.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">When Should You Use Base64 Images?</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Embedding small images directly in HTML</li>
            <li>• Using icons in CSS</li>
            <li>• Creating email templates</li>
            <li>• Avoiding extra image file requests for tiny assets</li>
          </ul>
        </section>
      </div>
    </main>
  );
}