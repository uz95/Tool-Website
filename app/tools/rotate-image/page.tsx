"use client";

import { useState } from "react";

export default function RotateImagePage() {
  const [image, setImage] = useState("");
  const [rotatedImage, setRotatedImage] = useState("");
  const [rotation, setRotation] = useState(90);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
    setRotatedImage("");
  }

  function rotateImage() {
    if (!image) return;

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const angle = (rotation * Math.PI) / 180;

      if (rotation === 90 || rotation === 270) {
        canvas.width = img.height;
        canvas.height = img.width;
      } else {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(angle);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);

      setRotatedImage(canvas.toDataURL("image/png"));
    };

    img.src = image;
  }

  function clearAll() {
    setImage("");
    setRotatedImage("");
    setRotation(90);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="text-cyan-400">← Back to Tools</a>

        <h1 className="mt-8 text-4xl font-bold">Rotate Image Online</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Rotate JPG, PNG, WEBP, and other images online for free. Upload your
          image, choose rotation angle, and download the rotated image instantly.
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
                Rotation Angle
              </label>

              <select
                value={rotation}
                onChange={(e) => setRotation(Number(e.target.value))}
                className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
              >
                <option value={90}>90 Degrees</option>
                <option value={180}>180 Degrees</option>
                <option value={270}>270 Degrees</option>
              </select>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={rotateImage}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
                >
                  Rotate Image
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

                {rotatedImage && (
                  <div>
                    <h2 className="mb-4 text-xl font-bold">Rotated Image</h2>
                    <img src={rotatedImage} alt="Rotated image" className="rounded-2xl" />

                    <a
                      href={rotatedImage}
                      download="rotated-image.png"
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
          <h2 className="text-2xl font-bold">Free Online Image Rotator</h2>
          <p className="mt-4 text-slate-300">
            This image rotator helps you rotate photos, screenshots, product
            images, profile pictures, and graphics directly in your browser.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <p className="mt-4 text-slate-300">
            This tool supports common image formats like JPG, PNG, WEBP, and
            other browser-supported image files.
          </p>
        </section>
      </div>
    </main>
  );
}