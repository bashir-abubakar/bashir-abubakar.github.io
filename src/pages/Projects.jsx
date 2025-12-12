import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 px-6 pb-16 
                    bg-gradient-to-br from-[#0f1f3d] via-[#1e3d7b] to-[#4a78e2]">

      <h1 className="text-5xl font-bold text-center 
                     bg-gradient-to-r from-blue-200 to-blue-400 
                     bg-clip-text text-transparent mb-14">
        Projects
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

        {/* HR Analytics – Attrition */}
        <ProjectTile
          title="Human Resources Analytics: Employee Attrition"
          desc="Machine learning analysis exploring key drivers of employee turnover."
          link="https://www.kaggle.com/code/bashirabubakar/human-resources-analytics-employee-attrition"
        />

        {/* Breast Cancer Prediction – Logistic Regression */}
        <ProjectTile
          title="Breast Cancer Prediction (Logistic Regression)"
          desc="A logistic regression model predicting malignant vs benign tumours."
          link="https://www.kaggle.com/code/bashirabubakar/predicting-breast-cancer-logistic-regression"
        />

        {/* Breast Cancer Prediction – KNN */}
        <ProjectTile
          title="Breast Cancer Prediction (KNN)"
          desc="A KNN classifier applied to breast cancer diagnostic features."
          link="https://www.kaggle.com/code/bashirabubakar/predicting-breast-cancer-knn-classification"
        />

        {/* Orthopedic Biomechanics Project */}
        <ProjectTile
          title="Biomechanical Features of Orthopedic Patients"
          desc="A classification project using biomechanical characteristics to identify orthopaedic pathologies."
          link="https://www.kaggle.com/code/bashirabubakar/biomechanical-features-of-orthopedic-patients"
        />

        {/* PrivateScribe Web App */}
        <ProjectTile
          title="PrivateScribe Web Application"
          desc="A privacy-first transcription and summarisation tool built with modern web frameworks."
          link="https://github.com/bashir-abubakar/privatescribe-web"
        />

      </div>
    </div>
  );
}

/* CLEAN GLASS CARD WITHOUT THUMBNAILS */
function ProjectTile({ title, desc, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="glass-card block p-6 rounded-2xl shadow-xl border border-white/20 
                 backdrop-blur-xl text-white hover:border-blue-300/40"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-blue-100 text-sm mb-4">{desc}</p>
      <span className="text-blue-300 font-medium">View Project →</span>
    </motion.a>
  );
}
