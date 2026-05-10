"use client";

import { useState } from "react";
import jsPDF from "jspdf";

type PreviewImage = {
  url: string;
  file: File;
};

export default function ImagesToPdfPage() {
  const [images, setImages] = useState<PreviewImage[]>([]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);

    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    const previews = imageFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImages(previews);
  }

  function createPdf() {
    if (images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    images.forEach((image, index) => {
      if (index > 0) {
        pdf.addPage();
      }

      pdf.addImage(image.url, "JPEG", 10, 10, pageWidth - 20, pageHeight - 20);
    });

    pdf.save("converted-images.pdf");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">Images to PDF Converter</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert JPG, PNG, WEBP, and other images into a PDF file online for
          free.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload Images
          </label>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {images.length > 0 && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {images.map((image, index) => (
                <div key={index} className="rounded-xl bg-slate-950 p-3">
                  <img
                    src={image.url}
                    alt={`Uploaded image ${index + 1}`}
                    className="h-48 w-full rounded-lg object-cover"
                  />

                  <p className="mt-3 truncate text-sm text-slate-400">
                    {image.file.name}
                  </p>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={createPdf}
            disabled={images.length === 0}
            className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Convert Images to PDF
          </button>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Why Convert Images to PDF?</h2>

          <p className="mt-4 text-slate-300">
            Converting images to PDF is useful for documents, assignments,
            receipts, scanned pages, portfolios, and sharing multiple images in
            one file.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Use This Tool</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload one or more images.</li>
            <li>Preview the selected images.</li>
            <li>Click the convert button to download your PDF.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                Is this images to PDF converter free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this tool is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Are my images uploaded?</h3>
              <p className="mt-2 text-slate-300">
                No, the PDF is created directly in your browser.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}