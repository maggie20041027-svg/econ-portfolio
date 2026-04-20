import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="border-t border-slate-100 dark:border-slate-800/60" />
        <Projects />
        <div className="border-t border-slate-100 dark:border-slate-800/60" />
        <Skills />
        <div className="border-t border-slate-100 dark:border-slate-800/60" />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-400 dark:text-slate-600">
          <p>© {new Date().getFullYear()} Maggie Ma</p>
          <p className="font-mono text-xs">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </footer>
    </>
  );
}
