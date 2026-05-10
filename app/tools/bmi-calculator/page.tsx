"use client";

import { useState } from "react";

export default function BMICalculatorPage() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  function calculateBMI() {
    const h = Number(height) / 100;
    const w = Number(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setResult("Please enter valid height and weight.");
      return;
    }

    const bmi = w / (h * h);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    setResult(`Your BMI is ${bmi.toFixed(1)} - ${category}`);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">BMI Calculator</h1>

        <p className="mt-4 text-slate-300">
          Use this free BMI calculator to check your body mass index based on
          your height and weight.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block text-sm font-medium text-slate-300">
            Height in centimeters
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Example: 170"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <label className="mt-5 block text-sm font-medium text-slate-300">
            Weight in kilograms
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Example: 70"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <button
            onClick={calculateBMI}
            className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Calculate BMI
          </button>

          {result && (
            <div className="mt-6 rounded-xl bg-slate-950 p-4 text-lg font-semibold">
              {result}
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">What is BMI?</h2>
          <p className="mt-4 text-slate-300">
            BMI stands for Body Mass Index. It is a simple calculation that uses
            your height and weight to estimate whether your weight is in a
            healthy range.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">BMI Categories</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>Under 18.5: Underweight</li>
            <li>18.5 to 24.9: Normal weight</li>
            <li>25 to 29.9: Overweight</li>
            <li>30 or above: Obese</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">Is this BMI calculator free?</h3>
              <p className="mt-2 text-slate-300">
                Yes, this BMI calculator is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Can BMI tell exact health status?</h3>
              <p className="mt-2 text-slate-300">
                BMI is a general estimate and should not replace medical advice.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}