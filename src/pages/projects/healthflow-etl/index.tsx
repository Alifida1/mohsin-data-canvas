import React from "react";

// Import a few key screenshots from this folder
import DataExtractionFromMongo from "./Data_Extraction_From_MongoDB.png";
import DataLoadingToPostgres from "./Data_Loading_to_PostgreSQL.png";
import RawDataToJupyter from "./Raw_Data_From_MOngoDB_to_JupyterNB.png";
import BmiDistribution from "./BMI_Distribution.png";
import HealthCorrelation from "./Health_Indicators_Correlation.png";
import AvgHealthBySex from "./AVG_Health_Indicators_by_Sex.png";
import SqlAnalysisAge from "./SQL_Analysis_in_Postgresql.png";

export default function HealthflowETLPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      {/* Overview */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">
          HealthFlow ETL: Diabetes Data Engineering Project
        </h1>
        <p className="text-lg text-muted-foreground">
          End-to-end ETL and analytics pipeline for diabetes / health data
          using MongoDB, Jupyter Notebook and PostgreSQL.
        </p>

        <h2 className="text-xl font-semibold mt-4">Project Overview</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>MongoDB as the NoSQL raw data source.</li>
          <li>Jupyter Notebook for EDA, cleaning and transformation.</li>
          <li>PostgreSQL as the final relational data store.</li>
          <li>
            Focus on diabetes / health indicators, risk factors and outcome
            analysis.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">ETL Workflow</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Extract: load raw data from MongoDB into Python.</li>
          <li>Transform: clean, engineer features and explore patterns in Jupyter Notebook.</li>
          <li>Load: export the transformed dataset into PostgreSQL for querying and reporting.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-4">Advanced SQL Analysis</h2>
        <p>
          In PostgreSQL, I built an aggregated query to analyse diabetes prevalence,
          BMI and lifestyle risk factors (high blood pressure, high cholesterol,
          smoking, physical activity and heavy alcohol consumption) by age group,
          using CTEs, conditional aggregation and window functions (RANK) to
          identify the age groups with the highest diabetes burden.
        </p>

        <h2 className="text-xl font-semibold mt-4">Tech Stack</h2>
        <p>
          Python (Pandas, NumPy), MongoDB, Jupyter Notebook, PostgreSQL, pgAdmin,
          SQL, React, TypeScript.
        </p>
      </section>

      {/* ETL Screens */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">ETL Pipeline Screens</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <figure>
            <img
              src={RawDataToJupyter}
              alt="Raw data from MongoDB into Jupyter Notebook"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              Raw diabetes data loaded from MongoDB into Jupyter Notebook.
            </figcaption>
          </figure>

          <figure>
            <img
              src={DataExtractionFromMongo}
              alt="Data extraction from MongoDB"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              Data extraction and connection to MongoDB.
            </figcaption>
          </figure>

          <figure>
            <img
              src={DataLoadingToPostgres}
              alt="Loading transformed data into PostgreSQL"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              Final transformed dataset loaded into PostgreSQL.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* EDA Visuals */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key EDA Visuals</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <figure>
            <img
              src={BmiDistribution}
              alt="BMI distribution"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              BMI distribution for the population.
            </figcaption>
          </figure>

          <figure>
            <img
              src={HealthCorrelation}
              alt="Health indicators correlation"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              Correlation between key health indicators and diabetes.
            </figcaption>
          </figure>

          <figure>
            <img
              src={AvgHealthBySex}
              alt="Average health indicators by sex"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              Average health indicators split by sex.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SQL Analysis */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">SQL Analysis Output</h2>
        <figure>
          <img
            src={SqlAnalysisAge}
            alt="SQL analysis of diabetes risk by age group in PostgreSQL"
            className="w-full rounded-xl shadow"
          />
          <figcaption className="mt-2 text-sm text-muted-foreground">
            PostgreSQL query summarising diabetes risk and health indicators by
            age group.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
