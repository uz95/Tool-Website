"use client";

import { useState } from "react";

const relatedTools = [
  {
    title: "SVG to PNG Converter",
    description: "Convert SVG files to PNG images.",
    href: "/tools/svg-to-png",
  },
  {
    title: "PNG to WEBP Converter",
    description: "Convert PNG images to WEBP format.",
    href: "/tools/png-to-webp",
  },
  {
    title: "JPG to PNG Converter",
    description: "Convert JPG images to PNG format.",
    href: "/tools/jpg-to-png",
  },
  {
    title: "Image Compressor",
    description: "Compress images for websites.",
    href: "/tools/image-compressor",
  },
];

const relatedGuides = [
  {
    title: "What Is Base64 Image Encoding?",
    href: "/blog/what-is-base64-image",
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

export default function ImageToBase64Client() {
  const [base64, setBase64] = useState("");
  const [preview, setPreview] = useState("");
  const [copied, setCopied] = useState(false);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    setPreview(URL.createObjectURL(file));
    setCopied(false);

    const reader = new FileReader();

    reader.onload = () => {
      setBase64(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  function copyBase64() {
    if (!base64) return;

    navigator.clipboard.writeText(base64);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function downloadBase64() {
    if (!base64) return;

    const blob = new Blob([base64], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "base64-image.txt";
    a.click();

    URL.revokeObjectURL(url);
  }

  function clearAll() {
    setBase64("");
    setPreview("");
    setCopied(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools/image-tools" className="text-cyan-400">
          ← Back to Image Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Convert Image to Base64 Online Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert image to Base64 online for free. Generate Base64 strings and
          Data URLs from JPG, PNG, WEBP, SVG, GIF, and other image formats
          directly in your browser for HTML, CSS, JavaScript, email templates,
          and web development projects.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload Image to Convert
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {preview && (
            <div className="mt-8">
              <h2 className="mb-4 text-xl font-bold">Image Preview</h2>

              <img
                src={preview}
                alt="Uploaded image preview"
                className="max-h-80 rounded-2xl"
              />
            </div>
          )}

          {base64 && (
            <>
              <label className="mt-8 block text-sm font-medium text-slate-300">
                Base64 Output / Data URL
              </label>

              <textarea
                value={base64}
                readOnly
                className="mt-3 h-64 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300"
              />

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={copyBase64}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  Copy Base64
                </button>

                <button
                  onClick={downloadBase64}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
                >
                  Download Base64 TXT
                </button>

                <button
                  onClick={clearAll}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
                >
                  Clear All
                </button>
              </div>

              {copied && (
                <p className="mt-3 text-sm font-semibold text-green-400">
                  Base64 copied successfully.
                </p>
              )}
            </>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free Image to Base64 Converter for Developers
          </h2>

          <p className="mt-4 text-slate-300">
            This free image to Base64 converter helps developers convert image
            files into Base64 strings and Data URLs. You can convert PNG to
            Base64, JPG to Base64, SVG to Base64, WEBP to Base64, and GIF to
            Base64 directly in your browser.
          </p>

          <p className="mt-4 text-slate-300">
            Base64 image strings are commonly used in HTML, CSS, JavaScript,
            JSON, XML, email templates, React projects, small icons, and inline
            image embedding. This tool is useful when you need a quick Base64
            image encoder without installing software.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What Is Base64 Encoding?</h2>

          <p className="mt-4 text-slate-300">
            Base64 encoding converts binary image data into text characters. An
            image file normally contains binary data, but a Base64 string can be
            copied, stored, or embedded inside text-based formats like HTML,
            CSS, JSON, XML, and email templates.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Image to Base64 Data URL Example</h2>

          <p className="mt-4 text-slate-300">
            A Base64 image Data URL usually begins with a format prefix followed
            by the encoded image data.
          </p>

          <div className="mt-5 overflow-x-auto rounded-2xl bg-slate-900 p-5 text-sm text-slate-300">
            data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Common Uses of Base64 Images
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Embedding small images directly in HTML</li>
            <li>• CSS background images and inline icons</li>
            <li>• HTML email templates</li>
            <li>• JavaScript, React, and frontend projects</li>
            <li>• API payloads, JSON data, and XML documents</li>
            <li>• Avoiding extra image file requests for tiny assets</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            When Should You Avoid Base64 Images?
          </h2>

          <p className="mt-4 text-slate-300">
            Base64 is useful for small images, icons, and simple embedded
            assets. For large photos or many images, normal image files are
            usually better because Base64 can increase file size and make HTML
            or CSS files harder to manage.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Related Developer and Image Tools</h2>

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
                How do I convert an image to Base64?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your image and the tool will automatically generate a
                Base64 string and Data URL that you can copy or download.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I convert PNG to Base64?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can convert PNG images to Base64 using this tool.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I convert JPG to Base64?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, JPG and JPEG images can be converted to Base64.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What is a Base64 image Data URL?
              </h3>
              <p className="mt-2 text-slate-300">
                A Data URL is a text string that starts with data:image and
                contains the Base64 encoded image data.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are Base64 images faster?
              </h3>
              <p className="mt-2 text-slate-300">
                Base64 can be useful for very small images because it avoids
                extra file requests, but large Base64 images can increase page
                size.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are my images uploaded to a server?
              </h3>
              <p className="mt-2 text-slate-300">
                No. Your image is processed directly inside your browser.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}