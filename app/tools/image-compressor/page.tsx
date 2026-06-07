import ImageCompressorClient from "./ImageCompressorClient";

export const metadata = {
  title: "Compress Image Online Free - Reduce JPG, PNG & WEBP Size",
  description:
    "Compress images online for free. Reduce JPG, PNG, WEBP and other image file sizes directly in your browser while keeping good quality.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/image-compressor",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I compress an image online for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your image, click Compress Image, and download the compressed image file.",
      },
    },
    {
      "@type": "Question",
      name: "Can I compress JPG, PNG and WEBP images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This image compressor supports common browser image formats including JPG, PNG, WEBP and more.",
      },
    },
    {
      "@type": "Question",
      name: "Does image compression reduce quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Image compression can slightly reduce quality, but this tool is designed to reduce file size while keeping good visual quality.",
      },
    },
    {
      "@type": "Question",
      name: "Are my images uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Images are processed directly inside your browser.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Compress Image Online",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/image-compressor",
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
      name: "Image Compressor",
      item: "https://www.fastwebtoolshub.com/tools/image-compressor",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <ImageCompressorClient />
    </>
  );
}