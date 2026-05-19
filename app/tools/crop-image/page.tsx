"use client";

import { useRef, useState } from "react";

type CropBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export default function CropImagePage() {
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

    const x = Math.min(startPoint.x, currentX);
    const y = Math.min(startPoint.y, currentY);
    const width = Math.abs(currentX - startPoint.x);
    const height = Math.abs(currentY - startPoint.y);

    setCrop({ x, y, width, height });
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
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">Crop Image Online</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Crop images online for free. Upload an image, draw a crop area, and
          download your cropped PNG image instantly.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload Image
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
                  alt="Image crop preview"
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
                  <h2 className="mb-4 text-xl font-bold">Cropped Image</h2>

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
          <h2 className="text-2xl font-bold">Free Online Image Cropper</h2>
          <p className="mt-4 text-slate-300">
            This free online image cropper lets you crop JPG, PNG, WEBP, and
            other image formats directly in your browser. You can draw a custom
            crop area with your mouse and download the cropped image without
            installing any software.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Crop an Image Online</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your image file.</li>
            <li>Click and drag on the image to select the crop area.</li>
            <li>Click the Crop Image button.</li>
            <li>Download your cropped image as a PNG file.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Why Use This Image Crop Tool?</h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Crop images for social media posts and profile pictures</li>
            <li>• Remove unwanted parts from photos</li>
            <li>• Create thumbnails and banners</li>
            <li>• Crop screenshots, product images, and website graphics</li>
            <li>• Works directly in your browser without uploading files</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">Is this image cropper free?</h3>
              <p className="mt-2 text-slate-300">
                Yes, this online image cropper is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Are my images uploaded?</h3>
              <p className="mt-2 text-slate-300">
                No, your image is processed directly in your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What image formats can I crop?
              </h3>
              <p className="mt-2 text-slate-300">
                You can crop common formats like JPG, PNG, WEBP, GIF, and other
                browser-supported image files.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}