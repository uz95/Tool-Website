"use client";

import { useState } from "react";

export default function ImageCompressorPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [compressedImage, setCompressedImage] = useState("");
  const [originalSize, setOriginalSize] = useState("");
  const [compressedSize, setCompressedSize] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);

    setOriginalSize((file.size / 1024).toFixed(2));
  }

  function compressImage() {
    if (!selectedFile) return;

    const reader = new FileReader();

    reader.readAsDataURL(selectedFile);

    reader.onload = (event) => {
      const img = new Image();

      img.src = event.target?.result as string;

      img.onload = () => {
        const canvas = document.createElement("canvas");

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const width = img.width * 0.7;
        const height = img.height * 0.7;

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        const compressedData = canvas.toDataURL(
          "image/jpeg",
          0.7
        );

        setCompressedImage(compressedData);

        const sizeInKB =
          (compressedData.length * 0.75) / 1024;

        setCompressedSize(sizeInKB.toFixed(2));
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
          Image Compressor
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Compress JPG and PNG images online for free.
          Reduce image size while maintaining quality.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {preview && (
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-xl font-bold">
                  Original Image
                </h2>

                <img
                  src={preview}
                  alt="Preview"
                  className="rounded-2xl"
                />

                <p className="mt-4 text-slate-300">
                  Size: {originalSize} KB
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-xl font-bold">
                  Compressed Image
                </h2>

                {compressedImage ? (
                  <>
                    <img
                      src={compressedImage}
                      alt="Compressed"
                      className="rounded-2xl"
                    />

                    <p className="mt-4 text-slate-300">
                      Size: {compressedSize} KB
                    </p>

                    <a
                      href={compressedImage}
                      download="compressed-image.jpg"
                      className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                    >
                      Download Image
                    </a>
                  </>
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
                    Compressed image will appear here
                  </div>
                )}
              </div>
            </div>
          )}

          <button
            onClick={compressImage}
            disabled={!selectedFile}
            className="mt-8 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Compress Image
          </button>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            What is an Image Compressor?
          </h2>

          <p className="mt-4 text-slate-300">
            An image compressor reduces image file size while
            preserving image quality. It helps improve website
            speed, save storage space, and upload images faster.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Use This Tool?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Compress images online for free</li>
            <li>• Reduce image size quickly</li>
            <li>• Improve website loading speed</li>
            <li>• Save mobile data and storage</li>
            <li>• No software installation required</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                Is this image compressor free?
              </h3>

              <p className="mt-2 text-slate-300">
                Yes, this online image compressor is
                completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does image compression reduce quality?
              </h3>

              <p className="mt-2 text-slate-300">
                Slightly, but this tool tries to maintain
                good visual quality while reducing size.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I compress JPG and PNG images?
              </h3>

              <p className="mt-2 text-slate-300">
                Yes, this tool supports common image formats
                like JPG and PNG.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}