const tools = [
  { title: "Crop Image", href: "/tools/crop-image" },
  { title: "Rotate Image", href: "/tools/rotate-image" },
  { title: "Blur Image", href: "/tools/blur-image" },
  { title: "Image Resizer", href: "/tools/image-resizer" },
  { title: "Image Compressor", href: "/tools/image-compressor" },
  { title: "SVG to PNG", href: "/tools/svg-to-png" },
  { title: "WEBP to PNG", href: "/tools/webp-to-png" },
  { title: "PNG to WEBP", href: "/tools/png-to-webp" },
  { title: "JPG to PNG", href: "/tools/jpg-to-png" },
  { title: "PNG to JPG", href: "/tools/png-to-jpg" },
  { title: "HEIC to JPG", href: "/tools/heic-to-jpg" },
  { title: "Favicon Generator", href: "/tools/favicon-generator" },
  { title: "Image to Base64", href: "/tools/image-to-base64" },
];

export const metadata = {
  title: "Image Tools - FastWebToolsHub",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/image-tools",
  },
};

export default function ImageToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Free Online Image Tools</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Use free online image tools to convert, compress, resize, crop, rotate,
          blur, and edit images directly in your browser.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-cyan-400"
            >
              <h2 className="text-xl font-bold">{tool.title}</h2>
              <p className="mt-3 text-sm text-slate-400">
                Open free {tool.title.toLowerCase()} tool.
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}