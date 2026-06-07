"use client";

import { useState } from "react";

const faviconSizes = [16, 32, 48, 64, 180, 512];

const relatedTools = [
  {
    title: "PNG to JPG",
    description: "Convert PNG images to JPG online.",
    href: "/tools/png-to-jpg",
  },
  {
    title: "Image Resizer",
    description: "Resize logos and images by pixels.",
    href: "/tools/image-resizer",
  },
  {
    title: "Crop Image",
    description: "Crop logos and images online.",
    href: "/tools/crop-image",
  },
  {
    title: "Image Compressor",
    description: "Compress images for websites.",
    href: "/tools/image-compressor",
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

export default function FaviconGeneratorClient() {
  const [preview, setPreview] = useState("");
  const [favicon, setFavicon] = useState("");
  const [fileName, setFileName] = useState("favicon");
  const [size, setSize] = useState(64);

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    setFileName(file.name.replace(/\.[^/.]+$/, "") || "favicon");
    setPreview(URL.createObjectURL(file));
    setFavicon("");
  }

  function generateFavicon() {
    if (!preview) {
      alert("Please upload an image first.");
      return;
    }

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      canvas.width = size;
      canvas.height = size;

      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);

      setFavicon(canvas.toDataURL("image/png"));
    };

    img.src = preview;
  }

  function clearAll() {
    setPreview("");
    setFavicon("");
    setFileName("favicon");
    setSize(64);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools/image-tools" className="text-cyan-400">
          ← Back to Image Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Favicon Generator Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Create a favicon online for free from PNG, JPG, WEBP, logos, icons,
          and images. Generate 16x16, 32x32, 48x48, 64x64, 180x180, or 512x512
          favicon images directly in your browser.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload Image or Logo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {preview && (
            <>
              <label className="mt-6 block text-sm font-medium text-slate-300">
                Select Favicon Size
              </label>

              <select
                value={size}
                onChange={(e) => {
                  setSize(Number(e.target.value));
                  setFavicon("");
                }}
                className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
              >
                {faviconSizes.map((faviconSize) => (
                  <option key={faviconSize} value={faviconSize}>
                    {faviconSize}x{faviconSize}
                  </option>
                ))}
              </select>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-xl font-bold">Original Image</h2>

                  <img
                    src={preview}
                    alt="Uploaded image or logo preview"
                    className="max-h-[350px] rounded-2xl"
                  />
                </div>

                <div>
                  <h2 className="mb-4 text-xl font-bold">
                    Generated {size}x{size} Favicon
                  </h2>

                  {favicon ? (
                    <>
                      <div className="rounded-2xl bg-slate-950 p-6">
                        <img
                          src={favicon}
                          alt={`${size}x${size} generated favicon preview`}
                          className="rounded-lg border border-slate-700"
                          style={{
                            width: Math.min(size, 128),
                            height: Math.min(size, 128),
                          }}
                        />

                        <p className="mt-4 text-sm text-slate-400">
                          Generated size: {size}x{size} pixels
                        </p>
                      </div>

                      <a
                        href={favicon}
                        download={`${fileName}-favicon-${size}x${size}.png`}
                        className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                      >
                        Download {size}x{size} Favicon PNG
                      </a>
                    </>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
                      Generated favicon will appear here
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={generateFavicon}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  Generate {size}x{size} Favicon
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
            Free Online Favicon Generator from Image
          </h2>

          <p className="mt-4 text-slate-300">
            This free online favicon generator helps you create a favicon from
            an image, logo, icon, PNG file, JPG photo, or WEBP graphic. You can
            generate multiple favicon sizes including 16x16, 32x32, 48x48,
            64x64, 180x180, and 512x512.
          </p>

          <p className="mt-4 text-slate-300">
            Use this tool as a 16x16 favicon generator, 32x32 favicon
            generator, 64x64 favicon generator, 180x180 app icon generator, or
            512x512 website icon generator. The favicon is created directly in
            your browser.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Create a Favicon Online</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your logo, icon, PNG, JPG, WEBP, or image file.</li>
            <li>Select the favicon size you want to generate.</li>
            <li>Click the Generate Favicon button.</li>
            <li>Preview your favicon image.</li>
            <li>Download the favicon PNG file.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Which Favicon Size Should You Use?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• 16x16 favicon: common browser tab icon size</li>
            <li>• 32x32 favicon: commonly used for modern browser tabs</li>
            <li>• 48x48 favicon: useful for desktop shortcuts</li>
            <li>• 64x64 favicon: good general-purpose website icon</li>
            <li>• 180x180 icon: useful for Apple touch icons</li>
            <li>• 512x512 icon: useful for app icons and high-resolution displays</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Your Website Needs a Favicon
          </h2>

          <p className="mt-4 text-slate-300">
            A favicon makes your website easier to recognize in browser tabs and
            bookmarks. It helps your site look more professional and gives your
            brand a consistent visual identity across browsers, search results,
            mobile shortcuts, and saved links.
          </p>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Create a favicon from a logo or image</li>
            <li>• Make your website look more professional</li>
            <li>• Improve brand recognition in browser tabs</li>
            <li>• Generate a simple website icon without design software</li>
            <li>• Use PNG, JPG, WEBP, and browser-supported image files</li>
            <li>• Process your image directly in your browser</li>
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
                How do I create a favicon from an image?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your image or logo, choose a favicon size, click Generate
                Favicon, and download the PNG result.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I create 16x16 and 32x32 favicons?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this tool can generate 16x16, 32x32, 48x48, 64x64, 180x180,
                and 512x512 favicon images.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I create a favicon from PNG or JPG?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can create a favicon from PNG, JPG, WEBP, and other
                browser-supported image formats.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this favicon generator free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this favicon generator is completely free to use.
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

            <div>
              <h3 className="font-semibold">
                Which favicon size is best?
              </h3>
              <p className="mt-2 text-slate-300">
                16x16 and 32x32 are common browser favicon sizes. 180x180 is
                useful for Apple touch icons, and 512x512 is useful for app
                icons or high-resolution displays.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}