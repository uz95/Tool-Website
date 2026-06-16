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
    title: "Blur Image",
    description: "Blur photos and screenshots online.",
    href: "/tools/blur-image",
  },
  {
    title: "Image Compressor",
    description: "Compress images for websites and sharing.",
    href: "/tools/image-compressor",
  },
];

const relatedGuides = [
  {
    title: "How to Resize Images Without Losing Quality",
    href: "/blog/how-to-resize-images-without-losing-quality",
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

export default function RotateImageClient() {
  const [image, setImage] = useState("");
  const [rotatedImage, setRotatedImage] = useState("");
  const [rotation, setRotation] = useState(90);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    setImage(URL.createObjectURL(file));
    setRotatedImage("");
  }

  function rotateImage() {
    if (!image) return;

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      const angle = (rotation * Math.PI) / 180;

      if (rotation === 90 || rotation === 270) {
        canvas.width = img.height;
        canvas.height = img.width;
      } else {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(angle);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);

      setRotatedImage(canvas.toDataURL("image/png"));
    };

    img.src = image;
  }

  function clearAll() {
    setImage("");
    setRotatedImage("");
    setRotation(90);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools/image-tools" className="text-cyan-400">
          ← Back to Image Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Rotate Image Online Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Rotate images online for free. Upload JPG, PNG, WEBP, GIF, or other
          image files and rotate them 90 degrees, 180 degrees, or 270 degrees
          directly in your browser. This tool is useful for fixing sideways
          photos, rotating screenshots, product images, profile pictures, and
          social media graphics.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload Image to Rotate
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {image && (
            <>
              <label className="mt-6 block text-sm font-medium text-slate-300">
                Rotation Angle
              </label>

              <select
                value={rotation}
                onChange={(e) => {
                  setRotation(Number(e.target.value));
                  setRotatedImage("");
                }}
                className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
              >
                <option value={90}>Rotate 90 Degrees</option>
                <option value={180}>Rotate 180 Degrees</option>
                <option value={270}>Rotate 270 Degrees</option>
              </select>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={rotateImage}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  Rotate Image
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
                    alt="Original image preview before rotation"
                    className="rounded-2xl"
                  />
                </div>

                {rotatedImage && (
                  <div>
                    <h2 className="mb-4 text-xl font-bold">
                      Rotated Image Result
                    </h2>

                    <img
                      src={rotatedImage}
                      alt="Rotated image result preview"
                      className="rounded-2xl"
                    />

                    <a
                      href={rotatedImage}
                      download="rotated-image.png"
                      className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                    >
                      Download Rotated Image
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free Online Image Rotator for JPG, PNG and WEBP
          </h2>

          <p className="mt-4 text-slate-300">
            This free online image rotator helps you rotate photos and graphics
            without installing editing software. You can rotate JPG images,
            rotate PNG images, rotate WEBP files, and fix sideways images
            directly in your browser.
          </p>

          <p className="mt-4 text-slate-300">
            Use this tool when a photo is turned the wrong way, a screenshot has
            the wrong orientation, or an image needs to be rotated before
            uploading to a website, document, product page, profile, or social
            media post.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Rotate an Image Online</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your JPG, PNG, WEBP, or other image file.</li>
            <li>Select a rotation angle: 90, 180, or 270 degrees.</li>
            <li>Click the Rotate Image button.</li>
            <li>Preview the rotated image result.</li>
            <li>Download the rotated image instantly.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Use an Online Rotate Image Tool?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Rotate image 90 degrees online</li>
            <li>• Rotate image 180 degrees online</li>
            <li>• Rotate image 270 degrees online</li>
            <li>• Fix sideways photos and screenshots</li>
            <li>• Rotate JPG, PNG, WEBP, and browser-supported images</li>
            <li>• Process images directly in your browser for privacy</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Best Uses for Rotated Images</h2>

          <p className="mt-4 text-slate-300">
            Rotating images is useful for product photos, profile pictures,
            document scans, screenshots, blog images, thumbnails, presentations,
            school assignments, and social media graphics. A correctly oriented
            image looks cleaner and more professional.
          </p>

          <p className="mt-4 text-slate-300">
            If your photo was taken sideways or uploaded with the wrong
            orientation, this rotate image tool gives you a simple way to fix it
            online and download the corrected image.
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
                How do I rotate an image online?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your image, choose 90, 180, or 270 degrees, click Rotate
                Image, and download the result.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I rotate JPG and PNG images?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this tool supports JPG, PNG, WEBP, GIF, and other
                browser-supported image formats.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this rotate image tool free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this image rotator is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are my images uploaded to a server?
              </h3>
              <p className="mt-2 text-slate-300">
                No. Image rotation happens directly inside your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I rotate a photo 90 degrees?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can rotate images 90 degrees, 180 degrees, or 270
                degrees.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What format does the rotated image download as?
              </h3>
              <p className="mt-2 text-slate-300">
                The rotated image downloads as a PNG file for good quality and
                wide compatibility.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}