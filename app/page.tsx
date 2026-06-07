const categories = [
  {
    title: "Image Tools",
    description: "Convert, resize, compress, crop, rotate, and edit images.",
    href: "/tools/image-tools",
  },
  {
    title: "PDF Tools",
    description: "Convert PDFs, images, and documents online.",
    href: "/tools/pdf-tools",
  },
  {
    title: "AI Tools",
    description: "Generate bios, captions, and AI-powered content.",
    href: "/tools/ai-tools",
  },
  {
    title: "Calculators",
    description: "Free calculators for students, creators, and everyday use.",
    href: "/tools/calculators",
  },
];
const tools = [
  {
    title: "Age Calculator",
    description: "Calculate your exact age in years, months, and days.",
    category: "Calculator",
    href: "/tools/age-calculator",
  },
  {
    title: "BMI Calculator",
    description: "Check your body mass index instantly.",
    category: "Health",
    href: "/tools/bmi-calculator",
  },
  {
    title: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs.",
    category: "Text Tool",
    href: "/tools/word-counter",
  },
  {
    title: "Percentage Calculator",
    description: "Calculate percentages quickly and easily.",
    category: "Calculator",
    href: "/tools/percentage-calculator",
  },
  {
    title: "AI Bio Generator",
    description: "Generate short bios for Instagram, LinkedIn, and websites.",
    category: "AI Tool",
    href: "/tools/ai-bio-generator",
  },
  {
    title: "Image Compressor",
    description: "Compress images for web, email, and social media.",
    category: "Image Tool",
    href: "/tools/image-compressor",
  },
 {
  title: "Percentage to GPA Calculator",
  description: "Calculate GPA from course percentages and credit hours.",
  category: "Education",
  href: "/tools/gpa-calculator",
},
{
  title: "WEBP to PNG Converter",
  description: "Convert WEBP images to PNG online for free.",
  category: "Image Tool",
  href: "/tools/webp-to-png",
},
{
  title: "PNG to WEBP Converter",
  description: "Convert PNG images to WEBP online for free.",
  category: "Image Tool",
  href: "/tools/png-to-webp",
},
{
  title: "YouTube Money Calculator",
  description: "Estimate YouTube earnings from views and RPM.",
  category: "Creator Tool",
  href: "/tools/youtube-money-calculator",
},
{
  title: "AI Caption Generator",
  description: "Generate captions for Instagram, business, travel, and fitness posts.",
  category: "AI Tool",
  href: "/tools/ai-caption-generator",
},
{
  title: "JPG to PNG Converter",
  description: "Convert JPG and JPEG images to PNG online.",
  category: "Image Tool",
  href: "/tools/jpg-to-png",
},
{
  title: "PNG to JPG Converter",
  description: "Convert PNG images to JPG online for free.",
  category: "Image Tool",
  href: "/tools/png-to-jpg",
},
{
  title: "PDF to Images Converter",
  description: "Convert PDF pages to PNG images online for free.",
  category: "PDF Tool",
  href: "/tools/pdf-to-images",
},
{
  title: "Images to PDF Converter",
  description: "Convert JPG, PNG, and WEBP images into a PDF file.",
  category: "PDF Tool",
  href: "/tools/images-to-pdf",
},
{
  title: "PDF to Word Converter",
  description: "Convert PDF files to editable Word documents.",
  category: "PDF Tool",
  href: "/tools/pdf-to-word",
},
{
  title: "HEIC to JPG Converter",
  description: "Convert iPhone HEIC photos to JPG online.",
  category: "Image Tool",
  href: "/tools/heic-to-jpg",
},
{
  title: "Image Resizer",
  description: "Resize images online by width and height.",
  category: "Image Tool",
  href: "/tools/image-resizer",
},
{
  title: "SVG to PNG Converter",
  description: "Convert SVG files to PNG images online.",
  category: "Image Tool",
  href: "/tools/svg-to-png",
},
{
  title: "Crop Image Online",
  description: "Crop PNG, JPG, and other images online for free.",
  category: "Image Tool",
  href: "/tools/crop-image",
},
{
  title: "Favicon Generator",
  description: "Create a favicon from any image online for free.",
  category: "Image Tool",
  href: "/tools/favicon-generator",
},
{
  title: "Rotate Image Online",
  description: "Rotate JPG, PNG, and WEBP images online for free.",
  category: "Image Tool",
  href: "/tools/rotate-image",
},
{
  title: "Blur Image Online",
  description: "Blur photos and images online for free.",
  category: "Image Tool",
  href: "/tools/blur-image",
},
{
  title: "Image to Base64 Converter",
  description: "Convert images to Base64 code online for free.",
  category: "Developer Tool",
  href: "/tools/image-to-base64",
},
];

