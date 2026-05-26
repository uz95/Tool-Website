"use client";

import { useState } from "react";

export default function BlurImagePage() {
  const [image, setImage] = useState("");
  const [blurredImage, setBlurredImage] = useState("");
  const [blur, setBlur] = useState(5);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
    setBlurredImage("");
  }

  function applyBlur() {
    if (!image) return;

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.filter = `blur(${blur}px)`;
      ctx.drawImage(img, 0, 0);

      setBlurredImage(canvas.toDataURL("image/png"));
    };

    img.src = image;
  }

  function clearAll() {
    setImage("");
    setBlurredImage("");
    setBlur(5);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="text-cyan-400">← Back to Tools</a>

        <h1 className="mt-8 text-4xl font-bold">Blur Image Online</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Blur photos and images online for free. Add blur effects to JPG, PNG,
          WEBP, and other image formats directly in your browser.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4"
          />

          {image && (
            <>
              <label className="mt-6 block text-sm text-slate-300">
                Blur Strength: {blur}px
              </label>

              <input
                type="range"
                min="1"
                max="30"
                value={blur}
                onChange={(e) => setBlur(Number(e.target.value))}
                className="mt-3 w-full"
              />

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={applyBlur}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
                >
                  Blur Image
                </button>

                <button
                  onClick={clearAll}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-semibold"
                >
                  Clear All
                </button>
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-xl font-bold">Original Image</h2>
                  <img src={image} alt="Original image" className="rounded-2xl" />
                </div>

                {blurredImage && (
                  <div>
                    <h2 className="mb-4 text-xl font-bold">Blurred Image</h2>
                    <img src={blurredImage} alt="Blurred image" className="rounded-2xl" />

                    <a
                      href={blurredImage}
                      download="blurred-image.png"
                      className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
                    >
                      Download Image
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Free Online Image Blur Tool</h2>
          <p className="mt-4 text-slate-300">
            Use this blur image tool to hide sensitive details, create soft
            backgrounds, blur photos for social media, or add creative effects.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Why Blur an Image?</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Hide private information</li>
            <li>• Create background blur effects</li>
            <li>• Improve thumbnails and graphics</li>
            <li>• Make social media images more professional</li>
          </ul>
        </section>
      </div>
    </main>
  );
}