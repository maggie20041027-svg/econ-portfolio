"use client";

import { useState, useMemo } from "react";
import { ExternalLink, Star } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
type ChartType =
  | "bar" | "dualLine" | "histogram" | "loveplot" | "dag"
  | "uCurve" | "lassoPath" | "recessionLine" | "roc" | "hbar"
  | "pca" | "sentiment" | "modelCompare" | "coefPlot";

interface GalleryItem {
  label: string;
  title: string;
  vizTitle: string;
  description: string;
  chartType: ChartType;
  accent: string;
  topics: string[];
  tech: string[];
  link: string;
  starred?: boolean;
}

// ── Data ───────────────────────────────────────────────────────────────────
const REPO = "https://github.com/maggie20041027-svg/ECON3916-Statistical-Machine-Learning";

const ITEMS: GalleryItem[] = [
  {
    label: "Lab 1",
    title: "Big Mac Index & PPP",
    vizTitle: "Currency Over/Undervaluation vs. USD",
    description:
      "Bar chart of ~19 currencies' deviation from USD PPP, exposing systematic under- and over-valuation across emerging vs. developed markets.",
    chartType: "bar",
    accent: "blue",
    topics: ["Economic Indicators", "Visualization"],
    tech: ["pandas", "matplotlib", "seaborn"],
    link: `${REPO}/blob/main/lab%201/Lab_1_%22Hello%2C_Pandas%22_%26_The_Digital_Portfolio.ipynb`,
  },
  {
    label: "Lab 2",
    title: "Real Wages: Deflating History",
    vizTitle: "Nominal vs. Real Wage Growth (1964–Present)",
    description:
      "Dual time-series comparing nominal FRED wages to CPI-deflated real wages, showing how inflation masks 60 years of stagnant purchasing power.",
    chartType: "dualLine",
    accent: "amber",
    topics: ["Economic Indicators", "Time Series"],
    tech: ["fredapi", "pandas", "matplotlib", "seaborn"],
    link: `${REPO}/blob/main/Lab%202/Lab_2_Deflating_History_with_FRED.ipynb`,
  },
  {
    label: "Lab 5",
    title: "Monte Carlo Revenue Model",
    vizTitle: "10,000-Scenario Revenue Distribution",
    description:
      "Histogram of 10,000 Monte Carlo SaaS revenue scenarios with stochastic churn, marking the 5th-percentile Value at Risk threshold.",
    chartType: "histogram",
    accent: "purple",
    topics: ["Simulation", "Statistics"],
    tech: ["NumPy", "matplotlib"],
    link: `${REPO}/blob/main/Lab%205/Lab_5_Probability_%E2%80%94_The_Engine_of_Prediction.ipynb`,
  },
  {
    label: "Lab 9",
    title: "Propensity Score Matching",
    vizTitle: "Covariate Balance: SMD Before vs. After",
    description:
      "Love plot showing standardized mean differences dropping below 0.1 after nearest-neighbor PSM, validating covariate balance and correcting –$635 naive treatment effect.",
    chartType: "loveplot",
    accent: "teal",
    topics: ["Causal Inference", "Statistics"],
    tech: ["scikit-learn", "seaborn", "matplotlib", "pandas"],
    link: `${REPO}/blob/main/Lab%209/%5BLab_9%5D_Causal_Inference_and_Propensity_Score_Matching.ipynb`,
    starred: true,
  },
  {
    label: "Lab 10",
    title: "Demand-Shock Confounding DAG",
    vizTitle: "Causal Graph (NetworkX)",
    description:
      "Directed acyclic graph mapping the demand-shock → inflation → Fed Funds confounding path on five FRED macro series, built with NetworkX.",
    chartType: "dag",
    accent: "slate",
    topics: ["Causal Inference", "Macro"],
    tech: ["networkx", "Plotly", "statsmodels", "pandas"],
    link: `${REPO}/blob/main/Lab%2010/%5BLab_10_%5D_Causality_%26_Spurious_Regression.ipynb`,
  },
  {
    label: "Lab 15",
    title: "Bias-Variance Tradeoff",
    vizTitle: "Train vs. Test RMSE Across Polynomial Degrees",
    description:
      "Train RMSE falls monotonically while test RMSE forms a U-shape across polynomial degrees 1–15, with the optimum at degree ~3.",
    chartType: "uCurve",
    accent: "orange",
    topics: ["Machine Learning", "Model Selection"],
    tech: ["scikit-learn", "NumPy", "Plotly", "matplotlib"],
    link: `${REPO}/blob/main/Lab%2015/%5BLab_15%5D_Lab%5D_From_Regression_to_Machine_Learning_%E2%80%94_The_Bias_Variance_Tradeoff.ipynb`,
  },
  {
    label: "Lab 16",
    title: "Lasso Regularization Path",
    vizTitle: "Coefficient Entry as λ Shrinks",
    description:
      "Full Lasso path for 50+ World Bank WDI predictors, tracing which macroeconomic indicator enters first as the penalty relaxes toward zero.",
    chartType: "lassoPath",
    accent: "indigo",
    topics: ["Regularization", "Machine Learning", "Economic Indicators"],
    tech: ["scikit-learn", "wbgapi", "matplotlib", "pandas"],
    link: `${REPO}/blob/main/lab%2016/lab_16_regularization.ipynb`,
  },
  {
    label: "Lab 17",
    title: "NY Fed Yield Curve Model",
    vizTitle: "Recession Probability Time Series",
    description:
      "Logistic regression recession probabilities from T10Y3M spread lagged 12 months, overlaid with NBER recession shading from 1968 to present.",
    chartType: "recessionLine",
    accent: "red",
    topics: ["Time Series", "Macro", "Machine Learning"],
    tech: ["fredapi", "statsmodels", "scikit-learn", "Plotly"],
    link: `${REPO}/blob/main/lab%2017/lab_17_logistic_regression.ipynb`,
  },
  {
    label: "Lab 18",
    title: "Credit Card Fraud Detection",
    vizTitle: "ROC Curve — AUC = 0.9560",
    description:
      "ROC curve on 284,807 transactions (0.172% fraud rate); threshold sweep found F1-max at τ = 0.15, achieving 88.78% recall at τ = 0.01.",
    chartType: "roc",
    accent: "green",
    topics: ["Machine Learning", "Classification"],
    tech: ["scikit-learn", "matplotlib", "seaborn", "pandas"],
    link: `${REPO}/blob/main/lab%2018/lab_18_model_evaluation%20(1).ipynb`,
  },
  {
    label: "Lab 19",
    title: "Random Forest Feature Importance",
    vizTitle: "MDI vs. Permutation Importance",
    description:
      "Side-by-side horizontal bars showing geographic features rise when switching from MDI to permutation importance, exposing MDI's cardinality bias.",
    chartType: "hbar",
    accent: "emerald",
    topics: ["Machine Learning", "Feature Engineering"],
    tech: ["scikit-learn", "matplotlib", "pandas"],
    link: `${REPO}/blob/main/lab%2019/lab-ch19-guided.ipynb`,
    starred: true,
  },
  {
    label: "Lab 22",
    title: "K-Means Global Development",
    vizTitle: "PCA Cluster Map — K=4, 236 Countries",
    description:
      "PCA projection of 236 countries × 10 WDI indicators; K-Means recovered income tiers ($4K–$68K GDP/cap) without labels. Silhouette 0.27.",
    chartType: "pca",
    accent: "violet",
    topics: ["Clustering", "Machine Learning", "Economic Indicators"],
    tech: ["scikit-learn", "matplotlib", "wbgapi", "pandas"],
    link: `${REPO}/blob/main/lab%2022/lab_ch22_guided.ipynb`,
  },
  {
    label: "Lab 23",
    title: "FOMC Sentiment Analysis",
    vizTitle: "Hawkish / Dovish Tone in 240 FOMC Minutes",
    description:
      "TF-IDF + Loughran-McDonald sentiment over 240 FOMC minutes (2000–2026); Dec 2008 recovered as most negative without date labels.",
    chartType: "sentiment",
    accent: "blue",
    topics: ["NLP", "Time Series", "Macro"],
    tech: ["scikit-learn", "scipy", "matplotlib", "pandas"],
    link: `${REPO}/blob/main/lab%2023/lab_ch23_guided.ipynb`,
    starred: true,
  },
  {
    label: "Assignment 5",
    title: "Sovereign Debt Early Warning",
    vizTitle: "OLS vs. Ridge vs. Lasso — Test R²",
    description:
      "Grouped model comparison on 246-country WDI data. Lasso test R² = 0.452 beats OLS (0.368). Logistic classifier ROC-AUC = 0.824.",
    chartType: "modelCompare",
    accent: "amber",
    topics: ["Regularization", "Policy", "Machine Learning"],
    tech: ["scikit-learn", "pandas", "matplotlib", "seaborn"],
    link: `${REPO}/tree/main/Assignment%205`,
    starred: true,
  },
  {
    label: "Project 1",
    title: "STAR Study: Class Size Effect",
    vizTitle: "OLS Coefficient Plot with 95% CI",
    description:
      "Causal estimate of small class size on reading scores (1,178 students), using STAR randomization to argue ignorability under controlled OLS.",
    chartType: "coefPlot",
    accent: "amber",
    topics: ["Causal Inference", "Regression", "Policy"],
    tech: ["statsmodels", "pandas", "seaborn", "matplotlib"],
    link: `${REPO}/tree/main/Project%201`,
    starred: true,
  },
];

