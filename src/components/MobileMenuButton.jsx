import { createPortal } from "react-dom";

export default function MobileMenuButton({ onClick }) {
  return createPortal(
    <button
      onClick={onClick}
      className="
        md:hidden 
        fixed top-6 left-4 
        z-[99999]
        glass-card px-6 py-3 rounded-full
        text-white shadow-xl backdrop-blur-xl
      "
    >
      Menu
    </button>,
    document.body
  );
}
