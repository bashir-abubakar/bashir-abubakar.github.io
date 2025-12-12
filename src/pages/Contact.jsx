import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 px-6 pb-16 
                    bg-gradient-to-br from-[#0f1f3d] via-[#1e3d7b] to-[#4a78e2]">

      {/* PAGE TITLE */}
      <h1 className="text-5xl font-bold text-center 
                     bg-gradient-to-r from-blue-200 to-blue-400 
                     bg-clip-text text-transparent mb-14">
        Contact
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="glass-card max-w-3xl mx-auto p-10 rounded-3xl shadow-2xl text-white"
      >
        <p className="text-lg text-blue-100 leading-relaxed mb-8">
          Feel free to reach out for collaborations, projects, research, or anything related 
          to AI, healthcare analytics, mental health data, or innovation.
        </p>

        <div className="space-y-6 text-blue-100 text-lg">

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/bashir-abubakar-61935417b/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 6 }}
            className="block underline hover:text-blue-300 font-semibold"
          >
            LinkedIn →<br />
            <span className="text-blue-200 font-normal">
              linkedin.com/in/bashir-abubakar-61935417b/
            </span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/bashir-abubakar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 6 }}
            className="block underline hover:text-blue-300 font-semibold"
          >
            GitHub →<br />
            <span className="text-blue-200 font-normal">
              github.com/bashir-abubakar
            </span>
          </motion.a>

        </div>

      </motion.div>
    </div>
  );
}
