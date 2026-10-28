"use client";
import { useState } from "react";
import { calculateChange } from "./calculate";

function format(value: number) {
  if (value !== 0 && Math.abs(value) < 0.000001) return value.toExponential(4);
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 6 }).format(value);
}

export default function ChangeClient() {
  const [original, setOriginal] = useState("");
  const [next, setNext] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const result = submitted ? calculateChange(original, next) : null;
  const inputClass = "mt-2 w-full rounded-xl border border-slate-600 bg-slate-950 p-4 text-white focus:outline-2 focus:outline-cyan-400";
  const buttonClass = "rounded-xl px-5 py-3 font-semibold focus-visible:outline-2 focus-visible:outline-cyan-400";
  return <section className="mt-10 rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8" aria-label="Percentage change calculator">
    <form onSubmit={event => { event.preventDefault(); setSubmitted(true); }} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="original-value" className="font-semibold">Original value</label>
          <input id="original-value" inputMode="decimal" type="text" maxLength={40} value={original} onChange={event => { setOriginal(event.target.value); setSubmitted(false); }} placeholder="For example, 80" aria-describedby="number-help" className={inputClass} /></div>
        <div><label htmlFor="new-value" className="font-semibold">New value</label>
          <input id="new-value" inputMode="decimal" type="text" maxLength={40} value={next} onChange={event => { setNext(event.target.value); setSubmitted(false); }} placeholder="For example, 100" aria-describedby="number-help" className={inputClass} /></div>
      </div>
      <p id="number-help" className="mt-3 text-sm text-slate-400">Use the same units for both values. The original must be positive. Enter decimals with a point and omit commas and symbols.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className={`${buttonClass} bg-cyan-400 text-slate-950`}>Calculate change</button>
        <button type="button" onClick={() => { setOriginal("80"); setNext("100"); setSubmitted(true); }} className={`${buttonClass} border border-slate-600`}>Try 80 → 100</button>
        <button type="button" onClick={() => { setOriginal(""); setNext(""); setSubmitted(false); }} className={`${buttonClass} border border-slate-600`}>Clear</button>
      </div>
    </form>
    <div aria-live="polite" aria-atomic="true" className="mt-6">
      {result && !result.ok && <p role="alert" className="rounded-xl border border-rose-400/50 bg-rose-400/10 p-4 text-rose-200">{result.error}</p>}
      {result?.ok && <div className="space-y-4 rounded-xl border border-cyan-400/30 bg-cyan-400/5 p-5">
        <h2 className="text-2xl font-bold text-cyan-300">{format(Math.abs(result.percentage))}% {result.percentage > 0 ? "increase" : result.percentage < 0 ? "decrease" : "change"}</h2>
        <p>From {format(result.original)} to {format(result.next)}. The numerical change is {format(result.difference)}.</p>
        <p className="break-words font-mono text-sm">({format(result.next)} − {format(result.original)}) ÷ {format(result.original)} × 100 = {format(result.percentage)}%</p>
        <p className="text-sm text-slate-400">Displayed results are rounded to six decimal places; very small results use scientific notation. Calculations use standard browser number precision.</p>
      </div>}
    </div>
    <p className="mt-5 text-sm text-slate-400">This calculation runs in your browser without sending the entered numbers to a calculation server.</p>
  </section>;
}
