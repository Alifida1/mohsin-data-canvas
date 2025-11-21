import React from "react";

import avgHealthBySex from "./AVG_Health_Indicators_by_Sex.png";
import avgMentalHealthByAge from "./AVG_MentalHealth_by_Age.png";
import bmiDistribution from "./BMI_Distribution.png";
import dataExtractionMongo from "./Data_Extraction_From_MongoDB.png";
import rawDataToJupyter from "./Raw_Data_From_MongoDB_to_JupyterNB.png";
import transformedData from "./Transformed_Data.png";
import transformedDataPostgres from "./Transformed_Data_PostgreSQL.png";
import dataLoadingPostgres from "./Data_Loading_to_PostgreSQL.png";
import postgresDashboard from "./PostgreSQL_Dashboard.png";
import correlationHeatmap from "./Health_Indicators_Correlation.png";
import sqlAnalysisImage from "./SQL_Analysis_in_Postgresql.png";

import notebookHtml from "./Healthflow_ETL_Pipeline.html?url";

const edaImages: { src: string; caption: string }[] = [
  {
    src: bmiDistribution,
    caption: "BMI distribution across the population highlights weight-related risk.",
  },
  {
    src: avgHealthBySex,
    caption: "Average health indicators by sex to compare risk patterns between groups.",
  },
  {
    src: avgMentalHealthByAge,
    caption: "Average mental health days by age group to explore wellbeing and stress.",
  },
  {
    src: correlationHeatmap,
    caption:
      "Correlation view of key features (BMI, blood pressure, cholesterol, activity) with diabetes outcome.",
  },
  {
    src: sqlAnalysisImage,
    caption:
      "SQL-based aggregation of diabetes prevalence, BMI and lifestyle factors by age group in PostgreSQL.",
  },
];

const pipelineImages: { src: string; caption: string }[] = [
  {
    src: rawDataToJupyter,
    caption: "Raw diabetes / health data loaded from MongoDB into Jupyter Notebook for EDA.",
  },
  {
    src: dataExtractionMongo,
    caption: "Data extraction step from the MongoDB NoSQL collection.",
  },
  {
    src: transformedData,
    caption: "Transformed and cleaned dataset after feature engineering in Python.",
  },
  {
    src: transformedDataPostgres,
    caption: "Final transformed dataset stored in PostgreSQL with a clean relational schema.",
  },
  {
    src: dataLoadingPostgres,
    caption: "Load step inserting the curated dataset into PostgreSQL tables.",
  },
  {
    src: postgresDashboard,
    caption: "Preview of the PostgreSQL view used for downstream analytics and reporting.",
  },
];

