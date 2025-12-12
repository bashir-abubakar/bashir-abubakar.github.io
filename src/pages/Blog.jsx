import { motion } from "framer-motion";

export default function Blog() {
  return (
    <div className="min-h-screen pt-32 px-6 pb-16 
                    bg-gradient-to-br from-[#0f1f3d] via-[#1e3d7b] to-[#4a78e2]">

      {/* PAGE TITLE */}
      <h1 className="text-5xl font-bold text-center 
                     bg-gradient-to-r from-blue-200 to-blue-400 
                     bg-clip-text text-transparent mb-14">
        Blog
      </h1>

      {/* BLOG LIST */}
      <div className="grid gap-10 max-w-4xl mx-auto">

        {/* NHS-R COMMUNITY BLOG */}
        <BlogCard
          title="Using NLP to Analyse Radiology Reports"
          desc="A practical exploration of natural language processing applied to radiology report text to improve insight generation across clinical pathways."
          link="https://nhsrcommunity.com/blog/radiology_nlp.html"
          source="NHS-R Community"
        />

        {/* MEDIUM BLOG */}
        <BlogCard
          title="Reflections from the One Young World Summit, Munich 2025"
          desc="A reflective piece on youth leadership, mental health innovation, ethical AI, and global collaboration for a fair and sustainable future."
          link="https://medium.com/@bashir.abubakar2009/reflections-from-the-one-young-world-summit-munich-2025-youth-leadership-mental-health-and-the-8d26509074d2"
          source="Medium"
        />

      </div>
    </div>
  );
}

/* CLEAN BLOG CARD COMPONENT (NO THUMBNAILS) */
function BlogCard({ title, desc, link, source }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="glass-card block p-8 rounded-2xl shadow-xl border border-white/20 
                 backdrop-blur-xl text-white hover:border-blue-300/40"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-blue-100 text-sm mb-4">{desc}</p>
      <p className="text-blue-300 font-medium mb-3">{source}</p>
      <span className="text-blue-300 font-medium">Read more →</span>
    </motion.a>
  );
}
