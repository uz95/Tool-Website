export default function ResizeImagesBlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <article className="mx-auto max-w-4xl">
        <a href="/blog" className="text-cyan-400">
          ← Back to Blog
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          How to Resize Images Without Losing Quality
        </h1>

        <p className="mt-4 text-slate-400">
          Resizing images helps reduce dimensions for websites, documents,
          uploads, and social media. The key is choosing the right size without
          making the image look blurry or stretched.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Why Resize Images?</h2>
          <p className="mt-4 text-slate-300">
            Large images can slow down websites and make uploads difficult.
            Resizing images can improve loading speed, reduce storage, and make
            images easier to share online.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            How to Resize Images Properly
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Start with a high-quality original image.</li>
            <li>Choose the correct width and height for your use case.</li>
            <li>Avoid stretching the image unnaturally.</li>
            <li>Use PNG for quality or WEBP/JPG for smaller file sizes.</li>
            <li>Preview the result before downloading.</li>
          </ol>

          <a
            href="/tools/image-resizer"
            className="mt-6 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Resize Image Online
          </a>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Best Image Sizes</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Website hero image: around 1600px wide</li>
            <li>• Blog image: around 1200px wide</li>
            <li>• Profile photo: 400px by 400px</li>
            <li>• Social media post: 1080px by 1080px</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Resize vs Compress: What is the Difference?
          </h2>
          <p className="mt-4 text-slate-300">
            Resizing changes the image dimensions. Compressing reduces file
            size. For best results, resize first and then compress the image if
            needed.
          </p>

          <a
            href="/tools/image-compressor"
            className="mt-6 inline-block rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
          >
            Compress Image Online
          </a>
        </section>
      </article>
    </main>
  );
}