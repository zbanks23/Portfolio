"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActive(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass" : ""
      }`}
    >
      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("about")}
          className="text-xl font-bold tracking-tight"
          id="nav-logo"
        >
          <span className="gradient-text">ZL</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className={`nav-link ${active === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Zli_Resume_Bank.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs py-2 px-4"
            id="nav-resume"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          id="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-white rounded"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 bg-white rounded"
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            className="block w-5 h-0.5 bg-white rounded"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden nav-glass border-t border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`nav-link text-left ${
                    active === item.id ? "active" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/Zli_Resume_Bank.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm py-2 px-4 text-center"
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