// ── Accent palette ─────────────────────────────────────────────────────────
const ACCENT: Record<string, { p: string; s: string; bg: string }> = {
  blue:    { p: "#3b82f6", s: "#93c5fd", bg: "#dbeafe40" },
  amber:   { p: "#f59e0b", s: "#fcd34d", bg: "#fef3c740" },
  purple:  { p: "#a855f7", s: "#d8b4fe", bg: "#f3e8ff40" },
  teal:    { p: "#14b8a6", s: "#5eead4", bg: "#ccfbf140" },
  slate:   { p: "#64748b", s: "#94a3b8", bg: "#f1f5f940" },
  orange:  { p: "#f97316", s: "#fdba74", bg: "#ffedd540" },
  indigo:  { p: "#6366f1", s: "#a5b4fc", bg: "#e0e7ff40" },
  red:     { p: "#ef4444", s: "#fca5a5", bg: "#fee2e240" },
  green:   { p: "#22c55e", s: "#86efac", bg: "#dcfce740" },
  emerald: { p: "#10b981", s: "#6ee7b7", bg: "#d1fae540" },
  violet:  { p: "#7c3aed", s: "#c4b5fd", bg: "#ede9fe40" },
};

// ── SVG Thumbnails ─────────────────────────────────────────────────────────
function ChartThumbnail({ type, accent }: { type: ChartType; accent: string }) {
  const c = ACCENT[accent] ?? ACCENT.blue;
  const grid = { stroke: "#475569", strokeWidth: 0.5, strokeDasharray: "3,3" } as const;
  const ax = "#6b7280";

  switch (type) {
    case "bar":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {[35, 65, 95].map(y => <line key={y} x1="28" y1={y} x2="265" y2={y} {...grid}/>)}
          <line x1="28" y1="130" x2="265" y2="130" stroke={ax} strokeWidth="1.5"/>
          <line x1="28" y1="15" x2="28" y2="130" stroke={ax} strokeWidth="1.5"/>
          <rect x="40"  y="60"  width="22" height="70" fill={c.p} rx="2" opacity="0.9"/>
          <rect x="75"  y="42"  width="22" height="88" fill={c.p} rx="2" opacity="0.9"/>
          <rect x="110" y="100" width="22" height="30" fill="#f59e0b" rx="2" opacity="0.9"/>
          <rect x="145" y="32"  width="22" height="98" fill={c.p} rx="2" opacity="0.9"/>
          <rect x="180" y="88"  width="22" height="42" fill="#f59e0b" rx="2" opacity="0.9"/>
          <rect x="215" y="52"  width="22" height="78" fill={c.p} rx="2" opacity="0.9"/>
          <rect x="250" y="105" width="22" height="25" fill="#f59e0b" rx="2" opacity="0.9"/>
          <line x1="28" y1="95" x2="265" y2="95" stroke={ax} strokeWidth="1" strokeDasharray="4,4"/>
        </svg>
      );

    case "dualLine":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {[40, 70, 100, 130].map(y => <line key={y} x1="20" y1={y} x2="265" y2={y} {...grid}/>)}
          <line x1="20" y1="145" x2="265" y2="145" stroke={ax} strokeWidth="1.5"/>
          <line x1="20" y1="15"  x2="20"  y2="145" stroke={ax} strokeWidth="1.5"/>
          <path d="M20,125 C80,110 130,88 180,68 C220,52 250,43 265,38
                   L265,112 C250,114 220,118 180,120 C130,122 80,124 20,125Z"
                fill={c.bg} />
          <path d="M20,125 C80,110 130,88 180,68 C220,52 250,43 265,38"
                fill="none" stroke="#f59e0b" strokeWidth="2.5"/>
          <path d="M20,125 C80,122 130,120 180,117 C220,114 250,112 265,111"
                fill="none" stroke={c.p} strokeWidth="2.5"/>
          <circle cx="265" cy="38"  r="3" fill="#f59e0b"/>
          <circle cx="265" cy="111" r="3" fill={c.p}/>
        </svg>
      );

    case "histogram":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <line x1="18" y1="140" x2="262" y2="140" stroke={ax} strokeWidth="1.5"/>
          <line x1="18" y1="10"  x2="18"  y2="140" stroke={ax} strokeWidth="1.5"/>
          {[
            [20,8],[42,18],[64,42],[86,75],[108,110],
            [130,95],[152,62],[174,32],[196,14],[218,6]
          ].map(([x, h]) => (
            <rect key={x} x={x} y={140 - h} width="21" height={h}
                  fill={c.p} rx="1" opacity="0.85"/>
          ))}
          <line x1="54" y1="10" x2="54" y2="140" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="5,3"/>
          <text x="57" y="25" fill="#ef4444" fontSize="9" fontFamily="monospace">VaR 5%</text>
        </svg>
      );

    case "loveplot":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <line x1="140" y1="15" x2="140" y2="148" stroke={ax} strokeWidth="1.5" strokeDasharray="4,4"/>
          <line x1="115" y1="15" x2="115" y2="148" stroke="#94a3b8" strokeWidth="0.5"/>
          <line x1="165" y1="15" x2="165" y2="148" stroke="#94a3b8" strokeWidth="0.5"/>
          <line x1="18"  y1="148" x2="262" y2="148" stroke={ax} strokeWidth="1.5"/>
          {[[58,30],[205,52],[72,75],[215,95],[45,118],[222,135]].map(([x,y]) => (
            <circle key={`b${x}`} cx={x} cy={y} r="5.5" fill="#ef4444" opacity="0.75"/>
          ))}
          {[[148,30],[133,52],[143,75],[137,95],[142,118],[136,135]].map(([x,y]) => (
            <circle key={`a${x}${y}`} cx={x} cy={y} r="5.5" fill={c.p} opacity="0.85"/>
          ))}
          <text x="30"  y="12" fill="#ef4444" fontSize="8" fontFamily="monospace">Before</text>
          <text x="170" y="12" fill={c.p}    fontSize="8" fontFamily="monospace">After</text>
        </svg>
      );

    case "dag":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <defs>
            <marker id="arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0,0 L0,7 L7,3.5Z" fill={c.p}/>
            </marker>
            <marker id="arrR" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0,0 L0,7 L7,3.5Z" fill="#ef4444"/>
            </marker>
          </defs>
          <ellipse cx="60"  cy="80" rx="45" ry="22" fill={c.bg} stroke={c.p} strokeWidth="1.5"/>
          <text x="60"  y="77" textAnchor="middle" fill={c.p} fontSize="9" fontFamily="monospace">Demand</text>
          <text x="60"  y="88" textAnchor="middle" fill={c.p} fontSize="9" fontFamily="monospace">Shock</text>
          <ellipse cx="175" cy="35" rx="45" ry="22" fill={c.bg} stroke={c.p} strokeWidth="1.5"/>
          <text x="175" y="38" textAnchor="middle" fill={c.p} fontSize="9" fontFamily="monospace">Inflation</text>
          <ellipse cx="230" cy="120" rx="45" ry="22" fill={c.bg} stroke={c.p} strokeWidth="1.5"/>
          <text x="230" y="117" textAnchor="middle" fill={c.p} fontSize="9" fontFamily="monospace">Fed</text>
          <text x="230" y="128" textAnchor="middle" fill={c.p} fontSize="9" fontFamily="monospace">Rate</text>
          <path d="M103,65 L130,48" stroke={c.p} strokeWidth="1.5" fill="none" markerEnd="url(#arr)"/>
          <path d="M195,55 L215,98" stroke={c.p} strokeWidth="1.5" fill="none" markerEnd="url(#arr)"/>
          <path d="M103,88 L183,112" stroke="#ef4444" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#arrR)"/>
        </svg>
      );

    case "uCurve":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {[40, 80, 120].map(y => <line key={y} x1="25" y1={y} x2="260" y2={y} {...grid}/>)}
          <line x1="25" y1="145" x2="260" y2="145" stroke={ax} strokeWidth="1.5"/>
          <line x1="25" y1="15"  x2="25"  y2="145" stroke={ax} strokeWidth="1.5"/>
          <path d="M25,128 C80,108 130,72 180,52 C220,38 248,33 260,31"
                fill="none" stroke={c.p} strokeWidth="2.5"/>
          <path d="M25,45 C55,88 95,125 135,132 C165,135 205,122 260,102"
                fill="none" stroke="#f97316" strokeWidth="2.5"/>
          <circle cx="135" cy="132" r="4.5" fill="#f97316"/>
          <line x1="135" y1="20" x2="135" y2="145" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3"/>
          <text x="29"  y="29" fill={c.p}     fontSize="8" fontFamily="monospace">Train</text>
          <text x="29"  y="42" fill="#f97316" fontSize="8" fontFamily="monospace">Test</text>
          <text x="138" y="28" fill="#94a3b8" fontSize="8" fontFamily="monospace">opt</text>
        </svg>
      );

    case "lassoPath":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {[40, 80, 120].map(y => <line key={y} x1="25" y1={y} x2="260" y2={y} {...grid}/>)}
          <line x1="25" y1="145" x2="260" y2="145" stroke={ax} strokeWidth="1.5"/>
          <line x1="25" y1="15"  x2="25"  y2="145" stroke={ax} strokeWidth="1.5"/>
          <path d="M260,28  C195,28  140,28  25,80" fill="none" stroke={c.p}     strokeWidth="2"/>
          <path d="M260,52  C195,52  140,56  25,80" fill="none" stroke={c.s}     strokeWidth="2"/>
          <path d="M260,70  C195,72  140,74  25,80" fill="none" stroke="#a855f7" strokeWidth="2"/>
          <path d="M260,90  C195,88  140,85  25,80" fill="none" stroke="#22c55e" strokeWidth="2"/>
          <path d="M260,112 C195,106 140,96  25,80" fill="none" stroke="#f59e0b" strokeWidth="2"/>
          <path d="M260,132 C195,122 140,106 25,80" fill="none" stroke="#ef4444" strokeWidth="2"/>
          <circle cx="25" cy="80" r="3.5" fill={ax}/>
          <text x="228" y="15" fill="#94a3b8" fontSize="8" fontFamily="monospace">λ→0</text>
          <text x="26"  y="15" fill="#94a3b8" fontSize="8" fontFamily="monospace">λ→∞</text>
        </svg>
      );

    case "recessionLine":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <rect x="48"  y="18" width="18" height="122" fill="#374151" opacity="0.35"/>
          <rect x="108" y="18" width="16" height="122" fill="#374151" opacity="0.35"/>
          <rect x="168" y="18" width="20" height="122" fill="#374151" opacity="0.35"/>
          <rect x="228" y="18" width="12" height="122" fill="#374151" opacity="0.35"/>
          <line x1="18" y1="140" x2="265" y2="140" stroke={ax} strokeWidth="1.5"/>
          <line x1="18" y1="15"  x2="18"  y2="140" stroke={ax} strokeWidth="1.5"/>
          <path d="M18,132 C38,128 44,58 58,48 C72,38 90,128 102,130
                   C110,88 120,44 132,48 C144,52 158,128 170,122
                   C176,84 190,40 202,44 C212,48 228,122 238,112
                   C246,102 258,128 265,132"
                fill="none" stroke={c.p} strokeWidth="2.5"/>
          <text x="20" y="30" fill="#94a3b8" fontSize="8" fontFamily="monospace">NBER recessions</text>
        </svg>
      );

    case "roc":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <line x1="25" y1="145" x2="265" y2="145" stroke={ax} strokeWidth="1.5"/>
          <line x1="25" y1="10"  x2="25"  y2="145" stroke={ax} strokeWidth="1.5"/>
          <line x1="25" y1="145" x2="265" y2="10" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4"/>
          <path d="M25,145 C30,78 58,28 100,18 C148,10 198,10 265,10"
                fill="none" stroke={c.p} strokeWidth="3"/>
          <path d="M25,145 C30,78 58,28 100,18 C148,10 198,10 265,10 L265,145Z"
                fill={c.bg}/>
          <text x="118" y="105" fill={c.p} fontSize="10" fontFamily="monospace" fontWeight="bold">AUC=0.956</text>
          <text x="120" y="155" fill="#94a3b8" fontSize="8" fontFamily="monospace">FPR</text>
          <text x="5"   y="80"  fill="#94a3b8" fontSize="8" fontFamily="monospace"
                transform="rotate(-90,5,80)">TPR</text>
        </svg>
      );

    case "hbar":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <line x1="80" y1="10"  x2="80"  y2="152" stroke={ax} strokeWidth="1.5"/>
          <line x1="80" y1="152" x2="265" y2="152" stroke={ax} strokeWidth="1.5"/>
          {[
            { y: 18,  mdi: 155, perm: 105 },
            { y: 48,  mdi: 128, perm: 148 },
            { y: 78,  mdi: 105, perm: 88  },
            { y: 108, mdi: 78,  perm: 65  },
            { y: 132, mdi: 55,  perm: 45  },
          ].map(({ y, mdi, perm }, i) => (
            <g key={i}>
              <rect x="82" y={y}      width={mdi  - 80} height="11" fill={c.p} rx="2" opacity="0.85"/>
              <rect x="82" y={y + 13} width={perm - 80} height="11" fill={c.s} rx="2" opacity="0.85"/>
            </g>
          ))}
          <rect x="165" y="10" width="8" height="8" fill={c.p} rx="1"/>
          <text x="177" y="18" fill="#94a3b8" fontSize="8" fontFamily="monospace">MDI</text>
          <rect x="165" y="22" width="8" height="8" fill={c.s} rx="1"/>
          <text x="177" y="30" fill="#94a3b8" fontSize="8" fontFamily="monospace">Perm</text>
        </svg>
      );

    case "pca":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <line x1="140" y1="8"   x2="140" y2="155" stroke={ax} strokeWidth="0.8" strokeDasharray="4,4"/>
          <line x1="12"  y1="80"  x2="268" y2="80"  stroke={ax} strokeWidth="0.8" strokeDasharray="4,4"/>
          {[[45,122],[58,132],[40,112],[62,126],[52,116],[72,120]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="5.5" fill="#ef4444" opacity="0.72"/>
          ))}
          {[[202,33],[218,44],[192,28],[224,38],[208,50],[228,26]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="5.5" fill={c.p} opacity="0.72"/>
          ))}
          {[[82,92],[94,74],[78,86],[97,92],[88,70]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="5.5" fill="#f59e0b" opacity="0.72"/>
          ))}
          {[[172,64],[184,53],[167,70],[188,62],[177,48]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="5.5" fill="#22c55e" opacity="0.72"/>
          ))}
          <text x="125" y="158" fill="#94a3b8" fontSize="8" fontFamily="monospace">PC1</text>
          <text x="14"  y="14"  fill="#94a3b8" fontSize="8" fontFamily="monospace">PC2</text>
        </svg>
      );

    case "sentiment":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <line x1="18" y1="80"  x2="265" y2="80"  stroke={ax} strokeWidth="1" strokeDasharray="4,4"/>
          <line x1="18" y1="148" x2="265" y2="148" stroke={ax} strokeWidth="1.5"/>
          <line x1="18" y1="12"  x2="18"  y2="148" stroke={ax} strokeWidth="1.5"/>
          <path d="M18,72 C40,65 55,55 72,74 L72,80 L18,80Z" fill={c.p} opacity="0.4"/>
          <path d="M72,74 C85,90 95,108 112,132 L112,80 L72,80Z" fill="#ef4444" opacity="0.4"/>
          <path d="M112,80 C120,68 135,58 150,52 C165,46 177,70 193,80Z" fill={c.p} opacity="0.4"/>
          <path d="M193,80 C202,73 218,48 232,42 C246,48 258,62 265,70 L265,80 L193,80Z" fill={c.p} opacity="0.4"/>
          <path d="M18,72 C40,65 55,55 72,74 C85,90 95,108 112,132
                   C122,114 136,58 150,52 C165,46 177,70 193,84
                   C202,73 218,48 232,42 C246,48 258,62 265,70"
                fill="none" stroke="#1e293b" strokeWidth="1.8"/>
          <line x1="112" y1="132" x2="112" y2="148" stroke="#94a3b8" strokeWidth="1"/>
          <text x="96"  y="158" fill="#94a3b8" fontSize="8" fontFamily="monospace">Lehman</text>
        </svg>
      );

    case "modelCompare":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {[40, 70, 100, 130].map(y => <line key={y} x1="28" y1={y} x2="265" y2={y} {...grid}/>)}
          <line x1="28" y1="140" x2="265" y2="140" stroke={ax} strokeWidth="1.5"/>
          <line x1="28" y1="18"  x2="28"  y2="140" stroke={ax} strokeWidth="1.5"/>
          <rect x="42"  y="68" width="22" height="72" fill="#3b82f6" rx="2" opacity="0.85"/>
          <rect x="66"  y="82" width="22" height="58" fill="#93c5fd" rx="2" opacity="0.85"/>
          <rect x="112" y="52" width="22" height="88" fill="#22c55e" rx="2" opacity="0.85"/>
          <rect x="136" y="58" width="22" height="82" fill="#86efac" rx="2" opacity="0.85"/>
          <rect x="182" y="46" width="22" height="94" fill={c.p} rx="2" opacity="0.85"/>
          <rect x="206" y="52" width="22" height="88" fill={c.s} rx="2" opacity="0.85"/>
          <text x="48"  y="155" fill="#94a3b8" fontSize="8" fontFamily="monospace">OLS</text>
          <text x="116" y="155" fill="#94a3b8" fontSize="8" fontFamily="monospace">Ridge</text>
          <text x="186" y="155" fill="#94a3b8" fontSize="8" fontFamily="monospace">Lasso</text>
          <text x="32"  y="30"  fill="#94a3b8" fontSize="8" fontFamily="monospace">R²</text>
        </svg>
      );

    case "coefPlot":
      return (
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <line x1="140" y1="12"  x2="140" y2="148" stroke={ax} strokeWidth="1.5" strokeDasharray="4,4"/>
          <line x1="22"  y1="148" x2="260" y2="148" stroke={ax} strokeWidth="1.5"/>
          {[
            { y: 32,  mean: 180, lo: 158, hi: 204 },
            { y: 68,  mean: 168, lo: 150, hi: 188 },
            { y: 104, mean: 148, lo: 126, hi: 172 },
            { y: 130, mean: 132, lo: 108, hi: 158 },
          ].map(({ y, mean, lo, hi }, i) => (
            <g key={i}>
              <line x1={lo} y1={y} x2={hi} y2={y} stroke={c.p} strokeWidth="2"/>
              <line x1={lo} y1={y - 5} x2={lo} y2={y + 5} stroke={c.p} strokeWidth="2"/>
              <line x1={hi} y1={y - 5} x2={hi} y2={y + 5} stroke={c.p} strokeWidth="2"/>
              <circle cx={mean} cy={y} r="5" fill={c.p}/>
            </g>
          ))}
          <text x="22" y="35"  fill="#94a3b8" fontSize="8" fontFamily="monospace">Small class</text>
          <text x="22" y="71"  fill="#94a3b8" fontSize="8" fontFamily="monospace">Aide</text>
          <text x="22" y="107" fill="#94a3b8" fontSize="8" fontFamily="monospace">Free lunch</text>
          <text x="22" y="133" fill="#94a3b8" fontSize="8" fontFamily="monospace">White</text>
        </svg>
      );

    default:
      return <svg viewBox="0 0 280 160" className="w-full"/>;
  }
}

