"use client";

import { useState } from "react";

const relatedTools = [
  {
    title: "PNG to JPG Converter",
    description: "Convert PNG images to JPG format.",
    href: "/tools/png-to-jpg",
  },
  {
    title: "PNG to WEBP Converter",
    description: "Convert PNG images to WEBP for websites.",
    href: "/tools/png-to-webp",
  },
  {
    title: "Favicon Generator",
    description: "Create a favicon from an image or logo.",
    href: "/tools/favicon-generator",
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
    title: "WEBP vs PNG: Which Image Format Is Better?",
    href: "/blog/webp-vs-png",
  },
];

export default function SvgToPngClient() {
  const [svgText, setSvgText] = useState("");
  const [preview, setPreview] = useState("");
  const [pngImage, setPngImage] = useState("");
  const [fileName, setFileName] = useState("converted-svg");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".svg")) {
      alert("Please upload an SVG file.");
      return;
    }

    setFileName(file.name.replace(/\.[^/.]+$/, ""));

    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target?.result as string;

      setSvgText(text);
      setPreview(URL.createObjectURL(new Blob([text], { type: "image/svg+xml" })));
      setPngImage("");
    };

    reader.readAsText(file);
  }

  function convertSvgToPng() {
    if (!svgText) {
      alert("Please upload an SVG file first.");
      return;
    }

    const svgBlob = new Blob([svgText], {
      type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(svgBlob);
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      canvas.width = img.width || 1000;
      canvas.height = img.height || 1000;

      ctx.drawImage(img, 0, 0);

      setPngImage(canvas.toDataURL("image/png"));
      URL.revokeObjectURL(url);
    };

    img.src = url;
  }

  function clearAll() {
    setSvgText("");
    setPreview("");
    setPngImage("");
    setFileName("converted-svg");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools/image-tools" className="text-cyan-400">
          ← Back to Image Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          SVG to PNG Converter Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert SVG to PNG online for free. Upload an SVG file, logo, icon,
          vector graphic, or illustration and download a high-quality PNG image
          directly in your browser. This tool is useful for turning SVG logos
          into PNG files for websites, social media, documents, presentations,
          apps, and design projects.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload SVG File
          </label>

          <input
            type="file"
            accept=".svg,image/svg+xml"
            onChange={handleFileChange}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {preview && (
            <>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-xl font-bold">SVG File Preview</h2>

                  <img
                    src={preview}
                    alt="SVG file preview before PNG conversion"
                    className="rounded-2xl bg-white p-4"
                  />
                </div>

                <div>
                  <h2 className="mb-4 text-xl font-bold">
                    Converted PNG Image
                  </h2>

                  {pngImage ? (
                    <>
                      <img
                        src={pngImage}
                        alt="Converted SVG to PNG preview"
                        className="rounded-2xl bg-white p-4"
                      />

                      <a
                        href={pngImage}
                        download={`${fileName}.png`}
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

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={convertSvgToPng}
                  disabled={!svgText}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Convert SVG to PNG
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
            Free SVG to PNG Converter for Logos and Icons
          </h2>

          <p className="mt-4 text-slate-300">
            This free SVG to PNG converter helps you change SVG files into PNG
            images without installing design software. You can use it as an SVG
            logo to PNG converter, SVG icon to PNG converter, vector to PNG
            converter, or browser-based SVG image converter.
          </p>

          <p className="mt-4 text-slate-300">
            SVG files are scalable vector graphics, which means they are great
            for logos, icons, and illustrations. PNG files are easier to upload,
            share, and use in many apps, documents, presentations, and websites
            that do not accept SVG files.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Convert SVG to PNG Online</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your SVG file, logo, icon, or vector image.</li>
            <li>Preview the SVG file in your browser.</li>
            <li>Click the Convert SVG to PNG button.</li>
            <li>Preview the converted PNG image.</li>
            <li>Download the PNG file instantly.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Why Convert SVG to PNG?</h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Convert SVG logos to PNG images</li>
            <li>• Turn SVG icons into PNG files</li>
            <li>• Use vector graphics in apps that require PNG</li>
            <li>• Create PNG images for social media and presentations</li>
            <li>• Convert SVG files without installing software</li>
            <li>• Process files directly in your browser for privacy</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">SVG vs PNG</h2>

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
                  <td className="border-t border-slate-800 px-4 py-3">SVG</td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Scalable vector graphics, logos, and icons
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Websites, UI icons, illustrations, and vector design
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">PNG</td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Raster images, sharing, uploads, and compatibility
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Documents, social media, presentations, apps, and previews
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
                How do I convert SVG to PNG online?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your SVG file, click Convert SVG to PNG, and download the
                PNG image.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I convert an SVG logo to PNG?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can convert SVG logos, icons, illustrations, and vector
                graphics into PNG files.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this SVG to PNG converter free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this online SVG to PNG converter is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are my SVG files uploaded to a server?
              </h3>
              <p className="mt-2 text-slate-300">
                No. SVG to PNG conversion happens directly inside your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Why convert SVG to PNG?
              </h3>
              <p className="mt-2 text-slate-300">
                PNG is easier to upload and share on many platforms that do not
                support SVG files.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does PNG keep SVG scalability?
              </h3>
              <p className="mt-2 text-slate-300">
                No. PNG is a raster image, so it does not stay infinitely
                scalable like SVG.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}