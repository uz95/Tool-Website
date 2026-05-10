"use client";

import { useState } from "react";

export default function JpgToPngPage() {
  const [preview, setPreview] = useState("");
  const [convertedImage, setConvertedImage] = useState("");
  const [fileName, setFileName] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("jpeg") && !file.type.includes("jpg")) {
      alert("Please upload a JPG or JPEG image.");
      return;
    }

    setFileName(file.name.replace(/\.[^/.]+$/, ""));
    setPreview(URL.createObjectURL(file));

    convertJpgToPng(file);
  }

  function convertJpgToPng(file: File) {
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

        ctx.drawImage(img, 0, 0);

        const pngData = canvas.toDataURL("image/png");
        setConvertedImage(pngData);
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
          JPG to PNG Converter
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert JPG and JPEG images to PNG online for free. Upload your image
          and download a high-quality PNG file instantly.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload JPG Image
          </label>

          <input
            type="file"
            accept="image/jpeg,image/jpg"
            onChange={handleFileChange}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {preview && (
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-xl font-bold">Original JPG</h2>

                <img
                  src={preview}
                  alt="Original JPG preview"
                  className="rounded-2xl"
                />
              </div>

              <div>
                <h2 className="mb-4 text-xl font-bold">Converted PNG</h2>

                {convertedImage ? (
                  <>
                    <img
                      src={convertedImage}
                      alt="Converted PNG preview"
                      className="rounded-2xl"
                    />

                    <a
                      href={convertedImage}
                      download={`${fileName || "converted-image"}.png`}
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
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Why Convert JPG to PNG?</h2>

          <p className="mt-4 text-slate-300">
            PNG is useful when you want high-quality images for editing,
            graphics, design work, or uploading to platforms that prefer PNG
            format.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Use This Tool</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your JPG or JPEG image.</li>
            <li>The tool converts it to PNG in your browser.</li>
            <li>Download your converted PNG image.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">Is this JPG to PNG converter free?</h3>
              <p className="mt-2 text-slate-300">
                Yes, this online JPG to PNG converter is completely free.
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