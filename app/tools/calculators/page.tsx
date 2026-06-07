export const metadata = {
  title: "Online Calculators - FastWebToolsHub",
  alternates: {
    canonical: "https://www.fastwebtoolshub.com/tools/calculators",
  },
};

const tools = [
  { title: "Age Calculator", href: "/tools/age-calculator" },
  { title: "BMI Calculator", href: "/tools/bmi-calculator" },
  { title: "GPA Calculator", href: "/tools/gpa-calculator" },
  { title: "Percentage Calculator", href: "/tools/percentage-calculator" },
  { title: "YouTube Money Calculator", href: "/tools/youtube-money-calculator" },
];

export default function CalculatorToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Free Online Calculators</h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Calculate age, BMI, GPA, percentages, and YouTube earnings using
          our free online calculators.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-cyan-400"
            >
              <h2 className="text-xl font-bold">{tool.title}</h2>

              <p className="mt-3 text-sm text-slate-400">
                Open {tool.title}.
              </p>
            </a>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Popular Online Calculators</h2>

          <p className="mt-4 text-slate-300">
            Our calculators help students, creators, professionals,
            and everyday users perform quick calculations online.
          </p>
        </section>
      </div>
    </main>
  );
}