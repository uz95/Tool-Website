"use client";

import { useState } from "react";

const relatedTools = [
  {
    title: "Image Resizer",
    description: "Resize images by width and height.",
    href: "/tools/image-resizer",
  },
  {
    title: "Crop Image",
    description: "Crop JPG, PNG, and WEBP images online.",
    href: "/tools/crop-image",
  },
  {
    title: "PNG to WEBP",
    description: "Convert PNG images to WEBP format.",
    href: "/tools/png-to-webp",
  },
  {
    title: "WEBP to PNG",
    description: "Convert WEBP images to PNG format.",
    href: "/tools/webp-to-png",
  },
];

export default function ImageCompressorClient() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [compressedImage, setCompressedImage] = useState("");
  const [originalSize, setOriginalSize] = useState("");
  const [compressedSize, setCompressedSize] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setCompressedImage("");
    setOriginalSize((file.size / 1024).toFixed(2));
    setCompressedSize("");
  }

  function clearAll() {
    setSelectedFile(null);
    setPreview("");
    setCompressedImage("");
    setOriginalSize("");
    setCompressedSize("");
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

        const compressedData = canvas.toDataURL("image/jpeg", 0.7);

        setCompressedImage(compressedData);

        const sizeInKB = (compressedData.length * 0.75) / 1024;

        setCompressedSize(sizeInKB.toFixed(2));
      };
    };
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools/image-tools" className="text-cyan-400">
          ← Back to Image Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Compress Image Online Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Compress JPG, PNG, WEBP, and other images online for free. Reduce
          image file size directly in your browser while keeping good visual
          quality.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload Image to Compress
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {preview && (
            <>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-xl font-bold">Original Image</h2>

                  <img
                    src={preview}
                    alt="Original image preview"
                    className="rounded-2xl"
                  />

                  <p className="mt-4 text-slate-300">
                    Original size: {originalSize} KB
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 text-xl font-bold">Compressed Image</h2>

                  {compressedImage ? (
                    <>
                      <img
                        src={compressedImage}
                        alt="Compressed image result"
                        className="rounded-2xl"
                      />

                      <p className="mt-4 text-slate-300">
                        Compressed size: {compressedSize} KB
                      </p>

                      <a
                        href={compressedImage}
                        download="compressed-image.jpg"
                        className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                      >
                        Download Compressed Image
                      </a>
                    </>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
                      Compressed image will appear here
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={compressImage}
                  disabled={!selectedFile}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Compress Image
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
          <h2 className="text-2xl font-bold">
            Free Online Image Compressor for JPG, PNG and WEBP
          </h2>

          <p className="mt-4 text-slate-300">
            This free online image compressor helps reduce image file size for
            websites, blogs, social media, email, product photos, and online
            uploads. Smaller image files load faster and can improve website
            speed, mobile performance, and user experience.
          </p>

          <p className="mt-4 text-slate-300">
            You can compress JPG images, compress PNG images, reduce WEBP image
            size, and optimize photos directly in your browser without installing
            software or uploading files to a server.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Compress an Image Online</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your JPG, PNG, WEBP, or other image file.</li>
            <li>Click the Compress Image button.</li>
            <li>Compare the original and compressed file size.</li>
            <li>Preview the compressed image result.</li>
            <li>Download the optimized image instantly.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Compress Images for Websites?
          </h2>

          <p className="mt-4 text-slate-300">
            Large images are one of the most common reasons websites load
            slowly. Compressing images can reduce page weight, improve Core Web
            Vitals, save bandwidth, and make pages faster for mobile users.
          </p>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Reduce image file size online</li>
            <li>• Improve website loading speed</li>
            <li>• Optimize images for SEO and mobile users</li>
            <li>• Save storage space and bandwidth</li>
            <li>• Compress images without installing software</li>
            <li>• Process images directly in your browser for privacy</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Related Image Tools</h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedTools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-cyan-400"
              >
                <h3 className="font-bold text-cyan-400">{tool.title}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  {tool.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                How do I compress an image online for free?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your image, click Compress Image, and download the
                compressed result.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I compress JPG, PNG and WEBP images?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this tool supports JPG, PNG, WEBP, GIF, and other common
                browser-supported image formats.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does image compression reduce quality?
              </h3>
              <p className="mt-2 text-slate-300">
                Compression may slightly reduce quality, but the goal is to
                reduce file size while keeping the image visually clear.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are my images uploaded to a server?
              </h3>
              <p className="mt-2 text-slate-300">
                No. Your image is processed directly in your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Why should I compress images for SEO?
              </h3>
              <p className="mt-2 text-slate-300">
                Smaller images can improve page speed and user experience, which
                are important for website performance and SEO.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}