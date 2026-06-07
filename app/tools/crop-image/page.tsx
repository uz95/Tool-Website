import CropImageClient from "./CropImageClient";

export const metadata = {
  title: "Crop Image Online Free - Crop JPG, PNG & WEBP Images",
  description:
    "Crop images online for free. Crop JPG, PNG, WEBP and other image formats directly in your browser without uploading files.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/crop-image",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I crop an image online for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your image, draw a crop area with your mouse, click Crop Image, and download the cropped result.",
      },
    },
    {
      "@type": "Question",
      name: "Can I crop JPG, PNG and WEBP images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This crop image tool supports common browser image formats including JPG, PNG, WEBP, GIF and more.",
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
    {
      "@type": "Question",
      name: "Does cropping reduce image quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cropping removes unwanted parts of the image but keeps the selected area clear. The result is downloaded as a PNG image.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Crop Image Online",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/crop-image",
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
      name: "Crop Image Online",
      item: "https://www.fastwebtoolshub.com/tools/crop-image",
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

      <CropImageClient />
    </>
  );
}