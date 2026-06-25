"use client";

import { useState } from "react";

const relatedTools = [
  {
    title: "PNG to WEBP Converter",
    description: "Convert PNG images to WEBP for websites.",
    href: "/tools/png-to-webp",
  },
  {
    title: "JPG to PNG Converter",
    description: "Convert JPG and JPEG images to PNG.",
    href: "/tools/jpg-to-png",
  },
  {
    title: "PNG to JPG Converter",
    description: "Convert PNG images to JPG format.",
    href: "/tools/png-to-jpg",
  },
  {
    title: "Image Compressor",
    description: "Compress images for websites and sharing.",
    href: "/tools/image-compressor",
  },
];

const relatedGuides = [
  {
    title: "WEBP vs PNG: Which Image Format Should You Use?",
    href: "/blog/webp-vs-png",
  },
  {
    title: "Best Image Format for Websites",
    href: "/blog/best-image-format-for-websites",
  },
  {
    title: "PNG vs JPG: Which Image Format Should You Use?",
    href: "/blog/png-vs-jpg",
  },
];

export default function WebpToPngClient() {
  const [preview, setPreview] = useState("");
  const [convertedImage, setConvertedImage] = useState("");
  const [fileName, setFileName] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("webp")) {
      alert("Please upload a WEBP image.");
      return;
    }

    setFileName(file.name.replace(/\.[^/.]+$/, ""));
    setPreview(URL.createObjectURL(file));
    setConvertedImage("");

    convertWebpToPng(file);
  }

  function convertWebpToPng(file: File) {
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

        setConvertedImage(canvas.toDataURL("image/png"));
      };
    };
  }

  function clearAll() {
    setPreview("");
    setConvertedImage("");
    setFileName("");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools/image-tools" className="text-cyan-400">
          ← Back to Image Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          WEBP to PNG Converter Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert WEBP to PNG online for free. Upload a WEBP image and instantly
          download a high-quality PNG file. This free WEBP to PNG converter
          works directly in your browser without uploading files to a server.
          Use it to save WEBP as PNG for editing, design, Photoshop, websites,
          documents, and transparent image workflows.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload WEBP Image
          </label>

          <input
            type="file"
            accept="image/webp"
            onChange={handleFileChange}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {preview && (
            <>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-xl font-bold">
                    Original WEBP Image
                  </h2>

                  <img
                    src={preview}
                    alt="Original WEBP image preview before PNG conversion"
                    className="rounded-2xl"
                  />
                </div>

                <div>
                  <h2 className="mb-4 text-xl font-bold">
                    Converted PNG Image
                  </h2>

                  {convertedImage ? (
                    <>
                      <img
                        src={convertedImage}
                        alt="Converted WEBP to PNG image preview"
                        className="rounded-2xl"
                      />

                      <a
                        href={convertedImage}
                        download={`${fileName || "converted-image"}.png`}
                        className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                      >
                        Download PNG Image
                      </a>
                    </>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
                      Converted PNG will appear here
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={clearAll}
                className="mt-8 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
              >
                Clear All
              </button>
            </>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free WEBP to PNG Converter Online
          </h2>

          <p className="mt-4 text-slate-300">
            This free WEBP to PNG converter helps you change WEBP images into
            PNG format without installing software. You can use it as a WEBP to
            PNG converter, WEBP image converter, WEBP file to PNG tool, or
            browser-based image converter.
          </p>

          <p className="mt-4 text-slate-300">
            WEBP is a modern image format used by many websites to reduce file
            size. However, some image editors, design tools, upload forms, and
            older apps may require PNG files. Converting WEBP to PNG makes the
            image easier to edit, share, upload, and use across different
            platforms.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Convert WEBP to PNG Online</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your WEBP image file.</li>
            <li>The tool converts WEBP to PNG inside your browser.</li>
            <li>Preview the converted PNG image.</li>
            <li>Download the PNG file instantly.</li>
            <li>Use Clear All to convert another WEBP image.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Convert WEBP to PNG Without Losing Quality
          </h2>

          <p className="mt-4 text-slate-300">
            Many users search for a way to convert WEBP to PNG without losing
            quality. This converter keeps the original image dimensions and
            creates a PNG file with high visual quality. PNG is useful for image
            editing, graphic design, transparent backgrounds, screenshots, icons,
            and document work.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Convert WEBP Images to PNG?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Convert WEBP images to PNG online</li>
            <li>• Save WEBP as PNG for editing and design</li>
            <li>• Use PNG files in Photoshop and image editors</li>
            <li>• Convert WEBP files for websites, documents, and apps</li>
            <li>• Keep image quality and original dimensions</li>
            <li>• Process images directly in your browser for privacy</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">WEBP vs PNG</h2>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800">
            <table className="w-full text-left">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-4 py-3">Format</th>
                  <th className="px-4 py-3">Best For</th>
                  <th className="px-4 py-3">Common Use</th>
                </tr>
              </thead>

              <tbody className="bg-slate-950 text-slate-300">
                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">WEBP</td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Smaller website images and modern web optimization
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Websites, blogs, ecommerce, landing pages, and web apps
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">PNG</td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Editing, transparency, graphics, and compatibility
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Design tools, documents, screenshots, icons, and graphics
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
                How do I convert WEBP to PNG online?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your WEBP image and the tool will convert it to PNG
                directly in your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this WEBP to PNG converter free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this WEBP to PNG converter is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I convert WEBP to PNG without uploading files?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes. The conversion happens directly inside your browser, so
                your image is not uploaded to a server.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does converting WEBP to PNG reduce quality?
              </h3>
              <p className="mt-2 text-slate-300">
                This tool creates a high-quality PNG file while keeping the
                original image dimensions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does PNG support transparency?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, PNG supports transparency, which makes it useful for
                graphics, icons, editing, and design work.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I use PNG images in Photoshop?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, PNG files are widely supported by Photoshop, design tools,
                websites, apps, and document software.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}