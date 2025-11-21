import React from "react";

export default function HealthflowEtlPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">
          HealthFlow ETL: Diabetes Data Engineering Project
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          End-to-end ETL and analytics pipeline for diabetes / health data using
          MongoDB, Jupyter Notebook and PostgreSQL.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Project Overview</h2>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>MongoDB as the NoSQL raw data source.</li>
          <li>Jupyter Notebook for EDA, cleaning and transformation.</li>
          <li>PostgreSQL as the final relational data store.</li>
          <li>
            Focus on diabetes / health indicators, risk factors and outcome
            analysis.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">ETL Workflow</h2>
        <ol className="list-decimal ml-6 mt-2 space-y-1">
          <li>Extract: load raw data from MongoDB into Python.</li>
          <li>
            Transform: clean, engineer features and explore patterns in Jupyter
            Notebook.
          </li>
          <li>
            Load: export the transformed dataset into PostgreSQL for querying
            and reporting.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Advanced SQL Analysis</h2>
        <p className="mt-2">
          In PostgreSQL, I built an aggregated query to analyse diabetes
          prevalence, BMI and lifestyle risk factors (high blood pressure, high
          cholesterol, smoking, physical activity and heavy alcohol
          consumption) by age group, using CTEs, conditional aggregation and
          window functions (RANK) to identify the age groups with the highest
          diabetes burden.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <p className="mt-2">
          Python (Pandas, NumPy), MongoDB, Jupyter Notebook, PostgreSQL,
          pgAdmin, SQL, React, TypeScript.
        </p>
      </section>
    </main>
  );
}

