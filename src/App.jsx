import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function App() {
  const navigate = useNavigate();

  //
  // -----------------------------------------------------
  // FIX FOR GITHUB PAGES REFRESH 404 ROUTE HANDLING
  // -----------------------------------------------------
  //
  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");
    if (redirect) {
      sessionStorage.removeItem("redirect");

      const cleaned = redirect.replace(window.location.origin, "");
      navigate(cleaned, { replace: true });
    }
  }, [navigate]);

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* SEO: PAGE-LEVEL METADATA USING REACT HELMET                     */}
      {/* ---------------------------------------------------------------- */}
      <Helmet>
        <title>
          Bashir Abubakar — NHS Mental Health Data Analyst & AI Practitioner
        </title>

        <meta
          name="description"
          content="Welcome to the official website of Bashir Abubakar — NHS Mental Health Data Analyst specialising in AI, NLP, predictive modelling, sustainability, climate resilience and healthcare innovation."
        />

        <meta
          name="keywords"
          content="Bashir Abubakar, NHS, Mental Health Data Analyst, Data Scientist, AI, Machine Learning, NLP, Predictive Modelling, Sustainability, Youth Leadership, Climate Resilience, Healthcare Analytics"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Bashir Abubakar — Data Scientist & Mental Health Analyst"
        />
        <meta
          property="og:description"
          content="Portfolio, projects, research and insights from Bashir Abubakar — applied AI specialist and NHS Mental Health Data Analyst."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bashir-abubakar.github.io/" />
        <meta property="og:image" content="https://bashir-abubakar.github.io/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bashir Abubakar — Data Scientist & Analyst"
        />
        <meta
          name="twitter:description"
          content="NHS Mental Health Data Analyst applying AI and analytics for public good."
        />
        <meta
          name="twitter:image"
          content="https://bashir-abubakar.github.io/og-image.png"
        />
      </Helmet>

      {/* ---------------------------------------------------------------- */}
      {/* PAGE LAYOUT                                                     */}
      {/* ---------------------------------------------------------------- */}
      <div
        className="min-h-screen flex items-start justify-center pt-32 px-6 pb-10 
        bg-gradient-to-br from-[#0f1f3d] via-[#1e3d7b] to-[#4a78e2]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full max-w-7xl">

          {/* LEFT COLUMN — PROFILE + BIO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="glass-card lg:col-span-2 text-white p-10 md:p-14 shadow-2xl rounded-3xl leading-relaxed"
          >
            {/* PROFILE PHOTO */}
            <div className="flex justify-center mb-10">
              <img 
                src="/images/me.jpg" 
                alt="Bashir Abubakar"
                className="w-40 h-40 object-cover rounded-full shadow-xl border border-white/40 backdrop-blur-xl"
              />
            </div>

            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-200 to-blue-400 
                           bg-clip-text text-transparent mb-8 text-center">
              Hi, I'm Bashir
            </h1>

            {/* -------------------------------------------------------------- */}
            {/* FULL BIO — NOTHING OMITTED                                    */}
            {/* -------------------------------------------------------------- */}
            <p className="text-blue-100 text-lg leading-relaxed">

              Bashir Abubakar is a Mental Health Data Analyst within the NHS who is
              dedicated to using data science, artificial intelligence, and responsible
              innovation to improve health outcomes. His work focuses on applying advanced
              analytics, natural language processing, and predictive modelling to understand
              patient pathways, identify inequalities, and strengthen decision-making across
              urgent and emergency care settings.
              <br /><br />

              He is deeply committed to the intersection of sustainability, global health,
              and technology—exploring how AI can support climate-resilient health systems
              and empower young people to shape data-driven solutions for their communities.
              His work reflects a belief in ethical AI, public health equity, and youth
              leadership as catalysts for long-term systems change.
              <br /><br />

              Bashir has represented youth voices on international platforms, including
              serving as a delegate at COP28 and attending the One Young World Summit.
              These global experiences have shaped his commitment to bridging data,
              climate resilience, and social justice—and ensuring emerging technologies
              benefit communities fairly and sustainably.
              <br /><br />

              As a One Young World Ambassador, he champions initiatives that connect
              innovation with public good. He collaborates across sectors, contributes to
              research and health improvement programmes, and participates in hackathons
              and innovation challenges to accelerate meaningful change.
              <br /><br />

              His broad portfolio spans applied AI, NHS service improvement, global youth
              advocacy, and sustainable development. Bashir is driven by a clear purpose:
              to build more equitable, sustainable, and future-ready systems through evidence,
              collaboration, and responsible technology.
              <br /><br />

              <span className="font-semibold text-blue-200">
                LinkedIn:
                <a 
                  href="https://www.linkedin.com/in/bashir-abubakar-61935417b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-300 ml-1"
                >
                  linkedin.com/in/bashir-abubakar-61935417b/
                </a>
              </span>
            </p>
          </motion.div>

          {/* RIGHT COLUMN — BLOG POSTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="glass-card p-8 rounded-3xl shadow-2xl text-white h-fit"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-blue-400 
                           bg-clip-text text-transparent mb-6">
              Recent Blog Posts
            </h2>

            <div className="space-y-8">

              {/* NHS-R POST */}
              <motion.a 
                href="https://nhsrcommunity.com/blog/radiology_nlp.html"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, x: 4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="block"
              >
                <div className="flex items-start space-x-4">
                  <img 
                    src="/images/blog_nhsr.png" 
                    alt="NHS-R blog"
                    className="w-20 h-20 rounded-xl object-cover shadow-lg border border-white/30"
                  />
                  <div>
                    <h3 className="text-xl font-semibold underline hover:text-blue-300">
                      Using NLP to Analyse Radiology Reports
                    </h3>
                    <p className="text-blue-200 text-base">NHS-R Community</p>
                    <span className="text-blue-300 font-medium text-sm mt-1 inline-block">
                      Read more →
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* MEDIUM POST */}
              <motion.a 
                href="https://medium.com/@bashir.abubakar2009/reflections-from-the-one-young-world-summit-munich-2025-youth-leadership-mental-health-and-the-8d26509074d2"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, x: 4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="block"
              >
                <div className="flex items-start space-x-4">
                  <img 
                    src="/images/blog_medium.png" 
                    alt="Medium blog"
                    className="w-20 h-20 rounded-xl object-cover shadow-lg border border-white/30"
                  />
                  <div>
                    <h3 className="text-xl font-semibold underline hover:text-blue-300">
                      Reflections from the One Young World Summit
                    </h3>
                    <p className="text-blue-200 text-base">Medium</p>
                    <span className="text-blue-300 font-medium text-sm mt-1 inline-block">
                      Read more →
                    </span>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
