import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "How to Calculate Percentage Change: Increase and Decrease",
  description: "Work through percentage change examples, understand the original-value baseline, and distinguish relative change from percentage points.",
  alternates: { canonical: "https://www.fastwebtoolshub.com/blog/how-to-calculate-percentage-change" },
};
export default function ChangeGuide() {
  return <main className="min-h-screen bg-slate-950 px-6 py-16 text-white"><article className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-slate-300">
    <Link href="/blog" className="text-cyan-400">← All articles</Link>
    <h1 className="pt-5 text-4xl font-bold text-white">How to Calculate Percentage Change</h1>
    <p>When a value moves from 80 to 100, the difference is 20. That tells you how much it changed, but not how large the change is compared with the starting value. Percentage change expresses the difference relative to the original: in this example, the increase is 25%.</p>
    <p>Use the <Link href="/tools/percentage-change-calculator" className="text-cyan-400 underline">percentage change calculator</Link> to compare two values, or follow the steps below to check the result yourself.</p>
    <h2 className="pt-5 text-2xl font-bold text-white">Start with the original value</h2>
    <p>The formula is (new value − original value) ÷ original value × 100. Use matching units and comparable periods: compare weekly visits with weekly visits, not with a monthly total. Decide which value came first before calculating.</p>
    <ol className="list-decimal space-y-2 pl-6"><li>Subtract the original from the new value to find the numerical difference.</li><li>Divide that difference by the original value.</li><li>Multiply by 100 and label the result as an increase, decrease or no change.</li></ol>
    <h2 className="pt-5 text-2xl font-bold text-white">Example: visits rise from 240 to 300</h2>
    <p>The difference is 300 − 240 = 60 visits. Divide 60 by 240 to get 0.25, then multiply by 100. Visits increased by 25%. In the calculator, enter 240 as the original and 300 as the new value.</p>
    <h2 className="pt-5 text-2xl font-bold text-white">Example: a file shrinks from 500 KB to 350 KB</h2>
    <p>The difference is 350 − 500 = −150 KB. Dividing −150 by 500 and multiplying by 100 gives −30%. The file size decreased by 30%. Keep the units consistent: converting both measurements to bytes before comparing can avoid confusion between KB and KiB.</p>
    <div className="overflow-x-auto"><table className="w-full border-collapse text-left text-base">
      <caption className="mb-3 text-left">Examples using a positive original value</caption>
      <thead><tr>{["Original","New","Difference","Percentage change"].map(label=><th key={label} scope="col" className="border border-slate-700 p-3">{label}</th>)}</tr></thead>
      <tbody>{[["80","100","+20","25% increase"],["100","80","−20","20% decrease"],["40","40","0","0% change"],["75","0","−75","100% decrease"]].map(row=><tr key={row.join("-")}>{row.map((cell,index)=><td key={index} className="border border-slate-700 p-3">{cell}</td>)}</tr>)}</tbody>
    </table></div>
    <h2 className="pt-5 text-2xl font-bold text-white">An increase and its reversal are different percentages</h2>
    <p>Moving from 80 to 100 adds 20, which is 25% of 80. Moving back from 100 to 80 removes the same 20, but it is 20% of 100. The difference in percentages comes from the changed denominator. Keep this in mind when comparing before-and-after measurements.</p>
    <h2 className="pt-5 text-2xl font-bold text-white">Percentage change versus percentage points</h2>
    <p>If a completion rate moves from 10% to 12%, subtracting the rates gives 2 percentage points. The relative increase is (12 − 10) ÷ 10 × 100 = 20%. Both descriptions are valid, but they describe different things. State which one you mean when reporting a result.</p>
    <h2 className="pt-5 text-2xl font-bold text-white">What if the original is zero or negative?</h2>
    <p>A percentage change from zero is undefined because the formula divides by the original value. If visits go from 0 to 30, report an increase of 30 visits rather than assigning an ordinary percentage growth figure. A decrease from a positive value to zero, however, is a valid 100% decrease.</p>
    <p>Negative baselines need special interpretation. For example, going from −20 to −10 increases the number, but the usual formula returns −50%. This calculator excludes negative original values to avoid implying a simple growth result. Use the numerical difference and the context when a baseline is negative.</p>
    <h2 className="pt-5 text-2xl font-bold text-white">Check precision and comparability</h2>
    <p>Round only the final result when possible. The calculator displays up to six decimal places and uses standard browser number precision. Very small results use scientific notation. Extremely large results may be rejected. For records requiring exact decimal accounting or scientific precision, use a calculation method suited to those requirements.</p>
    <p>Before sharing a result, include the original and new values, their units, the comparison period and the rounded percentage. If you instead need to find 15% of a number, use the <Link href="/tools/percentage-calculator" className="text-cyan-400 underline">percentage-of-a-number calculator</Link>.</p>
    <p><Link href="/tools/percentage-change-calculator" className="inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950">Calculate percentage change</Link></p>
  </article></main>;
}
