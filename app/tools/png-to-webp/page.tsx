"use client";

import { useState } from "react";


export default function PngToWebpPage() {
  const [preview, setPreview] = useState("");
  const [convertedImage, setConvertedImage] = useState("");
  const [fileName, setFileName] = useState("");

  function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("png")) {
      alert("Please upload a PNG image.");
      return;
    }

    setFileName(file.name.replace(/\.[^/.]+$/, ""));
    setPreview(URL.createObjectURL(file));

    convertToWebp(file);
  }

  function convertToWebp(file: File) {
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

        // High quality WEBP
        const webpData = canvas.toDataURL(
          "image/webp",
          0.95
        );

        setConvertedImage(webpData);
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
          PNG to WEBP Converter
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert PNG images to WEBP online for free.
          Reduce image size while keeping high quality.
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
                <h2 className="mb-4 text-xl font-bold">
                  Original PNG
                </h2>

                <img
                  src={preview}
                  alt="Original PNG"
                  className="rounded-2xl"
                />
              </div>

              <div>
                <h2 className="mb-4 text-xl font-bold">
                  Converted WEBP
                </h2>

                {convertedImage ? (
                  <>
                    <img
                      src={convertedImage}
                      alt="Converted WEBP"
                      className="rounded-2xl"
                    />

                    <a
                      href={convertedImage}
                      download={`${fileName || "converted-image"}.webp`}
                      className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                    >
                      Download WEBP
                    </a>
                  </>
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
                    Converted WEBP will appear here
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Why Convert PNG to WEBP?
          </h2>

          <p className="mt-4 text-slate-300">
            WEBP images are smaller in size compared
            to PNG while maintaining excellent quality.
            This helps websites load faster and improves SEO.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Benefits of WEBP
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Faster website loading</li>
            <li>• Smaller file sizes</li>
            <li>• Better SEO performance</li>
            <li>• High image quality</li>
            <li>• Modern web optimization</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                Is this PNG to WEBP converter free?
              </h3>

              <p className="mt-2 text-slate-300">
                Yes, this converter is completely free.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does WEBP reduce image quality?
              </h3>

              <p className="mt-2 text-slate-300">
                WEBP maintains very high image quality
                while reducing file size.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is WEBP good for websites?
              </h3>

              <p className="mt-2 text-slate-300">
                Yes, WEBP is excellent for improving
                website speed and SEO.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}