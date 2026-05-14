"use client";

import { useState } from "react";

export default function HeicToJpgPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedImage, setConvertedImage] = useState("");
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const isHeic =
      file.name.toLowerCase().endsWith(".heic") ||
      file.name.toLowerCase().endsWith(".heif");

    if (!isHeic) {
      alert("Please upload a HEIC or HEIF image.");
      return;
    }

    setSelectedFile(file);
    setConvertedImage("");
    setFileName(file.name.replace(/\.[^/.]+$/, ""));
  }

async function convertHeicToJpg() {
  if (!selectedFile) return;

  setLoading(true);

  try {
    const heic2any = (await import("heic2any")).default;

    const convertedBlob = await heic2any({
      blob: selectedFile,
      toType: "image/jpeg",
      quality: 0.95,
    });

    const blob = Array.isArray(convertedBlob)
      ? convertedBlob[0]
      : convertedBlob;

    const imageUrl = URL.createObjectURL(blob);
    setConvertedImage(imageUrl);
  } catch (error) {
    console.error(error);
    alert("Something went wrong while converting the HEIC image.");
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">HEIC to JPG Converter</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert iPhone HEIC photos to JPG online for free. Upload your HEIC
          or HEIF image and download a high-quality JPG file.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload HEIC Image
          </label>

          <input
            type="file"
            accept=".heic,.heif,image/heic,image/heif"
            onChange={handleFileChange}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {selectedFile && (
            <p className="mt-4 text-sm text-slate-400">
              Selected file: {selectedFile.name}
            </p>
          )}

          <button
            onClick={convertHeicToJpg}
            disabled={!selectedFile || loading}
            className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Converting..." : "Convert HEIC to JPG"}
          </button>

          {convertedImage && (
            <div className="mt-8 rounded-2xl bg-slate-950 p-5">
              <h2 className="mb-4 text-xl font-bold">Converted JPG</h2>

              <img
                src={convertedImage}
                alt="Converted JPG preview"
                className="rounded-xl border border-slate-800"
              />

              <a
                href={convertedImage}
                download={`${fileName || "converted-image"}.jpg`}
                className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Download JPG
              </a>
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Why Convert HEIC to JPG?</h2>
          <p className="mt-4 text-slate-300">
            HEIC is commonly used by iPhones, but some websites, apps, and
            devices do not support it. JPG is widely supported and easier to
            share, upload, and edit.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Use This Tool</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your HEIC or HEIF image.</li>
            <li>Click the convert button.</li>
            <li>Download the converted JPG image.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                Is this HEIC to JPG converter free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this online HEIC to JPG converter is free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Can I convert iPhone photos?</h3>
              <p className="mt-2 text-slate-300">
                Yes, this tool is useful for converting iPhone HEIC photos to
                JPG.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}