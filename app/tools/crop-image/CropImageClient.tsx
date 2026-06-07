"use client";

import { useRef, useState } from "react";

type CropBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const relatedTools = [
  {
    title: "Image Resizer",
    description: "Resize images by width and height.",
    href: "/tools/image-resizer",
  },
  {
    title: "Rotate Image",
    description: "Rotate JPG, PNG, and WEBP images.",
    href: "/tools/rotate-image",
  },
  {
    title: "Blur Image",
    description: "Blur photos and images online.",
    href: "/tools/blur-image",
  },
  {
    title: "Image Compressor",
    description: "Compress images for faster loading.",
    href: "/tools/image-compressor",
  },
];

export default function CropImageClient() {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [crop, setCrop] = useState<CropBox | null>(null);
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(
    null
  );
  const [isDrawing, setIsDrawing] = useState(false);

  function clearAll() {
    setImage(null);
    setCroppedImage(null);
    setCrop(null);
    setStartPoint(null);
    setIsDrawing(false);
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
    setCroppedImage(null);
    setCrop(null);
  }

  function getMousePosition(e: React.MouseEvent<HTMLDivElement>) {
    if (!imageRef.current) return { x: 0, y: 0 };

    const rect = imageRef.current.getBoundingClientRect();

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const point = getMousePosition(e);

    setStartPoint(point);
    setCrop({ x: point.x, y: point.y, width: 0, height: 0 });
    setIsDrawing(true);
    setCroppedImage(null);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDrawing || !startPoint || !imageRef.current) return;

    const point = getMousePosition(e);
    const rect = imageRef.current.getBoundingClientRect();

    const currentX = Math.max(0, Math.min(point.x, rect.width));
    const currentY = Math.max(0, Math.min(point.y, rect.height));

    setCrop({
      x: Math.min(startPoint.x, currentX),
      y: Math.min(startPoint.y, currentY),
      width: Math.abs(currentX - startPoint.x),
      height: Math.abs(currentY - startPoint.y),
    });
  }

  function handleMouseUp() {
    setIsDrawing(false);
  }

  function cropImage() {
    if (!imageRef.current || !crop || crop.width < 5 || crop.height < 5) {
      alert("Please draw a crop area first.");
      return;
    }

    const img = imageRef.current;
    const scaleX = img.naturalWidth / img.clientWidth;
    const scaleY = img.naturalHeight / img.clientHeight;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = crop.width * scaleX;
    canvas.height = crop.height * scaleY;

    ctx.drawImage(
      img,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      canvas.width,
      canvas.height
    );

    setCroppedImage(canvas.toDataURL("image/png"));
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools/image-tools" className="text-cyan-400">
          ← Back to Image Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Crop Image Online Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Crop JPG, PNG, WEBP, GIF, and other images online for free. Upload an
          image, draw a custom crop area, and download your cropped image
          instantly without uploading files to a server.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload Image to Crop
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {image && (
            <>
              <p className="mt-6 text-sm text-slate-400">
                Click and drag on the image to draw your crop area.
              </p>

              <div
                className="relative mt-6 inline-block max-w-full select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <img
                  ref={imageRef}
                  src={image}
                  alt="Crop image preview"
                  className="max-h-[650px] max-w-full rounded-2xl"
                  draggable={false}
                />

                {crop && (
                  <div
                    className="absolute border-4 border-cyan-400 bg-cyan-400/20"
                    style={{
                      left: crop.x,
                      top: crop.y,
                      width: crop.width,
                      height: crop.height,
                    }}
                  />
                )}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={cropImage}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  Crop Image
                </button>

                <button
                  onClick={clearAll}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
                >
                  Clear All
                </button>
              </div>

              {croppedImage && (
                <div className="mt-10 rounded-2xl bg-slate-950 p-5">
                  <h2 className="mb-4 text-xl font-bold">
                    Cropped Image Result
                  </h2>

                  <img
                    src={croppedImage}
                    alt="Cropped image result"
                    className="rounded-2xl"
                  />

                  <a
                    href={croppedImage}
                    download="cropped-image.png"
                    className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                  >
                    Download Cropped Image
                  </a>
                </div>
              )}
            </>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free Online Image Cropper for JPG, PNG and WEBP
          </h2>

          <p className="mt-4 text-slate-300">
            This free online image cropper helps you crop photos, screenshots,
            product images, profile pictures, thumbnails, banners, and website
            graphics directly in your browser. You can draw a custom crop box
            on your image and download the cropped result as a PNG file.
          </p>

          <p className="mt-4 text-slate-300">
            Use this tool when you need to crop JPG images, crop PNG images,
            crop WEBP files, remove unwanted edges, focus on one part of a
            photo, or create better image dimensions for social media and
            websites.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Crop an Image Online</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your JPG, PNG, WEBP, or other image file.</li>
            <li>Click and drag on the image to select the crop area.</li>
            <li>Click the Crop Image button.</li>
            <li>Preview your cropped image result.</li>
            <li>Download the cropped image instantly.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Use This Free Image Crop Tool?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Crop images online without installing software</li>
            <li>• Crop JPG, PNG, WEBP, GIF, and browser-supported images</li>
            <li>• Create thumbnails, profile pictures, and banners</li>
            <li>• Remove unwanted areas from photos and screenshots</li>
            <li>• Process images directly in your browser for privacy</li>
            <li>• Download cropped images quickly as PNG files</li>
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
                How do I crop an image online for free?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your image, draw a crop area with your mouse, click Crop
                Image, and download the cropped result.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I crop JPG, PNG, and WEBP images?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this crop image tool supports common browser image formats
                including JPG, PNG, WEBP, GIF, and more.
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
                Does cropping reduce image quality?
              </h3>
              <p className="mt-2 text-slate-300">
                Cropping removes parts of the image but keeps the selected area
                clear. The output is downloaded as a PNG image.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I crop images for social media?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can crop images for profile photos, posts, thumbnails,
                banners, product images, and social media graphics.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}