import type { Metadata } from "next";
import Link from "next/link";
import ChangeClient from "./ChangeClient";
export const metadata: Metadata = {
  title: "Percentage Change Calculator – Increase or Decrease",
  description: "Calculate the percentage increase or decrease between an original and new value. See the difference, formula and worked result with clear input checks.",
  alternates: { canonical: "https://www.fastwebtoolshub.com/tools/percentage-change-calculator" },
};
export default function PercentageChangePage() {
  return <main className="min-h-screen bg-slate-950 px-6 py-16 text-white"><div className="mx-auto max-w-4xl">
    <Link href="/tools/calculators" className="text-cyan-400">← All calculators</Link>
    <h1 className="mt-8 text-4xl font-bold sm:text-5xl">Percentage Change Calculator</h1>
    <p className="mt-5 text-lg text-slate-300">Compare a new value with its original value to find the percentage increase or decrease. Get the numerical difference and the formula used.</p>
    <ChangeClient />
    <section className="mt-12 space-y-5 leading-relaxed text-slate-300">
      <h2 className="text-2xl font-bold text-white">How is percentage change calculated?</h2>
      <p>Subtract the original value from the new value, divide by the original, then multiply by 100. A change from 80 to 100 is (100 − 80) ÷ 80 × 100 = 25%, an increase. A change from 100 to 80 is −20%, a decrease.</p>
      <h2 className="pt-4 text-2xl font-bold text-white">Why does the order matter?</h2>
      <p>The original value is the denominator. Reversing the values changes the baseline, so a 25% increase does not reverse with a 25% decrease. To return from 100 to 80 requires a 20% decrease.</p>
      <h2 className="pt-4 text-2xl font-bold text-white">Can I start from zero or a negative number?</h2>
      <p>This calculator requires an original value greater than zero. Division by zero cannot produce a defined percentage change. Negative starting values can make an increase in the number appear as a negative percentage; those comparisons require context and are excluded here. A negative new value is accepted when the original is positive.</p>
      <h2 className="pt-4 text-2xl font-bold text-white">Is this the same as percentage points?</h2>
      <p>No. A rate increasing from 10% to 12% rises by 2 percentage points, but its relative percentage increase is 20%. Enter 10 and 12 here to calculate the relative change.</p>
      <p>For another type of calculation, use the <Link href="/tools/percentage-calculator" className="text-cyan-400 underline">percentage-of-a-number calculator</Link>. Read the <Link href="/blog/how-to-calculate-percentage-change" className="text-cyan-400 underline">percentage change guide</Link> for worked examples and common mistakes.</p>
    </section>
  </div></main>;
}
