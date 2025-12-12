import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="
        min-h-screen w-full 
        bg-gradient-to-br from-[#0f1f3d] via-[#1e3d7b] to-[#4a78e2]
        pt-24 sm:pt-28 md:pt-32 
        px-4 sm:px-6 pb-14
      "
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="
            glass-card 
            text-white 
            p-6 sm:p-10 md:p-14 
            shadow-2xl rounded-3xl 
            leading-relaxed
          "
        >
          <h1
            className="
              text-4xl sm:text-5xl font-bold 
              bg-gradient-to-r from-blue-200 to-blue-400 
              bg-clip-text text-transparent 
              mb-6 sm:mb-8 text-center
            "
          >
            About Me
          </h1>

          <p className="text-blue-100 text-base sm:text-lg leading-relaxed space-y-4">
            <span>
              Bashir Abubakar is a Mental Health Data Analyst within the NHS who is 
              dedicated to using data science, artificial intelligence and responsible 
              innovation to improve health outcomes. He specialises in advanced analytics, 
              natural language processing and predictive modelling to understand patient 
              pathways, identify inequalities and strengthen decision-making across urgent 
              and emergency care.
            </span>

            <span>
              He is deeply committed to the intersection of sustainability, global health 
              and technology, exploring how AI can support climate-resilient health systems 
              and empower young people to shape data-driven solutions for their communities. 
              His work reflects a strong belief in ethical AI, public health equity and youth 
              leadership as catalysts for long-term systems change.
            </span>

            <span>
              Bashir has represented youth voices on major international platforms, 
              including serving as a delegate at COP28 and attending the One Young World 
              Summit. These global experiences have shaped his commitment to bridging data, 
              climate resilience and social justice, and ensuring that emerging technologies 
              benefit communities fairly and sustainably.
            </span>

            <span>
              As a One Young World Ambassador, he actively champions initiatives that 
              connect innovation with public good. He collaborates across sectors, 
              contributes to research and health improvement projects, and engages in 
              hackathons and innovation programmes to accelerate meaningful change.
            </span>

            <span>
              Bashir is driven by a clear purpose: to build more equitable, sustainable and 
              future-ready systems through evidence, collaboration and responsible 
              technology.
            </span>

            <span className="block font-semibold text-blue-200 mt-4">
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
      </div>
    </div>
  );
}
