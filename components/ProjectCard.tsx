import { BookOpen, ArrowUpRight, FolderOpen, Star } from "lucide-react";
import type { Project, Category } from "@/lib/projects";

const categoryStyle: Record<Category, string> = {
  Assignment:
    "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  Project:
    "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  Lab: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700",
};

const tagColors: Record<string, string> = {
  Python:
    "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  SQL: "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
};

function tagClass(tag: string) {
  return (
    tagColors[tag] ??
    "bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col border border-slate-200 dark:border-slate-800 rounded-xl p-6 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all duration-200">
      <div className="flex-1 space-y-3">
        {/* Label row */}
        <div className="flex items-center justify-between">
          <span
            className={`font-mono text-[11px] px-2 py-0.5 rounded border ${categoryStyle[project.category]}`}
          >
            {project.label}
          </span>
          {project.starred && (
            <Star
              size={13}
              className="text-amber-400 fill-amber-400"
              aria-label="Featured"
            />
          )}
        </div>

        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`font-mono text-[11px] px-2 py-0.5 rounded border ${tagClass(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          {project.isNotebook ? <BookOpen size={13} /> : <FolderOpen size={13} />}
          <span>{project.isNotebook ? "View Notebook" : "View on GitHub"}</span>
        </a>
        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={13} className="text-blue-500" />
        </span>
      </div>
    </div>
  );
}
