import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
      {/* DESKTOP NAV */}
      <nav className="hidden md:flex glass-card px-10 py-4 rounded-full text-white shadow-2xl space-x-10 backdrop-blur-xl">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`text-lg transition ${
              location.pathname === item.path
                ? "text-blue-200 font-semibold"
                : "hover:text-blue-300"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* MOBILE NAV BUTTON */}
      <button
        className="md:hidden glass-card px-6 py-3 rounded-full text-white shadow-xl backdrop-blur-xl"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background dim */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* LEFT-SIDE MENU PANEL */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 left-0 h-full w-72 glass-card p-8 pt-14 rounded-r-3xl shadow-2xl text-white z-50"
            >
              {/* Close button */}
              <button
                className="absolute top-5 right-5 text-3xl text-white/80 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>

              <div className="flex flex-col space-y-6 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl transition ${
                      location.pathname === item.path
                        ? "text-blue-200 font-semibold"
                        : "hover:text-blue-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
