import PdfToWordClient from "./PdfToWordClient";

export const metadata = {
  title: "PDF to Word Converter Free - Convert PDF to DOCX Online",
  description:
    "Convert PDF to Word online for free. Extract text from PDF files and download an editable DOCX Word document directly in your browser.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/pdf-to-word",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert PDF to Word online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your PDF file, click Convert PDF to Word, and download the generated DOCX file.",
      },
    },
    {
      "@type": "Question",
      name: "Is this PDF to Word converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online PDF to Word converter is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "Are my PDF files uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The PDF is processed directly inside your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Will the Word file keep the same formatting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This converter focuses mainly on extracting text from PDF files. Complex formatting, images, and tables may not match perfectly.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PDF to Word Converter",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/pdf-to-word",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.fastwebtoolshub.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "PDF Tools",
      item: "https://www.fastwebtoolshub.com/tools/pdf-tools",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "PDF to Word Converter",
      item: "https://www.fastwebtoolshub.com/tools/pdf-to-word",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PdfToWordClient />
    </>
  );
}