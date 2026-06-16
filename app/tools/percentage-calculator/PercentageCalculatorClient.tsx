"use client";

import { useState } from "react";

const relatedTools = [
  {
    title: "Age Calculator",
    description: "Calculate exact age from date of birth.",
    href: "/tools/age-calculator",
  },
  {
    title: "BMI Calculator",
    description: "Calculate body mass index online.",
    href: "/tools/bmi-calculator",
  },
  {
    title: "GPA Calculator",
    description: "Convert percentage to GPA with credit hours.",
    href: "/tools/gpa-calculator",
  },
  {
    title: "YouTube Money Calculator",
    description: "Estimate YouTube earnings from views.",
    href: "/tools/youtube-money-calculator",
  },
];

export default function PercentageCalculatorClient() {
  const [percent, setPercent] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  function calculatePercentage() {
    const p = Number(percent);
    const n = Number(number);

    if (percent === "" || number === "" || isNaN(p) || isNaN(n)) {
      setResult("Please enter valid numbers.");
      return;
    }

    const answer = (p / 100) * n;
    setResult(`${p}% of ${n} is ${answer}`);
  }

  function clearAll() {
    setPercent("");
    setNumber("");
    setResult("");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/tools/calculators" className="text-cyan-400">
          ← Back to Calculators
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Percentage Calculator Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Calculate percentages instantly with this free online percentage
          calculator. Find what percent of a number is, calculate discounts,
          percentage values, school marks percentages, shopping savings,
          business calculations, and daily math problems.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Percentage Value
          </label>

          <input
            type="number"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
            placeholder="Example: 20"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <label className="mt-5 block text-sm font-medium text-slate-300">
            Number
          </label>

          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Example: 150"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={calculatePercentage}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Calculate Percentage
            </button>

            <button
              onClick={clearAll}
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Clear All
            </button>
          </div>

          {result && (
            <div className="mt-6 rounded-xl bg-slate-950 p-5 text-lg font-semibold text-cyan-400">
              {result}
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free Percentage of a Number Calculator
          </h2>

          <p className="mt-4 text-slate-300">
            This free percentage calculator helps you calculate what percentage
            of a number equals. It is useful when you need to answer questions
            like “What is 20% of 150?” or “What is 15 percent of 200?” quickly
            without doing manual math.
          </p>

          <p className="mt-4 text-slate-300">
            You can use this tool for discounts, marks, shopping, business,
            finance, tax estimates, school assignments, salary calculations,
            reports, and daily percentage problems.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Percentage Formula</h2>

          <p className="mt-4 text-slate-300">
            Percentage Value = (Percentage ÷ 100) × Number
          </p>

          <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-slate-300">
            Example: 20% of 150 = (20 ÷ 100) × 150 = 30
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            How to Calculate Percentage Online
          </h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Enter the percentage value, such as 20.</li>
            <li>Enter the number, such as 150.</li>
            <li>Click the Calculate Percentage button.</li>
            <li>View the result instantly.</li>
            <li>Use Clear All to start a new calculation.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Common Percentage Examples
          </h2>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800">
            <table className="w-full text-left">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-4 py-3">Calculation</th>
                  <th className="px-4 py-3">Result</th>
                </tr>
              </thead>

              <tbody className="bg-slate-950 text-slate-300">
                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    10% of 100
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">10</td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    20% of 150
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">30</td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    25% of 200
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">50</td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    50% of 80
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">40</td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    75% of 120
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">90</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Where Can You Use This Percentage Calculator?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Calculate shopping discounts and sale prices</li>
            <li>• Calculate school marks and exam percentages</li>
            <li>• Find business percentages and report values</li>
            <li>• Calculate finance, tax, and budget percentages</li>
            <li>• Solve daily math and percentage word problems</li>
            <li>• Check quick percentage values without manual calculation</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Related Calculators</h2>

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
                How do I calculate a percentage of a number?
              </h3>
              <p className="mt-2 text-slate-300">
                Multiply the number by the percentage and divide by 100. For
                example, 20% of 150 is 30.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What is 20% of 150?
              </h3>
              <p className="mt-2 text-slate-300">
                20% of 150 is 30.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this percentage calculator free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this online percentage calculator is completely free to
                use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I use this for discount calculations?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can use it to calculate shopping discounts, sale
                prices, and percentage savings.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I calculate marks percentage?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this calculator can help with school marks, exam
                percentages, and basic academic percentage calculations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}