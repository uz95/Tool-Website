export const metadata = {
  title: "How to Compress Images for Faster Websites",
  alternates: {
    canonical:
      "https://www.fastwebtoolshub.com/blog/how-to-compress-images-for-faster-websites",
  },
};

export default function CompressImagesBlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/blog" className="text-cyan-400">
          ← Back to Blog
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          How to Compress Images for Faster Websites
        </h1>

        <p className="mt-8 text-slate-300">
          Large images slow down websites and hurt SEO. Compressing images
          helps improve speed, user experience, and mobile performance.
        </p>

        <h2 className="mt-12 text-2xl font-bold">
          Why Image Compression Matters
        </h2>

        <ul className="mt-4 space-y-3 text-slate-300">
          <li>• Faster loading websites</li>
          <li>• Better SEO rankings</li>
          <li>• Lower bandwidth usage</li>
          <li>• Improved Core Web Vitals</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold">
          Best Ways to Compress Images
        </h2>

        <ol className="mt-4 list-decimal space-y-4 pl-6 text-slate-300">
          <li>Use WEBP image format.</li>
          <li>Resize large images before upload.</li>
          <li>Use image compression tools.</li>
          <li>Avoid unnecessary large dimensions.</li>
        </ol>

        <h2 className="mt-12 text-2xl font-bold">Conclusion</h2>

        <p className="mt-4 text-slate-300">
          Compressing images is one of the easiest ways to improve website
          performance and SEO rankings.
        </p>
      </div>
    </main>
  );
}