const HealthflowEtlProject: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
          <span>ETL Pipeline</span>
          <span>Health & Diabetes Analytics</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">
          HealthFlow ETL: Diabetes Data Engineering Project
        </h1>
        <p className="text-gray-700 max-w-3xl">
          End-to-end ETL and analytics pipeline for diabetes and general health data, built on
          MongoDB, Jupyter Notebook and PostgreSQL. The project takes raw survey data all the way
          from a NoSQL source to a structured data warehouse ready for SQL analysis and reporting.
        </p>
      </section>

      {/* Overview */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Project Overview</h2>
          <p className="text-gray-700">
            The goal of this project is to design a repeatable data pipeline that can clean and
            reshape large-scale health survey data for diabetes risk analysis. I worked with a
            diabetes-focused dataset containing lifestyle indicators, clinical variables and outcome
            labels, and designed the flow so that new data can be processed with minimum manual
            effort.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>MongoDB used as the NoSQL store for raw, semi-structured health records.</li>
            <li>Jupyter Notebook used for in-depth EDA, feature cleaning and transformation.</li>
            <li>PostgreSQL used as the analytical data warehouse and query layer.</li>
            <li>
              Focus on understanding diabetes risk, lifestyle behaviour and health indicators across
              patient segments.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 space-y-3">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            At a glance
          </h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Source:</span> MongoDB health / diabetes collection
            </li>
            <li>
              <span className="font-semibold">Processing:</span> Python (Pandas, NumPy) in Jupyter
              Notebook
            </li>
            <li>
              <span className="font-semibold">Target:</span> PostgreSQL (pgAdmin) for SQL analytics
            </li>
            <li>
              <span className="font-semibold">Deliverables:</span> cleaned table, EDA visuals, SQL
              aggregates, and a documented HTML notebook.
            </li>
          </ul>
        </div>
      </section>

      {/* ETL Workflow */}
      <section className="space-y-5">
        <h2 className="text-xl font-semibold">ETL Workflow</h2>
        <p className="text-gray-700 max-w-3xl">
          The pipeline follows a classic Extract–Transform–Load pattern but is tailored to the
          challenges of health data: inconsistent encodings, mixed data types, and the need to
          preserve medically meaningful categories while still being analysis-friendly.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <h3 className="font-semibold mb-2">Extract</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Connect to MongoDB and pull raw diabetes survey documents.</li>
              <li>Flatten nested fields and normalise into a tabular structure.</li>
              <li>Export the extracted dataset into Jupyter for inspection.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <h3 className="font-semibold mb-2">Transform</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Handle missing values, outliers and inconsistent categories.</li>
              <li>Engineer features around BMI, blood pressure and lifestyle habits.</li>
              <li>
                Perform EDA to understand distributions, correlations and risk patterns related to
                diabetes.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <h3 className="font-semibold mb-2">Load</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Design a clean relational schema in PostgreSQL.</li>
              <li>Load the transformed dataset into analysis-ready tables.</li>
              <li>
                Validate row counts and key metrics between the NoSQL source and SQL destination.
              </li>
            </ul>
          </div>
        </div>

        {/* Pipeline visuals */}
        <div className="grid gap-4 md:grid-cols-3">
          {pipelineImages.map((item) => (
            <figure
              key={item.caption}
              className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="mb-2 h-40 w-full rounded-xl object-cover"
              />
              <figcaption className="text-xs text-gray-600">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* EDA Section */}
      <section className="space-y-5">
        <h2 className="text-xl font-semibold">Exploratory Data Analysis (EDA)</h2>
        <p className="text-gray-700 max-w-3xl">
          After stabilising the schema, I carried out focused EDA to understand how diabetes relates
          to BMI, cardiovascular indicators, mental health and lifestyle behaviours. The visuals
          below summarise the most important patterns without overwhelming the viewer.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {edaImages.map((item) => (
            <figure
              key={item.caption}
              className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="mb-2 h-40 w-full rounded-xl object-cover"
              />
              <figcaption className="text-xs text-gray-600">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SQL Analysis */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Advanced SQL Analysis in PostgreSQL</h2>
        <p className="text-gray-700 max-w-3xl">
          To complement the Python-based EDA, I built an aggregated SQL query in PostgreSQL that
          groups patients by age band and calculates diabetes prevalence, average BMI and several
          lifestyle factors (high blood pressure, high cholesterol, smoking, physical activity and
          heavy alcohol consumption). Using CTEs, conditional aggregation and a window function
          (<code>RANK()</code>), the query highlights which age segments carry the highest diabetes
          burden and which risk factors are most prominent.
        </p>
      </section>

      {/* Code & Notebook */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Code & Notebook</h2>
        <p className="text-gray-700 max-w-3xl">
          The full ETL and analysis logic is documented in a Jupyter Notebook that was exported to
          HTML. It walks through the pipeline step by step: connecting to MongoDB, exploring the
          raw data, cleaning and transforming features, loading into PostgreSQL and running summary
          checks.
        </p>
        <a
          href={notebookHtml}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
        >
          Open ETL &amp; EDA Notebook (HTML)
        </a>
      </section>

      {/* Tech Stack */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          {[
            "Python",
            "Pandas",
            "NumPy",
            "MongoDB",
            "Jupyter Notebook",
            "PostgreSQL",
            "pgAdmin",
            "SQL",
            "React",
            "TypeScript",
          ].map((item) => (
            <li
              key={item}
              className="rounded-full bg-gray-100 px-3 py-1 text-gray-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HealthflowEtlProject;
