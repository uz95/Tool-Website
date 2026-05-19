"use client";

import { useState } from "react";

export default function FaviconGeneratorPage() {
  const [preview, setPreview] = useState("");
  const [favicon, setFavicon] = useState("");
  const [fileName, setFileName] = useState("favicon");

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    setFileName(file.name.replace(/\.[^/.]+$/, "") || "favicon");
    setPreview(URL.createObjectURL(file));
    setFavicon("");
  }

  function generateFavicon() {
    if (!preview) {
      alert("Please upload an image first.");
      return;
    }

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      canvas.width = 64;
      canvas.height = 64;

      ctx.clearRect(0, 0, 64, 64);
      ctx.drawImage(img, 0, 0, 64, 64);

      const faviconData = canvas.toDataURL("image/png");
      setFavicon(faviconData);
    };

    img.src = preview;
  }

  function clearAll() {
    setPreview("");
    setFavicon("");
    setFileName("favicon");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">Favicon Generator</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Create a favicon online for free. Upload an image and generate a
          64×64 PNG favicon for your website, app, blog, or online project.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {preview && (
            <>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-xl font-bold">Original Image</h2>

                  <img
                    src={preview}
                    alt="Uploaded image preview"
                    className="max-h-[350px] rounded-2xl"
                  />
                </div>

                <div>
                  <h2 className="mb-4 text-xl font-bold">Generated Favicon</h2>

                  {favicon ? (
                    <>
                      <div className="rounded-2xl bg-slate-950 p-6">
                        <img
                          src={favicon}
                          alt="Generated favicon preview"
                          className="h-16 w-16 rounded-lg border border-slate-700"
                        />

                        <p className="mt-4 text-sm text-slate-400">
                          Preview size: 64×64 pixels
                        </p>
                      </div>

                      <a
                        href={favicon}
                        download={`${fileName}-favicon.png`}
                        className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                      >
                        Download Favicon
                      </a>
                    </>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
                      Generated favicon will appear here
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={generateFavicon}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  Generate Favicon
                </button>

                <button
                  onClick={clearAll}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
                >
                  Clear All
                </button>
              </div>
            </>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Free Online Favicon Generator</h2>

          <p className="mt-4 text-slate-300">
            A favicon is the small icon that appears in a browser tab,
            bookmarks, search results, and website shortcuts. This favicon
            generator helps you quickly create a favicon from an image without
            installing any design software.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Create a Favicon</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your logo, icon, or image.</li>
            <li>Click the Generate Favicon button.</li>
            <li>Preview the favicon in 64×64 size.</li>
            <li>Download the generated PNG favicon.</li>
            <li>Add it to your website as an icon or favicon file.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Why Use a Favicon?</h2>

          <p className="mt-4 text-slate-300">
            A favicon makes your website look more professional and easier to
            recognize. It improves branding, helps users identify your site in
            browser tabs, and gives your website a polished appearance.
          </p>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Improve website branding</li>
            <li>• Make browser tabs easier to recognize</li>
            <li>• Add a professional look to your website</li>
            <li>• Useful for blogs, tools websites, apps, and portfolios</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Recommended Favicon Size</h2>

          <p className="mt-4 text-slate-300">
            Common favicon sizes include 16×16, 32×32, 48×48, and 64×64 pixels.
            This tool creates a 64×64 PNG favicon, which works well for modern
            websites and can be resized by browsers when needed.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">Is this favicon generator free?</h3>
              <p className="mt-2 text-slate-300">
                Yes, this online favicon generator is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Are my images uploaded?</h3>
              <p className="mt-2 text-slate-300">
                No, your image is processed directly in your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I create a favicon from a PNG or JPG?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can upload PNG, JPG, WEBP, and other browser-supported
                image formats.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Where should I place the favicon in Next.js?
              </h3>
              <p className="mt-2 text-slate-300">
                In a Next.js App Router project, you can place your favicon as
                app/icon.png or app/favicon.ico and Next.js will detect it
                automatically.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}