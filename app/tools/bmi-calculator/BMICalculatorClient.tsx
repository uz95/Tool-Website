"use client";

import { useState } from "react";

const relatedTools = [
  {
    title: "Age Calculator",
    description: "Calculate exact age from date of birth.",
    href: "/tools/age-calculator",
  },
  {
    title: "Percentage Calculator",
    description: "Calculate percentages online.",
    href: "/tools/percentage-calculator",
  },
  {
    title: "GPA Calculator",
    description: "Calculate GPA from marks and credits.",
    href: "/tools/gpa-calculator",
  },
  {
    title: "Calculators",
    description: "Browse all free online calculators.",
    href: "/tools/calculators",
  },
];

export default function BMICalculatorClient() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [category, setCategory] = useState("");

  function calculateBMI() {
    const h = Number(height) / 100;
    const w = Number(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setResult("Please enter valid height and weight.");
      setCategory("");
      return;
    }

    const bmi = w / (h * h);
    let bmiCategory = "";

    if (bmi < 18.5) bmiCategory = "Underweight";
    else if (bmi < 25) bmiCategory = "Healthy weight";
    else if (bmi < 30) bmiCategory = "Overweight";
    else bmiCategory = "Obesity";

    setResult(`Your BMI is ${bmi.toFixed(1)}`);
    setCategory(bmiCategory);
  }

  function clearAll() {
    setHeight("");
    setWeight("");
    setResult("");
    setCategory("");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/tools/calculators" className="text-cyan-400">
          ← Back to Calculators
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          BMI Calculator Online Free
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Use this free BMI calculator to calculate your body mass index from
          height and weight. Enter your height in centimeters and weight in
          kilograms to check your BMI category instantly.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Height in Centimeters
          </label>

          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Example: 170"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <label className="mt-5 block text-sm font-medium text-slate-300">
            Weight in Kilograms
          </label>

          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Example: 70"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={calculateBMI}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Calculate BMI
            </button>

            <button
              onClick={clearAll}
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Clear All
            </button>
          </div>

          {result && (
            <div className="mt-6 rounded-xl bg-slate-950 p-5">
              <p className="text-xl font-bold text-cyan-400">{result}</p>

              {category && (
                <p className="mt-2 text-slate-300">
                  Category: <span className="font-semibold">{category}</span>
                </p>
              )}
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Free BMI Calculator by Height and Weight
          </h2>

          <p className="mt-4 text-slate-300">
            This free online BMI calculator helps you calculate body mass index
            using your height and weight. It is useful for quickly checking
            whether your BMI falls into an underweight, healthy weight,
            overweight, or obesity category.
          </p>

          <p className="mt-4 text-slate-300">
            BMI stands for Body Mass Index. It is calculated by dividing weight
            in kilograms by height in meters squared. This calculator uses
            centimeters and kilograms, so you can enter simple metric values and
            get your BMI result instantly.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            How to Calculate BMI Online
          </h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Enter your height in centimeters.</li>
            <li>Enter your weight in kilograms.</li>
            <li>Click the Calculate BMI button.</li>
            <li>View your BMI score and weight category.</li>
            <li>Use Clear All to reset the calculator.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">BMI Categories for Adults</h2>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse border border-slate-800 text-left">
              <thead>
                <tr className="bg-slate-900">
                  <th className="border border-slate-800 p-4">BMI Range</th>
                  <th className="border border-slate-800 p-4">Category</th>
                </tr>
              </thead>

              <tbody className="text-slate-300">
                <tr>
                  <td className="border border-slate-800 p-4">Below 18.5</td>
                  <td className="border border-slate-800 p-4">Underweight</td>
                </tr>

                <tr>
                  <td className="border border-slate-800 p-4">18.5 to 24.9</td>
                  <td className="border border-slate-800 p-4">
                    Healthy weight
                  </td>
                </tr>

                <tr>
                  <td className="border border-slate-800 p-4">25 to 29.9</td>
                  <td className="border border-slate-800 p-4">Overweight</td>
                </tr>

                <tr>
                  <td className="border border-slate-800 p-4">30 or higher</td>
                  <td className="border border-slate-800 p-4">Obesity</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-400">
            Note: BMI is a general screening tool for adults. It does not
            measure body fat directly and should not replace medical advice.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Why Use a BMI Calculator?
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Calculate BMI online for free</li>
            <li>• Check BMI using height and weight</li>
            <li>• Find your BMI category instantly</li>
            <li>• Useful for fitness tracking and personal reference</li>
            <li>• Works with centimeters and kilograms</li>
            <li>• Fast, simple, and browser-based calculator</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            BMI Calculator for Adults
          </h2>

          <p className="mt-4 text-slate-300">
            This BMI calculator is designed for general adult BMI calculation.
            For children and teens, BMI is usually interpreted differently using
            age and sex percentiles. If you are checking BMI for a child, teen,
            athlete, pregnant person, or someone with a medical condition, it is
            best to speak with a healthcare professional.
          </p>

          <p className="mt-4 text-slate-300">
            BMI can be helpful as a quick reference, but it does not show muscle
            mass, body composition, waist measurement, or overall health status.
            Use it as a simple starting point, not as a complete health
            diagnosis.
          </p>
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
                How do I calculate BMI online?
              </h3>
              <p className="mt-2 text-slate-300">
                Enter your height in centimeters and weight in kilograms, then
                click Calculate BMI to see your result.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this BMI calculator free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this BMI calculator is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What is a healthy BMI range?
              </h3>
              <p className="mt-2 text-slate-300">
                For adults, a BMI between 18.5 and 24.9 is commonly considered
                a healthy weight range.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can BMI tell my exact health status?
              </h3>
              <p className="mt-2 text-slate-300">
                No. BMI is only a general screening tool and does not replace
                medical advice or a complete health assessment.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does BMI work for athletes?
              </h3>
              <p className="mt-2 text-slate-300">
                BMI may not be accurate for athletes or people with high muscle
                mass because it does not separate muscle from fat.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can children use this BMI calculator?
              </h3>
              <p className="mt-2 text-slate-300">
                This calculator is mainly for adults. Children and teens usually
                need BMI-for-age percentile calculations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}