import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { byCategory } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Maggie Ma",
  description: "Research projects from ECON 3916 — Statistical Machine Learning.",
};

const projectItems = byCategory("Project");

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-mono font-medium text-amber-500 dark:text-amber-400 mb-2">
            category / projects
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Projects
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-500 text-sm max-w-xl">
            {projectItems.length} independent research project applying causal
            identification strategies to real datasets.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projectItems.map((p) => (
            <ProjectCard key={p.label} project={p} />
          ))}
        </div>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-400 dark:text-slate-600">
          <Link href="/" className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors">
            ← Maggie Ma
          </Link>
          <p className="font-mono text-xs">Built with Next.js</p>
        </div>
      </footer>
    </>
  );
}
