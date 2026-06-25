import WordCounterClient from "./WordCounterClient";

export const metadata = {
  title: "Word Counter Free - Count Words, Characters & Sentences",
  description:
    "Free online word counter to count words, characters, spaces, sentences, paragraphs and reading time instantly for essays, blogs, SEO content and assignments.",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/word-counter",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I count words online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paste or type your text into the word counter and it will instantly show the total words, characters, spaces, sentences and paragraphs.",
      },
    },
    {
      "@type": "Question",
      name: "Is this word counter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this online word counter is completely free to use.",
      },
    },
    {
      "@type": "Question",
      name: "Does this tool count characters with spaces?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the tool counts total characters and spaces separately.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this word counter for essays and blog posts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this tool is useful for essays, articles, blog posts, SEO content, social media captions, assignments and reports.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Word Counter",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  url: "https://www.fastwebtoolshub.com/tools/word-counter",
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
      name: "Text Tools",
      item: "https://www.fastwebtoolshub.com/tools/text-tools",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Word Counter",
      item: "https://www.fastwebtoolshub.com/tools/word-counter",
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

      <WordCounterClient />
    </>
  );
}