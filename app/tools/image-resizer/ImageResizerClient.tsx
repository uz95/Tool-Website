"use client";

import { useState } from "react";

const relatedTools = [
  {
    title: "Image Compressor",
    description: "Reduce image file size online.",
    href: "/tools/image-compressor",
  },
  {
    title: "Crop Image",
    description: "Crop JPG, PNG, and WEBP images online.",
    href: "/tools/crop-image",
  },
  {
    title: "Rotate Image",
    description: "Rotate images online for free.",
    href: "/tools/rotate-image",
  },
  {
    title: "PNG to WEBP",
    description: "Convert PNG images to WEBP format.",
    href: "/tools/png-to-webp",
  },
];

export default function ImageResizerClient() {
  const [preview, setPreview] = useState("");
  const [resizedImage, setResizedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    setSelectedFile(file);
    setFileName(file.name.replace(/\.[^/.]+$/, ""));
    setPreview(URL.createObjectURL(file));
    setResizedImage("");

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      setWidth(String(img.width));
      setHeight(String(img.height));
    };
  }

  function clearAll() {
    setPreview("");
    setResizedImage("");
    setSelectedFile(null);
    setFileName("");
    setWidth("");
    setHeight("");
  }

  function resizeImage() {
    if (!selectedFile) return;

    const newWidth = Number(width);
    const newHeight = Number(height);

    if (!newWidth || !newHeight || newWidth <= 0 || newHeight <= 0) {
      alert("Please enter valid width and height.");
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(selectedFile);

    reader.onload = (event) => {
      const img = new Image();

      img.src = event.target?.result as string;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        canvas.width = newWidth;
        canvas.height = newHeight;

        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        const resizedData = canvas.toDataURL("image/png");
        setResizedImage(resizedData);
      };
    };
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools/image-tools" className="text-cyan-400">
          ← Back to Image Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Resize Image Online Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Resize JPG, PNG, WEBP, GIF, and other images online for free. Change
          image width and height by pixels directly in your browser without
          uploading files to a server.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload Image to Resize
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {preview && (
            <>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-xl font-bold">Original Image</h2>

                  <img
                    src={preview}
                    alt="Original image preview"
                    className="rounded-2xl border border-slate-800"
                  />
                </div>

                <div>
                  <h2 className="mb-4 text-xl font-bold">
                    Resize Image by Pixels
                  </h2>

                  <label className="block text-sm text-slate-300">
                    Width in pixels
                  </label>

                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                  />

                  <label className="mt-5 block text-sm text-slate-300">
                    Height in pixels
                  </label>

                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                  />

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                    <button
                      onClick={resizeImage}
                      className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                    >
                      Resize Image
                    </button>

                    <button
                      onClick={clearAll}
                      className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {resizedImage && (
            <div className="mt-8 rounded-2xl bg-slate-950 p-5">
              <h2 className="mb-4 text-xl font-bold">Resized Image Result</h2>

              <img
                src={resizedImage}
                alt="Resized image result"
                className="rounded-xl border border-slate-800"
              />

              <a
                href={resizedImage}
                download={`${fileName || "resized-image"}.png`}
                className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Download Resized Image
              </a>
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free Online Image Resizer for JPG, PNG and WEBP
          </h2>

          <p className="mt-4 text-slate-300">
            This free online image resizer helps you change image dimensions by
            width and height in pixels. You can resize photos, screenshots,
            profile pictures, product images, thumbnails, banners, and website
            graphics directly in your browser.
          </p>

          <p className="mt-4 text-slate-300">
            Use this tool to resize JPG images, resize PNG images, resize WEBP
            files, reduce image dimensions for websites, prepare images for
            social media, or create smaller files for faster uploads.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Resize an Image Online</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your JPG, PNG, WEBP, or other image file.</li>
            <li>Enter the desired width and height in pixels.</li>
            <li>Click the Resize Image button.</li>
            <li>Preview your resized image result.</li>
            <li>Download the resized image instantly.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Resize Images for Websites and Social Media?
          </h2>

          <p className="mt-4 text-slate-300">
            Resizing images helps create the correct dimensions for websites,
            blogs, social media posts, email, documents, product listings, and
            online uploads. Proper image dimensions can also improve loading
            speed and reduce unnecessary file size.
          </p>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Resize images online by width and height</li>
            <li>• Resize JPG, PNG, WEBP, and browser-supported images</li>
            <li>• Prepare images for websites, blogs, and social media</li>
            <li>• Reduce large image dimensions for faster uploads</li>
            <li>• Create thumbnails, banners, profile photos, and graphics</li>
            <li>• Process images directly in your browser for privacy</li>
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
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                How do I resize an image online for free?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your image, enter the new width and height in pixels,
                click Resize Image, and download the resized file.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I resize JPG, PNG and WEBP images?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this tool supports JPG, PNG, WEBP, GIF, and other common
                browser-supported image formats.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does resizing reduce image quality?
              </h3>
              <p className="mt-2 text-slate-300">
                Reducing image dimensions usually keeps good visual quality.
                Enlarging a small image too much may make it look less sharp.
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
                Can I resize images for websites?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, resizing images is useful for websites, blogs, product
                photos, thumbnails, and social media graphics.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}