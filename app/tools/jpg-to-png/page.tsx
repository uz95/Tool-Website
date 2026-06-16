import JpgToPngClient from "./JpgToPngClient";

export const metadata = {
  title: "JPG to PNG Converter Free - Convert JPEG to PNG Online",
  description:
    "Convert JPG to PNG online for free. Change JPEG images into high-quality PNG files directly in your browser without uploading images.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/jpg-to-png",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert JPG to PNG online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your JPG or JPEG image and the tool will convert it to PNG directly in your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Is this JPG to PNG converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online JPG to PNG converter is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "Are my images uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The conversion happens directly inside your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert JPEG to PNG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can upload JPG or JPEG images and convert them to PNG format.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "JPG to PNG Converter",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/jpg-to-png",
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
      name: "JPG to PNG Converter",
      item: "https://www.fastwebtoolshub.com/tools/jpg-to-png",
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

      <JpgToPngClient />
    </>
  );
}