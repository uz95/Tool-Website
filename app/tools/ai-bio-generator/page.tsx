import AIBioGeneratorClient from "./AIBioGeneratorClient";

export const metadata = {
  title:
    "AI Bio Generator Free - Create Instagram, LinkedIn & Professional Bios",
  description:
    "Generate professional bios, Instagram bios, LinkedIn summaries, short bios, and personal profile bios for free using our AI bio generator.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/ai-bio-generator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI bio generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI bio generator helps create short, professional, Instagram, LinkedIn, and personal profile bios based on your role and interests.",
      },
    },
    {
      "@type": "Question",
      name: "Is this AI bio generator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this AI bio generator is free to use and does not require registration.",
      },
    },
    {
      "@type": "Question",
      name: "Can I generate Instagram bios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can generate Instagram bios, short bios, LinkedIn bios, professional bios, and personal bios.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the generated bio for LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can use the generated bio as a LinkedIn summary, professional profile bio, resume intro, or portfolio description.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Bio Generator",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/ai-bio-generator",
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
      name: "AI Tools",
      item: "https://www.fastwebtoolshub.com/tools/ai-tools",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AI Bio Generator",
      item: "https://www.fastwebtoolshub.com/tools/ai-bio-generator",
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

      <AIBioGeneratorClient />
    </>
  );
}