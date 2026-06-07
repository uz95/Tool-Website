import AgeCalculatorClient from "./AgeCalculatorClient";

export const metadata = {
  title: "Age Calculator Online Free - Calculate Exact Age by Date of Birth",
  description:
    "Use this free online age calculator to calculate exact age in years, months, and days from your date of birth.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/age-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate my exact age online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your date of birth and click Calculate Age. The tool will show your exact age in years, months, and days.",
      },
    },
    {
      "@type": "Question",
      name: "Is this age calculator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online age calculator is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "Does this tool calculate age in years, months and days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it calculates age in years, months, and days based on your date of birth.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Age Calculator Online",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/age-calculator",
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
      name: "Calculators",
      item: "https://www.fastwebtoolshub.com/tools/calculators",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Age Calculator",
      item: "https://www.fastwebtoolshub.com/tools/age-calculator",
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

      <AgeCalculatorClient />
    </>
  );
}