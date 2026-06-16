"use client";

import { useState } from "react";

const relatedTools = [
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
  {
    title: "PNG to WEBP Converter",
    description: "Convert PNG images to WEBP format.",
    href: "/tools/png-to-webp",
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

export default function JpgToPngClient() {
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
    setConvertedImage("");

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
          JPG to PNG Converter Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert JPG to PNG online for free. Upload a JPG or JPEG image and
          download a high-quality PNG file directly in your browser. This tool
          is useful for changing JPEG photos into PNG images for editing,
          design, websites, documents, and online uploads.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload JPG or JPEG Image
          </label>

          <input
            type="file"
            accept="image/jpeg,image/jpg"
            onChange={handleFileChange}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {preview && (
            <>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-xl font-bold">Original JPG Image</h2>

                  <img
                    src={preview}
                    alt="Original JPG image preview"
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
                        alt="Converted PNG image preview"
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
            Free JPEG to PNG Converter Online
          </h2>

          <p className="mt-4 text-slate-300">
            This free JPG to PNG converter helps you convert JPEG images into
            PNG format without installing software. You can use it as a JPG to
            PNG converter, JPEG to PNG converter, photo to PNG converter, or
            online image format converter.
          </p>

          <p className="mt-4 text-slate-300">
            PNG is often useful for editing, graphics, screenshots, website
            assets, design work, and images that need better quality after
            editing. JPG is commonly used for photos, while PNG is commonly used
            for graphics and image editing workflows.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Convert JPG to PNG Online</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your JPG or JPEG image file.</li>
            <li>The tool converts the image to PNG inside your browser.</li>
            <li>Preview the converted PNG image.</li>
            <li>Download the PNG file instantly.</li>
            <li>Use Clear All to convert another image.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Convert JPEG to PNG?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Convert JPG photos to PNG for editing</li>
            <li>• Create PNG files from JPEG images online</li>
            <li>• Use PNG images for graphics, documents, and design work</li>
            <li>• Change JPEG to PNG without installing software</li>
            <li>• Process images directly in your browser for privacy</li>
            <li>• Download a high-quality PNG image instantly</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">JPG vs PNG</h2>

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
                  <td className="border-t border-slate-800 px-4 py-3">JPG</td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Photos and smaller file sizes
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Cameras, websites, social media, and photo sharing
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">PNG</td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Graphics, screenshots, editing, and high-quality output
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Design assets, documents, icons, screenshots, and web
                    graphics
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
                How do I convert JPG to PNG online?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your JPG or JPEG file and the tool will convert it to PNG
                directly in your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I convert JPEG to PNG?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can upload JPEG or JPG files and download them as PNG
                images.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this JPG to PNG converter free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this online JPG to PNG converter is completely free to use.
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
                Does converting JPG to PNG improve quality?
              </h3>
              <p className="mt-2 text-slate-300">
                Converting JPG to PNG does not restore lost quality, but it can
                make the image easier to edit and save as a PNG file.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What is the difference between JPG and PNG?
              </h3>
              <p className="mt-2 text-slate-300">
                JPG is usually better for photos and smaller file sizes. PNG is
                often better for graphics, screenshots, editing, and high-quality
                output.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}