"use client";

import { useState } from "react";

type Course = {
  name: string;
  percentage: string;
  credits: string;
};

const relatedTools = [
  {
    title: "Percentage Calculator",
    description: "Calculate percentages online.",
    href: "/tools/percentage-calculator",
  },
  {
    title: "Age Calculator",
    description: "Calculate exact age from date of birth.",
    href: "/tools/age-calculator",
  },
  {
    title: "BMI Calculator",
    description: "Calculate body mass index online.",
    href: "/tools/bmi-calculator",
  },
];

export default function GPACalculatorClient() {
  const [courses, setCourses] = useState<Course[]>([
    { name: "Course 1", percentage: "85", credits: "3" },
    { name: "Course 2", percentage: "78", credits: "3" },
    { name: "Course 3", percentage: "92", credits: "3" },
  ]);

  const [result, setResult] = useState("");

  function percentageToGPA(percentage: number) {
    if (percentage >= 90) return 4.0;
    if (percentage >= 80) return 3.7;
    if (percentage >= 70) return 3.0;
    if (percentage >= 60) return 2.0;
    if (percentage >= 50) return 1.0;
    return 0.0;
  }

  function updateCourse(index: number, field: keyof Course, value: string) {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  }

  function addCourse() {
    setCourses([
      ...courses,
      {
        name: `Course ${courses.length + 1}`,
        percentage: "80",
        credits: "3",
      },
    ]);
  }

  function removeCourse(index: number) {
    if (courses.length === 1) {
      setResult("At least one course is required.");
      return;
    }

    setCourses(courses.filter((_, i) => i !== index));
  }

  function clearAll() {
    setCourses([
      {
        name: "Course 1",
        percentage: "",
        credits: "",
      },
    ]);
    setResult("");
  }

  function calculateGPA() {
    let totalPoints = 0;
    let totalCredits = 0;

    for (const course of courses) {
      const percentage = Number(course.percentage);
      const credits = Number(course.credits);

      if (
        isNaN(percentage) ||
        isNaN(credits) ||
        percentage < 0 ||
        percentage > 100 ||
        credits <= 0
      ) {
        setResult("Please enter valid marks/percentages and credit hours.");
        return;
      }

      const gpa = percentageToGPA(percentage);

      totalPoints += gpa * credits;
      totalCredits += credits;
    }

    const finalGPA = totalPoints / totalCredits;

    setResult(`Your GPA is ${finalGPA.toFixed(2)} on a 4.0 scale.`);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools/calculators" className="text-cyan-400">
          ← Back to Calculators
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Percentage to GPA Calculator with Credit Hours
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert marks, percentages, and credit hours into GPA instantly. This
          free Percentage to GPA Calculator helps students calculate semester
          GPA, weighted GPA, and estimate GPA on a 4.0 scale.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-3 hidden px-2 text-sm font-semibold text-cyan-400 md:grid md:grid-cols-4 md:gap-4">
            <div>Course Name</div>
            <div>Marks / Percentage (%)</div>
            <div>Credit Hours</div>
            <div>Action</div>
          </div>

          <div className="grid gap-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="grid gap-4 rounded-xl bg-slate-950 p-4 md:grid-cols-4"
              >
                <input
                  type="text"
                  value={course.name}
                  onChange={(e) =>
                    updateCourse(index, "name", e.target.value)
                  }
                  placeholder="Course Name"
                  className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
                />

                <input
                  type="number"
                  value={course.percentage}
                  onChange={(e) =>
                    updateCourse(index, "percentage", e.target.value)
                  }
                  placeholder="Marks (%)"
                  className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
                />

                <input
                  type="number"
                  value={course.credits}
                  onChange={(e) =>
                    updateCourse(index, "credits", e.target.value)
                  }
                  placeholder="Credit Hours"
                  className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
                />

                <button
                  onClick={() => removeCourse(index)}
                  className="rounded-xl border border-red-500 px-4 py-3 font-semibold text-red-400 hover:bg-red-950"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={addCourse}
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Add Course
            </button>

            <button
              onClick={calculateGPA}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Calculate GPA
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
            Free Percentage to GPA Calculator with Credit Hours
          </h2>

          <p className="mt-4 text-slate-300">
            This free percentage to GPA calculator helps students convert marks
            and percentages into GPA using a simple 4.0 scale. You can add
            multiple courses, enter credit hours, and calculate a weighted GPA
            online.
          </p>

          <p className="mt-4 text-slate-300">
            It is useful for students who want to estimate GPA from percentages,
            convert marks to GPA, calculate semester GPA, or understand how
            course credits affect the final GPA result.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            How to Convert Percentage to GPA Online
          </h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-300">
            <li>Enter each course name.</li>
            <li>Enter the marks or percentage for each course.</li>
            <li>Enter the credit hours for each course.</li>
            <li>Click Calculate GPA.</li>
            <li>View your weighted GPA on a 4.0 scale.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Percentage to GPA Conversion Scale
          </h2>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800">
            <table className="w-full text-left">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-4 py-3">Percentage</th>
                  <th className="px-4 py-3">GPA Points</th>
                </tr>
              </thead>

              <tbody className="bg-slate-950 text-slate-300">
                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    90 - 100
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">4.0</td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    80 - 89
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">3.7</td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    70 - 79
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">3.0</td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    60 - 69
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">2.0</td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    50 - 59
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">1.0</td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Below 50
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">0.0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-400">
            Note: GPA conversion rules can vary by school, college, university,
            and country. Use this calculator as a general estimate.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Why Use a GPA Calculator?</h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Convert percentage to GPA online</li>
            <li>• Calculate GPA from marks and credit hours</li>
            <li>• Estimate semester GPA quickly</li>
            <li>• Add multiple courses with different credits</li>
            <li>• Use a simple 4.0 GPA scale</li>
            <li>• Helpful for students, college work, and academic planning</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Related Calculators</h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                How do I convert percentage to GPA?
              </h3>
              <p className="mt-2 text-slate-300">
                Enter your course marks or percentages and credit hours, then
                calculate the weighted GPA using the 4.0 scale.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is this GPA calculator free?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this online GPA calculator is completely free to use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I calculate GPA with credit hours?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, enter credit hours for each course to calculate a weighted
                GPA.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does this calculator use a 4.0 GPA scale?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, this tool uses a simple 4.0 GPA conversion scale.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I calculate semester GPA?
              </h3>
              <p className="mt-2 text-slate-300">
                Yes, you can add all semester courses and credit hours to
                estimate your semester GPA.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}