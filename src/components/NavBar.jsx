import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <>
      {/* TOP NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          flex items-center justify-between
          w-[92%] sm:w-max
          px-4 py-2
          rounded-full
          backdrop-blur-2xl bg-white/15 border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        "
      >
        {/* MOBILE MENU BUTTON */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden sm:flex items-center gap-10 text-white text-lg">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>
      </motion.nav>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="
              sm:hidden fixed top-20 left-1/2 -translate-x-1/2
              w-[92%] rounded-2xl px-6 py-4 
              backdrop-blur-2xl bg-white/20 border border-white/20
              shadow-xl text-white text-lg space-y-4 z-40
            "
          >
            <MobileNavItem to="/" label="Home" />
            <MobileNavItem to="/about" label="About" />
            <MobileNavItem to="/projects" label="Projects" />
            <MobileNavItem to="/blog" label="Blog" />
            <MobileNavItem to="/contact" label="Contact" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-blue-200 font-semibold" : "text-white"
      }
    >
      <motion.span
        whileHover={{ scale: 1.08, y: -1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="hover:text-blue-200"
      >
        {children}
      </motion.span>
    </NavLink>
  );
}

function MobileNavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className="block w-full py-2 text-white hover:text-blue-200 text-center"
    >
      {label}
    </NavLink>
  );
}
