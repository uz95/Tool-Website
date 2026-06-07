import ImageResizerClient from "./ImageResizerClient";

export const metadata = {
  title: "Resize Image Online Free - Resize JPG, PNG & WEBP by Pixels",
  description:
    "Resize images online for free. Change JPG, PNG, WEBP and other image dimensions by width and height directly in your browser.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/image-resizer",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I resize an image online for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your image, enter the new width and height in pixels, click Resize Image, and download the resized image.",
      },
    },
    {
      "@type": "Question",
      name: "Can I resize JPG, PNG and WEBP images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This image resizer supports common browser image formats including JPG, PNG, WEBP, GIF and more.",
      },
    },
    {
      "@type": "Question",
      name: "Does resizing reduce image quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Resizing changes image dimensions. Reducing size usually keeps good quality, while enlarging very small images may make them look less sharp.",
      },
    },
    {
      "@type": "Question",
      name: "Are my images uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Your image is processed directly inside your browser.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Image Resizer Online",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/image-resizer",
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
      name: "Image Resizer",
      item: "https://www.fastwebtoolshub.com/tools/image-resizer",
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

      <ImageResizerClient />
    </>
  );
}