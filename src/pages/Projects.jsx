import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* SEO — React Helmet for Projects Page                          */}
      {/* ------------------------------------------------------------- */}
      <Helmet>
        <title>Projects — Bashir Abubakar</title>

        <meta
          name="description"
          content="Explore machine learning, NLP, healthcare analytics, and AI projects created by Bashir Abubakar, including Kaggle notebooks, predictive modelling and web applications."
        />

        <meta
          name="keywords"
          content="Bashir Abubakar Projects, AI Projects, Machine Learning Portfolio, NLP Projects, Healthcare Analytics, Data Science Portfolio, Kaggle, Predictive Modelling"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Projects — Bashir Abubakar" />
        <meta
          property="og:description"
          content="Browse the full list of data science, AI, machine learning and healthcare analytics projects by Bashir Abubakar."
        />
        <meta property="og:url" content="https://bashir-abubakar.github.io/projects" />
        <meta property="og:image" content="https://bashir-abubakar.github.io/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects — Bashir Abubakar" />
        <meta
          name="twitter:description"
          content="Explore AI, NLP, healthcare analytics and data science projects by Bashir Abubakar."
        />
        <meta name="twitter:image" content="https://bashir-abubakar.github.io/og-image.png" />
      </Helmet>

      {/* ------------------------------------------------------------- */}
      {/* PAGE CONTENT                                                  */}
      {/* ------------------------------------------------------------- */}
      <div
        className="
          min-h-screen w-full
          bg-gradient-to-br from-[#0f1f3d] via-[#1e3d7b] to-[#4a78e2]
          pt-24 sm:pt-28 md:pt-32
          px-4 sm:px-6 pb-14
        "
      >
        <div className="max-w-5xl mx-auto">

          {/* PAGE TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-4xl sm:text-5xl font-bold 
              text-center 
              bg-gradient-to-r from-blue-200 to-blue-400 
              bg-clip-text text-transparent 
              mb-10 sm:mb-14
            "
          >
            Projects
          </motion.h1>

          {/* PROJECT LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

            <ProjectCard
              title="Human Resources Analytics – Employee Attrition"
              link="https://www.kaggle.com/code/bashirabubakar/human-resources-analytics-employee-attrition"
            />

            <ProjectCard
              title="Predicting Breast Cancer – Logistic Regression"
              link="https://www.kaggle.com/code/bashirabubakar/predicting-breast-cancer-logistic-regression"
            />

            <ProjectCard
              title="Predicting Breast Cancer – KNN Classification"
              link="https://www.kaggle.com/code/bashirabubakar/predicting-breast-cancer-knn-classification"
            />

            <ProjectCard
              title="Biomechanical Features of Orthopedic Patients"
              link="https://www.kaggle.com/code/bashirabubakar/biomechanical-features-of-orthopedic-patients"
            />

            <ProjectCard
              title="PrivateScribe Web Application"
              link="https://github.com/bashir-abubakar/privatescribe-web"
            />

          </div>
        </div>
      </div>
    </>
  );
}

/* ---------------------- */
/* Project Card Component */
/* ---------------------- */

function ProjectCard({ title, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 220 }}
      className="
        block glass-card 
        p-5 sm:p-6 
        rounded-2xl 
        border border-white/25 
        shadow-xl 
        text-white
      "
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <span className="text-blue-200 font-medium underline hover:text-blue-300">
        View Project →
      </span>
    </motion.a>
  );
}
