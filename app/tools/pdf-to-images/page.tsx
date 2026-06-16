import PdfToImagesClient from "./PdfToImagesClient";

export const metadata = {
  title: "PDF to Images Converter Free - Convert PDF Pages to PNG",
  description:
    "Convert PDF to images online for free. Turn PDF pages into high-quality PNG images directly in your browser without uploading files.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/pdf-to-images",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert PDF to images online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your PDF file, click Convert PDF to Images, and download each converted page as a PNG image.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert PDF pages to PNG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this tool converts PDF pages into PNG images directly in your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Is this PDF to images converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online PDF to images converter is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "Are my PDFs uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Your PDF is processed directly inside your browser.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PDF to Images Converter",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/pdf-to-images",
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
      name: "PDF to Images Converter",
      item: "https://www.fastwebtoolshub.com/tools/pdf-to-images",
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

      <PdfToImagesClient />
    </>
  );
}