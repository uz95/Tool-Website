"use client";
import { useState } from "react";
import { convertText, type TextCase } from "./convert";
const modes: { label: string; value: TextCase }[] = [
  { label: "Sentence case", value: "sentence" }, { label: "Title Case", value: "title" },
  { label: "UPPERCASE", value: "upper" }, { label: "lowercase", value: "lower" },
];
export default function TextCaseClient() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<TextCase>("sentence");
  const [status, setStatus] = useState("");
  const output = convertText(text, mode);
  const field = "mt-3 min-h-56 w-full rounded-xl border border-slate-600 bg-slate-950 p-4 text-white focus:outline-2 focus:outline-cyan-400";
  const button = "rounded-xl border border-slate-600 px-4 py-3 font-semibold focus-visible:outline-2 focus-visible:outline-cyan-400 disabled:opacity-40";
  async function copy() {
    try { await navigator.clipboard.writeText(output); setStatus("Converted text copied."); }
    catch { setStatus("Copy unavailable. Select the result and copy it manually."); }
  }
  return <section aria-label="Text case converter" className="mt-10 rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-8">
    <label htmlFor="source-text" className="font-semibold">Your text</label>
    <textarea id="source-text" value={text} maxLength={100000} onChange={event => { setText(event.target.value); setStatus(""); }} placeholder="Paste or type text here…" className={field} />
    <p className="mt-2 text-sm text-slate-400">{text.length.toLocaleString()} / 100,000 characters</p>
    <fieldset className="mt-5"><legend className="font-semibold">Choose a case</legend><div className="mt-3 flex flex-wrap gap-3">
      {modes.map(item => <label key={item.value} className={`${button} cursor-pointer ${mode === item.value ? "border-cyan-400 bg-cyan-400/10 text-cyan-300" : "text-slate-200"}`}>
        <input type="radio" name="text-case" value={item.value} checked={mode === item.value} onChange={() => { setMode(item.value); setStatus(""); }} className="mr-2 accent-cyan-400" />{item.label}
      </label>)}
    </div></fieldset>
    <label htmlFor="converted-text" className="mt-6 block font-semibold">Converted text</label>
    <textarea id="converted-text" readOnly value={output} className={field} />
    <div className="mt-4 flex flex-wrap gap-3"><button type="button" disabled={!output} onClick={copy} className={`${button} bg-cyan-400 text-slate-950`}>Copy result</button>
      <button type="button" disabled={!text} onClick={() => { setText(""); setStatus("Text cleared."); }} className={button}>Clear text</button></div>
    <p role="status" className="mt-3 min-h-6 text-sm text-cyan-300">{status}</p>
    <p className="mt-3 text-sm text-slate-400">Conversion runs in this browser. This tool does not send your text to a conversion server.</p>
  </section>;
}
