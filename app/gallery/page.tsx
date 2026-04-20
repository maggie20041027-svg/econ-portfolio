import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Gallery } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Data Gallery · Maggie Ma",
  description:
    "Visual gallery of chart outputs from ECON 3916 — scatter plots, ROC curves, DAGs, time series, and more.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <Gallery />
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-800 mt-4">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-400 dark:text-slate-600">
          <p>© {new Date().getFullYear()} Maggie Ma</p>
          <p className="font-mono text-xs">Built with Next.js · Deployed on Vercel</p>
        </div>
      </footer>
    </>
  );
}
