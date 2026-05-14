export default function WebpVsPngBlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <article className="mx-auto max-w-4xl">
        <a href="/blog" className="text-cyan-400">
          ← Back to Blog
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          WEBP vs PNG: Which Image Format Is Better for Websites?
        </h1>

        <p className="mt-4 text-slate-400">
          WEBP and PNG are both useful image formats, but they are best for
          different situations. Choosing the right format can improve image
          quality, website speed, and user experience.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What is PNG?</h2>
          <p className="mt-4 text-slate-300">
            PNG is a high-quality image format that supports transparency. It is
            commonly used for logos, icons, graphics, screenshots, and images
            that need sharp edges or transparent backgrounds.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What is WEBP?</h2>
          <p className="mt-4 text-slate-300">
            WEBP is a modern image format designed for the web. It usually
            creates smaller file sizes than PNG while keeping good visual
            quality, which can help websites load faster.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">WEBP vs PNG: Main Difference</h2>
          <p className="mt-4 text-slate-300">
            PNG is better for quality, editing, and transparency. WEBP is better
            for smaller file sizes and website performance. If your goal is
            speed, WEBP is often the better choice. If your goal is editing or
            compatibility, PNG may be better.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Which Format Should You Use?</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Use PNG for logos, screenshots, and transparent graphics.</li>
            <li>• Use WEBP for websites, blogs, landing pages, and faster loading.</li>
            <li>• Convert PNG to WEBP when you want smaller image files.</li>
            <li>• Convert WEBP to PNG when you need compatibility or editing.</li>
          </ul>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="/tools/png-to-webp"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Convert PNG to WEBP
            </a>

            <a
              href="/tools/webp-to-png"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Convert WEBP to PNG
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}