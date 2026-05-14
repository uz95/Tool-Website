const tools = [
  {
    title: "Age Calculator",
    description: "Calculate age from date of birth instantly.",
    category: "Calculator",
    href: "/tools/age-calculator",
  },
  {
    title: "BMI Calculator",
    description: "Calculate body mass index online.",
    category: "Calculator",
    href: "/tools/bmi-calculator",
  },
  {
    title: "Percentage Calculator",
    description: "Calculate percentages quickly and easily.",
    category: "Calculator",
    href: "/tools/percentage-calculator",
  },
  {
    title: "YouTube Money Calculator",
    description: "Estimate YouTube earnings by views and country.",
    category: "Creator Tool",
    href: "/tools/youtube-money-calculator",
  },
  {
    title: "Word Counter",
    description: "Count words, spaces, and characters instantly.",
    category: "Text Tool",
    href: "/tools/word-counter",
  },
  {
    title: "AI Bio Generator",
    description: "Generate Instagram and LinkedIn bios.",
    category: "AI Tool",
    href: "/tools/ai-bio-generator",
  },
  {
    title: "AI Caption Generator",
    description: "Generate captions for social media posts.",
    category: "AI Tool",
    href: "/tools/ai-caption-generator",
  },
  {
    title: "WEBP to PNG Converter",
    description: "Convert WEBP images to PNG online.",
    category: "Image Tool",
    href: "/tools/webp-to-png",
  },
  {
    title: "PNG to WEBP Converter",
    description: "Convert PNG images to WEBP online.",
    category: "Image Tool",
    href: "/tools/png-to-webp",
  },
  {
    title: "JPG to PNG Converter",
    description: "Convert JPG images to PNG online.",
    category: "Image Tool",
    href: "/tools/jpg-to-png",
  },
  {
    title: "PNG to JPG Converter",
    description: "Convert PNG images to JPG online.",
    category: "Image Tool",
    href: "/tools/png-to-jpg",
  },
  {
    title: "Image Compressor",
    description: "Compress images without losing quality.",
    category: "Image Tool",
    href: "/tools/image-compressor",
  },
  {
    title: "PDF to Images Converter",
    description: "Convert PDF pages into PNG images.",
    category: "PDF Tool",
    href: "/tools/pdf-to-images",
  },
  {
    title: "Images to PDF Converter",
    description: "Convert images into a PDF document.",
    category: "PDF Tool",
    href: "/tools/images-to-pdf",
  },
  {
    title: "PDF to Word Converter",
    description: "Convert PDF documents into editable Word files.",
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

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-bold">All Tools</h1>

        <p className="mt-5 max-w-3xl text-lg text-slate-300">
          Explore free online calculators, PDF tools, AI tools,
          image converters, creator tools, and productivity utilities.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                {tool.category}
              </span>

              <h2 className="mt-5 text-2xl font-bold transition group-hover:text-cyan-400">
                {tool.title}
              </h2>

              <p className="mt-3 text-slate-400">
                {tool.description}
              </p>

              <div className="mt-6 text-sm font-semibold text-cyan-400">
                Open Tool →
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}