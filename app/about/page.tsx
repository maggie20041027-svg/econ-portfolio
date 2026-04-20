import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About · Maggie Ma",
  description:
    "Maggie Ma on economics, causal inference, and the intuition behind data-driven business decisions.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Quote ─────────────────────────────────────────────────── */}
        <section className="relative flex items-center justify-center min-h-[56vh] py-24 overflow-hidden bg-white dark:bg-slate-950">
          {/* Decorative dot grids */}
          <div className="absolute top-8 left-8 grid grid-cols-4 gap-[7px] opacity-25 pointer-events-none">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="block w-[5px] h-[5px] rounded-full bg-amber-400" />
            ))}
          </div>
          <div className="absolute bottom-8 right-8 grid grid-cols-4 gap-[7px] opacity-25 pointer-events-none">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="block w-[5px] h-[5px] rounded-full bg-blue-400" />
            ))}
          </div>

          <blockquote className="max-w-[600px] mx-auto px-8">
            <p className="font-serif text-[2rem] sm:text-[2.5rem] leading-[1.3] text-slate-900 dark:text-slate-100 mb-10">
              &ldquo;All models are wrong, but some are useful.&rdquo;
            </p>
            <footer>
              <p className="text-base font-bold text-slate-900 dark:text-slate-100">
                George Box
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-0.5">
                Source: Empirical Model Building and Response Surfaces, 1987
              </p>
            </footer>
          </blockquote>
        </section>

        {/* ── Prose ─────────────────────────────────────────────────── */}
        <section className="border-t border-slate-100 dark:border-slate-800 py-20">
          <div className="max-w-[600px] mx-auto px-8 space-y-7">
            <p className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
              01 / about
            </p>

            <p className="text-[1.125rem] leading-[1.75] text-slate-700 dark:text-slate-300">
              I came to economics because I wanted to understand why things happen
              the way they do: why some policies work and others backfire, why
              people save or don&apos;t, why markets behave irrationally at exactly
              the wrong moments. What I didn&apos;t expect was that answering those
              questions would pull me straight into data science. Statistics,
              machine learning, and causal inference turned out to be the tools
              that make &ldquo;why&rdquo; questions tractable.
            </p>

            <p className="text-[1.125rem] leading-[1.75] text-slate-700 dark:text-slate-300">
              Most of my recent work at Northeastern has been in that
              intersection: using methods like Double Machine Learning to separate
              correlation from causation, or tree-based models to understand which
              features actually drive an outcome. I&apos;m most interested in
              problems where the technical rigor has real stakes attached: policy
              evaluations, financial decisions, anything where &ldquo;close
              enough&rdquo; isn&apos;t good enough.
            </p>

            <p className="text-[1.125rem] leading-[1.75] text-slate-700 dark:text-slate-300">
              Economics also gave me something that pure data science training
              doesn&apos;t always: a way of thinking about incentives, constraints,
              and tradeoffs before touching any data. When I approach a business
              problem, I start with the economics. What are the agents optimizing
              for? Where are the constraints binding? What does the equilibrium
              look like? That framing tends to surface the right questions faster
              than jumping straight to models, and it keeps the analysis grounded
              in mechanisms that actually make sense. Most business problems that
              look like prediction problems are really identification problems in
              disguise, and that&apos;s a distinction economics trains you to notice.
            </p>
          </div>
        </section>

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
