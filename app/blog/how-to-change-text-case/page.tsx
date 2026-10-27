import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "How to Change Text Case Without Retyping",
  description: "Worked examples of uppercase, lowercase, sentence case and title case, plus practical checks for acronyms, names and copied text.",
  alternates: { canonical: "https://www.fastwebtoolshub.com/blog/how-to-change-text-case" },
};
export default function TextCaseGuide() {
  return <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
    <article className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-slate-300">
      <Link href="/blog" className="text-cyan-400">← All articles</Link>
      <h1 className="pt-5 text-4xl font-bold text-white">How to Change Text Case Without Retyping</h1>
      <p>A paragraph copied from a PDF, spreadsheet or email may arrive in ALL CAPITALS. Retyping introduces errors. A case converter gives you a starting point: paste the text, choose a capitalization style, and review the result before using it.</p>
      <p>The <Link href="/tools/text-case-converter" className="text-cyan-400 underline">free text case converter</Link> changes capitalization in your browser and preserves spaces and line breaks. It does not rewrite sentences or correct grammar.</p>
      <h2 className="pt-6 text-2xl font-bold text-white">Choose the right format</h2>
      <div className="overflow-x-auto"><table className="w-full border-collapse text-left text-base">
        <caption className="mb-3 text-left">Input: HELLO WORLD. WELCOME BACK!</caption>
        <thead><tr><th scope="col" className="border border-slate-700 p-3">Format</th><th scope="col" className="border border-slate-700 p-3">Result</th><th scope="col" className="border border-slate-700 p-3">Typical use</th></tr></thead>
        <tbody>{[
          ["Sentence case", "Hello world. Welcome back!", "Body text or sentence-style headings"],
          ["Title case", "Hello World. Welcome Back!", "A starting point for headings"],
          ["Uppercase", "HELLO WORLD. WELCOME BACK!", "Short labels or codes"],
          ["Lowercase", "hello world. welcome back!", "A lowercase formatting convention"],
        ].map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={index} scope="row" className="border border-slate-700 p-3 font-medium">{cell}</th> : <td key={index} className="border border-slate-700 p-3">{cell}</td>)}</tr>)}</tbody>
      </table></div>
      <h2 className="pt-6 text-2xl font-bold text-white">Convert a paragraph in three steps</h2>
      <ol className="list-decimal space-y-3 pl-6"><li>Copy the original into the input box. Keep a copy if you need its original spelling.</li><li>Select sentence case for normal prose, or choose another format. The result updates immediately.</li><li>Check names, acronyms, abbreviations and punctuation, then copy the result into your document.</li></ol>
      <p>For example, “SEND THE NASA REPORT. CHECK THE PDF.” becomes “Send the nasa report. Check the pdf.” in sentence case. The tool cannot know that NASA and PDF should stay capitalized. Restore those acronyms before sending your message.</p>
      <h2 className="pt-6 text-2xl font-bold text-white">Simple title case needs an editorial check</h2>
      <p>This tool capitalizes every word, so “a guide to image formats” becomes “A Guide To Image Formats”. Some editorial styles would use “A Guide to Image Formats”. Follow your publication’s style rather than assuming one button implements every convention.</p>
      <p>Product names need attention too. “iPhone” can become “Iphone” in title case. Check mixed-case names and usernames against the original. Avoid changing passwords, code, file paths or API keys with a general writing tool: case may affect how they work.</p>
      <h2 className="pt-6 text-2xl font-bold text-white">Why sentence case sometimes gets it wrong</h2>
      <p>Sentence case uses punctuation and line breaks as clues. A period followed by a space may start a sentence or belong to “Dr.” or “e.g.”. A new line may begin a paragraph or continue a sentence copied from a PDF. Review these boundaries and remove unwanted line breaks before converting when necessary.</p>
      <p>The converter lowercases the English pronoun “I” inside a sentence and does not recognize proper nouns. “I LIVE IN LONDON” becomes “I live in london”. Restore “London” manually. Capitalization cleanup is a formatting step, not a substitute for proofreading.</p>
      <h2 className="pt-6 text-2xl font-bold text-white">Check non-English text and character limits</h2>
      <p>JavaScript supports Unicode casing, but this tool does not ask for a language. Language-specific rules can differ from its default behavior. German “straße” becomes “STRASSE” in uppercase, increasing the length. Scripts without letter case, such as Chinese, do not gain capitals.</p>
      <p>If your destination has a strict length limit, count the converted text. Use the <Link href="/tools/word-counter" className="text-cyan-400 underline">word counter</Link> for a second check. The destination’s own counter is the final reference because platforms can count Unicode characters differently.</p>
      <h2 className="pt-6 text-2xl font-bold text-white">Before you copy the result</h2>
      <ul className="list-disc space-y-2 pl-6"><li>Restore people’s names, place names, brand spellings and acronyms.</li><li>Check the text after abbreviations, punctuation and line breaks.</li><li>Keep your publication’s capitalization style consistent.</li><li>Review the destination’s word or character limit.</li></ul>
      <p><Link href="/tools/text-case-converter" className="inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950">Open the text case converter</Link></p>
    </article>
  </main>;
}
