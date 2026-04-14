"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Phone } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Send size={20} className="text-[var(--gradient-start)]" />
            <p className="text-sm font-medium tracking-widest uppercase text-[var(--gradient-start)]">
              Contact
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed mb-12 max-w-lg mx-auto">
            I&apos;m always open to new opportunities, collaborations, and
            conversations. Whether you have a project idea, a job opportunity,
            or just want to say hi — don&apos;t hesitate to reach out!
          </p>

          <motion.a
            href="mailto:zhicheng19edu@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary text-lg px-10 py-5 mx-auto"
            id="contact-email-btn"
          >
            <Mail size={20} />
            Say Hello
          </motion.a>

          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-[var(--muted-foreground)]">
            <Phone size={14} />
            <span>754-302-4769</span>
          </div>

          <div className="flex items-center justify-center gap-8 mt-8">
            <a
              href="https://github.com/zbanks23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-300"
              aria-label="GitHub"
              id="contact-github"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/li-zhicheng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-300"
              aria-label="LinkedIn"
              id="contact-linkedin"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:zhicheng19edu@gmail.com"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-300"
              aria-label="Email"
              id="contact-email"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer integrated inside the full-screen section */}
      <div className="w-full py-6 border-t border-white/5">
        <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} Zhicheng Li. Built with Next.js &
            Framer Motion.
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            Designed with ♥ in Gainesville, FL
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
