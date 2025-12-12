import { motion } from "framer-motion";

export default function App() {
  return (
    <div
      className="
        min-h-screen w-full 
        bg-gradient-to-br from-[#0f1f3d] via-[#1e3d7b] to-[#4a78e2]
        pt-24 sm:pt-28 md:pt-32 
        px-4 sm:px-6 pb-14
      "
    >
      {/* MAIN PAGE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full max-w-7xl mx-auto">

        {/* LEFT COLUMN — BIO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="
            glass-card 
            text-white 
            p-6 sm:p-10 md:p-14 
            shadow-2xl rounded-3xl 
            leading-relaxed
            lg:col-span-2
          "
        >

          {/* PROFILE PICTURE */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <img
              src="/images/me.jpg"
              alt="Bashir Abubakar"
              className="
                w-28 h-28 sm:w-40 sm:h-40 
                object-cover rounded-full 
                shadow-xl border border-white/40
              "
            />
          </div>

          {/* HEADING */}
          <h1
            className="
              text-4xl sm:text-5xl font-bold 
              bg-gradient-to-r from-blue-200 to-blue-400 
              bg-clip-text text-transparent 
              mb-6 sm:mb-8 text-center
            "
          >
            Hi, I'm Bashir
          </h1>

          {/* BIO TEXT */}
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed">

            Bashir Abubakar is a Mental Health Data Analyst within the NHS who is dedicated
            to using data science, artificial intelligence and responsible innovation to 
            improve health outcomes. He specialises in advanced analytics, natural language 
            processing and predictive modelling to understand patient pathways, identify 
            inequalities and strengthen decision-making across urgent and emergency care.
            <br /><br />

            He is deeply committed to the intersection of sustainability, global health and 
            technology, exploring how AI can support climate-resilient health systems and 
            empower young people to shape data-driven solutions for their communities. His 
            work reflects a strong belief in ethical AI, public health equity and youth 
            leadership as catalysts for long-term systems change.
            <br /><br />

            Bashir has represented youth voices on major international platforms, including 
            serving as a delegate at COP28 and attending the One Young World Summit. These 
            global experiences have shaped his commitment to bridging data, climate 
            resilience and social justice, and to ensuring that emerging technologies 
            benefit communities fairly and sustainably.
            <br /><br />

            As a One Young World Ambassador, he actively champions initiatives that connect 
            innovation with public good. He collaborates across sectors, contributes to 
            research and health improvement projects, and engages in hackathons and 
            innovation programmes to accelerate meaningful change.
            <br /><br />

            Bashir is driven by a clear purpose: to build more equitable, sustainable and 
            future-ready systems through evidence, collaboration and responsible technology.
            <br /><br />

            <span className="font-semibold text-blue-200">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/bashir-abubakar-61935417b/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300"
              >
                linkedin.com/in/bashir-abubakar-61935417b/
              </a>
            </span>
          </p>
        </motion.div>

        {/* RIGHT COLUMN — BLOG POSTS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="
            glass-card 
            p-6 sm:p-8 
            rounded-3xl shadow-2xl 
            text-white 
            h-fit
          "
        >
          <h2
            className="
              text-2xl sm:text-3xl font-bold 
              bg-gradient-to-r from-blue-200 to-blue-400 
              bg-clip-text text-transparent 
              mb-4 sm:mb-6
            "
          >
            Recent Blog Posts
          </h2>

          <div className="space-y-6 sm:space-y-8">

            {/* NHS-R Blog */}
            <BlogCard
              title="Using NLP to Analyse Radiology Reports"
              source="NHS-R Community"
              link="https://nhsrcommunity.com/blog/radiology_nlp.html"
              thumbnail="/images/blog_nhsr.png"
            />

            {/* Medium Blog */}
            <BlogCard
              title="Reflections from the One Young World Summit"
              source="Medium"
              link="https://medium.com/@bashir.abubakar2009/reflections-from-the-one-young-world-summit-munich-2025-youth-leadership-mental-health-and-the-8d26509074d2"
              thumbnail="/images/blog_medium.png"
            />

          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* BLOG CARD COMPONENT */
/* ---------------------------------- */
function BlogCard({ title, source, link, thumbnail }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, x: 4 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="block"
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
          <h3 className="text-lg sm:text-xl font-semibold underline hover:text-blue-300">
            {title}
          </h3>
          <p className="text-blue-200 text-sm sm:text-base">{source}</p>
          <span className="text-blue-300 font-medium text-sm mt-1 inline-block">
            Read more →
          </span>
        </div>
      </div>
    </motion.a>
  );
}
