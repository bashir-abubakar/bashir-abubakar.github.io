import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        fixed top-6 left-1/2 -translate-x-1/2
        w-fit
        px-12 py-4
        rounded-full
        backdrop-blur-2xl
        bg-white/15
        border border-white/25
        shadow-[0_8px_28px_rgba(0,0,0,0.35)]
        z-50
        flex justify-center items-center gap-12
        pointer-events-auto
      "
    >
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </motion.nav>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        text-lg transition
        ${isActive ? "text-blue-200 font-semibold" : "text-white"}
      `
      }
    >
      {children}
    </NavLink>
  );
}
