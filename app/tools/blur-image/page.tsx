import BlurImageClient from "./BlurImageClient";

export const metadata = {
  title: "Blur Image Online Free - Blur JPG, PNG & WEBP Photos",
  description:
    "Blur images online for free. Add blur effects to JPG, PNG, WEBP and other photos directly in your browser without uploading files.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/blur-image",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I blur an image online for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your image, adjust the blur strength, click Blur Image, and download the blurred result.",
      },
    },
    {
      "@type": "Question",
      name: "Can I blur JPG, PNG and WEBP images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This blur image tool supports common browser image formats including JPG, PNG, WEBP and more.",
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
    {
      "@type": "Question",
      name: "Can I blur photos without Photoshop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can blur photos online without Photoshop or installing editing software.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Blur Image Online",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/blur-image",
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
      name: "Blur Image",
      item: "https://www.fastwebtoolshub.com/tools/blur-image",
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

      <BlurImageClient />
    </>
  );
}