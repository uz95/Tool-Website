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
  title: "AI Bio Generator",
  description: "Generate Instagram, LinkedIn, and professional bios.",
  category: "AI Tool",
  href: "/tools/ai-bio-generator",
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
];

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
          {tools.map((tool) => (
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

      
    </main>
  );
}