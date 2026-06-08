"use client";

import { useState } from "react";

const relatedTools = [
  {
    title: "JPG to PNG Converter",
    description: "Convert JPG images to PNG online.",
    href: "/tools/jpg-to-png",
  },
  {
    title: "PNG to JPG Converter",
    description: "Convert PNG images to JPG online.",
    href: "/tools/png-to-jpg",
  },
  {
    title: "Image Compressor",
    description: "Compress JPG and PNG images online.",
    href: "/tools/image-compressor",
  },
  {
    title: "Image Resizer",
    description: "Resize images by width and height.",
    href: "/tools/image-resizer",
  },
];

const relatedGuides = [
  {
    title: "Best Image Format for Websites",
    href: "/blog/best-image-format-for-websites",
  },
  {
    title: "PNG vs JPG: Which Image Format Should You Use?",
    href: "/blog/png-vs-jpg",
  },
  {
    title: "How to Compress Images for Faster Websites",
    href: "/blog/how-to-compress-images-for-faster-websites",
  },
];

export default function HeicToJpgClient() {
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

      setConvertedImage(URL.createObjectURL(blob));
    } catch (error) {
      console.error(error);
      alert("Something went wrong while converting the HEIC image.");
    } finally {
      setLoading(false);
    }
  }

  function clearAll() {
    setSelectedFile(null);
    setConvertedImage("");
    setFileName("");
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools/image-tools" className="text-cyan-400">
          ← Back to Image Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          HEIC to JPG Converter Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert HEIC to JPG online for free. Upload iPhone HEIC or HEIF
          photos and download high-quality JPG images directly in your browser.
          This tool is useful for converting iPhone photos to JPG for websites,
          email, documents, social media, and apps that do not support HEIC.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload HEIC or HEIF Image
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

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={convertHeicToJpg}
              disabled={!selectedFile || loading}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Converting..." : "Convert HEIC to JPG"}
            </button>

            <button
              onClick={clearAll}
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Clear All
            </button>
          </div>

          {convertedImage && (
            <div className="mt-8 rounded-2xl bg-slate-950 p-5">
              <h2 className="mb-4 text-xl font-bold">Converted JPG Image</h2>

              <img
                src={convertedImage}
                alt="Converted HEIC to JPG preview"
                className="rounded-xl border border-slate-800"
              />

              <a
                href={convertedImage}
                download={`${fileName || "converted-heic-image"}.jpg`}
                className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Download JPG Image
              </a>
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free HEIC to JPG Converter for iPhone Photos
          </h2>

          <p className="mt-4 text-slate-300">
            This free HEIC to JPG converter helps you convert iPhone photos from
            HEIC or HEIF format into JPG images. Many iPhones save photos as
            HEIC because the format can store high-quality images with smaller
            file sizes, but not every website, app, or device supports it.
          </p>

          <p className="mt-4 text-slate-300">
            JPG is one of the most widely supported image formats. After
            converting HEIC to JPG, your photo becomes easier to upload, share,
            edit, print, send by email, or use on websites and social media.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Convert HEIC to JPG Online</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your HEIC or HEIF image file.</li>
            <li>Click the Convert HEIC to JPG button.</li>
            <li>Wait for the browser-based conversion to finish.</li>
            <li>Preview the converted JPG image.</li>
            <li>Download the JPG file to your device.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Convert iPhone HEIC Photos to JPG?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Convert iPhone photos to JPG online</li>
            <li>• Upload HEIC photos to websites that only accept JPG</li>
            <li>• Share photos with devices that do not support HEIC</li>
            <li>• Use JPG images in documents, forms, and email attachments</li>
            <li>• Convert HEIF images to a more compatible format</li>
            <li>• Process images directly in your browser for privacy</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">HEIC vs JPG</h2>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800">
            <table className="w-full text-left">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-4 py-3">Format</th>
                  <th className="px-4 py-3">Best For</th>
                  <th className="px-4 py-3">Compatibility</th>
                </tr>
              </thead>

              <tbody className="bg-slate-950 text-slate-300">
                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">HEIC</td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    iPhone photo storage and smaller file size
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Limited support on some websites and apps
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">JPG</td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Sharing, uploading, printing, and editing
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Very widely supported
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
          <h2 className="text-2xl font-bold">Related Guides</h2>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {relatedGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-cyan-400"
              >
                <h3 className="font-bold text-cyan-400">{guide.title}</h3>
                <p className="mt-2 text-sm text-slate-400">Read guide →</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                How do I convert HEIC to JPG online?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your HEIC or HEIF file, click Convert HEIC to JPG, and
                download the converted JPG image.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I convert iPhone photos to JPG?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this tool is made for converting iPhone HEIC photos into
                JPG images.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this HEIC to JPG converter free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this HEIC to JPG converter is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are my HEIC photos uploaded to a server?
              </h3>
              <p className="mt-2 text-slate-300">
                No. Your HEIC image is processed directly inside your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">What is a HEIF file?</h3>
              <p className="mt-2 text-slate-300">
                HEIF is a high-efficiency image format. HEIC is a common file
                extension used for HEIF images, especially on iPhones.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Why should I convert HEIC to JPG?
              </h3>
              <p className="mt-2 text-slate-300">
                JPG is easier to share, upload, edit, and open on most devices,
                websites, apps, and document tools.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}