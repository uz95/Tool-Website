"use client";

import { useState } from "react";

export default function PercentageCalculatorPage() {
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

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">Percentage Calculator</h1>

        <p className="mt-4 text-slate-300">
          Use this free percentage calculator to find what percent of a number is.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Percentage
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

          <button
            onClick={calculatePercentage}
            className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Calculate
          </button>

          {result && (
            <div className="mt-6 rounded-xl bg-slate-950 p-4 text-lg font-semibold">
              {result}
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">How to Calculate Percentage</h2>

          <p className="mt-4 text-slate-300">
            To calculate a percentage, divide the percentage value by 100 and
            multiply it by the number. For example, 20% of 150 is calculated as
            20 divided by 100 multiplied by 150.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Common Uses</h2>

          <p className="mt-4 text-slate-300">
            This percentage calculator is useful for discounts, school marks,
            business calculations, finance, shopping, and daily math problems.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
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
                Yes, this online percentage calculator is completely free to use.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}