import RotateImageClient from "./RotateImageClient";

export const metadata = {
  title: "Rotate Image Online Free - Rotate JPG, PNG & WEBP Photos",
  description:
    "Rotate images online for free. Rotate JPG, PNG, WEBP and other photos 90, 180 or 270 degrees directly in your browser.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/rotate-image",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I rotate an image online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your image, choose a rotation angle, click Rotate Image, and download the rotated result.",
      },
    },
    {
      "@type": "Question",
      name: "Can I rotate JPG, PNG and WEBP images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this image rotator supports JPG, PNG, WEBP and other browser-supported image formats.",
      },
    },
    {
      "@type": "Question",
      name: "Is this rotate image tool free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online rotate image tool is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "Are my images uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Image rotation happens directly inside your browser.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Rotate Image Online",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/rotate-image",
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
      name: "Rotate Image",
      item: "https://www.fastwebtoolshub.com/tools/rotate-image",
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

      <RotateImageClient />
    </>
  );
}