// ── Gallery Card ───────────────────────────────────────────────────────────
function GalleryCard({ item }: { item: GalleryItem }) {
  const c = ACCENT[item.accent] ?? ACCENT.blue;
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all duration-200">
      {/* Thumbnail */}
      <div className="bg-slate-50 dark:bg-slate-800/60 p-4 aspect-[16/9]">
        <ChartThumbnail type={item.chartType} accent={item.accent}/>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-slate-950/92 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 pointer-events-none group-hover:pointer-events-auto">
        <p className="text-white text-xs font-semibold leading-snug mb-1.5">{item.vizTitle}</p>
        <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-3">{item.description}</p>
        <div className="flex flex-wrap gap-1 mt-2.5">
          {item.tech.map(t => (
            <span key={t} className="text-[10px] font-mono bg-white/10 text-slate-300 px-1.5 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center gap-1.5 text-xs font-medium hover:underline"
          style={{ color: c.p }}
        >
          Open Notebook <ExternalLink size={11}/>
        </a>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-slate-400 dark:text-slate-600">{item.label}</span>
          {item.starred && <Star size={11} className="text-amber-400 fill-amber-400"/>}
        </div>
        <p className="text-xs font-medium text-slate-800 dark:text-slate-200 mt-0.5 leading-snug truncate">
          {item.title}
        </p>
      </div>
    </div>
  );
}

// ── Filter pill ────────────────────────────────────────────────────────────
function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`font-mono text-[11px] px-2.5 py-1 rounded-full border transition-colors ${
        active
          ? "bg-blue-600 border-blue-600 text-white"
          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
      }`}
    >
      {label}
    </button>
  );
}

