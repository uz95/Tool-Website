"use client";

import { useState } from "react";

const relatedTools = [
  {
    title: "JPG to PNG Converter",
    description: "Convert JPG and JPEG images to PNG.",
    href: "/tools/jpg-to-png",
  },
  {
    title: "PNG to WEBP Converter",
    description: "Convert PNG images to WEBP format.",
    href: "/tools/png-to-webp",
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
    title: "PNG vs JPG: Which Image Format Should You Use?",
    href: "/blog/png-vs-jpg",
  },
  {
    title: "Best Image Format for Websites",
    href: "/blog/best-image-format-for-websites",
  },
  {
    title: "How to Compress Images for Faster Websites",
    href: "/blog/how-to-compress-images-for-faster-websites",
  },
];

export default function PngToJpgClient() {
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
    setConvertedImage("");

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

        setConvertedImage(canvas.toDataURL("image/jpeg", 0.95));
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
          PNG to JPG Converter Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert PNG to JPG online for free. Upload a PNG image and download a
          high-quality JPEG file with a white background directly in your
          browser. This tool is useful for reducing file size, sharing images,
          uploading photos, and converting transparent PNG files to JPG.
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
            <>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-xl font-bold">Original PNG Image</h2>

                  <img
                    src={preview}
                    alt="Original PNG image preview"
                    className="rounded-2xl bg-white"
                  />
                </div>

                <div>
                  <h2 className="mb-4 text-xl font-bold">
                    Converted JPG Image
                  </h2>

                  {convertedImage ? (
                    <>
                      <img
                        src={convertedImage}
                        alt="Converted JPG image preview"
                        className="rounded-2xl"
                      />

                      <a
                        href={convertedImage}
                        download={`${fileName || "converted-image"}.jpg`}
                        className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                      >
                        Download JPG Image
                      </a>
                    </>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
                      Converted JPG will appear here
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
            Free PNG to JPEG Converter Online
          </h2>

          <p className="mt-4 text-slate-300">
            This free PNG to JPG converter helps you convert PNG images into
            JPEG format without installing software. You can use it as a PNG to
            JPG converter, PNG to JPEG converter, transparent PNG to JPG tool,
            or online image format converter.
          </p>

          <p className="mt-4 text-slate-300">
            JPG files are often smaller than PNG files, which makes them useful
            for websites, email attachments, social media uploads, online forms,
            product photos, blog images, and faster image sharing.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Convert PNG to JPG Online</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your PNG image file.</li>
            <li>The tool converts the PNG to JPG inside your browser.</li>
            <li>Transparent areas are filled with a white background.</li>
            <li>Preview the converted JPG image.</li>
            <li>Download the JPG file instantly.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Convert PNG to JPG?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Convert PNG images to JPG online</li>
            <li>• Reduce image file size for sharing and uploads</li>
            <li>• Change transparent PNG files into white-background JPG files</li>
            <li>• Use JPG images for websites, email, and social media</li>
            <li>• Convert PNG to JPEG without installing software</li>
            <li>• Process images directly in your browser for privacy</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">PNG vs JPG</h2>

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
                  <td className="border-t border-slate-800 px-4 py-3">PNG</td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Transparency, graphics, icons, and screenshots
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Logos, UI graphics, screenshots, and design assets
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">JPG</td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Photos, smaller file sizes, and easy sharing
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Websites, social media, email, forms, and photo uploads
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-400">
            Note: JPG does not support transparency. Transparent PNG areas are
            converted to a white background in this tool.
          </p>
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
                How do I convert PNG to JPG online?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your PNG file and the tool will convert it to JPG
                directly in your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I convert PNG to JPEG?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this tool converts PNG images into JPEG/JPG format.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this PNG to JPG converter free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this online PNG to JPG converter is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What happens to transparent PNG areas?
              </h3>
              <p className="mt-2 text-slate-300">
                JPG does not support transparency, so transparent PNG areas are
                filled with a white background.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are my images uploaded to a server?
              </h3>
              <p className="mt-2 text-slate-300">
                No. Image conversion happens directly inside your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Why is JPG smaller than PNG?
              </h3>
              <p className="mt-2 text-slate-300">
                JPG uses compression that usually creates smaller file sizes,
                especially for photos and images with many colors.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}