import ImageToBase64Client from "./ImageToBase64Client";

export const metadata = {
  title: "Image to Base64 Converter - Convert Images to Base64 Online",
  description:
    "Convert JPG, PNG, SVG, WEBP and GIF images to Base64 online. Generate Base64 strings and Data URLs for HTML, CSS, email templates and web development.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/image-to-base64",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert an image to Base64?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your image and the tool will instantly generate a Base64 string and Data URL that you can copy or download.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert PNG and JPG images to Base64?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this tool supports PNG, JPG, WEBP, SVG, GIF and other browser-supported image formats.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Base64 image Data URL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Base64 image Data URL is text that starts with data:image and contains the encoded image data for use in HTML, CSS, JavaScript or email templates.",
      },
    },
    {
      "@type": "Question",
      name: "Are my images uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The image is processed directly inside your browser.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Image to Base64 Converter",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/image-to-base64",
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
      name: "Image to Base64 Converter",
      item: "https://www.fastwebtoolshub.com/tools/image-to-base64",
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

      <ImageToBase64Client />
    </>
  );
}