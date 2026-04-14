"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ChevronDown,
  GraduationCap,
  Award,
} from "lucide-react";
import profilePic from "../../public/ProfilePic.jpg";

const HeroSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left — Text */}
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="status-badge mb-6">
                <span className="dot" />
                Open to Opportunities
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Zhicheng Li</span>
              <br />
              <span className="text-[var(--muted-foreground)]">
                I build things that matter.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-[var(--muted-foreground)] max-w-xl mb-4 leading-relaxed"
            >
              Aspiring Software Engineer &amp; Machine Learning Engineer.
              Computer Science student at the{" "}
              <span className="text-[var(--foreground)] font-medium">
                University of Florida
              </span>{" "}
              (B.S., GPA: 3.89), passionate about building elegant solutions
              to real-world problems.
            </motion.p>

            {/* Education & Awards compact strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted-foreground)] mb-4"
            >
              <span className="flex items-center gap-1.5">
                <GraduationCap size={14} className="text-[var(--gradient-start)]" />
                B.S. Computer Science — May 2027
              </span>
              <span className="flex items-center gap-1.5">
                <Award size={14} className="text-[var(--accent)]" />
                Dean&apos;s List &middot; Nvidia Deep Learning Cert
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex items-center gap-4 text-sm text-[var(--muted-foreground)] mb-8"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                Gainesville, FL
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} />
                zhicheng19edu@gmail.com
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="btn-primary"
                id="hero-view-work"
              >
                View My Work
                <ChevronDown size={16} />
              </a>
              <a
                href="#contact"
                className="btn-outline"
                id="hero-contact"
              >
                Get in Touch
              </a>
              <div className="flex items-center gap-3 ml-2">
                <a
                  href="https://github.com/zbanks23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  aria-label="GitHub"
                  id="hero-github"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/li-zhicheng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  aria-label="LinkedIn"
                  id="hero-linkedin"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] opacity-20 blur-xl" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src={profilePic}
                  alt="Zhicheng Li"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
