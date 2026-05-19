export const metadata = {
  title: "Privacy Policy - FastWebToolsHub",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/privacy-policy",
  },
};
export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>

        <p className="mt-6 text-slate-300">
          Your privacy is important to us. This Privacy Policy explains how
          FastWebToolsHub collects, uses, and protects information when you use
          our website.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Information We Collect</h2>

          <p className="mt-4 text-slate-300">
            We may collect basic usage information such as pages visited,
            browser type, device information, and general analytics data to
            improve our website.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Files and Tool Usage</h2>

          <p className="mt-4 text-slate-300">
            Many tools on FastWebToolsHub process files directly in your browser.
            We do not intentionally store or upload your files unless clearly
            stated for a specific feature.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Cookies and Advertising</h2>

          <p className="mt-4 text-slate-300">
            We may use cookies, analytics tools, and third-party advertising
            services such as Google AdSense. These services may use cookies to
            show relevant ads and measure performance.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Third-Party Links</h2>

          <p className="mt-4 text-slate-300">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those websites.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Contact</h2>

          <p className="mt-4 text-slate-300">
            If you have questions about this Privacy Policy, contact us at
            usmanzia90@gmail.com.
          </p>
        </section>
      </div>
    </main>
  );
}