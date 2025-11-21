# HealthFlow ETL: Diabetes Data Engineering Project

## 🩺 Project Overview
HealthFlow ETL is a complete data engineering and analytics pipeline built using:
- **MongoDB** (raw dataset)
- **Jupyter Notebook** (EDA, cleaning, transformation)
- **PostgreSQL** (final clean dataset)
- **Python (Pandas, NumPy)**

The dataset contains diabetes-related patient health measurements.

---

## 🛠️ Workflow Summary

### **1. Extract**
- Connected MongoDB database  
- Loaded raw diabetes dataset into Python  

### **2. Transform / Clean**
Performed in Jupyter Notebook:
- Missing value treatment  
- Data type corrections  
- Feature cleaning  
- Exploratory Data Analysis (EDA)

### **3. Load**
- Exported the final clean dataset into PostgreSQL  
- Validated row counts and schema  

---

## 📊 Data Analysis Highlights
- Distribution of diabetes outcomes  
- Correlations between glucose, BMI, age, insulin  
- Health risk indicator trends  
- Patient condition segmentation

  🧮 Advanced SQL Analysis

To enhance the analytical depth of the project, I performed an advanced SQL analysis in PostgreSQL. I grouped patients by age category and calculated key health indicators such as diabetes prevalence, average BMI, high blood pressure, high cholesterol, smoking rates, physical activity levels, and heavy alcohol consumption. Using CTEs, conditional aggregation, and window functions (RANK), I identified which age groups carry the highest diabetes burden and visualized how lifestyle risk factors differ across age segments.


## 🧰 Tech Stack
- Python, Pandas, NumPy  
- MongoDB  
- PostgreSQL  
- Jupyter Notebook  
- Matplotlib / Seaborn  


