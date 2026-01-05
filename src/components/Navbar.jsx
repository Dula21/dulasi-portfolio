import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-#4A2C32 backdrop-blur-lg border-b border-[var(--border-soft)]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            Dulasi<span className="text-[var(--accent-main)]">.tech</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-text-[var(--accent-main)] hove:text-[var(--text-main)]"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-text-[var(--accent-main)] hove:text-[var(--text-main)]"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-text-[var(--accent-main)] hove:text-[var(--text-main)]"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-text-[var(--accent-main)] hove:text-[var(--text-main)]"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};