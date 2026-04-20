import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import { Navbar } from "@/components/Navbar";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "About · Maggie Ma",
  description:
    "Maggie Ma on economics, causal inference, and the intuition behind data-driven business decisions.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={`min-h-[calc(100vh-4rem)] ${caveat.className}`}>
        <div className="relative overflow-hidden">

          {/* Decorative dot grids */}
          <div className="absolute top-10 left-10 grid grid-cols-4 gap-2 opacity-20 pointer-events-none">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="block w-1.5 h-1.5 rounded-full bg-amber-400" />
            ))}
          </div>
          <div className="absolute bottom-10 right-10 grid grid-cols-4 gap-2 opacity-20 pointer-events-none">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="block w-1.5 h-1.5 rounded-full bg-blue-400" />
            ))}
          </div>

          <div className="max-w-[680px] mx-auto px-8 py-24 space-y-16">

            {/* Quote — staggered layout */}
            <blockquote className="space-y-10">
              <div className="text-[2.6rem] sm:text-[3.6rem] leading-[1.15] text-slate-900 dark:text-slate-100 select-none">
                {/* Line 1: anchored left */}
                <p className="text-left pr-[18%]">
                  &ldquo;All models are wrong,
                </p>
                {/* Line 2: anchored right */}
                <p className="text-right pl-[18%]">
                  but some are useful.&rdquo;
                </p>
              </div>

              <footer className="text-center space-y-1">
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  George Box
                </p>
                <p className="text-base text-slate-400 dark:text-slate-500">
                  Empirical Model Building and Response Surfaces, 1987
                </p>
              </footer>
            </blockquote>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              <span className="font-mono text-[11px] text-slate-400 dark:text-slate-600 tracking-widest uppercase">
                about
              </span>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
            </div>

            {/* Prose */}
            <div className="space-y-8">
              <p className="text-[1.4rem] leading-[1.85] text-slate-700 dark:text-slate-300">
                I came to economics because I wanted to understand why things
                happen the way they do: why some policies work and others
                backfire, why people save or don&apos;t, why markets behave
                irrationally at exactly the wrong moments. What I didn&apos;t
                expect was that answering those questions would pull me straight
                into data science. Statistics, machine learning, and causal
                inference turned out to be the tools that make &ldquo;why&rdquo;
                questions tractable.
              </p>

              <p className="text-[1.4rem] leading-[1.85] text-slate-700 dark:text-slate-300">
                Most of my recent work at Northeastern has been in that
                intersection: using methods like Double Machine Learning to
                separate correlation from causation, or tree-based models to
                understand which features actually drive an outcome. I&apos;m
                most interested in problems where the technical rigor has real
                stakes attached: policy evaluations, financial decisions, anything
                where &ldquo;close enough&rdquo; isn&apos;t good enough.
              </p>

              <p className="text-[1.4rem] leading-[1.85] text-slate-700 dark:text-slate-300">
                Economics also gave me something that pure data science training
                doesn&apos;t always: a way of thinking about incentives,
                constraints, and tradeoffs before touching any data. When I
                approach a business problem, I start with the economics. What are
                the agents optimizing for? Where are the constraints binding? What
                does the equilibrium look like? That framing tends to surface the
                right questions faster than jumping straight to models, and it
                keeps the analysis grounded in mechanisms that actually make sense.
                Most business problems that look like prediction problems are
                really identification problems in disguise, and that&apos;s a
                distinction economics trains you to notice.
              </p>
            </div>

          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-400 dark:text-slate-600">
          <p>© {new Date().getFullYear()} Maggie Ma</p>
          <p className="font-mono text-xs">Built with Next.js · Deployed on Vercel</p>
        </div>
      </footer>
    </>
  );
}
