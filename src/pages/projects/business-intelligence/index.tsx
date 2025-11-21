import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  Globe2,
  LineChart,
  Network,
  Sparkles,
} from "lucide-react";

import SentimentDashboard from "./Sentiment_Analysis.png";
import RecommendationDashboard from "./Product_Recommendation.png";
import SupplierDeliveryDashboard from "./Supplier_Delivery_Response.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export default function BusinessIntelligenceBigDataPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Gradient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-40 mix-blend-screen">
        <div className="absolute -left-24 top-10 h-60 w-60 rounded-full bg-purple-500 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-indigo-500 blur-3xl" />
      </div>

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700/60">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Business Intelligence · Big Data
            </div>

            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Business Intelligence with Big Data
            </h1>

            <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
              Interactive Power BI dashboards built on top of a big data
              pipeline using web-scraped Alibaba computer hardware data. The
              project focuses on product recommendation, sentiment analysis and
              supplier &amp; delivery performance to support data-driven
              decision making.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700/70">
                <Database className="h-3.5 w-3.5" />
                Hadoop-based big data pipeline
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700/70">
                <BarChart3 className="h-3.5 w-3.5" />
                Power BI interactive dashboards
              </span>
            </div>
          </div>

          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.85)]"
          >
            <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-purple-300" />
                Alibaba Hardware · Web-scraped
              </span>
              <span>Business Intelligence Project</span>
            </div>

            <div className="space-y-4 text-xs text-slate-200 sm:text-sm">
              <div className="flex items-start gap-3 rounded-2xl bg-slate-900/80 p-3 ring-1 ring-slate-800">
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-purple-600/90">
                  <Globe2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-50">Web Scraping</p>
                  <p className="text-slate-300">
                    Collected large-scale product &amp; review data from Alibaba
                    for computer hardware.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-slate-900/80 p-3 ring-1 ring-slate-800">
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600/90">
                  <Network className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-50">Big Data Layer</p>
                  <p className="text-slate-300">
                    Cleaned &amp; transformed data using Excel and processed it
                    with Hadoop-based tools to generate aggregated datasets for
                    BI.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-slate-900/80 p-3 ring-1 ring-slate-800">
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-600/90">
                  <LineChart className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-50">Power BI Dashboards</p>
                  <p className="text-slate-300">
                    Built interactive dashboards for sentiment analysis,
                    product recommendation and supplier &amp; delivery
                    performance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* OVERVIEW & PIPELINE */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.45 }}
          className="grid gap-8 md:grid-cols-[2fr,3fr]"
        >
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Project Overview
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              This Business Intelligence project turns noisy, web-scraped data
              from Alibaba into clear, decision-ready dashboards for the
              computer hardware domain. The end-to-end workflow covers scraping,
              cleaning and transforming the dataset, running big data analysis
              on top of Hadoop, and finally connecting curated outputs to Power
              BI for interactive exploration by business stakeholders.
            </p>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              The focus of this project is <span className="font-medium text-slate-100">
                descriptive and diagnostic analytics
              </span>{" "}
              using big data and BI—not the predictive models, which are
              documented separately as a dedicated machine learning project.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Web Scraping",
                subtitle: "Alibaba hardware catalogue & reviews",
                body: "Collected large volumes of product, pricing, ratings and feedback data from Alibaba’s marketplace.",
              },
              {
                title: "Cleaning & Transformation",
                subtitle: "Excel-driven preprocessing",
                body: "Standardised columns, fixed missing values and engineered features such as price bands, delivery categories and sentiment flags.",
              },
              {
                title: "Big Data Processing",
                subtitle: "Hadoop & friends",
                body: "Used Hadoop-style processing (HDFS / MapReduce-style workflows) to aggregate metrics and prepare fact tables for BI.",
              },
              {
                title: "BI & Storytelling",
                subtitle: "Power BI dashboards",
                body: "Connected refined datasets to Power BI and designed page-level navigation, slicers and KPIs for end-users.",
              },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                variants={fadeIn}
                transition={{ duration: 0.35, delay: 0.05 * idx }}
                className="group rounded-3xl border border-slate-800/80 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/70 transition-transform duration-200 hover:-translate-y-1 hover:border-purple-500/70"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                  {card.subtitle}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-50">
                  {card.title}
                </p>
                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* DASHBOARD GALLERY */}
        <motion.section
          id="dashboards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                Power BI Dashboards
              </h2>
              <p className="mt-1 text-sm text-slate-300 sm:text-base">
                Each dashboard is designed around a specific business question:
                customer sentiment, product strategy and operational performance.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Sentiment Analysis */}
            <motion.article
              variants={fadeIn}
              transition={{ duration: 0.45 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80 shadow-xl shadow-slate-950/80"
            >
              <div className="relative overflow-hidden">
                <img
                  src={SentimentDashboard}
                  alt="Sentiment Analysis dashboard showing positive vs negative feedback and company-level sentiment breakdown."
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-80" />
              </div>
              <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
                <span className="inline-flex w-fit items-center rounded-full bg-purple-600/20 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-purple-200 ring-1 ring-purple-500/50">
                  Sentiment Analysis
                </span>
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  Customer Feedback &amp; Brand Perception
                </h3>
                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                  Analyses positive, neutral and negative feedback at company
                  level, showing which suppliers consistently delight customers
                  and where sentiment issues are concentrated.
                </p>
              </div>
            </motion.article>

            {/* Product Recommendation */}
            <motion.article
              variants={fadeIn}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80 shadow-xl shadow-slate-950/80"
            >
              <div className="relative overflow-hidden">
                <img
                  src={RecommendationDashboard}
                  alt="Product recommendation dashboard with company sales, prices, ratings and raters."
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-80" />
              </div>
              <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
                <span className="inline-flex w-fit items-center rounded-full bg-sky-600/20 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-sky-200 ring-1 ring-sky-500/50">
                  Product Strategy
                </span>
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  Product Recommendation &amp; Company Performance
                </h3>
                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                  Combines sales, pricing, reviews and ratings to highlight
                  strong performers, under-priced opportunities and companies
                  that merit prioritisation in a partner or sourcing strategy.
                </p>
              </div>
            </motion.article>

            {/* Supplier & Delivery */}
            <motion.article
              variants={fadeIn}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80 shadow-xl shadow-slate-950/80"
            >
              <div className="relative overflow-hidden">
                <img
                  src={SupplierDeliveryDashboard}
                  alt="Supplier and delivery response dashboard showing response metrics by company."
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-80" />
              </div>
              <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
                <span className="inline-flex w-fit items-center rounded-full bg-emerald-600/20 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-500/50">
                  Operations
                </span>
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  Supplier &amp; Delivery Response
                </h3>
                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                  Tracks supplier response scores versus delivery performance,
                  helping identify reliable partners and diagnose bottlenecks in
                  the fulfilment process.
                </p>
              </div>
            </motion.article>
          </div>
        </motion.section>

        {/* BUSINESS QUESTIONS & TECH STACK */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.45 }}
          className="grid gap-8 md:grid-cols-[3fr,2fr]"
        >
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Key Business Questions Answered
            </h2>
            <ul className="space-y-3 text-sm text-slate-300 sm:text-base">
              <li>
                • Which hardware suppliers have the **strongest customer
                sentiment** and where are negative reviews concentrated?
              </li>
              <li>
                • How do **price, rating and review volume** interact across
                companies and products?
              </li>
              <li>
                • Which suppliers show the most reliable **delivery and response
                performance**, and which ones are risky from a service
                perspective?
              </li>
              <li>
                • For a given segment (rating range, price band, feedback type),
                **which products and companies should be recommended** to
                customers or prioritised by the business?
              </li>
            </ul>
            <p className="text-sm text-slate-300 sm:text-base">
              The dashboards are built so that a non-technical stakeholder can
              answer these questions interactively using slicers for rating,
              company, feedback, delivery response and more.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/80">
            <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
              Tech Stack &amp; Tools
            </h3>
            <div className="flex flex-wrap gap-2 text-xs text-slate-200 sm:text-sm">
              {[
                "Power BI",
                "Excel (data cleaning & transformation)",
                "Web scraping (Alibaba hardware data)",
                "Hadoop ecosystem (HDFS / MapReduce-style processing)",
                "Big Data Analytics",
                "Data modelling for BI",
                "Dashboard design & storytelling",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-900 px-3 py-1 ring-1 ring-slate-700/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* WRAP UP */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/80"
        >
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Outcome
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            This project demonstrates how web-scraped big data can be shaped
            into clear business intelligence. By combining Hadoop-style
            processing with structured Excel transformations and thoughtful
            Power BI design, the dashboards give stakeholders a single place to
            explore sentiment, product strategy and operational performance for
            computer hardware suppliers on Alibaba. The predictive modelling
            work built on top of this dataset is documented separately as a
            dedicated machine learning project.
          </p>
        </motion.section>
      </main>
    </div>
  );
}

