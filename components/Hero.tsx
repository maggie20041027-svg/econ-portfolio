import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="scroll-mt-16 min-h-[calc(100vh-4rem)] flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-3 space-y-6">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 px-3 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Open to opportunities
            </div>

            {/* Name + role */}
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight text-slate-900 dark:text-slate-100">
                Maggie<span className="text-slate-400 dark:text-slate-500">(Xiyao)</span> Ma
              </h1>
              <p className="mt-3 text-lg font-medium text-blue-600 dark:text-blue-400">
                Econometrics &amp; Business Analytics
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500">
              <MapPin size={13} />
              <span>Northeastern University, Boston</span>
            </div>

            {/* Bio */}
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl">
              I&apos;m an economics and business student focused on applied
              econometrics, causal inference, and business analytics. I build
              data-driven models to evaluate policy and business decisions,
              drawing on tools like Double Machine Learning, regression
              analysis, and tree-based methods.
            </p>

            {/* Focus tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "Causal Inference",
                "Machine Learning",
                "Policy Evaluation",
                "Business Analytics",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                View Projects
                <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  10+
                </p>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-500 mt-0.5">
                  Projects
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  6+
                </p>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-500 mt-0.5">
                  Tools &amp; Libraries
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-500 dark:text-amber-400">
                  2027
                </p>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-500 mt-0.5">
                  Graduation
                </p>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <Image
                  src="/profile.png"
                  alt="Maggie Ma"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Decorative blobs */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-amber-400/20 dark:bg-amber-500/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-blue-600/10 dark:bg-blue-400/10 -z-10" />
            </div>
          </div>
        </div>

        {/* Prose essay */}
        <div className="mt-20 border-t border-slate-100 dark:border-slate-800/60 pt-16">
          <div className="max-w-[600px] mx-auto space-y-6">
            <p className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-6">
              01 / about
            </p>

            <p className="text-[1.125rem] leading-[1.75] text-slate-700 dark:text-slate-300">
              I came to economics because I wanted to understand why things happen
              the way they do&nbsp;— why some policies work and others backfire,
              why people save or don&apos;t, why markets behave irrationally at
              exactly the wrong moments. What I didn&apos;t expect was that
              answering those questions would pull me straight into data science.
              Statistics, machine learning, and causal inference turned out to be
              the tools that make &ldquo;why&rdquo; questions tractable.
            </p>

            <p className="text-[1.125rem] leading-[1.75] text-slate-700 dark:text-slate-300">
              Most of my recent work at Northeastern has been in that
              intersection&nbsp;— using methods like Double Machine Learning to
              separate correlation from causation, or tree-based models to
              understand which features actually drive an outcome. I&apos;m most
              interested in problems where the technical rigor has real stakes
              attached: policy evaluations, financial decisions, anything where
              &ldquo;close enough&rdquo; isn&apos;t good enough.
            </p>

            <p className="text-[1.125rem] leading-[1.75] text-slate-700 dark:text-slate-300">
              Economics also gave me something that pure data science training
              doesn&apos;t always: a way of thinking about incentives, constraints,
              and tradeoffs before touching any data. When I approach a business
              problem, I start with the economics&nbsp;— what are the agents
              optimizing for, where are the constraints binding, what does the
              equilibrium look like? That framing tends to surface the right
              questions faster than jumping straight to models, and it keeps the
              analysis grounded in mechanisms that actually make sense. Most
              business problems that look like prediction problems are really
              identification problems in disguise, and that&apos;s a distinction
              economics trains you to notice.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
