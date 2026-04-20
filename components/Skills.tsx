const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "Python", highlight: true },
      { name: "SQL", highlight: true },
      { name: "R", highlight: false },
      { name: "LaTeX", highlight: false },
    ],
  },
  {
    label: "Libraries & Frameworks",
    skills: [
      { name: "pandas", highlight: true },
      { name: "scikit-learn", highlight: true },
      { name: "Plotly", highlight: true },
      { name: "NumPy", highlight: false },
      { name: "statsmodels", highlight: false },
      { name: "econml", highlight: false },
      { name: "XGBoost", highlight: false },
      { name: "matplotlib", highlight: false },
      { name: "SHAP", highlight: false },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", highlight: true },
      { name: "Jupyter", highlight: false },
      { name: "VS Code", highlight: false },
      { name: "GitHub", highlight: false },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 py-24 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-2">
            03 / skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Technical Skills
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-500 text-sm max-w-md">
            Core tools and technologies I use for data analysis, modeling, and
            visualization.
          </p>
        </div>

        {/* Skill groups */}
        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(({ name, highlight }) => (
                  <span
                    key={name}
                    className={`font-mono text-sm px-3 py-1.5 rounded-md border transition-colors ${
                      highlight
                        ? "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-600">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-200 dark:bg-blue-800 border border-blue-300 dark:border-blue-700" />
            Primary skills
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600" />
            Additional tools
          </span>
        </div>
      </div>
    </section>
  );
}
