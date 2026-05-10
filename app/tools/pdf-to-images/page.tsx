"use client";

import { useState } from "react";

export default function PdfToImagesPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    setSelectedFile(file);
    setImages([]);
    setFileName(file.name.replace(/\.[^/.]+$/, ""));
  }

  async function convertPdfToImages(file: File) {
    setLoading(true);
    setImages([]);

    try {
      const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");

      const arrayBuffer = await file.arrayBuffer();

      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const pdf = await pdfjsLib.getDocument({
  data: arrayBuffer,
} as any).promise;

      const convertedImages: string[] = [];

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 2 });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        if (!context) continue;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext: any = {
          canvasContext: context,
          viewport,
        };

        await page.render(renderContext).promise;

        convertedImages.push(canvas.toDataURL("image/png"));
      }

      setImages(convertedImages);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while converting the PDF.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">PDF to Images Converter</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert PDF pages to PNG images online for free. Upload your PDF and
          download each page as a high-quality image.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload PDF File
          </label>

          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {selectedFile && (
            <p className="mt-4 text-sm text-slate-400">
              Selected file: {selectedFile.name}
            </p>
          )}

          <button
            onClick={() => selectedFile && convertPdfToImages(selectedFile)}
            disabled={!selectedFile || loading}
            className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Converting..." : "Convert PDF to Images"}
          </button>

          {loading && (
            <p className="mt-6 text-cyan-400">
              Converting PDF pages to images...
            </p>
          )}

          {images.length > 0 && (
            <div className="mt-8 space-y-8">
              {images.map((image, index) => (
                <div key={index} className="rounded-2xl bg-slate-950 p-5">
                  <h2 className="mb-4 text-xl font-bold">
                    Page {index + 1}
                  </h2>

                  <img
                    src={image}
                    alt={`PDF page ${index + 1}`}
                    className="rounded-xl border border-slate-800"
                  />

                  <a
                    href={image}
                    download={`${fileName}-page-${index + 1}.png`}
                    className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                  >
                    Download Page {index + 1}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Why Convert PDF to Images?</h2>

          <p className="mt-4 text-slate-300">
            Converting PDF pages to images is useful when you need to share a
            page as a PNG, upload it to social media, use it in presentations,
            or extract visual content from a PDF file.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Use This Tool</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your PDF file.</li>
            <li>Click the convert button.</li>
            <li>Download the converted images individually.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                Is this PDF to images converter free?
              </h3>

              <p className="mt-2 text-slate-300">
                Yes, this PDF to image converter is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Are my PDFs uploaded?</h3>

              <p className="mt-2 text-slate-300">
                No, conversion happens directly in your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What image format does it create?
              </h3>

              <p className="mt-2 text-slate-300">
                This tool converts PDF pages into PNG images.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}