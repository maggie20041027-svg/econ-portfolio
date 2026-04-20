import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { starred, byCategory, projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

const folders = [
  {
    href: "/labs",
    label: "Labs",
    count: byCategory("Lab").length,
    description:
      "Guided notebooks covering ML foundations, causal inference, NLP, and applied econometrics — from Big Mac PPP to Double Machine Learning.",
    accent: "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600",
    labelStyle: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700",
  },
  {
    href: "/assignments",
    label: "Assignments",
    count: byCategory("Assignment").length,
    description:
      "Applied problem sets on statistical methods, ML pipelines, and policy analysis — bootstrap inference, regularization, and sovereign risk modeling.",
    accent: "border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700",
    labelStyle: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  },
  {
    href: "/projects",
    label: "Projects",
    count: byCategory("Project").length,
    description:
      "Independent research applying causal identification strategies to real datasets — from STAR study class size effects to OLS identification.",
    accent: "border-amber-200 dark:border-amber-800 hover:border-amber-300 dark:hover:border-amber-700",
    labelStyle: "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-2">
            02 / work
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Featured Work
              </h2>
              <p className="mt-2 text-slate-500 dark:text-slate-500 text-sm">
                Highlights from ECON 3916 — Statistical Machine Learning.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-mono self-start">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              starred work
            </div>
          </div>
        </div>

        {/* Starred cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {starred.map((project) => (
            <ProjectCard key={project.label} project={project} />
          ))}
        </div>

        {/* Browse by category */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Browse all work
            </p>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
            <span className="font-mono text-xs text-slate-400 dark:text-slate-600">
              {projects.length} items total
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {folders.map(({ href, label, count, description, accent, labelStyle }) => (
              <Link
                key={href}
                href={href}
                className={`group flex flex-col gap-3 p-5 rounded-xl border bg-white dark:bg-slate-900 transition-all duration-200 hover:shadow-sm ${accent}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[11px] px-2 py-0.5 rounded border ${labelStyle}`}>
                    {label}
                  </span>
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-600">
                    {count}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed flex-1">
                  {description}
                </p>
                <div className="flex items-center gap-1 text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Browse all
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
