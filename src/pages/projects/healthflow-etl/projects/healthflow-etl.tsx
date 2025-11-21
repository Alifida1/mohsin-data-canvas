import React from "react";

const HealthflowEtlPage = () => {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1>HealthFlow ETL: Diabetes Data Engineering Project</h1>

      <p>
        This project demonstrates an end-to-end ETL and analytics pipeline
        using MongoDB, Jupyter Notebook and PostgreSQL on a diabetes / health
        survey dataset.
      </p>

      <h2>Pipeline Overview</h2>
      <ul>
        <li>Extract raw diabetes records from MongoDB.</li>
        <li>Perform EDA, cleaning and feature transformation in Jupyter.</li>
        <li>Load the final curated dataset into PostgreSQL.</li>
        <li>Run advanced SQL analysis to identify high-risk segments.</li>
      </ul>

      <h2>Key Technologies</h2>
      <ul>
        <li>Python (Pandas, NumPy)</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>Jupyter Notebook</li>
        <li>SQL (CTEs, window functions, aggregation)</li>
      </ul>

      <h2>Advanced SQL Analysis</h2>
      <p>
        In PostgreSQL, I grouped patients by age category and calculated
        diabetes prevalence, average BMI and lifestyle risk factors such as
        high blood pressure, high cholesterol, smoking, physical activity and
        heavy alcohol consumption. Using CTEs, conditional aggregation and a
        RANK() window function, I identified which age segments carry the
        highest diabetes burden.
      </p>

      <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
        Screenshots of the ETL steps, EDA plots and SQL results are stored in
        the repository and can be wired into this page later as inline images.
      </p>
    </main>
  );
};

export default HealthflowEtlPage;

