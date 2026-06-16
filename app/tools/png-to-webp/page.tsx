import PngToWebpClient from "./PngToWebpClient";

export const metadata = {
  title: "PNG to WEBP Converter Free - Convert PNG to WEBP Online",
  description:
    "Convert PNG to WEBP online for free. Reduce PNG image size and create high-quality WEBP images directly in your browser without uploading files.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/png-to-webp",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert PNG to WEBP online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your PNG image and the tool will convert it to WEBP directly in your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Is this PNG to WEBP converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online PNG to WEBP converter is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "Does WEBP reduce image size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, WEBP usually creates smaller image files than PNG while keeping good visual quality.",
      },
    },
    {
      "@type": "Question",
      name: "Are my images uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Image conversion happens directly inside your browser.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PNG to WEBP Converter",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/png-to-webp",
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
      name: "PNG to WEBP Converter",
      item: "https://www.fastwebtoolshub.com/tools/png-to-webp",
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

      <PngToWebpClient />
    </>
  );
}