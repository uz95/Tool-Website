"use client";

import { useState } from "react";

export default function ImageResizerPage() {
  const [preview, setPreview] = useState("");
  const [resizedImage, setResizedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    setSelectedFile(file);
    setFileName(file.name.replace(/\.[^/.]+$/, ""));
    setPreview(URL.createObjectURL(file));
    setResizedImage("");

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      setWidth(String(img.width));
      setHeight(String(img.height));
    };
  }

  function resizeImage() {
    if (!selectedFile) return;

    const newWidth = Number(width);
    const newHeight = Number(height);

    if (!newWidth || !newHeight || newWidth <= 0 || newHeight <= 0) {
      alert("Please enter valid width and height.");
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(selectedFile);

    reader.onload = (event) => {
      const img = new Image();

      img.src = event.target?.result as string;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        canvas.width = newWidth;
        canvas.height = newHeight;

        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        const resizedData = canvas.toDataURL("image/png");
        setResizedImage(resizedData);
      };
    };
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">Image Resizer</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Resize images online for free. Change image width and height while
          keeping good quality.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {preview && (
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-xl font-bold">Original Image</h2>
                <img
                  src={preview}
                  alt="Original preview"
                  className="rounded-2xl border border-slate-800"
                />
              </div>

              <div>
                <h2 className="mb-4 text-xl font-bold">Resize Settings</h2>

                <label className="block text-sm text-slate-300">Width</label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                />

                <label className="mt-5 block text-sm text-slate-300">
                  Height
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                />

                <button
                  onClick={resizeImage}
                  className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  Resize Image
                </button>
              </div>
            </div>
          )}

          {resizedImage && (
            <div className="mt-8 rounded-2xl bg-slate-950 p-5">
              <h2 className="mb-4 text-xl font-bold">Resized Image</h2>

              <img
                src={resizedImage}
                alt="Resized preview"
                className="rounded-xl border border-slate-800"
              />

              <a
                href={resizedImage}
                download={`${fileName || "resized-image"}.png`}
                className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Download Resized Image
              </a>
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Why Resize Images?</h2>
          <p className="mt-4 text-slate-300">
            Resizing images helps reduce dimensions for websites, social media,
            email, documents, profile pictures, and faster uploads.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Resize an Image</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload an image.</li>
            <li>Enter your desired width and height.</li>
            <li>Click resize and download your new image.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}