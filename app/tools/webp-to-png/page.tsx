import WebpToPngClient from "./WebpToPngClient";

export const metadata = {
  title: "WEBP to PNG Converter Free - Convert WEBP Images Online",
  description:
    "Convert WEBP to PNG online for free. Upload a WEBP image and download a high-quality PNG file directly in your browser without uploading files.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/webp-to-png",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert WEBP to PNG online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your WEBP image and the tool will convert it to PNG directly in your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Is this WEBP to PNG converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online WEBP to PNG converter is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert WEBP to PNG without uploading files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The conversion happens directly inside your browser, so your image is not uploaded to a server.",
      },
    },
    {
      "@type": "Question",
      name: "Does PNG support transparency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, PNG supports transparency, which makes it useful for editing, graphics, icons, and design work.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use PNG images in Photoshop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, PNG files are widely supported by image editors such as Photoshop, design tools, websites, and apps.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WEBP to PNG Converter",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/webp-to-png",
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
      name: "WEBP to PNG Converter",
      item: "https://www.fastwebtoolshub.com/tools/webp-to-png",
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

      <WebpToPngClient />
    </>
  );
}