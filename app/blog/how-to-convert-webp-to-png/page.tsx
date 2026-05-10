export default function WebpToPngBlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <article className="mx-auto max-w-4xl">
        <a href="/blog" className="text-cyan-400">← Back to Blog</a>

        <h1 className="mt-8 text-4xl font-bold">
          How to Convert WEBP to PNG Online
        </h1>

        <p className="mt-4 text-slate-400">
          WEBP is a modern image format, but PNG is still widely used for editing,
          design, transparency, and compatibility.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Why Convert WEBP to PNG?</h2>
          <p className="mt-4 text-slate-300">
            WEBP images are great for websites because they can be smaller in size.
            However, some image editors, design tools, upload forms, and older apps
            may not support WEBP properly. PNG is more widely accepted and is useful
            when you need high quality or transparency support.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How to Convert WEBP to PNG</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Open the WEBP to PNG converter.</li>
            <li>Upload your WEBP image.</li>
            <li>Wait for the browser to convert it.</li>
            <li>Download your PNG image.</li>
          </ol>

          <a
            href="/tools/webp-to-png"
            className="mt-6 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Convert WEBP to PNG
          </a>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Is PNG Better Than WEBP?</h2>
          <p className="mt-4 text-slate-300">
            PNG is better for transparency, editing, and compatibility. WEBP is
            better for smaller file sizes and website performance. The best format
            depends on your purpose.
          </p>
        </section>
      </article>
    </main>
  );
}