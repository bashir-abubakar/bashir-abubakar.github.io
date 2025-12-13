import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* SEO — React Helmet                                             */}
      {/* ------------------------------------------------------------- */}
      <Helmet>
        <title>Contact — Bashir Abubakar</title>

        <meta
          name="description"
          content="Get in touch with Bashir Abubakar for collaborations in AI, mental health analytics, NHS research, predictive modelling, NLP, and innovation projects."
        />

        <meta
          name="keywords"
          content="Contact Bashir Abubakar, NHS Data Analyst, AI for Health, Mental Health Analytics, NHS Research, Data Science Collaboration"
        />

        {/* OpenGraph */}
        <meta property="og:title" content="Contact — Bashir Abubakar" />
        <meta
          property="og:description"
          content="Reach out to Bashir for data science, NHS analytics, AI and health innovation collaborations."
        />
        <meta property="og:url" content="https://bashir-abubakar.github.io/contact" />
        <meta property="og:image" content="https://bashir-abubakar.github.io/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact — Bashir Abubakar" />
        <meta
          name="twitter:description"
          content="Connect with Bashir for AI, analytics, research and innovation projects."
        />
        <meta name="twitter:image" content="https://bashir-abubakar.github.io/og-image.png" />
      </Helmet>

      {/* ------------------------------------------------------------- */}
      {/* PAGE CONTENT                                                   */}
      {/* ------------------------------------------------------------- */}
      <div
        className="
        min-h-screen w-full
        bg-gradient-to-br from-[#0f1f3d] via-[#1e3d7b] to-[#4a78e2]
        pt-24 sm:pt-28 md:pt-32
        px-4 sm:px-6 pb-14
      "
      >
        <div className="max-w-3xl mx-auto">

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
            Contact
          </motion.h1>

          {/* CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="
            glass-card 
            text-white 
            p-6 sm:p-10 
            rounded-3xl shadow-2xl 
            leading-relaxed
          "
          >
            <p className="text-blue-100 text-base sm:text-lg mb-6">
              I’m always open to connecting about data science, mental health analytics,
              AI for health, research collaborations, and innovation work across the NHS.
            </p>

            <div className="space-y-6">

              {/* LinkedIn */}
              <ContactItem
                label="LinkedIn"
                value="linkedin.com/in/bashir-abubakar-61935417b/"
                link="https://linkedin.com/in/bashir-abubakar-61935417b/"
                icon="🔗"
              />

              {/* GitHub */}
              <ContactItem
                label="GitHub"
                value="github.com/bashir-abubakar"
                link="https://github.com/bashir-abubakar"
                icon="💻"
              />

            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

/* ----------------------- */
/* Contact Item Component  */
/* ----------------------- */

function ContactItem({ label, value, link, icon }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, x: 4 }}
      transition={{ type: "spring", stiffness: 230 }}
      className="block"
    >
      <div className="flex items-center space-x-4">
        <div className="text-2xl">{icon}</div>

        <div>
          <p className="text-blue-200 text-sm sm:text-base">{label}</p>
          <p className="underline text-white hover:text-blue-300 text-base sm:text-lg">
            {value}
          </p>
        </div>
      </div>
    </motion.a>
  );
}
