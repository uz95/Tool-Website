"use client";

import { useState } from "react";

export default function PngToJpgPage() {
  const [preview, setPreview] = useState("");
  const [convertedImage, setConvertedImage] = useState("");
  const [fileName, setFileName] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("png")) {
      alert("Please upload a PNG image.");
      return;
    }

    setFileName(file.name.replace(/\.[^/.]+$/, ""));
    setPreview(URL.createObjectURL(file));
    convertPngToJpg(file);
  }

  function convertPngToJpg(file: File) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, 0, 0);

        const jpgData = canvas.toDataURL("image/jpeg", 0.95);
        setConvertedImage(jpgData);
      };
    };
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          PNG to JPG Converter
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert PNG images to JPG online for free. Upload your PNG file and
          download a high-quality JPG image instantly.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload PNG Image
          </label>

          <input
            type="file"
            accept="image/png"
            onChange={handleFileChange}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {preview && (
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-xl font-bold">Original PNG</h2>

                <img
                  src={preview}
                  alt="Original PNG preview"
                  className="rounded-2xl bg-white"
                />
              </div>

              <div>
                <h2 className="mb-4 text-xl font-bold">Converted JPG</h2>

                {convertedImage ? (
                  <>
                    <img
                      src={convertedImage}
                      alt="Converted JPG preview"
                      className="rounded-2xl"
                    />

                    <a
                      href={convertedImage}
                      download={`${fileName || "converted-image"}.jpg`}
                      className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                    >
                      Download JPG
                    </a>
                  </>
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
                    Converted JPG will appear here
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Why Convert PNG to JPG?</h2>

          <p className="mt-4 text-slate-300">
            JPG files are usually smaller than PNG files, making them useful for
            websites, email, social media, and faster image sharing.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Use This Tool</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your PNG image.</li>
            <li>The tool converts it to JPG in your browser.</li>
            <li>Download your converted JPG image.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">Is this PNG to JPG converter free?</h3>
              <p className="mt-2 text-slate-300">
                Yes, this online PNG to JPG converter is completely free.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">What happens to transparent PNG areas?</h3>
              <p className="mt-2 text-slate-300">
                JPG does not support transparency, so transparent areas are
                converted to a white background.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Are my images uploaded?</h3>
              <p className="mt-2 text-slate-300">
                No, conversion happens directly in your browser.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}