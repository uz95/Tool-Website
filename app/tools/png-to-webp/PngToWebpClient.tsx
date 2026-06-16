"use client";

import { useState } from "react";

const relatedTools = [
  {
    title: "WEBP to PNG Converter",
    description: "Convert WEBP images back to PNG.",
    href: "/tools/webp-to-png",
  },
  {
    title: "PNG to JPG Converter",
    description: "Convert PNG images to JPG.",
    href: "/tools/png-to-jpg",
  },
  {
    title: "Image Compressor",
    description: "Compress images for faster websites.",
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
    title: "WEBP vs PNG: Which Image Format Should You Use?",
    href: "/blog/webp-vs-png",
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

export default function PngToWebpClient() {
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

        setConvertedImage(canvas.toDataURL("image/webp", 0.95));
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
          PNG to WEBP Converter Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert PNG to WEBP online for free. Upload a PNG image and create a
          high-quality WEBP file directly in your browser. This tool is useful
          for reducing image size, optimizing website images, improving page
          speed, and preparing images for modern web performance.
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
                    className="rounded-2xl"
                  />
                </div>

                <div>
                  <h2 className="mb-4 text-xl font-bold">
                    Converted WEBP Image
                  </h2>

                  {convertedImage ? (
                    <>
                      <img
                        src={convertedImage}
                        alt="Converted WEBP image preview"
                        className="rounded-2xl"
                      />

                      <a
                        href={convertedImage}
                        download={`${fileName || "converted-image"}.webp`}
                        className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                      >
                        Download WEBP Image
                      </a>
                    </>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
                      Converted WEBP will appear here
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
            Free PNG to WEBP Converter for Website Images
          </h2>

          <p className="mt-4 text-slate-300">
            This free PNG to WEBP converter helps you change PNG images into
            WEBP format without installing software. You can use it as a PNG to
            WEBP converter, image to WEBP converter, PNG image optimizer, or
            browser-based WEBP converter.
          </p>

          <p className="mt-4 text-slate-300">
            WEBP is a modern image format commonly used for websites because it
            can create smaller files while keeping good visual quality. Smaller
            images can help pages load faster, reduce bandwidth, and improve the
            user experience on mobile and desktop devices.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Convert PNG to WEBP Online</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your PNG image file.</li>
            <li>The tool converts the PNG to WEBP inside your browser.</li>
            <li>Preview the converted WEBP image.</li>
            <li>Download the WEBP file instantly.</li>
            <li>Use Clear All to convert another PNG image.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Convert PNG Images to WEBP?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Reduce PNG file size for websites</li>
            <li>• Convert PNG images to modern WEBP format</li>
            <li>• Optimize images for faster page loading</li>
            <li>• Prepare images for blogs, landing pages, and web apps</li>
            <li>• Convert PNG to WEBP without installing software</li>
            <li>• Process images directly in your browser for privacy</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">PNG vs WEBP</h2>

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
                    Transparency, icons, screenshots, and sharp graphics
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Logos, UI graphics, screenshots, and design assets
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">WEBP</td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Smaller website images and modern web optimization
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Blog images, product images, landing pages, and web apps
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
                How do I convert PNG to WEBP online?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your PNG file and the tool will convert it to WEBP
                directly in your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this PNG to WEBP converter free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this online PNG to WEBP converter is completely free to
                use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does WEBP reduce image file size?
              </h3>
              <p className="mt-2 text-slate-300">
                WEBP usually creates smaller files than PNG while keeping good
                image quality, especially for website images.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is WEBP good for SEO?
              </h3>
              <p className="mt-2 text-slate-300">
                WEBP can help reduce image size and improve page speed, which
                can improve user experience and website performance.
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
                Can I use WEBP images on websites?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, WEBP is commonly used for modern websites, blogs, product
                images, landing pages, and web applications.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}