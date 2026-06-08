import GPACalculatorClient from "./GPACalculatorClient";

export const metadata = {
  title: "Percentage to GPA Calculator Free - GPA with Credit Hours",
  description:
    "Convert marks and percentages to GPA online for free. Calculate weighted GPA, semester GPA, and 4.0 GPA using credit hours.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/gpa-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert percentage to GPA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your course marks or percentages and credit hours, then click Calculate GPA to get your weighted GPA.",
      },
    },
    {
      "@type": "Question",
      name: "Can I calculate GPA with credit hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this GPA calculator uses credit hours to calculate weighted GPA.",
      },
    },
    {
      "@type": "Question",
      name: "Does this calculator use a 4.0 GPA scale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this calculator uses a simple 4.0 GPA conversion scale.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Percentage to GPA Calculator",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/gpa-calculator",
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
      name: "GPA Calculator",
      item: "https://www.fastwebtoolshub.com/tools/gpa-calculator",
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

      <GPACalculatorClient />
    </>
  );
}