import { motion } from "framer-motion";

export default function ProjectCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/15 border border-white/25 shadow-xl text-white"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-3 text-blue-100">{desc}</p>
    </motion.div>
  );
}
