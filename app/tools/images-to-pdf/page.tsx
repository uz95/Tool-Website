import type { Metadata } from "next";
import ImagesToPdfClient from "./ImagesToPdfClient";

const siteUrl = "https://yourdomain.com";
const pageUrl = `${siteUrl}/tools/images-to-pdf`;

export const metadata: Metadata = {
  title: "Images to PDF Converter Online - Free JPG PNG WEBP to PDF",
  description:
    "Convert JPG, PNG, WEBP, photos, screenshots, and scanned images into one PDF online for free. Private browser-based images to PDF converter.",
  keywords: [
    "images to pdf converter online",
    "convert images to pdf",
    "combine images into pdf",
    "multiple images to pdf",
    "jpg to pdf",
    "png to pdf",
    "webp to pdf",
    "photo to pdf converter",
    "image to pdf without upload",
    "merge images into pdf online",
  ],
  alternates: {
    canonical: "/tools/images-to-pdf",
  },
  openGraph: {
    title: "Images to PDF Converter Online",
    description:
      "Convert multiple images into one PDF file online for free. Works with JPG, PNG, WEBP, screenshots, and photos.",
    url: pageUrl,
    type: "website",
  },
};

export default function ImagesToPdfPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Images to PDF Converter",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    url: pageUrl,
    description:
      "Free online images to PDF converter for JPG, PNG, WEBP, photos, screenshots, scanned pages, and multiple image files.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Images to PDF Converter Online",
    url: pageUrl,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    description:
      "Convert multiple images into one PDF file directly in your browser.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${siteUrl}/tools`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Images to PDF Converter",
        item: pageUrl,
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Convert Images to PDF Online",
    description:
      "Upload images, preview them, convert them, and download one PDF file.",
    step: [
      {
        "@type": "HowToStep",
        name: "Upload images",
        text: "Choose JPG, PNG, WEBP, or other image files from your device.",
      },
      {
        "@type": "HowToStep",
        name: "Preview selected images",
        text: "Check the uploaded images before creating the PDF.",
      },
      {
        "@type": "HowToStep",
        name: "Convert images to PDF",
        text: "Click the convert button to generate your PDF file.",
      },
      {
        "@type": "HowToStep",
        name: "Download PDF",
        text: "Download the final combined PDF file instantly.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this images to PDF converter free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this images to PDF converter is free to use.",
        },
      },
      {
        "@type": "Question",
        name: "Can I convert multiple images into one PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can upload multiple images and combine them into one PDF file.",
        },
      },
      {
        "@type": "Question",
        name: "Are my images uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, the PDF is created directly in your browser.",
        },
      },
      {
        "@type": "Question",
        name: "Which image formats are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The tool supports JPG, PNG, WEBP, and most image formats supported by your browser.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use this tool on mobile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the images to PDF converter works on mobile, tablet, and desktop browsers.",
        },
      },
    ],
  };

  const schemas = [
    softwareSchema,
    webApplicationSchema,
    breadcrumbSchema,
    howToSchema,
    faqSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <ImagesToPdfClient />
    </>
  );
}