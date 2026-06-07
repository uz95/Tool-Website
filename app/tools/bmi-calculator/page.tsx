import BMICalculatorClient from "./BMICalculatorClient";

export const metadata = {
  title: "BMI Calculator Online Free - Calculate BMI by Height and Weight",
  description:
    "Use this free BMI calculator to calculate body mass index from height and weight in centimeters and kilograms. Check BMI category instantly.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/bmi-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate BMI online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your height in centimeters and weight in kilograms, then click Calculate BMI to see your body mass index and category.",
      },
    },
    {
      "@type": "Question",
      name: "Is this BMI calculator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online BMI calculator is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "What is a healthy BMI range?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For adults, a BMI from 18.5 to 24.9 is commonly considered a healthy weight range.",
      },
    },
    {
      "@type": "Question",
      name: "Is BMI a medical diagnosis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. BMI is a general screening tool and does not replace medical advice from a healthcare professional.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BMI Calculator Online",
  applicationCategory: "HealthApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/bmi-calculator",
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
      name: "BMI Calculator",
      item: "https://www.fastwebtoolshub.com/tools/bmi-calculator",
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

      <BMICalculatorClient />
    </>
  );
}