// ── Main export ────────────────────────────────────────────────────────────
export function Gallery() {
  const [topicFilter, setTopicFilter] = useState("All");
  const [techFilter, setTechFilter] = useState("All");

  const allTopics = useMemo(
    () => ["All", ...Array.from(new Set(ITEMS.flatMap(i => i.topics))).sort()],
    []
  );
  const allTech = useMemo(
    () => ["All", ...Array.from(new Set(ITEMS.flatMap(i => i.tech))).sort()],
    []
  );

  const filtered = ITEMS.filter(item => {
    const topicOk = topicFilter === "All" || item.topics.includes(topicFilter);
    const techOk  = techFilter  === "All" || item.tech.includes(techFilter);
    return topicOk && techOk;
  });

  function clearFilters() {
    setTopicFilter("All");
    setTechFilter("All");
  }

  const hasFilter = topicFilter !== "All" || techFilter !== "All";

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-2">
            03 / gallery
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Data Projects Gallery
              </h1>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
                Visualization outputs from ECON 3916 labs, assignments, and projects.
                Hover any card to see details.
              </p>
            </div>
            <span className="font-mono text-xs text-slate-400 dark:text-slate-600 self-start">
              {filtered.length} / {ITEMS.length} shown
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-3 mb-8">
          <div>
            <p className="text-[11px] font-mono text-slate-400 dark:text-slate-600 mb-2 uppercase tracking-widest">
              Topic
            </p>
            <div className="flex flex-wrap gap-1.5">
              {allTopics.map(t => (
                <FilterPill
                  key={t}
                  label={t}
                  active={topicFilter === t}
                  onClick={() => setTopicFilter(t)}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-mono text-slate-400 dark:text-slate-600 mb-2 uppercase tracking-widest">
              Technology
            </p>
            <div className="flex flex-wrap gap-1.5">
              {allTech.map(t => (
                <FilterPill
                  key={t}
                  label={t}
                  active={techFilter === t}
                  onClick={() => setTechFilter(t)}
                />
              ))}
            </div>
          </div>
          {hasFilter && (
            <button
              onClick={clearFilters}
              className="text-xs text-slate-400 dark:text-slate-600 hover:text-slate-700 dark:hover:text-slate-300 underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(item => (
              <GalleryCard key={item.label} item={item}/>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-slate-400 dark:text-slate-600 text-sm">
              No visualizations match the selected filters.
            </p>
            <button onClick={clearFilters} className="mt-3 text-xs text-blue-500 underline">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
