import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* SEO — React Helmet for Blog Page                              */}
      {/* ------------------------------------------------------------- */}
      <Helmet>
        <title>Blog — Bashir Abubakar</title>

        <meta
          name="description"
          content="Read articles and reflections by Bashir Abubakar on AI, mental health analytics, NLP, sustainability, leadership and healthcare innovation."
        />

        <meta
          name="keywords"
          content="Bashir Abubakar Blog, AI Blog, Healthcare Analytics Blog, NHS Data Science, NLP Articles, Predictive Modelling, Mental Health Analytics"
        />

        {/* OpenGraph */}
        <meta property="og:title" content="Blog — Bashir Abubakar" />
        <meta
          property="og:description"
          content="Explore Bashir's latest blog posts on AI, healthcare, NLP, and leadership."
        />
        <meta property="og:url" content="https://bashir-abubakar.github.io/blog" />
        <meta property="og:image" content="https://bashir-abubakar.github.io/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog — Bashir Abubakar" />
        <meta
          name="twitter:description"
          content="Insights, research, and reflections from Bashir on AI, NLP and healthcare analytics."
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
            Blog
          </motion.h1>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

            <BlogCard
              title="Using NLP to Analyse Radiology Reports"
              source="NHS-R Community"
              link="https://nhsrcommunity.com/blog/radiology_nlp.html"
              thumbnail="/images/blog_nhsr.png"
            />

            <BlogCard
              title="Reflections from the One Young World Summit"
              source="Medium"
              link="https://medium.com/@bashir.abubakar2009/reflections-from-the-one-young-world-summit-munich-2025-youth-leadership-mental-health-and-the-8d26509074d2"
              thumbnail="/images/blog_medium.png"
            />

          </div>
        </div>
      </div>
    </>
  );
}

/* ----------------------- */
/* Blog Card Component     */
/* ----------------------- */

function BlogCard({ title, source, link, thumbnail }) {
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
      <div className="flex items-start space-x-4">
        <img
          src={thumbnail}
          alt={title}
          className="
            w-16 h-16 sm:w-20 sm:h-20
            rounded-xl object-cover
            shadow-lg border border-white/30
          "
        />
        <div>
          <h3 className="text-xl font-semibold leading-tight">{title}</h3>
          <p className="text-blue-200 text-sm sm:text-base">{source}</p>

          <span className="text-blue-300 font-medium text-sm mt-1 inline-block underline">
            Read more →
          </span>
        </div>
      </div>
    </motion.a>
  );
}
