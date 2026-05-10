"use client";

import { useState } from "react";
import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";

export default function PdfToWordPage() {
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

        extractedText += pageText + "\n\n";
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
      <div className="mx-auto max-w-4xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          PDF to Word Converter
        </h1>

        <p className="mt-4 text-slate-300">
          Convert PDF files to editable Word documents online for free.
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
            onClick={convertPdfToWord}
            disabled={!selectedFile || loading}
            className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Converting..." : "Convert PDF to Word"}
          </button>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            What is a PDF to Word Converter?
          </h2>

          <p className="mt-4 text-slate-300">
            A PDF to Word converter helps you transform PDF documents into
            editable Microsoft Word files for editing, copying, and updating
            content.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            How to Convert PDF to Word
          </h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Upload your PDF document.</li>
            <li>Click the convert button.</li>
            <li>Download the generated Word document.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                Is this PDF to Word converter free?
              </h3>

              <p className="mt-2 text-slate-300">
                Yes, this online PDF to Word converter is completely free.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Are my files uploaded?
              </h3>

              <p className="mt-2 text-slate-300">
                No, conversion happens directly in your browser.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Will formatting stay exactly the same?
              </h3>

              <p className="mt-2 text-slate-300">
                This basic converter focuses mainly on extracting text. Complex
                formatting, tables, and images may not perfectly match the
                original PDF.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}