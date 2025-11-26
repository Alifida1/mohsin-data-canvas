import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Brain,
  Database,
  LineChart,
  Table2,
  FileCode,
} from "lucide-react";

// 🖼️ Diagrams & figures  (update paths/names if needed)
import workflowDiagram from "./Workflow_methodology.png";
import preprocessingDiagram from "./Datapreprocessing_pipeline.png";
import rfStructure from "./Random_Forest_Structure.png";
import annStructure from "./ANN_Structure.png";
import cnnStructure from "./CNN_structure.png";

import seasonalHeatmap from "./seasonal_consumption_heatmap.png";
import energyBySeason from "./energy_consumption_by_season.png";
import energyBySector from "./energy_consumption_inSectors.png";
import monthlySources from "./monthly_AVG_consumption_from_different_sources.png";

import rfEval from "./RF_Evaluation.png";
import svmEval from "./SVM_Evaluation.png";
import rfSvmComparison from "./RF_SVM_Performance_comparison.png";

import annAccLoss from "./ANN_accuracyVsLoss.png";
import cnnAccLoss from "./CNN_AccuracyVsLoss.png";
import annClassReport from "./ANN_classificationReport.png";
import cnnClassReport from "./CNN_classificationReport.png";

import mlVsDlPerformance from "./MLvsDL_Performance.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export default function RenewableForecastingProject() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:px-8 md:pt-14">
        {/* --- Header / Abstract --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="rounded-3xl border bg-card p-6 shadow-lg md:p-8"
        >
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              Machine Learning · Deep Learning
            </span>
            <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/40">
              Renewable Energy Forecasting
            </span>
            <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 ring-1 ring-violet-500/40">
              Comparative Study (RF · SVM · ANN · CNN)
            </span>
          </div>

          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            A Comparative Study of Traditional & Deep Learning Models for
            Sectoral Renewable Energy Utilisation
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
            This project compares traditional machine learning models —
            <span className="font-medium text-foreground">
              {" "}
              Random Forest (RF) & Support Vector Machine (SVM)
            </span>{" "}
            — with deep learning models —
            <span className="font-medium text-foreground">
              {" "}
              Artificial Neural Networks (ANN) & Convolutional Neural Networks
              (CNN)
            </span>{" "}
            — to forecast renewable energy utilisation across five sectors using
            a Kaggle dataset. The focus is on how model choice, data
            preprocessing and architecture design affect prediction accuracy and
            generalisation.
          </p>

          <div className="mt-5 grid gap-4 text-xs text-muted-foreground md:grid-cols-3 md:text-sm">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-emerald-400" />
              <span>Structured Kaggle dataset · 17 features · 5 sectors</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-violet-400" />
              <span>RF &amp; SVM vs ANN &amp; CNN performance comparison</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-sky-400" />
              <span>Target: sector-wise renewable energy utilisation</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 rounded-2xl bg-muted/40 p-4 text-xs md:grid-cols-3 md:text-sm">
            <div>
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
                Research Goals
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Compare ML vs DL models on the same dataset.</li>
                <li>
                  Analyse strengths & limitations of each algorithm for energy
                  data.
                </li>
                <li>
                  Identify techniques that improve predictive accuracy and
                  generalisation.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
                Key Results
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>CNN achieved the best validation accuracy at 96.57%.</li>
                <li>
                  ANN achieved 95.76% validation accuracy with very stable
                  loss curves.
                </li>
                <li>
                  SVM reached 96% accuracy with strong macro precision/recall.
                </li>
                <li>
                  RF achieved slightly lower accuracy, but excelled in feature
                  importance and interpretability.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
                Techniques Used
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Scaling and normalisation of numeric features.</li>
                <li>Seasonal feature engineering and one-hot encoding.</li>
                <li>
                  Cross-validation, grid search, and model-specific tuning for
                  all four models.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* --- Methodology & Workflow --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border bg-card p-6"
          >
            <h2 className="text-lg font-semibold md:text-xl">
              Research Methodology
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
              The study follows a quantitative experimental design. A structured
              Kaggle dataset containing{" "}
              <span className="font-medium text-foreground">
                sectoral renewable energy consumption
              </span>{" "}
              (1973–2024) was preprocessed, engineered and split into training
              and test sets (80:20). Four models — RF, SVM, ANN and CNN — were
              built and tuned on the same train/test splits, with evaluation via
              accuracy, precision, recall and F1-score.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The workflow spans: data collection → preprocessing & feature
              engineering → exploratory data analysis → ML & DL model training
              → cross-validation → comparative evaluation and interpretation for
              energy-management use cases.
            </p>

            <div className="mt-4 rounded-2xl bg-muted/40 p-4 text-sm text-muted-foreground">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Core Research Question
              </h3>
              <p className="mt-2">
                How can traditional models (Random Forest, SVM) and deep
                learning models (ANN, CNN) be effectively utilised to improve
                the accuracy of sectoral renewable energy consumption
                prediction, given a relatively small but information-rich
                dataset?
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 rounded-3xl border bg-card p-4"
          >
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Activity className="h-4 w-4 text-emerald-400" />
              Workflow of Methodology
            </div>
            <p className="text-xs text-muted-foreground">
              High-level Lucidchart diagram showing the full pipeline from data
              collection through model deployment for sector-specific
              forecasting.
            </p>
            <div className="overflow-hidden rounded-2xl border bg-muted/40">
              <img
                src={workflowDiagram}
                alt="Workflow of methodology for renewable energy forecasting project"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </motion.section>

        {/* --- Data & Preprocessing --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border bg-card p-6"
          >
            <h2 className="text-lg font-semibold md:text-xl">
              Dataset & Preprocessing
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The dataset contains{" "}
              <span className="font-medium">3,065 observations</span> across 17
              numeric features, including energy contributions from solar, wind,
              hydro, wood, waste, biofuels and biomass, plus temporal fields
              (year, month) and a categorical{" "}
              <span className="font-medium">sector</span> variable (5 classes).
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Normalised all numeric energy variables (MinMax scaling).</li>
              <li>
                Engineered a <span className="font-medium">Season</span> column
                from month (Winter, Spring, Summer, Fall).
              </li>
              <li>
                One-hot encoded categorical variables (Sector, Season) where
                required for ML/DL models.
              </li>
              <li>
                Split data into 80% training and 20% testing for all four
                models.
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 rounded-3xl border bg-card p-4"
          >
            <div className="flex items-center gap-2 text-sm font-semibold">
              <LineChart className="h-4 w-4 text-sky-400" />
              Data Preprocessing Pipeline
            </div>
            <p className="text-xs text-muted-foreground">
              Visual pipeline describing cleaning, normalisation, encoding and
              train–test splitting applied before model training.
            </p>
            <div className="overflow-hidden rounded-2xl border bg-muted/40">
              <img
                src={preprocessingDiagram}
                alt="Data preprocessing pipeline diagram"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </motion.section>

        {/* --- Exploratory Data Analysis --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-6"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-lg font-semibold md:text-xl">
              Exploratory Data Analysis
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground md:text-[0.95rem]">
              Before modelling, I studied seasonal and sectoral consumption
              patterns, correlations between renewable sources, and temporal
              trends. These analyses guided feature engineering and helped
              justify the choice of non-linear models.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2"
          >
            {/* Heatmap */}
            <div className="flex flex-col gap-3 rounded-3xl border bg-card p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <BarChart3 className="h-4 w-4 text-emerald-400" />
                Seasonal Consumption Heatmap
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Heatmap of average total renewable energy by year and month,
                highlighting long-term growth trends and strong seasonality
                effects.
              </p>
              <div className="overflow-hidden rounded-2xl border bg-muted/30">
                <img
                  src={seasonalHeatmap}
                  alt="Seasonal renewable energy consumption heatmap"
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Energy by season */}
            <div className="flex flex-col gap-3 rounded-3xl border bg-card p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <LineChart className="h-4 w-4 text-sky-400" />
                Total Renewable Energy by Season
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Boxplots and seasonal line charts reveal how winter vs summer
                demand varies, and how total utilisation behaves across
                different meteorological seasons.
              </p>
              <div className="overflow-hidden rounded-2xl border bg-muted/30">
                <img
                  src={energyBySeason}
                  alt="Total renewable energy by season"
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Sector trends */}
            <div className="flex flex-col gap-3 rounded-3xl border bg-card p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Activity className="h-4 w-4 text-violet-400" />
                Sectoral Consumption Trends
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Multi-line plots of total renewable energy by sector (Commercial,
                Electric Power, Industrial, Residential, Transportation) across
                the calendar year.
              </p>
              <div className="overflow-hidden rounded-2xl border bg-muted/30">
                <img
                  src={energyBySector}
                  alt="Monthly total renewable energy by sector"
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Sources */}
            <div className="flex flex-col gap-3 rounded-3xl border bg-card p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Database className="h-4 w-4 text-amber-400" />
                Monthly Averages by Energy Source
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Time series of key renewable sources (solar, wind, hydro,
                biomass, biofuels) used to understand multi-source contributions
                and correlations.
              </p>
              <div className="overflow-hidden rounded-2xl border bg-muted/30">
                <img
                  src={monthlySources}
                  alt="Monthly average consumption from different renewable sources"
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* --- Model Architectures --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-6"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-lg font-semibold md:text-xl">
              Model Architectures
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground md:text-[0.95rem]">
              Four models were implemented to capture non-linear patterns in
              energy utilisation while balancing interpretability and
              generalisation. RF and SVM represent strong traditional baselines,
              while ANN and CNN explore deep learning on structured tabular
              data.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-3"
          >
            {/* RF */}
            <div className="flex flex-col gap-3 rounded-3xl border bg-card p-4">
              <div className="text-sm font-semibold">
                Random Forest (RF) Structure
              </div>
              <p className="text-xs text-muted-foreground">
                Ensemble of decision trees with 100 estimators, 5-fold
                cross-validation, and evaluation on accuracy, macro precision,
                recall and F1-score.
              </p>
              <div className="overflow-hidden rounded-2xl border bg-muted/40">
                <img
                  src={rfStructure}
                  alt="Random Forest structure diagram"
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* ANN */}
            <div className="flex flex-col gap-3 rounded-3xl border bg-card p-4">
              <div className="text-sm font-semibold">
                Artificial Neural Network (ANN)
              </div>
              <p className="text-xs text-muted-foreground">
                Fully connected network with 64-unit input layer, 32-unit hidden
                layer, ReLU activations and dropout for regularisation, trained
                for 50 epochs.
              </p>
              <div className="overflow-hidden rounded-2xl border bg-muted/40">
                <img
                  src={annStructure}
                  alt="ANN structure diagram"
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* CNN */}
            <div className="flex flex-col gap-3 rounded-3xl border bg-card p-4">
              <div className="text-sm font-semibold">
                Convolutional Neural Network (CNN)
              </div>
              <p className="text-xs text-muted-foreground">
                1D CNN applied to the tabular feature vector: Conv1D → MaxPool →
                Dense layers with dropout, optimised with Adam and trained for
                20 epochs.
              </p>
              <div className="overflow-hidden rounded-2xl border bg-muted/40">
                <img
                  src={cnnStructure}
                  alt="CNN structure diagram"
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* --- Training Dynamics & Evaluation --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-6"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-lg font-semibold md:text-xl">
              Training Dynamics & Evaluation
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground md:text-[0.95rem]">
              Model performance was monitored using training/validation accuracy
              and loss curves, classification reports and cross-validation
              scores. This helped diagnose overfitting and compare
              generalisation behaviour across RF, SVM, ANN and CNN.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2"
          >
            {/* ANN curves */}
            <div className="flex flex-col gap-3 rounded-3xl border bg-card p-4">
              <div className="text-sm font-semibold">ANN Accuracy & Loss</div>
              <p className="text-xs text-muted-foreground">
                ANN converged to ~97.2% training accuracy and 95.8% validation
                accuracy with smooth, stable loss curves, indicating good
                generalisation with mild regularisation.
              </p>
              <div className="overflow-hidden rounded-2xl border bg-muted/40">
                <img
                  src={annAccLoss}
                  alt="ANN training vs validation accuracy and loss"
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border bg-muted/40">
                <img
                  src={annClassReport}
                  alt="ANN classification report"
                  className="h-40 w-full object-contain bg-background"
                />
              </div>
            </div>

            {/* CNN curves */}
            <div className="flex flex-col gap-3 rounded-3xl border bg-card p-4">
              <div className="text-sm font-semibold">CNN Accuracy & Loss</div>
              <p className="text-xs text-muted-foreground">
                CNN achieved the best validation accuracy at 96.57%, with a
                slightly lower validation loss than ANN, confirming its strong
                ability to capture complex non-linear relationships, even on a
                relatively small tabular dataset.
              </p>
              <div className="overflow-hidden rounded-2xl border bg-muted/40">
                <img
                  src={cnnAccLoss}
                  alt="CNN training vs validation accuracy and loss"
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border bg-muted/40">
                <img
                  src={cnnClassReport}
                  alt="CNN classification report"
                  className="h-40 w-full object-contain bg-background"
                />
              </div>
            </div>

            {/* RF metrics */}
            <div className="flex flex-col gap-3 rounded-3xl border bg-card p-4">
              <div className="text-sm font-semibold">
                Random Forest Evaluation
              </div>
              <p className="text-xs text-muted-foreground">
                RF attained 95%±10 accuracy, with strong macro precision and
                recall. Its main value in this project is interpretability and
                feature importance analysis across energy sources and sectors.
              </p>
              <div className="overflow-hidden rounded-2xl border bg-muted/40">
                <img
                  src={rfEval}
                  alt="Random Forest evaluation metrics"
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* SVM metrics */}
            <div className="flex flex-col gap-3 rounded-3xl border bg-card p-4">
              <div className="text-sm font-semibold">SVM Evaluation</div>
              <p className="text-xs text-muted-foreground">
                After grid-search over C, kernel and gamma, SVM reached 96%±5
                accuracy, 97%±3 precision, and 95%±6 F1-score, proving highly
                competitive while remaining relatively lightweight compared to
                deep models.
              </p>
              <div className="overflow-hidden rounded-2xl border bg-muted/40">
                <img
                  src={svmEval}
                  alt="SVM evaluation metrics"
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* RF vs SVM */}
            <div className="flex flex-col gap-3 rounded-3xl border bg-card p-4 md:col-span-2">
              <div className="text-sm font-semibold">
                RF vs SVM: Cross-Validation Comparison
              </div>
              <p className="text-xs text-muted-foreground">
                Line, bar and radar charts compare RF and SVM across 5
                cross-validation folds and four metrics (accuracy, precision,
                recall, F1), highlighting SVM’s slightly stronger and more
                stable performance.
              </p>
              <div className="overflow-hidden rounded-2xl border bg-muted/40">
                <img
                  src={rfSvmComparison}
                  alt="Random Forest vs SVM performance comparison"
                  className="h-60 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* --- Parameter Table --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-4 rounded-3xl border bg-card p-6"
        >
          <div className="flex items-center gap-2">
            <Table2 className="h-5 w-5 text-emerald-400" />
            <h2 className="text-lg font-semibold md:text-xl">
              Hyperparameter Summary
            </h2>
          </div>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-[0.95rem]">
            Key hyperparameters used for each model. All models share the same
            train/test split and were tuned with either cross-validation or
            validation sets.
          </p>

          <div className="overflow-x-auto rounded-2xl border bg-muted/30">
            <table className="min-w-full text-left text-xs md:text-sm">
              <thead className="bg-muted/60 text-[0.7rem] uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Model</th>
                  <th className="px-4 py-3">Parameter</th>
                  <th className="px-4 py-3">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {/* RF */}
                <tr className="bg-card/40">
                  <td className="px-4 py-3 align-top font-medium">Random Forest</td>
                  <td className="px-4 py-3 align-top text-xs">
                    n_estimators = 100
                    <br />
                    random_state = 42
                    <br />
                    cv = 5
                    <br />
                    scoring = accuracy, precision_macro, recall_macro, f1_macro
                  </td>
                  <td className="px-4 py-3 align-top text-xs text-muted-foreground">
                    100 trees with fixed random state and 5-fold cross-validation
                    using multiple macro-averaged metrics.
                  </td>
                </tr>

                {/* SVM */}
                <tr>
                  <td className="px-4 py-3 align-top font-medium">SVM</td>
                  <td className="px-4 py-3 align-top text-xs">
                    C = [0.1, 1, 10, 100]
                    <br />
                    kernel = [linear, rbf, poly]
                    <br />
                    gamma = [scale, auto]
                    <br />
                    random_state = 42
                    <br />
                    cv = 5, scoring as above
                  </td>
                  <td className="px-4 py-3 align-top text-xs text-muted-foreground">
                    GridSearchCV over regularisation strength, kernel type and
                    gamma, evaluated with 5-fold cross-validation.
                  </td>
                </tr>

                {/* CNN */}
                <tr className="bg-card/40">
                  <td className="px-4 py-3 align-top font-medium">CNN</td>
                  <td className="px-4 py-3 align-top text-xs">
                    Conv1D(32, kernel_size=3, activation=&apos;relu&apos;)
                    <br />
                    MaxPooling1D(pool_size=2)
                    <br />
                    Dense(128, activation=&apos;relu&apos;)
                    <br />
                    Dropout(0.5)
                    <br />
                    Dense(num_classes, activation=&apos;softmax&apos;)
                    <br />
                    optimizer = &apos;adam&apos;, loss =
                    &apos;categorical_crossentropy&apos;
                    <br />
                    metrics = [&apos;accuracy&apos;], epochs = 20,
                    batch_size = 32
                  </td>
                  <td className="px-4 py-3 align-top text-xs text-muted-foreground">
                    1D convolutional architecture for tabular data with strong
                    regularisation via dropout and early-epoch convergence.
                  </td>
                </tr>

                {/* ANN */}
                <tr>
                  <td className="px-4 py-3 align-top font-medium">ANN</td>
                  <td className="px-4 py-3 align-top text-xs">
                    Dense(64, activation=&apos;relu&apos;)
                    <br />
                    Dropout(0.3)
                    <br />
                    Dense(32, activation=&apos;relu&apos;)
                    <br />
                    Dense(num_classes, activation=&apos;softmax&apos;)
                    <br />
                    optimizer = &apos;adam&apos;, loss =
                    &apos;categorical_crossentropy&apos;
                    <br />
                    metrics = [&apos;accuracy&apos;], epochs = 50,
                    batch_size = 16
                  </td>
                  <td className="px-4 py-3 align-top text-xs text-muted-foreground">
                    Deeper fully-connected network with two hidden layers and
                    dropout to prevent overfitting, trained for more epochs than
                    the CNN.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* --- Comparative Analysis Table --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-4 rounded-3xl border bg-card p-6"
        >
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-sky-400" />
            <h2 className="text-lg font-semibold md:text-xl">
              Comparative Performance of All Models
            </h2>
          </div>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-[0.95rem]">
            Summary of key metrics across ANN, CNN, SVM and Random Forest. ANN
            and CNN include both cross-validation statistics and final
            train/validation metrics; RF and SVM are reported primarily via
            cross-validation and held-out test performance.
          </p>

          <div className="overflow-x-auto rounded-2xl border bg-muted/30">
            <table className="min-w-full text-left text-[0.7rem] md:text-xs">
              <thead className="bg-muted/60 text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-3 py-3">Model</th>
                  <th className="px-3 py-3">Accuracy (%)</th>
                  <th className="px-3 py-3">Precision (%)</th>
                  <th className="px-3 py-3">Recall (%)</th>
                  <th className="px-3 py-3">F1-Score (%)</th>
                  <th className="px-3 py-3">Train Acc</th>
                  <th className="px-3 py-3">Valid. Acc</th>
                  <th className="px-3 py-3">Train Loss</th>
                  <th className="px-3 py-3">Valid. Loss</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr className="bg-card/40">
                  <td className="px-3 py-3 font-medium">ANN</td>
                  <td className="px-3 py-3">96</td>
                  <td className="px-3 py-3">96</td>
                  <td className="px-3 py-3">95</td>
                  <td className="px-3 py-3">96</td>
                  <td className="px-3 py-3">97.23</td>
                  <td className="px-3 py-3">95.76</td>
                  <td className="px-3 py-3">0.0540</td>
                  <td className="px-3 py-3">0.0616</td>
                </tr>
                <tr>
                  <td className="px-3 py-3 font-medium">CNN</td>
                  <td className="px-3 py-3">97</td>
                  <td className="px-3 py-3">97</td>
                  <td className="px-3 py-3">96</td>
                  <td className="px-3 py-3">97</td>
                  <td className="px-3 py-3">97.02</td>
                  <td className="px-3 py-3">96.57</td>
                  <td className="px-3 py-3">0.0563</td>
                  <td className="px-3 py-3">0.0602</td>
                </tr>
                <tr className="bg-card/40">
                  <td className="px-3 py-3 font-medium">SVM</td>
                  <td className="px-3 py-3">96 ± 5</td>
                  <td className="px-3 py-3">97 ± 3</td>
                  <td className="px-3 py-3">96 ± 5</td>
                  <td className="px-3 py-3">95 ± 6</td>
                  <td className="px-3 py-3">–</td>
                  <td className="px-3 py-3">96</td>
                  <td className="px-3 py-3">–</td>
                  <td className="px-3 py-3">–</td>
                </tr>
                <tr>
                  <td className="px-3 py-3 font-medium">Random Forest</td>
                  <td className="px-3 py-3">95 ± 10</td>
                  <td className="px-3 py-3">96 ± 9</td>
                  <td className="px-3 py-3">95 ± 10</td>
                  <td className="px-3 py-3">95 ± 10</td>
                  <td className="px-3 py-3">–</td>
                  <td className="px-3 py-3">95</td>
                  <td className="px-3 py-3">–</td>
                  <td className="px-3 py-3">–</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-col gap-3 rounded-2xl border bg-muted/30 p-4 md:flex-row md:items-center">
            <div className="flex-1 text-xs text-muted-foreground md:text-sm">
              <p>
                Overall, <span className="font-medium">CNN</span> achieved the
                best validation accuracy and competitive loss, slightly
                outperforming ANN. <span className="font-medium">SVM</span>{" "}
                provided a strong traditional baseline with high macro scores,
                while <span className="font-medium">Random Forest</span> offered
                valuable feature importance insights and robust performance.
              </p>
            </div>
            <div className="flex-1 overflow-hidden rounded-2xl border bg-card">
              <img
                src={mlVsDlPerformance}
                alt="ML vs DL model performance comparison chart"
                className="h-44 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.section>

        {/* --- Code Preview --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="rounded-3xl border bg-card p-6"
        >
          <div className="mb-3 flex items-center gap-2">
            <FileCode className="h-5 w-5 text-violet-400" />
            <h2 className="text-lg font-semibold md:text-xl">
              Code Preview: End-to-End Pipeline
            </h2>
          </div>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-[0.95rem]">
            The full notebook implements an end-to-end workflow: loading and
            inspecting the dataset, normalising features, engineering seasonal
            variables, performing EDA, training RF and SVM with
            cross-validation, and building ANN/CNN models with Keras for
            multi-class sector prediction.
          </p>

          <div className="mt-4 overflow-hidden rounded-2xl border bg-muted/80">
            <pre className="max-h-80 overflow-auto bg-[#050816]/80 p-4 text-[0.7rem] leading-relaxed text-gray-100 md:text-xs">
{`# Data loading & preprocessing
data = pd.read_csv("dataset.csv")

# Normalise numeric features (excluding Year/Month & one-hot columns)
num_cols = data.select_dtypes(include=["float64", "int64"]).columns
exclude = ["Year", "Month"]
cols_to_scale = [c for c in num_cols if c not in exclude]

scaler = MinMaxScaler()
data[cols_to_scale] = scaler.fit_transform(data[cols_to_scale])

# Season feature engineering
data["Season"] = data["Month"].apply(
    lambda m: "Winter" if m in [12, 1, 2]
    else "Spring" if m in [3, 4, 5]
    else "Summer" if m in [6, 7, 8]
    else "Fall"
)

data = pd.get_dummies(data, columns=["Season", "Sector"], drop_first=True)

# Train / test split
X = data.drop(columns=["Sector_Commerical", "Sector_Electric Power",
                       "Sector_Industrial", "Sector_Residential",
                       "Sector_Transportation"])
y = np.argmax(data[["Sector_Commerical", "Sector_Electric Power",
                    "Sector_Industrial", "Sector_Residential",
                    "Sector_Transportation"]].values, axis=1)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)`}
            </pre>
          </div>

          <div className="mt-4 text-sm">
            <a
              href="/projects/renewable-forecasting/Renewable_Energy_Research_Project.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-2 text-xs font-medium text-white transition-transform duration-200 hover:scale-105 hover:from-violet-500 hover:to-indigo-400 md:text-sm"
            >
              <FileCode className="h-4 w-4" />
              View Full Code & Outputs (HTML)
            </a>
          </div>
        </motion.section>

        {/* --- Conclusion --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="rounded-3xl border border-dashed bg-muted/30 p-5 text-xs text-muted-foreground md:text-sm"
        >
          <p>
            <span className="font-semibold text-foreground">
              Conclusion & Future Work:
            </span>{" "}
            Deep learning models (ANN &amp; especially CNN) slightly
            outperformed traditional models on this structured energy dataset,
            but SVM and RF remained competitive and much easier to train and
            interpret. The study shows that model choice should balance data
            size, complexity, hardware constraints and explainability needs.
            Future extensions include hybrid ML–DL ensembles and incorporating
            richer temporal and exogenous variables (e.g. weather, policy
            events) to further improve robustness and scalability of renewable
            energy forecasting.
          </p>
        </motion.section>
      </main>
    </div>
  );
}

