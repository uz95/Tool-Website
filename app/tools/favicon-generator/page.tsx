import FaviconGeneratorClient from "./FaviconGeneratorClient";

export const metadata = {
  title: "Favicon Generator Free - Create PNG Favicon from Image",
  description:
    "Create a favicon online for free. Convert PNG, JPG, WEBP, logos and images into 16x16, 32x32, 48x48, 64x64, 180x180 and 512x512 favicon PNG files.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/favicon-generator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I create a favicon online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your logo or image, click Generate Favicon, preview the result, and download your favicon as a PNG file.",
      },
    },
    {
      "@type": "Question",
      name: "Can I create a favicon from PNG or JPG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can create a favicon from PNG, JPG, WEBP and other browser-supported image formats.",
      },
    },
    {
      "@type": "Question",
      name: "Is this favicon generator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online favicon generator is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "What size favicon does this tool create?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This tool creates a 64x64 PNG favicon, which works well for modern websites and browser tabs.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Favicon Generator",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/favicon-generator",
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
      name: "Favicon Generator",
      item: "https://www.fastwebtoolshub.com/tools/favicon-generator",
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

      <FaviconGeneratorClient />
    </>
  );
}