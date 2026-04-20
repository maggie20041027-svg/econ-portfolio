import { Mail, Globe, Code2 } from "lucide-react";

const EMAIL = "ma.xiyao@northeastern.edu";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    accent: true,
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/in/xiaom7",
    href: "https://www.linkedin.com/in/xiaom7",
    accent: false,
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "github.com/maggie20041027-svg",
    href: "https://github.com/maggie20041027-svg",
    accent: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          {/* Header */}
          <p className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-2">
            04 / contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Get in Touch
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
            I&apos;m always open to discussing research collaborations,
            internship opportunities, or interesting econometrics problems.
            Feel free to reach out.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          {links.map(({ icon: Icon, label, value, href, accent }) => (
            <a
              key={label}
              href={href}
              className={`group flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200 ${
                accent
                  ? "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-950/60"
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm"
              }`}
            >
              <div
                className={`flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg ${
                  accent
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                <Icon size={16} />
              </div>
              <div className="min-w-0">
                <p
                  className={`text-xs font-mono font-medium mb-0.5 ${
                    accent
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-500 dark:text-slate-500"
                  }`}
                >
                  {label}
                </p>
                <p
                  className={`text-sm truncate ${
                    accent
                      ? "text-blue-700 dark:text-blue-300 font-medium"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
