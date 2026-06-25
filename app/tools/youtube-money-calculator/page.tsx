import YouTubeMoneyCalculatorClient from "./YouTubeMoneyCalculatorClient";

export const metadata = {
  title: "YouTube Money Calculator Free - Estimate YouTube Earnings",
  description:
    "Free YouTube money calculator to estimate monthly YouTube earnings from views, niche, RPM, CPM and audience country.",
  alternates: {
    canonical:
      "https://www.fastwebtoolshub.com/tools/youtube-money-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate YouTube earnings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your monthly views, select your niche and audience country, then calculate the estimated YouTube earnings range.",
      },
    },
    {
      "@type": "Question",
      name: "Is this YouTube money calculator accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This calculator gives an estimate only. Real earnings depend on RPM, CPM, watch time, ads, audience location, video length and advertiser demand.",
      },
    },
    {
      "@type": "Question",
      name: "What is YouTube RPM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RPM means revenue per 1,000 views. It estimates how much a creator earns for every 1,000 video views.",
      },
    },
    {
      "@type": "Question",
      name: "Which YouTube niche earns the most?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finance, business, technology and education channels usually have higher earning potential because advertisers often pay more in these niches.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "YouTube Money Calculator",
  applicationCategory: "CalculatorApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/youtube-money-calculator",
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
      name: "Creator Tools",
      item: "https://www.fastwebtoolshub.com/tools",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "YouTube Money Calculator",
      item: "https://www.fastwebtoolshub.com/tools/youtube-money-calculator",
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

      <YouTubeMoneyCalculatorClient />
    </>
  );
}