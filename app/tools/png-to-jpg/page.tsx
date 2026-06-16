import PngToJpgClient from "./PngToJpgClient";

export const metadata = {
  title: "PNG to JPG Converter Free - Convert PNG to JPEG Online",
  description:
    "Convert PNG to JPG online for free. Change PNG images into high-quality JPEG files with a white background directly in your browser.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/png-to-jpg",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert PNG to JPG online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your PNG image and the tool will convert it to JPG directly in your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Is this PNG to JPG converter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online PNG to JPG converter is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to transparent PNG areas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JPG does not support transparency, so transparent PNG areas are converted to a white background.",
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
  name: "PNG to JPG Converter",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/png-to-jpg",
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
      name: "PNG to JPG Converter",
      item: "https://www.fastwebtoolshub.com/tools/png-to-jpg",
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

      <PngToJpgClient />
    </>
  );
}