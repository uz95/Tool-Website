const posts = [
  {
    title: "How to Convert WEBP to PNG Online",
    description:
      "Learn why people convert WEBP images to PNG and how to do it quickly online.",
    href: "/blog/how-to-convert-webp-to-png",
    category: "Image Tools",
  },
  {
    title: "How to Estimate YouTube Earnings",
    description:
      "Understand YouTube RPM, views, niche, country, and how earnings are estimated.",
    href: "/blog/how-to-estimate-youtube-earnings",
    category: "Creator Tools",
  },
  {
    title: "PNG vs WEBP: Which Image Format is Better?",
    description:
      "Compare PNG and WEBP for quality, file size, website speed, and SEO.",
    href: "/blog/png-vs-webp",
    category: "Image Tools",
  },
  {
  title: "WEBP vs PNG: Which Image Format Is Better for Websites?",
  description:
    "Compare WEBP and PNG for quality, transparency, file size, and website speed.",
  href: "/blog/webp-vs-png",
  category: "Image Tools",
},
{
  title: "How to Resize Images Without Losing Quality",
  description:
    "Learn how to resize images properly for websites, uploads, and social media.",
  href: "/blog/how-to-resize-images-without-losing-quality",
  category: "Image Tools",
},
{
  title: "Best Image Format for Websites in 2026",
  description:
    "Learn which image format is best for website speed, SEO, and quality.",
  href: "/blog/best-image-format-for-websites",
  category: "Image SEO",
},
{
  title: "How to Compress Images for Faster Websites",
  description:
    "Learn how image compression improves website speed, SEO, and user experience.",
  href: "/blog/how-to-compress-images-for-faster-websites",
  category: "Image Optimization",
},
{
  title: "PNG vs JPG: Which Image Format Should You Use?",
  description:
    "Compare PNG and JPG for quality, file size, transparency, and SEO.",
  href: "/blog/png-vs-jpg",
  category: "Image Tools",
},
{
  title: "How to Rotate Images Online for Free",
  description:
    "Learn how to rotate JPG, PNG, and WEBP images online quickly and easily.",
  href: "/blog/how-to-rotate-images-online",
  category: "Image Editing",
},
{
  title: "How to Blur Images Online Without Photoshop",
  description:
    "Blur photos and images online for free without using Photoshop or editing software.",
  href: "/blog/how-to-blur-images-online",
  category: "Image Editing",
},
{
  title: "What Is Base64 Image Encoding?",
  description:
    "Learn what Base64 image encoding is and how developers use Base64 images in HTML and CSS.",
  href: "/blog/what-is-base64-image",
  category: "Developer Tools",
},
];

export const metadata = {
  title: "Blog - FastWebToolsHub",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-bold">Blog</h1>

        <p className="mt-5 max-w-3xl text-lg text-slate-300">
          Helpful guides about online tools, image conversion, PDF tools,
          calculators, AI tools, and creator utilities.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                {post.category}
              </span>

              <h2 className="mt-5 text-2xl font-bold">{post.title}</h2>

              <p className="mt-3 text-slate-400">{post.description}</p>

              <div className="mt-6 text-sm font-semibold text-cyan-400">
                Read Article →
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}