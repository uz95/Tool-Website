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

const relatedTools = [
  {
    title: "AI Caption Generator",
    description: "Generate captions for social media posts.",
    href: "/tools/ai-caption-generator",
  },
  {
    title: "AI Bio Generator",
    description: "Create bios for creators and profiles.",
    href: "/tools/ai-bio-generator",
  },
  {
    title: "Word Counter",
    description: "Count words and characters for scripts.",
    href: "/tools/word-counter",
  },
  {
    title: "Percentage Calculator",
    description: "Calculate percentages quickly.",
    href: "/tools/percentage-calculator",
  },
];

export default function YouTubeMoneyCalculatorClient() {
  const [views, setViews] = useState("");
  const [niche, setNiche] = useState("tech");
  const [country, setCountry] = useState("usa");
  const [result, setResult] = useState<{
    low: number;
    average: number;
    high: number;
    rpm: number;
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
      rpm: averageRPM,
    });
  }

  function clearAll() {
    setViews("");
    setNiche("tech");
    setCountry("usa");
    setResult(null);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          YouTube Money Calculator Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Estimate YouTube earnings online for free. Enter monthly views, choose
          your YouTube niche, select your main audience country, and calculate a
          realistic monthly earning range. This YouTube money calculator is
          useful for creators, vloggers, gaming channels, tech channels,
          education creators, finance channels, and business content creators.
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

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={calculateEarnings}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Calculate YouTube Earnings
            </button>

            <button
              onClick={clearAll}
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Clear All
            </button>
          </div>

          {result && (
            <div className="mt-6 rounded-2xl bg-slate-950 p-6">
              <h2 className="text-xl font-bold">
                Estimated Monthly YouTube Earnings
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Estimated RPM: ${result.rpm.toFixed(2)} per 1,000 views
              </p>

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
                These are estimates only. Real YouTube revenue depends on RPM,
                CPM, watch time, monetized playbacks, viewer location, ad
                inventory, video length, niche, advertiser demand and YouTube
                monetization settings.
              </p>
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free YouTube Earnings Calculator by Views
          </h2>

          <p className="mt-4 text-slate-300">
            This free YouTube earnings calculator helps estimate how much money
            a YouTube channel may earn from monthly views. You can use it as a
            YouTube revenue calculator, YouTube income calculator, YouTube RPM
            calculator, YouTube CPM estimator, or creator earnings calculator.
          </p>

          <p className="mt-4 text-slate-300">
            Instead of asking you to know your exact RPM, this calculator uses
            your niche and main audience country to estimate a realistic earning
            range. Finance, business, tech and education channels often have
            higher earning potential than entertainment or vlog channels.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            How YouTube Earnings Are Estimated
          </h2>

          <p className="mt-4 text-slate-300">
            YouTube earnings are commonly estimated using RPM, which means
            revenue per 1,000 views. The simple formula is:
          </p>

          <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-slate-300">
            Estimated Earnings = Monthly Views ÷ 1000 × Estimated RPM
          </div>

          <p className="mt-4 text-slate-300">
            For example, if a channel gets 100,000 monthly views and has an
            estimated RPM of $3, the estimated revenue would be about $300.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why YouTube Niche and Country Matter
          </h2>

          <p className="mt-4 text-slate-300">
            YouTube earnings can vary widely because advertisers pay different
            rates for different topics and countries. Finance, business,
            technology and education content often attracts higher-paying ads.
            Audience countries like the United States, United Kingdom, Canada,
            Australia and Germany often have higher ad rates than many other
            regions.
          </p>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Finance channels usually have higher RPM potential</li>
            <li>• Business and tech channels often attract valuable advertisers</li>
            <li>• Gaming and entertainment channels may need more views</li>
            <li>• Countries with stronger ad markets usually pay more</li>
            <li>• Longer videos may show more ads if monetization is enabled</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            YouTube RPM vs CPM
          </h2>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800">
            <table className="w-full text-left">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-4 py-3">Metric</th>
                  <th className="px-4 py-3">Meaning</th>
                  <th className="px-4 py-3">Used For</th>
                </tr>
              </thead>

              <tbody className="bg-slate-950 text-slate-300">
                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">RPM</td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Revenue per 1,000 views after YouTube share
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Creator earnings estimate
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">CPM</td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Advertiser cost per 1,000 ad impressions
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Advertising cost estimate
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Best Uses for This YouTube Money Calculator
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Estimate YouTube earnings from monthly views</li>
            <li>• Compare earning potential by niche</li>
            <li>• Estimate YouTube income by country</li>
            <li>• Plan monetization goals for a YouTube channel</li>
            <li>• Estimate creator revenue before starting a channel</li>
            <li>• Understand RPM, CPM and YouTube revenue ranges</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Related Creator Tools</h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedTools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-cyan-400"
              >
                <h3 className="font-bold text-cyan-400">{tool.title}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  {tool.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">
                How do I calculate YouTube earnings?
              </h3>
              <p className="mt-2 text-slate-300">
                Enter your monthly views, choose your niche and main audience
                country, then calculate the estimated monthly earnings range.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this YouTube money calculator accurate?
              </h3>
              <p className="mt-2 text-slate-300">
                It provides an estimate only. Real earnings can be higher or
                lower depending on RPM, CPM, watch time, ads, audience country,
                niche and monetization settings.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">What is RPM on YouTube?</h3>
              <p className="mt-2 text-slate-300">
                RPM means revenue per 1,000 views. It estimates how much a
                creator earns for every 1,000 video views.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What is CPM on YouTube?
              </h3>
              <p className="mt-2 text-slate-300">
                CPM means cost per 1,000 ad impressions. It shows how much
                advertisers pay, not exactly how much creators receive.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Which YouTube niche earns the most?
              </h3>
              <p className="mt-2 text-slate-300">
                Finance, business, technology and education channels usually
                have higher earning potential because advertisers often pay more
                for these audiences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I calculate earnings for 1000 YouTube views?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes. Enter 1000 views, select your niche and country, and the
                calculator will estimate the earnings range.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}