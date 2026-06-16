import SvgToPngClient from "./SvgToPngClient";

export const metadata = {
  title: "SVG to PNG Converter Free - Convert SVG File to PNG Online",
  description:
    "Convert SVG to PNG online for free. Upload an SVG file and download a high-quality PNG image directly in your browser.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/svg-to-png",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert SVG to PNG online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your SVG file, click Convert SVG to PNG, preview the result, and download the PNG image.",
      },
    },
    {
      "@type": "Question",
      name: "Is this SVG to PNG converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online SVG to PNG converter is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "Are my SVG files uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. SVG to PNG conversion happens directly inside your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert SVG logos to PNG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can convert SVG logos, icons, graphics, and vector files into PNG images.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SVG to PNG Converter",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/svg-to-png",
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
      name: "Image Tools",
      item: "https://www.fastwebtoolshub.com/tools/image-tools",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SVG to PNG Converter",
      item: "https://www.fastwebtoolshub.com/tools/svg-to-png",
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

      <SvgToPngClient />
    </>
  );
}