import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  Globe2,
  MessageCircle,
  PackageSearch,
  Truck,
} from "lucide-react";

// Make sure these files exist in this folder.
// If your filenames are different, just update the paths below.
import sentimentDashboard from "./Sentiment_Analysis.png";
import recommendationDashboard from "./Product_Recommendation.png";
import supplierDashboard from "./Supplier_Delivery_Response.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function BusinessIntelligenceProject() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Page container */}
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:px-8 md:pt-14">
        {/* Header */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/80 p-6 shadow-xl shadow-slate-900/60 md:p-8"
        >
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              Business Intelligence · Big Data
            </span>
            <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/40">
              Power BI Dashboards
            </span>
          </div>

          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            Business Intelligence with Big Data: Alibaba Hardware Analytics
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            End-to-end business intelligence project built on web-scraped
            computer hardware data from Alibaba. I cleaned and transformed the
            dataset, processed it using big data tools, and connected the
            curated data layer to interactive Power BI dashboards to drive
            insights on products, sentiment, and supplier performance.
          </p>

          <div className="mt-5 grid gap-4 text-xs text-slate-300 md:grid-cols-3 md:text-sm">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-emerald-400" />
              <span>Web-scraped big data (Alibaba hardware)</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-sky-400" />
              <span>Interactive Power BI dashboards</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-violet-400" />
              <span>Business intelligence for e-commerce</span>
            </div>
          </div>
        </motion.section>

        {/* Layout: Overview + Stack */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
        >
          {/* Project overview */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6"
          >
            <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
              Project Overview
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-[0.95rem]">
              I built a business intelligence solution that takes raw,
              web-scraped data from Alibaba and turns it into decision-ready
              insights for computer hardware suppliers. The pipeline covers
              data acquisition, cleaning and transformation, big data
              processing, and rich Power BI visualizations. This project focuses
              on the{" "}
              <span className="font-medium text-sky-300">
                BI & big data analytics layer
              </span>
              ; the machine learning prediction components are documented
              separately in a dedicated project.
            </p>

            <div className="mt-5 space-y-4 text-sm text-slate-200">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Business Questions
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
                  <li>
                    Which suppliers and products drive the highest sales and
                    engagement?
                  </li>
                  <li>
                    How do customer sentiments vary across companies and
                    product lines?
                  </li>
                  <li>
                    Are supplier and delivery response patterns aligned with
                    customer satisfaction?
                  </li>
                  <li>
                    How can we recommend products and companies based on
                    pricing, ratings, and feedback?
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6"
          >
            <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
              Data & BI Stack
            </h2>

            <div className="mt-3 grid gap-4 text-sm text-slate-300">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Data Collection & Preparation
                </h3>
                <p className="mt-1 text-[0.9rem]">
                  Web-scraped product and review data from{" "}
                  <span className="font-medium text-sky-300">
                    Alibaba computer hardware listings
                  </span>
                  . Performed initial cleaning and transformation in Excel to
                  standardize fields such as prices, ratings, raters, feedback,
                  and supplier response attributes.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Big Data Processing
                </h3>
                <p className="mt-1 text-[0.9rem]">
                  Processed the enriched dataset using{" "}
                  <span className="font-medium text-emerald-300">
                    Hadoop-based big data analytics
                  </span>{" "}
                  (HDFS & MapReduce style aggregations) and batch computations
                  to generate aggregated facts and KPIs at product and company
                  level.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Business Intelligence Layer
                </h3>
                <p className="mt-1 text-[0.9rem]">
                  Connected the transformed big data tables to{" "}
                  <span className="font-medium text-amber-300">Power BI</span>,
                  designed data models and built interactive dashboards for
                  product recommendation, sentiment monitoring, and supplier /
                  delivery performance analysis.
                </p>
              </div>

              <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-300">
                <span className="rounded-full bg-slate-800 px-3 py-1">
                  Web Scraping (Alibaba)
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1">
                  Excel Data Cleaning
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1">
                  Hadoop / Big Data Analytics
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1">
                  Power BI
                </span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Dashboards */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-6"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
              Power BI Dashboards
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-[0.95rem]">
              I designed three main dashboard families to surface insights for
              product, customer, and operations teams. Each view supports
              drill-downs, cross-filtering, and parameter-driven exploration so
              stakeholders can answer their own questions quickly.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-3"
          >
            {/* Sentiment */}
            <div className="flex flex-col gap-3 rounded-3xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <MessageCircle className="h-4 w-4 text-pink-400" />
                Sentiment Analysis (Product Feedback)
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                Tracks positive, neutral, and negative feedback across
                companies, with breakdowns by rating range and product company.
                Helps identify brands with consistently strong or weak customer
                sentiment.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
                <img
                  src={sentimentDashboard}
                  alt="Power BI sentiment analysis dashboard"
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Product Recommendation */}
            <div className="flex flex-col gap-3 rounded-3xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <PackageSearch className="h-4 w-4 text-emerald-400" />
                Product Recommendation & Sales Insights
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                Analyses company-level sales, pricing patterns, reviews, and
                average ratings. The dashboard supports comparative analysis to
                recommend high-performing companies and product lines based on
                commercial and engagement KPIs.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
                <img
                  src={recommendationDashboard}
                  alt="Power BI product recommendation dashboard"
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Supplier & Delivery */}
            <div className="flex flex-col gap-3 rounded-3xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                <Truck className="h-4 w-4 text-sky-400" />
                Supplier & Delivery Response
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                Monitors supplier_response and delivery_response metrics to see
                how quickly companies react to orders and feedback.
                Visualizations compare supplier vs delivery averages and highlight
                operational outliers.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
                <img
                  src={supplierDashboard}
                  alt="Power BI supplier and delivery response dashboard"
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Responsibilities & Outcomes */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid gap-8 md:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6"
          >
            <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
              What I Did
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>
                Scraped computer hardware product and review data from Alibaba,
                then cleaned and standardized attributes such as ratings, raters,
                prices, warranties, and response indicators.
              </li>
              <li>
                Designed a big data processing flow using Hadoop-style batch
                aggregations to generate company-level and product-level KPIs
                suitable for BI consumption.
              </li>
              <li>
                Modelled the data in Power BI, created relationships, and built
                measures for sales, sentiment, engagement, and operational
                performance.
              </li>
              <li>
                Developed interactive dashboards with slicers and drill-downs so
                business users can filter by company, rating band, feedback type,
                and response categories.
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6"
          >
            <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
              Outcomes & Value
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>
                Enabled quick comparison of suppliers based on sales, ratings,
                sentiment, and response behavior.
              </li>
              <li>
                Highlighted companies with strong product feedback but weaker
                delivery metrics, giving clear targets for operational
                improvement.
              </li>
              <li>
                Provided a recommendation view to surface companies and product
                ranges that balance price, engagement, and satisfaction.
              </li>
              <li>
                Demonstrated how big data processing and BI tools can be
                combined to turn raw scraped data into strategic insights for
                e-commerce decision-makers.
              </li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Note about ML */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="rounded-3xl border border-dashed border-slate-800 bg-slate-950/60 p-5 text-xs text-slate-300 md:text-sm"
        >
          <p>
            <span className="font-semibold text-slate-100">
              Note on predictive modelling:
            </span>{" "}
            In this project page I focus on the data engineering, big data
            processing and business intelligence layer. The rating, review and
            raters prediction models built on top of this dataset are documented
            separately as a dedicated machine learning project.
          </p>
        </motion.section>
      </main>
    </div>
  );
}
