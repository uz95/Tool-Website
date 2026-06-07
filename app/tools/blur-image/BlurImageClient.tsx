"use client";

import { useState } from "react";

const relatedTools = [
  {
    title: "Crop Image",
    description: "Crop JPG, PNG, and WEBP images online.",
    href: "/tools/crop-image",
  },
  {
    title: "Image Resizer",
    description: "Resize images by width and height.",
    href: "/tools/image-resizer",
  },
  {
    title: "Rotate Image",
    description: "Rotate photos and images online.",
    href: "/tools/rotate-image",
  },
  {
    title: "Image Compressor",
    description: "Reduce image file size online.",
    href: "/tools/image-compressor",
  },
];

const relatedGuides = [
  {
    title: "How to Blur Images Online Without Photoshop",
    href: "/blog/how-to-blur-images-online",
  },
  {
    title: "How to Resize Images Without Losing Quality",
    href: "/blog/how-to-resize-images-without-losing-quality",
  },
];

export default function BlurImageClient() {
  const [image, setImage] = useState("");
  const [blurredImage, setBlurredImage] = useState("");
  const [blur, setBlur] = useState(5);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    setImage(URL.createObjectURL(file));
    setBlurredImage("");
  }

  function applyBlur() {
    if (!image) return;

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.filter = `blur(${blur}px)`;
      ctx.drawImage(img, 0, 0);

      setBlurredImage(canvas.toDataURL("image/png"));
    };

    img.src = image;
  }

  function clearAll() {
    setImage("");
    setBlurredImage("");
    setBlur(5);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools/image-tools" className="text-cyan-400">
          ← Back to Image Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Blur Image Online Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Blur JPG, PNG, WEBP, and other photos online for free. Add a blur
          effect, hide sensitive information, soften backgrounds, or create
          stylish blurred images directly in your browser.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload Image to Blur
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {image && (
            <>
              <label className="mt-6 block text-sm text-slate-300">
                Blur Strength: {blur}px
              </label>

              <input
                type="range"
                min="1"
                max="30"
                value={blur}
                onChange={(e) => setBlur(Number(e.target.value))}
                className="mt-3 w-full"
              />

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={applyBlur}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  Blur Image
                </button>

                <button
                  onClick={clearAll}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
                >
                  Clear All
                </button>
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-xl font-bold">Original Image</h2>

                  <img
                    src={image}
                    alt="Original image preview"
                    className="rounded-2xl"
                  />
                </div>

                {blurredImage && (
                  <div>
                    <h2 className="mb-4 text-xl font-bold">
                      Blurred Image Result
                    </h2>

                    <img
                      src={blurredImage}
                      alt="Blurred image result"
                      className="rounded-2xl"
                    />

                    <a
                      href={blurredImage}
                      download="blurred-image.png"
                      className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                    >
                      Download Blurred Image
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free Online Blur Image Tool for JPG, PNG and WEBP
          </h2>

          <p className="mt-4 text-slate-300">
            This free online blur image tool lets you add a blur effect to
            photos and graphics without Photoshop or any editing software. You
            can blur JPG images, blur PNG images, blur WEBP files, and create a
            soft blurred photo effect directly in your browser.
          </p>

          <p className="mt-4 text-slate-300">
            Blurring an image is useful when you want to hide private
            information, cover text in screenshots, soften a background, create
            social media graphics, make thumbnails, or add a simple creative
            effect to a photo.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Blur an Image Online</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your JPG, PNG, WEBP, or other image file.</li>
            <li>Adjust the blur strength using the slider.</li>
            <li>Click the Blur Image button.</li>
            <li>Preview the blurred image result.</li>
            <li>Download the blurred image as a PNG file.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Use an Online Image Blur Tool?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Blur photos online without Photoshop</li>
            <li>• Hide private details in screenshots</li>
            <li>• Blur background images for social media posts</li>
            <li>• Create soft photo effects and thumbnails</li>
            <li>• Blur JPG, PNG, WEBP, and browser-supported images</li>
            <li>• Process images directly in your browser for privacy</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Best Uses for Blurred Images
          </h2>

          <p className="mt-4 text-slate-300">
            A blurred image can improve design and privacy. Many users blur
            photos for Instagram posts, YouTube thumbnails, profile banners,
            website backgrounds, product mockups, presentations, and screenshots
            that contain sensitive information.
          </p>

          <p className="mt-4 text-slate-300">
            If you need to blur an image online quickly, this tool gives you a
            simple way to upload, adjust blur strength, preview the result, and
            download the final image without creating an account.
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
                How do I blur an image online for free?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your image, choose the blur strength, click Blur Image,
                and download the blurred result.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I blur photos without Photoshop?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this tool lets you blur photos online without Photoshop or
                any editing software.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I blur JPG, PNG and WEBP images?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can blur JPG, PNG, WEBP, GIF, and other
                browser-supported image formats.
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
                Can I use this tool to hide private information?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, blurring is useful for hiding names, emails, faces, text,
                numbers, and other sensitive details in screenshots or photos.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What image format does the blurred image download as?
              </h3>
              <p className="mt-2 text-slate-300">
                The blurred image downloads as a PNG file for good quality and
                wide compatibility.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}