export const metadata = {
  title: "FastWebToolsHub - Free Online Tools",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Free Online Utility Tools
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Simple, Fast & Free Tools for Everyday Work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Use calculators, converters, AI writing tools, image tools, and text
            utilities directly in your browser.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#tools"
              className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Explore Tools
            </a>
            <a
              href="/blog"
              className="rounded-full border border-slate-700 px-8 py-3 font-semibold text-white hover:bg-slate-900"
            >
              Read Guides
            </a>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20">
  <div className="mb-10 text-center">
    <h2 className="text-3xl font-bold">Browse by Category</h2>

    <p className="mt-3 text-slate-400">
      Find the right tools faster by category.
    </p>
  </div>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {categories.map((category) => (
      <a
        key={category.href}
        href={category.href}
        className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
      >
        <h3 className="text-xl font-bold text-cyan-400">
          {category.title}
        </h3>

        <p className="mt-3 text-slate-400">
          {category.description}
        </p>

        <div className="mt-5 text-sm font-semibold text-cyan-400">
          Explore →
        </div>
      </a>
    ))}
  </div>
</section>

      <section id="tools" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h3 className="text-3xl font-bold">Popular Tools</h3>
            <p className="mt-2 text-slate-400">
              Start with these high-search utility tools.
            </p>
          </div>
          <a href="/tools" className="hidden text-cyan-400 md:block">
            View all tools →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.slice(0, 9).map((tool) => (
            <a
              key={tool.title}
              href={tool.href}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <span className="text-sm font-medium text-cyan-400">
                {tool.category}
              </span>
              <h4 className="mt-4 text-xl font-bold">{tool.title}</h4>
              <p className="mt-3 text-slate-400">{tool.description}</p>
            </a>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20">
  <div className="text-center">
    <h2 className="text-3xl font-bold">
      Why Choose FastWebToolsHub?
    </h2>

    <p className="mx-auto mt-4 max-w-3xl text-slate-300">
      FastWebToolsHub provides free online tools for image editing,
      PDF conversion, AI content generation, calculators, and
      productivity tasks. All tools work directly in your browser
      without software installation.
    </p>
  </div>

  <div className="mt-12 grid gap-6 md:grid-cols-3">
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-bold">Free to Use</h3>
      <p className="mt-3 text-slate-400">
        Access all tools without registration.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-bold">Fast Processing</h3>
      <p className="mt-3 text-slate-400">
        Most tools work instantly in your browser.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-bold">Privacy Friendly</h3>
      <p className="mt-3 text-slate-400">
        Your files remain on your device whenever possible.
      </p>
    </div>
  </div>
</section>
<section className="mx-auto max-w-5xl px-6 pb-24">
  <h2 className="text-3xl font-bold">
    Free Online Tools for Everyday Tasks
  </h2>

  <p className="mt-6 text-slate-300">
    FastWebToolsHub offers a growing collection of free online tools
    including image converters, PDF tools, AI generators,
    calculators, and productivity utilities. Whether you need to
    convert WEBP to PNG, resize images, compress files, generate AI
    captions, calculate percentages, or create PDFs, our tools help
    you complete tasks quickly and efficiently.
  </p>

  <p className="mt-4 text-slate-300">
    We regularly add new tools and educational guides to help
    students, creators, developers, freelancers, marketers, and
    everyday users work smarter online.
  </p>
</section>

      
    </main>
  );
}