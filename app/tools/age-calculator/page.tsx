"use client";

import { useState } from "react";

export default function AgeCalculatorPage() {
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

    setResult(`You are ${years} years, ${months} months, and ${days} days old.`);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-cyan-400">← Back to Home</a>

        <h1 className="mt-8 text-4xl font-bold">Age Calculator</h1>

        <p className="mt-4 text-slate-300">
          Use this free age calculator to calculate your exact age in years,
          months, and days.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Enter your date of birth
          </label>

          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <button
            onClick={calculateAge}
            className="mt-5 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Calculate Age
          </button>

          {result && (
            <div className="mt-6 rounded-xl bg-slate-950 p-4 text-lg font-semibold">
              {result}
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">How to Use the Age Calculator</h2>
          <p className="mt-4 text-slate-300">
            Select your date of birth and click the calculate button. The tool
            will instantly show your age in years, months, and days.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Why Use This Tool?</h2>
          <p className="mt-4 text-slate-300">
            This age calculator is useful for forms, applications, birthday
            calculations, school documents, and personal records.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">Is this age calculator free?</h3>
              <p className="mt-2 text-slate-300">
                Yes, this online age calculator is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Does it calculate exact age?</h3>
              <p className="mt-2 text-slate-300">
                Yes, it calculates age in years, months, and days.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}