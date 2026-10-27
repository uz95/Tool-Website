import type { Metadata } from "next";
import Link from "next/link";
import TextCaseClient from "./TextCaseClient";
export const metadata: Metadata = {
  title: "Text Case Converter – Uppercase, Lowercase & Title Case",
  description: "Convert text to uppercase, lowercase, sentence case or simple title case. Free browser-based tool with instant results and copy support.",
  alternates: { canonical: "https://www.fastwebtoolshub.com/tools/text-case-converter" },
};
export default function TextCasePage() {
  return <main className="min-h-screen bg-slate-950 px-6 py-16 text-white"><div className="mx-auto max-w-4xl">
    <Link href="/tools" className="text-cyan-400">← All tools</Link>
    <h1 className="mt-8 text-4xl font-bold sm:text-5xl">Text Case Converter</h1>
    <p className="mt-5 text-lg text-slate-300">Fix text pasted in the wrong case, prepare headings, or turn a block of capitals into readable sentences. Choose a format and copy the result.</p>
    <TextCaseClient />
    <section className="mt-12 space-y-5 text-slate-300">
      <h2 className="text-2xl font-bold text-white">How to convert your text</h2>
      <ol className="list-decimal space-y-2 pl-6"><li>Paste text into the first box.</li><li>Choose sentence case, title case, uppercase or lowercase.</li><li>Review names, acronyms and punctuation before copying.</li></ol>
      <h2 className="pt-6 text-2xl font-bold text-white">What does each mode do?</h2>
      <p>Uppercase changes letters to capitals; lowercase does the reverse. Simple title case capitalizes the first letter of every word, including “and” and “of”. Sentence case capitalizes the first letter of the text, each new line, and sentences after a period, question mark or exclamation mark followed by whitespace.</p>
      <h2 className="pt-6 text-2xl font-bold text-white">Will this fix grammar or preserve brand names?</h2>
      <p>No. This is a mechanical formatter. Title and sentence case first lowercase the text, so “NASA” becomes “Nasa” or “nasa”. Restore acronyms and spellings such as “iPhone” yourself. Sentence detection is approximate: abbreviations such as “Dr.” can be treated as sentence endings.</p>
      <h2 className="pt-6 text-2xl font-bold text-white">Does it keep line breaks?</h2>
      <p>Yes. Spaces and line breaks are preserved. Conversion follows JavaScript’s default Unicode casing rather than a language-specific style guide. Scripts without letter case remain unchanged. Some characters expand during conversion, such as “ß” becoming “SS”.</p>
      <p>Read the <Link href="/blog/how-to-change-text-case" className="text-cyan-400 underline">text case guide with examples</Link>, or use the <Link href="/tools/word-counter" className="text-cyan-400 underline">word counter</Link> to check length.</p>
    </section>
  </div></main>;
}
