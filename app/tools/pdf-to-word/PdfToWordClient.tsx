"use client";

import { useState } from "react";
import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";

const relatedTools = [
  {
    title: "PDF to Images Converter",
    description: "Convert PDF pages into PNG images.",
    href: "/tools/pdf-to-images",
  },
  {
    title: "Images to PDF Converter",
    description: "Convert JPG, PNG, and WEBP images into PDF.",
    href: "/tools/images-to-pdf",
  },
  {
    title: "Image Compressor",
    description: "Compress images before adding them to documents.",
    href: "/tools/image-compressor",
  },
  {
    title: "PDF Tools",
    description: "Browse all free PDF tools.",
    href: "/tools/pdf-tools",
  },
];

const relatedGuides = [
  {
    title: "Best Image Format for Websites",
    href: "/blog/best-image-format-for-websites",
  },
  {
    title: "How to Compress Images for Faster Websites",
    href: "/blog/how-to-compress-images-for-faster-websites",
  },
  {
    title: "PNG vs JPG: Which Image Format Should You Use?",
    href: "/blog/png-vs-jpg",
  },
];

export default function PdfToWordClient() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    setSelectedFile(file);
    setFileName(file.name.replace(/\.[^/.]+$/, ""));
  }

  function clearAll() {
    setSelectedFile(null);
    setLoading(false);
    setFileName("");
  }

  async function convertPdfToWord() {
    if (!selectedFile) return;

    setLoading(true);

    try {
      const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");

      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

      const arrayBuffer = await selectedFile.arrayBuffer();

      const pdf = await pdfjsLib.getDocument({
        data: arrayBuffer,
      } as any).promise;

      let extractedText = "";

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const textContent = await page.getTextContent();

        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(" ");

        extractedText += `Page ${pageNumber}\n\n${pageText}\n\n`;
      }

      const doc = new Document({
        sections: [
          {
            children: extractedText
              .split("\n")
              .map((line) => new Paragraph(line)),
          },
        ],
      });

      const blob = await Packer.toBlob(doc);

      saveAs(blob, `${fileName || "converted-document"}.docx`);
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
        <a href="/tools/pdf-tools" className="text-cyan-400">
          ← Back to PDF Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          PDF to Word Converter Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert PDF to Word online for free. Upload a PDF file, extract text
          from the document, and download an editable DOCX Word file directly in
          your browser. This tool is useful for turning PDF text into a Word
          document for editing, copying, rewriting, studying, and office work.
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
              onClick={convertPdfToWord}
              disabled={!selectedFile || loading}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Converting..." : "Convert PDF to Word"}
            </button>

            <button
              onClick={clearAll}
              disabled={!selectedFile && !fileName}
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Clear All
            </button>
          </div>

          {loading && (
            <p className="mt-6 font-semibold text-cyan-400">
              Extracting text and creating DOCX file...
            </p>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free PDF to DOCX Converter Online
          </h2>

          <p className="mt-4 text-slate-300">
            This free PDF to Word converter helps you convert PDF files into
            editable DOCX documents. You can use it as a PDF to DOCX converter,
            PDF text extractor, document converter, or PDF to editable Word tool
            for simple text-based PDF files.
          </p>

          <p className="mt-4 text-slate-300">
            Many PDF files are difficult to edit directly. Converting PDF text
            into a Word document makes it easier to copy, rewrite, update,
            study, translate, or reuse the content in school, work, business,
            and personal projects.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            How to Convert PDF to Word Online
          </h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your PDF document.</li>
            <li>Click the Convert PDF to Word button.</li>
            <li>Wait while the text is extracted from the PDF.</li>
            <li>Download the generated DOCX Word file.</li>
            <li>Open the file in Microsoft Word, Google Docs, or another editor.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Convert PDF to Word?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Convert PDF text to editable Word format</li>
            <li>• Extract text from PDF documents</li>
            <li>• Create DOCX files from PDF content</li>
            <li>• Edit PDF text in Word or Google Docs</li>
            <li>• Reuse PDF content for school, office, and documents</li>
            <li>• Process PDF files directly in your browser for privacy</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Best Uses for PDF to Word Conversion
          </h2>

          <p className="mt-4 text-slate-300">
            PDF to Word conversion is useful when you need to edit or reuse text
            from PDF files. Students can convert notes and assignments,
            professionals can reuse document text, and writers can extract text
            from PDF drafts or reports.
          </p>

          <p className="mt-4 text-slate-300">
            This converter works best for text-based PDFs. Scanned PDFs,
            image-only PDFs, tables, forms, and complex layouts may need OCR or
            advanced PDF software to preserve formatting accurately.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            PDF to Word vs PDF Text Extraction
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
                    PDF to Word
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Editing and reusing PDF text
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Editable DOCX document
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    PDF Text Extraction
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Copying plain text from PDF
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Text-focused output
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-400">
            Note: This tool focuses on extracting text into DOCX. Complex
            formatting, images, tables, and scanned documents may not convert
            exactly like the original file.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Related PDF Tools</h2>

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
                How do I convert PDF to Word online?
              </h3>
              <p className="mt-2 text-slate-300">
                Upload your PDF file, click Convert PDF to Word, and download
                the generated DOCX file.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this PDF to Word converter free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this PDF to Word converter is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does this create a DOCX file?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, the converted file downloads as a DOCX Word document.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are my PDF files uploaded to a server?
              </h3>
              <p className="mt-2 text-slate-300">
                No. The PDF is processed directly inside your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Will formatting stay exactly the same?
              </h3>
              <p className="mt-2 text-slate-300">
                This converter focuses mainly on extracting text. Complex
                formatting, images, tables, and scanned PDFs may not match the
                original layout.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can this convert scanned PDFs?
              </h3>
              <p className="mt-2 text-slate-300">
                This tool is best for text-based PDFs. Scanned PDFs usually need
                OCR to convert image text into editable Word text.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}