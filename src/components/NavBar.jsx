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
    <>
      {/* FIXED MOBILE MENU BUTTON (always stays visible) */}
      <button
        className="md:hidden fixed top-6 left-4 z-[9999] glass-card px-6 py-3 rounded-full text-white shadow-xl backdrop-blur-xl"
        onClick={() => setIsOpen(true)}
      >
        Menu
      </button>

      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[5000] px-4">
        <nav className="glass-card px-10 py-4 rounded-full text-white shadow-2xl backdrop-blur-xl space-x-10">
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
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Left Menu */}
            <motion.div
              initial={{ x: -260, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -260, opacity: 0 }}
              transition={{ type: "spring", stiffness: 110 }}
              className="fixed top-0 left-0 h-full w-72 glass-card p-8 pt-16 rounded-r-3xl shadow-2xl text-white z-[9500]"
            >
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
    </>
  );
}
