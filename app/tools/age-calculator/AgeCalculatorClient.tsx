"use client";

import { useState } from "react";

const relatedTools = [
  {
    title: "BMI Calculator",
    description: "Calculate body mass index online.",
    href: "/tools/bmi-calculator",
  },
  {
    title: "Percentage Calculator",
    description: "Calculate percentages quickly.",
    href: "/tools/percentage-calculator",
  },
  {
    title: "GPA Calculator",
    description: "Calculate GPA from percentages.",
    href: "/tools/gpa-calculator",
  },
  {
    title: "YouTube Money Calculator",
    description: "Estimate YouTube earnings online.",
    href: "/tools/youtube-money-calculator",
  },
];

export default function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState("");

  function calculateAge() {
    if (!birthDate) {
      setResult("Please select your date of birth.");
      return;
    }

    const today = new Date();
    const dob = new Date(birthDate);

    if (dob > today) {
      setResult("Date of birth cannot be in the future.");
      return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult(
      `You are ${years} years, ${months} months, and ${days} days old.`
    );
  }

  function clearAll() {
    setBirthDate("");
    setResult("");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/tools/calculators" className="text-cyan-400">
          ← Back to Calculators
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Age Calculator Online Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Use this free online age calculator to calculate your exact age from
          your date of birth. Find your age in years, months, and days instantly.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Enter Your Date of Birth
          </label>

          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={calculateAge}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Calculate Age
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
            Free Date of Birth Age Calculator
          </h2>

          <p className="mt-4 text-slate-300">
            This age calculator helps you calculate your exact age using your
            date of birth. It shows your age in years, months, and days, making
            it useful for personal records, school forms, job applications,
            official documents, birthday calculations, and online forms.
          </p>

          <p className="mt-4 text-slate-300">
            Instead of manually counting years and months, you can enter your
            birth date and get an instant result. This makes it easier to know
            your exact age today without doing manual calculations.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            How to Calculate Age Online
          </h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Select your date of birth.</li>
            <li>Click the Calculate Age button.</li>
            <li>View your exact age in years, months, and days.</li>
            <li>Use Clear All if you want to calculate again.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Use This Exact Age Calculator?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Calculate age from date of birth online</li>
            <li>• Get age in years, months, and days</li>
            <li>• Useful for forms, applications, and personal records</li>
            <li>• Fast, simple, and free to use</li>
            <li>• Works directly in your browser</li>
            <li>• No registration required</li>
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
                How do I calculate my exact age?
              </h3>
              <p className="mt-2 text-slate-300">
                Enter your date of birth and click Calculate Age. The tool will
                show your exact age in years, months, and days.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this age calculator free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this online age calculator is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does it calculate age in years, months, and days?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, it calculates your age in years, months, and days based on
                your selected date of birth.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I use this calculator for official forms?
              </h3>
              <p className="mt-2 text-slate-300">
                You can use it to quickly estimate your age, but always verify
                official requirements when submitting documents.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I calculate someone else’s age?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can enter any valid date of birth to calculate age.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}