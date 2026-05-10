export default function PngVsWebpBlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <article className="mx-auto max-w-4xl">
        <a href="/blog" className="text-cyan-400">← Back to Blog</a>

        <h1 className="mt-8 text-4xl font-bold">
          PNG vs WEBP: Which Image Format is Better?
        </h1>

        <p className="mt-4 text-slate-400">
          PNG and WEBP are both useful image formats, but they are best for
          different situations.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What is PNG?</h2>
          <p className="mt-4 text-slate-300">
            PNG is a popular image format known for high quality and transparency.
            It is useful for logos, graphics, screenshots, icons, and images that
            need clear edges or transparent backgrounds.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What is WEBP?</h2>
          <p className="mt-4 text-slate-300">
            WEBP is a modern image format designed for the web. It usually creates
            smaller files than PNG or JPG while keeping good visual quality. This
            helps websites load faster.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Which Should You Use?</h2>
          <p className="mt-4 text-slate-300">
            Use PNG when you need transparency, editing quality, or compatibility.
            Use WEBP when you want smaller file sizes and better website speed.
          </p>

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