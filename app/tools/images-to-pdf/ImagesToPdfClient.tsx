"use client";

import { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";

type PreviewImage = {
  url: string;
  file: File;
};

const relatedTools = [
  { name: "PDF to Images", href: "/tools/pdf-to-images" },
  { name: "PDF to Word", href: "/tools/pdf-to-word" },
  { name: "JPG to PNG", href: "/tools/jpg-to-png" },
  { name: "PNG to JPG", href: "/tools/png-to-jpg" },
  { name: "PNG to WEBP", href: "/tools/png-to-webp" },
  { name: "WEBP to PNG", href: "/tools/webp-to-png" },
  { name: "HEIC to JPG", href: "/tools/heic-to-jpg" },
  { name: "Image Compressor", href: "/tools/image-compressor" },
  { name: "Image Resizer", href: "/tools/image-resizer" },
  { name: "Crop Image", href: "/tools/crop-image" },
];

const relatedBlogs = [
  {
    name: "Best Image Format for Websites",
    href: "/blog/best-image-format-for-websites",
  },
  {
    name: "How to Convert WEBP to PNG",
    href: "/blog/how-to-convert-webp-to-png",
  },
  {
    name: "PNG vs JPG",
    href: "/blog/png-vs-jpg",
  },
  {
    name: "PNG vs WEBP",
    href: "/blog/png-vs-webp",
  },
  {
    name: "WEBP vs PNG",
    href: "/blog/webp-vs-png",
  },
  {
    name: "How to Compress Images for Faster Websites",
    href: "/blog/how-to-compress-images-for-faster-websites",
  },
  {
    name: "How to Resize Images Without Losing Quality",
    href: "/blog/how-to-resize-images-without-losing-quality",
  },
  {
    name: "How to Rotate Images Online",
    href: "/blog/how-to-rotate-images-online",
  },
];

export default function ImagesToPdfClient() {
  const [images, setImages] = useState<PreviewImage[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.url));
    };
  }, [images]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    images.forEach((image) => URL.revokeObjectURL(image.url));

    const previews = imageFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImages(previews);
  }

  function clearImages() {
    images.forEach((image) => URL.revokeObjectURL(image.url));
    setImages([]);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
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

    pdf.save("images-to-pdf.pdf");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <nav className="text-sm text-slate-400" aria-label="Breadcrumb">
          <a href="/" className="hover:text-cyan-400">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/tools" className="hover:text-cyan-400">
            Tools
          </a>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Images to PDF</span>
        </nav>

        <section className="mt-8">
          <h1 className="text-4xl font-bold">
            Images to PDF Converter Online
          </h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            Convert JPG, PNG, WEBP, photos, screenshots, scanned documents, and
            multiple image files into one PDF online for free. This browser-based
            images to PDF converter is fast, simple, and private.
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">Convert Images to PDF</h2>

          <p className="mt-2 text-slate-300">
            Upload your images, preview them, and download one combined PDF file
            instantly.
          </p>

          <label className="mt-6 block text-sm font-medium text-slate-300">
            Upload JPG, PNG, WEBP, or other image files
          </label>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          />

          {images.length > 0 && (
            <>
              <p className="mt-4 text-sm text-slate-400">
                {images.length} image{images.length !== 1 ? "s" : ""} selected
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {images.map((image, index) => (
                  <div key={index} className="rounded-xl bg-slate-950 p-3">
                    <img
                      src={image.url}
                      alt={`Image selected for PDF conversion ${index + 1}`}
                      className="h-48 w-full rounded-lg object-cover"
                    />

                    <p className="mt-3 truncate text-sm text-slate-400">
                      {image.file.name}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={createPdf}
              disabled={images.length === 0}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Convert Images to PDF
            </button>

            <button
              onClick={clearImages}
              disabled={images.length === 0}
              className="rounded-xl border border-slate-700 bg-slate-950 px-6 py-3 font-semibold text-slate-300 hover:border-red-500 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Clear All Images
            </button>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free JPG, PNG, WEBP, and Photo to PDF Converter
          </h2>

          <p className="mt-4 text-slate-300">
            This free image to PDF converter helps you turn photos, receipts,
            screenshots, scanned pages, handwritten notes, school assignments,
            certificates, invoices, and documents into a clean PDF file. You can
            combine multiple images into one PDF without installing software or
            creating an account.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Convert Images to PDF</h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Select one or more images from your device.</li>
            <li>Preview your JPG, PNG, WEBP, photo, or screenshot files.</li>
            <li>Click the convert button to generate your PDF.</li>
            <li>Download your combined PDF file instantly.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Use This Images to PDF Converter?
          </h2>

          <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-300">
            <li>Convert multiple images into one PDF file.</li>
            <li>Works with JPG, PNG, WEBP, photos, and screenshots.</li>
            <li>No signup, watermark, or software installation required.</li>
            <li>Fast browser-based image to PDF conversion.</li>
            <li>Your images are processed locally in your browser.</li>
            <li>Useful for documents, forms, receipts, notes, and assignments.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Supported Image Formats</h2>

          <p className="mt-4 text-slate-300">
            You can upload common image formats such as JPG, JPEG, PNG, WEBP,
            GIF, BMP, screenshots, phone photos, scanned pages, and other
            browser-supported image files.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Private Image to PDF Conversion Without Upload
          </h2>

          <p className="mt-4 text-slate-300">
            This tool creates the PDF directly in your browser, which means your
            images do not need to leave your device. It is useful for private
            photos, ID copies, receipts, scanned documents, and personal files.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Common Uses for an Images to PDF Tool
          </h2>

          <p className="mt-4 text-slate-300">
            You can use this tool to create PDF files for school homework,
            college assignments, job applications, office documents, invoices,
            delivery receipts, product photos, handwritten notes, passport or ID
            copies, scanned forms, and online submissions.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Combine Multiple Images Into One PDF
          </h2>

          <p className="mt-4 text-slate-300">
            Instead of sending many separate image files, you can merge images
            into one PDF and share a cleaner document for email, printing,
            uploading, or record keeping.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Related Image and PDF Tools</h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {relatedTools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                {tool.name}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Helpful Image Guides</h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {relatedBlogs.map((blog) => (
              <a
                key={blog.href}
                href={blog.href}
                className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                {blog.name}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                Is this images to PDF converter free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this online images to PDF converter is free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I convert multiple images into one PDF?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can upload multiple images and combine them into one PDF
                file.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are my images uploaded to a server?
              </h3>
              <p className="mt-2 text-slate-300">
                No, the PDF is generated directly in your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What image formats are supported?
              </h3>
              <p className="mt-2 text-slate-300">
                JPG, PNG, WEBP, and most browser-supported image files are
                supported.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I use this image to PDF converter on mobile?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, it works on mobile, tablet, laptop, and desktop browsers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}