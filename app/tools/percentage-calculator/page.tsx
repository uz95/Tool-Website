import PercentageCalculatorClient from "./PercentageCalculatorClient";

export const metadata = {
  title: "Percentage Calculator Free - Calculate Percentage of a Number",
  description:
    "Free percentage calculator to calculate percentage of a number, discounts, marks percentage, percentage increase, percentage decrease and daily math problems.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/percentage-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate a percentage of a number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the number by the percentage and divide by 100. For example, 20% of 150 is calculated as 20 divided by 100 multiplied by 150.",
      },
    },
    {
      "@type": "Question",
      name: "What is 20% of 150?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "20% of 150 is 30.",
      },
    },
    {
      "@type": "Question",
      name: "Is this percentage calculator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online percentage calculator is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this for discounts and marks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can use this calculator for discounts, school marks, business calculations, finance, shopping and daily math problems.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Percentage Calculator",
  applicationCategory: "CalculatorApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/percentage-calculator",
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
      name: "Percentage Calculator",
      item: "https://www.fastwebtoolshub.com/tools/percentage-calculator",
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

      <PercentageCalculatorClient />
    </>
  );
}