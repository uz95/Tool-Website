"use client";

import { useState } from "react";

const nicheMultipliers: Record<string, number> = {
  entertainment: 1.2,
  gaming: 1.5,
  vlogs: 1.4,
  education: 2.5,
  tech: 3.2,
  business: 4.5,
  finance: 6.5,
};

const countryMultipliers: Record<string, number> = {
  usa: 3.5,
  uk: 2.8,
  canada: 2.7,
  australia: 2.6,
  germany: 2.4,
  uae: 1.8,
  india: 0.8,
  pakistan: 0.5,
  bangladesh: 0.45,
  other: 1.0,
};

export default function YouTubeMoneyCalculatorPage() {
  const [views, setViews] = useState("");
  const [niche, setNiche] = useState("tech");
  const [country, setCountry] = useState("usa");
  const [result, setResult] = useState<{
    low: number;
    average: number;
    high: number;
  } | null>(null);

  function calculateEarnings() {
    const monthlyViews = Number(views);

    if (views === "" || isNaN(monthlyViews) || monthlyViews < 0) {
      setResult(null);
      return;
    }

    const baseRPM = 0.6;
    const nicheValue = nicheMultipliers[niche];
    const countryValue = countryMultipliers[country];

    const averageRPM = baseRPM * nicheValue * countryValue;
    const lowRPM = averageRPM * 0.6;
    const highRPM = averageRPM * 1.8;

    setResult({
      low: (monthlyViews / 1000) * lowRPM,
      average: (monthlyViews / 1000) * averageRPM,
      high: (monthlyViews / 1000) * highRPM,
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          YouTube Money Calculator
        </h1>

        <p className="mt-4 text-slate-300">
          Estimate your YouTube monthly earnings based on views, niche, and
          audience country. This calculator gives a realistic earning range
          instead of asking you to know RPM.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Monthly Views
          </label>

          <input
            type="number"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Example: 100000"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <label className="mt-5 block text-sm font-medium text-slate-300">
            YouTube Niche
          </label>

          <select
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          >
            <option value="entertainment">Entertainment</option>
            <option value="gaming">Gaming</option>
            <option value="vlogs">Vlogs</option>
            <option value="education">Education</option>
            <option value="tech">Technology</option>
            <option value="business">Business</option>
            <option value="finance">Finance</option>
          </select>

          <label className="mt-5 block text-sm font-medium text-slate-300">
            Main Audience Country
          </label>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          >
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
            <option value="germany">Germany</option>
            <option value="uae">UAE</option>
            <option value="india">India</option>
            <option value="pakistan">Pakistan</option>
            <option value="bangladesh">Bangladesh</option>
            <option value="other">Other</option>
          </select>

          <button
            onClick={calculateEarnings}
            className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Calculate Earnings
          </button>

          {result && (
            <div className="mt-6 rounded-2xl bg-slate-950 p-6">
              <h2 className="text-xl font-bold">
                Estimated Monthly Earnings
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-slate-900 p-4 text-center">
                  <p className="text-sm text-slate-400">Low Estimate</p>
                  <p className="mt-2 text-2xl font-bold text-cyan-400">
                    ${result.low.toFixed(2)}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900 p-4 text-center">
                  <p className="text-sm text-slate-400">Average Estimate</p>
                  <p className="mt-2 text-2xl font-bold text-cyan-400">
                    ${result.average.toFixed(2)}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900 p-4 text-center">
                  <p className="text-sm text-slate-400">High Estimate</p>
                  <p className="mt-2 text-2xl font-bold text-cyan-400">
                    ${result.high.toFixed(2)}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-400">
                These are estimates only. Actual earnings depend on RPM, CPM,
                watch time, ad inventory, viewer location, video length,
                monetization settings, and advertiser demand.
              </p>
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            How YouTube Earnings Are Estimated
          </h2>

          <p className="mt-4 text-slate-300">
            YouTube earnings are usually estimated using RPM, which means
            revenue per 1,000 views. This calculator estimates RPM based on your
            content niche and main audience country.
          </p>

          <p className="mt-4 rounded-xl bg-slate-900 p-4 text-slate-300">
            Estimated Earnings = Monthly Views ÷ 1000 × Estimated RPM
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Niche and Country Matter
          </h2>

          <p className="mt-4 text-slate-300">
            Finance, business, education, and technology channels often earn
            more because advertisers pay more in these categories. Audience
            countries like the United States, United Kingdom, Canada, Australia,
            and Germany usually have higher ad rates than many other regions.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                Is this YouTube money calculator accurate?
              </h3>

              <p className="mt-2 text-slate-300">
                It provides an estimate only. Real YouTube earnings can be
                higher or lower depending on many monetization factors.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">What is RPM?</h3>

              <p className="mt-2 text-slate-300">
                RPM means revenue per 1,000 views. It shows how much a creator
                earns on average for every 1,000 video views.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Which YouTube niche earns the most?
              </h3>

              <p className="mt-2 text-slate-300">
                Finance, business, technology, and education channels usually
                have higher earning potential.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}