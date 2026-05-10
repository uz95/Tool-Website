"use client";

import { useState } from "react";

type Course = {
  name: string;
  percentage: string;
  credits: string;
};

export default function GPACalculatorPage() {
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

  function updateCourse(
    index: number,
    field: keyof Course,
    value: string
  ) {
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
        setResult("Please enter valid percentages and credit hours.");
        return;
      }

      const gpa = percentageToGPA(percentage);

      totalPoints += gpa * credits;
      totalCredits += credits;
    }

    const finalGPA = totalPoints / totalCredits;

    setResult(`Your GPA is ${finalGPA.toFixed(2)}`);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="text-cyan-400">
          ← Back to Tools
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Percentage to GPA Calculator
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Convert marks and percentages into GPA using this free online GPA
          calculator. Add multiple courses and calculate your GPA instantly.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
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
                  placeholder="Percentage"
                  className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
                />

                <input
                  type="number"
                  value={course.credits}
                  onChange={(e) =>
                    updateCourse(index, "credits", e.target.value)
                  }
                  placeholder="Credits"
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
          </div>

          {result && (
            <div className="mt-6 rounded-xl bg-slate-950 p-4 text-lg font-semibold">
              {result}
            </div>
          )}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            How Percentage to GPA Works
          </h2>

          <p className="mt-4 text-slate-300">
            This GPA calculator converts course percentages into GPA points
            using a standard 4.0 GPA scale and calculates the weighted average
            based on credit hours.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">
            Percentage to GPA Conversion
          </h2>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800">
            <table className="w-full text-left">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-4 py-3">Percentage</th>
                  <th className="px-4 py-3">GPA</th>
                </tr>
              </thead>

              <tbody className="bg-slate-950 text-slate-300">
                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    90 - 100
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    4.0
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    80 - 89
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    3.7
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    70 - 79
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    3.0
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    60 - 69
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    2.0
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    50 - 59
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    1.0
                  </td>
                </tr>

                <tr>
                  <td className="border-t border-slate-800 px-4 py-3">
                    Below 50
                  </td>
                  <td className="border-t border-slate-800 px-4 py-3">
                    0.0
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-5 space-y-5">
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
                Can I calculate GPA from percentages?
              </h3>

              <p className="mt-2 text-slate-300">
                Yes, simply enter your course percentages and credit hours.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does this use a 4.0 GPA scale?
              </h3>

              <p className="mt-2 text-slate-300">
                Yes, this calculator uses a common 4.0 GPA conversion scale.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}