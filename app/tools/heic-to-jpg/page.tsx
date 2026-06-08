import HeicToJpgClient from "./HeicToJpgClient";

export const metadata = {
  title: "HEIC to JPG Converter Free - Convert iPhone Photos to JPG",
  description:
    "Convert HEIC to JPG online for free. Change iPhone HEIC and HEIF photos into high-quality JPG images directly in your browser.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/heic-to-jpg",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert HEIC to JPG online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your HEIC or HEIF image, click Convert HEIC to JPG, and download the converted JPG file.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert iPhone photos to JPG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this tool is designed to convert iPhone HEIC and HEIF photos into JPG images.",
      },
    },
    {
      "@type": "Question",
      name: "Is this HEIC to JPG converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online HEIC to JPG converter is free to use.",
      },
    },
    {
      "@type": "Question",
      name: "Are my HEIC photos uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The HEIC image is converted directly inside your browser.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HEIC to JPG Converter",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/heic-to-jpg",
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
      name: "HEIC to JPG Converter",
      item: "https://www.fastwebtoolshub.com/tools/heic-to-jpg",
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

      <HeicToJpgClient />
    </>
  );
}