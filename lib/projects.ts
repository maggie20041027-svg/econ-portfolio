const REPO =
  "https://github.com/maggie20041027-svg/ECON3916-Statistical-Machine-Learning";

export type Category = "Assignment" | "Project" | "Lab";

export interface Project {
  label: string;
  category: Category;
  title: string;
  description: string;
  tags: string[];
  link: string;
  isNotebook?: boolean;
  starred?: boolean;
}

export const projects: Project[] = [
  // ── Assignments ────────────────────────────────────────────────────────────
  {
    label: "Assignment 1",
    category: "Assignment",
    title: "Student Price Index vs. Official CPI",
    description:
      "Built a custom 'Student Price Index' using FRED API data by weighting CPI, tuition, rent, food, and streaming costs, then benchmarked it against the official headline CPI from 2016 to 2024. Extended the analysis with Boston-area comparison and normalized index visualizations, critiquing data crimes like comparing raw series with mismatched base years.",
    tags: ["Python", "pandas", "fredapi", "matplotlib", "seaborn"],
    link: `${REPO}/blob/main/Assignment%201%20Revised/%20Econ_3916_Assignment_1.ipynb`,
    isNotebook: true,
  },
  {
    label: "Assignment 2",
    category: "Assignment",
    title: "Statistical Audit: Robust Measures, Bayesian Paradoxes & Survivorship Bias",
    description:
      "Conducted a four-part audit: compared MAD vs. standard deviation on skewed latency data, applied the Bayesian false-positive paradox to a fraud detector, detected Sample Ratio Mismatch via chi-square test, and simulated 10,000 memecoin launches from a Pareto distribution to expose survivorship bias. Found that robust statistics substantially outperform mean-based measures on heavy-tailed data.",
    tags: ["Python", "NumPy", "pandas", "matplotlib", "scipy"],
    link: `${REPO}/blob/main/Assignment%202/Assignment_2.ipynb`,
    isNotebook: true,
  },
  {
    label: "Assignment 3",
    category: "Assignment",
    title: "Bootstrap, Permutation Test & Propensity Score Matching",
    description:
      "Used bootstrap resampling (10,000 iterations) and a permutation test (p = 0.0004) to analyze logistics data without distributional assumptions. Applied PSM via logistic regression to isolate a loyalty program's true ATT of $9.91, revealing that $7.66 of the naive $17.57 spending gap was pure selection bias.",
    tags: ["Python", "pandas", "NumPy", "scikit-learn", "matplotlib", "seaborn"],
    link: `${REPO}/tree/main/Assignment%203`,
    starred: true,
  },
  {
    label: "Assignment 4",
    category: "Assignment",
    title: "Predictive Architecture: DAG, VIF & Missingness Diagnostics",
    description:
      "Built a DAG to expose unmeasured confounding in insurance data, then ran a VIF audit removing redundant predictors (BMI at VIF > 16) from clinical vitals. Classified structural missingness as MAR vs. MCAR, showing that naive complete-case analysis would induce selection bias when missingness is outcome-related.",
    tags: ["Python", "pandas", "statsmodels", "NumPy", "matplotlib"],
    link: `${REPO}/tree/main/Assignment%204`,
  },
  {
    label: "Assignment 5",
    category: "Assignment",
    title: "Sovereign Debt Early Warning System",
    description:
      "Compared OLS, Ridge, and Lasso on World Bank WDI data (246 countries, 27 predictors); Lasso achieved test R² = 0.452 while OLS overfit (train 0.502 → test 0.368), and a logistic classifier reached ROC-AUC = 0.824. Bootstrap stability analysis revealed realistic staffing constraints leave roughly 4 in 5 crises undetected.",
    tags: ["Python", "pandas", "scikit-learn", "NumPy", "matplotlib", "seaborn"],
    link: `${REPO}/tree/main/Assignment%205`,
    starred: true,
  },

  // ── Projects ───────────────────────────────────────────────────────────────
  {
    label: "Project 1",
    category: "Project",
    title: "Causal Effect of Class Size on Reading Scores (STAR Study)",
    description:
      "Audited the Tennessee STAR dataset (1,780 students, 56 variables) using Tukey fences and missingness analysis, diagnosing 33.65% missing reading scores as MAR and retaining a clean sample of 1,178 students. Applied a controlled OLS identification strategy, using STAR's randomization to argue ignorability and estimate the causal effect of small class size on reading achievement.",
    tags: ["Python", "pandas", "statsmodels", "NumPy", "matplotlib", "seaborn"],
    link: `${REPO}/tree/main/Project%201`,
    starred: true,
  },

  // ── Labs ───────────────────────────────────────────────────────────────────
  {
    label: "Lab 1",
    category: "Lab",
    title: "Hello Pandas: Big Mac Index & Purchasing Power Parity",
    description:
      "Used the Big Mac Index dataset to calculate implied PPP exchange rates and measure currency over/undervaluation relative to the USD across ~19 countries. Extended to the full historical dataset to visualize multi-year international purchasing power trends.",
    tags: ["Python", "pandas", "NumPy", "matplotlib", "seaborn"],
    link: `${REPO}/blob/main/lab%201/Lab_1_%22Hello%2C_Pandas%22_%26_The_Digital_Portfolio.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 2",
    category: "Lab",
    title: "Deflating History: Real Wages with FRED",
    description:
      "Deflated nominal FRED wage data (AHETPI) by CPI into real purchasing power from 1964 to present, showing how nominal growth obscures stagnant real gains. Compared CPI vs. Employment Cost Index deflation — both rebased to 2015=100 — to demonstrate how deflation choice shapes the economic narrative.",
    tags: ["Python", "pandas", "fredapi", "matplotlib", "seaborn"],
    link: `${REPO}/blob/main/Lab%202/Lab_2_Deflating_History_with_FRED.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 3",
    category: "Lab",
    title: "Visualizing Development: China vs. World Bank Peers",
    description:
      "Pulled 10+ World Bank macroeconomic indicators for China vs. upper-middle-income peers (2000–2023) via `wbgapi` to build a multi-panel economic dashboard. Constructed deliberate bad charts (truncated axes, pie charts) to sharpen critical evaluation of visualization design choices.",
    tags: ["Python", "wbgapi", "pandas", "matplotlib", "seaborn", "Plotly"],
    link: `${REPO}/blob/main/Lab%203/Lab_3_Visualizing_Development_with_WBGAPI.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 4",
    category: "Lab",
    title: "Descriptive Statistics: Robustness in a Skewed World",
    description:
      "Explored the California Housing dataset's $500k ceiling effect and compared IQR-based outlier flagging against Isolation Forest anomaly detection on income, house age, and room-count features. Found Isolation Forest identifies richer multidimensional anomalies that IQR alone misses, illustrating why algorithmic methods are needed for skewed economic data.",
    tags: ["Python", "pandas", "scikit-learn", "NumPy", "seaborn", "matplotlib"],
    link: `${REPO}/blob/main/Lab%204/Lab_4_Descriptive_Statistics_%E2%80%94_Robustness_in_a_Skewed_World.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 5",
    category: "Lab",
    title: "Probability as the Engine of Prediction",
    description:
      "Simulated the Law of Large Numbers, the Monty Hall problem (switching wins ~67%), and a 10,000-scenario Monte Carlo SaaS revenue model with stochastic churn to compute Value at Risk. Demonstrated that intuitive probability reasoning systematically fails — simulation reveals non-obvious outcomes that shortcuts miss.",
    tags: ["Python", "NumPy", "matplotlib"],
    link: `${REPO}/blob/main/Lab%205/Lab_5_Probability_%E2%80%94_The_Engine_of_Prediction.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 6",
    category: "Lab",
    title: "The Architecture of Bias: Sampling & SRM Detection",
    description:
      "Used the Titanic dataset to show that random train/test splits can produce ~0.04 survival rate disparities, eliminated by stratifying on passenger class. Applied chi-square SRM detection to a simulated A/B test with a 45/55 imbalance to validate experimental group comparability.",
    tags: ["Python", "pandas", "NumPy", "scikit-learn", "scipy", "seaborn"],
    link: `${REPO}/blob/main/Lab%206/Lab_6_The_Architecture_of_Bias.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 7",
    category: "Lab",
    title: "Estimation: From Formulas to Bootstrapping",
    description:
      "Illustrated the Central Limit Theorem using a log-normal crypto population at n=1, 2, and 30, and built confidence intervals for a VC LTV/CAC investment decision. Showed that variance — not just mean — determines whether a startup clears the funding threshold.",
    tags: ["Python", "NumPy", "matplotlib", "seaborn"],
    link: `${REPO}/blob/main/Lab%207/Lab_7_Estimation_%E2%80%94_From_Formulas_to_Bootstrapping.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 8",
    category: "Lab",
    title: "Hypothesis Testing: The Architecture of Evidence",
    description:
      "Applied Welch's t-test to the LaLonde (1986) job training dataset to compare 1978 earnings between treated and control groups, then validated the result with a 10,000-resample permutation test. Compared parametric and non-parametric p-values to show when classical inference aligns with resampling-based methods.",
    tags: ["Python", "pandas", "NumPy", "scipy", "seaborn", "matplotlib"],
    link: `${REPO}/blob/main/Lab%208/Lab_8_Hypothesis_Testing_%E2%80%94_The_Architecture_of_Evidence.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 9",
    category: "Lab",
    title: "Causal Inference & Propensity Score Matching",
    description:
      "Showed that naive observational comparison on the LaLonde dataset yields a misleading negative treatment effect (–$635), then corrected for selection bias via propensity score matching using logistic regression and nearest-neighbor pairing. Validated covariate balance post-matching using Standardized Mean Differences (SMD).",
    tags: ["Python", "pandas", "scikit-learn", "scipy", "seaborn", "matplotlib"],
    link: `${REPO}/blob/main/Lab%209/%5BLab_9%5D_Causal_Inference_and_Propensity_Score_Matching.ipynb`,
    isNotebook: true,
    starred: true,
  },
  {
    label: "Lab 10",
    category: "Lab",
    title: "Causality & Spurious Regression in Macro Time Series",
    description:
      "Pulled five FRED macroeconomic series and exposed spurious correlations in raw levels due to shared trends, eliminated by transforming to year-over-year growth rates. Audited multicollinearity via VIF and drew a DAG using NetworkX to visualize demand-shock confounding between the Fed Funds rate and inflation.",
    tags: ["Python", "pandas", "statsmodels", "matplotlib", "networkx", "Plotly"],
    link: `${REPO}/blob/main/Lab%2010/%5BLab_10_%5D_Causality_%26_Spurious_Regression.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 11",
    category: "Lab",
    title: "Dirty Data Forensics & Structural Engineering",
    description:
      "Diagnosed MAR missingness in a synthetic HR dataset using `missingno`, applied grouped conditional median imputation by department, and triggered then fixed the dummy variable trap with k-1 encoding. Extended the pipeline with target encoding for high-cardinality ZIP codes using `category_encoders`.",
    tags: ["Python", "pandas", "NumPy", "statsmodels", "missingno"],
    link: `${REPO}/blob/main/Lab%2011/%5BLab_11%5D_Dirty_Data_Forensics_and_Structural_Engineering.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 12",
    category: "Lab",
    title: "OLS Hedonic Pricing & Residual Forensics",
    description:
      "Fit a hedonic OLS model on a Zillow micro-area dataset predicting home values from square footage, property age, and transit distance, evaluated via RMSE. Conducted residual forensics with Plotly, flagging properties with residuals exceeding 2 standard deviations as potential structural mispricings.",
    tags: ["Python", "pandas", "NumPy", "statsmodels", "Plotly"],
    link: `${REPO}/blob/main/Lab%2012/%5BLab_12_%5D_OLS%2C_Hedonic_Pricing%2C_and_RMSE_Evaluation.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 13",
    category: "Lab",
    title: "Hedonic Pricing & the Frisch-Waugh-Lovell Theorem",
    description:
      "Demonstrated the FWL theorem on California housing data, showing the property age coefficient shifts substantially when distance to tech hub is added as a control. Recovered the partial coefficient exactly via residual-on-residual regression and visualized the OLS regression plane as an interactive 3D Plotly surface.",
    tags: ["Python", "pandas", "statsmodels", "Plotly", "NumPy"],
    link: `${REPO}/blob/main/Lab%2013/%5BLab_13%5D_Hedonic_Pricing_and_the_FWL_Theorem.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 15",
    category: "Lab",
    title: "From Regression to ML: The Bias-Variance Tradeoff",
    description:
      "Fit polynomial models of degree 1–15 on a noisy sine wave, showing training RMSE decreases monotonically while test RMSE forms a U-shape with the optimum at degree ~3. Implemented manual k-fold CV from scratch and compared it to scikit-learn's `cross_val_score`, teaching how CV operationalizes model selection.",
    tags: ["Python", "NumPy", "pandas", "scikit-learn", "matplotlib", "Plotly"],
    link: `${REPO}/blob/main/Lab%2015/%5BLab_15%5D_Lab%5D_From_Regression_to_Machine_Learning_%E2%80%94_The_Bias_Variance_Tradeoff.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 16",
    category: "Lab",
    title: "Regularization: Ridge & Lasso for GDP Growth Prediction",
    description:
      "Downloaded 50+ World Development Indicators for ~150 countries and demonstrated OLS overfitting (p/n ≈ 0.5) before applying Ridge and Lasso with cross-validated regularization. Traced the full Lasso coefficient path to identify which WDI enters the model first — the strongest unconditional predictor of 5-year GDP growth.",
    tags: ["Python", "pandas", "wbgapi", "scikit-learn", "NumPy", "matplotlib"],
    link: `${REPO}/blob/main/lab%2016/lab_16_regularization.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 17",
    category: "Lab",
    title: "Logistic Regression: NY Fed Yield Curve Recession Model",
    description:
      "Replicated the NY Fed yield curve recession model using the T10Y3M spread lagged 12 months, exposing the LPM's out-of-bounds predictions before fitting logistic regression and interpreting odds ratios. Extended the model with unemployment rate as a second predictor and evaluated both with `TimeSeriesSplit` cross-validation.",
    tags: ["Python", "pandas", "fredapi", "statsmodels", "scikit-learn", "Plotly"],
    link: `${REPO}/blob/main/lab%2017/lab_17_logistic_regression.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 18",
    category: "Lab",
    title: "Model Evaluation: Metrics That Matter for Imbalanced Data",
    description:
      "Trained logistic regression on the Kaggle Credit Card Fraud dataset (284,807 transactions, 0.172% positive rate), exposing the accuracy paradox — a naïve all-negative baseline scores 99.83% accuracy but 0% recall. Achieved ROC-AUC = 0.9560; a threshold sweep found F1-max at τ = 0.15, with 88.78% recall retained at τ = 0.01.",
    tags: ["Python", "pandas", "scikit-learn", "NumPy", "matplotlib", "seaborn"],
    link: `${REPO}/blob/main/lab%2018/lab_18_model_evaluation%20(1).ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 19",
    category: "Lab",
    title: "Tree-Based Models: Random Forests & Feature Importance",
    description:
      "Benchmarked Decision Tree, Ridge, and Random Forest on California Housing data; RF (Test R² = 0.805) outperformed Ridge (0.576), with GridSearchCV tuning improving RMSE from 0.506 to 0.491. Contrasted MDI vs. permutation importance — permutation elevated geographic features, exposing MDI's bias toward high-cardinality predictors.",
    tags: ["Python", "pandas", "scikit-learn", "NumPy", "matplotlib"],
    link: `${REPO}/blob/main/lab%2019/lab-ch19-guided.ipynb`,
    isNotebook: true,
    starred: true,
  },
  {
    label: "Lab 22",
    category: "Lab",
    title: "K-Means Clustering: Global Development Tiers",
    description:
      "Applied K-Means (K=4) to 236 countries across 10 World Bank indicators, recovering income-tier clusters ($4,203–$67,903 GDP/cap) that matched official classifications without labels. PCA visualization confirmed a dominant binary rich/poor split at K=2 (silhouette 0.27), reflecting a bimodal global income distribution.",
    tags: ["Python", "pandas", "scikit-learn", "NumPy", "matplotlib"],
    link: `${REPO}/blob/main/lab%2022/lab_ch22_guided.ipynb`,
    isNotebook: true,
  },
  {
    label: "Lab 23",
    category: "Lab",
    title: "FedSpeak NLP: Monetary Policy Sentiment in FOMC Minutes",
    description:
      "Vectorized 240 FOMC minutes (2000–2026) with TF-IDF and Loughran-McDonald sentiment, identifying December 2008 (Lehman) as the most negative meeting — recovered without date labels. K-Means independently detected the post-Lehman structural break, and a Mann-Whitney test confirmed post-2020 hawkish sentiment declined 65% (p < 0.0001).",
    tags: ["Python", "pandas", "scikit-learn", "NumPy", "matplotlib", "scipy"],
    link: `${REPO}/blob/main/lab%2023/lab_ch23_guided.ipynb`,
    isNotebook: true,
    starred: true,
  },
  {
    label: "Lab 24",
    category: "Lab",
    title: "Double Machine Learning: 401(k) Causal Effect on Savings",
    description:
      "Showed that standard LASSO shrinks treatment coefficients due to regularization bias, then applied DoubleMLPLR with Random Forest nuisance learners and 5-fold cross-fitting to estimate a $8,281 causal increase in net financial assets from 401(k) eligibility (95% CI: $5,677–$10,886). Income-quartile analysis found a steep gradient — Q1: $4,365 vs. Q4: $16,703.",
    tags: ["Python", "pandas", "scikit-learn", "NumPy", "matplotlib"],
    link: `${REPO}/blob/main/lab%2024/lab_ch24_guided.ipynb`,
    isNotebook: true,
    starred: true,
  },
];

export const starred = projects.filter((p) => p.starred);
export const byCategory = (cat: Category) =>
  projects.filter((p) => p.category === cat);
