"use client";

import { useState } from "react";

export default function SvgToPngPage() {
  const [svgText, setSvgText] = useState("");
  const [preview, setPreview] = useState("");
  const [pngImage, setPngImage] = useState("");
  const [fileName, setFileName] = useState("converted-svg");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.name.endsWith(".svg")) {
      alert("Please upload an SVG file.");
      return;
    }

    setFileName(file.name.replace(/\.[^/.]+$/, ""));

    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target?.result as string;
      setSvgText(text);
      setPreview(URL.createObjectURL(new Blob([text], { type: "image/svg+xml" })));
      setPngImage("");
    };

    reader.readAsText(file);
  }

  function convertSvgToPng() {
    if (!svgText) {
      alert("Please upload an SVG file first.");
      return;
    }

    const svgBlob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      canvas.width = img.width || 1000;
      canvas.height = img.height || 1000;

      ctx.drawImage(img, 0, 0);

      const pngData = canvas.toDataURL("image/png");

      setPngImage(pngData);
      URL.revokeObjectURL(url);
    };

    img.src = url;
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">SVG to PNG Converter</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert SVG files to PNG images online for free. Upload your SVG and
          download a high-quality PNG image instantly.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload SVG File
          </label>

          <input
            type="file"
            accept=".svg,image/svg+xml"
            onChange={handleFileChange}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {preview && (
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-xl font-bold">SVG Preview</h2>

                <img
                  src={preview}
                  alt="SVG preview"
                  className="rounded-2xl bg-white p-4"
                />
              </div>

              <div>
                <h2 className="mb-4 text-xl font-bold">PNG Output</h2>

                {pngImage ? (
                  <>
                    <img
                      src={pngImage}
                      alt="Converted PNG"
                      className="rounded-2xl bg-white p-4"
                    />

                    <a
                      href={pngImage}
                      download={`${fileName}.png`}
                      className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                    >
                      Download PNG
                    </a>
                  </>
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
                    Converted PNG will appear here
                  </div>
                )}
              </div>
            </div>
          )}

          <button
            onClick={convertSvgToPng}
            disabled={!svgText}
            className="mt-8 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Convert SVG to PNG
          </button>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Why Convert SVG to PNG?</h2>

          <p className="mt-4 text-slate-300">
            SVG is great for scalable vector graphics, but PNG is easier to use
            in social media, documents, presentations, websites, and apps that
            do not support SVG uploads.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Use This Tool</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your SVG file.</li>
            <li>Click the convert button.</li>
            <li>Download your PNG image.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">Is this SVG to PNG converter free?</h3>
              <p className="mt-2 text-slate-300">
                Yes, this SVG to PNG converter is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Are my files uploaded?</h3>
              <p className="mt-2 text-slate-300">
                No, the conversion happens directly in your browser.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}