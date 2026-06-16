"use client";

import { useState } from "react";

const relatedTools = [
  {
    title: "Images to PDF Converter",
    description: "Convert JPG, PNG, and WEBP images into PDF.",
    href: "/tools/images-to-pdf",
  },
  {
    title: "PDF to Word Converter",
    description: "Convert PDF files into editable Word documents.",
    href: "/tools/pdf-to-word",
  },
  {
    title: "Image Compressor",
    description: "Compress converted images online.",
    href: "/tools/image-compressor",
  },
  {
    title: "Image Resizer",
    description: "Resize converted PDF images.",
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
    title: "How to Compress Images for Faster Websites",
    href: "/blog/how-to-compress-images-for-faster-websites",
  },
];

export default function PdfToImagesClient() {
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

  function clearAll() {
    setSelectedFile(null);
    setImages([]);
    setFileName("");
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools/pdf-tools" className="text-cyan-400">
          ← Back to PDF Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          PDF to Images Converter Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert PDF to images online for free. Turn PDF pages into
          high-quality PNG images directly in your browser. Upload a PDF file
          and download each page as a separate image for sharing, editing,
          presentations, documents, social media, or online uploads.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Upload PDF File to Convert
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

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => selectedFile && convertPdfToImages(selectedFile)}
              disabled={!selectedFile || loading}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Converting..." : "Convert PDF to Images"}
            </button>

            <button
              onClick={clearAll}
              disabled={!selectedFile && images.length === 0}
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Clear All
            </button>
          </div>

          {loading && (
            <p className="mt-6 font-semibold text-cyan-400">
              Converting PDF pages to PNG images...
            </p>
          )}

          {images.length > 0 && (
            <div className="mt-8 space-y-8">
              {images.map((image, index) => (
                <div key={index} className="rounded-2xl bg-slate-950 p-5">
                  <h2 className="mb-4 text-xl font-bold">
                    PDF Page {index + 1} as PNG Image
                  </h2>

                  <img
                    src={image}
                    alt={`Converted PDF page ${index + 1} PNG image`}
                    className="rounded-xl border border-slate-800"
                  />

                  <a
                    href={image}
                    download={`${fileName || "pdf"}-page-${index + 1}.png`}
                    className="mt-5 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
                  >
                    Download Page {index + 1} PNG
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free PDF to PNG Image Converter Online
          </h2>

          <p className="mt-4 text-slate-300">
            This free PDF to images converter helps you convert PDF pages into
            PNG image files. You can use it as a PDF to PNG converter, PDF page
            to image converter, document to image converter, or PDF screenshot
            converter.
          </p>

          <p className="mt-4 text-slate-300">
            Converting PDF pages to images is useful when you need to extract
            pages from a PDF, upload a PDF page as an image, share a document
            preview, use pages in presentations, or save PDF pages as PNG files
            for editing and design work.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            How to Convert PDF to Images Online
          </h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your PDF file.</li>
            <li>Click the Convert PDF to Images button.</li>
            <li>Wait while each PDF page is converted into a PNG image.</li>
            <li>Preview the converted page images.</li>
            <li>Download each PDF page as a PNG file.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Convert PDF Pages to Images?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Convert PDF pages to PNG images online</li>
            <li>• Extract PDF pages as image files</li>
            <li>• Share a PDF page as an image</li>
            <li>• Use PDF pages in presentations or social media posts</li>
            <li>• Save document pages as PNG for editing</li>
            <li>• Process PDF files directly in your browser for privacy</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Best Uses for PDF to Image Conversion
          </h2>

          <p className="mt-4 text-slate-300">
            PDF to image conversion is useful for students, freelancers,
            designers, office workers, marketers, and anyone who needs to turn
            document pages into image files. Instead of taking screenshots
            manually, this tool converts every PDF page into a clean PNG image.
          </p>

          <p className="mt-4 text-slate-300">
            You can convert invoices, scanned documents, assignment pages,
            reports, forms, certificates, posters, flyers, and presentation
            pages into PNG images that are easy to share or upload.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            PDF to PNG vs Screenshot
          </h2>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800">
            <table className="w-full text-left">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Best For</th>
                  <th className="px-4 py-3">Result</th>
                </tr>
              </thead>

              <tbody className="bg-slate-950 text-slate-300">
                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    PDF to PNG
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Converting full PDF pages
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Clean page images
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Screenshot
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Capturing visible screen area
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Depends on screen size and zoom
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Related PDF and Image Tools</h2>

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
                How do I convert PDF to images online?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your PDF file, click Convert PDF to Images, and download
                each page as a PNG image.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I convert PDF to PNG?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this tool converts PDF pages into PNG images.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I extract PDF pages as images?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, each PDF page is converted into a separate image that you
                can download.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this PDF to images converter free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this online PDF to images converter is free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are my PDFs uploaded to a server?
              </h3>
              <p className="mt-2 text-slate-300">
                No. Your PDF is processed directly in your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What image format does this tool create?
              </h3>
              <p className="mt-2 text-slate-300">
                This tool converts PDF pages into PNG image files.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}